/**
 * Domain-specific code examples keyed by topic and slug patterns.
 */
function pickCode(topicId, slug, label, description, meta) {
  const lang = meta.lang || 'python';
  const lib = {
    python: pythonExamples,
    sql: sqlExamples,
    pyspark: pysparkExamples,
    'data-science': dataScienceExamples,
    'machine-learning': mlExamples,
    'artificial-intelligence': aiClassicalExamples,
    nlp: nlpExamples,
    rnn: rnnExamples,
    ann: annExamples,
    cnn: cnnExamples,
    'generative-ai': genaiExamples,
    'azure-fundamentals': azureCliExamples,
    'azure-repos': bashExamples,
    'azure-pipelines': yamlExamples,
    'ci-cd': yamlExamples,
    docker: dockerExamples,
    kubernetes: k8sExamples,
    aks: aksExamples,
    terraform: terraformExamples,
    monitoring: kqlExamples,
    security: securityExamples,
  };

  const fn = lib[topicId] || pythonExamples;
  const code = fn(slug, label, description);
  return { lang: code.lang || lang, code: code.code };
}

function pythonExamples(slug, label) {
  const examples = {
    'getting-started': {
      lang: 'python',
      code: `# ${label} — first Python script
from pathlib import Path

def greet(name: str) -> str:
    return f"Hello, {name}! Ready to learn Python."

if __name__ == "__main__":
    log_dir = Path("logs")
    log_dir.mkdir(exist_ok=True)
    print(greet("DevSpark"))`,
    },
    list: {
      code: `# ${label} — list algorithms and comprehensions
orders = [{"id": 1, "amount": 49.5}, {"id": 2, "amount": 120.0}, {"id": 3, "amount": 15.25}]

# Filter + transform with comprehension
high_value = [o["id"] for o in orders if o["amount"] >= 50]
totals = sum(o["amount"] for o in orders)

# Stable sort by amount descending
ranked = sorted(orders, key=lambda o: o["amount"], reverse=True)
print(f"High-value order IDs: {high_value}, total revenue: {totals:.2f}")`,
    },
    dict: {
      code: `# ${label} — dictionary modeling
from collections import defaultdict

inventory = {"sku-A": 12, "sku-B": 0, "sku-C": 7}
restock = defaultdict(int)

for sku, qty in inventory.items():
    if qty < 5:
        restock[sku] = 20 - qty

inventory.update({sku: inventory[sku] + add for sku, add in restock.items()})
print("Restock plan:", dict(restock))`,
    },
    decorator: {
      code: `# ${label} — timing decorator
import functools
import time

def timed(fn):
    @functools.wraps(fn)
    def wrapper(*args, **kwargs):
        start = time.perf_counter()
        result = fn(*args, **kwargs)
        elapsed = time.perf_counter() - start
        print(f"{fn.__name__} finished in {elapsed:.4f}s")
        return result
    return wrapper

@timed
def fetch_records(n: int) -> list[int]:
    return list(range(n))

fetch_records(1_000_000)`,
    },
    asyncio: {
      code: `# ${label} — concurrent HTTP fetches with asyncio
import asyncio
import aiohttp

URLS = [
    "https://httpbin.org/delay/1",
    "https://httpbin.org/delay/1",
    "https://httpbin.org/status/200",
]

async def fetch(session, url):
    async with session.get(url, timeout=10) as resp:
        return url, resp.status

async def main():
    async with aiohttp.ClientSession() as session:
        results = await asyncio.gather(*(fetch(session, u) for u in URLS))
    for url, status in results:
        print(url, status)

asyncio.run(main())`,
    },
    pytest: {
      code: `# ${label} — pytest with fixtures
import pytest

@pytest.fixture
def sample_scores():
    return [88, 92, 76, 95, 81]

def grade_average(scores: list[int]) -> float:
    if not scores:
        raise ValueError("scores cannot be empty")
    return sum(scores) / len(scores)

@pytest.mark.parametrize("scores,expected", [
    ([100, 100], 100.0),
    ([80, 90], 85.0),
])
def test_grade_average_param(scores, expected):
    assert grade_average(scores) == expected

def test_empty_raises(sample_scores):
    with pytest.raises(ValueError):
        grade_average([])`,
    },
    pandas: {
      code: `# ${label} — pandas aggregation pipeline
import pandas as pd

df = pd.DataFrame({
    "region": ["East", "East", "West", "West", "West"],
    "product": ["A", "B", "A", "A", "B"],
    "revenue": [1200, 800, 1500, 900, 1100],
})

summary = (
    df.groupby(["region", "product"], as_index=False)
      .agg(revenue_sum=("revenue", "sum"), orders=("revenue", "count"))
      .sort_values("revenue_sum", ascending=False)
)
print(summary.to_string(index=False))`,
    },
  };

  for (const [key, val] of Object.entries(examples)) {
    if (slug.includes(key)) return val;
  }

  return {
    lang: 'python',
    code: `# ${label} — production-style Python module
from dataclasses import dataclass
from typing import Iterable

@dataclass(frozen=True)
class Event:
    user_id: str
    action: str

def count_actions(events: Iterable[Event], action: str) -> int:
    return sum(1 for e in events if e.action == action)

events = [Event("u1", "login"), Event("u2", "purchase"), Event("u1", "login")]
print(f"Logins: {count_actions(events, 'login')}")`,
  };
}

function sqlExamples(slug, label) {
  if (slug.includes('window') || slug.includes('rank')) {
    return {
      lang: 'sql',
      code: `-- ${label} — top-N per group with ROW_NUMBER
WITH monthly AS (
  SELECT
    customer_id,
    DATE_TRUNC('month', order_date) AS order_month,
    SUM(amount) AS revenue
  FROM orders
  GROUP BY customer_id, DATE_TRUNC('month', order_date)
),
ranked AS (
  SELECT
    customer_id,
    order_month,
    revenue,
    ROW_NUMBER() OVER (
      PARTITION BY customer_id
      ORDER BY order_month DESC
    ) AS rn
  FROM monthly
)
SELECT customer_id, order_month, revenue
FROM ranked
WHERE rn <= 3
ORDER BY customer_id, order_month DESC;`,
    };
  }
  if (slug.includes('merge') || slug.includes('upsert')) {
    return {
      lang: 'sql',
      code: `-- ${label} — MERGE upsert pattern (T-SQL / Synapse)
MERGE dbo.customers AS target
USING staging.customers_delta AS source
ON target.customer_id = source.customer_id
WHEN MATCHED AND source.updated_at > target.updated_at THEN
  UPDATE SET
    email = source.email,
    tier = source.tier,
    updated_at = source.updated_at
WHEN NOT MATCHED THEN
  INSERT (customer_id, email, tier, updated_at)
  VALUES (source.customer_id, source.email, source.tier, source.updated_at);`,
    };
  }
  return {
    lang: 'sql',
    code: `-- ${label} — analytical query with CTE
WITH active_users AS (
  SELECT user_id
  FROM events
  WHERE event_date >= CURRENT_DATE - INTERVAL '30' DAY
  GROUP BY user_id
  HAVING COUNT(*) >= 5
)
SELECT p.plan_name, COUNT(DISTINCT s.user_id) AS active_subscribers
FROM subscriptions s
JOIN plans p ON p.plan_id = s.plan_id
JOIN active_users a ON a.user_id = s.user_id
WHERE s.status = 'active'
GROUP BY p.plan_name
ORDER BY active_subscribers DESC;`,
  };
}

function pysparkExamples(slug, label) {
  if (slug.includes('stream')) {
    return {
      lang: 'python',
      code: `# ${label} — Structured Streaming with watermark
from pyspark.sql import SparkSession
from pyspark.sql.functions import window, count

spark = SparkSession.builder.appName("${label}").getOrCreate()

events = (
    spark.readStream.format("json")
    .option("path", "/mnt/events/incoming")
    .load()
)

agg = (
    events.withWatermark("event_time", "10 minutes")
    .groupBy(window("event_time", "5 minutes"), "event_type")
    .agg(count("*").alias("event_count"))
)

query = (
    agg.writeStream
    .format("delta")
    .outputMode("append")
    .option("checkpointLocation", "/mnt/checkpoints/events")
    .start("/mnt/events/aggregated")
)
query.awaitTermination()`,
    };
  }
  if (slug.includes('join') || slug.includes('broadcast')) {
    return {
      lang: 'python',
      code: `# ${label} — broadcast join for skew-safe dimension enrichment
from pyspark.sql import SparkSession
from pyspark.sql.functions import broadcast

spark = SparkSession.builder.appName("${label}").getOrCreate()

fact = spark.table("bronze.orders")
dim = spark.table("silver.customers")

enriched = fact.join(broadcast(dim), "customer_id", "left")
enriched.write.format("delta").mode("overwrite").saveAsTable("silver.orders_enriched")`,
    };
  }
  return {
    lang: 'python',
    code: `# ${label} — PySpark DataFrame ETL
from pyspark.sql import SparkSession
from pyspark.sql.functions import col, sum as spark_sum, when

spark = SparkSession.builder.appName("${label}").getOrCreate()

raw = spark.read.parquet("abfss://bronze@storage.dfs.core.windows.net/sales/")

clean = (
    raw.filter(col("amount").isNotNull())
       .withColumn("amount_usd", when(col("currency") == "EUR", col("amount") * 1.08).otherwise(col("amount")))
)

summary = clean.groupBy("region").agg(spark_sum("amount_usd").alias("total_usd"))
summary.write.mode("overwrite").parquet("abfss://gold@storage.dfs.core.windows.net/sales_by_region/")`,
  };
}

function dataScienceExamples(slug, label) {
  return {
    lang: 'python',
    code: `# ${label} — EDA with pandas and seaborn
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

df = pd.read_csv("customer_churn.csv")
print(df.describe(include="all"))

# Missingness report
print((df.isna().mean() * 100).sort_values(ascending=False).head())

# Bivariate relationship
sns.boxplot(data=df, x="contract_type", y="monthly_charges")
plt.title("${label}: monthly charges by contract")
plt.tight_layout()
plt.savefig("eda_contract_charges.png")`,
  };
}

function mlExamples(slug, label) {
  if (slug.includes('cluster') || slug.includes('kmeans')) {
    return {
      lang: 'python',
      code: `# ${label} — K-Means with silhouette evaluation
from sklearn.cluster import KMeans
from sklearn.metrics import silhouette_score
from sklearn.preprocessing import StandardScaler
import pandas as pd

X = StandardScaler().fit_transform(pd.read_csv("customers.csv"))

best_k, best_score = None, -1
for k in range(2, 8):
    model = KMeans(n_clusters=k, random_state=42, n_init="auto")
    labels = model.fit_predict(X)
    score = silhouette_score(X, labels)
    if score > best_score:
        best_k, best_score = k, score

print(f"Best k={best_k}, silhouette={best_score:.3f}")`,
    };
  }
  return {
    lang: 'python',
    code: `# ${label} — sklearn Pipeline with cross-validation
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import cross_val_score
import pandas as pd

df = pd.read_csv("fraud_labels.csv")
X, y = df.drop(columns=["is_fraud"]), df["is_fraud"]

num_cols = ["amount", "hour_of_day"]
cat_cols = ["merchant_category", "country"]

preprocess = ColumnTransformer([
    ("num", StandardScaler(), num_cols),
    ("cat", OneHotEncoder(handle_unknown="ignore"), cat_cols),
])

clf = Pipeline([
    ("prep", preprocess),
    ("model", RandomForestClassifier(n_estimators=200, class_weight="balanced", random_state=42)),
])

scores = cross_val_score(clf, X, y, cv=5, scoring="roc_auc")
print(f"ROC-AUC folds: {scores.round(3)}, mean={scores.mean():.3f}")`,
  };
}

function aiClassicalExamples(slug, label) {
  return {
    lang: 'python',
    code: `# ${label} — A* search on a grid
import heapq

def astar(start, goal, neighbors, heuristic):
    open_set = [(0, start)]
    came_from, g_score = {}, {start: 0}

    while open_set:
        _, current = heapq.heappop(open_set)
        if current == goal:
            path = [current]
            while current in came_from:
                current = came_from[current]
                path.append(current)
            return path[::-1]

        for nxt, cost in neighbors(current):
            tentative = g_score[current] + cost
            if tentative < g_score.get(nxt, float("inf")):
                came_from[nxt] = current
                g_score[nxt] = tentative
                f = tentative + heuristic(nxt, goal)
                heapq.heappush(open_set, (f, nxt))
    return None

# Example: pathfind on 4-connected grid (implementation-specific neighbors/heuristic)`,
  };
}

function nlpExamples(slug, label) {
  if (slug.includes('bert') || slug.includes('huggingface') || slug.includes('transform')) {
    return {
      lang: 'python',
      code: `# ${label} — Hugging Face fine-tuning snippet
from transformers import AutoTokenizer, AutoModelForSequenceClassification, Trainer, TrainingArguments
from datasets import load_dataset

model_name = "distilbert-base-uncased"
dataset = load_dataset("imdb", split="train[:2000]")

tokenizer = AutoTokenizer.from_pretrained(model_name)

def tokenize(batch):
    return tokenizer(batch["text"], truncation=True, padding="max_length", max_length=256)

tokenized = dataset.map(tokenize, batched=True)
model = AutoModelForSequenceClassification.from_pretrained(model_name, num_labels=2)

args = TrainingArguments(output_dir="./${slug}", per_device_train_batch_size=16, num_train_epochs=1)
trainer = Trainer(model=model, args=args, train_dataset=tokenized)
trainer.train()`,
    };
  }
  return {
    lang: 'python',
    code: `# ${label} — spaCy NLP pipeline
import spacy
from spacy.lang.en.stop_words import STOP_WORDS

nlp = spacy.load("en_core_web_sm")
doc = nlp("OpenAI released a new embedding model for semantic search applications.")

for ent in doc.ents:
    print(ent.text, ent.label_)

# Token-level attributes
tokens = [t.lemma_.lower() for t in doc if t.is_alpha and t.lemma_.lower() not in STOP_WORDS]
print("Keywords:", tokens)`,
  };
}

function rnnExamples(slug, label) {
  return {
    lang: 'python',
    code: `# ${label} — LSTM sequence classifier in PyTorch
import torch
from torch import nn

class LSTMClassifier(nn.Module):
    def __init__(self, vocab_size, embed_dim=128, hidden_dim=256, num_classes=2):
        super().__init__()
        self.embedding = nn.Embedding(vocab_size, embed_dim)
        self.lstm = nn.LSTM(embed_dim, hidden_dim, batch_first=True)
        self.fc = nn.Linear(hidden_dim, num_classes)

    def forward(self, x):
        emb = self.embedding(x)
        _, (h_n, _) = self.lstm(emb)
        return self.fc(h_n[-1])

model = LSTMClassifier(vocab_size=10000)
batch = torch.randint(0, 10000, (32, 50))
logits = model(batch)
print(logits.shape)  # [32, 2]`,
  };
}

function annExamples(slug, label) {
  return {
    lang: 'python',
    code: `# ${label} — feedforward network with PyTorch
import torch
from torch import nn

class MLP(nn.Module):
    def __init__(self, in_dim, hidden=128, out_dim=10):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(in_dim, hidden),
            nn.ReLU(),
            nn.Dropout(0.2),
            nn.Linear(hidden, hidden),
            nn.ReLU(),
            nn.Linear(hidden, out_dim),
        )

    def forward(self, x):
        return self.net(x)

model = MLP(in_dim=784)
criterion = nn.CrossEntropyLoss()
optimizer = torch.optim.Adam(model.parameters(), lr=1e-3)

x = torch.randn(64, 784)
y = torch.randint(0, 10, (64,))
loss = criterion(model(x), y)
loss.backward()
optimizer.step()`,
  };
}

function cnnExamples(slug, label) {
  return {
    lang: 'python',
    code: `# ${label} — transfer learning with torchvision
import torch
from torchvision import models, transforms
from torch import nn

weights = models.ResNet18_Weights.DEFAULT
model = models.resnet18(weights=weights)
for param in model.parameters():
    param.requires_grad = False

model.fc = nn.Linear(model.fc.in_features, 5)  # 5-class custom head

transform = weights.transforms()
# image_tensor = transform(pil_image).unsqueeze(0)
# logits = model(image_tensor)`,
  };
}

function genaiExamples(slug, label) {
  if (slug.includes('rag')) {
    return {
      lang: 'python',
      code: `# ${label} — minimal RAG with LangChain + Azure OpenAI
from langchain_openai import AzureChatOpenAI, AzureOpenAIEmbeddings
from langchain_community.vectorstores import FAISS
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.chains import RetrievalQA

docs = ["Delta Lake provides ACID on ADLS.", "Medallion architecture uses bronze/silver/gold zones."]
splitter = RecursiveCharacterTextSplitter(chunk_size=400, chunk_overlap=50)
chunks = splitter.create_documents(docs)

emb = AzureOpenAIEmbeddings(azure_deployment="text-embedding-3-small")
vectorstore = FAISS.from_documents(chunks, emb)

llm = AzureChatOpenAI(azure_deployment="gpt-4o-mini", temperature=0)
qa = RetrievalQA.from_chain_type(llm=llm, retriever=vectorstore.as_retriever())
print(qa.invoke({"query": "What is medallion architecture?"}))`,
    };
  }
  return {
    lang: 'python',
    code: `# ${label} — structured prompt with JSON output
from openai import AzureOpenAI
import json

client = AzureOpenAI(api_key="...", azure_endpoint="...", api_version="2024-02-01")

response = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "system", "content": "Extract entities as JSON with keys: people, organizations."},
        {"role": "user", "content": "Satya Nadella announced new Azure AI features at Microsoft Build."},
    ],
    response_format={"type": "json_object"},
)
entities = json.loads(response.choices[0].message.content)
print(entities)`,
  };
}

function azureCliExamples(slug, label) {
  return {
    lang: 'bash',
    code: `# ${label} — Azure CLI resource group and storage
az login
az account set --subscription "DevSpark-NonProd"

az group create --name devspark-rg --location eastus2

az storage account create \\
  --name devsparkstore001 \\
  --resource-group devspark-rg \\
  --sku Standard_LRS \\
  --kind StorageV2 \\
  --enable-hierarchical-namespace true

az storage container create --account-name devsparkstore001 --name bronze --auth-mode login`,
  };
}

function bashExamples(slug, label) {
  return {
    lang: 'bash',
    code: `# ${label} — Git feature branch workflow
git checkout main
git pull origin main
git checkout -b feature/${slug}

# Make changes, then:
git add .
git commit -m "feat: ${label.toLowerCase()} implementation"
git push -u origin feature/${slug}

# Open PR in Azure Repos with linked work item and required reviewers`,
  };
}

function yamlExamples(slug, label) {
  return {
    lang: 'yaml',
    code: `# ${label} — Azure Pipelines CI/CD
trigger:
  branches:
    include: [main]

pr:
  branches:
    include: [main]

pool:
  vmImage: ubuntu-latest

stages:
  - stage: Build
    jobs:
      - job: CI
        steps:
          - task: UsePythonVersion@0
            inputs:
              versionSpec: '3.11'
          - script: |
              pip install -r requirements.txt
              pytest tests/ --junitxml=test-results.xml
            displayName: '${label} — test'
          - publish: $(System.DefaultWorkingDirectory)
            artifact: drop

  - stage: Deploy
    dependsOn: Build
    jobs:
      - deployment: Release
        environment: production
        strategy:
          runOnce:
            deploy:
              steps:
                - download: current
                  artifact: drop
                - script: echo "Deploying ${label} artifact"`,
  };
}

function dockerExamples(slug, label) {
  return {
    lang: 'bash',
    code: `# ${label} — multi-stage Dockerfile pattern
# syntax=docker/dockerfile:1

FROM python:3.11-slim AS builder
WORKDIR /app
COPY requirements.txt .
RUN pip install --user --no-cache-dir -r requirements.txt

FROM python:3.11-slim
WORKDIR /app
COPY --from=builder /root/.local /root/.local
COPY . .
ENV PATH=/root/.local/bin:$PATH
EXPOSE 8080
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8080"]

# docker build -t devspark/${slug}:latest .
# docker run -p 8080:8080 devspark/${slug}:latest`,
  };
}

function k8sExamples(slug, label) {
  return {
    lang: 'yaml',
    code: `# ${label} — Deployment + Service manifest
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api-${slug}
spec:
  replicas: 3
  selector:
    matchLabels:
      app: api-${slug}
  template:
    metadata:
      labels:
        app: api-${slug}
    spec:
      containers:
        - name: api
          image: devspark.azurecr.io/api:${slug}
          ports:
            - containerPort: 8080
          readinessProbe:
            httpGet:
              path: /health
              port: 8080
            initialDelaySeconds: 5
          resources:
            requests:
              cpu: 100m
              memory: 128Mi
            limits:
              cpu: 500m
              memory: 512Mi
---
apiVersion: v1
kind: Service
metadata:
  name: api-${slug}
spec:
  selector:
    app: api-${slug}
  ports:
    - port: 80
      targetPort: 8080
  type: ClusterIP`,
  };
}

function aksExamples(slug, label) {
  return {
    lang: 'bash',
    code: `# ${label} — create AKS cluster with ACR integration
az group create -n devspark-aks-rg -l eastus2

az acr create -n devsparkacr -g devspark-aks-rg --sku Basic

az aks create \\
  -g devspark-aks-rg \\
  -n devspark-aks \\
  --node-count 2 \\
  --enable-managed-identity \\
  --attach-acr devsparkacr

az aks get-credentials -g devspark-aks-rg -n devspark-aks
kubectl get nodes`,
  };
}

function terraformExamples(slug, label) {
  const storageName = `devspark${slug.replace(/-/g, '')}`;
  return {
    lang: 'hcl',
    code: `# ${label} — Terraform Azure storage + RBAC
terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.100"
    }
  }
}

provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "rg" {
  name     = "devspark-${slug}"
  location = "East US 2"
}

resource "azurerm_storage_account" "lake" {
  name                     = "${storageName}"
  resource_group_name      = azurerm_resource_group.rg.name
  location                 = azurerm_resource_group.rg.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
  is_hns_enabled           = true
}`,
  };
}

function kqlExamples(slug, label) {
  return {
    lang: 'sql',
    code: `// ${label} — KQL query in Log Analytics
AzureActivity
| where TimeGenerated > ago(24h)
| where ActivityStatusValue == "Failed"
| summarize failure_count = count() by ResourceGroup, OperationNameValue
| order by failure_count desc
| take 20

// Application Insights — failed requests trend
requests
| where timestamp > ago(1h)
| where success == false
| summarize failures = count() by name, resultCode
| order by failures desc`,
  };
}

function securityExamples(slug, label) {
  return {
    lang: 'bash',
    code: `# ${label} — Key Vault + managed identity pattern
az keyvault create -n devspark-kv -g devspark-rg -l eastus2

# Enable system-assigned identity on App Service / Function / AKS workload
PRINCIPAL_ID="<managed-identity-object-id>"

az keyvault set-policy \\
  --name devspark-kv \\
  --object-id $PRINCIPAL_ID \\
  --secret-permissions get list

az keyvault secret set --vault-name devspark-kv -n SqlConnectionString --value "<connection-string>"`,
  };
}

function buildCodeExample(topicId, page, meta) {
  if (page.codeExample) {
    return { lang: page.codeLang || meta.lang || 'python', code: page.codeExample };
  }
  if (page.noCode) return null;
  return pickCode(topicId, page.slug, page.label, page.description, meta);
}

module.exports = { buildCodeExample, pickCode };
