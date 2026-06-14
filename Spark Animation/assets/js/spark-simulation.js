const TASKS_PER_EXEC = 15;
  for (let e = 0; e < 4; e++) {
    const container = document.getElementById('exec-' + e);
    for (let t = 0; t < TASKS_PER_EXEC; t++) {
      const block = document.createElement('div');
      block.className = 'task-block';
      block.style.setProperty('--i', t);
      block.title = 'Task ' + (e * TASKS_PER_EXEC + t + 1);
      container.appendChild(block);
    }
  }

  let simRunning = false;
  let simTimeouts = [];

  function log(msg, cls) {
    const el = document.getElementById('sim-log');
    const line = document.createElement('div');
    line.className = 'log-line' + (cls ? ' ' + cls : '');
    line.textContent = '[' + new Date().toLocaleTimeString() + '] ' + msg;
    el.appendChild(line);
    el.scrollTop = el.scrollHeight;
  }

  function clearSim() {
    simTimeouts.forEach(t => clearTimeout(t));
    simTimeouts = [];
  }

  function runSimulation() {
    if (simRunning) return;
    simRunning = true;
    clearSim();
    document.getElementById('run-btn').disabled = true;
    document.getElementById('sim-log').innerHTML = '';
    document.getElementById('job-status').textContent = 'Running';
    document.getElementById('job-status').style.color = 'var(--yellow)';

    const totalTasks = 440; // 240 S1 + 200 S2
    let completed = 0;
    let stage = 'bootstrap';
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.animation = 'none';
    progressBar.style.width = '0%';

    const phases = [
      { t: 0,    msg: 'PHASE A: Application Bootstrap', cls: 'log-phase' },
      { t: 200,  msg: 'Driver: SparkSession created â€” SparkContext app_1739123456789_0042', cls: 'log-info' },
      { t: 450,  msg: 'Driver: Spark UI available at http://driver:4040', cls: 'log-info' },
      { t: 700,  msg: 'Cluster Manager (YARN): Received resource request â€” 4Ã—(4 cores, 4GB)', cls: 'log-info' },
      { t: 1100, msg: 'Worker Node 1â€“4: Executor JVMs launched, registered with Driver', cls: 'log-info' },
      { t: 1400, msg: 'Driver: 16 cores available Â· BlockManagers initialized on all executors', cls: 'log-success' },
      { t: 1700, msg: 'PHASE Bâ€“C: Lazy plan built Â· Catalyst applied predicate pushdown + column pruning', cls: 'log-phase' },
      { t: 2000, msg: 'Driver: write.parquet() action â†’ Job 0 RUNNING (3 stages)', cls: 'log-warn' },
      { t: 2300, msg: 'DAGScheduler: Stage 1 submitted â€” 240 tasks (read + filter + shuffle write)', cls: 'log-info' },
      { t: 2600, msg: 'TaskScheduler: Batch 1/15 â€” launching 16 tasks (PROCESS_LOCAL: 12, NODE_LOCAL: 4)', cls: 'log-info' },
      { t: 2900, msg: 'PHASE D: Stage 1 â€” reading 128MB HDFS blocks, filtering amount > 1000', cls: 'log-phase' },
      { t: 3500, msg: 'Executor 2 Task 47: Read 128MB Â· Filtered to 79MB Â· 35% rows dropped', cls: 'log-info' },
      { t: 4200, msg: 'Tungsten: WholeStageCodegen ID=0 executing fused read+filter pipeline', cls: 'log-info' },
      { t: 5000, msg: 'Progress: 60/240 Stage 1 tasks Â· Data processed: 7.5 GB / 30 GB', cls: 'log-info' },
      { t: 6200, msg: 'Progress: 120/240 Â· Filtered output so far: ~9.5 GB Â· 0 task failures', cls: 'log-info' },
      { t: 7400, msg: 'Progress: 180/240 Â· Shuffle write started on completed tasks (~14 GB written)', cls: 'log-warn' },
      { t: 8600, msg: 'Speculative exec: Task 187 straggler detected (1.6Ã— median) â€” duplicate launched', cls: 'log-warn' },
      { t: 9200, msg: 'Stage 1 COMPLETE â€” 240/240 tasks Â· Shuffle write: 19.2 GB Â· Spill: 890 MB', cls: 'log-success' },
      { t: 9500, msg: 'PHASE E: Shuffle exchange â€” MapOutputTracker registered 48000 block locations', cls: 'log-phase' },
      { t: 9800, msg: 'BlockManager: Fetching shuffle blocks over network (19.2 GB total)', cls: 'log-warn' },
      { t: 10500, msg: 'Shuffle read: 40% complete Â· Network throughput: ~850 Mbps avg', cls: 'log-info' },
      { t: 11200, msg: 'PHASE F: Stage 2 â€” 200 HashAggregate tasks scheduled', cls: 'log-phase' },
      { t: 11500, msg: 'Stage 2 Task 0: Shuffle read 96MB â†’ sum(amount) â†’ output 21 bytes', cls: 'log-info' },
      { t: 12200, msg: 'Progress: 100/200 Stage 2 tasks Â· Aggregate output: 2.1 KB so far', cls: 'log-info' },
      { t: 12800, msg: 'Stage 2 COMPLETE â€” 200/200 tasks Â· Output: 4.2 KB Â· Duration: 48s', cls: 'log-success' },
      { t: 13100, msg: 'PHASE G: Writing Parquet â€” Snappy compression Â· 200 part files', cls: 'log-phase' },
      { t: 13400, msg: 'HDFS: Committing files to hdfs://output/regional_revenue/', cls: 'log-info' },
      { t: 13700, msg: 'PHASE H: Job 0 SUCCEEDED â€” Input: 30GB Â· Shuffle: 19.2GB Â· Output: 8KB', cls: 'log-success' },
      { t: 14000, msg: 'Total duration: 6m 12s Â· Speculative tasks: 3 Â· Failed tasks: 0', cls: 'log-success' },
    ];

    phases.forEach(p => {
      simTimeouts.push(setTimeout(() => log(p.msg, p.cls), p.t));
    });

    const interval = setInterval(() => {
      if (stage === 'bootstrap') {
        document.getElementById('progress-text').textContent = 'Initializing cluster...';
        return;
      }
      completed += stage === 'stage1' ? 4 : 3;
      const cap = stage === 'stage1' ? 240 : stage === 'shuffle' ? 280 : 440;
      if (completed > cap) completed = cap;

      const pct = Math.round(completed / totalTasks * 100);
      document.getElementById('progress-text').textContent =
        completed + ' / ' + totalTasks + ' tasks Â· ' + pct + '% Â· Stage: ' +
        (stage === 'stage1' ? '1 (read+filter)' : stage === 'shuffle' ? 'shuffle' : stage === 'stage2' ? '2 (aggregate)' : 'write');
      progressBar.style.width = pct + '%';

      document.querySelectorAll('.task-block').forEach(b => {
        b.style.background = 'var(--border)';
        b.style.boxShadow = 'none';
      });
      for (let i = 0; i < 4; i++) {
        const exec = document.getElementById('exec-' + i);
        const blocks = exec.querySelectorAll('.task-block');
        const idx = Math.floor(Math.random() * blocks.length);
        blocks[idx].style.background = stage === 'shuffle' ? 'var(--yellow)' : 'var(--green)';
        blocks[idx].style.boxShadow = '0 0 6px ' + (stage === 'shuffle' ? 'rgba(234,179,8,0.4)' : 'var(--green-glow)');
      }

      if (completed >= 240 && stage === 'stage1') stage = 'shuffle';
      if (completed >= 280 && stage === 'shuffle') stage = 'stage2';
      if (completed >= 440) {
        clearInterval(interval);
        document.getElementById('progress-text').textContent = '440 / 440 tasks Â· 100% Â· Job complete';
        progressBar.style.width = '100%';
        setTimeout(() => {
          document.getElementById('job-status').textContent = 'Completed';
          document.getElementById('job-status').style.color = 'var(--green)';
          document.getElementById('run-btn').disabled = false;
          simRunning = false;
        }, 500);
      }
    }, 100);

    simTimeouts.push(setTimeout(() => { stage = 'stage1'; }, 2800));

    simTimeouts.push(setTimeout(() => {
      if (stage === 'shuffle') return;
      stage = 'shuffle';
    }, 9500));

    simTimeouts.push(setTimeout(() => {
      stage = 'stage2';
    }, 11200));
  }

  document.querySelectorAll('.arch-box').forEach(box => {
    box.addEventListener('mouseenter', () => {
      document.querySelectorAll('.arch-box').forEach(b => b.classList.remove('active'));
      box.classList.add('active');
    });
  });
