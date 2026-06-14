/**
 * Generate learning-plan pages from scripts/page-tree.js
 * Also updates NAV + PAGE_TREE block in assets/js/main.js
 *
 * Run: node scripts/generate-pages.js
 */
const fs = require('fs');
const path = require('path');
const { categories, getStats, pageHref } = require('./page-tree');
const { escapeHtml, INTERVIEW_TOPICS } = require('./content-builder');
const { buildIndexContent: buildAgenticIndexContent } = require('./agentic-ai-rich-content');
const { buildTopicIndexContent } = require('./rich-content');
const { buildIndexPathDiagram } = require('./rich-content/flow-diagrams');

const ROOT = path.join(__dirname, '..');
const TEMPLATE_PATH = path.join(ROOT, 'templates', 'page.html');
const MAIN_JS_PATH = path.join(ROOT, 'assets', 'js', 'main.js');
const STATS_PATH = path.join(ROOT, 'scripts', 'generated-stats.json');

const template = fs.readFileSync(TEMPLATE_PATH, 'utf8');

function categoryHref(categoryId) {
  return `${categoryId}/index.html`;
}

function pageDepth(categoryId, topicId, slug, isCategoryLanding = false) {
  if (isCategoryLanding) return 1;
  return slug === 'index' ? 2 : 3;
}

function assetPrefix(depth) {
  return depth <= 0 ? '' : '../'.repeat(depth);
}

function buildBreadcrumb(category, topic, page, prefix, isCategoryLanding = false) {
  if (isCategoryLanding) {
    return `<a href="${prefix}index.html">Home</a><span class="breadcrumb-sep">/</span><span aria-current="page">${escapeHtml(category.label)}</span>`;
  }
  const parts = [
    `<a href="${prefix}index.html">Home</a>`,
    `<a href="${prefix}${categoryHref(category.id)}">${escapeHtml(category.label)}</a>`,
    `<a href="${prefix}${pageHref(category.id, topic.id, 'index')}">${escapeHtml(topic.label)}</a>`,
  ];
  if (page.slug !== 'index') {
    parts.push(`<span aria-current="page">${escapeHtml(page.label)}</span>`);
  } else {
    parts[parts.length - 1] = `<span aria-current="page">${escapeHtml(topic.label)}</span>`;
  }
  return parts.join('<span class="breadcrumb-sep">/</span>');
}

function buildProgressBar(page) {
  if (!page.step || page.slug === 'index') return '';
  const pct = Math.round((page.step / page.totalSteps) * 100);
  return `
      <div class="learning-progress" aria-label="Learning path progress">
        <div class="learning-progress-header">
          <span class="phase-badge phase-${(page.phase || 'beginner').toLowerCase()}">${escapeHtml(page.phase || '')}</span>
          <span class="read-time">~${page.readMinutes || 5} min read</span>
        </div>
        <div class="progress-bar-track" role="progressbar" aria-valuenow="${page.step}" aria-valuemin="1" aria-valuemax="${page.totalSteps}" aria-label="Progress through this learning path">
          <div class="progress-bar-fill" style="width:${pct}%"></div>
        </div>
      </div>`;
}

function buildPrerequisites(page, prefix) {
  if (!page.prerequisites || !page.prerequisites.length) {
    return '<p class="prereq-none">No prerequisites — this is an early step in the path.</p>';
  }
  const items = page.prerequisites
    .map((p) => `<li><a href="${prefix}${escapeHtml(p.href)}">${escapeHtml(p.label)}</a></li>`)
    .join('');
  return `<ul class="prereq-list">${items}</ul>`;
}

function buildObjectives(objectives) {
  if (!objectives || !objectives.length) return '';
  const items = objectives.map((o) => `<li>${escapeHtml(o)}</li>`).join('');
  return `<ul class="checklist objectives-list">${items}</ul>`;
}

function buildConcepts(concepts) {
  if (!concepts || !concepts.length) return '';
  const items = concepts.map((c) => `<li>${escapeHtml(c)}</li>`).join('');
  return `<ul class="concept-list">${items}</ul>`;
}

function buildLearnItems(items) {
  if (!items || !items.length) return '';
  const lis = items.map((i) => `<li><span class="check-icon" aria-hidden="true">✓</span> ${escapeHtml(i)}</li>`).join('');
  return `<ul class="learn-checklist">${lis}</ul>`;
}

function buildOverview(overview) {
  if (!overview || !overview.length) return '';
  return overview.map((p) => `<p>${p}</p>`).join('\n        ');
}

function buildCodeExample(codeExample) {
  if (!codeExample) return '';
  return `
      <section class="learning-section code-section" id="code-example">
        <h2>Code Example</h2>
        <pre class="code-block"><code class="language-${escapeHtml(codeExample.lang)}">${escapeHtml(codeExample.code)}</code></pre>
      </section>`;
}

function buildBulletList(items) {
  if (!items || !items.length) return '';
  const lis = items.map((i) => `<li>${i}</li>`).join('');
  return `<ul>${lis}</ul>`;
}

function buildArchitectureSection(notes) {
  if (!notes || !notes.length) return '';
  const blocks = notes.map((n) => `<div class="de-architecture-block">${n}</div>`).join('');
  return `
      <section class="learning-section" id="architecture">
        <h2>Architecture Notes</h2>
        ${blocks}
      </section>`;
}

function buildNotesGrid(bestPractices, pitfalls, interviewTips) {
  if (!bestPractices && !pitfalls && !interviewTips) return '';
  let cards = '';
  if (bestPractices?.length) {
    cards += `<div class="de-note-card"><h3>Best Practices</h3>${buildBulletList(bestPractices)}</div>`;
  }
  if (pitfalls?.length) {
    cards += `<div class="de-note-card"><h3>Common Pitfalls</h3>${buildBulletList(pitfalls)}</div>`;
  }
  if (interviewTips?.length) {
    cards += `<div class="de-note-card"><h3>Interview Preparation</h3>${buildBulletList(interviewTips)}</div>`;
  }
  return `
      <section class="learning-section" id="production-notes">
        <h2>Production Notes</h2>
        <div class="de-notes-grid">${cards}</div>
      </section>`;
}

function buildDetailedNotesSection(notes) {
  if (!notes || !notes.length) return '';
  const paras = notes.map((n) => `<p>${n}</p>`).join('\n        ');
  return `
      <section class="learning-section de-detailed-notes" id="detailed-notes">
        <h2>Detailed Notes</h2>
        ${paras}
      </section>`;
}

function buildFlowDiagramSection(flowDiagram) {
  if (!flowDiagram || !flowDiagram.mermaid) return '';
  const title = flowDiagram.title || 'Flow Diagram';
  const desc = flowDiagram.description
    ? `<p class="flow-diagram-desc">${escapeHtml(flowDiagram.description)}</p>`
    : '';
  return `
      <section class="learning-section flow-diagram-section" id="flow-diagram">
        <h2>${escapeHtml(title)}</h2>
        ${desc}
        <div class="flow-diagram-container">
          <pre class="mermaid">${flowDiagram.mermaid}</pre>
        </div>
      </section>`;
}

function buildMermaidScripts(prefix) {
  return `
    <script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>
    <script>
      document.addEventListener('DOMContentLoaded', function () {
        if (typeof mermaid !== 'undefined') {
          mermaid.initialize({
            startOnLoad: true,
            theme: 'neutral',
            securityLevel: 'loose',
            themeVariables: {
              primaryColor: '#e8f4fc',
              primaryTextColor: '#1e293b',
              primaryBorderColor: '#94a3b8',
              lineColor: '#64748b',
              secondaryColor: '#f1f5f9',
              tertiaryColor: '#ffffff',
              background: '#ffffff',
              mainBkg: '#ffffff',
              nodeBorder: '#94a3b8',
              clusterBkg: '#f8fafc',
              titleColor: '#0f172a',
              edgeLabelBackground: '#ffffff'
            }
          });
        }
      });
    </script>`;
}

function buildAnimationSection(animation) {
  if (!animation) return '';
  const stepsJson = JSON.stringify(animation.steps).replace(/"/g, '&quot;');
  const pills = animation.steps
    .map((s, i) => `<span class="de-anim-step-pill" data-step-index="${i}">${i + 1}. ${escapeHtml(s)}</span>`)
    .join('');
  return `
      <section class="learning-section de-anim-section" id="animation"
        data-anim-type="${escapeHtml(animation.type)}"
        data-steps="${stepsJson}">
        <div class="de-anim-header">
          <h2>Interactive Animation</h2>
          <div class="de-anim-controls">
            <button type="button" class="de-anim-btn" data-action="play">▶ Play</button>
            <button type="button" class="de-anim-btn" data-action="pause">⏸ Pause</button>
            <button type="button" class="de-anim-btn" data-action="reset">↺ Reset</button>
          </div>
        </div>
        <p class="de-anim-desc">${escapeHtml(animation.description)}</p>
        <div class="de-anim-canvas" aria-label="${escapeHtml(animation.title)}"></div>
        <div class="de-anim-steps">${pills}</div>
      </section>`;
}

function buildInterviewQA(interviewQA) {
  if (!interviewQA || !interviewQA.length) return '';
  const items = interviewQA
    .map(
      (qa) => `
        <div class="interview-qa-item">
          <h3 class="qa-question">Q${qa.num}: ${escapeHtml(qa.question)}</h3>
          <p class="qa-answer"><strong>Answer:</strong> ${escapeHtml(qa.answer)}</p>
        </div>`
    )
    .join('');
  return `
      <section class="learning-section" id="interview-qa">
        <h2>Interview Questions &amp; Answers</h2>
        <div class="interview-qa-list">${items}</div>
      </section>`;
}

function buildStepNav(page, prefix) {
  let html = '<nav class="step-nav" aria-label="Learning path navigation">';
  if (page.prevHref && page.prevLabel) {
    html += `<a href="${prefix}${escapeHtml(page.prevHref)}" class="step-nav-link step-nav-prev">
        <span class="step-nav-label">← Previous</span>
        <span class="step-nav-title">${escapeHtml(page.prevLabel)}</span>
      </a>`;
  } else {
    html += '<span class="step-nav-spacer"></span>';
  }
  if (page.nextHref && page.nextLabel) {
    html += `<a href="${prefix}${escapeHtml(page.nextHref)}" class="step-nav-link step-nav-next">
        <span class="step-nav-label">Next →</span>
        <span class="step-nav-title">${escapeHtml(page.nextLabel)}</span>
      </a>`;
  }
  html += '</nav>';
  return html;
}

function buildExternalBody(category, topic, page, prefix) {
  return `
      <article class="learning-plan external-link-page">
        ${buildProgressBar(page)}
        <section class="learning-section" id="objective">
          <h2>Learning Objective</h2>
          ${buildObjectives(page.objectives)}
        </section>
        <section class="learning-section" id="overview">
          <h2>Overview</h2>
          ${buildOverview(page.overview)}
        </section>
        <div class="external-cta">
          <a href="${prefix}${page.href}" class="btn btn-primary">Open ${escapeHtml(page.label)} Guide ↗</a>
        </div>
        ${buildStepNav(page, prefix)}
      </article>`;
}

function isRichLearningPage(category, topic, page) {
  if (page.slug === 'index' || page.href) return false;
  if (INTERVIEW_TOPICS.has(topic.id)) return false;
  return true;
}

function buildLearningBody(category, topic, page, prefix) {
  if (page.href) return buildExternalBody(category, topic, page, prefix);

  const isRich = isRichLearningPage(category, topic, page);

  return `
      <article class="learning-plan">
        ${buildProgressBar(page)}
        <section class="learning-section" id="objective">
          <h2>Learning Objective</h2>
          ${buildObjectives(page.objectives)}
        </section>
        <section class="learning-section" id="prerequisites">
          <h2>Prerequisites</h2>
          ${buildPrerequisites(page, prefix)}
        </section>
        <section class="learning-section" id="overview">
          <h2>Overview</h2>
          ${buildOverview(page.overview)}
        </section>
        ${isRich ? buildFlowDiagramSection(page.flowDiagram) : ''}
        <section class="learning-section" id="key-concepts">
          <h2>Key Concepts</h2>
          ${buildConcepts(page.concepts)}
        </section>
        ${isRich ? buildArchitectureSection(page.architectureNotes) : ''}
        ${isRich ? buildDetailedNotesSection(page.detailedNotes) : ''}
        <section class="learning-section" id="what-youll-learn">
          <h2>What You&apos;ll Learn</h2>
          ${buildLearnItems(page.learnItems)}
        </section>
        ${isRich ? buildNotesGrid(page.bestPractices, page.pitfalls, page.interviewTips) : ''}
        ${buildCodeExample(page.codeExample)}
        ${buildInterviewQA(page.interviewQA)}
        ${buildStepNav(page, prefix)}
      </article>`;
}

function buildCategoryLandingBody(category) {
  const cards = category.topics
    .map(
      (topic) => `
      <a href="${topic.id}/index.html" class="submodule-card">
        <h3>${escapeHtml(topic.label)}</h3>
        <p>${escapeHtml(topic.pages[0]?.description || `${topic.label} learning path`)}</p>
        <span class="submodule-card-meta">Structured learning path</span>
      </a>`
    )
    .join('');

  return `
      <article class="category-landing">
        <p class="lead">Explore <strong>${escapeHtml(category.label)}</strong> — ${category.topics.length} structured learning paths from fundamentals through advanced production patterns.</p>
        <div class="category-stats">
          <div class="stat-pill"><strong>${category.topics.length}</strong> learning paths</div>
        </div>
        <section class="submodule-grid-section">
          <h2>${escapeHtml(category.label)} Learning Paths</h2>
          <div class="submodule-card-grid">${cards}</div>
        </section>
      </article>`;
}

function renderCategoryLanding(category) {
  const depth = pageDepth(category.id, null, 'index', true);
  const prefix = assetPrefix(depth);
  const totalSteps = category.topics.reduce((sum, t) => sum + t.pages.length, 0);

  return template
    .replace(/\{\{PAGE_ID\}\}/g, category.id)
    .replace(/\{\{CATEGORY_ID\}\}/g, category.id)
    .replace(/\{\{TOPIC_ID\}\}/g, '')
    .replace(/\{\{SLUG\}\}/g, 'index')
    .replace(/\{\{STEP_META\}\}/g, '')
    .replace(/\{\{TITLE\}\}/g, escapeHtml(category.label))
    .replace(/\{\{DESCRIPTION\}\}/g, escapeHtml(`${category.label} tutorials and learning paths on EDUKRON BLOB.`))
    .replace(/\{\{ASSET_PREFIX\}\}/g, prefix)
    .replace(/\{\{EXTRA_HEAD\}\}/g, '')
    .replace(/\{\{EXTRA_SCRIPTS\}\}/g, '')
    .replace(/\{\{BREADCRUMB\}\}/g, buildBreadcrumb(category, null, null, prefix, true))
    .replace(/\{\{CATEGORY_LABEL\}\}/g, escapeHtml(category.label.toLowerCase()))
    .replace(/\{\{HEADING\}\}/g, escapeHtml(category.label))
    .replace(/\{\{SUBTITLE\}\}/g, escapeHtml(`${category.topics.length} learning paths · EDUKRON BLOB`))
    .replace(/\{\{BODY\}\}/g, buildCategoryLandingBody(category))
    .replace(/ data-section=""\s*/, ' ')
    .replace(/ data-topic="index"\s*/, ' ');
}

function buildRichTopicIndex(topic, steps, indexContent) {
  const phaseCards = indexContent.phases
    .map(
      (p) => `
          <div class="de-note-card">
            <h3>${escapeHtml(p.title)}</h3>
            <p>${escapeHtml(p.description)}</p>
          </div>`
    )
    .join('');
  const prereqItems = indexContent.prerequisites.map((p) => `<li>${p}</li>`).join('');
  const outcomeItems = indexContent.outcomes
    .map((o) => `<li><span class="check-icon" aria-hidden="true">✓</span> ${escapeHtml(o)}</li>`)
    .join('');

  const listItems = steps
    .map(
      (p) => `
        <li class="path-step-item">
          <div class="path-step-body">
            <a href="${p.slug}/index.html">${escapeHtml(p.label)}</a>
            <p>${escapeHtml(p.description)}</p>
          </div>
        </li>`
    )
    .join('');

  const pathDiagram = buildIndexPathDiagram(topic.label, steps);

  return `
      <article class="learning-plan topic-index">
        <section class="learning-section">
          <h2>Learning Path Overview</h2>
          ${indexContent.intro}
          <p class="learning-callout">Work through the topics below in order for the best experience — each lesson builds on the previous one from beginner through advanced.</p>
        </section>
        ${buildFlowDiagramSection(pathDiagram)}
        <section class="learning-section">
          <h2>Path Phases</h2>
          <div class="de-notes-grid">${phaseCards}</div>
        </section>
        <section class="learning-section">
          <h2>Prerequisites</h2>
          <ul class="prereq-list">${prereqItems}</ul>
        </section>
        <section class="learning-section">
          <h2>What You Will Achieve</h2>
          <ul class="learn-checklist">${outcomeItems}</ul>
        </section>
        <section class="learning-section">
          <h2>All Topics</h2>
          <ol class="path-step-list">${listItems}</ol>
        </section>
      </article>`;
}

function buildIndexBody(category, topic) {
  const steps = topic.pages;
  const isInterview = INTERVIEW_TOPICS.has(topic.id);

  if (isInterview) {
    const listItems = steps
      .map(
        (p) => `
        <li class="path-step-item">
          <div class="path-step-body">
            <a href="${p.slug}/index.html">${escapeHtml(p.label)}</a>
            <p>${escapeHtml(p.description)}</p>
          </div>
        </li>`
      )
      .join('');

    return `
      <article class="learning-plan topic-index">
        <section class="learning-section">
          <h2>Interview Prep Overview</h2>
          <p>The <strong>${escapeHtml(topic.label)}</strong> collection covers themed Q&amp;A pages with 8–10 curated questions each. Practice answers aloud and connect themes to the corresponding DevSpark learning paths.</p>
        </section>
        <section class="learning-section">
          <h2>All Topics</h2>
          <ol class="path-step-list">${listItems}</ol>
        </section>
      </article>`;
  }

  const indexContent =
    topic.id === 'agentic-ai'
      ? buildAgenticIndexContent()
      : buildTopicIndexContent(topic.id, topic.label);

  return buildRichTopicIndex(topic, steps, indexContent);
}

function buildBody(category, topic, page, prefix) {
  if (page.slug === 'index') {
    return buildIndexBody(category, topic);
  }
  return buildLearningBody(category, topic, page, prefix);
}

function renderPage(category, topic, page) {
  const depth = pageDepth(category.id, topic.id, page.slug);
  const prefix = assetPrefix(depth);
  const heading = page.slug === 'index' ? topic.label : page.label;
  const subtitle =
    page.slug === 'index'
      ? `${category.label} · ${topic.label}`
      : page.description;
  const description =
    page.slug === 'index'
      ? `${topic.label} — ${category.label} learning path on EDUKRON BLOB.`
      : `${page.label} — ${topic.label}. ${page.description}`;

  const stepMeta =
    page.slug !== 'index' && page.step
      ? ` data-step="${page.step}" data-total-steps="${page.totalSteps}"`
      : '';

  const isRich = isRichLearningPage(category, topic, page);
  const needsRichIndexStyles = page.slug === 'index' && !INTERVIEW_TOPICS.has(topic.id);
  const needsFlowDiagrams = isRich || needsRichIndexStyles;
  const extraHead = needsFlowDiagrams
    ? `<link rel="stylesheet" href="${prefix}assets/css/flow-diagrams.css">`
    : '';
  const extraScripts = needsFlowDiagrams ? buildMermaidScripts(prefix) : '';

  return template
    .replace(/\{\{PAGE_ID\}\}/g, category.id)
    .replace(/\{\{CATEGORY_ID\}\}/g, category.id)
    .replace(/\{\{TOPIC_ID\}\}/g, topic.id)
    .replace(/\{\{SLUG\}\}/g, page.slug)
    .replace(/\{\{STEP_META\}\}/g, stepMeta)
    .replace(/\{\{TITLE\}\}/g, escapeHtml(heading))
    .replace(/\{\{DESCRIPTION\}\}/g, escapeHtml(description))
    .replace(/\{\{ASSET_PREFIX\}\}/g, prefix)
    .replace(/\{\{EXTRA_HEAD\}\}/g, extraHead)
    .replace(/\{\{EXTRA_SCRIPTS\}\}/g, extraScripts)
    .replace(/\{\{BREADCRUMB\}\}/g, buildBreadcrumb(category, topic, page, prefix))
    .replace(/\{\{CATEGORY_LABEL\}\}/g, escapeHtml(category.label.toLowerCase()))
    .replace(/\{\{HEADING\}\}/g, escapeHtml(heading))
    .replace(/\{\{SUBTITLE\}\}/g, escapeHtml(subtitle))
    .replace(/\{\{BODY\}\}/g, buildBody(category, topic, page, prefix));
}

function flattenPages() {
  const pages = [];
  categories.forEach((category) => {
    category.topics.forEach((topic) => {
      pages.push({
        category,
        topic,
        page: {
          slug: 'index',
          label: topic.label,
          description: `${topic.label} learning path overview.`,
        },
      });
      topic.pages.forEach((page) => {
        pages.push({ category, topic, page });
      });
    });
  });
  return pages;
}

function buildNavJs() {
  return categories.map((cat) => ({
    id: cat.id,
    label: cat.label,
    href: categoryHref(cat.id),
    mega: cat.mega || false,
    children: cat.topics.map((topic) => {
      const child = {
        id: topic.id,
        label: topic.label,
        href: pageHref(cat.id, topic.id, 'index'),
        stepCount: topic.pages.length,
      };
      const sparkLink = topic.pages.find((p) => p.href && p.href.includes('spark-architecture'));
      if (sparkLink && cat.id !== 'programming') {
        child.featuredHref = sparkLink.href;
      }
      return child;
    }),
  }));
}

function buildPageTreeJs() {
  return categories.map((cat) => ({
    id: cat.id,
    label: cat.label,
    href: categoryHref(cat.id),
    topics: cat.topics.map((topic) => ({
      id: topic.id,
      label: topic.label,
      href: pageHref(cat.id, topic.id, 'index'),
      stepCount: topic.pages.length,
      pages: topic.pages.map((page) => ({
        slug: page.slug,
        label: page.label,
        description: page.description,
        href: page.href || pageHref(cat.id, topic.id, page.slug),
        external: Boolean(page.href),
        step: page.step,
        totalSteps: page.totalSteps,
        phase: page.phase,
        readMinutes: page.readMinutes,
      })),
    })),
  }));
}

function updateMainJs(nav, pageTree, stats) {
  let mainJs = fs.readFileSync(MAIN_JS_PATH, 'utf8');
  const startMarker = '  /* GENERATED_NAV_START */';
  const endMarker = '  /* GENERATED_NAV_END */';

  const generated = `${startMarker}
  const NAV = ${JSON.stringify(nav, null, 4).replace(/^/gm, '  ')};

  const PAGE_TREE = ${JSON.stringify(pageTree, null, 4).replace(/^/gm, '  ')};

  const SITE_STATS = ${JSON.stringify(stats, null, 4).replace(/^/gm, '  ')};
${endMarker}`;

  const regex = /\/\* GENERATED_NAV_START \*\/[\s\S]*?\/\* GENERATED_NAV_END \*\//;
  if (!regex.test(mainJs)) {
    console.error('Could not find GENERATED_NAV markers in main.js');
    process.exit(1);
  }
  mainJs = mainJs.replace(regex, generated.trim());
  fs.writeFileSync(MAIN_JS_PATH, mainJs, 'utf8');
}

function generateMenuStructureMd(pageTree, stats) {
  const lines = [
    '# EDUKRON BLOB — Full Menu Structure',
    '',
    'Complete hierarchy of categories, submodules, and learning-plan steps.',
    'Auto-generated by `node scripts/generate-pages.js`.',
    '',
    '## Navigation Behavior',
    '',
    '| User is on… | Left sidebar shows |',
    '|-------------|-------------------|',
    '| Category landing (e.g. `/programming/`) | Submodules only — Python, SQL, PySpark |',
    '| Submodule or topic (e.g. `/programming/python/`) | Learning-plan steps for that submodule only |',
    '',
    `**Site total:** ${stats.total} pages across 5 categories`,
    '',
    '---',
    '',
  ];

  pageTree.forEach((cat) => {
    const totalSteps = cat.topics.reduce((s, t) => s + t.pages.length, 0);
    lines.push(`## ${cat.label}`);
    lines.push('');
    lines.push(`[${cat.href}](${cat.href}) · ${cat.topics.length} learning paths`);
    lines.push('');

    cat.topics.forEach((topic) => {
      lines.push(`### ${topic.label}`);
      lines.push('');
      topic.pages.forEach((page) => {
        const ext = page.external ? ' ↗' : '';
        lines.push(`- ${page.label}${ext}`);
      });
      lines.push('');
    });
  });

  return lines.join('\n');
}

function collectExpectedDirs() {
  const dirs = new Set();
  categories.forEach((category) => {
    category.topics.forEach((topic) => {
      dirs.add(path.join(category.id, topic.id).replace(/\\/g, '/'));
      topic.pages.forEach((page) => {
        dirs.add(path.join(category.id, topic.id, page.slug).replace(/\\/g, '/'));
      });
    });
  });
  return dirs;
}

function pruneStalePages(expectedDirs) {
  const categoryIds = categories.map((c) => c.id);
  let removed = 0;

  categoryIds.forEach((catId) => {
    const catPath = path.join(ROOT, catId);
    if (!fs.existsSync(catPath)) return;

    fs.readdirSync(catPath, { withFileTypes: true }).forEach((topicEntry) => {
      if (!topicEntry.isDirectory()) return;
      const topicPath = path.join(catPath, topicEntry.name);
      const topicRel = path.join(catId, topicEntry.name).replace(/\\/g, '/');

      fs.readdirSync(topicPath, { withFileTypes: true }).forEach((pageEntry) => {
        if (!pageEntry.isDirectory()) return;
        const pageRel = `${topicRel}/${pageEntry.name}`;
        if (!expectedDirs.has(pageRel)) {
          const pagePath = path.join(topicPath, pageEntry.name);
          fs.rmSync(pagePath, { recursive: true, force: true });
          removed += 1;
        }
      });
    });
  });

  if (removed) console.log(`\nPruned ${removed} stale page directories.`);
}

// ── Main ──
const allPages = flattenPages();
const expectedDirs = collectExpectedDirs();
let count = 0;

categories.forEach((category) => {
  const href = categoryHref(category.id);
  const filePath = path.join(ROOT, href.replace(/\//g, path.sep));
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, renderCategoryLanding(category), 'utf8');
  count += 1;
});

allPages.forEach(({ category, topic, page }) => {
  const href = pageHref(category.id, topic.id, page.slug);
  const filePath = path.join(ROOT, href.replace(/\//g, path.sep));
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, renderPage(category, topic, page), 'utf8');
  count += 1;
});

pruneStalePages(expectedDirs);

const stats = getStats();
const nav = buildNavJs();
const pageTree = buildPageTreeJs();
updateMainJs(nav, pageTree, stats);
fs.writeFileSync(STATS_PATH, JSON.stringify(stats, null, 2), 'utf8');
fs.writeFileSync(path.join(ROOT, 'MENU-STRUCTURE.md'), generateMenuStructureMd(pageTree, stats), 'utf8');

console.log(`Generated ${count} pages (including ${categories.length} category landings).\n`);
console.log(`Total pages: ${stats.total}`);
console.log('\nPages by category:');
Object.entries(stats.byCategory).forEach(([id, n]) => console.log(`  ${id}: ${n}`));
console.log('\nSteps per submenu topic:');
Object.entries(stats.byTopic).forEach(([id, n]) => console.log(`  ${id}: ${n} steps`));
console.log('\nSample paths:');
console.log('  programming/python/getting-started/index.html');
console.log('  ai/nlp/tokenization/index.html');
console.log('  azure-devops/kubernetes/pods/index.html');
console.log('  azure-data-engineering/delta-lake/acid-transactions/index.html');
console.log('  interview-questions/python-interview-questions/basics-syntax/index.html');
console.log('\nCategory landing pages:');
categories.forEach((c) => console.log(`  ${categoryHref(c.id)}`));
console.log('\nWrote MENU-STRUCTURE.md');
console.log('Updated assets/js/main.js NAV + PAGE_TREE + SITE_STATS blocks.');
