/**
 * Azure Data Engineering — interactive step-by-step animations
 */
(function () {
  'use strict';

  const ICONS = {
    trigger: '⏰', runtime: '⚙️', auth: '🔐', activity: '⚡', sink: '📦', monitor: '📊',
    submit: '📝', cluster: '🖥️', driver: '🧠', executor: '💪', delta: '🔷', terminate: '✓',
    source: '📥', bronze: '🥉', silver: '🥈', gold: '🥇', archive: '🗄️', consumer: '👤',
    app: '💻', firewall: '🛡️', tls: '🔒', query: '🔍', storage: '💾', result: '📤',
    ingest: '📥', serverless: '☁️', spark: '✨', dedicated: '🏢', studio: '🎛️',
    write: '✍️', parquet: '📄', commit: '📋', snapshot: '📸', checkpoint: '✓', optimize: '🔧',
    read: '📖', catalyst: '⚗️', partition: '📊', transform: '🔄', aqe: '⚖️', merge: '🔀',
    requirements: '📋', review: '👁️', build: '🔨', quality: '✅', deploy: '🚀', docs: '📚',
    default: '●',
  };

  function getIcon(label, index) {
    const lower = label.toLowerCase();
    for (const [key, icon] of Object.entries(ICONS)) {
      if (lower.includes(key)) return icon;
    }
    return ['⏰', '⚙️', '🔐', '⚡', '📦', '📊'][index % 6] || ICONS.default;
  }

  function buildFlowNodes(steps) {
    return steps.map((step, i) => {
      const icon = getIcon(step, i);
      const arrow = i < steps.length - 1 ? '<span class="de-flow-arrow">→</span>' : '';
      return `<div class="de-flow-node" data-step="${i}">
        <span class="de-node-icon">${icon}</span>
        <span class="de-node-label">${step}</span>
      </div>${arrow}`;
    }).join('');
  }

  function buildMedallionNodes(steps) {
    const layers = ['bronze', 'silver', 'gold'];
    return steps.slice(0, 3).map((step, i) => {
      const layer = layers[i] || 'bronze';
      const badge = layer.charAt(0).toUpperCase() + layer.slice(1);
      return `<div class="de-medallion-layer ${layer}" data-step="${i}">
        <div class="de-layer-badge">${badge}</div>
        <div class="de-layer-text"><strong>${badge} Layer</strong>${step}</div>
      </div>`;
    }).join('');
  }

  function buildDeltaLog(steps) {
    const fileSteps = steps.filter((_, i) => i % 2 === 0).slice(0, 3);
    const commitSteps = steps.filter((_, i) => i % 2 === 1).slice(0, 3);
    const files = fileSteps.map((s, i) =>
      `<div class="de-file-block" data-step="${i * 2}">${s}</div>`
    ).join('');
    const commits = commitSteps.map((s, i) =>
      `<div class="de-commit-entry" data-step="${i * 2 + 1}">${s}</div>`
    ).join('');
    return `<div class="de-delta-log">
      <div class="de-delta-files"><h4>Data Files</h4>${files}</div>
      <div class="de-delta-commits"><h4>_delta_log</h4>${commits}</div>
    </div>`;
  }

  function buildZoneNodes(steps) {
    const zones = ['Bronze', 'Silver', 'Gold', 'Archive', 'Serve', 'Monitor'];
    return steps.map((step, i) => {
      const name = zones[i] || `Zone ${i + 1}`;
      return `<div class="de-zone-box" data-step="${i}">
        <div class="de-zone-name">${name}</div>
        <div class="de-zone-desc">${step}</div>
      </div>`;
    }).join('');
  }

  function renderCanvas(animType, steps) {
    switch (animType) {
      case 'medallion-flow':
        return `<div class="de-medallion-stack">${buildMedallionNodes(steps)}</div>`;
      case 'delta-log':
        return buildDeltaLog(steps);
      case 'storage-zones':
        return `<div class="de-zones-row">${buildZoneNodes(steps)}</div>`;
      default:
        return `<div class="de-flow-row">${buildFlowNodes(steps)}</div>`;
    }
  }

  class DEAnimation {
    constructor(root) {
      this.root = root;
      this.steps = JSON.parse(root.dataset.steps || '[]');
      this.animType = root.dataset.animType || 'pipeline-flow';
      this.currentStep = -1;
      this.playing = false;
      this.interval = null;
      this.canvas = root.querySelector('.de-anim-canvas');
      this.stepPills = root.querySelectorAll('.de-anim-step-pill');
      this.nodes = () => this.canvas.querySelectorAll('[data-step]');

      const playBtn = root.querySelector('[data-action="play"]');
      const pauseBtn = root.querySelector('[data-action="pause"]');
      const resetBtn = root.querySelector('[data-action="reset"]');

      if (playBtn) playBtn.addEventListener('click', () => this.play());
      if (pauseBtn) pauseBtn.addEventListener('click', () => this.pause());
      if (resetBtn) resetBtn.addEventListener('click', () => this.reset());

      this.stepPills.forEach((pill, i) => {
        pill.addEventListener('click', () => this.goToStep(i));
      });
    }

    clearStates() {
      this.nodes().forEach((n) => n.classList.remove('active', 'done'));
      this.canvas.querySelectorAll('.de-flow-arrow').forEach((a) => a.classList.remove('active'));
      this.stepPills.forEach((p) => p.classList.remove('active', 'done'));
    }

    goToStep(index) {
      this.clearStates();
      this.currentStep = index;

      this.nodes().forEach((n) => {
        const si = parseInt(n.dataset.step, 10);
        if (si < index) n.classList.add('done');
        if (si === index) n.classList.add('active');
      });

      const arrows = this.canvas.querySelectorAll('.de-flow-arrow');
      arrows.forEach((a, i) => {
        if (i < index) a.classList.add('active');
      });

      this.stepPills.forEach((p, i) => {
        if (i < index) p.classList.add('done');
        if (i === index) p.classList.add('active');
      });

      this.spawnPacket();
    }

    spawnPacket() {
      const existing = this.canvas.querySelector('.de-packet');
      if (existing) existing.remove();

      const active = this.canvas.querySelector('[data-step].active');
      if (!active || this.animType === 'delta-log') return;

      const packet = document.createElement('div');
      packet.className = 'de-packet flying';
      const rect = active.getBoundingClientRect();
      const canvasRect = this.canvas.getBoundingClientRect();
      packet.style.left = `${rect.left - canvasRect.left + rect.width / 2}px`;
      packet.style.top = `${rect.top - canvasRect.top + rect.height / 2}px`;
      packet.style.setProperty('--tx', '80px');
      this.canvas.appendChild(packet);
      setTimeout(() => packet.remove(), 1200);
    }

    play() {
      if (this.playing) return;
      this.playing = true;
      if (this.currentStep >= this.steps.length - 1) this.currentStep = -1;

      this.interval = setInterval(() => {
        const next = this.currentStep + 1;
        if (next >= this.steps.length) {
          this.pause();
          return;
        }
        this.goToStep(next);
      }, 1800);
    }

    pause() {
      this.playing = false;
      if (this.interval) {
        clearInterval(this.interval);
        this.interval = null;
      }
    }

    reset() {
      this.pause();
      this.currentStep = -1;
      this.clearStates();
    }
  }

  function init() {
    document.querySelectorAll('.de-anim-section').forEach((section) => {
      const canvas = section.querySelector('.de-anim-canvas');
      if (!canvas) return;

      const steps = JSON.parse(section.dataset.steps || '[]');
      const animType = section.dataset.animType || 'pipeline-flow';
      canvas.innerHTML = renderCanvas(animType, steps);

      new DEAnimation(section);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
