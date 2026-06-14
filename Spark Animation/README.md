# EDUKRON BLOB

A static programming blog covering Programming, AI, Azure DevOps, Azure Data Engineering, and interview prep. Built for [GitHub Pages](https://pages.github.com/) — no build step required for deployment.

## Site Structure

```
/
├── index.html                          Home / landing page
├── programming/index.html              Category landing — Python, SQL, PySpark
│   ├── python/                         35-step learning path
│   ├── sql/                            30-step learning path
│   └── pyspark/                        31-step learning path
├── ai/index.html                       9 submodules · 227 pages
├── azure-devops/index.html             10 submodules · 194 pages
├── azure-data-engineering/index.html   9 submodules · 177 pages
├── interview-questions/index.html      6 submodules · 126 pages
├── blog/
│   ├── index.html                      Blog post listing
│   └── spark-architecture.html         Spark architecture guide (interactive)
├── about/
│   └── index.html                      About page
├── MENU-STRUCTURE.md                   Full menu hierarchy (auto-generated)
├── assets/
│   ├── css/style.css                   Shared layout & site styles
│   └── js/main.js                      Navigation, sidebars (NAV + PAGE_TREE)
├── templates/
│   └── page.html                       HTML template for learning-plan pages
├── scripts/
│   ├── learning-paths/                 Step definitions per submodule
│   ├── page-tree.js                    Category → submodule mapping
│   ├── content-builder.js              Rich learning-plan content generator
│   └── generate-pages.js               Generator script
└── README.md
```

**Total pages:** 823 learning-plan pages + category landings (generated from `scripts/learning-paths/`)

## Navigation (Context-Aware Sidebar)

The left sidebar is **level-aware** — it shows only what's relevant to where you are:

| You are on… | Left sidebar shows |
|-------------|-------------------|
| **Category landing** (e.g. click "Programming" → `/programming/`) | **Submodules only** — Python, SQL, PySpark |
| **Submodule or topic** (e.g. `/programming/python/` or any Python step) | **Learning-plan steps only** for that submodule |

### Top menu behavior

- **Category name** → category landing page (`programming/index.html`, etc.)
- **Chevron / dropdown** → submodule list with step counts
- **Submodule in dropdown** → submodule index with full topic sidebar

### Right sidebar

- **Category landing:** overview stats, featured submodules
- **Submodule/topic pages:** progress (Step X of Y), On This Page TOC, related/nearby steps

See the complete hierarchy in **[MENU-STRUCTURE.md](MENU-STRUCTURE.md)**.

## Submodule Step Counts

| Category | Submodules | Total Steps |
|----------|------------|-------------|
| **Programming** | Python (35), SQL (30), PySpark (31) | 96 |
| **AI** | 9 submodules | 218 |
| **Azure DevOps** | 10 submodules | 184 |
| **Azure Data Engineering** | 9 submodules | 168 |
| **Interview Questions** | 6 submodules | 120 |

## Regenerate Pages

1. Edit step definitions in **`scripts/learning-paths/`**
2. Run the generator:

```bash
node scripts/generate-pages.js
```

This will:
- Generate/update all HTML learning-plan pages
- Create/update 5 category landing pages
- Update `NAV`, `PAGE_TREE`, and `SITE_STATS` in `assets/js/main.js`
- Regenerate `MENU-STRUCTURE.md`
- Prune stale page directories

## Local Preview

```bash
python -m http.server 8000
# or
npx serve .
```

Then visit `http://localhost:8000`

## Deploy to GitHub Pages

1. Push to GitHub
2. **Settings → Pages** → Deploy from branch `main`, folder `/ (root)`
3. Update `SITE.github` in `assets/js/main.js`

## Features

- **Context-aware 3-column layout** — sidebar adapts to category vs submodule depth
- **823+ learning-plan pages** — objectives, prerequisites, key concepts, prev/next nav
- **Mega-menu navigation** — five categories with step-count badges
- **Category landing pages** — submodule card grids
- **Auto-generated TOC** — "On This Page" from section headings
- **Interactive Spark demo** — live cluster simulation

## Customization

| What | Where |
|------|-------|
| Site name & GitHub URL | `assets/js/main.js` → `SITE` object |
| Learning path steps | `scripts/learning-paths/` → run generator |
| Navigation structure | Auto-generated in `assets/js/main.js` → `NAV` / `PAGE_TREE` |
| Full menu docs | `MENU-STRUCTURE.md` (auto-generated) |
| Colors & layout | `assets/css/style.css` → `:root` variables |

## License

Educational content. Adapt and use freely for learning purposes.
