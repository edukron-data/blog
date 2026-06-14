/**
 * Topic metadata for AI learning paths.
 */
const { GLOBAL_SLUG_HINTS } = require('../global-hints');

const aiTopics = {
  'data-science': {
    id: 'data-science',
    meta: {
      domain: 'Data science and analytics',
      stack: 'pandas, NumPy, matplotlib, seaborn, scikit-learn, SQL, Jupyter',
      ecosystem: 'exploratory analysis, experimentation, and stakeholder reporting',
    },
    slugHints: {
      stat: { focus: 'descriptive and inferential statistics', depth: 'statistical reasoning', tools: ['scipy.stats', 'numpy'] },
      hypothesis: { focus: 'significance testing and experiment design', depth: 'hypothesis testing workflow' },
      visual: { focus: 'chart selection and narrative data storytelling', depth: 'visual analytics', tools: ['matplotlib', 'seaborn', 'Plotly'] },
      eda: { focus: 'systematic exploratory analysis', depth: 'EDA playbooks', concepts: ['Univariate/bivariate analysis', 'Missing data', 'Outliers'] },
      'ab-test': { focus: 'controlled experiments and metric selection', depth: 'experimentation platform design' },
      churn: { focus: 'customer retention analytics', depth: 'cohort and survival analysis' },
    },
    globalSlugHints: GLOBAL_SLUG_HINTS,
    index: {
      intro: `<p>The <strong>Data Science</strong> path covers the full analyst lifecycle — statistics, cleaning, visualization, experimentation, case studies, and career/portfolio guidance.</p>`,
      phases: [
        { title: 'Phase 1: Foundations (Steps 1–8)', description: 'DS lifecycle, Python stack, stats, probability, distributions, hypothesis tests.' },
        { title: 'Phase 2: Analysis Skills (Steps 9–18)', description: 'Cleaning, EDA, visualization, sampling, A/B tests, time series, SQL for analysts.' },
        { title: 'Phase 3: Professional Practice (Steps 19–25)', description: 'Communication, ethics, tools, retail/churn case studies, portfolio, career path.' },
      ],
      prerequisites: ['Basic Python', 'High-school statistics helpful but not required'],
      outcomes: ['Run rigorous EDA and hypothesis tests', 'Build compelling visual narratives', 'Design A/B experiments', 'Complete case-study analyses for your portfolio'],
    },
  },

  'machine-learning': {
    id: 'machine-learning',
    meta: {
      domain: 'Machine learning engineering',
      stack: 'scikit-learn, XGBoost, MLflow, pandas, ColumnTransformer, Pipeline',
      ecosystem: 'supervised/unsupervised modeling, evaluation, and deployment',
    },
    slugHints: {
      regression: { focus: 'continuous target prediction', depth: 'linear and logistic regression', tools: ['LinearRegression', 'LogisticRegression'] },
      forest: { focus: 'ensemble tree methods', depth: 'bagging and boosting', tools: ['RandomForest', 'XGBoost', 'LightGBM'] },
      cluster: { focus: 'unsupervised grouping', depth: 'clustering workflows', tools: ['KMeans', 'AgglomerativeClustering'] },
      pca: { focus: 'variance-based dimensionality reduction', depth: 'PCA and embedding visualization' },
      pipeline: { focus: 'reproducible preprocessing + model chains', depth: 'sklearn Pipeline design', tools: ['Pipeline', 'ColumnTransformer'] },
      'cross-validation': { focus: 'robust performance estimation', depth: 'CV strategy', concepts: ['Stratified K-fold', 'Data leakage prevention'] },
      imbalanced: { focus: 'minority class handling', depth: 'class imbalance techniques', tools: ['SMOTE', 'class_weight'] },
      mlops: { focus: 'model lifecycle in production', depth: 'MLOps foundations', tools: ['MLflow', 'model registry'] },
      shap: { focus: 'model explainability', depth: 'interpretability tooling', tools: ['SHAP', 'LIME'] },
    },
    globalSlugHints: GLOBAL_SLUG_HINTS,
    index: {
      intro: `<p>The <strong>Machine Learning</strong> track moves from scikit-learn basics through algorithms, evaluation, MLOps, and a capstone classification/regression project.</p>`,
      phases: [
        { title: 'Phase 1: ML Basics (Steps 1–10)', description: 'Paradigms, sklearn API, splits, linear/logistic regression, kNN, trees, forests, boosting.' },
        { title: 'Phase 2: Modeling Depth (Steps 11–22)', description: 'SVM, Bayes, clustering, PCA, features, pipelines, CV, metrics, imbalance, tuning, selection, regularization.' },
        { title: 'Phase 3: Production ML (Steps 23–32)', description: 'Feature selection, MLOps, deployment, tracking, time series, recommenders, anomalies, interpretability, capstone.' },
      ],
      prerequisites: ['Python and pandas', 'Basic statistics and linear algebra helpful'],
      outcomes: ['Train and evaluate diverse sklearn models', 'Build leakage-safe pipelines with CV', 'Track experiments and deploy models', 'Deliver an end-to-end ML capstone'],
    },
  },

  'artificial-intelligence': {
    id: 'artificial-intelligence',
    meta: {
      domain: 'Classical artificial intelligence',
      stack: 'search algorithms, logic, planning, probabilistic reasoning, Python prototypes',
      ecosystem: 'symbolic AI foundations connecting to modern ML/LLM systems',
    },
    slugHints: {
      search: { focus: 'state-space exploration strategies', depth: 'uninformed and heuristic search', concepts: ['BFS', 'DFS', 'A*', 'Admissibility'] },
      minimax: { focus: 'adversarial game-tree search', depth: 'game AI algorithms', concepts: ['Alpha-beta pruning', 'Evaluation functions'] },
      logic: { focus: 'formal reasoning and inference', depth: 'propositional and first-order logic' },
      planning: { focus: 'automated plan generation', depth: 'STRIPS and plan-space search' },
      bayesian: { focus: 'reasoning under uncertainty', depth: 'Bayesian networks' },
      agent: { focus: 'PEAS framework and agent taxonomy', depth: 'intelligent agent design' },
    },
    globalSlugHints: GLOBAL_SLUG_HINTS,
    index: {
      intro: `<p>The <strong>Artificial Intelligence</strong> path explores classical AI — search, logic, planning, expert systems, and bridges to modern deep learning and LLMs.</p>`,
      phases: [
        { title: 'Phase 1: AI Foundations (Steps 1–7)', description: 'History, paradigms, problem solving, BFS/DFS, heuristic search, game trees.' },
        { title: 'Phase 2: Knowledge & Reasoning (Steps 8–14)', description: 'KR, propositional/FOL logic, expert systems, planning, uncertainty, symbolic NLP.' },
        { title: 'Phase 3: Modern Context (Steps 15–20)', description: 'Classic CV, robotics, ethics, modern landscape, AI/ML/DL distinctions, agents, trends.' },
      ],
      prerequisites: ['Basic Python', 'Comfort with graphs and set notation'],
      outcomes: ['Implement core search and game algorithms', 'Model knowledge with logic and planning', 'Connect classical AI to contemporary systems'],
    },
  },

  nlp: {
    id: 'nlp',
    meta: {
      domain: 'Natural language processing',
      stack: 'spaCy, NLTK, Hugging Face Transformers, tokenizers, PyTorch',
      ecosystem: 'text classification, NER, QA, translation, and production NLP',
    },
    slugHints: {
      token: { focus: 'text segmentation and subword units', depth: 'tokenization pipelines', tools: ['spaCy', 'SentencePiece', 'BPE'] },
      tfidf: { focus: 'sparse lexical weighting', depth: 'TF-IDF feature engineering', tools: ['TfidfVectorizer'] },
      embed: { focus: 'dense semantic vectors', depth: 'embedding training and usage', tools: ['Word2Vec', 'GloVe', 'fastText'] },
      bert: { focus: 'bidirectional transformer encoders', depth: 'BERT fine-tuning', tools: ['Hugging Face', 'masked LM'] },
      gpt: { focus: 'autoregressive language modeling', depth: 'generative NLP', tools: ['GPT-style decoders'] },
      ner: { focus: 'span labeling for entities', depth: 'NER model design', concepts: ['BIO tagging', 'CRF vs neural'] },
      huggingface: { focus: 'Transformers ecosystem', depth: 'model hub workflows', tools: ['transformers', 'datasets', 'tokenizers'] },
      rag: { focus: 'retrieval-grounded text generation', depth: 'RAG for NLP apps', tools: ['LangChain', 'vector stores'] },
    },
    globalSlugHints: GLOBAL_SLUG_HINTS,
    index: {
      intro: `<p>The <strong>NLP</strong> path moves from preprocessing through embeddings, transformers, Hugging Face, RAG, ethics, and a capstone text project.</p>`,
      phases: [
        { title: 'Phase 1: Text Foundations (Steps 1–10)', description: 'Preprocessing, tokenization, n-grams, BoW, TF-IDF, embeddings.' },
        { title: 'Phase 2: Neural NLP (Steps 11–20)', description: 'Sequence models, attention, transformers, BERT, GPT, classification, NER, POS, MT, QA.' },
        { title: 'Phase 3: Modern NLP (Steps 21–30)', description: 'Summarization, spaCy, Hugging Face, prompting, evaluation, multilingual, production, ethics, RAG, capstone.' },
      ],
      prerequisites: ['Python', 'Basic ML concepts', 'Linear algebra basics helpful'],
      outcomes: ['Build preprocessing and feature pipelines for text', 'Fine-tune transformer models for downstream tasks', 'Evaluate NLP systems with appropriate metrics', 'Ship a text classification or QA mini-project'],
    },
  },

  rnn: {
    id: 'rnn',
    meta: {
      domain: 'Recurrent neural networks and sequence modeling',
      stack: 'PyTorch nn.LSTM/GRU, Keras RNN layers, BPTT, attention',
      ecosystem: 'time series, language modeling, and seq2seq before transformers',
    },
    slugHints: {
      bptt: { focus: 'gradients through unrolled time steps', depth: 'BPTT and vanishing gradients' },
      lstm: { focus: 'long-range dependency modeling with gates', depth: 'LSTM cell mechanics' },
      gru: { focus: 'gated recurrent units', depth: 'GRU vs LSTM trade-offs' },
      seq2seq: { focus: 'encoder-decoder sequence transduction', depth: 'sequence-to-sequence architecture' },
      attention: { focus: 'soft alignment between encoder and decoder', depth: 'Bahdanau attention' },
    },
    globalSlugHints: GLOBAL_SLUG_HINTS,
    index: {
      intro: `<p>The <strong>RNN</strong> track covers sequence modeling with RNNs, LSTMs, GRUs, seq2seq, attention, and PyTorch/Keras implementations culminating in a forecasting or text-generation capstone.</p>`,
      phases: [
        { title: 'Phase 1: RNN Foundations (Steps 1–6)', description: 'Sequence data, RNN architecture, forward pass, BPTT, LSTM intro.' },
        { title: 'Phase 2: Advanced RNNs (Steps 7–14)', description: 'LSTM apps, GRU, bi-directional/stacked RNNs, seq2seq, teacher forcing, attention.' },
        { title: 'Phase 3: Applied RNNs (Steps 15–20)', description: 'Time series, padding/masking, PyTorch/Keras, limitations, tuning, capstone.' },
      ],
      prerequisites: ['Neural network basics (ANN path helpful)', 'PyTorch or TensorFlow familiarity'],
      outcomes: ['Implement LSTM/GRU models for sequences', 'Build seq2seq models with attention', 'Diagnose RNN training issues', 'Complete an LSTM capstone project'],
    },
  },

  ann: {
    id: 'ann',
    meta: {
      domain: 'Feedforward neural networks',
      stack: 'PyTorch, Keras, backpropagation, optimizers, regularization',
      ecosystem: 'tabular deep learning and foundation for CNNs/RNNs',
    },
    slugHints: {
      perceptron: { focus: 'linear classifiers and separability limits', depth: 'single-layer networks' },
      activation: { focus: 'nonlinearities and gradient flow', depth: 'activation function selection', concepts: ['ReLU', 'Sigmoid', 'Softmax', 'Dead ReLU'] },
      backprop: { focus: 'gradient computation via chain rule', depth: 'backpropagation mechanics' },
      optimizer: { focus: 'adaptive gradient methods', depth: 'optimizer comparison', tools: ['SGD', 'Adam', 'RMSprop'] },
      dropout: { focus: 'stochastic regularization', depth: 'dropout and batch norm' },
    },
    globalSlugHints: GLOBAL_SLUG_HINTS,
    index: {
      intro: `<p>The <strong>ANN</strong> path moves from perceptrons through backprop, optimizers, regularization, PyTorch/Keras builds, and an MNIST/tabular capstone.</p>`,
      phases: [
        { title: 'Phase 1: Network Basics (Steps 1–8)', description: 'Neurons, perceptron, activations, MLPs, forward pass, loss, backprop, gradient descent.' },
        { title: 'Phase 2: Training Craft (Steps 9–16)', description: 'Learning rate, optimizers, init, batch norm, dropout, overfitting, hyperparameter search.' },
        { title: 'Phase 3: Applied ANNs (Steps 17–22)', description: 'PyTorch/Keras builds, classification/regression, visualization, debugging, capstone.' },
      ],
      prerequisites: ['Python', 'Basic calculus and linear algebra'],
      outcomes: ['Derive and implement backprop for MLPs', 'Train stable networks with modern optimizers', 'Debug common NN training failures', 'Complete a feedforward network capstone'],
    },
  },

  cnn: {
    id: 'cnn',
    meta: {
      domain: 'Convolutional neural networks and computer vision',
      stack: 'PyTorch Conv2d, torchvision, Keras, transfer learning, ONNX',
      ecosystem: 'image classification, detection, segmentation, deployment',
    },
    slugHints: {
      conv: { focus: 'filter-based spatial feature learning', depth: 'convolution mechanics', concepts: ['Kernel size', 'Stride', 'Padding', 'Feature maps'] },
      pool: { focus: 'spatial downsampling', depth: 'pooling layer design' },
      resnet: { focus: 'residual skip connections', depth: 'ResNet architecture' },
      transfer: { focus: 'pretrained backbone reuse', depth: 'transfer learning workflows', tools: ['torchvision.models', 'Keras applications'] },
      augment: { focus: 'synthetic training diversity', depth: 'data augmentation pipelines' },
      yolo: { focus: 'single-shot object detection', depth: 'real-time detection concepts' },
      grad: { focus: 'visual explanations for CNN decisions', depth: 'Grad-CAM interpretability' },
    },
    globalSlugHints: GLOBAL_SLUG_HINTS,
    index: {
      intro: `<p>The <strong>CNN</strong> track teaches computer vision deep learning — convolutions, ResNet, transfer learning, detection/segmentation intro, deployment, and a fine-tuning capstone.</p>`,
      phases: [
        { title: 'Phase 1: CNN Foundations (Steps 1–8)', description: 'Motivation, convolution, padding/stride, pooling, architecture, feature maps, classic architectures.' },
        { title: 'Phase 2: Training CNNs (Steps 9–14)', description: 'ResNet, transfer learning, augmentation, classification, detection/segmentation intro, YOLO.' },
        { title: 'Phase 3: Production CV (Steps 15–20)', description: 'PyTorch/Keras, regularization, interpretability, deployment, capstone fine-tuning.' },
      ],
      prerequisites: ['ANN fundamentals', 'PyTorch or TensorFlow basics'],
      outcomes: ['Design and train CNN classifiers', 'Fine-tune pretrained models', 'Apply augmentation and regularization', 'Deploy or export models via ONNX'],
    },
  },

  'generative-ai': {
    id: 'generative-ai',
    meta: {
      domain: 'Generative AI and large language models',
      stack: 'Transformers, OpenAI/Azure OpenAI, LangChain, LoRA, RAG, vLLM',
      ecosystem: 'prompting, fine-tuning, retrieval, and LLM deployment',
    },
    slugHints: {
      prompt: { focus: 'instruction design and chain-of-thought', depth: 'prompt engineering patterns' },
      lora: { focus: 'parameter-efficient fine-tuning', depth: 'LoRA/PEFT workflows', tools: ['peft', 'LoRA adapters'] },
      rlhf: { focus: 'alignment via human feedback', depth: 'RLHF pipeline overview' },
      vector: { focus: 'embedding storage and ANN search', depth: 'vector database architecture', tools: ['Pinecone', 'Chroma', 'Azure AI Search'] },
      chunk: { focus: 'document splitting for retrieval', depth: 'chunking and metadata design' },
      rag: {
        focus: 'retrieval-augmented generation and grounding',
        depth: 'RAG pipeline implementation',
        tools: ['LangChain', 'Azure AI Search', 'FAISS'],
        animationSteps: [
          'User query received',
          'Query embedding generated',
          'Vector store retrieval',
          'Context assembled with citations',
          'LLM generates grounded answer',
          'Response validated and logged',
        ],
      },
      halluc: { focus: 'factual grounding and citation', depth: 'hallucination mitigation' },
      diffusion: { focus: 'denoising generative image models', depth: 'diffusion model concepts' },
      langchain: { focus: 'composable LLM application framework', depth: 'LangChain patterns', tools: ['LangChain', 'LCEL'] },
    },
    globalSlugHints: GLOBAL_SLUG_HINTS,
    index: {
      intro: `<p>The <strong>Generative AI</strong> path covers LLMs, prompting, fine-tuning, RAG, evaluation, safety, multimodal models, agents intro, LangChain, cost optimization, deployment, and capstone.</p>`,
      phases: [
        { title: 'Phase 1: LLM Foundations (Steps 1–8)', description: 'GenAI landscape, LLM fundamentals, transformers recap, GPT family, open models, prompting.' },
        { title: 'Phase 2: Adaptation & RAG (Steps 9–17)', description: 'Fine-tuning, LoRA, instruction tuning, RLHF, RAG, vector DBs, chunking, evaluation, hallucination mitigation.' },
        { title: 'Phase 3: Production GenAI (Steps 18–25)', description: 'Safety, multimodal, diffusion, agents, LangChain, cost, deployment, capstone chatbot.' },
      ],
      prerequisites: ['Python', 'Basic NLP/transformers helpful', 'API access to an LLM provider optional'],
      outcomes: ['Engineer effective prompts and RAG pipelines', 'Fine-tune models with LoRA/PEFT', 'Evaluate and deploy LLM applications responsibly', 'Build a RAG chatbot or fine-tuned assistant capstone'],
    },
  },
};

module.exports = { aiTopics };
