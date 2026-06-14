/**
 * EDUKRON BLOB — shared navigation, TOC, mobile menu
 */
(function () {
  'use strict';

  const SITE = {
    name: 'EDUKRON BLOB',
    tagline: 'Programming, AI, Azure & data engineering',
    github: 'https://github.com/your-username/devspark-blog',
  };

  /* GENERATED_NAV_START */
  const NAV =   [
      {
          "id": "programming",
          "label": "Programming",
          "href": "programming/index.html",
          "mega": false,
          "children": [
              {
                  "id": "python",
                  "label": "Python",
                  "href": "programming/python/index.html",
                  "stepCount": 35
              },
              {
                  "id": "sql",
                  "label": "SQL",
                  "href": "programming/sql/index.html",
                  "stepCount": 30
              },
              {
                  "id": "pyspark",
                  "label": "PySpark",
                  "href": "programming/pyspark/index.html",
                  "stepCount": 31
              }
          ]
      },
      {
          "id": "ai",
          "label": "AI",
          "href": "ai/index.html",
          "mega": true,
          "children": [
              {
                  "id": "data-science",
                  "label": "Data Science",
                  "href": "ai/data-science/index.html",
                  "stepCount": 25
              },
              {
                  "id": "machine-learning",
                  "label": "Machine Learning",
                  "href": "ai/machine-learning/index.html",
                  "stepCount": 32
              },
              {
                  "id": "artificial-intelligence",
                  "label": "Artificial Intelligence",
                  "href": "ai/artificial-intelligence/index.html",
                  "stepCount": 20
              },
              {
                  "id": "nlp",
                  "label": "NLP",
                  "href": "ai/nlp/index.html",
                  "stepCount": 30
              },
              {
                  "id": "rnn",
                  "label": "RNN",
                  "href": "ai/rnn/index.html",
                  "stepCount": 20
              },
              {
                  "id": "ann",
                  "label": "ANN",
                  "href": "ai/ann/index.html",
                  "stepCount": 22
              },
              {
                  "id": "cnn",
                  "label": "CNN",
                  "href": "ai/cnn/index.html",
                  "stepCount": 20
              },
              {
                  "id": "generative-ai",
                  "label": "Generative AI",
                  "href": "ai/generative-ai/index.html",
                  "stepCount": 25
              },
              {
                  "id": "agentic-ai",
                  "label": "Agentic AI",
                  "href": "ai/agentic-ai/index.html",
                  "stepCount": 24
              }
          ]
      },
      {
          "id": "azure-devops",
          "label": "Azure DevOps",
          "href": "azure-devops/index.html",
          "mega": true,
          "children": [
              {
                  "id": "azure-fundamentals",
                  "label": "Azure Fundamentals",
                  "href": "azure-devops/azure-fundamentals/index.html",
                  "stepCount": 20
              },
              {
                  "id": "azure-repos",
                  "label": "Azure Repos",
                  "href": "azure-devops/azure-repos/index.html",
                  "stepCount": 15
              },
              {
                  "id": "azure-pipelines",
                  "label": "Azure Pipelines",
                  "href": "azure-devops/azure-pipelines/index.html",
                  "stepCount": 21
              },
              {
                  "id": "ci-cd",
                  "label": "CI/CD",
                  "href": "azure-devops/ci-cd/index.html",
                  "stepCount": 20
              },
              {
                  "id": "docker",
                  "label": "Docker",
                  "href": "azure-devops/docker/index.html",
                  "stepCount": 18
              },
              {
                  "id": "kubernetes",
                  "label": "Kubernetes",
                  "href": "azure-devops/kubernetes/index.html",
                  "stepCount": 21
              },
              {
                  "id": "aks",
                  "label": "AKS",
                  "href": "azure-devops/aks/index.html",
                  "stepCount": 16
              },
              {
                  "id": "terraform",
                  "label": "Terraform",
                  "href": "azure-devops/terraform/index.html",
                  "stepCount": 20
              },
              {
                  "id": "monitoring",
                  "label": "Monitoring",
                  "href": "azure-devops/monitoring/index.html",
                  "stepCount": 17
              },
              {
                  "id": "security",
                  "label": "Security",
                  "href": "azure-devops/security/index.html",
                  "stepCount": 16
              }
          ]
      },
      {
          "id": "azure-data-engineering",
          "label": "Azure Data Engineering",
          "href": "azure-data-engineering/index.html",
          "mega": true,
          "children": [
              {
                  "id": "azure-data-factory",
                  "label": "Azure Data Factory",
                  "href": "azure-data-engineering/azure-data-factory/index.html",
                  "stepCount": 28
              },
              {
                  "id": "azure-databricks",
                  "label": "Azure Databricks",
                  "href": "azure-data-engineering/azure-databricks/index.html",
                  "stepCount": 21
              },
              {
                  "id": "adls-gen2",
                  "label": "ADLS Gen2",
                  "href": "azure-data-engineering/adls-gen2/index.html",
                  "stepCount": 15
              },
              {
                  "id": "azure-sql-database",
                  "label": "Azure SQL Database",
                  "href": "azure-data-engineering/azure-sql-database/index.html",
                  "stepCount": 18
              },
              {
                  "id": "synapse-analytics",
                  "label": "Synapse Analytics",
                  "href": "azure-data-engineering/synapse-analytics/index.html",
                  "stepCount": 15
              },
              {
                  "id": "delta-lake",
                  "label": "Delta Lake",
                  "href": "azure-data-engineering/delta-lake/index.html",
                  "stepCount": 17
              },
              {
                  "id": "pyspark-on-databricks",
                  "label": "PySpark on Databricks",
                  "href": "azure-data-engineering/pyspark-on-databricks/index.html",
                  "stepCount": 18,
                  "featuredHref": "blog/spark-architecture.html"
              },
              {
                  "id": "medallion-architecture",
                  "label": "Medallion Architecture",
                  "href": "azure-data-engineering/medallion-architecture/index.html",
                  "stepCount": 15
              },
              {
                  "id": "data-pipeline-projects",
                  "label": "Data Pipeline Projects",
                  "href": "azure-data-engineering/data-pipeline-projects/index.html",
                  "stepCount": 21
              }
          ]
      },
      {
          "id": "interview-questions",
          "label": "Interview Questions",
          "href": "interview-questions/index.html",
          "mega": true,
          "children": [
              {
                  "id": "python-interview-questions",
                  "label": "Python Interview Questions",
                  "href": "interview-questions/python-interview-questions/index.html",
                  "stepCount": 20
              },
              {
                  "id": "sql-interview-questions",
                  "label": "SQL Interview Questions",
                  "href": "interview-questions/sql-interview-questions/index.html",
                  "stepCount": 20
              },
              {
                  "id": "pyspark-interview-questions",
                  "label": "PySpark Interview Questions",
                  "href": "interview-questions/pyspark-interview-questions/index.html",
                  "stepCount": 20,
                  "featuredHref": "blog/spark-architecture.html"
              },
              {
                  "id": "azure-devops-interview-questions",
                  "label": "Azure DevOps Interview Questions",
                  "href": "interview-questions/azure-devops-interview-questions/index.html",
                  "stepCount": 20
              },
              {
                  "id": "azure-data-engineering-interview-questions",
                  "label": "Azure Data Engineering Interview Questions",
                  "href": "interview-questions/azure-data-engineering-interview-questions/index.html",
                  "stepCount": 20
              },
              {
                  "id": "ai-ml-interview-questions",
                  "label": "AI / ML Interview Questions",
                  "href": "interview-questions/ai-ml-interview-questions/index.html",
                  "stepCount": 20
              }
          ]
      }
  ];

  const PAGE_TREE =   [
      {
          "id": "programming",
          "label": "Programming",
          "href": "programming/index.html",
          "topics": [
              {
                  "id": "python",
                  "label": "Python",
                  "href": "programming/python/index.html",
                  "stepCount": 35,
                  "pages": [
                      {
                          "slug": "getting-started",
                          "label": "Getting Started with Python",
                          "description": "Why Python matters for data engineering, automation, and backend development.",
                          "href": "programming/python/getting-started/index.html",
                          "external": false,
                          "step": 1,
                          "totalSteps": 35,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "installation-setup",
                          "label": "Installation & Setup",
                          "description": "Installing Python, choosing an editor, and running your first script.",
                          "href": "programming/python/installation-setup/index.html",
                          "external": false,
                          "step": 2,
                          "totalSteps": 35,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "variables",
                          "label": "Variables & Assignment",
                          "description": "Naming variables, assignment rules, and dynamic typing in Python.",
                          "href": "programming/python/variables/index.html",
                          "external": false,
                          "step": 3,
                          "totalSteps": 35,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "data-types-overview",
                          "label": "Data Types Overview",
                          "description": "Numbers, strings, booleans, and type checking with type().",
                          "href": "programming/python/data-types-overview/index.html",
                          "external": false,
                          "step": 4,
                          "totalSteps": 35,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "numbers-math",
                          "label": "Numbers & Math",
                          "description": "Integers, floats, arithmetic operators, and math module basics.",
                          "href": "programming/python/numbers-math/index.html",
                          "external": false,
                          "step": 5,
                          "totalSteps": 35,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "strings",
                          "label": "Strings",
                          "description": "String creation, slicing, formatting, and common string methods.",
                          "href": "programming/python/strings/index.html",
                          "external": false,
                          "step": 6,
                          "totalSteps": 35,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "lists",
                          "label": "Lists",
                          "description": "Mutable sequences, indexing, slicing, and list methods.",
                          "href": "programming/python/lists/index.html",
                          "external": false,
                          "step": 7,
                          "totalSteps": 35,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "tuples",
                          "label": "Tuples",
                          "description": "Immutable sequences, packing/unpacking, and when to use tuples.",
                          "href": "programming/python/tuples/index.html",
                          "external": false,
                          "step": 8,
                          "totalSteps": 35,
                          "phase": "Beginner",
                          "readMinutes": 11
                      },
                      {
                          "slug": "sets",
                          "label": "Sets",
                          "description": "Unique collections, set operations, and membership testing.",
                          "href": "programming/python/sets/index.html",
                          "external": false,
                          "step": 9,
                          "totalSteps": 35,
                          "phase": "Beginner",
                          "readMinutes": 11
                      },
                      {
                          "slug": "dictionaries",
                          "label": "Dictionaries",
                          "description": "Key-value mappings, dict methods, and nested structures.",
                          "href": "programming/python/dictionaries/index.html",
                          "external": false,
                          "step": 10,
                          "totalSteps": 35,
                          "phase": "Beginner",
                          "readMinutes": 11
                      },
                      {
                          "slug": "operators",
                          "label": "Operators",
                          "description": "Arithmetic, comparison, logical, and assignment operators.",
                          "href": "programming/python/operators/index.html",
                          "external": false,
                          "step": 11,
                          "totalSteps": 35,
                          "phase": "Beginner",
                          "readMinutes": 11
                      },
                      {
                          "slug": "control-flow-if",
                          "label": "If Statements",
                          "description": "Conditional logic with if, elif, else, and truthiness.",
                          "href": "programming/python/control-flow-if/index.html",
                          "external": false,
                          "step": 12,
                          "totalSteps": 35,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "loops",
                          "label": "Loops",
                          "description": "for and while loops, break, continue, and loop patterns.",
                          "href": "programming/python/loops/index.html",
                          "external": false,
                          "step": 13,
                          "totalSteps": 35,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "functions-basics",
                          "label": "Functions Basics",
                          "description": "Defining functions, calling functions, and docstrings.",
                          "href": "programming/python/functions-basics/index.html",
                          "external": false,
                          "step": 14,
                          "totalSteps": 35,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "function-parameters",
                          "label": "Function Parameters",
                          "description": "Positional, keyword, default, *args, and **kwargs.",
                          "href": "programming/python/function-parameters/index.html",
                          "external": false,
                          "step": 15,
                          "totalSteps": 35,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "scope-closures",
                          "label": "Scope & Closures",
                          "description": "Local vs global scope, LEGB rule, and closure patterns.",
                          "href": "programming/python/scope-closures/index.html",
                          "external": false,
                          "step": 16,
                          "totalSteps": 35,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "comprehensions",
                          "label": "Comprehensions",
                          "description": "List, dict, and set comprehensions for concise transformations.",
                          "href": "programming/python/comprehensions/index.html",
                          "external": false,
                          "step": 17,
                          "totalSteps": 35,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "file-io",
                          "label": "File I/O",
                          "description": "Reading and writing text files with open() and pathlib.",
                          "href": "programming/python/file-io/index.html",
                          "external": false,
                          "step": 18,
                          "totalSteps": 35,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "exceptions",
                          "label": "Exception Handling",
                          "description": "try/except/else/finally, raising exceptions, and custom errors.",
                          "href": "programming/python/exceptions/index.html",
                          "external": false,
                          "step": 19,
                          "totalSteps": 35,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "modules-imports",
                          "label": "Modules & Imports",
                          "description": "Import statements, packages, __name__, and project structure.",
                          "href": "programming/python/modules-imports/index.html",
                          "external": false,
                          "step": 20,
                          "totalSteps": 35,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "oop-classes",
                          "label": "Classes & Objects",
                          "description": "Defining classes, __init__, instance attributes, and methods.",
                          "href": "programming/python/oop-classes/index.html",
                          "external": false,
                          "step": 21,
                          "totalSteps": 35,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "oop-inheritance",
                          "label": "Inheritance & Polymorphism",
                          "description": "Subclassing, method overriding, and super().",
                          "href": "programming/python/oop-inheritance/index.html",
                          "external": false,
                          "step": 22,
                          "totalSteps": 35,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "decorators",
                          "label": "Decorators",
                          "description": "Function decorators, functools.wraps, and practical decorator patterns.",
                          "href": "programming/python/decorators/index.html",
                          "external": false,
                          "step": 23,
                          "totalSteps": 35,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "generators",
                          "label": "Generators",
                          "description": "yield keyword, generator expressions, and lazy iteration.",
                          "href": "programming/python/generators/index.html",
                          "external": false,
                          "step": 24,
                          "totalSteps": 35,
                          "phase": "Advanced",
                          "readMinutes": 17
                      },
                      {
                          "slug": "context-managers",
                          "label": "Context Managers",
                          "description": "with statements, contextlib, and resource management.",
                          "href": "programming/python/context-managers/index.html",
                          "external": false,
                          "step": 25,
                          "totalSteps": 35,
                          "phase": "Advanced",
                          "readMinutes": 17
                      },
                      {
                          "slug": "virtual-environments",
                          "label": "Virtual Environments",
                          "description": "venv, conda, and isolating project dependencies.",
                          "href": "programming/python/virtual-environments/index.html",
                          "external": false,
                          "step": 26,
                          "totalSteps": 35,
                          "phase": "Advanced",
                          "readMinutes": 17
                      },
                      {
                          "slug": "pip-packaging",
                          "label": "pip & Packaging",
                          "description": "Installing packages, requirements.txt, and pyproject.toml basics.",
                          "href": "programming/python/pip-packaging/index.html",
                          "external": false,
                          "step": 27,
                          "totalSteps": 35,
                          "phase": "Advanced",
                          "readMinutes": 17
                      },
                      {
                          "slug": "numpy-intro",
                          "label": "NumPy Introduction",
                          "description": "ndarrays, vectorization, and numerical computing fundamentals.",
                          "href": "programming/python/numpy-intro/index.html",
                          "external": false,
                          "step": 28,
                          "totalSteps": 35,
                          "phase": "Advanced",
                          "readMinutes": 17
                      },
                      {
                          "slug": "pandas-intro",
                          "label": "Pandas Introduction",
                          "description": "DataFrames, Series, and essential data manipulation.",
                          "href": "programming/python/pandas-intro/index.html",
                          "external": false,
                          "step": 29,
                          "totalSteps": 35,
                          "phase": "Advanced",
                          "readMinutes": 17
                      },
                      {
                          "slug": "asyncio",
                          "label": "Asyncio Basics",
                          "description": "async/await, event loops, and concurrent I/O patterns.",
                          "href": "programming/python/asyncio/index.html",
                          "external": false,
                          "step": 30,
                          "totalSteps": 35,
                          "phase": "Advanced",
                          "readMinutes": 17
                      },
                      {
                          "slug": "testing",
                          "label": "Testing with pytest",
                          "description": "Writing tests, fixtures, parametrize, and TDD workflows.",
                          "href": "programming/python/testing/index.html",
                          "external": false,
                          "step": 31,
                          "totalSteps": 35,
                          "phase": "Advanced",
                          "readMinutes": 17
                      },
                      {
                          "slug": "type-hints",
                          "label": "Type Hints",
                          "description": "Annotations, typing module, and static analysis with mypy.",
                          "href": "programming/python/type-hints/index.html",
                          "external": false,
                          "step": 32,
                          "totalSteps": 35,
                          "phase": "Advanced",
                          "readMinutes": 18
                      },
                      {
                          "slug": "logging",
                          "label": "Logging",
                          "description": "logging module, log levels, handlers, and production logging patterns.",
                          "href": "programming/python/logging/index.html",
                          "external": false,
                          "step": 33,
                          "totalSteps": 35,
                          "phase": "Advanced",
                          "readMinutes": 18
                      },
                      {
                          "slug": "best-practices",
                          "label": "Best Practices",
                          "description": "PEP 8, clean code, and production-ready Python habits.",
                          "href": "programming/python/best-practices/index.html",
                          "external": false,
                          "step": 34,
                          "totalSteps": 35,
                          "phase": "Advanced",
                          "readMinutes": 18
                      },
                      {
                          "slug": "capstone",
                          "label": "Capstone Project",
                          "description": "Build a small CLI or data script combining concepts from this path.",
                          "href": "programming/python/capstone/index.html",
                          "external": false,
                          "step": 35,
                          "totalSteps": 35,
                          "phase": "Advanced",
                          "readMinutes": 18
                      }
                  ]
              },
              {
                  "id": "sql",
                  "label": "SQL",
                  "href": "programming/sql/index.html",
                  "stepCount": 30,
                  "pages": [
                      {
                          "slug": "introduction",
                          "label": "Introduction to SQL",
                          "description": "Relational databases, SQL dialects, and the query execution model.",
                          "href": "programming/sql/introduction/index.html",
                          "external": false,
                          "step": 1,
                          "totalSteps": 30,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "select-basics",
                          "label": "SELECT Basics",
                          "description": "Retrieving columns and rows from tables with SELECT.",
                          "href": "programming/sql/select-basics/index.html",
                          "external": false,
                          "step": 2,
                          "totalSteps": 30,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "where-filtering",
                          "label": "WHERE & Filtering",
                          "description": "Filtering rows with comparison, IN, BETWEEN, and LIKE.",
                          "href": "programming/sql/where-filtering/index.html",
                          "external": false,
                          "step": 3,
                          "totalSteps": 30,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "sorting-limit",
                          "label": "ORDER BY & LIMIT",
                          "description": "Sorting results and limiting row counts.",
                          "href": "programming/sql/sorting-limit/index.html",
                          "external": false,
                          "step": 4,
                          "totalSteps": 30,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "aggregates",
                          "label": "Aggregate Functions",
                          "description": "COUNT, SUM, AVG, MIN, MAX, and NULL handling.",
                          "href": "programming/sql/aggregates/index.html",
                          "external": false,
                          "step": 5,
                          "totalSteps": 30,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "group-by",
                          "label": "GROUP BY & HAVING",
                          "description": "Grouping rows and filtering aggregated results.",
                          "href": "programming/sql/group-by/index.html",
                          "external": false,
                          "step": 6,
                          "totalSteps": 30,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "joins-inner",
                          "label": "INNER JOIN",
                          "description": "Combining tables on matching keys with INNER JOIN.",
                          "href": "programming/sql/joins-inner/index.html",
                          "external": false,
                          "step": 7,
                          "totalSteps": 30,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "joins-outer",
                          "label": "OUTER JOINs",
                          "description": "LEFT, RIGHT, and FULL outer joins for incomplete matches.",
                          "href": "programming/sql/joins-outer/index.html",
                          "external": false,
                          "step": 8,
                          "totalSteps": 30,
                          "phase": "Beginner",
                          "readMinutes": 11
                      },
                      {
                          "slug": "joins-cross",
                          "label": "CROSS JOIN & Self Join",
                          "description": "Cartesian products and joining a table to itself.",
                          "href": "programming/sql/joins-cross/index.html",
                          "external": false,
                          "step": 9,
                          "totalSteps": 30,
                          "phase": "Beginner",
                          "readMinutes": 11
                      },
                      {
                          "slug": "subqueries",
                          "label": "Subqueries",
                          "description": "Nested SELECT statements in WHERE, FROM, and SELECT clauses.",
                          "href": "programming/sql/subqueries/index.html",
                          "external": false,
                          "step": 10,
                          "totalSteps": 30,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "correlated-subqueries",
                          "label": "Correlated Subqueries",
                          "description": "Subqueries that reference outer query columns.",
                          "href": "programming/sql/correlated-subqueries/index.html",
                          "external": false,
                          "step": 11,
                          "totalSteps": 30,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "ctes",
                          "label": "Common Table Expressions",
                          "description": "WITH clauses for readable, modular query design.",
                          "href": "programming/sql/ctes/index.html",
                          "external": false,
                          "step": 12,
                          "totalSteps": 30,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "window-functions-intro",
                          "label": "Window Functions Intro",
                          "description": "OVER clause, PARTITION BY, and ROW_NUMBER.",
                          "href": "programming/sql/window-functions-intro/index.html",
                          "external": false,
                          "step": 13,
                          "totalSteps": 30,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "window-ranking",
                          "label": "Ranking Functions",
                          "description": "RANK, DENSE_RANK, and NTILE for ordered analytics.",
                          "href": "programming/sql/window-ranking/index.html",
                          "external": false,
                          "step": 14,
                          "totalSteps": 30,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "window-offset",
                          "label": "LAG & LEAD",
                          "description": "Accessing previous and next row values in result sets.",
                          "href": "programming/sql/window-offset/index.html",
                          "external": false,
                          "step": 15,
                          "totalSteps": 30,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "data-types",
                          "label": "SQL Data Types",
                          "description": "Numeric, string, date/time, and JSON types across dialects.",
                          "href": "programming/sql/data-types/index.html",
                          "external": false,
                          "step": 16,
                          "totalSteps": 30,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "constraints",
                          "label": "Constraints",
                          "description": "PRIMARY KEY, FOREIGN KEY, UNIQUE, CHECK, and NOT NULL.",
                          "href": "programming/sql/constraints/index.html",
                          "external": false,
                          "step": 17,
                          "totalSteps": 30,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "normalization",
                          "label": "Normalization",
                          "description": "1NF through 3NF, denormalization trade-offs, and schema design.",
                          "href": "programming/sql/normalization/index.html",
                          "external": false,
                          "step": 18,
                          "totalSteps": 30,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "indexes",
                          "label": "Indexes",
                          "description": "B-tree indexes, composite indexes, and covering indexes.",
                          "href": "programming/sql/indexes/index.html",
                          "external": false,
                          "step": 19,
                          "totalSteps": 30,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "views",
                          "label": "Views",
                          "description": "Virtual tables, updatable views, and security through views.",
                          "href": "programming/sql/views/index.html",
                          "external": false,
                          "step": 20,
                          "totalSteps": 30,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "stored-procedures",
                          "label": "Stored Procedures",
                          "description": "Server-side procedures, functions, and parameters.",
                          "href": "programming/sql/stored-procedures/index.html",
                          "external": false,
                          "step": 21,
                          "totalSteps": 30,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "transactions",
                          "label": "Transactions & ACID",
                          "description": "BEGIN, COMMIT, ROLLBACK, and isolation levels.",
                          "href": "programming/sql/transactions/index.html",
                          "external": false,
                          "step": 22,
                          "totalSteps": 30,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "query-plans",
                          "label": "Query Execution Plans",
                          "description": "Reading EXPLAIN output and identifying bottlenecks.",
                          "href": "programming/sql/query-plans/index.html",
                          "external": false,
                          "step": 23,
                          "totalSteps": 30,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "performance-tuning",
                          "label": "Performance Tuning",
                          "description": "Statistics, index selection, and query rewriting.",
                          "href": "programming/sql/performance-tuning/index.html",
                          "external": false,
                          "step": 24,
                          "totalSteps": 30,
                          "phase": "Advanced",
                          "readMinutes": 17
                      },
                      {
                          "slug": "temp-tables",
                          "label": "Temporary Tables",
                          "description": "Session temp tables, table variables, and staging patterns.",
                          "href": "programming/sql/temp-tables/index.html",
                          "external": false,
                          "step": 25,
                          "totalSteps": 30,
                          "phase": "Advanced",
                          "readMinutes": 17
                      },
                      {
                          "slug": "pivot-unpivot",
                          "label": "PIVOT & UNPIVOT",
                          "description": "Transforming rows to columns and back for reporting.",
                          "href": "programming/sql/pivot-unpivot/index.html",
                          "external": false,
                          "step": 26,
                          "totalSteps": 30,
                          "phase": "Advanced",
                          "readMinutes": 17
                      },
                      {
                          "slug": "json-sql",
                          "label": "JSON in SQL",
                          "description": "JSON columns, extraction operators, and semi-structured data.",
                          "href": "programming/sql/json-sql/index.html",
                          "external": false,
                          "step": 27,
                          "totalSteps": 30,
                          "phase": "Advanced",
                          "readMinutes": 17
                      },
                      {
                          "slug": "merge-upsert",
                          "label": "MERGE / Upsert",
                          "description": "INSERT ON CONFLICT, MERGE statements, and SCD patterns.",
                          "href": "programming/sql/merge-upsert/index.html",
                          "external": false,
                          "step": 28,
                          "totalSteps": 30,
                          "phase": "Advanced",
                          "readMinutes": 17
                      },
                      {
                          "slug": "security",
                          "label": "SQL Security",
                          "description": "SQL injection prevention, grants, roles, and row-level security.",
                          "href": "programming/sql/security/index.html",
                          "external": false,
                          "step": 29,
                          "totalSteps": 30,
                          "phase": "Advanced",
                          "readMinutes": 17
                      },
                      {
                          "slug": "interview-patterns",
                          "label": "Analytical SQL Patterns",
                          "description": "Running totals, top-N per group, and gap detection.",
                          "href": "programming/sql/interview-patterns/index.html",
                          "external": false,
                          "step": 30,
                          "totalSteps": 30,
                          "phase": "Advanced",
                          "readMinutes": 17
                      }
                  ]
              },
              {
                  "id": "pyspark",
                  "label": "PySpark",
                  "href": "programming/pyspark/index.html",
                  "stepCount": 31,
                  "pages": [
                      {
                          "slug": "introduction",
                          "label": "Introduction to PySpark",
                          "description": "Distributed computing, Spark ecosystem, and when to use Spark.",
                          "href": "programming/pyspark/introduction/index.html",
                          "external": false,
                          "step": 1,
                          "totalSteps": 31,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "spark-session",
                          "label": "SparkSession Setup",
                          "description": "Creating SparkSession, configs, and local vs cluster modes.",
                          "href": "programming/pyspark/spark-session/index.html",
                          "external": false,
                          "step": 2,
                          "totalSteps": 31,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "rdd-basics",
                          "label": "RDD Basics",
                          "description": "Resilient Distributed Datasets — Spark's foundational abstraction.",
                          "href": "programming/pyspark/rdd-basics/index.html",
                          "external": false,
                          "step": 3,
                          "totalSteps": 31,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "rdd-transformations",
                          "label": "RDD Transformations",
                          "description": "map, filter, flatMap, and lazy evaluation on RDDs.",
                          "href": "programming/pyspark/rdd-transformations/index.html",
                          "external": false,
                          "step": 4,
                          "totalSteps": 31,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "rdd-actions",
                          "label": "RDD Actions",
                          "description": "collect, count, reduce, and triggering job execution.",
                          "href": "programming/pyspark/rdd-actions/index.html",
                          "external": false,
                          "step": 5,
                          "totalSteps": 31,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "dataframes-intro",
                          "label": "DataFrames Introduction",
                          "description": "Structured data, schemas, and Spark SQL integration.",
                          "href": "programming/pyspark/dataframes-intro/index.html",
                          "external": false,
                          "step": 6,
                          "totalSteps": 31,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "reading-data",
                          "label": "Reading Data",
                          "description": "CSV, JSON, Parquet, and JDBC sources with options.",
                          "href": "programming/pyspark/reading-data/index.html",
                          "external": false,
                          "step": 7,
                          "totalSteps": 31,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "writing-data",
                          "label": "Writing Data",
                          "description": "Save modes, partitioning on write, and file formats.",
                          "href": "programming/pyspark/writing-data/index.html",
                          "external": false,
                          "step": 8,
                          "totalSteps": 31,
                          "phase": "Beginner",
                          "readMinutes": 11
                      },
                      {
                          "slug": "select-filter",
                          "label": "Select & Filter",
                          "description": "Column selection, where clauses, and column expressions.",
                          "href": "programming/pyspark/select-filter/index.html",
                          "external": false,
                          "step": 9,
                          "totalSteps": 31,
                          "phase": "Beginner",
                          "readMinutes": 11
                      },
                      {
                          "slug": "aggregations",
                          "label": "Aggregations",
                          "description": "groupBy, agg, pivot, and rollup/cube operations.",
                          "href": "programming/pyspark/aggregations/index.html",
                          "external": false,
                          "step": 10,
                          "totalSteps": 31,
                          "phase": "Beginner",
                          "readMinutes": 11
                      },
                      {
                          "slug": "joins",
                          "label": "DataFrame Joins",
                          "description": "Join types, broadcast hints, and join optimization.",
                          "href": "programming/pyspark/joins/index.html",
                          "external": false,
                          "step": 11,
                          "totalSteps": 31,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "transformations-lazy",
                          "label": "Lazy Transformations",
                          "description": "Transformation lineage, DAG, and catalyst involvement.",
                          "href": "programming/pyspark/transformations-lazy/index.html",
                          "external": false,
                          "step": 12,
                          "totalSteps": 31,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "actions-eager",
                          "label": "Eager Actions",
                          "description": "show, count, collect, and understanding job triggers.",
                          "href": "programming/pyspark/actions-eager/index.html",
                          "external": false,
                          "step": 13,
                          "totalSteps": 31,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "spark-sql",
                          "label": "Spark SQL",
                          "description": "spark.sql(), temp views, and global temp views.",
                          "href": "programming/pyspark/spark-sql/index.html",
                          "external": false,
                          "step": 14,
                          "totalSteps": 31,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "udfs",
                          "label": "User-Defined Functions",
                          "description": "Python UDFs, Pandas UDFs, and performance trade-offs.",
                          "href": "programming/pyspark/udfs/index.html",
                          "external": false,
                          "step": 15,
                          "totalSteps": 31,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "partitioning",
                          "label": "Partitioning",
                          "description": "repartition, coalesce, partition pruning, and shuffle impact.",
                          "href": "programming/pyspark/partitioning/index.html",
                          "external": false,
                          "step": 16,
                          "totalSteps": 31,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "caching",
                          "label": "Caching & Persistence",
                          "description": "cache, persist, storage levels, and memory management.",
                          "href": "programming/pyspark/caching/index.html",
                          "external": false,
                          "step": 17,
                          "totalSteps": 31,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "broadcast-joins",
                          "label": "Broadcast Joins",
                          "description": "When to broadcast, spark.sql.autoBroadcastJoinThreshold.",
                          "href": "programming/pyspark/broadcast-joins/index.html",
                          "external": false,
                          "step": 18,
                          "totalSteps": 31,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "handling-skew",
                          "label": "Handling Data Skew",
                          "description": "Salting, AQE skew join, and repartition strategies.",
                          "href": "programming/pyspark/handling-skew/index.html",
                          "external": false,
                          "step": 19,
                          "totalSteps": 31,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "window-functions",
                          "label": "Window Functions",
                          "description": "Window specs, ranking, and analytic functions in Spark.",
                          "href": "programming/pyspark/window-functions/index.html",
                          "external": false,
                          "step": 20,
                          "totalSteps": 31,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "streaming-intro",
                          "label": "Structured Streaming Intro",
                          "description": "Streaming DataFrames, triggers, and output modes.",
                          "href": "programming/pyspark/streaming-intro/index.html",
                          "external": false,
                          "step": 21,
                          "totalSteps": 31,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "watermarks",
                          "label": "Watermarks & Late Data",
                          "description": "Event-time processing and stateful aggregations.",
                          "href": "programming/pyspark/watermarks/index.html",
                          "external": false,
                          "step": 22,
                          "totalSteps": 31,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "performance-tuning",
                          "label": "Performance Tuning",
                          "description": "Spark UI, stages, tasks, and configuration knobs.",
                          "href": "programming/pyspark/performance-tuning/index.html",
                          "external": false,
                          "step": 23,
                          "totalSteps": 31,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "spark-config",
                          "label": "Spark Configuration",
                          "description": "executor memory, cores, shuffle partitions, and AQE.",
                          "href": "programming/pyspark/spark-config/index.html",
                          "external": false,
                          "step": 24,
                          "totalSteps": 31,
                          "phase": "Advanced",
                          "readMinutes": 17
                      },
                      {
                          "slug": "error-debugging",
                          "label": "Debugging Spark Jobs",
                          "description": "Reading logs, common exceptions, and troubleshooting.",
                          "href": "programming/pyspark/error-debugging/index.html",
                          "external": false,
                          "step": 25,
                          "totalSteps": 31,
                          "phase": "Advanced",
                          "readMinutes": 17
                      },
                      {
                          "slug": "testing-pyspark",
                          "label": "Testing PySpark",
                          "description": "Local testing, chispa, and unit test patterns.",
                          "href": "programming/pyspark/testing-pyspark/index.html",
                          "external": false,
                          "step": 26,
                          "totalSteps": 31,
                          "phase": "Advanced",
                          "readMinutes": 17
                      },
                      {
                          "slug": "delta-intro",
                          "label": "Delta Lake Intro",
                          "description": "ACID tables, time travel, and merge operations overview.",
                          "href": "programming/pyspark/delta-intro/index.html",
                          "external": false,
                          "step": 27,
                          "totalSteps": 31,
                          "phase": "Advanced",
                          "readMinutes": 17
                      },
                      {
                          "slug": "production-patterns",
                          "label": "Production Patterns",
                          "description": "Job scheduling, monitoring, and deployment on clusters.",
                          "href": "programming/pyspark/production-patterns/index.html",
                          "external": false,
                          "step": 28,
                          "totalSteps": 31,
                          "phase": "Advanced",
                          "readMinutes": 17
                      },
                      {
                          "slug": "architecture",
                          "label": "Spark Architecture Deep Dive",
                          "description": "Cluster architecture, scheduling, shuffle, and Catalyst optimizer.",
                          "href": "blog/spark-architecture.html",
                          "external": true,
                          "step": 29,
                          "totalSteps": 31,
                          "phase": "Advanced",
                          "readMinutes": 5
                      },
                      {
                          "slug": "best-practices",
                          "label": "PySpark Best Practices",
                          "description": "Code organization, avoiding UDFs, and performance habits.",
                          "href": "programming/pyspark/best-practices/index.html",
                          "external": false,
                          "step": 30,
                          "totalSteps": 31,
                          "phase": "Advanced",
                          "readMinutes": 17
                      },
                      {
                          "slug": "capstone-etl",
                          "label": "Capstone ETL Job",
                          "description": "End-to-end batch pipeline design with PySpark.",
                          "href": "programming/pyspark/capstone-etl/index.html",
                          "external": false,
                          "step": 31,
                          "totalSteps": 31,
                          "phase": "Advanced",
                          "readMinutes": 17
                      }
                  ]
              }
          ]
      },
      {
          "id": "ai",
          "label": "AI",
          "href": "ai/index.html",
          "topics": [
              {
                  "id": "data-science",
                  "label": "Data Science",
                  "href": "ai/data-science/index.html",
                  "stepCount": 25,
                  "pages": [
                      {
                          "slug": "what-is-data-science",
                          "label": "What is Data Science?",
                          "description": "The data science lifecycle, roles, and core competencies.",
                          "href": "ai/data-science/what-is-data-science/index.html",
                          "external": false,
                          "step": 1,
                          "totalSteps": 25,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "data-types-sources",
                          "label": "Data Types & Sources",
                          "description": "Structured, semi-structured, unstructured data and acquisition.",
                          "href": "ai/data-science/data-types-sources/index.html",
                          "external": false,
                          "step": 2,
                          "totalSteps": 25,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "python-for-ds",
                          "label": "Python for Data Science",
                          "description": "NumPy, pandas, matplotlib ecosystem overview.",
                          "href": "ai/data-science/python-for-ds/index.html",
                          "external": false,
                          "step": 3,
                          "totalSteps": 25,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "jupyter-workflows",
                          "label": "Jupyter Workflows",
                          "description": "Notebooks, reproducibility, and collaborative analysis.",
                          "href": "ai/data-science/jupyter-workflows/index.html",
                          "external": false,
                          "step": 4,
                          "totalSteps": 25,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "descriptive-stats",
                          "label": "Descriptive Statistics",
                          "description": "Mean, median, mode, variance, and distribution shapes.",
                          "href": "ai/data-science/descriptive-stats/index.html",
                          "external": false,
                          "step": 5,
                          "totalSteps": 25,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "probability-basics",
                          "label": "Probability Basics",
                          "description": "Conditional probability, Bayes theorem, and random variables.",
                          "href": "ai/data-science/probability-basics/index.html",
                          "external": false,
                          "step": 6,
                          "totalSteps": 25,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "distributions",
                          "label": "Statistical Distributions",
                          "description": "Normal, binomial, Poisson, and when each applies.",
                          "href": "ai/data-science/distributions/index.html",
                          "external": false,
                          "step": 7,
                          "totalSteps": 25,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "hypothesis-testing",
                          "label": "Hypothesis Testing",
                          "description": "p-values, t-tests, chi-square, and significance levels.",
                          "href": "ai/data-science/hypothesis-testing/index.html",
                          "external": false,
                          "step": 8,
                          "totalSteps": 25,
                          "phase": "Beginner",
                          "readMinutes": 11
                      },
                      {
                          "slug": "correlation",
                          "label": "Correlation & Covariance",
                          "description": "Pearson, Spearman, and interpreting relationships.",
                          "href": "ai/data-science/correlation/index.html",
                          "external": false,
                          "step": 9,
                          "totalSteps": 25,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "data-cleaning",
                          "label": "Data Cleaning",
                          "description": "Missing values, outliers, duplicates, and imputation strategies.",
                          "href": "ai/data-science/data-cleaning/index.html",
                          "external": false,
                          "step": 10,
                          "totalSteps": 25,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "feature-exploration",
                          "label": "Feature Exploration",
                          "description": "Univariate and bivariate analysis techniques.",
                          "href": "ai/data-science/feature-exploration/index.html",
                          "external": false,
                          "step": 11,
                          "totalSteps": 25,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "visualization-basics",
                          "label": "Visualization Basics",
                          "description": "Bar, line, scatter, histogram charts with matplotlib/seaborn.",
                          "href": "ai/data-science/visualization-basics/index.html",
                          "external": false,
                          "step": 12,
                          "totalSteps": 25,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "visualization-advanced",
                          "label": "Advanced Visualization",
                          "description": "Heatmaps, pair plots, and storytelling with data.",
                          "href": "ai/data-science/visualization-advanced/index.html",
                          "external": false,
                          "step": 13,
                          "totalSteps": 25,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "eda-workflow",
                          "label": "EDA Workflow",
                          "description": "Systematic exploratory data analysis from raw to insights.",
                          "href": "ai/data-science/eda-workflow/index.html",
                          "external": false,
                          "step": 14,
                          "totalSteps": 25,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "sampling",
                          "label": "Sampling Methods",
                          "description": "Random, stratified, bootstrap, and sampling bias.",
                          "href": "ai/data-science/sampling/index.html",
                          "external": false,
                          "step": 15,
                          "totalSteps": 25,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "ab-testing",
                          "label": "A/B Testing",
                          "description": "Experiment design, metrics, and statistical analysis of experiments.",
                          "href": "ai/data-science/ab-testing/index.html",
                          "external": false,
                          "step": 16,
                          "totalSteps": 25,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "time-series-intro",
                          "label": "Time Series Intro",
                          "description": "Trends, seasonality, and basic time series decomposition.",
                          "href": "ai/data-science/time-series-intro/index.html",
                          "external": false,
                          "step": 17,
                          "totalSteps": 25,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "sql-for-analysts",
                          "label": "SQL for Analysts",
                          "description": "Analytical queries analysts use daily in warehouses.",
                          "href": "ai/data-science/sql-for-analysts/index.html",
                          "external": false,
                          "step": 18,
                          "totalSteps": 25,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "communication",
                          "label": "Communicating Insights",
                          "description": "Reports, dashboards, and stakeholder presentations.",
                          "href": "ai/data-science/communication/index.html",
                          "external": false,
                          "step": 19,
                          "totalSteps": 25,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "ethics-bias",
                          "label": "Ethics & Bias",
                          "description": "Fairness, privacy, and responsible data practices.",
                          "href": "ai/data-science/ethics-bias/index.html",
                          "external": false,
                          "step": 20,
                          "totalSteps": 25,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "tools-ecosystem",
                          "label": "Tools Ecosystem",
                          "description": "pandas, scikit-learn, SQL, and cloud notebook platforms.",
                          "href": "ai/data-science/tools-ecosystem/index.html",
                          "external": false,
                          "step": 21,
                          "totalSteps": 25,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "case-study-retail",
                          "label": "Case Study: Retail Analytics",
                          "description": "End-to-end analysis of sales and customer data.",
                          "href": "ai/data-science/case-study-retail/index.html",
                          "external": false,
                          "step": 22,
                          "totalSteps": 25,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "case-study-churn",
                          "label": "Case Study: Churn Analysis",
                          "description": "Identifying at-risk customers with EDA and modeling prep.",
                          "href": "ai/data-science/case-study-churn/index.html",
                          "external": false,
                          "step": 23,
                          "totalSteps": 25,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "portfolio-projects",
                          "label": "Portfolio Projects",
                          "description": "Building a data science portfolio that gets interviews.",
                          "href": "ai/data-science/portfolio-projects/index.html",
                          "external": false,
                          "step": 24,
                          "totalSteps": 25,
                          "phase": "Advanced",
                          "readMinutes": 17
                      },
                      {
                          "slug": "career-path",
                          "label": "Career Path",
                          "description": "Junior to senior data scientist skills and certifications.",
                          "href": "ai/data-science/career-path/index.html",
                          "external": false,
                          "step": 25,
                          "totalSteps": 25,
                          "phase": "Advanced",
                          "readMinutes": 17
                      }
                  ]
              },
              {
                  "id": "machine-learning",
                  "label": "Machine Learning",
                  "href": "ai/machine-learning/index.html",
                  "stepCount": 32,
                  "pages": [
                      {
                          "slug": "ml-overview",
                          "label": "Machine Learning Overview",
                          "description": "Supervised, unsupervised, reinforcement learning paradigms.",
                          "href": "ai/machine-learning/ml-overview/index.html",
                          "external": false,
                          "step": 1,
                          "totalSteps": 32,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "scikit-learn-setup",
                          "label": "scikit-learn Setup",
                          "description": "Installation, API conventions, and estimator interface.",
                          "href": "ai/machine-learning/scikit-learn-setup/index.html",
                          "external": false,
                          "step": 2,
                          "totalSteps": 32,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "train-test-split",
                          "label": "Train/Test Split",
                          "description": "Holdout validation, random_state, and data leakage prevention.",
                          "href": "ai/machine-learning/train-test-split/index.html",
                          "external": false,
                          "step": 3,
                          "totalSteps": 32,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "linear-regression",
                          "label": "Linear Regression",
                          "description": "Ordinary least squares, coefficients, and R-squared.",
                          "href": "ai/machine-learning/linear-regression/index.html",
                          "external": false,
                          "step": 4,
                          "totalSteps": 32,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "logistic-regression",
                          "label": "Logistic Regression",
                          "description": "Binary classification, sigmoid, and decision boundaries.",
                          "href": "ai/machine-learning/logistic-regression/index.html",
                          "external": false,
                          "step": 5,
                          "totalSteps": 32,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "knn",
                          "label": "K-Nearest Neighbors",
                          "description": "Instance-based learning, distance metrics, and k selection.",
                          "href": "ai/machine-learning/knn/index.html",
                          "external": false,
                          "step": 6,
                          "totalSteps": 32,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "decision-trees",
                          "label": "Decision Trees",
                          "description": "Splitting criteria, tree depth, and interpretability.",
                          "href": "ai/machine-learning/decision-trees/index.html",
                          "external": false,
                          "step": 7,
                          "totalSteps": 32,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "random-forest",
                          "label": "Random Forest",
                          "description": "Ensemble bagging, feature importance, and out-of-bag error.",
                          "href": "ai/machine-learning/random-forest/index.html",
                          "external": false,
                          "step": 8,
                          "totalSteps": 32,
                          "phase": "Beginner",
                          "readMinutes": 11
                      },
                      {
                          "slug": "gradient-boosting",
                          "label": "Gradient Boosting",
                          "description": "XGBoost, LightGBM concepts, and boosting vs bagging.",
                          "href": "ai/machine-learning/gradient-boosting/index.html",
                          "external": false,
                          "step": 9,
                          "totalSteps": 32,
                          "phase": "Beginner",
                          "readMinutes": 11
                      },
                      {
                          "slug": "svm",
                          "label": "Support Vector Machines",
                          "description": "Margins, kernels, and when SVMs excel.",
                          "href": "ai/machine-learning/svm/index.html",
                          "external": false,
                          "step": 10,
                          "totalSteps": 32,
                          "phase": "Beginner",
                          "readMinutes": 11
                      },
                      {
                          "slug": "naive-bayes",
                          "label": "Naive Bayes",
                          "description": "Probabilistic classification for text and categorical data.",
                          "href": "ai/machine-learning/naive-bayes/index.html",
                          "external": false,
                          "step": 11,
                          "totalSteps": 32,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "clustering-kmeans",
                          "label": "K-Means Clustering",
                          "description": "Centroids, elbow method, and cluster evaluation.",
                          "href": "ai/machine-learning/clustering-kmeans/index.html",
                          "external": false,
                          "step": 12,
                          "totalSteps": 32,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "clustering-hierarchical",
                          "label": "Hierarchical Clustering",
                          "description": "Agglomerative clustering and dendrograms.",
                          "href": "ai/machine-learning/clustering-hierarchical/index.html",
                          "external": false,
                          "step": 13,
                          "totalSteps": 32,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "pca",
                          "label": "PCA & Dimensionality Reduction",
                          "description": "Principal components, variance explained, and t-SNE intro.",
                          "href": "ai/machine-learning/pca/index.html",
                          "external": false,
                          "step": 14,
                          "totalSteps": 32,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "feature-engineering",
                          "label": "Feature Engineering",
                          "description": "Encoding, scaling, binning, and domain features.",
                          "href": "ai/machine-learning/feature-engineering/index.html",
                          "external": false,
                          "step": 15,
                          "totalSteps": 32,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "pipelines",
                          "label": "ML Pipelines",
                          "description": "ColumnTransformer, Pipeline, and reproducible preprocessing.",
                          "href": "ai/machine-learning/pipelines/index.html",
                          "external": false,
                          "step": 16,
                          "totalSteps": 32,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "cross-validation",
                          "label": "Cross-Validation",
                          "description": "K-fold, stratified CV, and nested cross-validation.",
                          "href": "ai/machine-learning/cross-validation/index.html",
                          "external": false,
                          "step": 17,
                          "totalSteps": 32,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "classification-metrics",
                          "label": "Classification Metrics",
                          "description": "Accuracy, precision, recall, F1, ROC-AUC.",
                          "href": "ai/machine-learning/classification-metrics/index.html",
                          "external": false,
                          "step": 18,
                          "totalSteps": 32,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "regression-metrics",
                          "label": "Regression Metrics",
                          "description": "MSE, RMSE, MAE, and R-squared interpretation.",
                          "href": "ai/machine-learning/regression-metrics/index.html",
                          "external": false,
                          "step": 19,
                          "totalSteps": 32,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "imbalanced-data",
                          "label": "Imbalanced Data",
                          "description": "SMOTE, class weights, and threshold tuning.",
                          "href": "ai/machine-learning/imbalanced-data/index.html",
                          "external": false,
                          "step": 20,
                          "totalSteps": 32,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "hyperparameter-tuning",
                          "label": "Hyperparameter Tuning",
                          "description": "Grid search, random search, and Optuna intro.",
                          "href": "ai/machine-learning/hyperparameter-tuning/index.html",
                          "external": false,
                          "step": 21,
                          "totalSteps": 32,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "model-selection",
                          "label": "Model Selection",
                          "description": "Bias-variance tradeoff and choosing the right algorithm.",
                          "href": "ai/machine-learning/model-selection/index.html",
                          "external": false,
                          "step": 22,
                          "totalSteps": 32,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "overfitting",
                          "label": "Overfitting & Regularization",
                          "description": "L1/L2 regularization, dropout concept, and early stopping.",
                          "href": "ai/machine-learning/overfitting/index.html",
                          "external": false,
                          "step": 23,
                          "totalSteps": 32,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "feature-selection",
                          "label": "Feature Selection",
                          "description": "Filter, wrapper, and embedded selection methods.",
                          "href": "ai/machine-learning/feature-selection/index.html",
                          "external": false,
                          "step": 24,
                          "totalSteps": 32,
                          "phase": "Advanced",
                          "readMinutes": 17
                      },
                      {
                          "slug": "mlops-intro",
                          "label": "MLOps Introduction",
                          "description": "Model versioning, deployment, and monitoring basics.",
                          "href": "ai/machine-learning/mlops-intro/index.html",
                          "external": false,
                          "step": 25,
                          "totalSteps": 32,
                          "phase": "Advanced",
                          "readMinutes": 17
                      },
                      {
                          "slug": "model-deployment",
                          "label": "Model Deployment",
                          "description": "Pickle, ONNX, REST APIs, and batch scoring.",
                          "href": "ai/machine-learning/model-deployment/index.html",
                          "external": false,
                          "step": 26,
                          "totalSteps": 32,
                          "phase": "Advanced",
                          "readMinutes": 17
                      },
                      {
                          "slug": "experiment-tracking",
                          "label": "Experiment Tracking",
                          "description": "MLflow, metrics logging, and reproducibility.",
                          "href": "ai/machine-learning/experiment-tracking/index.html",
                          "external": false,
                          "step": 27,
                          "totalSteps": 32,
                          "phase": "Advanced",
                          "readMinutes": 17
                      },
                      {
                          "slug": "time-series-ml",
                          "label": "Time Series ML",
                          "description": "Lag features, rolling windows, and forecasting models.",
                          "href": "ai/machine-learning/time-series-ml/index.html",
                          "external": false,
                          "step": 28,
                          "totalSteps": 32,
                          "phase": "Advanced",
                          "readMinutes": 17
                      },
                      {
                          "slug": "recommender-systems",
                          "label": "Recommender Systems",
                          "description": "Collaborative filtering and content-based approaches.",
                          "href": "ai/machine-learning/recommender-systems/index.html",
                          "external": false,
                          "step": 29,
                          "totalSteps": 32,
                          "phase": "Advanced",
                          "readMinutes": 17
                      },
                      {
                          "slug": "anomaly-detection",
                          "label": "Anomaly Detection",
                          "description": "Isolation Forest, statistical methods, and use cases.",
                          "href": "ai/machine-learning/anomaly-detection/index.html",
                          "external": false,
                          "step": 30,
                          "totalSteps": 32,
                          "phase": "Advanced",
                          "readMinutes": 17
                      },
                      {
                          "slug": "interpretability",
                          "label": "Model Interpretability",
                          "description": "SHAP, LIME, and explaining predictions to stakeholders.",
                          "href": "ai/machine-learning/interpretability/index.html",
                          "external": false,
                          "step": 31,
                          "totalSteps": 32,
                          "phase": "Advanced",
                          "readMinutes": 17
                      },
                      {
                          "slug": "capstone-project",
                          "label": "ML Capstone Project",
                          "description": "End-to-end classification or regression project.",
                          "href": "ai/machine-learning/capstone-project/index.html",
                          "external": false,
                          "step": 32,
                          "totalSteps": 32,
                          "phase": "Advanced",
                          "readMinutes": 18
                      }
                  ]
              },
              {
                  "id": "artificial-intelligence",
                  "label": "Artificial Intelligence",
                  "href": "ai/artificial-intelligence/index.html",
                  "stepCount": 20,
                  "pages": [
                      {
                          "slug": "ai-history",
                          "label": "History of AI",
                          "description": "AI milestones from Turing to modern deep learning systems.",
                          "href": "ai/artificial-intelligence/ai-history/index.html",
                          "external": false,
                          "step": 1,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "ai-paradigms",
                          "label": "AI Paradigms",
                          "description": "Symbolic AI, connectionism, and hybrid approaches.",
                          "href": "ai/artificial-intelligence/ai-paradigms/index.html",
                          "external": false,
                          "step": 2,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "problem-solving",
                          "label": "Problem Solving",
                          "description": "State spaces, goal states, and formulation of AI problems.",
                          "href": "ai/artificial-intelligence/problem-solving/index.html",
                          "external": false,
                          "step": 3,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "search-bfs-dfs",
                          "label": "BFS & DFS",
                          "description": "Uninformed search strategies and completeness properties.",
                          "href": "ai/artificial-intelligence/search-bfs-dfs/index.html",
                          "external": false,
                          "step": 4,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "search-heuristic",
                          "label": "Heuristic Search",
                          "description": "Greedy best-first and A* algorithm fundamentals.",
                          "href": "ai/artificial-intelligence/search-heuristic/index.html",
                          "external": false,
                          "step": 5,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "game-trees",
                          "label": "Game Trees & Minimax",
                          "description": "Adversarial search, minimax, and alpha-beta pruning.",
                          "href": "ai/artificial-intelligence/game-trees/index.html",
                          "external": false,
                          "step": 6,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "knowledge-representation",
                          "label": "Knowledge Representation",
                          "description": "Facts, rules, frames, and semantic networks.",
                          "href": "ai/artificial-intelligence/knowledge-representation/index.html",
                          "external": false,
                          "step": 7,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 12
                      },
                      {
                          "slug": "logic-propositional",
                          "label": "Propositional Logic",
                          "description": "AND, OR, NOT, implications, and inference rules.",
                          "href": "ai/artificial-intelligence/logic-propositional/index.html",
                          "external": false,
                          "step": 8,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "logic-first-order",
                          "label": "First-Order Logic",
                          "description": "Predicates, quantifiers, and knowledge base reasoning.",
                          "href": "ai/artificial-intelligence/logic-first-order/index.html",
                          "external": false,
                          "step": 9,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "expert-systems",
                          "label": "Expert Systems",
                          "description": "Rule-based systems, inference engines, and MYCIN-style design.",
                          "href": "ai/artificial-intelligence/expert-systems/index.html",
                          "external": false,
                          "step": 10,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "planning",
                          "label": "Automated Planning",
                          "description": "STRIPS, plan spaces, and classical planning algorithms.",
                          "href": "ai/artificial-intelligence/planning/index.html",
                          "external": false,
                          "step": 11,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "reasoning-under-uncertainty",
                          "label": "Reasoning Under Uncertainty",
                          "description": "Bayesian networks and probabilistic reasoning.",
                          "href": "ai/artificial-intelligence/reasoning-under-uncertainty/index.html",
                          "external": false,
                          "step": 12,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "nlp-symbolic",
                          "label": "Symbolic NLP",
                          "description": "Parsing, grammars, and early language understanding.",
                          "href": "ai/artificial-intelligence/nlp-symbolic/index.html",
                          "external": false,
                          "step": 13,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "computer-vision-classic",
                          "label": "Classic Computer Vision",
                          "description": "Edge detection, HOG, and pre-deep-learning CV.",
                          "href": "ai/artificial-intelligence/computer-vision-classic/index.html",
                          "external": false,
                          "step": 14,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "robotics-intro",
                          "label": "Robotics Introduction",
                          "description": "Sensors, actuators, and sense-plan-act loops.",
                          "href": "ai/artificial-intelligence/robotics-intro/index.html",
                          "external": false,
                          "step": 15,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "ai-ethics",
                          "label": "AI Ethics",
                          "description": "Alignment, transparency, and societal impact of AI systems.",
                          "href": "ai/artificial-intelligence/ai-ethics/index.html",
                          "external": false,
                          "step": 16,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "modern-ai-landscape",
                          "label": "Modern AI Landscape",
                          "description": "Deep learning, LLMs, and the current AI stack.",
                          "href": "ai/artificial-intelligence/modern-ai-landscape/index.html",
                          "external": false,
                          "step": 17,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "ai-vs-ml-vs-dl",
                          "label": "AI vs ML vs DL",
                          "description": "Clarifying terminology and scope of each field.",
                          "href": "ai/artificial-intelligence/ai-vs-ml-vs-dl/index.html",
                          "external": false,
                          "step": 18,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "agents-intro",
                          "label": "Intelligent Agents",
                          "description": "PEAS framework, agent types, and environments.",
                          "href": "ai/artificial-intelligence/agents-intro/index.html",
                          "external": false,
                          "step": 19,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "future-trends",
                          "label": "Future Trends",
                          "description": "Multimodal AI, embodied AI, and research frontiers.",
                          "href": "ai/artificial-intelligence/future-trends/index.html",
                          "external": false,
                          "step": 20,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 16
                      }
                  ]
              },
              {
                  "id": "nlp",
                  "label": "NLP",
                  "href": "ai/nlp/index.html",
                  "stepCount": 30,
                  "pages": [
                      {
                          "slug": "nlp-overview",
                          "label": "NLP Overview",
                          "description": "Natural language processing tasks, challenges, and applications.",
                          "href": "ai/nlp/nlp-overview/index.html",
                          "external": false,
                          "step": 1,
                          "totalSteps": 30,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "text-preprocessing",
                          "label": "Text Preprocessing",
                          "description": "Lowercasing, punctuation, stop words, and normalization.",
                          "href": "ai/nlp/text-preprocessing/index.html",
                          "external": false,
                          "step": 2,
                          "totalSteps": 30,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "tokenization",
                          "label": "Tokenization",
                          "description": "Word tokenization, subword algorithms, and SentencePiece.",
                          "href": "ai/nlp/tokenization/index.html",
                          "external": false,
                          "step": 3,
                          "totalSteps": 30,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "stemming-lemmatization",
                          "label": "Stemming & Lemmatization",
                          "description": "Reducing words to root forms with NLTK and spaCy.",
                          "href": "ai/nlp/stemming-lemmatization/index.html",
                          "external": false,
                          "step": 4,
                          "totalSteps": 30,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "ngrams",
                          "label": "N-grams",
                          "description": "Character and word n-grams for language modeling features.",
                          "href": "ai/nlp/ngrams/index.html",
                          "external": false,
                          "step": 5,
                          "totalSteps": 30,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "bag-of-words",
                          "label": "Bag of Words",
                          "description": "CountVectorizer, document-term matrices, and sparsity.",
                          "href": "ai/nlp/bag-of-words/index.html",
                          "external": false,
                          "step": 6,
                          "totalSteps": 30,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "tf-idf",
                          "label": "TF-IDF",
                          "description": "Term frequency-inverse document frequency weighting scheme.",
                          "href": "ai/nlp/tf-idf/index.html",
                          "external": false,
                          "step": 7,
                          "totalSteps": 30,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "word-embeddings",
                          "label": "Word Embeddings",
                          "description": "Word2Vec, GloVe, and dense vector representations.",
                          "href": "ai/nlp/word-embeddings/index.html",
                          "external": false,
                          "step": 8,
                          "totalSteps": 30,
                          "phase": "Beginner",
                          "readMinutes": 11
                      },
                      {
                          "slug": "embeddings-training",
                          "label": "Training Embeddings",
                          "description": "CBOW, Skip-gram, negative sampling, and vector arithmetic.",
                          "href": "ai/nlp/embeddings-training/index.html",
                          "external": false,
                          "step": 9,
                          "totalSteps": 30,
                          "phase": "Beginner",
                          "readMinutes": 11
                      },
                      {
                          "slug": "sequence-models-intro",
                          "label": "Sequence Models Intro",
                          "description": "Why sequences need specialized architectures.",
                          "href": "ai/nlp/sequence-models-intro/index.html",
                          "external": false,
                          "step": 10,
                          "totalSteps": 30,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "rnn-nlp",
                          "label": "RNNs for NLP",
                          "description": "Recurrent networks for tagging, classification, and generation.",
                          "href": "ai/nlp/rnn-nlp/index.html",
                          "external": false,
                          "step": 11,
                          "totalSteps": 30,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "attention-mechanism",
                          "label": "Attention Mechanism",
                          "description": "Query-key-value attention and its role in modern NLP.",
                          "href": "ai/nlp/attention-mechanism/index.html",
                          "external": false,
                          "step": 12,
                          "totalSteps": 30,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "transformers-intro",
                          "label": "Transformers Introduction",
                          "description": "Self-attention, encoder-decoder, and positional encoding.",
                          "href": "ai/nlp/transformers-intro/index.html",
                          "external": false,
                          "step": 13,
                          "totalSteps": 30,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "bert",
                          "label": "BERT",
                          "description": "Masked language modeling, fine-tuning BERT for downstream tasks.",
                          "href": "ai/nlp/bert/index.html",
                          "external": false,
                          "step": 14,
                          "totalSteps": 30,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "gpt-models",
                          "label": "GPT Models",
                          "description": "Autoregressive language models and generative text.",
                          "href": "ai/nlp/gpt-models/index.html",
                          "external": false,
                          "step": 15,
                          "totalSteps": 30,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "text-classification",
                          "label": "Text Classification",
                          "description": "Sentiment analysis, topic classification, and fine-tuning.",
                          "href": "ai/nlp/text-classification/index.html",
                          "external": false,
                          "step": 16,
                          "totalSteps": 30,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "named-entity-recognition",
                          "label": "Named Entity Recognition",
                          "description": "Span labeling, BIO tagging, and NER models.",
                          "href": "ai/nlp/named-entity-recognition/index.html",
                          "external": false,
                          "step": 17,
                          "totalSteps": 30,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "pos-tagging",
                          "label": "Part-of-Speech Tagging",
                          "description": "Grammatical tagging with HMMs and neural taggers.",
                          "href": "ai/nlp/pos-tagging/index.html",
                          "external": false,
                          "step": 18,
                          "totalSteps": 30,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "machine-translation",
                          "label": "Machine Translation",
                          "description": "Seq2seq, attention, and transformer translation systems.",
                          "href": "ai/nlp/machine-translation/index.html",
                          "external": false,
                          "step": 19,
                          "totalSteps": 30,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "question-answering",
                          "label": "Question Answering",
                          "description": "Extractive and generative QA architectures.",
                          "href": "ai/nlp/question-answering/index.html",
                          "external": false,
                          "step": 20,
                          "totalSteps": 30,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "summarization",
                          "label": "Text Summarization",
                          "description": "Extractive vs abstractive summarization approaches.",
                          "href": "ai/nlp/summarization/index.html",
                          "external": false,
                          "step": 21,
                          "totalSteps": 30,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "spacy-pipeline",
                          "label": "spaCy Pipeline",
                          "description": "Tokenization, NER, and custom pipeline components.",
                          "href": "ai/nlp/spacy-pipeline/index.html",
                          "external": false,
                          "step": 22,
                          "totalSteps": 30,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "huggingface-intro",
                          "label": "Hugging Face Intro",
                          "description": "Transformers library, model hub, and tokenizers.",
                          "href": "ai/nlp/huggingface-intro/index.html",
                          "external": false,
                          "step": 23,
                          "totalSteps": 30,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "prompting-nlp",
                          "label": "Prompting for NLP",
                          "description": "Zero-shot, few-shot, and instruction tuning for NLP tasks.",
                          "href": "ai/nlp/prompting-nlp/index.html",
                          "external": false,
                          "step": 24,
                          "totalSteps": 30,
                          "phase": "Advanced",
                          "readMinutes": 17
                      },
                      {
                          "slug": "evaluation-nlp",
                          "label": "NLP Evaluation",
                          "description": "BLEU, ROUGE, perplexity, and human evaluation.",
                          "href": "ai/nlp/evaluation-nlp/index.html",
                          "external": false,
                          "step": 25,
                          "totalSteps": 30,
                          "phase": "Advanced",
                          "readMinutes": 17
                      },
                      {
                          "slug": "multilingual-nlp",
                          "label": "Multilingual NLP",
                          "description": "Cross-lingual models and translation for low-resource languages.",
                          "href": "ai/nlp/multilingual-nlp/index.html",
                          "external": false,
                          "step": 26,
                          "totalSteps": 30,
                          "phase": "Advanced",
                          "readMinutes": 17
                      },
                      {
                          "slug": "nlp-production",
                          "label": "NLP in Production",
                          "description": "Serving models, latency, batching, and monitoring.",
                          "href": "ai/nlp/nlp-production/index.html",
                          "external": false,
                          "step": 27,
                          "totalSteps": 30,
                          "phase": "Advanced",
                          "readMinutes": 17
                      },
                      {
                          "slug": "nlp-ethics",
                          "label": "NLP Ethics",
                          "description": "Bias in language models, toxicity, and content moderation.",
                          "href": "ai/nlp/nlp-ethics/index.html",
                          "external": false,
                          "step": 28,
                          "totalSteps": 30,
                          "phase": "Advanced",
                          "readMinutes": 17
                      },
                      {
                          "slug": "rag-nlp",
                          "label": "RAG for NLP",
                          "description": "Retrieval-augmented generation for grounded text applications.",
                          "href": "ai/nlp/rag-nlp/index.html",
                          "external": false,
                          "step": 29,
                          "totalSteps": 30,
                          "phase": "Advanced",
                          "readMinutes": 17
                      },
                      {
                          "slug": "nlp-capstone",
                          "label": "NLP Capstone",
                          "description": "Build a text classification or QA mini-project.",
                          "href": "ai/nlp/nlp-capstone/index.html",
                          "external": false,
                          "step": 30,
                          "totalSteps": 30,
                          "phase": "Advanced",
                          "readMinutes": 17
                      }
                  ]
              },
              {
                  "id": "rnn",
                  "label": "RNN",
                  "href": "ai/rnn/index.html",
                  "stepCount": 20,
                  "pages": [
                      {
                          "slug": "sequences-intro",
                          "label": "Sequences Introduction",
                          "description": "Sequential data types: text, time series, audio, and video.",
                          "href": "ai/rnn/sequences-intro/index.html",
                          "external": false,
                          "step": 1,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "rnn-architecture",
                          "label": "RNN Architecture",
                          "description": "Recurrent connections, hidden state, and unrolling through time.",
                          "href": "ai/rnn/rnn-architecture/index.html",
                          "external": false,
                          "step": 2,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "forward-pass",
                          "label": "Forward Pass",
                          "description": "Computing outputs step-by-step across sequence length.",
                          "href": "ai/rnn/forward-pass/index.html",
                          "external": false,
                          "step": 3,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "bptt",
                          "label": "Backprop Through Time",
                          "description": "Gradient flow through unrolled RNN and vanishing gradients.",
                          "href": "ai/rnn/bptt/index.html",
                          "external": false,
                          "step": 4,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "lstm-architecture",
                          "label": "LSTM Architecture",
                          "description": "Forget, input, output gates, and cell state mechanics.",
                          "href": "ai/rnn/lstm-architecture/index.html",
                          "external": false,
                          "step": 5,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "lstm-applications",
                          "label": "LSTM Applications",
                          "description": "Language modeling, sentiment, and sequence prediction.",
                          "href": "ai/rnn/lstm-applications/index.html",
                          "external": false,
                          "step": 6,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "gru-architecture",
                          "label": "GRU Architecture",
                          "description": "Reset and update gates — lighter alternative to LSTM.",
                          "href": "ai/rnn/gru-architecture/index.html",
                          "external": false,
                          "step": 7,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 12
                      },
                      {
                          "slug": "gru-vs-lstm",
                          "label": "GRU vs LSTM",
                          "description": "Trade-offs in parameters, training speed, and performance.",
                          "href": "ai/rnn/gru-vs-lstm/index.html",
                          "external": false,
                          "step": 8,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "bidirectional-rnn",
                          "label": "Bidirectional RNNs",
                          "description": "Forward and backward passes for context from both directions.",
                          "href": "ai/rnn/bidirectional-rnn/index.html",
                          "external": false,
                          "step": 9,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "stacked-rnn",
                          "label": "Stacked RNNs",
                          "description": "Multi-layer recurrent networks for hierarchical features.",
                          "href": "ai/rnn/stacked-rnn/index.html",
                          "external": false,
                          "step": 10,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "sequence-to-sequence",
                          "label": "Sequence-to-Sequence",
                          "description": "Encoder-decoder architecture for translation and summarization.",
                          "href": "ai/rnn/sequence-to-sequence/index.html",
                          "external": false,
                          "step": 11,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "teacher-forcing",
                          "label": "Teacher Forcing",
                          "description": "Training seq2seq models with ground-truth vs predicted inputs.",
                          "href": "ai/rnn/teacher-forcing/index.html",
                          "external": false,
                          "step": 12,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "attention-rnn",
                          "label": "Attention in RNNs",
                          "description": "Bahdanau attention connecting encoder and decoder.",
                          "href": "ai/rnn/attention-rnn/index.html",
                          "external": false,
                          "step": 13,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "time-series-rnn",
                          "label": "Time Series with RNNs",
                          "description": "Forecasting, windowing, and multivariate sequences.",
                          "href": "ai/rnn/time-series-rnn/index.html",
                          "external": false,
                          "step": 14,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "padding-masking",
                          "label": "Padding & Masking",
                          "description": "Handling variable-length sequences in batches.",
                          "href": "ai/rnn/padding-masking/index.html",
                          "external": false,
                          "step": 15,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "pytorch-rnn",
                          "label": "RNN in PyTorch",
                          "description": "nn.RNN, nn.LSTM, nn.GRU modules and training loops.",
                          "href": "ai/rnn/pytorch-rnn/index.html",
                          "external": false,
                          "step": 16,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "keras-rnn",
                          "label": "RNN in Keras",
                          "description": "Sequential models with LSTM/GRU layers.",
                          "href": "ai/rnn/keras-rnn/index.html",
                          "external": false,
                          "step": 17,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "rnn-limitations",
                          "label": "RNN Limitations",
                          "description": "Long-range dependencies and why transformers emerged.",
                          "href": "ai/rnn/rnn-limitations/index.html",
                          "external": false,
                          "step": 18,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "rnn-tuning",
                          "label": "RNN Hyperparameter Tuning",
                          "description": "Hidden size, layers, dropout, and learning rate.",
                          "href": "ai/rnn/rnn-tuning/index.html",
                          "external": false,
                          "step": 19,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "rnn-capstone",
                          "label": "RNN Capstone",
                          "description": "Train an LSTM for text generation or time series forecasting.",
                          "href": "ai/rnn/rnn-capstone/index.html",
                          "external": false,
                          "step": 20,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 16
                      }
                  ]
              },
              {
                  "id": "ann",
                  "label": "ANN",
                  "href": "ai/ann/index.html",
                  "stepCount": 22,
                  "pages": [
                      {
                          "slug": "neurons-biology",
                          "label": "Biological Inspiration",
                          "description": "How artificial neurons relate to biological neurons.",
                          "href": "ai/ann/neurons-biology/index.html",
                          "external": false,
                          "step": 1,
                          "totalSteps": 22,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "perceptron",
                          "label": "The Perceptron",
                          "description": "Single-layer network, linear separability, and limitations.",
                          "href": "ai/ann/perceptron/index.html",
                          "external": false,
                          "step": 2,
                          "totalSteps": 22,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "activation-functions",
                          "label": "Activation Functions",
                          "description": "Sigmoid, tanh, ReLU, Leaky ReLU, and softmax.",
                          "href": "ai/ann/activation-functions/index.html",
                          "external": false,
                          "step": 3,
                          "totalSteps": 22,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "multi-layer-networks",
                          "label": "Multi-Layer Networks",
                          "description": "Hidden layers, universal approximation, and depth.",
                          "href": "ai/ann/multi-layer-networks/index.html",
                          "external": false,
                          "step": 4,
                          "totalSteps": 22,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "forward-propagation",
                          "label": "Forward Propagation",
                          "description": "Matrix operations through layers to compute outputs.",
                          "href": "ai/ann/forward-propagation/index.html",
                          "external": false,
                          "step": 5,
                          "totalSteps": 22,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "loss-functions",
                          "label": "Loss Functions",
                          "description": "MSE, cross-entropy, and choosing the right loss.",
                          "href": "ai/ann/loss-functions/index.html",
                          "external": false,
                          "step": 6,
                          "totalSteps": 22,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "backpropagation",
                          "label": "Backpropagation",
                          "description": "Chain rule, gradient computation, and weight updates.",
                          "href": "ai/ann/backpropagation/index.html",
                          "external": false,
                          "step": 7,
                          "totalSteps": 22,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "gradient-descent",
                          "label": "Gradient Descent",
                          "description": "Batch, mini-batch, and stochastic gradient descent.",
                          "href": "ai/ann/gradient-descent/index.html",
                          "external": false,
                          "step": 8,
                          "totalSteps": 22,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "learning-rate",
                          "label": "Learning Rate",
                          "description": "Fixed, decay, and adaptive learning rate schedules.",
                          "href": "ai/ann/learning-rate/index.html",
                          "external": false,
                          "step": 9,
                          "totalSteps": 22,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "optimizers",
                          "label": "Optimizers",
                          "description": "SGD, Momentum, Adam, RMSprop, and when to use each.",
                          "href": "ai/ann/optimizers/index.html",
                          "external": false,
                          "step": 10,
                          "totalSteps": 22,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "weight-initialization",
                          "label": "Weight Initialization",
                          "description": "Xavier, He initialization, and avoiding dead neurons.",
                          "href": "ai/ann/weight-initialization/index.html",
                          "external": false,
                          "step": 11,
                          "totalSteps": 22,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "batch-normalization",
                          "label": "Batch Normalization",
                          "description": "Normalizing activations for faster, stable training.",
                          "href": "ai/ann/batch-normalization/index.html",
                          "external": false,
                          "step": 12,
                          "totalSteps": 22,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "dropout",
                          "label": "Dropout Regularization",
                          "description": "Random neuron dropout to prevent overfitting.",
                          "href": "ai/ann/dropout/index.html",
                          "external": false,
                          "step": 13,
                          "totalSteps": 22,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "overfitting-ann",
                          "label": "Overfitting in ANNs",
                          "description": "Early stopping, L2 regularization, and data augmentation.",
                          "href": "ai/ann/overfitting-ann/index.html",
                          "external": false,
                          "step": 14,
                          "totalSteps": 22,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "hyperparameter-search",
                          "label": "Hyperparameter Search",
                          "description": "Grid search and random search for network design.",
                          "href": "ai/ann/hyperparameter-search/index.html",
                          "external": false,
                          "step": 15,
                          "totalSteps": 22,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "pytorch-ann",
                          "label": "Building ANNs in PyTorch",
                          "description": "nn.Module, Linear layers, and training loops.",
                          "href": "ai/ann/pytorch-ann/index.html",
                          "external": false,
                          "step": 16,
                          "totalSteps": 22,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "keras-ann",
                          "label": "Building ANNs in Keras",
                          "description": "Sequential API, compile, fit, and evaluate.",
                          "href": "ai/ann/keras-ann/index.html",
                          "external": false,
                          "step": 17,
                          "totalSteps": 22,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "classification-ann",
                          "label": "Classification with ANNs",
                          "description": "Softmax output, categorical cross-entropy, and metrics.",
                          "href": "ai/ann/classification-ann/index.html",
                          "external": false,
                          "step": 18,
                          "totalSteps": 22,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "regression-ann",
                          "label": "Regression with ANNs",
                          "description": "Linear output layer and regression-specific considerations.",
                          "href": "ai/ann/regression-ann/index.html",
                          "external": false,
                          "step": 19,
                          "totalSteps": 22,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "visualizing-training",
                          "label": "Visualizing Training",
                          "description": "Loss curves, accuracy plots, and TensorBoard basics.",
                          "href": "ai/ann/visualizing-training/index.html",
                          "external": false,
                          "step": 20,
                          "totalSteps": 22,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "debugging-nn",
                          "label": "Debugging Neural Networks",
                          "description": "NaN gradients, dead ReLUs, and common training failures.",
                          "href": "ai/ann/debugging-nn/index.html",
                          "external": false,
                          "step": 21,
                          "totalSteps": 22,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "ann-capstone",
                          "label": "ANN Capstone",
                          "description": "Train a feedforward network on a tabular or MNIST dataset.",
                          "href": "ai/ann/ann-capstone/index.html",
                          "external": false,
                          "step": 22,
                          "totalSteps": 22,
                          "phase": "Advanced",
                          "readMinutes": 16
                      }
                  ]
              },
              {
                  "id": "cnn",
                  "label": "CNN",
                  "href": "ai/cnn/index.html",
                  "stepCount": 20,
                  "pages": [
                      {
                          "slug": "cnn-motivation",
                          "label": "Why CNNs?",
                          "description": "Spatial hierarchies in images and parameter sharing benefits.",
                          "href": "ai/cnn/cnn-motivation/index.html",
                          "external": false,
                          "step": 1,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "convolution-operation",
                          "label": "Convolution Operation",
                          "description": "Filters, kernels, stride, and feature map computation.",
                          "href": "ai/cnn/convolution-operation/index.html",
                          "external": false,
                          "step": 2,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "padding-stride",
                          "label": "Padding & Stride",
                          "description": "Same vs valid padding and output dimension formulas.",
                          "href": "ai/cnn/padding-stride/index.html",
                          "external": false,
                          "step": 3,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "pooling-layers",
                          "label": "Pooling Layers",
                          "description": "Max pooling, average pooling, and spatial downsampling.",
                          "href": "ai/cnn/pooling-layers/index.html",
                          "external": false,
                          "step": 4,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "cnn-architecture",
                          "label": "CNN Architecture",
                          "description": "Conv-pool stacks, flatten, and fully connected classifier.",
                          "href": "ai/cnn/cnn-architecture/index.html",
                          "external": false,
                          "step": 5,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "feature-maps",
                          "label": "Feature Maps",
                          "description": "What filters learn at each layer — edges to objects.",
                          "href": "ai/cnn/feature-maps/index.html",
                          "external": false,
                          "step": 6,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "popular-architectures",
                          "label": "Popular Architectures",
                          "description": "LeNet, AlexNet, VGG, ResNet overview.",
                          "href": "ai/cnn/popular-architectures/index.html",
                          "external": false,
                          "step": 7,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 12
                      },
                      {
                          "slug": "residual-connections",
                          "label": "Residual Connections",
                          "description": "Skip connections, vanishing gradients, and ResNet blocks.",
                          "href": "ai/cnn/residual-connections/index.html",
                          "external": false,
                          "step": 8,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "transfer-learning",
                          "label": "Transfer Learning",
                          "description": "Pre-trained models, fine-tuning, and feature extraction.",
                          "href": "ai/cnn/transfer-learning/index.html",
                          "external": false,
                          "step": 9,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "data-augmentation",
                          "label": "Data Augmentation",
                          "description": "Rotation, flip, crop, and synthetic training data.",
                          "href": "ai/cnn/data-augmentation/index.html",
                          "external": false,
                          "step": 10,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "image-classification",
                          "label": "Image Classification",
                          "description": "Training and evaluating CNN classifiers end-to-end.",
                          "href": "ai/cnn/image-classification/index.html",
                          "external": false,
                          "step": 11,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "object-detection-intro",
                          "label": "Object Detection Intro",
                          "description": "Bounding boxes, IoU, and detection vs classification.",
                          "href": "ai/cnn/object-detection-intro/index.html",
                          "external": false,
                          "step": 12,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "yolo-intro",
                          "label": "YOLO Introduction",
                          "description": "Single-shot detectors and real-time detection concepts.",
                          "href": "ai/cnn/yolo-intro/index.html",
                          "external": false,
                          "step": 13,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "segmentation-intro",
                          "label": "Segmentation Intro",
                          "description": "Semantic vs instance segmentation overview.",
                          "href": "ai/cnn/segmentation-intro/index.html",
                          "external": false,
                          "step": 14,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "cnn-pytorch",
                          "label": "CNNs in PyTorch",
                          "description": "nn.Conv2d, nn.MaxPool2d, and torchvision models.",
                          "href": "ai/cnn/cnn-pytorch/index.html",
                          "external": false,
                          "step": 15,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "cnn-keras",
                          "label": "CNNs in Keras",
                          "description": "Conv2D, MaxPooling2D, and pretrained applications.",
                          "href": "ai/cnn/cnn-keras/index.html",
                          "external": false,
                          "step": 16,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "regularization-cnn",
                          "label": "CNN Regularization",
                          "description": "Dropout, batch norm, and weight decay for CNNs.",
                          "href": "ai/cnn/regularization-cnn/index.html",
                          "external": false,
                          "step": 17,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "interpretability-cnn",
                          "label": "CNN Interpretability",
                          "description": "Grad-CAM, filter visualization, and saliency maps.",
                          "href": "ai/cnn/interpretability-cnn/index.html",
                          "external": false,
                          "step": 18,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "deployment-cnn",
                          "label": "Deploying CNN Models",
                          "description": "ONNX, TensorRT, and edge deployment considerations.",
                          "href": "ai/cnn/deployment-cnn/index.html",
                          "external": false,
                          "step": 19,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "cnn-capstone",
                          "label": "CNN Capstone",
                          "description": "Fine-tune a pretrained model for a custom image dataset.",
                          "href": "ai/cnn/cnn-capstone/index.html",
                          "external": false,
                          "step": 20,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 16
                      }
                  ]
              },
              {
                  "id": "generative-ai",
                  "label": "Generative AI",
                  "href": "ai/generative-ai/index.html",
                  "stepCount": 25,
                  "pages": [
                      {
                          "slug": "genai-overview",
                          "label": "Generative AI Overview",
                          "description": "Generative vs discriminative models and the GenAI landscape.",
                          "href": "ai/generative-ai/genai-overview/index.html",
                          "external": false,
                          "step": 1,
                          "totalSteps": 25,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "llm-fundamentals",
                          "label": "LLM Fundamentals",
                          "description": "Token prediction, context windows, and scaling laws.",
                          "href": "ai/generative-ai/llm-fundamentals/index.html",
                          "external": false,
                          "step": 2,
                          "totalSteps": 25,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "transformer-recap",
                          "label": "Transformer Recap",
                          "description": "Self-attention, positional encoding, and decoder-only models.",
                          "href": "ai/generative-ai/transformer-recap/index.html",
                          "external": false,
                          "step": 3,
                          "totalSteps": 25,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "gpt-family",
                          "label": "GPT Model Family",
                          "description": "GPT-2 through GPT-4 evolution and capabilities.",
                          "href": "ai/generative-ai/gpt-family/index.html",
                          "external": false,
                          "step": 4,
                          "totalSteps": 25,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "open-source-llms",
                          "label": "Open Source LLMs",
                          "description": "Llama, Mistral, and the open-weight ecosystem.",
                          "href": "ai/generative-ai/open-source-llms/index.html",
                          "external": false,
                          "step": 5,
                          "totalSteps": 25,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "prompt-engineering",
                          "label": "Prompt Engineering",
                          "description": "Zero-shot, few-shot, chain-of-thought, and role prompting.",
                          "href": "ai/generative-ai/prompt-engineering/index.html",
                          "external": false,
                          "step": 6,
                          "totalSteps": 25,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "prompt-patterns",
                          "label": "Prompt Patterns",
                          "description": "ReAct, tree-of-thought, and structured output prompting.",
                          "href": "ai/generative-ai/prompt-patterns/index.html",
                          "external": false,
                          "step": 7,
                          "totalSteps": 25,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "fine-tuning-intro",
                          "label": "Fine-Tuning Introduction",
                          "description": "When to fine-tune vs prompt vs RAG.",
                          "href": "ai/generative-ai/fine-tuning-intro/index.html",
                          "external": false,
                          "step": 8,
                          "totalSteps": 25,
                          "phase": "Beginner",
                          "readMinutes": 11
                      },
                      {
                          "slug": "lora-peft",
                          "label": "LoRA & PEFT",
                          "description": "Parameter-efficient fine-tuning with low-rank adapters.",
                          "href": "ai/generative-ai/lora-peft/index.html",
                          "external": false,
                          "step": 9,
                          "totalSteps": 25,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "full-fine-tuning",
                          "label": "Full Fine-Tuning",
                          "description": "Dataset preparation, training loops, and evaluation.",
                          "href": "ai/generative-ai/full-fine-tuning/index.html",
                          "external": false,
                          "step": 10,
                          "totalSteps": 25,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "instruction-tuning",
                          "label": "Instruction Tuning",
                          "description": "Supervised fine-tuning for helpful, aligned assistants.",
                          "href": "ai/generative-ai/instruction-tuning/index.html",
                          "external": false,
                          "step": 11,
                          "totalSteps": 25,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "rlhf",
                          "label": "RLHF Overview",
                          "description": "Reinforcement learning from human feedback and reward models.",
                          "href": "ai/generative-ai/rlhf/index.html",
                          "external": false,
                          "step": 12,
                          "totalSteps": 25,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "rag-fundamentals",
                          "label": "RAG Fundamentals",
                          "description": "Retrieval-augmented generation architecture and benefits.",
                          "href": "ai/generative-ai/rag-fundamentals/index.html",
                          "external": false,
                          "step": 13,
                          "totalSteps": 25,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "vector-databases",
                          "label": "Vector Databases",
                          "description": "Embeddings storage, similarity search, and Pinecone/Chroma.",
                          "href": "ai/generative-ai/vector-databases/index.html",
                          "external": false,
                          "step": 14,
                          "totalSteps": 25,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "chunking-strategies",
                          "label": "Chunking Strategies",
                          "description": "Document splitting, overlap, and metadata for RAG.",
                          "href": "ai/generative-ai/chunking-strategies/index.html",
                          "external": false,
                          "step": 15,
                          "totalSteps": 25,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "evaluation-llm",
                          "label": "Evaluating LLMs",
                          "description": "BLEU, human eval, LLM-as-judge, and benchmark suites.",
                          "href": "ai/generative-ai/evaluation-llm/index.html",
                          "external": false,
                          "step": 16,
                          "totalSteps": 25,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "hallucination",
                          "label": "Hallucination Mitigation",
                          "description": "Grounding, citation, and confidence calibration.",
                          "href": "ai/generative-ai/hallucination/index.html",
                          "external": false,
                          "step": 17,
                          "totalSteps": 25,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "safety-guardrails",
                          "label": "Safety & Guardrails",
                          "description": "Content filtering, moderation, and responsible deployment.",
                          "href": "ai/generative-ai/safety-guardrails/index.html",
                          "external": false,
                          "step": 18,
                          "totalSteps": 25,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "multimodal-genai",
                          "label": "Multimodal GenAI",
                          "description": "Vision-language models, DALL-E, and image generation.",
                          "href": "ai/generative-ai/multimodal-genai/index.html",
                          "external": false,
                          "step": 19,
                          "totalSteps": 25,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "diffusion-models",
                          "label": "Diffusion Models",
                          "description": "Denoising diffusion and Stable Diffusion concepts.",
                          "href": "ai/generative-ai/diffusion-models/index.html",
                          "external": false,
                          "step": 20,
                          "totalSteps": 25,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "agents-llm",
                          "label": "LLM Agents",
                          "description": "Tool use, planning, and autonomous agent loops with LLMs.",
                          "href": "ai/generative-ai/agents-llm/index.html",
                          "external": false,
                          "step": 21,
                          "totalSteps": 25,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "langchain-intro",
                          "label": "LangChain Introduction",
                          "description": "Chains, agents, memory, and tool integration patterns.",
                          "href": "ai/generative-ai/langchain-intro/index.html",
                          "external": false,
                          "step": 22,
                          "totalSteps": 25,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "cost-optimization",
                          "label": "Cost Optimization",
                          "description": "Token budgeting, caching, and model routing strategies.",
                          "href": "ai/generative-ai/cost-optimization/index.html",
                          "external": false,
                          "step": 23,
                          "totalSteps": 25,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "deployment-llm",
                          "label": "Deploying LLMs",
                          "description": "vLLM, Ollama, Azure OpenAI, and inference optimization.",
                          "href": "ai/generative-ai/deployment-llm/index.html",
                          "external": false,
                          "step": 24,
                          "totalSteps": 25,
                          "phase": "Advanced",
                          "readMinutes": 17
                      },
                      {
                          "slug": "genai-capstone",
                          "label": "GenAI Capstone",
                          "description": "Build a RAG chatbot or fine-tuned assistant mini-project.",
                          "href": "ai/generative-ai/genai-capstone/index.html",
                          "external": false,
                          "step": 25,
                          "totalSteps": 25,
                          "phase": "Advanced",
                          "readMinutes": 17
                      }
                  ]
              },
              {
                  "id": "agentic-ai",
                  "label": "Agentic AI",
                  "href": "ai/agentic-ai/index.html",
                  "stepCount": 24,
                  "pages": [
                      {
                          "slug": "agents-overview",
                          "label": "AI Agents Overview",
                          "description": "Autonomy levels, agent architectures, and use cases.",
                          "href": "ai/agentic-ai/agents-overview/index.html",
                          "external": false,
                          "step": 1,
                          "totalSteps": 24,
                          "phase": "Beginner",
                          "readMinutes": 12
                      },
                      {
                          "slug": "agent-components",
                          "label": "Agent Components",
                          "description": "Perception, planning, memory, tools, and action modules.",
                          "href": "ai/agentic-ai/agent-components/index.html",
                          "external": false,
                          "step": 2,
                          "totalSteps": 24,
                          "phase": "Beginner",
                          "readMinutes": 13
                      },
                      {
                          "slug": "react-pattern",
                          "label": "ReAct Pattern",
                          "description": "Reasoning and acting interleaved in agent loops.",
                          "href": "ai/agentic-ai/react-pattern/index.html",
                          "external": false,
                          "step": 3,
                          "totalSteps": 24,
                          "phase": "Beginner",
                          "readMinutes": 13
                      },
                      {
                          "slug": "tool-use",
                          "label": "Tool Use",
                          "description": "Function calling, API integration, and tool-augmented agents.",
                          "href": "ai/agentic-ai/tool-use/index.html",
                          "external": false,
                          "step": 4,
                          "totalSteps": 24,
                          "phase": "Beginner",
                          "readMinutes": 14
                      },
                      {
                          "slug": "function-calling",
                          "label": "Function Calling",
                          "description": "OpenAI/Azure function schemas and structured tool invocation.",
                          "href": "ai/agentic-ai/function-calling/index.html",
                          "external": false,
                          "step": 5,
                          "totalSteps": 24,
                          "phase": "Beginner",
                          "readMinutes": 14
                      },
                      {
                          "slug": "memory-systems",
                          "label": "Agent Memory",
                          "description": "Short-term, long-term, episodic memory for agents.",
                          "href": "ai/agentic-ai/memory-systems/index.html",
                          "external": false,
                          "step": 6,
                          "totalSteps": 24,
                          "phase": "Beginner",
                          "readMinutes": 15
                      },
                      {
                          "slug": "planning-agents",
                          "label": "Planning Agents",
                          "description": "Task decomposition, goal setting, and plan execution.",
                          "href": "ai/agentic-ai/planning-agents/index.html",
                          "external": false,
                          "step": 7,
                          "totalSteps": 24,
                          "phase": "Beginner",
                          "readMinutes": 15
                      },
                      {
                          "slug": "reflection",
                          "label": "Self-Reflection",
                          "description": "Critique loops, self-correction, and iterative improvement.",
                          "href": "ai/agentic-ai/reflection/index.html",
                          "external": false,
                          "step": 8,
                          "totalSteps": 24,
                          "phase": "Intermediate",
                          "readMinutes": 16
                      },
                      {
                          "slug": "multi-agent-intro",
                          "label": "Multi-Agent Introduction",
                          "description": "Why multiple agents and collaboration patterns.",
                          "href": "ai/agentic-ai/multi-agent-intro/index.html",
                          "external": false,
                          "step": 9,
                          "totalSteps": 24,
                          "phase": "Intermediate",
                          "readMinutes": 16
                      },
                      {
                          "slug": "agent-roles",
                          "label": "Agent Roles",
                          "description": "Specialist agents, orchestrator, and role assignment.",
                          "href": "ai/agentic-ai/agent-roles/index.html",
                          "external": false,
                          "step": 10,
                          "totalSteps": 24,
                          "phase": "Intermediate",
                          "readMinutes": 17
                      },
                      {
                          "slug": "communication",
                          "label": "Agent Communication",
                          "description": "Message passing, shared state, and protocols.",
                          "href": "ai/agentic-ai/communication/index.html",
                          "external": false,
                          "step": 11,
                          "totalSteps": 24,
                          "phase": "Intermediate",
                          "readMinutes": 17
                      },
                      {
                          "slug": "orchestration",
                          "label": "Orchestration Frameworks",
                          "description": "LangGraph, AutoGen, and CrewAI patterns.",
                          "href": "ai/agentic-ai/orchestration/index.html",
                          "external": false,
                          "step": 12,
                          "totalSteps": 24,
                          "phase": "Intermediate",
                          "readMinutes": 18
                      },
                      {
                          "slug": "langgraph",
                          "label": "LangGraph Deep Dive",
                          "description": "State graphs, nodes, edges, and conditional routing.",
                          "href": "ai/agentic-ai/langgraph/index.html",
                          "external": false,
                          "step": 13,
                          "totalSteps": 24,
                          "phase": "Intermediate",
                          "readMinutes": 18
                      },
                      {
                          "slug": "human-in-loop",
                          "label": "Human-in-the-Loop",
                          "description": "Approval gates, feedback, and supervised autonomy.",
                          "href": "ai/agentic-ai/human-in-loop/index.html",
                          "external": false,
                          "step": 14,
                          "totalSteps": 24,
                          "phase": "Intermediate",
                          "readMinutes": 19
                      },
                      {
                          "slug": "evaluation-agents",
                          "label": "Evaluating Agents",
                          "description": "Task success rate, tool accuracy, and trajectory analysis.",
                          "href": "ai/agentic-ai/evaluation-agents/index.html",
                          "external": false,
                          "step": 15,
                          "totalSteps": 24,
                          "phase": "Intermediate",
                          "readMinutes": 19
                      },
                      {
                          "slug": "error-recovery",
                          "label": "Error Recovery",
                          "description": "Retry logic, fallback tools, and graceful degradation.",
                          "href": "ai/agentic-ai/error-recovery/index.html",
                          "external": false,
                          "step": 16,
                          "totalSteps": 24,
                          "phase": "Advanced",
                          "readMinutes": 20
                      },
                      {
                          "slug": "security-agents",
                          "label": "Agent Security",
                          "description": "Prompt injection, tool sandboxing, and permission boundaries.",
                          "href": "ai/agentic-ai/security-agents/index.html",
                          "external": false,
                          "step": 17,
                          "totalSteps": 24,
                          "phase": "Advanced",
                          "readMinutes": 20
                      },
                      {
                          "slug": "cost-latency",
                          "label": "Cost & Latency",
                          "description": "Token usage, parallel tool calls, and optimization.",
                          "href": "ai/agentic-ai/cost-latency/index.html",
                          "external": false,
                          "step": 18,
                          "totalSteps": 24,
                          "phase": "Advanced",
                          "readMinutes": 21
                      },
                      {
                          "slug": "production-agents",
                          "label": "Production Agent Pipelines",
                          "description": "Logging, tracing, and deployment patterns.",
                          "href": "ai/agentic-ai/production-agents/index.html",
                          "external": false,
                          "step": 19,
                          "totalSteps": 24,
                          "phase": "Advanced",
                          "readMinutes": 21
                      },
                      {
                          "slug": "observability",
                          "label": "Agent Observability",
                          "description": "LangSmith, OpenTelemetry, and debugging agent runs.",
                          "href": "ai/agentic-ai/observability/index.html",
                          "external": false,
                          "step": 20,
                          "totalSteps": 24,
                          "phase": "Advanced",
                          "readMinutes": 22
                      },
                      {
                          "slug": "case-study-research",
                          "label": "Case Study: Research Agent",
                          "description": "Multi-step research with search and synthesis.",
                          "href": "ai/agentic-ai/case-study-research/index.html",
                          "external": false,
                          "step": 21,
                          "totalSteps": 24,
                          "phase": "Advanced",
                          "readMinutes": 22
                      },
                      {
                          "slug": "case-study-coding",
                          "label": "Case Study: Coding Agent",
                          "description": "Code generation, testing, and iteration loops.",
                          "href": "ai/agentic-ai/case-study-coding/index.html",
                          "external": false,
                          "step": 22,
                          "totalSteps": 24,
                          "phase": "Advanced",
                          "readMinutes": 22
                      },
                      {
                          "slug": "case-study-data",
                          "label": "Case Study: Data Agent",
                          "description": "SQL generation, analysis, and visualization agents.",
                          "href": "ai/agentic-ai/case-study-data/index.html",
                          "external": false,
                          "step": 23,
                          "totalSteps": 24,
                          "phase": "Advanced",
                          "readMinutes": 22
                      },
                      {
                          "slug": "agentic-capstone",
                          "label": "Agentic AI Capstone",
                          "description": "Build a multi-tool agent with orchestration framework.",
                          "href": "ai/agentic-ai/agentic-capstone/index.html",
                          "external": false,
                          "step": 24,
                          "totalSteps": 24,
                          "phase": "Advanced",
                          "readMinutes": 22
                      }
                  ]
              }
          ]
      },
      {
          "id": "azure-devops",
          "label": "Azure DevOps",
          "href": "azure-devops/index.html",
          "topics": [
              {
                  "id": "azure-fundamentals",
                  "label": "Azure Fundamentals",
                  "href": "azure-devops/azure-fundamentals/index.html",
                  "stepCount": 20,
                  "pages": [
                      {
                          "slug": "cloud-overview",
                          "label": "Cloud Computing Overview",
                          "description": "On-premises vs cloud, benefits, and shared responsibility model.",
                          "href": "azure-devops/azure-fundamentals/cloud-overview/index.html",
                          "external": false,
                          "step": 1,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "iaas-paas-saas",
                          "label": "IaaS, PaaS, SaaS",
                          "description": "Service models and choosing the right Azure offering.",
                          "href": "azure-devops/azure-fundamentals/iaas-paas-saas/index.html",
                          "external": false,
                          "step": 2,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "azure-regions",
                          "label": "Azure Regions & Zones",
                          "description": "Geography, availability zones, and region pairing.",
                          "href": "azure-devops/azure-fundamentals/azure-regions/index.html",
                          "external": false,
                          "step": 3,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "subscriptions",
                          "label": "Subscriptions & Management Groups",
                          "description": "Organizing Azure resources and billing boundaries.",
                          "href": "azure-devops/azure-fundamentals/subscriptions/index.html",
                          "external": false,
                          "step": 4,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "resource-groups",
                          "label": "Resource Groups",
                          "description": "Logical containers, tags, and lifecycle management.",
                          "href": "azure-devops/azure-fundamentals/resource-groups/index.html",
                          "external": false,
                          "step": 5,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "azure-portal",
                          "label": "Azure Portal",
                          "description": "Navigating the portal, resource blades, and Cloud Shell.",
                          "href": "azure-devops/azure-fundamentals/azure-portal/index.html",
                          "external": false,
                          "step": 6,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "azure-cli",
                          "label": "Azure CLI Basics",
                          "description": "Installing az CLI, login, and common commands.",
                          "href": "azure-devops/azure-fundamentals/azure-cli/index.html",
                          "external": false,
                          "step": 7,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 12
                      },
                      {
                          "slug": "azure-powershell",
                          "label": "Azure PowerShell",
                          "description": "Connect-AzAccount and cmdlet-based management.",
                          "href": "azure-devops/azure-fundamentals/azure-powershell/index.html",
                          "external": false,
                          "step": 8,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "compute-overview",
                          "label": "Compute Services",
                          "description": "VMs, App Service, AKS, Functions, and Container Instances.",
                          "href": "azure-devops/azure-fundamentals/compute-overview/index.html",
                          "external": false,
                          "step": 9,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "storage-overview",
                          "label": "Storage Services",
                          "description": "Blob, File, Queue, Table, and Disk storage options.",
                          "href": "azure-devops/azure-fundamentals/storage-overview/index.html",
                          "external": false,
                          "step": 10,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "networking-overview",
                          "label": "Networking Overview",
                          "description": "VNets, subnets, NSGs, and Azure DNS.",
                          "href": "azure-devops/azure-fundamentals/networking-overview/index.html",
                          "external": false,
                          "step": 11,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "identity-overview",
                          "label": "Identity Overview",
                          "description": "Microsoft Entra ID, users, groups, and applications.",
                          "href": "azure-devops/azure-fundamentals/identity-overview/index.html",
                          "external": false,
                          "step": 12,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "rbac-basics",
                          "label": "RBAC Basics",
                          "description": "Roles, scopes, and least-privilege access in Azure.",
                          "href": "azure-devops/azure-fundamentals/rbac-basics/index.html",
                          "external": false,
                          "step": 13,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "cost-management",
                          "label": "Cost Management",
                          "description": "Pricing calculator, budgets, alerts, and reservations.",
                          "href": "azure-devops/azure-fundamentals/cost-management/index.html",
                          "external": false,
                          "step": 14,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "monitoring-overview",
                          "label": "Monitoring Overview",
                          "description": "Azure Monitor, Log Analytics, and Application Insights.",
                          "href": "azure-devops/azure-fundamentals/monitoring-overview/index.html",
                          "external": false,
                          "step": 15,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "well-architected",
                          "label": "Well-Architected Framework",
                          "description": "Five pillars: reliability, security, cost, operations, performance.",
                          "href": "azure-devops/azure-fundamentals/well-architected/index.html",
                          "external": false,
                          "step": 16,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "arm-templates-intro",
                          "label": "ARM Templates Intro",
                          "description": "Declarative infrastructure as code with JSON templates.",
                          "href": "azure-devops/azure-fundamentals/arm-templates-intro/index.html",
                          "external": false,
                          "step": 17,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "bicep-intro",
                          "label": "Bicep Introduction",
                          "description": "Simplified ARM syntax and deployment workflows.",
                          "href": "azure-devops/azure-fundamentals/bicep-intro/index.html",
                          "external": false,
                          "step": 18,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "azure-marketplace",
                          "label": "Azure Marketplace",
                          "description": "Third-party solutions and SaaS offerings in Azure.",
                          "href": "azure-devops/azure-fundamentals/azure-marketplace/index.html",
                          "external": false,
                          "step": 19,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "certification-path",
                          "label": "Certification Path",
                          "description": "AZ-900, AZ-104, and role-based certification roadmap.",
                          "href": "azure-devops/azure-fundamentals/certification-path/index.html",
                          "external": false,
                          "step": 20,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 16
                      }
                  ]
              },
              {
                  "id": "azure-repos",
                  "label": "Azure Repos",
                  "href": "azure-devops/azure-repos/index.html",
                  "stepCount": 15,
                  "pages": [
                      {
                          "slug": "git-fundamentals",
                          "label": "Git Fundamentals",
                          "description": "Commits, branches, remotes, and the Git object model.",
                          "href": "azure-devops/azure-repos/git-fundamentals/index.html",
                          "external": false,
                          "step": 1,
                          "totalSteps": 15,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "azure-repos-setup",
                          "label": "Azure Repos Setup",
                          "description": "Creating repos, cloning, and authentication methods.",
                          "href": "azure-devops/azure-repos/azure-repos-setup/index.html",
                          "external": false,
                          "step": 2,
                          "totalSteps": 15,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "branching-strategy",
                          "label": "Branching Strategy",
                          "description": "GitFlow, trunk-based, and feature branch workflows.",
                          "href": "azure-devops/azure-repos/branching-strategy/index.html",
                          "external": false,
                          "step": 3,
                          "totalSteps": 15,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "commits-best-practices",
                          "label": "Commit Best Practices",
                          "description": "Atomic commits, messages, and conventional commits.",
                          "href": "azure-devops/azure-repos/commits-best-practices/index.html",
                          "external": false,
                          "step": 4,
                          "totalSteps": 15,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "pull-requests",
                          "label": "Pull Requests",
                          "description": "Creating PRs, descriptions, and linking work items.",
                          "href": "azure-devops/azure-repos/pull-requests/index.html",
                          "external": false,
                          "step": 5,
                          "totalSteps": 15,
                          "phase": "Intermediate",
                          "readMinutes": 12
                      },
                      {
                          "slug": "code-review",
                          "label": "Code Review",
                          "description": "Review checklist, constructive feedback, and approval policies.",
                          "href": "azure-devops/azure-repos/code-review/index.html",
                          "external": false,
                          "step": 6,
                          "totalSteps": 15,
                          "phase": "Intermediate",
                          "readMinutes": 12
                      },
                      {
                          "slug": "branch-policies",
                          "label": "Branch Policies",
                          "description": "Required reviewers, build validation, and merge types.",
                          "href": "azure-devops/azure-repos/branch-policies/index.html",
                          "external": false,
                          "step": 7,
                          "totalSteps": 15,
                          "phase": "Intermediate",
                          "readMinutes": 12
                      },
                      {
                          "slug": "merge-strategies",
                          "label": "Merge Strategies",
                          "description": "Merge commit, squash, rebase, and when to use each.",
                          "href": "azure-devops/azure-repos/merge-strategies/index.html",
                          "external": false,
                          "step": 8,
                          "totalSteps": 15,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "conflict-resolution",
                          "label": "Conflict Resolution",
                          "description": "Merge conflicts, rebase conflicts, and resolution tools.",
                          "href": "azure-devops/azure-repos/conflict-resolution/index.html",
                          "external": false,
                          "step": 9,
                          "totalSteps": 15,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "tags-releases",
                          "label": "Tags & Releases",
                          "description": "Semantic versioning, Git tags, and release notes.",
                          "href": "azure-devops/azure-repos/tags-releases/index.html",
                          "external": false,
                          "step": 10,
                          "totalSteps": 15,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "hooks-webhooks",
                          "label": "Hooks & Webhooks",
                          "description": "Server hooks, service hooks, and automation triggers.",
                          "href": "azure-devops/azure-repos/hooks-webhooks/index.html",
                          "external": false,
                          "step": 11,
                          "totalSteps": 15,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "repo-permissions",
                          "label": "Repo Permissions",
                          "description": "Contributors, readers, and security group integration.",
                          "href": "azure-devops/azure-repos/repo-permissions/index.html",
                          "external": false,
                          "step": 12,
                          "totalSteps": 15,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "fork-workflows",
                          "label": "Fork Workflows",
                          "description": "Forking, syncing, and contributing to upstream repos.",
                          "href": "azure-devops/azure-repos/fork-workflows/index.html",
                          "external": false,
                          "step": 13,
                          "totalSteps": 15,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "integration-ide",
                          "label": "IDE Integration",
                          "description": "VS Code, Visual Studio, and Git credential management.",
                          "href": "azure-devops/azure-repos/integration-ide/index.html",
                          "external": false,
                          "step": 14,
                          "totalSteps": 15,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "repos-capstone",
                          "label": "Repos Capstone",
                          "description": "Set up a repo with branch policies and PR workflow.",
                          "href": "azure-devops/azure-repos/repos-capstone/index.html",
                          "external": false,
                          "step": 15,
                          "totalSteps": 15,
                          "phase": "Advanced",
                          "readMinutes": 15
                      }
                  ]
              },
              {
                  "id": "azure-pipelines",
                  "label": "Azure Pipelines",
                  "href": "azure-devops/azure-pipelines/index.html",
                  "stepCount": 21,
                  "pages": [
                      {
                          "slug": "pipelines-overview",
                          "label": "Pipelines Overview",
                          "description": "Build vs release, YAML vs classic, and pipeline anatomy.",
                          "href": "azure-devops/azure-pipelines/pipelines-overview/index.html",
                          "external": false,
                          "step": 1,
                          "totalSteps": 21,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "yaml-structure",
                          "label": "YAML Structure",
                          "description": "trigger, pool, stages, jobs, and steps hierarchy.",
                          "href": "azure-devops/azure-pipelines/yaml-structure/index.html",
                          "external": false,
                          "step": 2,
                          "totalSteps": 21,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "first-pipeline",
                          "label": "Your First Pipeline",
                          "description": "Create a CI pipeline that builds and tests code.",
                          "href": "azure-devops/azure-pipelines/first-pipeline/index.html",
                          "external": false,
                          "step": 3,
                          "totalSteps": 21,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "triggers",
                          "label": "Triggers",
                          "description": "CI triggers, PR triggers, scheduled, and path filters.",
                          "href": "azure-devops/azure-pipelines/triggers/index.html",
                          "external": false,
                          "step": 4,
                          "totalSteps": 21,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "variables",
                          "label": "Variables & Variable Groups",
                          "description": "Pipeline variables, secrets, and library groups.",
                          "href": "azure-devops/azure-pipelines/variables/index.html",
                          "external": false,
                          "step": 5,
                          "totalSteps": 21,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "templates",
                          "label": "YAML Templates",
                          "description": "Reusable templates, parameters, and template composition.",
                          "href": "azure-devops/azure-pipelines/templates/index.html",
                          "external": false,
                          "step": 6,
                          "totalSteps": 21,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "build-agents",
                          "label": "Build Agents",
                          "description": "Microsoft-hosted vs self-hosted agents and agent pools.",
                          "href": "azure-devops/azure-pipelines/build-agents/index.html",
                          "external": false,
                          "step": 7,
                          "totalSteps": 21,
                          "phase": "Intermediate",
                          "readMinutes": 12
                      },
                      {
                          "slug": "agent-pools",
                          "label": "Agent Pools",
                          "description": "Creating pools, agent capabilities, and parallel jobs.",
                          "href": "azure-devops/azure-pipelines/agent-pools/index.html",
                          "external": false,
                          "step": 8,
                          "totalSteps": 21,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "artifacts",
                          "label": "Pipeline Artifacts",
                          "description": "Publishing, downloading, and artifact retention policies.",
                          "href": "azure-devops/azure-pipelines/artifacts/index.html",
                          "external": false,
                          "step": 9,
                          "totalSteps": 21,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "caching",
                          "label": "Pipeline Caching",
                          "description": "Dependency caching for faster builds.",
                          "href": "azure-devops/azure-pipelines/caching/index.html",
                          "external": false,
                          "step": 10,
                          "totalSteps": 21,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "multi-stage",
                          "label": "Multi-Stage Pipelines",
                          "description": "Stages, dependencies, conditions, and approvals.",
                          "href": "azure-devops/azure-pipelines/multi-stage/index.html",
                          "external": false,
                          "step": 11,
                          "totalSteps": 21,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "deployment-jobs",
                          "label": "Deployment Jobs",
                          "description": "Environment deployment, runOnce, rolling, and canary strategies.",
                          "href": "azure-devops/azure-pipelines/deployment-jobs/index.html",
                          "external": false,
                          "step": 12,
                          "totalSteps": 21,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "environments",
                          "label": "Environments",
                          "description": "Environment resources, checks, and deployment history.",
                          "href": "azure-devops/azure-pipelines/environments/index.html",
                          "external": false,
                          "step": 13,
                          "totalSteps": 21,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "service-connections",
                          "label": "Service Connections",
                          "description": "Azure RM, Docker Registry, and GitHub connections.",
                          "href": "azure-devops/azure-pipelines/service-connections/index.html",
                          "external": false,
                          "step": 14,
                          "totalSteps": 21,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "testing-gates",
                          "label": "Testing Gates",
                          "description": "Unit tests, code coverage, and quality gates in pipelines.",
                          "href": "azure-devops/azure-pipelines/testing-gates/index.html",
                          "external": false,
                          "step": 15,
                          "totalSteps": 21,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "security-scanning",
                          "label": "Security Scanning",
                          "description": "SAST, dependency scanning, and credential scanning.",
                          "href": "azure-devops/azure-pipelines/security-scanning/index.html",
                          "external": false,
                          "step": 16,
                          "totalSteps": 21,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "release-pipelines",
                          "label": "Release Pipelines",
                          "description": "Classic release pipelines vs YAML multi-stage.",
                          "href": "azure-devops/azure-pipelines/release-pipelines/index.html",
                          "external": false,
                          "step": 17,
                          "totalSteps": 21,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "pipeline-permissions",
                          "label": "Pipeline Permissions",
                          "description": "OAuth, PAT, and pipeline resource authorization.",
                          "href": "azure-devops/azure-pipelines/pipeline-permissions/index.html",
                          "external": false,
                          "step": 18,
                          "totalSteps": 21,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "monitoring-pipelines",
                          "label": "Monitoring Pipelines",
                          "description": "Analytics, failure trends, and pipeline dashboards.",
                          "href": "azure-devops/azure-pipelines/monitoring-pipelines/index.html",
                          "external": false,
                          "step": 19,
                          "totalSteps": 21,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "pipeline-patterns",
                          "label": "Pipeline Patterns",
                          "description": "Monorepo, microservices, and infrastructure pipelines.",
                          "href": "azure-devops/azure-pipelines/pipeline-patterns/index.html",
                          "external": false,
                          "step": 20,
                          "totalSteps": 21,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "capstone-pipeline",
                          "label": "Pipeline Capstone",
                          "description": "Build a full CI/CD pipeline with test and deploy stages.",
                          "href": "azure-devops/azure-pipelines/capstone-pipeline/index.html",
                          "external": false,
                          "step": 21,
                          "totalSteps": 21,
                          "phase": "Advanced",
                          "readMinutes": 16
                      }
                  ]
              },
              {
                  "id": "ci-cd",
                  "label": "CI/CD",
                  "href": "azure-devops/ci-cd/index.html",
                  "stepCount": 20,
                  "pages": [
                      {
                          "slug": "cicd-overview",
                          "label": "CI/CD Overview",
                          "description": "Continuous integration, delivery, and deployment definitions.",
                          "href": "azure-devops/ci-cd/cicd-overview/index.html",
                          "external": false,
                          "step": 1,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "ci-principles",
                          "label": "CI Principles",
                          "description": "Frequent commits, automated builds, and fast feedback loops.",
                          "href": "azure-devops/ci-cd/ci-principles/index.html",
                          "external": false,
                          "step": 2,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "cd-principles",
                          "label": "CD Principles",
                          "description": "Automated releases, deployment pipelines, and rollback.",
                          "href": "azure-devops/ci-cd/cd-principles/index.html",
                          "external": false,
                          "step": 3,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "pipeline-design",
                          "label": "Pipeline Design",
                          "description": "Stage ordering, artifact flow, and environment promotion.",
                          "href": "azure-devops/ci-cd/pipeline-design/index.html",
                          "external": false,
                          "step": 4,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "branching-cicd",
                          "label": "Branching for CI/CD",
                          "description": "Feature branches, main protection, and release branches.",
                          "href": "azure-devops/ci-cd/branching-cicd/index.html",
                          "external": false,
                          "step": 5,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "automated-testing",
                          "label": "Automated Testing in CI",
                          "description": "Unit, integration, and E2E tests in the pipeline.",
                          "href": "azure-devops/ci-cd/automated-testing/index.html",
                          "external": false,
                          "step": 6,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "deployment-strategies",
                          "label": "Deployment Strategies",
                          "description": "Blue-green, canary, rolling, and feature flags.",
                          "href": "azure-devops/ci-cd/deployment-strategies/index.html",
                          "external": false,
                          "step": 7,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 12
                      },
                      {
                          "slug": "infrastructure-cicd",
                          "label": "Infrastructure CI/CD",
                          "description": "Terraform/Bicep in pipelines and IaC validation.",
                          "href": "azure-devops/ci-cd/infrastructure-cicd/index.html",
                          "external": false,
                          "step": 8,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "database-cicd",
                          "label": "Database CI/CD",
                          "description": "Schema migrations, flyway, and database deployment patterns.",
                          "href": "azure-devops/ci-cd/database-cicd/index.html",
                          "external": false,
                          "step": 9,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "container-cicd",
                          "label": "Container CI/CD",
                          "description": "Build, scan, push, and deploy container images.",
                          "href": "azure-devops/ci-cd/container-cicd/index.html",
                          "external": false,
                          "step": 10,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "gitops",
                          "label": "GitOps",
                          "description": "Declarative deployments, Argo CD, and Flux concepts.",
                          "href": "azure-devops/ci-cd/gitops/index.html",
                          "external": false,
                          "step": 11,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "feature-flags",
                          "label": "Feature Flags",
                          "description": "Progressive delivery and LaunchDarkly-style rollouts.",
                          "href": "azure-devops/ci-cd/feature-flags/index.html",
                          "external": false,
                          "step": 12,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "rollback-strategies",
                          "label": "Rollback Strategies",
                          "description": "Automated rollback, health checks, and smoke tests.",
                          "href": "azure-devops/ci-cd/rollback-strategies/index.html",
                          "external": false,
                          "step": 13,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "environment-config",
                          "label": "Environment Configuration",
                          "description": "Dev, staging, prod parity and config management.",
                          "href": "azure-devops/ci-cd/environment-config/index.html",
                          "external": false,
                          "step": 14,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "secrets-cicd",
                          "label": "Secrets in CI/CD",
                          "description": "Key Vault integration, secret rotation, and pipeline security.",
                          "href": "azure-devops/ci-cd/secrets-cicd/index.html",
                          "external": false,
                          "step": 15,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "compliance-gates",
                          "label": "Compliance Gates",
                          "description": "Audit trails, approval workflows, and change management.",
                          "href": "azure-devops/ci-cd/compliance-gates/index.html",
                          "external": false,
                          "step": 16,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "dora-metrics",
                          "label": "DORA Metrics",
                          "description": "Deployment frequency, lead time, MTTR, and change failure rate.",
                          "href": "azure-devops/ci-cd/dora-metrics/index.html",
                          "external": false,
                          "step": 17,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "cicd-maturity",
                          "label": "CI/CD Maturity Model",
                          "description": "Assessing and improving your delivery pipeline maturity.",
                          "href": "azure-devops/ci-cd/cicd-maturity/index.html",
                          "external": false,
                          "step": 18,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "trunk-based",
                          "label": "Trunk-Based Development",
                          "description": "Short-lived branches and continuous integration at scale.",
                          "href": "azure-devops/ci-cd/trunk-based/index.html",
                          "external": false,
                          "step": 19,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "cicd-capstone",
                          "label": "CI/CD Capstone",
                          "description": "Design a CI/CD strategy for a microservices application.",
                          "href": "azure-devops/ci-cd/cicd-capstone/index.html",
                          "external": false,
                          "step": 20,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 16
                      }
                  ]
              },
              {
                  "id": "docker",
                  "label": "Docker",
                  "href": "azure-devops/docker/index.html",
                  "stepCount": 18,
                  "pages": [
                      {
                          "slug": "containers-overview",
                          "label": "Containers Overview",
                          "description": "Containers vs VMs, isolation, and portability benefits.",
                          "href": "azure-devops/docker/containers-overview/index.html",
                          "external": false,
                          "step": 1,
                          "totalSteps": 18,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "docker-installation",
                          "label": "Docker Installation",
                          "description": "Docker Desktop, Engine, and verifying installation.",
                          "href": "azure-devops/docker/docker-installation/index.html",
                          "external": false,
                          "step": 2,
                          "totalSteps": 18,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "images-containers",
                          "label": "Images & Containers",
                          "description": "Image layers, container lifecycle, and immutability.",
                          "href": "azure-devops/docker/images-containers/index.html",
                          "external": false,
                          "step": 3,
                          "totalSteps": 18,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "dockerfile",
                          "label": "Dockerfile",
                          "description": "FROM, RUN, COPY, CMD, ENTRYPOINT, and best practices.",
                          "href": "azure-devops/docker/dockerfile/index.html",
                          "external": false,
                          "step": 4,
                          "totalSteps": 18,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "building-images",
                          "label": "Building Images",
                          "description": "docker build, tags, and .dockerignore.",
                          "href": "azure-devops/docker/building-images/index.html",
                          "external": false,
                          "step": 5,
                          "totalSteps": 18,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "running-containers",
                          "label": "Running Containers",
                          "description": "docker run, ports, volumes, and environment variables.",
                          "href": "azure-devops/docker/running-containers/index.html",
                          "external": false,
                          "step": 6,
                          "totalSteps": 18,
                          "phase": "Intermediate",
                          "readMinutes": 12
                      },
                      {
                          "slug": "docker-compose",
                          "label": "Docker Compose",
                          "description": "Multi-container apps, compose files, and local development.",
                          "href": "azure-devops/docker/docker-compose/index.html",
                          "external": false,
                          "step": 7,
                          "totalSteps": 18,
                          "phase": "Intermediate",
                          "readMinutes": 12
                      },
                      {
                          "slug": "networking",
                          "label": "Docker Networking",
                          "description": "Bridge, host, overlay networks, and service discovery.",
                          "href": "azure-devops/docker/networking/index.html",
                          "external": false,
                          "step": 8,
                          "totalSteps": 18,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "volumes",
                          "label": "Docker Volumes",
                          "description": "Named volumes, bind mounts, and data persistence.",
                          "href": "azure-devops/docker/volumes/index.html",
                          "external": false,
                          "step": 9,
                          "totalSteps": 18,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "multi-stage-builds",
                          "label": "Multi-Stage Builds",
                          "description": "Smaller production images with build and runtime stages.",
                          "href": "azure-devops/docker/multi-stage-builds/index.html",
                          "external": false,
                          "step": 10,
                          "totalSteps": 18,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "docker-registry",
                          "label": "Container Registry",
                          "description": "Docker Hub, ACR, and image tagging strategies.",
                          "href": "azure-devops/docker/docker-registry/index.html",
                          "external": false,
                          "step": 11,
                          "totalSteps": 18,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "acr-setup",
                          "label": "Azure Container Registry",
                          "description": "Creating ACR, authentication, and geo-replication.",
                          "href": "azure-devops/docker/acr-setup/index.html",
                          "external": false,
                          "step": 12,
                          "totalSteps": 18,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "security-scanning",
                          "label": "Image Security Scanning",
                          "description": "Vulnerability scanning and base image selection.",
                          "href": "azure-devops/docker/security-scanning/index.html",
                          "external": false,
                          "step": 13,
                          "totalSteps": 18,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "dockerignore",
                          "label": "Optimizing Builds",
                          "description": ".dockerignore, layer caching, and build context size.",
                          "href": "azure-devops/docker/dockerignore/index.html",
                          "external": false,
                          "step": 14,
                          "totalSteps": 18,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "health-checks",
                          "label": "Health Checks",
                          "description": "HEALTHCHECK instruction and container orchestration readiness.",
                          "href": "azure-devops/docker/health-checks/index.html",
                          "external": false,
                          "step": 15,
                          "totalSteps": 18,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "debugging-containers",
                          "label": "Debugging Containers",
                          "description": "docker logs, exec, inspect, and common issues.",
                          "href": "azure-devops/docker/debugging-containers/index.html",
                          "external": false,
                          "step": 16,
                          "totalSteps": 18,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "docker-production",
                          "label": "Docker in Production",
                          "description": "Resource limits, restart policies, and orchestration handoff.",
                          "href": "azure-devops/docker/docker-production/index.html",
                          "external": false,
                          "step": 17,
                          "totalSteps": 18,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "docker-capstone",
                          "label": "Docker Capstone",
                          "description": "Containerize a web app with Compose and push to ACR.",
                          "href": "azure-devops/docker/docker-capstone/index.html",
                          "external": false,
                          "step": 18,
                          "totalSteps": 18,
                          "phase": "Advanced",
                          "readMinutes": 16
                      }
                  ]
              },
              {
                  "id": "kubernetes",
                  "label": "Kubernetes",
                  "href": "azure-devops/kubernetes/index.html",
                  "stepCount": 21,
                  "pages": [
                      {
                          "slug": "k8s-overview",
                          "label": "Kubernetes Overview",
                          "description": "Orchestration, control plane, and worker node architecture.",
                          "href": "azure-devops/kubernetes/k8s-overview/index.html",
                          "external": false,
                          "step": 1,
                          "totalSteps": 21,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "cluster-architecture",
                          "label": "Cluster Architecture",
                          "description": "API server, etcd, scheduler, controller manager, kubelet.",
                          "href": "azure-devops/kubernetes/cluster-architecture/index.html",
                          "external": false,
                          "step": 2,
                          "totalSteps": 21,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "kubectl-basics",
                          "label": "kubectl Basics",
                          "description": "Config, get, describe, apply, and delete commands.",
                          "href": "azure-devops/kubernetes/kubectl-basics/index.html",
                          "external": false,
                          "step": 3,
                          "totalSteps": 21,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "pods",
                          "label": "Pods",
                          "description": "Pod lifecycle, multi-container pods, and restart policies.",
                          "href": "azure-devops/kubernetes/pods/index.html",
                          "external": false,
                          "step": 4,
                          "totalSteps": 21,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "deployments",
                          "label": "Deployments",
                          "description": "ReplicaSets, rolling updates, and rollback.",
                          "href": "azure-devops/kubernetes/deployments/index.html",
                          "external": false,
                          "step": 5,
                          "totalSteps": 21,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "services",
                          "label": "Services",
                          "description": "ClusterIP, NodePort, LoadBalancer, and service discovery.",
                          "href": "azure-devops/kubernetes/services/index.html",
                          "external": false,
                          "step": 6,
                          "totalSteps": 21,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "configmaps",
                          "label": "ConfigMaps",
                          "description": "Configuration data injection via env vars and volumes.",
                          "href": "azure-devops/kubernetes/configmaps/index.html",
                          "external": false,
                          "step": 7,
                          "totalSteps": 21,
                          "phase": "Intermediate",
                          "readMinutes": 12
                      },
                      {
                          "slug": "secrets",
                          "label": "Secrets",
                          "description": "Secret management, base64 encoding, and external secret operators.",
                          "href": "azure-devops/kubernetes/secrets/index.html",
                          "external": false,
                          "step": 8,
                          "totalSteps": 21,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "ingress",
                          "label": "Ingress",
                          "description": "Ingress controllers, rules, TLS, and path-based routing.",
                          "href": "azure-devops/kubernetes/ingress/index.html",
                          "external": false,
                          "step": 9,
                          "totalSteps": 21,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "namespaces",
                          "label": "Namespaces",
                          "description": "Resource isolation, quotas, and multi-tenancy.",
                          "href": "azure-devops/kubernetes/namespaces/index.html",
                          "external": false,
                          "step": 10,
                          "totalSteps": 21,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "labels-selectors",
                          "label": "Labels & Selectors",
                          "description": "Labeling resources and selector-based operations.",
                          "href": "azure-devops/kubernetes/labels-selectors/index.html",
                          "external": false,
                          "step": 11,
                          "totalSteps": 21,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "resource-limits",
                          "label": "Resource Limits",
                          "description": "Requests, limits, QoS classes, and resource quotas.",
                          "href": "azure-devops/kubernetes/resource-limits/index.html",
                          "external": false,
                          "step": 12,
                          "totalSteps": 21,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "health-probes",
                          "label": "Health Probes",
                          "description": "Liveness, readiness, and startup probes.",
                          "href": "azure-devops/kubernetes/health-probes/index.html",
                          "external": false,
                          "step": 13,
                          "totalSteps": 21,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "persistent-volumes",
                          "label": "Persistent Volumes",
                          "description": "PV, PVC, StorageClass, and dynamic provisioning.",
                          "href": "azure-devops/kubernetes/persistent-volumes/index.html",
                          "external": false,
                          "step": 14,
                          "totalSteps": 21,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "statefulsets",
                          "label": "StatefulSets",
                          "description": "Stable network identity and ordered deployment for stateful apps.",
                          "href": "azure-devops/kubernetes/statefulsets/index.html",
                          "external": false,
                          "step": 15,
                          "totalSteps": 21,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "daemonsets",
                          "label": "DaemonSets",
                          "description": "Running pods on every node for logging and monitoring agents.",
                          "href": "azure-devops/kubernetes/daemonsets/index.html",
                          "external": false,
                          "step": 16,
                          "totalSteps": 21,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "jobs-cronjobs",
                          "label": "Jobs & CronJobs",
                          "description": "Batch workloads and scheduled tasks in Kubernetes.",
                          "href": "azure-devops/kubernetes/jobs-cronjobs/index.html",
                          "external": false,
                          "step": 17,
                          "totalSteps": 21,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "helm-intro",
                          "label": "Helm Introduction",
                          "description": "Charts, releases, and package management for K8s.",
                          "href": "azure-devops/kubernetes/helm-intro/index.html",
                          "external": false,
                          "step": 18,
                          "totalSteps": 21,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "network-policies",
                          "label": "Network Policies",
                          "description": "Pod-to-pod traffic control and micro-segmentation.",
                          "href": "azure-devops/kubernetes/network-policies/index.html",
                          "external": false,
                          "step": 19,
                          "totalSteps": 21,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "troubleshooting",
                          "label": "Troubleshooting K8s",
                          "description": "Common failure modes, events, and debugging workflows.",
                          "href": "azure-devops/kubernetes/troubleshooting/index.html",
                          "external": false,
                          "step": 20,
                          "totalSteps": 21,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "k8s-capstone",
                          "label": "Kubernetes Capstone",
                          "description": "Deploy a multi-tier app with Deployment, Service, and Ingress.",
                          "href": "azure-devops/kubernetes/k8s-capstone/index.html",
                          "external": false,
                          "step": 21,
                          "totalSteps": 21,
                          "phase": "Advanced",
                          "readMinutes": 16
                      }
                  ]
              },
              {
                  "id": "aks",
                  "label": "AKS",
                  "href": "azure-devops/aks/index.html",
                  "stepCount": 16,
                  "pages": [
                      {
                          "slug": "aks-overview",
                          "label": "AKS Overview",
                          "description": "Managed Kubernetes on Azure and integration benefits.",
                          "href": "azure-devops/aks/aks-overview/index.html",
                          "external": false,
                          "step": 1,
                          "totalSteps": 16,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "cluster-creation",
                          "label": "Creating AKS Clusters",
                          "description": "az aks create, node pools, and cluster options.",
                          "href": "azure-devops/aks/cluster-creation/index.html",
                          "external": false,
                          "step": 2,
                          "totalSteps": 16,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "node-pools",
                          "label": "Node Pools",
                          "description": "System vs user pools, VM sizes, and spot instances.",
                          "href": "azure-devops/aks/node-pools/index.html",
                          "external": false,
                          "step": 3,
                          "totalSteps": 16,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "networking-aks",
                          "label": "AKS Networking",
                          "description": "Kubenet vs Azure CNI, VNet integration, and IP planning.",
                          "href": "azure-devops/aks/networking-aks/index.html",
                          "external": false,
                          "step": 4,
                          "totalSteps": 16,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "identity-aks",
                          "label": "AKS Identity",
                          "description": "Managed identity, AAD integration, and RBAC.",
                          "href": "azure-devops/aks/identity-aks/index.html",
                          "external": false,
                          "step": 5,
                          "totalSteps": 16,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "scaling-hpa",
                          "label": "Horizontal Pod Autoscaler",
                          "description": "CPU/memory-based scaling and custom metrics.",
                          "href": "azure-devops/aks/scaling-hpa/index.html",
                          "external": false,
                          "step": 6,
                          "totalSteps": 16,
                          "phase": "Intermediate",
                          "readMinutes": 12
                      },
                      {
                          "slug": "cluster-autoscaler",
                          "label": "Cluster Autoscaler",
                          "description": "Node pool scaling based on pod demand.",
                          "href": "azure-devops/aks/cluster-autoscaler/index.html",
                          "external": false,
                          "step": 7,
                          "totalSteps": 16,
                          "phase": "Intermediate",
                          "readMinutes": 12
                      },
                      {
                          "slug": "azure-monitor-aks",
                          "label": "Monitoring AKS",
                          "description": "Container Insights, metrics, and log queries.",
                          "href": "azure-devops/aks/azure-monitor-aks/index.html",
                          "external": false,
                          "step": 8,
                          "totalSteps": 16,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "ingress-aks",
                          "label": "Ingress on AKS",
                          "description": "Application Gateway Ingress Controller and NGINX.",
                          "href": "azure-devops/aks/ingress-aks/index.html",
                          "external": false,
                          "step": 9,
                          "totalSteps": 16,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "storage-aks",
                          "label": "Storage on AKS",
                          "description": "Azure Disk, Azure Files, and persistent volume claims.",
                          "href": "azure-devops/aks/storage-aks/index.html",
                          "external": false,
                          "step": 10,
                          "totalSteps": 16,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "secrets-aks",
                          "label": "Secrets on AKS",
                          "description": "Key Vault CSI driver and secret rotation.",
                          "href": "azure-devops/aks/secrets-aks/index.html",
                          "external": false,
                          "step": 11,
                          "totalSteps": 16,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "upgrades-aks",
                          "label": "AKS Upgrades",
                          "description": "Kubernetes version upgrades and node image updates.",
                          "href": "azure-devops/aks/upgrades-aks/index.html",
                          "external": false,
                          "step": 12,
                          "totalSteps": 16,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "security-aks",
                          "label": "AKS Security",
                          "description": "Pod security, network policies, and Azure Policy.",
                          "href": "azure-devops/aks/security-aks/index.html",
                          "external": false,
                          "step": 13,
                          "totalSteps": 16,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "devops-aks",
                          "label": "DevOps for AKS",
                          "description": "CI/CD pipelines deploying to AKS with Helm or manifests.",
                          "href": "azure-devops/aks/devops-aks/index.html",
                          "external": false,
                          "step": 14,
                          "totalSteps": 16,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "cost-optimization-aks",
                          "label": "AKS Cost Optimization",
                          "description": "Spot nodes, right-sizing, and cluster autoscaler tuning.",
                          "href": "azure-devops/aks/cost-optimization-aks/index.html",
                          "external": false,
                          "step": 15,
                          "totalSteps": 16,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "aks-capstone",
                          "label": "AKS Capstone",
                          "description": "Deploy and monitor an application on AKS with autoscaling.",
                          "href": "azure-devops/aks/aks-capstone/index.html",
                          "external": false,
                          "step": 16,
                          "totalSteps": 16,
                          "phase": "Advanced",
                          "readMinutes": 16
                      }
                  ]
              },
              {
                  "id": "terraform",
                  "label": "Terraform",
                  "href": "azure-devops/terraform/index.html",
                  "stepCount": 20,
                  "pages": [
                      {
                          "slug": "terraform-overview",
                          "label": "Terraform Overview",
                          "description": "Infrastructure as code, providers, and declarative model.",
                          "href": "azure-devops/terraform/terraform-overview/index.html",
                          "external": false,
                          "step": 1,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "hcl-basics",
                          "label": "HCL Basics",
                          "description": "Resources, data sources, variables, and outputs syntax.",
                          "href": "azure-devops/terraform/hcl-basics/index.html",
                          "external": false,
                          "step": 2,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "first-config",
                          "label": "First Configuration",
                          "description": "Write and apply a simple Azure resource with Terraform.",
                          "href": "azure-devops/terraform/first-config/index.html",
                          "external": false,
                          "step": 3,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "providers",
                          "label": "Providers",
                          "description": "azurerm provider, version constraints, and provider configuration.",
                          "href": "azure-devops/terraform/providers/index.html",
                          "external": false,
                          "step": 4,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "state-local",
                          "label": "Local State",
                          "description": "terraform.tfstate, state file importance, and sensitivity.",
                          "href": "azure-devops/terraform/state-local/index.html",
                          "external": false,
                          "step": 5,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "state-remote",
                          "label": "Remote State",
                          "description": "Azure Storage backend, state locking, and team collaboration.",
                          "href": "azure-devops/terraform/state-remote/index.html",
                          "external": false,
                          "step": 6,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "variables-outputs",
                          "label": "Variables & Outputs",
                          "description": "Input variables, validation, and output values.",
                          "href": "azure-devops/terraform/variables-outputs/index.html",
                          "external": false,
                          "step": 7,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 12
                      },
                      {
                          "slug": "modules",
                          "label": "Modules",
                          "description": "Creating reusable modules and module composition.",
                          "href": "azure-devops/terraform/modules/index.html",
                          "external": false,
                          "step": 8,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "module-registry",
                          "label": "Module Registry",
                          "description": "Public modules, versioning, and private registries.",
                          "href": "azure-devops/terraform/module-registry/index.html",
                          "external": false,
                          "step": 9,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "workspaces",
                          "label": "Workspaces",
                          "description": "Environment separation with Terraform workspaces.",
                          "href": "azure-devops/terraform/workspaces/index.html",
                          "external": false,
                          "step": 10,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "plan-apply",
                          "label": "Plan & Apply",
                          "description": "terraform plan, apply, destroy, and targeted operations.",
                          "href": "azure-devops/terraform/plan-apply/index.html",
                          "external": false,
                          "step": 11,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "import",
                          "label": "Import Existing Resources",
                          "description": "terraform import and bringing existing infra under management.",
                          "href": "azure-devops/terraform/import/index.html",
                          "external": false,
                          "step": 12,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "count-for-each",
                          "label": "count & for_each",
                          "description": "Dynamic resource creation and iteration patterns.",
                          "href": "azure-devops/terraform/count-for-each/index.html",
                          "external": false,
                          "step": 13,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "provisioners",
                          "label": "Provisioners",
                          "description": "local-exec, remote-exec, and when to avoid provisioners.",
                          "href": "azure-devops/terraform/provisioners/index.html",
                          "external": false,
                          "step": 14,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "testing-terraform",
                          "label": "Testing Terraform",
                          "description": "terraform validate, fmt, tflint, and terratest intro.",
                          "href": "azure-devops/terraform/testing-terraform/index.html",
                          "external": false,
                          "step": 15,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "ci-terraform",
                          "label": "Terraform in CI/CD",
                          "description": "Plan on PR, apply on merge, and drift detection.",
                          "href": "azure-devops/terraform/ci-terraform/index.html",
                          "external": false,
                          "step": 16,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "azurerm-patterns",
                          "label": "Azure Resource Patterns",
                          "description": "Resource groups, naming conventions, and tagging.",
                          "href": "azure-devops/terraform/azurerm-patterns/index.html",
                          "external": false,
                          "step": 17,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "networking-terraform",
                          "label": "Networking with Terraform",
                          "description": "VNets, subnets, NSGs, and peering in Terraform.",
                          "href": "azure-devops/terraform/networking-terraform/index.html",
                          "external": false,
                          "step": 18,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "security-terraform",
                          "label": "Terraform Security",
                          "description": "Secret management, state encryption, and policy as code.",
                          "href": "azure-devops/terraform/security-terraform/index.html",
                          "external": false,
                          "step": 19,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "terraform-capstone",
                          "label": "Terraform Capstone",
                          "description": "Module-based Azure infrastructure deployment.",
                          "href": "azure-devops/terraform/terraform-capstone/index.html",
                          "external": false,
                          "step": 20,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 16
                      }
                  ]
              },
              {
                  "id": "monitoring",
                  "label": "Monitoring",
                  "href": "azure-devops/monitoring/index.html",
                  "stepCount": 17,
                  "pages": [
                      {
                          "slug": "monitor-overview",
                          "label": "Azure Monitor Overview",
                          "description": "Metrics, logs, traces, and the unified monitoring platform.",
                          "href": "azure-devops/monitoring/monitor-overview/index.html",
                          "external": false,
                          "step": 1,
                          "totalSteps": 17,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "metrics",
                          "label": "Metrics",
                          "description": "Metric namespaces, aggregation, and metric alerts.",
                          "href": "azure-devops/monitoring/metrics/index.html",
                          "external": false,
                          "step": 2,
                          "totalSteps": 17,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "log-analytics",
                          "label": "Log Analytics",
                          "description": "Workspaces, data ingestion, and retention policies.",
                          "href": "azure-devops/monitoring/log-analytics/index.html",
                          "external": false,
                          "step": 3,
                          "totalSteps": 17,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "kql-basics",
                          "label": "KQL Basics",
                          "description": "Query syntax, filters, projections, and summarize.",
                          "href": "azure-devops/monitoring/kql-basics/index.html",
                          "external": false,
                          "step": 4,
                          "totalSteps": 17,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "kql-advanced",
                          "label": "Advanced KQL",
                          "description": "join, parse, makelist, and time-series analysis.",
                          "href": "azure-devops/monitoring/kql-advanced/index.html",
                          "external": false,
                          "step": 5,
                          "totalSteps": 17,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "application-insights",
                          "label": "Application Insights",
                          "description": "APM, dependency tracking, and request telemetry.",
                          "href": "azure-devops/monitoring/application-insights/index.html",
                          "external": false,
                          "step": 6,
                          "totalSteps": 17,
                          "phase": "Intermediate",
                          "readMinutes": 12
                      },
                      {
                          "slug": "alert-rules",
                          "label": "Alert Rules",
                          "description": "Metric alerts, log alerts, and alert processing rules.",
                          "href": "azure-devops/monitoring/alert-rules/index.html",
                          "external": false,
                          "step": 7,
                          "totalSteps": 17,
                          "phase": "Intermediate",
                          "readMinutes": 12
                      },
                      {
                          "slug": "action-groups",
                          "label": "Action Groups",
                          "description": "Email, SMS, webhook, and ITSM integration notifications.",
                          "href": "azure-devops/monitoring/action-groups/index.html",
                          "external": false,
                          "step": 8,
                          "totalSteps": 17,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "dashboards",
                          "label": "Dashboards",
                          "description": "Azure Dashboards, workbooks, and Grafana integration.",
                          "href": "azure-devops/monitoring/dashboards/index.html",
                          "external": false,
                          "step": 9,
                          "totalSteps": 17,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "activity-log",
                          "label": "Activity Log",
                          "description": "Subscription-level events, audit trails, and export.",
                          "href": "azure-devops/monitoring/activity-log/index.html",
                          "external": false,
                          "step": 10,
                          "totalSteps": 17,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "diagnostic-settings",
                          "label": "Diagnostic Settings",
                          "description": "Resource log routing to Log Analytics and Storage.",
                          "href": "azure-devops/monitoring/diagnostic-settings/index.html",
                          "external": false,
                          "step": 11,
                          "totalSteps": 17,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "container-insights",
                          "label": "Container Insights",
                          "description": "AKS and container monitoring with Prometheus metrics.",
                          "href": "azure-devops/monitoring/container-insights/index.html",
                          "external": false,
                          "step": 12,
                          "totalSteps": 17,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "availability-tests",
                          "label": "Availability Tests",
                          "description": "URL ping tests and multi-location monitoring.",
                          "href": "azure-devops/monitoring/availability-tests/index.html",
                          "external": false,
                          "step": 13,
                          "totalSteps": 17,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "smart-detection",
                          "label": "Smart Detection",
                          "description": "AI-powered anomaly detection in Application Insights.",
                          "href": "azure-devops/monitoring/smart-detection/index.html",
                          "external": false,
                          "step": 14,
                          "totalSteps": 17,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "cost-monitoring",
                          "label": "Monitoring Costs",
                          "description": "Log Analytics ingestion costs and data collection rules.",
                          "href": "azure-devops/monitoring/cost-monitoring/index.html",
                          "external": false,
                          "step": 15,
                          "totalSteps": 17,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "observability-patterns",
                          "label": "Observability Patterns",
                          "description": "Three pillars: metrics, logs, traces in Azure.",
                          "href": "azure-devops/monitoring/observability-patterns/index.html",
                          "external": false,
                          "step": 16,
                          "totalSteps": 17,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "monitoring-capstone",
                          "label": "Monitoring Capstone",
                          "description": "Set up alerts and dashboards for an Azure application.",
                          "href": "azure-devops/monitoring/monitoring-capstone/index.html",
                          "external": false,
                          "step": 17,
                          "totalSteps": 17,
                          "phase": "Advanced",
                          "readMinutes": 16
                      }
                  ]
              },
              {
                  "id": "security",
                  "label": "Security",
                  "href": "azure-devops/security/index.html",
                  "stepCount": 16,
                  "pages": [
                      {
                          "slug": "security-overview",
                          "label": "Azure Security Overview",
                          "description": "Defense in depth, Zero Trust, and shared responsibility.",
                          "href": "azure-devops/security/security-overview/index.html",
                          "external": false,
                          "step": 1,
                          "totalSteps": 16,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "entra-id",
                          "label": "Microsoft Entra ID",
                          "description": "Users, groups, conditional access, and MFA.",
                          "href": "azure-devops/security/entra-id/index.html",
                          "external": false,
                          "step": 2,
                          "totalSteps": 16,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "rbac-deep",
                          "label": "RBAC Deep Dive",
                          "description": "Custom roles, deny assignments, and privilege management.",
                          "href": "azure-devops/security/rbac-deep/index.html",
                          "external": false,
                          "step": 3,
                          "totalSteps": 16,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "managed-identities",
                          "label": "Managed Identities",
                          "description": "System-assigned vs user-assigned and token acquisition.",
                          "href": "azure-devops/security/managed-identities/index.html",
                          "external": false,
                          "step": 4,
                          "totalSteps": 16,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "key-vault",
                          "label": "Azure Key Vault",
                          "description": "Secrets, keys, certificates, and access policies.",
                          "href": "azure-devops/security/key-vault/index.html",
                          "external": false,
                          "step": 5,
                          "totalSteps": 16,
                          "phase": "Beginner",
                          "readMinutes": 10
                      },
                      {
                          "slug": "network-security",
                          "label": "Network Security",
                          "description": "NSGs, Azure Firewall, DDoS protection, and WAF.",
                          "href": "azure-devops/security/network-security/index.html",
                          "external": false,
                          "step": 6,
                          "totalSteps": 16,
                          "phase": "Intermediate",
                          "readMinutes": 12
                      },
                      {
                          "slug": "encryption",
                          "label": "Encryption",
                          "description": "Encryption at rest, in transit, and customer-managed keys.",
                          "href": "azure-devops/security/encryption/index.html",
                          "external": false,
                          "step": 7,
                          "totalSteps": 16,
                          "phase": "Intermediate",
                          "readMinutes": 12
                      },
                      {
                          "slug": "defender-cloud",
                          "label": "Microsoft Defender for Cloud",
                          "description": "Secure score, recommendations, and threat protection.",
                          "href": "azure-devops/security/defender-cloud/index.html",
                          "external": false,
                          "step": 8,
                          "totalSteps": 16,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "sentinel-intro",
                          "label": "Microsoft Sentinel Intro",
                          "description": "SIEM, SOAR, and security analytics on Azure.",
                          "href": "azure-devops/security/sentinel-intro/index.html",
                          "external": false,
                          "step": 9,
                          "totalSteps": 16,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "devsecops",
                          "label": "DevSecOps",
                          "description": "Shift-left security, pipeline gates, and secure SDLC.",
                          "href": "azure-devops/security/devsecops/index.html",
                          "external": false,
                          "step": 10,
                          "totalSteps": 16,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "sast-dast",
                          "label": "SAST & DAST",
                          "description": "Static and dynamic application security testing in CI/CD.",
                          "href": "azure-devops/security/sast-dast/index.html",
                          "external": false,
                          "step": 11,
                          "totalSteps": 16,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "secret-scanning",
                          "label": "Secret Scanning",
                          "description": "Detecting credentials in code and pipeline scanning tools.",
                          "href": "azure-devops/security/secret-scanning/index.html",
                          "external": false,
                          "step": 12,
                          "totalSteps": 16,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "compliance",
                          "label": "Compliance",
                          "description": "Azure Policy, regulatory frameworks, and audit readiness.",
                          "href": "azure-devops/security/compliance/index.html",
                          "external": false,
                          "step": 13,
                          "totalSteps": 16,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "identity-governance",
                          "label": "Identity Governance",
                          "description": "PIM, access reviews, and entitlement management.",
                          "href": "azure-devops/security/identity-governance/index.html",
                          "external": false,
                          "step": 14,
                          "totalSteps": 16,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "incident-response",
                          "label": "Incident Response",
                          "description": "Security incident workflow and Azure-native tooling.",
                          "href": "azure-devops/security/incident-response/index.html",
                          "external": false,
                          "step": 15,
                          "totalSteps": 16,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "security-capstone",
                          "label": "Security Capstone",
                          "description": "Design a secure Azure architecture with RBAC and Key Vault.",
                          "href": "azure-devops/security/security-capstone/index.html",
                          "external": false,
                          "step": 16,
                          "totalSteps": 16,
                          "phase": "Advanced",
                          "readMinutes": 16
                      }
                  ]
              }
          ]
      },
      {
          "id": "azure-data-engineering",
          "label": "Azure Data Engineering",
          "href": "azure-data-engineering/index.html",
          "topics": [
              {
                  "id": "azure-data-factory",
                  "label": "Azure Data Factory",
                  "href": "azure-data-engineering/azure-data-factory/index.html",
                  "stepCount": 28,
                  "pages": [
                      {
                          "slug": "adf-overview",
                          "label": "ADF Overview",
                          "description": "Cloud ETL/ELT service, integration runtime, and pipeline concepts.",
                          "href": "azure-data-engineering/azure-data-factory/adf-overview/index.html",
                          "external": false,
                          "step": 1,
                          "totalSteps": 28,
                          "phase": "Beginner",
                          "readMinutes": 12
                      },
                      {
                          "slug": "linked-services",
                          "label": "Linked Services",
                          "description": "Connection strings, authentication, and supported connectors.",
                          "href": "azure-data-engineering/azure-data-factory/linked-services/index.html",
                          "external": false,
                          "step": 2,
                          "totalSteps": 28,
                          "phase": "Beginner",
                          "readMinutes": 12
                      },
                      {
                          "slug": "datasets",
                          "label": "Datasets",
                          "description": "Dataset types, parameters, and schema definition.",
                          "href": "azure-data-engineering/azure-data-factory/datasets/index.html",
                          "external": false,
                          "step": 3,
                          "totalSteps": 28,
                          "phase": "Beginner",
                          "readMinutes": 13
                      },
                      {
                          "slug": "pipeline-basics",
                          "label": "Pipeline Basics",
                          "description": "Activities, dependencies, and pipeline runs.",
                          "href": "azure-data-engineering/azure-data-factory/pipeline-basics/index.html",
                          "external": false,
                          "step": 4,
                          "totalSteps": 28,
                          "phase": "Beginner",
                          "readMinutes": 13
                      },
                      {
                          "slug": "copy-activity",
                          "label": "Copy Activity",
                          "description": "Source-to-sink data movement, mapping, and performance.",
                          "href": "azure-data-engineering/azure-data-factory/copy-activity/index.html",
                          "external": false,
                          "step": 5,
                          "totalSteps": 28,
                          "phase": "Beginner",
                          "readMinutes": 13
                      },
                      {
                          "slug": "data-flows",
                          "label": "Mapping Data Flows",
                          "description": "Visual ETL transformations without coding.",
                          "href": "azure-data-engineering/azure-data-factory/data-flows/index.html",
                          "external": false,
                          "step": 6,
                          "totalSteps": 28,
                          "phase": "Beginner",
                          "readMinutes": 14
                      },
                      {
                          "slug": "data-flow-transformations",
                          "label": "Data Flow Transformations",
                          "description": "Derived column, aggregate, join, and pivot in data flows.",
                          "href": "azure-data-engineering/azure-data-factory/data-flow-transformations/index.html",
                          "external": false,
                          "step": 7,
                          "totalSteps": 28,
                          "phase": "Beginner",
                          "readMinutes": 14
                      },
                      {
                          "slug": "triggers-schedule",
                          "label": "Schedule Triggers",
                          "description": "Time-based pipeline execution and timezone handling.",
                          "href": "azure-data-engineering/azure-data-factory/triggers-schedule/index.html",
                          "external": false,
                          "step": 8,
                          "totalSteps": 28,
                          "phase": "Beginner",
                          "readMinutes": 14
                      },
                      {
                          "slug": "triggers-tumbling",
                          "label": "Tumbling Window Triggers",
                          "description": "Batch processing windows and dependency chains.",
                          "href": "azure-data-engineering/azure-data-factory/triggers-tumbling/index.html",
                          "external": false,
                          "step": 9,
                          "totalSteps": 28,
                          "phase": "Beginner",
                          "readMinutes": 15
                      },
                      {
                          "slug": "triggers-event",
                          "label": "Event Triggers",
                          "description": "Blob events, custom events, and event-driven pipelines.",
                          "href": "azure-data-engineering/azure-data-factory/triggers-event/index.html",
                          "external": false,
                          "step": 10,
                          "totalSteps": 28,
                          "phase": "Intermediate",
                          "readMinutes": 15
                      },
                      {
                          "slug": "parameters-variables",
                          "label": "Parameters & Variables",
                          "description": "Pipeline parameters, variables, and dynamic expressions.",
                          "href": "azure-data-engineering/azure-data-factory/parameters-variables/index.html",
                          "external": false,
                          "step": 11,
                          "totalSteps": 28,
                          "phase": "Intermediate",
                          "readMinutes": 15
                      },
                      {
                          "slug": "integration-runtime",
                          "label": "Integration Runtime",
                          "description": "Azure IR, self-hosted IR, and Azure-SSIS IR.",
                          "href": "azure-data-engineering/azure-data-factory/integration-runtime/index.html",
                          "external": false,
                          "step": 12,
                          "totalSteps": 28,
                          "phase": "Intermediate",
                          "readMinutes": 16
                      },
                      {
                          "slug": "self-hosted-ir",
                          "label": "Self-Hosted IR",
                          "description": "On-premises connectivity, HA setup, and troubleshooting.",
                          "href": "azure-data-engineering/azure-data-factory/self-hosted-ir/index.html",
                          "external": false,
                          "step": 13,
                          "totalSteps": 28,
                          "phase": "Intermediate",
                          "readMinutes": 16
                      },
                      {
                          "slug": "expressions",
                          "label": "ADF Expressions",
                          "description": "Dynamic content, functions, and pipeline logic.",
                          "href": "azure-data-engineering/azure-data-factory/expressions/index.html",
                          "external": false,
                          "step": 14,
                          "totalSteps": 28,
                          "phase": "Intermediate",
                          "readMinutes": 16
                      },
                      {
                          "slug": "lookup-activity",
                          "label": "Lookup Activity",
                          "description": "Reference data retrieval and foreach loops.",
                          "href": "azure-data-engineering/azure-data-factory/lookup-activity/index.html",
                          "external": false,
                          "step": 15,
                          "totalSteps": 28,
                          "phase": "Intermediate",
                          "readMinutes": 17
                      },
                      {
                          "slug": "foreach-activity",
                          "label": "ForEach Activity",
                          "description": "Parallel iteration over arrays and batch processing.",
                          "href": "azure-data-engineering/azure-data-factory/foreach-activity/index.html",
                          "external": false,
                          "step": 16,
                          "totalSteps": 28,
                          "phase": "Intermediate",
                          "readMinutes": 17
                      },
                      {
                          "slug": "stored-procedure",
                          "label": "Stored Procedure Activity",
                          "description": "Executing SQL stored procedures from ADF.",
                          "href": "azure-data-engineering/azure-data-factory/stored-procedure/index.html",
                          "external": false,
                          "step": 17,
                          "totalSteps": 28,
                          "phase": "Intermediate",
                          "readMinutes": 17
                      },
                      {
                          "slug": "databricks-activity",
                          "label": "Databricks Activity",
                          "description": "Running notebooks and jobs from ADF pipelines.",
                          "href": "azure-data-engineering/azure-data-factory/databricks-activity/index.html",
                          "external": false,
                          "step": 18,
                          "totalSteps": 28,
                          "phase": "Intermediate",
                          "readMinutes": 18
                      },
                      {
                          "slug": "error-handling",
                          "label": "Error Handling",
                          "description": "Try-catch scopes, retry policies, and failure notifications.",
                          "href": "azure-data-engineering/azure-data-factory/error-handling/index.html",
                          "external": false,
                          "step": 19,
                          "totalSteps": 28,
                          "phase": "Advanced",
                          "readMinutes": 18
                      },
                      {
                          "slug": "monitoring-adf",
                          "label": "Monitoring ADF",
                          "description": "Pipeline runs, alerts, and Azure Monitor integration.",
                          "href": "azure-data-engineering/azure-data-factory/monitoring-adf/index.html",
                          "external": false,
                          "step": 20,
                          "totalSteps": 28,
                          "phase": "Advanced",
                          "readMinutes": 18
                      },
                      {
                          "slug": "git-integration",
                          "label": "Git Integration",
                          "description": "Azure DevOps/GitHub integration and CI/CD for ADF.",
                          "href": "azure-data-engineering/azure-data-factory/git-integration/index.html",
                          "external": false,
                          "step": 21,
                          "totalSteps": 28,
                          "phase": "Advanced",
                          "readMinutes": 19
                      },
                      {
                          "slug": "ci-cd-adf",
                          "label": "CI/CD for ADF",
                          "description": "ARM template export, publish branch, and automated deployment.",
                          "href": "azure-data-engineering/azure-data-factory/ci-cd-adf/index.html",
                          "external": false,
                          "step": 22,
                          "totalSteps": 28,
                          "phase": "Advanced",
                          "readMinutes": 19
                      },
                      {
                          "slug": "performance-adf",
                          "label": "ADF Performance",
                          "description": "Parallel copies, DIU tuning, and partition options.",
                          "href": "azure-data-engineering/azure-data-factory/performance-adf/index.html",
                          "external": false,
                          "step": 23,
                          "totalSteps": 28,
                          "phase": "Advanced",
                          "readMinutes": 19
                      },
                      {
                          "slug": "security-adf",
                          "label": "ADF Security",
                          "description": "Managed identity, Key Vault, and private endpoints.",
                          "href": "azure-data-engineering/azure-data-factory/security-adf/index.html",
                          "external": false,
                          "step": 24,
                          "totalSteps": 28,
                          "phase": "Advanced",
                          "readMinutes": 20
                      },
                      {
                          "slug": "cost-adf",
                          "label": "ADF Cost Optimization",
                          "description": "Pipeline efficiency, IR sizing, and activity optimization.",
                          "href": "azure-data-engineering/azure-data-factory/cost-adf/index.html",
                          "external": false,
                          "step": 25,
                          "totalSteps": 28,
                          "phase": "Advanced",
                          "readMinutes": 20
                      },
                      {
                          "slug": "delta-copy",
                          "label": "Copy to Delta Lake",
                          "description": "Landing data in Delta format from ADF copy activity.",
                          "href": "azure-data-engineering/azure-data-factory/delta-copy/index.html",
                          "external": false,
                          "step": 26,
                          "totalSteps": 28,
                          "phase": "Advanced",
                          "readMinutes": 20
                      },
                      {
                          "slug": "metadata-driven",
                          "label": "Metadata-Driven Pipelines",
                          "description": "Dynamic pipelines driven by configuration tables.",
                          "href": "azure-data-engineering/azure-data-factory/metadata-driven/index.html",
                          "external": false,
                          "step": 27,
                          "totalSteps": 28,
                          "phase": "Advanced",
                          "readMinutes": 20
                      },
                      {
                          "slug": "adf-capstone",
                          "label": "ADF Capstone",
                          "description": "Build an end-to-end ingestion pipeline with triggers and monitoring.",
                          "href": "azure-data-engineering/azure-data-factory/adf-capstone/index.html",
                          "external": false,
                          "step": 28,
                          "totalSteps": 28,
                          "phase": "Advanced",
                          "readMinutes": 20
                      }
                  ]
              },
              {
                  "id": "azure-databricks",
                  "label": "Azure Databricks",
                  "href": "azure-data-engineering/azure-databricks/index.html",
                  "stepCount": 21,
                  "pages": [
                      {
                          "slug": "databricks-overview",
                          "label": "Databricks Overview",
                          "description": "Unified analytics platform, workspace, and lakehouse vision.",
                          "href": "azure-data-engineering/azure-databricks/databricks-overview/index.html",
                          "external": false,
                          "step": 1,
                          "totalSteps": 21,
                          "phase": "Beginner",
                          "readMinutes": 12
                      },
                      {
                          "slug": "workspace-setup",
                          "label": "Workspace Setup",
                          "description": "Creating workspaces, admin settings, and user management.",
                          "href": "azure-data-engineering/azure-databricks/workspace-setup/index.html",
                          "external": false,
                          "step": 2,
                          "totalSteps": 21,
                          "phase": "Beginner",
                          "readMinutes": 12
                      },
                      {
                          "slug": "notebooks",
                          "label": "Notebooks",
                          "description": "Cells, magic commands, %sql, %sh, and version control.",
                          "href": "azure-data-engineering/azure-databricks/notebooks/index.html",
                          "external": false,
                          "step": 3,
                          "totalSteps": 21,
                          "phase": "Beginner",
                          "readMinutes": 13
                      },
                      {
                          "slug": "clusters-interactive",
                          "label": "Interactive Clusters",
                          "description": "Cluster modes, runtime versions, and autoscaling.",
                          "href": "azure-data-engineering/azure-databricks/clusters-interactive/index.html",
                          "external": false,
                          "step": 4,
                          "totalSteps": 21,
                          "phase": "Beginner",
                          "readMinutes": 13
                      },
                      {
                          "slug": "clusters-job",
                          "label": "Job Clusters",
                          "description": "Ephemeral clusters for scheduled jobs and cost savings.",
                          "href": "azure-data-engineering/azure-databricks/clusters-job/index.html",
                          "external": false,
                          "step": 5,
                          "totalSteps": 21,
                          "phase": "Beginner",
                          "readMinutes": 13
                      },
                      {
                          "slug": "dbfs",
                          "label": "DBFS",
                          "description": "Databricks File System, mount points, and cloud storage integration.",
                          "href": "azure-data-engineering/azure-databricks/dbfs/index.html",
                          "external": false,
                          "step": 6,
                          "totalSteps": 21,
                          "phase": "Beginner",
                          "readMinutes": 14
                      },
                      {
                          "slug": "delta-tables",
                          "label": "Delta Tables in Databricks",
                          "description": "Creating, reading, and managing Delta tables.",
                          "href": "azure-data-engineering/azure-databricks/delta-tables/index.html",
                          "external": false,
                          "step": 7,
                          "totalSteps": 21,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "sql-warehouse",
                          "label": "SQL Warehouses",
                          "description": "Serverless SQL, BI connectivity, and query performance.",
                          "href": "azure-data-engineering/azure-databricks/sql-warehouse/index.html",
                          "external": false,
                          "step": 8,
                          "totalSteps": 21,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "jobs-scheduling",
                          "label": "Jobs & Scheduling",
                          "description": "Job definitions, task dependencies, and retry policies.",
                          "href": "azure-data-engineering/azure-databricks/jobs-scheduling/index.html",
                          "external": false,
                          "step": 9,
                          "totalSteps": 21,
                          "phase": "Intermediate",
                          "readMinutes": 15
                      },
                      {
                          "slug": "workflows",
                          "label": "Databricks Workflows",
                          "description": "Multi-task jobs, conditional tasks, and orchestration.",
                          "href": "azure-data-engineering/azure-databricks/workflows/index.html",
                          "external": false,
                          "step": 10,
                          "totalSteps": 21,
                          "phase": "Intermediate",
                          "readMinutes": 15
                      },
                      {
                          "slug": "unity-catalog",
                          "label": "Unity Catalog",
                          "description": "Three-level namespace, governance, and access control.",
                          "href": "azure-data-engineering/azure-databricks/unity-catalog/index.html",
                          "external": false,
                          "step": 11,
                          "totalSteps": 21,
                          "phase": "Intermediate",
                          "readMinutes": 15
                      },
                      {
                          "slug": "secrets-scopes",
                          "label": "Secrets Scopes",
                          "description": "Key Vault-backed secrets and credential management.",
                          "href": "azure-data-engineering/azure-databricks/secrets-scopes/index.html",
                          "external": false,
                          "step": 12,
                          "totalSteps": 21,
                          "phase": "Intermediate",
                          "readMinutes": 16
                      },
                      {
                          "slug": "repos",
                          "label": "Databricks Repos",
                          "description": "Git integration, branch checkout, and CI/CD workflows.",
                          "href": "azure-data-engineering/azure-databricks/repos/index.html",
                          "external": false,
                          "step": 13,
                          "totalSteps": 21,
                          "phase": "Intermediate",
                          "readMinutes": 16
                      },
                      {
                          "slug": "mlflow",
                          "label": "MLflow on Databricks",
                          "description": "Experiment tracking, model registry, and deployment.",
                          "href": "azure-data-engineering/azure-databricks/mlflow/index.html",
                          "external": false,
                          "step": 14,
                          "totalSteps": 21,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "feature-store",
                          "label": "Feature Store",
                          "description": "Feature engineering, sharing, and online serving.",
                          "href": "azure-data-engineering/azure-databricks/feature-store/index.html",
                          "external": false,
                          "step": 15,
                          "totalSteps": 21,
                          "phase": "Advanced",
                          "readMinutes": 17
                      },
                      {
                          "slug": "streaming-databricks",
                          "label": "Structured Streaming",
                          "description": "Kafka, Event Hubs, and streaming on Databricks.",
                          "href": "azure-data-engineering/azure-databricks/streaming-databricks/index.html",
                          "external": false,
                          "step": 16,
                          "totalSteps": 21,
                          "phase": "Advanced",
                          "readMinutes": 17
                      },
                      {
                          "slug": "photon-engine",
                          "label": "Photon Engine",
                          "description": "Vectorized query engine and performance benefits.",
                          "href": "azure-data-engineering/azure-databricks/photon-engine/index.html",
                          "external": false,
                          "step": 17,
                          "totalSteps": 21,
                          "phase": "Advanced",
                          "readMinutes": 17
                      },
                      {
                          "slug": "cost-optimization",
                          "label": "Cost Optimization",
                          "description": "Cluster policies, spot instances, and auto-termination.",
                          "href": "azure-data-engineering/azure-databricks/cost-optimization/index.html",
                          "external": false,
                          "step": 18,
                          "totalSteps": 21,
                          "phase": "Advanced",
                          "readMinutes": 18
                      },
                      {
                          "slug": "security-databricks",
                          "label": "Security",
                          "description": "VPC injection, private link, and network isolation.",
                          "href": "azure-data-engineering/azure-databricks/security-databricks/index.html",
                          "external": false,
                          "step": 19,
                          "totalSteps": 21,
                          "phase": "Advanced",
                          "readMinutes": 18
                      },
                      {
                          "slug": "monitoring-databricks",
                          "label": "Monitoring",
                          "description": "Cluster metrics, audit logs, and system tables.",
                          "href": "azure-data-engineering/azure-databricks/monitoring-databricks/index.html",
                          "external": false,
                          "step": 20,
                          "totalSteps": 21,
                          "phase": "Advanced",
                          "readMinutes": 18
                      },
                      {
                          "slug": "databricks-capstone",
                          "label": "Databricks Capstone",
                          "description": "Build a medallion pipeline with notebooks and jobs.",
                          "href": "azure-data-engineering/azure-databricks/databricks-capstone/index.html",
                          "external": false,
                          "step": 21,
                          "totalSteps": 21,
                          "phase": "Advanced",
                          "readMinutes": 19
                      }
                  ]
              },
              {
                  "id": "adls-gen2",
                  "label": "ADLS Gen2",
                  "href": "azure-data-engineering/adls-gen2/index.html",
                  "stepCount": 15,
                  "pages": [
                      {
                          "slug": "adls-overview",
                          "label": "ADLS Gen2 Overview",
                          "description": "Hierarchical namespace, Hadoop compatibility, and use cases.",
                          "href": "azure-data-engineering/adls-gen2/adls-overview/index.html",
                          "external": false,
                          "step": 1,
                          "totalSteps": 15,
                          "phase": "Beginner",
                          "readMinutes": 12
                      },
                      {
                          "slug": "storage-account-setup",
                          "label": "Storage Account Setup",
                          "description": "Creating accounts, redundancy, and performance tiers.",
                          "href": "azure-data-engineering/adls-gen2/storage-account-setup/index.html",
                          "external": false,
                          "step": 2,
                          "totalSteps": 15,
                          "phase": "Beginner",
                          "readMinutes": 12
                      },
                      {
                          "slug": "hierarchical-namespace",
                          "label": "Hierarchical Namespace",
                          "description": "Directories, ACLs, and POSIX-like semantics.",
                          "href": "azure-data-engineering/adls-gen2/hierarchical-namespace/index.html",
                          "external": false,
                          "step": 3,
                          "totalSteps": 15,
                          "phase": "Beginner",
                          "readMinutes": 13
                      },
                      {
                          "slug": "access-control",
                          "label": "Access Control",
                          "description": "RBAC roles, ACLs, and access control best practices.",
                          "href": "azure-data-engineering/adls-gen2/access-control/index.html",
                          "external": false,
                          "step": 4,
                          "totalSteps": 15,
                          "phase": "Beginner",
                          "readMinutes": 13
                      },
                      {
                          "slug": "authentication",
                          "label": "Authentication Methods",
                          "description": "Shared key, SAS, managed identity, and OAuth.",
                          "href": "azure-data-engineering/adls-gen2/authentication/index.html",
                          "external": false,
                          "step": 5,
                          "totalSteps": 15,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "data-lake-design",
                          "label": "Data Lake Design",
                          "description": "Zone layout, folder conventions, and naming standards.",
                          "href": "azure-data-engineering/adls-gen2/data-lake-design/index.html",
                          "external": false,
                          "step": 6,
                          "totalSteps": 15,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "file-formats",
                          "label": "File Formats",
                          "description": "Parquet, Delta, CSV, JSON — choosing the right format.",
                          "href": "azure-data-engineering/adls-gen2/file-formats/index.html",
                          "external": false,
                          "step": 7,
                          "totalSteps": 15,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "partitioning",
                          "label": "Partitioning Strategy",
                          "description": "Date, region, and entity-based partitioning patterns.",
                          "href": "azure-data-engineering/adls-gen2/partitioning/index.html",
                          "external": false,
                          "step": 8,
                          "totalSteps": 15,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "performance-tuning",
                          "label": "Performance Tuning",
                          "description": "Parallel reads, block size, and small file problem.",
                          "href": "azure-data-engineering/adls-gen2/performance-tuning/index.html",
                          "external": false,
                          "step": 9,
                          "totalSteps": 15,
                          "phase": "Intermediate",
                          "readMinutes": 15
                      },
                      {
                          "slug": "lifecycle-management",
                          "label": "Lifecycle Management",
                          "description": "Tiering policies, retention rules, and cost savings.",
                          "href": "azure-data-engineering/adls-gen2/lifecycle-management/index.html",
                          "external": false,
                          "step": 10,
                          "totalSteps": 15,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "private-endpoints",
                          "label": "Private Endpoints",
                          "description": "VNet integration and secure access without public internet.",
                          "href": "azure-data-engineering/adls-gen2/private-endpoints/index.html",
                          "external": false,
                          "step": 11,
                          "totalSteps": 15,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "monitoring-adls",
                          "label": "Monitoring ADLS",
                          "description": "Metrics, diagnostic logs, and storage analytics.",
                          "href": "azure-data-engineering/adls-gen2/monitoring-adls/index.html",
                          "external": false,
                          "step": 12,
                          "totalSteps": 15,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "data-movement",
                          "label": "Data Movement",
                          "description": "AzCopy, ADF copy, and DistCp for large transfers.",
                          "href": "azure-data-engineering/adls-gen2/data-movement/index.html",
                          "external": false,
                          "step": 13,
                          "totalSteps": 15,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "security-adls",
                          "label": "Security Best Practices",
                          "description": "Encryption, immutability, and soft delete.",
                          "href": "azure-data-engineering/adls-gen2/security-adls/index.html",
                          "external": false,
                          "step": 14,
                          "totalSteps": 15,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "adls-capstone",
                          "label": "ADLS Capstone",
                          "description": "Design and implement a secure multi-zone data lake.",
                          "href": "azure-data-engineering/adls-gen2/adls-capstone/index.html",
                          "external": false,
                          "step": 15,
                          "totalSteps": 15,
                          "phase": "Advanced",
                          "readMinutes": 17
                      }
                  ]
              },
              {
                  "id": "azure-sql-database",
                  "label": "Azure SQL Database",
                  "href": "azure-data-engineering/azure-sql-database/index.html",
                  "stepCount": 18,
                  "pages": [
                      {
                          "slug": "azuresql-overview",
                          "label": "Azure SQL Overview",
                          "description": "PaaS SQL options: single database, elastic pool, managed instance.",
                          "href": "azure-data-engineering/azure-sql-database/azuresql-overview/index.html",
                          "external": false,
                          "step": 1,
                          "totalSteps": 18,
                          "phase": "Beginner",
                          "readMinutes": 12
                      },
                      {
                          "slug": "provisioning",
                          "label": "Provisioning",
                          "description": "Creating databases, tiers, and compute/storage sizing.",
                          "href": "azure-data-engineering/azure-sql-database/provisioning/index.html",
                          "external": false,
                          "step": 2,
                          "totalSteps": 18,
                          "phase": "Beginner",
                          "readMinutes": 12
                      },
                      {
                          "slug": "connection",
                          "label": "Connecting to Azure SQL",
                          "description": "Connection strings, firewall rules, and private link.",
                          "href": "azure-data-engineering/azure-sql-database/connection/index.html",
                          "external": false,
                          "step": 3,
                          "totalSteps": 18,
                          "phase": "Beginner",
                          "readMinutes": 13
                      },
                      {
                          "slug": "security-basics",
                          "label": "Security Basics",
                          "description": "Authentication, encryption TDE, and Always Encrypted.",
                          "href": "azure-data-engineering/azure-sql-database/security-basics/index.html",
                          "external": false,
                          "step": 4,
                          "totalSteps": 18,
                          "phase": "Beginner",
                          "readMinutes": 13
                      },
                      {
                          "slug": "firewall-vnet",
                          "label": "Firewall & VNet Rules",
                          "description": "IP rules, service endpoints, and private endpoints.",
                          "href": "azure-data-engineering/azure-sql-database/firewall-vnet/index.html",
                          "external": false,
                          "step": 5,
                          "totalSteps": 18,
                          "phase": "Beginner",
                          "readMinutes": 13
                      },
                      {
                          "slug": "performance-tiers",
                          "label": "Performance Tiers",
                          "description": "DTU vs vCore models, serverless, and hyperscale.",
                          "href": "azure-data-engineering/azure-sql-database/performance-tiers/index.html",
                          "external": false,
                          "step": 6,
                          "totalSteps": 18,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "query-store",
                          "label": "Query Store",
                          "description": "Query performance tracking, plan regression, and tuning.",
                          "href": "azure-data-engineering/azure-sql-database/query-store/index.html",
                          "external": false,
                          "step": 7,
                          "totalSteps": 18,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "indexing-azuresql",
                          "label": "Indexing",
                          "description": "Index design, missing index recommendations, and maintenance.",
                          "href": "azure-data-engineering/azure-sql-database/indexing-azuresql/index.html",
                          "external": false,
                          "step": 8,
                          "totalSteps": 18,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "elastic-pools",
                          "label": "Elastic Pools",
                          "description": "Multi-tenant resource sharing and eDTU management.",
                          "href": "azure-data-engineering/azure-sql-database/elastic-pools/index.html",
                          "external": false,
                          "step": 9,
                          "totalSteps": 18,
                          "phase": "Intermediate",
                          "readMinutes": 15
                      },
                      {
                          "slug": "geo-replication",
                          "label": "Geo-Replication",
                          "description": "Active geo-replication, failover groups, and DR planning.",
                          "href": "azure-data-engineering/azure-sql-database/geo-replication/index.html",
                          "external": false,
                          "step": 10,
                          "totalSteps": 18,
                          "phase": "Intermediate",
                          "readMinutes": 15
                      },
                      {
                          "slug": "backup-restore",
                          "label": "Backup & Restore",
                          "description": "Automated backups, point-in-time restore, and LTR.",
                          "href": "azure-data-engineering/azure-sql-database/backup-restore/index.html",
                          "external": false,
                          "step": 11,
                          "totalSteps": 18,
                          "phase": "Intermediate",
                          "readMinutes": 15
                      },
                      {
                          "slug": "migration-assessment",
                          "label": "Migration Assessment",
                          "description": "DMA, Azure Migrate, and compatibility assessment.",
                          "href": "azure-data-engineering/azure-sql-database/migration-assessment/index.html",
                          "external": false,
                          "step": 12,
                          "totalSteps": 18,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "migration-methods",
                          "label": "Migration Methods",
                          "description": "BACPAC, DMS, transaction replication, and cutover strategies.",
                          "href": "azure-data-engineering/azure-sql-database/migration-methods/index.html",
                          "external": false,
                          "step": 13,
                          "totalSteps": 18,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "serverless",
                          "label": "Serverless SQL",
                          "description": "Auto-pause, auto-scale, and cost-effective dev/test workloads.",
                          "href": "azure-data-engineering/azure-sql-database/serverless/index.html",
                          "external": false,
                          "step": 14,
                          "totalSteps": 18,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "synapse-link",
                          "label": "Synapse Link",
                          "description": "Near real-time analytics from Azure SQL to Synapse.",
                          "href": "azure-data-engineering/azure-sql-database/synapse-link/index.html",
                          "external": false,
                          "step": 15,
                          "totalSteps": 18,
                          "phase": "Advanced",
                          "readMinutes": 17
                      },
                      {
                          "slug": "monitoring-azuresql",
                          "label": "Monitoring",
                          "description": "Metrics, alerts, Intelligent Insights, and diagnostics.",
                          "href": "azure-data-engineering/azure-sql-database/monitoring-azuresql/index.html",
                          "external": false,
                          "step": 16,
                          "totalSteps": 18,
                          "phase": "Advanced",
                          "readMinutes": 17
                      },
                      {
                          "slug": "tuning-azuresql",
                          "label": "Performance Tuning",
                          "description": "Wait statistics, blocking, and query optimization.",
                          "href": "azure-data-engineering/azure-sql-database/tuning-azuresql/index.html",
                          "external": false,
                          "step": 17,
                          "totalSteps": 18,
                          "phase": "Advanced",
                          "readMinutes": 17
                      },
                      {
                          "slug": "azuresql-capstone",
                          "label": "Azure SQL Capstone",
                          "description": "Provision, secure, and tune an Azure SQL database.",
                          "href": "azure-data-engineering/azure-sql-database/azuresql-capstone/index.html",
                          "external": false,
                          "step": 18,
                          "totalSteps": 18,
                          "phase": "Advanced",
                          "readMinutes": 18
                      }
                  ]
              },
              {
                  "id": "synapse-analytics",
                  "label": "Synapse Analytics",
                  "href": "azure-data-engineering/synapse-analytics/index.html",
                  "stepCount": 15,
                  "pages": [
                      {
                          "slug": "synapse-overview",
                          "label": "Synapse Overview",
                          "description": "Unified analytics: SQL, Spark, pipelines, and studio.",
                          "href": "azure-data-engineering/synapse-analytics/synapse-overview/index.html",
                          "external": false,
                          "step": 1,
                          "totalSteps": 15,
                          "phase": "Beginner",
                          "readMinutes": 12
                      },
                      {
                          "slug": "synapse-studio",
                          "label": "Synapse Studio",
                          "description": "Data hub, develop hub, monitor hub, and manage hub.",
                          "href": "azure-data-engineering/synapse-analytics/synapse-studio/index.html",
                          "external": false,
                          "step": 2,
                          "totalSteps": 15,
                          "phase": "Beginner",
                          "readMinutes": 12
                      },
                      {
                          "slug": "dedicated-pools",
                          "label": "Dedicated SQL Pools",
                          "description": "MPP architecture, distributions, and table design.",
                          "href": "azure-data-engineering/synapse-analytics/dedicated-pools/index.html",
                          "external": false,
                          "step": 3,
                          "totalSteps": 15,
                          "phase": "Beginner",
                          "readMinutes": 13
                      },
                      {
                          "slug": "distribution-design",
                          "label": "Distribution Design",
                          "description": "Hash, round-robin, replicated tables, and skew.",
                          "href": "azure-data-engineering/synapse-analytics/distribution-design/index.html",
                          "external": false,
                          "step": 4,
                          "totalSteps": 15,
                          "phase": "Beginner",
                          "readMinutes": 13
                      },
                      {
                          "slug": "indexing-synapse",
                          "label": "Indexing in Synapse",
                          "description": "Clustered columnstore, heap, and index strategies.",
                          "href": "azure-data-engineering/synapse-analytics/indexing-synapse/index.html",
                          "external": false,
                          "step": 5,
                          "totalSteps": 15,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "serverless-sql",
                          "label": "Serverless SQL Pool",
                          "description": "On-demand querying over data lake files with OPENROWSET.",
                          "href": "azure-data-engineering/synapse-analytics/serverless-sql/index.html",
                          "external": false,
                          "step": 6,
                          "totalSteps": 15,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "external-tables",
                          "label": "External Tables",
                          "description": "CETAS, external tables, and lakehouse querying patterns.",
                          "href": "azure-data-engineering/synapse-analytics/external-tables/index.html",
                          "external": false,
                          "step": 7,
                          "totalSteps": 15,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "spark-pools",
                          "label": "Spark Pools",
                          "description": "Synapse Spark, notebooks, and lakehouse processing.",
                          "href": "azure-data-engineering/synapse-analytics/spark-pools/index.html",
                          "external": false,
                          "step": 8,
                          "totalSteps": 15,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "pipelines-synapse",
                          "label": "Synapse Pipelines",
                          "description": "Orchestration, data flows, and integration with ADF concepts.",
                          "href": "azure-data-engineering/synapse-analytics/pipelines-synapse/index.html",
                          "external": false,
                          "step": 9,
                          "totalSteps": 15,
                          "phase": "Intermediate",
                          "readMinutes": 15
                      },
                      {
                          "slug": "linked-services-synapse",
                          "label": "Linked Services",
                          "description": "Connecting to ADLS, SQL, and external data sources.",
                          "href": "azure-data-engineering/synapse-analytics/linked-services-synapse/index.html",
                          "external": false,
                          "step": 10,
                          "totalSteps": 15,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "security-synapse",
                          "label": "Synapse Security",
                          "description": "Workspace access, SQL permissions, and managed identity.",
                          "href": "azure-data-engineering/synapse-analytics/security-synapse/index.html",
                          "external": false,
                          "step": 11,
                          "totalSteps": 15,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "monitoring-synapse",
                          "label": "Monitoring Synapse",
                          "description": "SQL requests, Spark jobs, and pipeline runs.",
                          "href": "azure-data-engineering/synapse-analytics/monitoring-synapse/index.html",
                          "external": false,
                          "step": 12,
                          "totalSteps": 15,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "performance-synapse",
                          "label": "Performance Tuning",
                          "description": "Workload management, resource classes, and caching.",
                          "href": "azure-data-engineering/synapse-analytics/performance-synapse/index.html",
                          "external": false,
                          "step": 13,
                          "totalSteps": 15,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "migration-synapse",
                          "label": "Migration to Synapse",
                          "description": "From SQL DW, on-prem, and other warehouses.",
                          "href": "azure-data-engineering/synapse-analytics/migration-synapse/index.html",
                          "external": false,
                          "step": 14,
                          "totalSteps": 15,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "synapse-capstone",
                          "label": "Synapse Capstone",
                          "description": "Build a lakehouse query pipeline with serverless and dedicated pools.",
                          "href": "azure-data-engineering/synapse-analytics/synapse-capstone/index.html",
                          "external": false,
                          "step": 15,
                          "totalSteps": 15,
                          "phase": "Advanced",
                          "readMinutes": 17
                      }
                  ]
              },
              {
                  "id": "delta-lake",
                  "label": "Delta Lake",
                  "href": "azure-data-engineering/delta-lake/index.html",
                  "stepCount": 17,
                  "pages": [
                      {
                          "slug": "delta-overview",
                          "label": "Delta Lake Overview",
                          "description": "Open format, ACID on data lakes, and the transaction log.",
                          "href": "azure-data-engineering/delta-lake/delta-overview/index.html",
                          "external": false,
                          "step": 1,
                          "totalSteps": 17,
                          "phase": "Beginner",
                          "readMinutes": 12
                      },
                      {
                          "slug": "delta-table-basics",
                          "label": "Delta Table Basics",
                          "description": "Creating, reading, and writing Delta tables in Spark.",
                          "href": "azure-data-engineering/delta-lake/delta-table-basics/index.html",
                          "external": false,
                          "step": 2,
                          "totalSteps": 17,
                          "phase": "Beginner",
                          "readMinutes": 12
                      },
                      {
                          "slug": "transaction-log",
                          "label": "Transaction Log",
                          "description": "JSON commit files, checkpointing, and log compaction.",
                          "href": "azure-data-engineering/delta-lake/transaction-log/index.html",
                          "external": false,
                          "step": 3,
                          "totalSteps": 17,
                          "phase": "Beginner",
                          "readMinutes": 13
                      },
                      {
                          "slug": "acid-transactions",
                          "label": "ACID Transactions",
                          "description": "Atomicity, consistency, isolation, and durability guarantees.",
                          "href": "azure-data-engineering/delta-lake/acid-transactions/index.html",
                          "external": false,
                          "step": 4,
                          "totalSteps": 17,
                          "phase": "Beginner",
                          "readMinutes": 13
                      },
                      {
                          "slug": "schema-enforcement",
                          "label": "Schema Enforcement",
                          "description": "Schema on write, evolution, and mergeSchema option.",
                          "href": "azure-data-engineering/delta-lake/schema-enforcement/index.html",
                          "external": false,
                          "step": 5,
                          "totalSteps": 17,
                          "phase": "Beginner",
                          "readMinutes": 13
                      },
                      {
                          "slug": "time-travel",
                          "label": "Time Travel",
                          "description": "Version history, timestamp queries, and data recovery.",
                          "href": "azure-data-engineering/delta-lake/time-travel/index.html",
                          "external": false,
                          "step": 6,
                          "totalSteps": 17,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "merge-upsert",
                          "label": "MERGE & Upsert",
                          "description": "Delta MERGE syntax, SCD Type 2, and CDC patterns.",
                          "href": "azure-data-engineering/delta-lake/merge-upsert/index.html",
                          "external": false,
                          "step": 7,
                          "totalSteps": 17,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "optimize",
                          "label": "OPTIMIZE",
                          "description": "File compaction, bin-packing, and reducing small files.",
                          "href": "azure-data-engineering/delta-lake/optimize/index.html",
                          "external": false,
                          "step": 8,
                          "totalSteps": 17,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "z-order",
                          "label": "Z-Ordering",
                          "description": "Multi-dimensional clustering for query performance.",
                          "href": "azure-data-engineering/delta-lake/z-order/index.html",
                          "external": false,
                          "step": 9,
                          "totalSteps": 17,
                          "phase": "Intermediate",
                          "readMinutes": 15
                      },
                      {
                          "slug": "vacuum",
                          "label": "VACUUM",
                          "description": "Removing old files, retention policies, and storage cleanup.",
                          "href": "azure-data-engineering/delta-lake/vacuum/index.html",
                          "external": false,
                          "step": 10,
                          "totalSteps": 17,
                          "phase": "Intermediate",
                          "readMinutes": 15
                      },
                      {
                          "slug": "change-data-feed",
                          "label": "Change Data Feed",
                          "description": "CDC streams from Delta tables for downstream consumers.",
                          "href": "azure-data-engineering/delta-lake/change-data-feed/index.html",
                          "external": false,
                          "step": 11,
                          "totalSteps": 17,
                          "phase": "Intermediate",
                          "readMinutes": 15
                      },
                      {
                          "slug": "constraints",
                          "label": "Delta Constraints",
                          "description": "CHECK constraints and data quality enforcement.",
                          "href": "azure-data-engineering/delta-lake/constraints/index.html",
                          "external": false,
                          "step": 12,
                          "totalSteps": 17,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "streaming-delta",
                          "label": "Streaming & Delta",
                          "description": "Structured Streaming sink and source with Delta Lake.",
                          "href": "azure-data-engineering/delta-lake/streaming-delta/index.html",
                          "external": false,
                          "step": 13,
                          "totalSteps": 17,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "unity-catalog-delta",
                          "label": "Unity Catalog & Delta",
                          "description": "Managed tables, sharing, and governance.",
                          "href": "azure-data-engineering/delta-lake/unity-catalog-delta/index.html",
                          "external": false,
                          "step": 14,
                          "totalSteps": 17,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "performance-delta",
                          "label": "Delta Performance",
                          "description": "Statistics, data skipping, and query optimization.",
                          "href": "azure-data-engineering/delta-lake/performance-delta/index.html",
                          "external": false,
                          "step": 15,
                          "totalSteps": 17,
                          "phase": "Advanced",
                          "readMinutes": 17
                      },
                      {
                          "slug": "migration-delta",
                          "label": "Migration to Delta",
                          "description": "Converting Parquet/Hive tables to Delta format.",
                          "href": "azure-data-engineering/delta-lake/migration-delta/index.html",
                          "external": false,
                          "step": 16,
                          "totalSteps": 17,
                          "phase": "Advanced",
                          "readMinutes": 17
                      },
                      {
                          "slug": "delta-capstone",
                          "label": "Delta Lake Capstone",
                          "description": "Implement SCD Type 2 with MERGE and time travel.",
                          "href": "azure-data-engineering/delta-lake/delta-capstone/index.html",
                          "external": false,
                          "step": 17,
                          "totalSteps": 17,
                          "phase": "Advanced",
                          "readMinutes": 17
                      }
                  ]
              },
              {
                  "id": "pyspark-on-databricks",
                  "label": "PySpark on Databricks",
                  "href": "azure-data-engineering/pyspark-on-databricks/index.html",
                  "stepCount": 18,
                  "pages": [
                      {
                          "slug": "intro-databricks-pyspark",
                          "label": "PySpark on Databricks Intro",
                          "description": "Why Databricks for PySpark and workspace advantages.",
                          "href": "azure-data-engineering/pyspark-on-databricks/intro-databricks-pyspark/index.html",
                          "external": false,
                          "step": 1,
                          "totalSteps": 18,
                          "phase": "Beginner",
                          "readMinutes": 12
                      },
                      {
                          "slug": "notebook-pyspark",
                          "label": "PySpark Notebooks",
                          "description": "Running PySpark in Databricks notebooks with best practices.",
                          "href": "azure-data-engineering/pyspark-on-databricks/notebook-pyspark/index.html",
                          "external": false,
                          "step": 2,
                          "totalSteps": 18,
                          "phase": "Beginner",
                          "readMinutes": 12
                      },
                      {
                          "slug": "spark-session-databricks",
                          "label": "SparkSession on Databricks",
                          "description": "Pre-configured sessions, configs, and cluster attachment.",
                          "href": "azure-data-engineering/pyspark-on-databricks/spark-session-databricks/index.html",
                          "external": false,
                          "step": 3,
                          "totalSteps": 18,
                          "phase": "Beginner",
                          "readMinutes": 13
                      },
                      {
                          "slug": "reading-lake",
                          "label": "Reading from Data Lake",
                          "description": "ADLS paths, mount points, and cloud file access.",
                          "href": "azure-data-engineering/pyspark-on-databricks/reading-lake/index.html",
                          "external": false,
                          "step": 4,
                          "totalSteps": 18,
                          "phase": "Beginner",
                          "readMinutes": 13
                      },
                      {
                          "slug": "delta-read-write",
                          "label": "Delta Read & Write",
                          "description": "Reading and writing Delta tables from PySpark.",
                          "href": "azure-data-engineering/pyspark-on-databricks/delta-read-write/index.html",
                          "external": false,
                          "step": 5,
                          "totalSteps": 18,
                          "phase": "Beginner",
                          "readMinutes": 13
                      },
                      {
                          "slug": "transformations-databricks",
                          "label": "Transformations",
                          "description": "DataFrame operations optimized for Databricks runtime.",
                          "href": "azure-data-engineering/pyspark-on-databricks/transformations-databricks/index.html",
                          "external": false,
                          "step": 6,
                          "totalSteps": 18,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "sql-databricks",
                          "label": "Spark SQL on Databricks",
                          "description": "%sql magic, temp views, and SQL warehouses.",
                          "href": "azure-data-engineering/pyspark-on-databricks/sql-databricks/index.html",
                          "external": false,
                          "step": 7,
                          "totalSteps": 18,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "udfs-databricks",
                          "label": "UDFs on Databricks",
                          "description": "Python UDFs, Pandas UDFs, and Vectorized UDFs.",
                          "href": "azure-data-engineering/pyspark-on-databricks/udfs-databricks/index.html",
                          "external": false,
                          "step": 8,
                          "totalSteps": 18,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "joins-databricks",
                          "label": "Joins & Broadcast",
                          "description": "Join optimization with AQE and broadcast hints.",
                          "href": "azure-data-engineering/pyspark-on-databricks/joins-databricks/index.html",
                          "external": false,
                          "step": 9,
                          "totalSteps": 18,
                          "phase": "Intermediate",
                          "readMinutes": 15
                      },
                      {
                          "slug": "partitioning-databricks",
                          "label": "Partitioning",
                          "description": "Partition strategies for ADLS and Delta tables.",
                          "href": "azure-data-engineering/pyspark-on-databricks/partitioning-databricks/index.html",
                          "external": false,
                          "step": 10,
                          "totalSteps": 18,
                          "phase": "Intermediate",
                          "readMinutes": 15
                      },
                      {
                          "slug": "streaming-databricks-pyspark",
                          "label": "Structured Streaming",
                          "description": "Kafka/Event Hubs streaming with PySpark on Databricks.",
                          "href": "azure-data-engineering/pyspark-on-databricks/streaming-databricks-pyspark/index.html",
                          "external": false,
                          "step": 11,
                          "totalSteps": 18,
                          "phase": "Intermediate",
                          "readMinutes": 15
                      },
                      {
                          "slug": "jobs-pyspark",
                          "label": "Jobs with PySpark",
                          "description": "Packaging notebooks as jobs and scheduling.",
                          "href": "azure-data-engineering/pyspark-on-databricks/jobs-pyspark/index.html",
                          "external": false,
                          "step": 12,
                          "totalSteps": 18,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "testing-databricks",
                          "label": "Testing PySpark Jobs",
                          "description": "Unit testing patterns and dbutils in tests.",
                          "href": "azure-data-engineering/pyspark-on-databricks/testing-databricks/index.html",
                          "external": false,
                          "step": 13,
                          "totalSteps": 18,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "performance-databricks",
                          "label": "Performance Tuning",
                          "description": "Spark UI, Photon, and adaptive query execution.",
                          "href": "azure-data-engineering/pyspark-on-databricks/performance-databricks/index.html",
                          "external": false,
                          "step": 14,
                          "totalSteps": 18,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "architecture",
                          "label": "Spark Architecture Deep Dive",
                          "description": "Cluster architecture, scheduling, shuffle, and Catalyst.",
                          "href": "blog/spark-architecture.html",
                          "external": true,
                          "step": 15,
                          "totalSteps": 18,
                          "phase": "Advanced",
                          "readMinutes": 5
                      },
                      {
                          "slug": "monitoring-jobs",
                          "label": "Monitoring Jobs",
                          "description": "Job runs, cluster metrics, and alerting.",
                          "href": "azure-data-engineering/pyspark-on-databricks/monitoring-jobs/index.html",
                          "external": false,
                          "step": 16,
                          "totalSteps": 18,
                          "phase": "Advanced",
                          "readMinutes": 17
                      },
                      {
                          "slug": "best-practices-databricks",
                          "label": "Best Practices",
                          "description": "Notebook organization, repos, and production patterns.",
                          "href": "azure-data-engineering/pyspark-on-databricks/best-practices-databricks/index.html",
                          "external": false,
                          "step": 17,
                          "totalSteps": 18,
                          "phase": "Advanced",
                          "readMinutes": 17
                      },
                      {
                          "slug": "capstone-databricks",
                          "label": "Databricks PySpark Capstone",
                          "description": "End-to-end batch pipeline on Databricks.",
                          "href": "azure-data-engineering/pyspark-on-databricks/capstone-databricks/index.html",
                          "external": false,
                          "step": 18,
                          "totalSteps": 18,
                          "phase": "Advanced",
                          "readMinutes": 18
                      }
                  ]
              },
              {
                  "id": "medallion-architecture",
                  "label": "Medallion Architecture",
                  "href": "azure-data-engineering/medallion-architecture/index.html",
                  "stepCount": 15,
                  "pages": [
                      {
                          "slug": "medallion-overview",
                          "label": "Medallion Overview",
                          "description": "Bronze-Silver-Gold layers and the lakehouse pattern.",
                          "href": "azure-data-engineering/medallion-architecture/medallion-overview/index.html",
                          "external": false,
                          "step": 1,
                          "totalSteps": 15,
                          "phase": "Beginner",
                          "readMinutes": 12
                      },
                      {
                          "slug": "bronze-layer",
                          "label": "Bronze Layer",
                          "description": "Raw ingestion, landing zones, and immutable source copies.",
                          "href": "azure-data-engineering/medallion-architecture/bronze-layer/index.html",
                          "external": false,
                          "step": 2,
                          "totalSteps": 15,
                          "phase": "Beginner",
                          "readMinutes": 12
                      },
                      {
                          "slug": "bronze-patterns",
                          "label": "Bronze Ingestion Patterns",
                          "description": "Full load, incremental, CDC, and streaming ingestion.",
                          "href": "azure-data-engineering/medallion-architecture/bronze-patterns/index.html",
                          "external": false,
                          "step": 3,
                          "totalSteps": 15,
                          "phase": "Beginner",
                          "readMinutes": 13
                      },
                      {
                          "slug": "silver-layer",
                          "label": "Silver Layer",
                          "description": "Cleansed, conformed, deduplicated, and typed data.",
                          "href": "azure-data-engineering/medallion-architecture/silver-layer/index.html",
                          "external": false,
                          "step": 4,
                          "totalSteps": 15,
                          "phase": "Beginner",
                          "readMinutes": 13
                      },
                      {
                          "slug": "silver-transformations",
                          "label": "Silver Transformations",
                          "description": "Data quality rules, standardization, and enrichment.",
                          "href": "azure-data-engineering/medallion-architecture/silver-transformations/index.html",
                          "external": false,
                          "step": 5,
                          "totalSteps": 15,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "gold-layer",
                          "label": "Gold Layer",
                          "description": "Business aggregates, KPIs, and serving-layer tables.",
                          "href": "azure-data-engineering/medallion-architecture/gold-layer/index.html",
                          "external": false,
                          "step": 6,
                          "totalSteps": 15,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "gold-modeling",
                          "label": "Gold Data Modeling",
                          "description": "Star schema, wide tables, and semantic layer design.",
                          "href": "azure-data-engineering/medallion-architecture/gold-modeling/index.html",
                          "external": false,
                          "step": 7,
                          "totalSteps": 15,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "delta-medallion",
                          "label": "Delta Lake in Medallion",
                          "description": "ACID guarantees across layers and MERGE for CDC.",
                          "href": "azure-data-engineering/medallion-architecture/delta-medallion/index.html",
                          "external": false,
                          "step": 8,
                          "totalSteps": 15,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "unity-catalog-medallion",
                          "label": "Unity Catalog Governance",
                          "description": "Catalog structure, permissions, and lineage across layers.",
                          "href": "azure-data-engineering/medallion-architecture/unity-catalog-medallion/index.html",
                          "external": false,
                          "step": 9,
                          "totalSteps": 15,
                          "phase": "Intermediate",
                          "readMinutes": 15
                      },
                      {
                          "slug": "streaming-medallion",
                          "label": "Streaming Medallion",
                          "description": "Real-time bronze-to-gold with Structured Streaming.",
                          "href": "azure-data-engineering/medallion-architecture/streaming-medallion/index.html",
                          "external": false,
                          "step": 10,
                          "totalSteps": 15,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "testing-medallion",
                          "label": "Testing Medallion Pipelines",
                          "description": "Data quality checks, Great Expectations, and assertions.",
                          "href": "azure-data-engineering/medallion-architecture/testing-medallion/index.html",
                          "external": false,
                          "step": 11,
                          "totalSteps": 15,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "monitoring-medallion",
                          "label": "Monitoring & Lineage",
                          "description": "Pipeline observability and data lineage tracking.",
                          "href": "azure-data-engineering/medallion-architecture/monitoring-medallion/index.html",
                          "external": false,
                          "step": 12,
                          "totalSteps": 15,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "migration-medallion",
                          "label": "Migration to Medallion",
                          "description": "Transitioning from legacy warehouses to medallion.",
                          "href": "azure-data-engineering/medallion-architecture/migration-medallion/index.html",
                          "external": false,
                          "step": 13,
                          "totalSteps": 15,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "cost-medallion",
                          "label": "Cost Optimization",
                          "description": "Storage tiering, compaction, and compute efficiency per layer.",
                          "href": "azure-data-engineering/medallion-architecture/cost-medallion/index.html",
                          "external": false,
                          "step": 14,
                          "totalSteps": 15,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "medallion-capstone",
                          "label": "Medallion Capstone",
                          "description": "Implement bronze-silver-gold on Azure Databricks.",
                          "href": "azure-data-engineering/medallion-architecture/medallion-capstone/index.html",
                          "external": false,
                          "step": 15,
                          "totalSteps": 15,
                          "phase": "Advanced",
                          "readMinutes": 17
                      }
                  ]
              },
              {
                  "id": "data-pipeline-projects",
                  "label": "Data Pipeline Projects",
                  "href": "azure-data-engineering/data-pipeline-projects/index.html",
                  "stepCount": 21,
                  "pages": [
                      {
                          "slug": "pipeline-design",
                          "label": "Pipeline Design Principles",
                          "description": "Requirements gathering, SLAs, and architecture decisions.",
                          "href": "azure-data-engineering/data-pipeline-projects/pipeline-design/index.html",
                          "external": false,
                          "step": 1,
                          "totalSteps": 21,
                          "phase": "Beginner",
                          "readMinutes": 12
                      },
                      {
                          "slug": "batch-etl",
                          "label": "Batch ETL Pipeline",
                          "description": "Designing batch ETL with ADF and Databricks.",
                          "href": "azure-data-engineering/data-pipeline-projects/batch-etl/index.html",
                          "external": false,
                          "step": 2,
                          "totalSteps": 21,
                          "phase": "Beginner",
                          "readMinutes": 12
                      },
                      {
                          "slug": "incremental-load",
                          "label": "Incremental Load Patterns",
                          "description": "Watermark columns, change tracking, and MERGE.",
                          "href": "azure-data-engineering/data-pipeline-projects/incremental-load/index.html",
                          "external": false,
                          "step": 3,
                          "totalSteps": 21,
                          "phase": "Beginner",
                          "readMinutes": 13
                      },
                      {
                          "slug": "streaming-pipeline",
                          "label": "Streaming Pipeline",
                          "description": "Real-time ingestion with Event Hubs and Spark Streaming.",
                          "href": "azure-data-engineering/data-pipeline-projects/streaming-pipeline/index.html",
                          "external": false,
                          "step": 4,
                          "totalSteps": 21,
                          "phase": "Beginner",
                          "readMinutes": 13
                      },
                      {
                          "slug": "lambda-architecture",
                          "label": "Lambda Architecture",
                          "description": "Batch and speed layers for hybrid processing.",
                          "href": "azure-data-engineering/data-pipeline-projects/lambda-architecture/index.html",
                          "external": false,
                          "step": 5,
                          "totalSteps": 21,
                          "phase": "Beginner",
                          "readMinutes": 13
                      },
                      {
                          "slug": "kappa-architecture",
                          "label": "Kappa Architecture",
                          "description": "Stream-only processing with replay capability.",
                          "href": "azure-data-engineering/data-pipeline-projects/kappa-architecture/index.html",
                          "external": false,
                          "step": 6,
                          "totalSteps": 21,
                          "phase": "Beginner",
                          "readMinutes": 14
                      },
                      {
                          "slug": "data-quality",
                          "label": "Data Quality Framework",
                          "description": "Validation rules, quarantine zones, and alerting.",
                          "href": "azure-data-engineering/data-pipeline-projects/data-quality/index.html",
                          "external": false,
                          "step": 7,
                          "totalSteps": 21,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "orchestration",
                          "label": "Pipeline Orchestration",
                          "description": "ADF triggers, Databricks workflows, and dependency management.",
                          "href": "azure-data-engineering/data-pipeline-projects/orchestration/index.html",
                          "external": false,
                          "step": 8,
                          "totalSteps": 21,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "error-handling-projects",
                          "label": "Error Handling",
                          "description": "Dead letter queues, retry logic, and failure notifications.",
                          "href": "azure-data-engineering/data-pipeline-projects/error-handling-projects/index.html",
                          "external": false,
                          "step": 9,
                          "totalSteps": 21,
                          "phase": "Intermediate",
                          "readMinutes": 15
                      },
                      {
                          "slug": "monitoring-projects",
                          "label": "Monitoring & Alerting",
                          "description": "Pipeline health dashboards and SLA monitoring.",
                          "href": "azure-data-engineering/data-pipeline-projects/monitoring-projects/index.html",
                          "external": false,
                          "step": 10,
                          "totalSteps": 21,
                          "phase": "Intermediate",
                          "readMinutes": 15
                      },
                      {
                          "slug": "security-projects",
                          "label": "Security in Pipelines",
                          "description": "Managed identity, encryption, and access control.",
                          "href": "azure-data-engineering/data-pipeline-projects/security-projects/index.html",
                          "external": false,
                          "step": 11,
                          "totalSteps": 21,
                          "phase": "Intermediate",
                          "readMinutes": 15
                      },
                      {
                          "slug": "cost-projects",
                          "label": "Cost Management",
                          "description": "Right-sizing, scheduling, and storage optimization.",
                          "href": "azure-data-engineering/data-pipeline-projects/cost-projects/index.html",
                          "external": false,
                          "step": 12,
                          "totalSteps": 21,
                          "phase": "Intermediate",
                          "readMinutes": 16
                      },
                      {
                          "slug": "testing-pipelines",
                          "label": "Testing Pipelines",
                          "description": "Integration tests, data reconciliation, and smoke tests.",
                          "href": "azure-data-engineering/data-pipeline-projects/testing-pipelines/index.html",
                          "external": false,
                          "step": 13,
                          "totalSteps": 21,
                          "phase": "Intermediate",
                          "readMinutes": 16
                      },
                      {
                          "slug": "ci-cd-pipelines",
                          "label": "CI/CD for Pipelines",
                          "description": "Automated deployment of ADF and Databricks artifacts.",
                          "href": "azure-data-engineering/data-pipeline-projects/ci-cd-pipelines/index.html",
                          "external": false,
                          "step": 14,
                          "totalSteps": 21,
                          "phase": "Advanced",
                          "readMinutes": 16
                      },
                      {
                          "slug": "documentation",
                          "label": "Documentation & Lineage",
                          "description": "Data dictionaries, pipeline docs, and lineage tools.",
                          "href": "azure-data-engineering/data-pipeline-projects/documentation/index.html",
                          "external": false,
                          "step": 15,
                          "totalSteps": 21,
                          "phase": "Advanced",
                          "readMinutes": 17
                      },
                      {
                          "slug": "retail-project",
                          "label": "Project: Retail Analytics",
                          "description": "End-to-end retail data pipeline from POS to dashboards.",
                          "href": "azure-data-engineering/data-pipeline-projects/retail-project/index.html",
                          "external": false,
                          "step": 16,
                          "totalSteps": 21,
                          "phase": "Advanced",
                          "readMinutes": 17
                      },
                      {
                          "slug": "iot-project",
                          "label": "Project: IoT Telemetry",
                          "description": "Streaming IoT data ingestion and real-time analytics.",
                          "href": "azure-data-engineering/data-pipeline-projects/iot-project/index.html",
                          "external": false,
                          "step": 17,
                          "totalSteps": 21,
                          "phase": "Advanced",
                          "readMinutes": 17
                      },
                      {
                          "slug": "finance-project",
                          "label": "Project: Financial Reporting",
                          "description": "Regulatory reporting pipeline with audit trails.",
                          "href": "azure-data-engineering/data-pipeline-projects/finance-project/index.html",
                          "external": false,
                          "step": 18,
                          "totalSteps": 21,
                          "phase": "Advanced",
                          "readMinutes": 18
                      },
                      {
                          "slug": "healthcare-project",
                          "label": "Project: Healthcare Data",
                          "description": "HIPAA-aware pipeline with PHI handling patterns.",
                          "href": "azure-data-engineering/data-pipeline-projects/healthcare-project/index.html",
                          "external": false,
                          "step": 19,
                          "totalSteps": 21,
                          "phase": "Advanced",
                          "readMinutes": 18
                      },
                      {
                          "slug": "migration-project",
                          "label": "Project: Legacy Migration",
                          "description": "On-premises to Azure cloud migration pipeline.",
                          "href": "azure-data-engineering/data-pipeline-projects/migration-project/index.html",
                          "external": false,
                          "step": 20,
                          "totalSteps": 21,
                          "phase": "Advanced",
                          "readMinutes": 18
                      },
                      {
                          "slug": "capstone-project",
                          "label": "Capstone: Full Pipeline",
                          "description": "Design, build, and document a production-grade data pipeline.",
                          "href": "azure-data-engineering/data-pipeline-projects/capstone-project/index.html",
                          "external": false,
                          "step": 21,
                          "totalSteps": 21,
                          "phase": "Advanced",
                          "readMinutes": 19
                      }
                  ]
              }
          ]
      },
      {
          "id": "interview-questions",
          "label": "Interview Questions",
          "href": "interview-questions/index.html",
          "topics": [
              {
                  "id": "python-interview-questions",
                  "label": "Python Interview Questions",
                  "href": "interview-questions/python-interview-questions/index.html",
                  "stepCount": 20,
                  "pages": [
                      {
                          "slug": "basics-syntax",
                          "label": "Basics & Syntax",
                          "description": "Core Python syntax, indentation, and fundamental language rules.",
                          "href": "interview-questions/python-interview-questions/basics-syntax/index.html",
                          "external": false,
                          "step": 1,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 12
                      },
                      {
                          "slug": "data-structures",
                          "label": "Data Structures",
                          "description": "Lists, tuples, dicts, sets — operations and time complexity.",
                          "href": "interview-questions/python-interview-questions/data-structures/index.html",
                          "external": false,
                          "step": 2,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 12
                      },
                      {
                          "slug": "strings-interview",
                          "label": "Strings",
                          "description": "String manipulation, formatting, and common string interview questions.",
                          "href": "interview-questions/python-interview-questions/strings-interview/index.html",
                          "external": false,
                          "step": 3,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 12
                      },
                      {
                          "slug": "functions-interview",
                          "label": "Functions",
                          "description": "Parameters, scope, closures, and first-class functions.",
                          "href": "interview-questions/python-interview-questions/functions-interview/index.html",
                          "external": false,
                          "step": 4,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 12
                      },
                      {
                          "slug": "oop-interview",
                          "label": "OOP Concepts",
                          "description": "Classes, inheritance, MRO, and magic methods.",
                          "href": "interview-questions/python-interview-questions/oop-interview/index.html",
                          "external": false,
                          "step": 5,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 13
                      },
                      {
                          "slug": "decorators-interview",
                          "label": "Decorators",
                          "description": "Decorator syntax, use cases, and implementation questions.",
                          "href": "interview-questions/python-interview-questions/decorators-interview/index.html",
                          "external": false,
                          "step": 6,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 13
                      },
                      {
                          "slug": "generators-interview",
                          "label": "Generators & Iterators",
                          "description": "yield, iter protocol, and lazy evaluation.",
                          "href": "interview-questions/python-interview-questions/generators-interview/index.html",
                          "external": false,
                          "step": 7,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "comprehensions-interview",
                          "label": "Comprehensions",
                          "description": "List/dict/set comprehensions and generator expressions.",
                          "href": "interview-questions/python-interview-questions/comprehensions-interview/index.html",
                          "external": false,
                          "step": 8,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "exceptions-interview",
                          "label": "Exception Handling",
                          "description": "try/except patterns and custom exception design.",
                          "href": "interview-questions/python-interview-questions/exceptions-interview/index.html",
                          "external": false,
                          "step": 9,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "modules-interview",
                          "label": "Modules & Packages",
                          "description": "Import system, __name__, and package structure.",
                          "href": "interview-questions/python-interview-questions/modules-interview/index.html",
                          "external": false,
                          "step": 10,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "memory-management",
                          "label": "Memory Management",
                          "description": "Reference counting, garbage collection, and __slots__.",
                          "href": "interview-questions/python-interview-questions/memory-management/index.html",
                          "external": false,
                          "step": 11,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "gIL-threading",
                          "label": "GIL & Threading",
                          "description": "Global Interpreter Lock, threading vs multiprocessing.",
                          "href": "interview-questions/python-interview-questions/gIL-threading/index.html",
                          "external": false,
                          "step": 12,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "multiprocessing",
                          "label": "Multiprocessing",
                          "description": "Process pools, shared memory, and parallel execution.",
                          "href": "interview-questions/python-interview-questions/multiprocessing/index.html",
                          "external": false,
                          "step": 13,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "async-interview",
                          "label": "Async & Concurrency",
                          "description": "asyncio, coroutines, and async interview scenarios.",
                          "href": "interview-questions/python-interview-questions/async-interview/index.html",
                          "external": false,
                          "step": 14,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 14
                      },
                      {
                          "slug": "file-io-interview",
                          "label": "File I/O",
                          "description": "Reading/writing files, context managers, and pathlib.",
                          "href": "interview-questions/python-interview-questions/file-io-interview/index.html",
                          "external": false,
                          "step": 15,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "testing-interview",
                          "label": "Testing",
                          "description": "unittest, pytest, mocking, and test design questions.",
                          "href": "interview-questions/python-interview-questions/testing-interview/index.html",
                          "external": false,
                          "step": 16,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "algorithms-python",
                          "label": "Algorithms in Python",
                          "description": "Sorting, searching, and common algorithm implementations.",
                          "href": "interview-questions/python-interview-questions/algorithms-python/index.html",
                          "external": false,
                          "step": 17,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "coding-patterns",
                          "label": "Coding Patterns",
                          "description": "Two pointers, sliding window, and hash map patterns.",
                          "href": "interview-questions/python-interview-questions/coding-patterns/index.html",
                          "external": false,
                          "step": 18,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "scenario-debugging",
                          "label": "Scenario: Debugging",
                          "description": "Debugging production issues and reading tracebacks.",
                          "href": "interview-questions/python-interview-questions/scenario-debugging/index.html",
                          "external": false,
                          "step": 19,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "scenario-system-design",
                          "label": "Scenario: System Design",
                          "description": "Designing Python services and API backends.",
                          "href": "interview-questions/python-interview-questions/scenario-system-design/index.html",
                          "external": false,
                          "step": 20,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 16
                      }
                  ]
              },
              {
                  "id": "sql-interview-questions",
                  "label": "SQL Interview Questions",
                  "href": "interview-questions/sql-interview-questions/index.html",
                  "stepCount": 20,
                  "pages": [
                      {
                          "slug": "basics-select",
                          "label": "SELECT Fundamentals",
                          "description": "Basic queries, filtering, sorting, and aggregation questions.",
                          "href": "interview-questions/sql-interview-questions/basics-select/index.html",
                          "external": false,
                          "step": 1,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 12
                      },
                      {
                          "slug": "joins-interview",
                          "label": "JOINs",
                          "description": "All join types with practical business scenario questions.",
                          "href": "interview-questions/sql-interview-questions/joins-interview/index.html",
                          "external": false,
                          "step": 2,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 12
                      },
                      {
                          "slug": "subqueries-interview",
                          "label": "Subqueries",
                          "description": "Nested queries, EXISTS, and IN vs JOIN trade-offs.",
                          "href": "interview-questions/sql-interview-questions/subqueries-interview/index.html",
                          "external": false,
                          "step": 3,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 12
                      },
                      {
                          "slug": "aggregates-interview",
                          "label": "Aggregates & GROUP BY",
                          "description": "Aggregation patterns and HAVING clause questions.",
                          "href": "interview-questions/sql-interview-questions/aggregates-interview/index.html",
                          "external": false,
                          "step": 4,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 12
                      },
                      {
                          "slug": "window-interview",
                          "label": "Window Functions",
                          "description": "ROW_NUMBER, RANK, LAG/LEAD interview scenarios.",
                          "href": "interview-questions/sql-interview-questions/window-interview/index.html",
                          "external": false,
                          "step": 5,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 13
                      },
                      {
                          "slug": "ctes-interview",
                          "label": "CTEs & Recursive Queries",
                          "description": "WITH clauses and hierarchical data queries.",
                          "href": "interview-questions/sql-interview-questions/ctes-interview/index.html",
                          "external": false,
                          "step": 6,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 13
                      },
                      {
                          "slug": "indexing-interview",
                          "label": "Indexing",
                          "description": "Index types, when to index, and index interview questions.",
                          "href": "interview-questions/sql-interview-questions/indexing-interview/index.html",
                          "external": false,
                          "step": 7,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "normalization-interview",
                          "label": "Normalization",
                          "description": "Normal forms, denormalization, and schema design.",
                          "href": "interview-questions/sql-interview-questions/normalization-interview/index.html",
                          "external": false,
                          "step": 8,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "transactions-interview",
                          "label": "Transactions & ACID",
                          "description": "Isolation levels, deadlocks, and concurrency.",
                          "href": "interview-questions/sql-interview-questions/transactions-interview/index.html",
                          "external": false,
                          "step": 9,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "performance-interview",
                          "label": "Query Performance",
                          "description": "Execution plans, optimization, and slow query diagnosis.",
                          "href": "interview-questions/sql-interview-questions/performance-interview/index.html",
                          "external": false,
                          "step": 10,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "data-modeling",
                          "label": "Data Modeling",
                          "description": "Star schema, snowflake, and dimensional modeling questions.",
                          "href": "interview-questions/sql-interview-questions/data-modeling/index.html",
                          "external": false,
                          "step": 11,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "analytical-patterns",
                          "label": "Analytical SQL Patterns",
                          "description": "Running totals, top-N, gaps, and pivots.",
                          "href": "interview-questions/sql-interview-questions/analytical-patterns/index.html",
                          "external": false,
                          "step": 12,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "stored-procs-interview",
                          "label": "Stored Procedures",
                          "description": "Procedures vs functions and server-side logic.",
                          "href": "interview-questions/sql-interview-questions/stored-procs-interview/index.html",
                          "external": false,
                          "step": 13,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "scenario-reporting",
                          "label": "Scenario: Reporting",
                          "description": "Building reports and dashboards with SQL.",
                          "href": "interview-questions/sql-interview-questions/scenario-reporting/index.html",
                          "external": false,
                          "step": 14,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 14
                      },
                      {
                          "slug": "scenario-etl",
                          "label": "Scenario: ETL Design",
                          "description": "Staging, transformation, and load pattern questions.",
                          "href": "interview-questions/sql-interview-questions/scenario-etl/index.html",
                          "external": false,
                          "step": 15,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "scenario-debugging",
                          "label": "Scenario: Query Debugging",
                          "description": "Diagnosing incorrect results and data issues.",
                          "href": "interview-questions/sql-interview-questions/scenario-debugging/index.html",
                          "external": false,
                          "step": 16,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "dialect-differences",
                          "label": "SQL Dialect Differences",
                          "description": "T-SQL, PostgreSQL, and ANSI SQL variations.",
                          "href": "interview-questions/sql-interview-questions/dialect-differences/index.html",
                          "external": false,
                          "step": 17,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "advanced-optimization",
                          "label": "Advanced Optimization",
                          "description": "Partitioning, materialized views, and query hints.",
                          "href": "interview-questions/sql-interview-questions/advanced-optimization/index.html",
                          "external": false,
                          "step": 18,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "scenario-analytics",
                          "label": "Scenario: Business Analytics",
                          "description": "Revenue, cohort, and funnel analysis questions.",
                          "href": "interview-questions/sql-interview-questions/scenario-analytics/index.html",
                          "external": false,
                          "step": 19,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "scenario-system-design",
                          "label": "Scenario: Database Design",
                          "description": "Designing schemas for e-commerce and SaaS apps.",
                          "href": "interview-questions/sql-interview-questions/scenario-system-design/index.html",
                          "external": false,
                          "step": 20,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 16
                      }
                  ]
              },
              {
                  "id": "pyspark-interview-questions",
                  "label": "PySpark Interview Questions",
                  "href": "interview-questions/pyspark-interview-questions/index.html",
                  "stepCount": 20,
                  "pages": [
                      {
                          "slug": "spark-fundamentals",
                          "label": "Spark Fundamentals",
                          "description": "RDD vs DataFrame, lazy evaluation, and Spark architecture basics.",
                          "href": "interview-questions/pyspark-interview-questions/spark-fundamentals/index.html",
                          "external": false,
                          "step": 1,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 12
                      },
                      {
                          "slug": "transformations-interview",
                          "label": "Transformations",
                          "description": "map, filter, join transformations and lineage questions.",
                          "href": "interview-questions/pyspark-interview-questions/transformations-interview/index.html",
                          "external": false,
                          "step": 2,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 12
                      },
                      {
                          "slug": "actions-interview",
                          "label": "Actions",
                          "description": "collect, count, save — when actions trigger jobs.",
                          "href": "interview-questions/pyspark-interview-questions/actions-interview/index.html",
                          "external": false,
                          "step": 3,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 12
                      },
                      {
                          "slug": "dataframes-interview",
                          "label": "DataFrames",
                          "description": "Schema, columns, and DataFrame API interview questions.",
                          "href": "interview-questions/pyspark-interview-questions/dataframes-interview/index.html",
                          "external": false,
                          "step": 4,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 12
                      },
                      {
                          "slug": "spark-sql-interview",
                          "label": "Spark SQL",
                          "description": "Temp views, spark.sql(), and Catalyst optimizer questions.",
                          "href": "interview-questions/pyspark-interview-questions/spark-sql-interview/index.html",
                          "external": false,
                          "step": 5,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 13
                      },
                      {
                          "slug": "joins-spark",
                          "label": "Joins in Spark",
                          "description": "Join types, broadcast joins, and sort-merge join mechanics.",
                          "href": "interview-questions/pyspark-interview-questions/joins-spark/index.html",
                          "external": false,
                          "step": 6,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 13
                      },
                      {
                          "slug": "partitioning-interview",
                          "label": "Partitioning",
                          "description": "repartition, coalesce, and partition pruning questions.",
                          "href": "interview-questions/pyspark-interview-questions/partitioning-interview/index.html",
                          "external": false,
                          "step": 7,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "caching-interview",
                          "label": "Caching & Persistence",
                          "description": "cache vs persist, storage levels, and when to cache.",
                          "href": "interview-questions/pyspark-interview-questions/caching-interview/index.html",
                          "external": false,
                          "step": 8,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "udfs-interview",
                          "label": "UDFs",
                          "description": "Python UDFs, Pandas UDFs, and performance implications.",
                          "href": "interview-questions/pyspark-interview-questions/udfs-interview/index.html",
                          "external": false,
                          "step": 9,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "shuffle-interview",
                          "label": "Shuffle Operations",
                          "description": "What causes shuffle, wide vs narrow transformations.",
                          "href": "interview-questions/pyspark-interview-questions/shuffle-interview/index.html",
                          "external": false,
                          "step": 10,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "performance-interview",
                          "label": "Performance Tuning",
                          "description": "Spark UI, stages, skew, and configuration tuning.",
                          "href": "interview-questions/pyspark-interview-questions/performance-interview/index.html",
                          "external": false,
                          "step": 11,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "streaming-interview",
                          "label": "Structured Streaming",
                          "description": "Streaming concepts, watermarks, and output modes.",
                          "href": "interview-questions/pyspark-interview-questions/streaming-interview/index.html",
                          "external": false,
                          "step": 12,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "architecture-interview",
                          "label": "Architecture Deep Dive",
                          "description": "Driver, executors, DAG scheduler, and task execution.",
                          "href": "blog/spark-architecture.html",
                          "external": true,
                          "step": 13,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 5
                      },
                      {
                          "slug": "delta-interview",
                          "label": "Delta Lake Questions",
                          "description": "ACID, time travel, MERGE, and Delta-specific scenarios.",
                          "href": "interview-questions/pyspark-interview-questions/delta-interview/index.html",
                          "external": false,
                          "step": 14,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 14
                      },
                      {
                          "slug": "scenario-large-scale",
                          "label": "Scenario: Large-Scale ETL",
                          "description": "Processing terabytes — design and optimization questions.",
                          "href": "interview-questions/pyspark-interview-questions/scenario-large-scale/index.html",
                          "external": false,
                          "step": 15,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "scenario-debugging",
                          "label": "Scenario: Job Failures",
                          "description": "OOM errors, skew, and troubleshooting Spark jobs.",
                          "href": "interview-questions/pyspark-interview-questions/scenario-debugging/index.html",
                          "external": false,
                          "step": 16,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "scenario-optimization",
                          "label": "Scenario: Optimization",
                          "description": "Reducing shuffle, broadcast decisions, and AQE.",
                          "href": "interview-questions/pyspark-interview-questions/scenario-optimization/index.html",
                          "external": false,
                          "step": 17,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "scenario-streaming",
                          "label": "Scenario: Streaming Pipeline",
                          "description": "Designing real-time processing pipelines.",
                          "href": "interview-questions/pyspark-interview-questions/scenario-streaming/index.html",
                          "external": false,
                          "step": 18,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "databricks-interview",
                          "label": "Databricks-Specific",
                          "description": "Clusters, notebooks, Unity Catalog interview topics.",
                          "href": "interview-questions/pyspark-interview-questions/databricks-interview/index.html",
                          "external": false,
                          "step": 19,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "scenario-system-design",
                          "label": "Scenario: System Design",
                          "description": "Designing a data platform with Spark at scale.",
                          "href": "interview-questions/pyspark-interview-questions/scenario-system-design/index.html",
                          "external": false,
                          "step": 20,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 16
                      }
                  ]
              },
              {
                  "id": "azure-devops-interview-questions",
                  "label": "Azure DevOps Interview Questions",
                  "href": "interview-questions/azure-devops-interview-questions/index.html",
                  "stepCount": 20,
                  "pages": [
                      {
                          "slug": "devops-fundamentals",
                          "label": "DevOps Fundamentals",
                          "description": "CI/CD concepts, DevOps culture, and Azure DevOps services overview.",
                          "href": "interview-questions/azure-devops-interview-questions/devops-fundamentals/index.html",
                          "external": false,
                          "step": 1,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 12
                      },
                      {
                          "slug": "git-interview",
                          "label": "Git & Version Control",
                          "description": "Branching, merging, rebasing, and Git workflow questions.",
                          "href": "interview-questions/azure-devops-interview-questions/git-interview/index.html",
                          "external": false,
                          "step": 2,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 12
                      },
                      {
                          "slug": "azure-repos-interview",
                          "label": "Azure Repos",
                          "description": "PR workflows, branch policies, and code review practices.",
                          "href": "interview-questions/azure-devops-interview-questions/azure-repos-interview/index.html",
                          "external": false,
                          "step": 3,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 12
                      },
                      {
                          "slug": "yaml-pipelines-interview",
                          "label": "YAML Pipelines",
                          "description": "Pipeline structure, triggers, and YAML syntax questions.",
                          "href": "interview-questions/azure-devops-interview-questions/yaml-pipelines-interview/index.html",
                          "external": false,
                          "step": 4,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 12
                      },
                      {
                          "slug": "ci-interview",
                          "label": "Continuous Integration",
                          "description": "Build automation, test gates, and CI best practices.",
                          "href": "interview-questions/azure-devops-interview-questions/ci-interview/index.html",
                          "external": false,
                          "step": 5,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 13
                      },
                      {
                          "slug": "cd-interview",
                          "label": "Continuous Deployment",
                          "description": "Release strategies, environments, and deployment gates.",
                          "href": "interview-questions/azure-devops-interview-questions/cd-interview/index.html",
                          "external": false,
                          "step": 6,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 13
                      },
                      {
                          "slug": "docker-interview",
                          "label": "Docker Questions",
                          "description": "Images, containers, Dockerfile, and container interview topics.",
                          "href": "interview-questions/azure-devops-interview-questions/docker-interview/index.html",
                          "external": false,
                          "step": 7,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "kubernetes-interview",
                          "label": "Kubernetes Questions",
                          "description": "Pods, services, deployments, and K8s architecture.",
                          "href": "interview-questions/azure-devops-interview-questions/kubernetes-interview/index.html",
                          "external": false,
                          "step": 8,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "aks-interview",
                          "label": "AKS Questions",
                          "description": "Managed Kubernetes, scaling, and Azure-specific K8s topics.",
                          "href": "interview-questions/azure-devops-interview-questions/aks-interview/index.html",
                          "external": false,
                          "step": 9,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "terraform-interview",
                          "label": "Terraform Questions",
                          "description": "State management, modules, and IaC interview scenarios.",
                          "href": "interview-questions/azure-devops-interview-questions/terraform-interview/index.html",
                          "external": false,
                          "step": 10,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "monitoring-interview",
                          "label": "Monitoring & Alerting",
                          "description": "Azure Monitor, KQL, and observability questions.",
                          "href": "interview-questions/azure-devops-interview-questions/monitoring-interview/index.html",
                          "external": false,
                          "step": 11,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "security-interview",
                          "label": "Security & DevSecOps",
                          "description": "RBAC, Key Vault, SAST/DAST, and pipeline security.",
                          "href": "interview-questions/azure-devops-interview-questions/security-interview/index.html",
                          "external": false,
                          "step": 12,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "scenario-incident",
                          "label": "Scenario: Incident Response",
                          "description": "Production outage response and rollback procedures.",
                          "href": "interview-questions/azure-devops-interview-questions/scenario-incident/index.html",
                          "external": false,
                          "step": 13,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "scenario-pipeline-design",
                          "label": "Scenario: Pipeline Design",
                          "description": "Designing CI/CD for microservices architecture.",
                          "href": "interview-questions/azure-devops-interview-questions/scenario-pipeline-design/index.html",
                          "external": false,
                          "step": 14,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 14
                      },
                      {
                          "slug": "scenario-migration",
                          "label": "Scenario: Cloud Migration",
                          "description": "Migrating on-prem workloads to Azure with DevOps.",
                          "href": "interview-questions/azure-devops-interview-questions/scenario-migration/index.html",
                          "external": false,
                          "step": 15,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "scenario-branching",
                          "label": "Scenario: Branching Strategy",
                          "description": "Choosing and implementing branching models.",
                          "href": "interview-questions/azure-devops-interview-questions/scenario-branching/index.html",
                          "external": false,
                          "step": 16,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "scenario-iac",
                          "label": "Scenario: Infrastructure as Code",
                          "description": "Terraform/Bicep deployment pipeline design.",
                          "href": "interview-questions/azure-devops-interview-questions/scenario-iac/index.html",
                          "external": false,
                          "step": 17,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "scenario-compliance",
                          "label": "Scenario: Compliance",
                          "description": "Audit trails, approval gates, and regulatory requirements.",
                          "href": "interview-questions/azure-devops-interview-questions/scenario-compliance/index.html",
                          "external": false,
                          "step": 18,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "scenario-cost",
                          "label": "Scenario: Cost Optimization",
                          "description": "Right-sizing agents, caching, and pipeline efficiency.",
                          "href": "interview-questions/azure-devops-interview-questions/scenario-cost/index.html",
                          "external": false,
                          "step": 19,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "scenario-leadership",
                          "label": "Scenario: DevOps Leadership",
                          "description": "Team transformation and DevOps maturity assessment.",
                          "href": "interview-questions/azure-devops-interview-questions/scenario-leadership/index.html",
                          "external": false,
                          "step": 20,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 16
                      }
                  ]
              },
              {
                  "id": "azure-data-engineering-interview-questions",
                  "label": "Azure Data Engineering Interview Questions",
                  "href": "interview-questions/azure-data-engineering-interview-questions/index.html",
                  "stepCount": 20,
                  "pages": [
                      {
                          "slug": "de-fundamentals",
                          "label": "Data Engineering Fundamentals",
                          "description": "ETL vs ELT, batch vs streaming, and data pipeline concepts.",
                          "href": "interview-questions/azure-data-engineering-interview-questions/de-fundamentals/index.html",
                          "external": false,
                          "step": 1,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 12
                      },
                      {
                          "slug": "adf-interview",
                          "label": "Azure Data Factory",
                          "description": "Pipelines, linked services, triggers, and ADF interview questions.",
                          "href": "interview-questions/azure-data-engineering-interview-questions/adf-interview/index.html",
                          "external": false,
                          "step": 2,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 12
                      },
                      {
                          "slug": "databricks-interview",
                          "label": "Azure Databricks",
                          "description": "Workspace, clusters, notebooks, and Databricks scenarios.",
                          "href": "interview-questions/azure-data-engineering-interview-questions/databricks-interview/index.html",
                          "external": false,
                          "step": 3,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 12
                      },
                      {
                          "slug": "adls-interview",
                          "label": "ADLS Gen2",
                          "description": "Data lake design, ACLs, and storage interview questions.",
                          "href": "interview-questions/azure-data-engineering-interview-questions/adls-interview/index.html",
                          "external": false,
                          "step": 4,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 12
                      },
                      {
                          "slug": "delta-lake-interview",
                          "label": "Delta Lake",
                          "description": "ACID, time travel, MERGE, and Delta-specific interview topics.",
                          "href": "interview-questions/azure-data-engineering-interview-questions/delta-lake-interview/index.html",
                          "external": false,
                          "step": 5,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 13
                      },
                      {
                          "slug": "synapse-interview",
                          "label": "Synapse Analytics",
                          "description": "Dedicated vs serverless pools and Synapse architecture.",
                          "href": "interview-questions/azure-data-engineering-interview-questions/synapse-interview/index.html",
                          "external": false,
                          "step": 6,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 13
                      },
                      {
                          "slug": "medallion-interview",
                          "label": "Medallion Architecture",
                          "description": "Bronze-silver-gold layers and implementation questions.",
                          "href": "interview-questions/azure-data-engineering-interview-questions/medallion-interview/index.html",
                          "external": false,
                          "step": 7,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "pyspark-de-interview",
                          "label": "PySpark for DE",
                          "description": "DataFrame operations, joins, and Spark performance for DE roles.",
                          "href": "interview-questions/azure-data-engineering-interview-questions/pyspark-de-interview/index.html",
                          "external": false,
                          "step": 8,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "sql-de-interview",
                          "label": "SQL for Data Engineering",
                          "description": "Analytical SQL, window functions, and warehouse queries.",
                          "href": "interview-questions/azure-data-engineering-interview-questions/sql-de-interview/index.html",
                          "external": false,
                          "step": 9,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "streaming-de-interview",
                          "label": "Streaming Pipelines",
                          "description": "Event Hubs, Kafka, Structured Streaming interview topics.",
                          "href": "interview-questions/azure-data-engineering-interview-questions/streaming-de-interview/index.html",
                          "external": false,
                          "step": 10,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "data-modeling-interview",
                          "label": "Data Modeling",
                          "description": "Dimensional modeling, star schema, and lakehouse design.",
                          "href": "interview-questions/azure-data-engineering-interview-questions/data-modeling-interview/index.html",
                          "external": false,
                          "step": 11,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "data-quality-interview",
                          "label": "Data Quality",
                          "description": "Validation, monitoring, and data quality framework questions.",
                          "href": "interview-questions/azure-data-engineering-interview-questions/data-quality-interview/index.html",
                          "external": false,
                          "step": 12,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "scenario-etl-design",
                          "label": "Scenario: ETL Design",
                          "description": "Design end-to-end batch pipeline for business requirements.",
                          "href": "interview-questions/azure-data-engineering-interview-questions/scenario-etl-design/index.html",
                          "external": false,
                          "step": 13,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "scenario-streaming",
                          "label": "Scenario: Real-Time Pipeline",
                          "description": "Design streaming architecture for IoT or clickstream data.",
                          "href": "interview-questions/azure-data-engineering-interview-questions/scenario-streaming/index.html",
                          "external": false,
                          "step": 14,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 14
                      },
                      {
                          "slug": "scenario-migration-de",
                          "label": "Scenario: Migration",
                          "description": "Migrating on-prem data warehouse to Azure lakehouse.",
                          "href": "interview-questions/azure-data-engineering-interview-questions/scenario-migration-de/index.html",
                          "external": false,
                          "step": 15,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "scenario-performance",
                          "label": "Scenario: Performance",
                          "description": "Optimizing slow pipelines and reducing costs.",
                          "href": "interview-questions/azure-data-engineering-interview-questions/scenario-performance/index.html",
                          "external": false,
                          "step": 16,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "scenario-governance",
                          "label": "Scenario: Data Governance",
                          "description": "Unity Catalog, lineage, and compliance requirements.",
                          "href": "interview-questions/azure-data-engineering-interview-questions/scenario-governance/index.html",
                          "external": false,
                          "step": 17,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "scenario-scd",
                          "label": "Scenario: SCD Implementation",
                          "description": "Slowly changing dimensions with Delta MERGE.",
                          "href": "interview-questions/azure-data-engineering-interview-questions/scenario-scd/index.html",
                          "external": false,
                          "step": 18,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "scenario-incident-de",
                          "label": "Scenario: Pipeline Failure",
                          "description": "Debugging failed pipelines and data reconciliation.",
                          "href": "interview-questions/azure-data-engineering-interview-questions/scenario-incident-de/index.html",
                          "external": false,
                          "step": 19,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "scenario-system-design-de",
                          "label": "Scenario: Platform Design",
                          "description": "Designing enterprise data platform on Azure.",
                          "href": "interview-questions/azure-data-engineering-interview-questions/scenario-system-design-de/index.html",
                          "external": false,
                          "step": 20,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 16
                      }
                  ]
              },
              {
                  "id": "ai-ml-interview-questions",
                  "label": "AI / ML Interview Questions",
                  "href": "interview-questions/ai-ml-interview-questions/index.html",
                  "stepCount": 20,
                  "pages": [
                      {
                          "slug": "ml-fundamentals-interview",
                          "label": "ML Fundamentals",
                          "description": "Supervised vs unsupervised, bias-variance, and ML lifecycle.",
                          "href": "interview-questions/ai-ml-interview-questions/ml-fundamentals-interview/index.html",
                          "external": false,
                          "step": 1,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 12
                      },
                      {
                          "slug": "algorithms-interview",
                          "label": "Algorithms",
                          "description": "When to use regression, trees, SVM, and ensemble methods.",
                          "href": "interview-questions/ai-ml-interview-questions/algorithms-interview/index.html",
                          "external": false,
                          "step": 2,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 12
                      },
                      {
                          "slug": "evaluation-interview",
                          "label": "Model Evaluation",
                          "description": "Metrics, cross-validation, and model selection questions.",
                          "href": "interview-questions/ai-ml-interview-questions/evaluation-interview/index.html",
                          "external": false,
                          "step": 3,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 12
                      },
                      {
                          "slug": "feature-engineering-interview",
                          "label": "Feature Engineering",
                          "description": "Encoding, scaling, selection, and pipeline design.",
                          "href": "interview-questions/ai-ml-interview-questions/feature-engineering-interview/index.html",
                          "external": false,
                          "step": 4,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 12
                      },
                      {
                          "slug": "deep-learning-interview",
                          "label": "Deep Learning Basics",
                          "description": "Neural networks, backprop, and activation functions.",
                          "href": "interview-questions/ai-ml-interview-questions/deep-learning-interview/index.html",
                          "external": false,
                          "step": 5,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 13
                      },
                      {
                          "slug": "cnn-interview",
                          "label": "CNN Questions",
                          "description": "Convolution, pooling, and image classification interview topics.",
                          "href": "interview-questions/ai-ml-interview-questions/cnn-interview/index.html",
                          "external": false,
                          "step": 6,
                          "totalSteps": 20,
                          "phase": "Beginner",
                          "readMinutes": 13
                      },
                      {
                          "slug": "rnn-interview",
                          "label": "RNN & LSTM",
                          "description": "Sequence models, vanishing gradients, and LSTM gates.",
                          "href": "interview-questions/ai-ml-interview-questions/rnn-interview/index.html",
                          "external": false,
                          "step": 7,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "transformers-interview",
                          "label": "Transformers & LLMs",
                          "description": "Attention, BERT, GPT, and transformer architecture questions.",
                          "href": "interview-questions/ai-ml-interview-questions/transformers-interview/index.html",
                          "external": false,
                          "step": 8,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "nlp-interview",
                          "label": "NLP Questions",
                          "description": "Tokenization, embeddings, and text classification scenarios.",
                          "href": "interview-questions/ai-ml-interview-questions/nlp-interview/index.html",
                          "external": false,
                          "step": 9,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 13
                      },
                      {
                          "slug": "genai-interview",
                          "label": "Generative AI",
                          "description": "Prompt engineering, RAG, fine-tuning, and LLM deployment.",
                          "href": "interview-questions/ai-ml-interview-questions/genai-interview/index.html",
                          "external": false,
                          "step": 10,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "mlops-interview",
                          "label": "MLOps",
                          "description": "Model versioning, deployment, monitoring, and experiment tracking.",
                          "href": "interview-questions/ai-ml-interview-questions/mlops-interview/index.html",
                          "external": false,
                          "step": 11,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "statistics-interview",
                          "label": "Statistics for ML",
                          "description": "Distributions, hypothesis testing, and A/B test design.",
                          "href": "interview-questions/ai-ml-interview-questions/statistics-interview/index.html",
                          "external": false,
                          "step": 12,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "scenario-classification",
                          "label": "Scenario: Classification",
                          "description": "Design a fraud detection or churn prediction system.",
                          "href": "interview-questions/ai-ml-interview-questions/scenario-classification/index.html",
                          "external": false,
                          "step": 13,
                          "totalSteps": 20,
                          "phase": "Intermediate",
                          "readMinutes": 14
                      },
                      {
                          "slug": "scenario-nlp",
                          "label": "Scenario: NLP System",
                          "description": "Build a sentiment analysis or chatbot system design.",
                          "href": "interview-questions/ai-ml-interview-questions/scenario-nlp/index.html",
                          "external": false,
                          "step": 14,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 14
                      },
                      {
                          "slug": "scenario-recommendation",
                          "label": "Scenario: Recommendations",
                          "description": "Design a recommendation engine architecture.",
                          "href": "interview-questions/ai-ml-interview-questions/scenario-recommendation/index.html",
                          "external": false,
                          "step": 15,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "scenario-llm",
                          "label": "Scenario: LLM Application",
                          "description": "Design a RAG system or fine-tuned assistant.",
                          "href": "interview-questions/ai-ml-interview-questions/scenario-llm/index.html",
                          "external": false,
                          "step": 16,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "scenario-evaluation",
                          "label": "Scenario: Model Evaluation",
                          "description": "Choosing metrics and handling imbalanced data.",
                          "href": "interview-questions/ai-ml-interview-questions/scenario-evaluation/index.html",
                          "external": false,
                          "step": 17,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "scenario-production",
                          "label": "Scenario: Production ML",
                          "description": "Deploying models at scale with monitoring.",
                          "href": "interview-questions/ai-ml-interview-questions/scenario-production/index.html",
                          "external": false,
                          "step": 18,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "scenario-ethics",
                          "label": "Scenario: AI Ethics",
                          "description": "Bias, fairness, and responsible AI interview questions.",
                          "href": "interview-questions/ai-ml-interview-questions/scenario-ethics/index.html",
                          "external": false,
                          "step": 19,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 15
                      },
                      {
                          "slug": "scenario-system-design-ml",
                          "label": "Scenario: ML System Design",
                          "description": "End-to-end ML platform architecture design.",
                          "href": "interview-questions/ai-ml-interview-questions/scenario-system-design-ml/index.html",
                          "external": false,
                          "step": 20,
                          "totalSteps": 20,
                          "phase": "Advanced",
                          "readMinutes": 16
                      }
                  ]
              }
          ]
      }
  ];

  const SITE_STATS =   {
      "total": 823,
      "byCategory": {
          "programming": 99,
          "ai": 227,
          "azure-devops": 194,
          "azure-data-engineering": 177,
          "interview-questions": 126
      },
      "byTopic": {
          "programming/python": 35,
          "programming/sql": 30,
          "programming/pyspark": 31,
          "ai/data-science": 25,
          "ai/machine-learning": 32,
          "ai/artificial-intelligence": 20,
          "ai/nlp": 30,
          "ai/rnn": 20,
          "ai/ann": 22,
          "ai/cnn": 20,
          "ai/generative-ai": 25,
          "ai/agentic-ai": 24,
          "azure-devops/azure-fundamentals": 20,
          "azure-devops/azure-repos": 15,
          "azure-devops/azure-pipelines": 21,
          "azure-devops/ci-cd": 20,
          "azure-devops/docker": 18,
          "azure-devops/kubernetes": 21,
          "azure-devops/aks": 16,
          "azure-devops/terraform": 20,
          "azure-devops/monitoring": 17,
          "azure-devops/security": 16,
          "azure-data-engineering/azure-data-factory": 28,
          "azure-data-engineering/azure-databricks": 21,
          "azure-data-engineering/adls-gen2": 15,
          "azure-data-engineering/azure-sql-database": 18,
          "azure-data-engineering/synapse-analytics": 15,
          "azure-data-engineering/delta-lake": 17,
          "azure-data-engineering/pyspark-on-databricks": 18,
          "azure-data-engineering/medallion-architecture": 15,
          "azure-data-engineering/data-pipeline-projects": 21,
          "interview-questions/python-interview-questions": 20,
          "interview-questions/sql-interview-questions": 20,
          "interview-questions/pyspark-interview-questions": 20,
          "interview-questions/azure-devops-interview-questions": 20,
          "interview-questions/azure-data-engineering-interview-questions": 20,
          "interview-questions/ai-ml-interview-questions": 20
      }
  };
  /* GENERATED_NAV_END */

  const POSTS = [
    {
      title: 'Apache Spark Architecture & 30GB Processing',
      href: 'blog/spark-architecture.html',
      date: '2026-06-01',
      tags: ['spark', 'pyspark', 'distributed'],
      featured: true,
      category: 'programming',
      excerpt: 'Visual guide to how Spark splits, schedules, and processes massive datasets with live animations.',
    },
  ];

  /** Resolve relative path from current page depth */
  function basePath() {
    const path = window.location.pathname.replace(/\\/g, '/');
    const parts = path.split('/').filter(Boolean);
    const file = parts[parts.length - 1] || '';
    const isFile = file.includes('.');
    const depth = isFile ? parts.length - 1 : parts.length;
    if (depth <= 0) return './';
    return '../'.repeat(depth);
  }

  function resolve(href) {
    if (href.startsWith('http') || href.startsWith('#')) return href;
    return basePath() + href;
  }

  function getNavCategory(id) {
    return NAV.find((c) => c.id === id);
  }

  function getTreeCategory(id) {
    return PAGE_TREE.find((c) => c.id === id);
  }

  function getTreeTopic(categoryId, topicId) {
    const cat = getTreeCategory(categoryId);
    return cat ? cat.topics.find((t) => t.id === topicId) : null;
  }

  function categoryHref(categoryId) {
    const cat = getNavCategory(categoryId);
    return cat?.href || `${categoryId}/index.html`;
  }

  function isCategoryLanding(categoryId) {
    const path = normalizePath();
    const base = `/${categoryId}/`;
    return path.endsWith(base) || path.endsWith(`${base}index.html`);
  }

  function detectNavigationContext() {
    const ctx = currentContext();

    if (ctx.page === 'spark') {
      return { level: 'topic', category: 'programming', submodule: 'pyspark', topic: 'architecture', page: 'spark' };
    }
    if (ctx.page === 'home') return { level: 'home' };
    if (ctx.page === 'blog') return { level: 'blog' };
    if (ctx.page === 'about') return { level: 'about' };

    if (ctx.category) {
      const onCategoryLanding = isCategoryLanding(ctx.category) && !ctx.section;
      if (onCategoryLanding) {
        return { level: 'category', category: ctx.category, submodule: null, topic: null };
      }
      if (ctx.section) {
        const level = ctx.topic && ctx.topic !== 'index' ? 'topic' : 'submodule';
        return { level, category: ctx.category, submodule: ctx.section, topic: ctx.topic };
      }
    }

    return { level: 'other', ...ctx };
  }

  function normalizePath() {
    return window.location.pathname.replace(/\\/g, '/').toLowerCase();
  }

  function pathMatchesHref(href) {
    const path = normalizePath();
    const target = href.toLowerCase();
    return path.endsWith('/' + target) || path.endsWith('/' + target.replace('/index.html', '/'));
  }

  function currentContext() {
    const page = document.documentElement.dataset.page;
    const category = document.documentElement.dataset.category;
    const section = document.documentElement.dataset.section;
    const topic = document.documentElement.dataset.topic;
    const path = normalizePath();

    if (path.includes('spark-architecture')) {
      return { page: 'spark', category: 'programming', section: 'pyspark', topic: 'architecture' };
    }

    if (category) {
      return {
        page: page || category,
        category,
        section: section || null,
        topic: topic || null,
      };
    }

    for (const cat of NAV) {
      if (path.includes(`/${cat.id}/`)) {
        const child = cat.children.find((c) => path.includes(`/${c.id}/`));
        let slug = null;
        if (child) {
          const treeTopic = getTreeTopic(cat.id, child.id);
          if (treeTopic) {
            const match = treeTopic.pages.find((p) => pathMatchesHref(p.href));
            if (match) slug = match.slug;
          }
        }
        return { page: cat.id, category: cat.id, section: child ? child.id : null, topic: slug };
      }
    }

    if (page === 'home' || (path.endsWith('/') || path.endsWith('/index.html')) && !NAV.some((c) => path.includes(`/${c.id}/`))) {
      const isRoot = !NAV.some((c) => path.includes(`/${c.id}/`)) && !path.includes('/blog/') && !path.includes('/about/');
      if (isRoot) return { page: 'home', category: null, section: null, topic: null };
    }

    if (path.includes('/blog/')) return { page: 'blog', category: 'programming', section: 'pyspark', topic: 'architecture' };
    if (path.includes('/about/')) return { page: 'about', category: null, section: null, topic: null };

    return { page: page || 'home', category: category || null, section: section || null, topic: topic || null };
  }

  function isHrefActive(href) {
    return pathMatchesHref(href);
  }

  function isChildActive(category, child) {
    const ctx = currentContext();
    if (ctx.page === 'spark' && child.href && child.href.includes('spark-architecture')) return true;
    if (ctx.category === category.id && ctx.section === child.id) return true;
    if (child.href && isHrefActive(child.href)) return true;
    return false;
  }

  function isTopicPageActive(topic, page) {
    const ctx = currentContext();
    if (ctx.section !== topic.id) return false;
    if (page.slug === 'index') return !ctx.topic || ctx.topic === 'index';
    return ctx.topic === page.slug || isHrefActive(page.href);
  }

  function isCategoryActive(category) {
    const ctx = currentContext();
    const navCtx = detectNavigationContext();
    if (navCtx.level === 'category' && navCtx.category === category.id) return true;
    if (ctx.category === category.id) return true;
    if (ctx.page === 'spark' && category.id === 'programming') return true;
    return false;
  }

  function renderDropdownPanel(category) {
    const cols = category.mega ? ' mega-cols' : '';
    const navCtx = detectNavigationContext();
    const catActive = navCtx.level === 'category' && navCtx.category === category.id ? ' active' : '';
    const header = `<li class="nav-dropdown-header"><a href="${resolve(categoryHref(category.id))}" class="${catActive.trim()}">All ${category.label}</a></li>`;
    const items = category.children.map((child) => {
      const active = isChildActive(category, child) ? ' active' : '';
      return `<li><a href="${resolve(child.href)}" class="${active.trim()}">${child.label}</a></li>`;
    }).join('');

    return `
      <div class="nav-dropdown${cols}" role="menu" aria-label="${category.label} submenu">
        <ul class="nav-dropdown-list">${header}${items}</ul>
      </div>`;
  }

  function renderTopNav() {
    const items = NAV.map((category) => {
      const active = isCategoryActive(category) ? ' active' : '';
      const wide = category.mega ? ' nav-item-mega' : '';
      return `
        <li class="nav-item${wide}${active ? ' active' : ''}">
          <div class="nav-item-row">
            <a href="${resolve(categoryHref(category.id))}" class="nav-category-link${active}">${category.label}</a>
            <button type="button" class="nav-chevron-btn" aria-expanded="false" aria-haspopup="true" aria-label="Open ${category.label} menu">
              <span class="nav-chevron" aria-hidden="true">▾</span>
            </button>
          </div>
          ${renderDropdownPanel(category)}
        </li>`;
    }).join('');

    return `
      <header class="site-header">
        <div class="topbar">
          <a href="${resolve('index.html')}" class="site-logo">
            <span class="logo-mark">&lt;/&gt;</span>
            ${SITE.name}
          </a>
          <nav aria-label="Main navigation">
            <ul class="topnav">${items}</ul>
          </nav>
          <button class="menu-toggle" id="menu-toggle" aria-label="Open menu" aria-expanded="false">☰</button>
        </div>
      </header>`;
  }

  function groupPagesByPhase(pages) {
    const groups = { Beginner: [], Intermediate: [], Advanced: [] };
    pages.forEach((page) => {
      const phase = page.phase || 'Beginner';
      if (groups[phase]) groups[phase].push(page);
      else groups.Beginner.push(page);
    });
    return groups;
  }

  function renderSubmoduleList(category) {
    const treeCat = getTreeCategory(category.id);
    let html = `<div class="sidebar-panel sidebar-submodules">
      <h3>${category.label}</h3>
      <p class="sidebar-panel-desc">Choose a learning path</p>
      <ul class="sidebar-submodule-list">`;

    category.children.forEach((child) => {
      const active = isChildActive(category, child) ? ' active' : '';
      html += `<li>
        <a href="${resolve(child.href)}" class="sidebar-submodule-link${active}">
          <span class="submodule-name">${child.label}</span>
        </a>
      </li>`;
    });

    html += `</ul></div>`;
    return html;
  }

  function renderFeaturedPanel(categoryId, ctx) {
    if (categoryId !== 'programming' && ctx.page !== 'spark') return '';
    return `<div class="sidebar-panel"><h3>Featured</h3><ul>
      <li><a href="${resolve('blog/spark-architecture.html')}" class="${ctx.page === 'spark' ? 'active' : ''}">Spark Architecture Guide</a></li>
    </ul></div>`;
  }

  function renderLearningPlanSidebar(treeTopic, ctx, category) {
    const phases = groupPagesByPhase(treeTopic.pages);
    const currentPhase = treeTopic.pages.find((p) => p.slug === ctx.topic)?.phase || 'Beginner';
    const cat = category || getNavCategory(ctx.category);
    const backLink = cat
      ? `<a href="${resolve(categoryHref(cat.id))}" class="sidebar-back-link">← Back to ${cat.label}</a>`
      : '';

    let html = `${backLink}<div class="sidebar-panel learning-plan-panel">
      <h3>${treeTopic.label} Learning Path</h3>
      <ul class="sidebar-plan-overview">
        <li><a href="${resolve(treeTopic.href)}" class="${!ctx.topic || ctx.topic === 'index' ? 'active' : ''}">Path Overview</a></li>
      </ul>`;

    Object.entries(phases).forEach(([phase, pages]) => {
      if (!pages.length) return;
      const isOpen = phase === currentPhase || ctx.topic === 'index';
      html += `<details class="plan-phase-group"${isOpen ? ' open' : ''}>
        <summary class="plan-phase-label">${phase}</summary>
        <ol class="sidebar-learning-steps">`;
      pages.forEach((page) => {
        const active = isTopicPageActive(treeTopic, page) ? ' class="active"' : '';
        const ext = page.external ? ' ↗' : '';
        html += `<li><a href="${resolve(page.href)}"${active}>${page.label}${ext}</a></li>`;
      });
      html += `</ol></details>`;
    });

    html += `</div>`;
    return html;
  }

  function renderTopicTreeSidebar(category) {
    if (!category) return '';
    const ctx = currentContext();
    const navCtx = detectNavigationContext();
    const treeCat = getTreeCategory(category.id);
    if (!treeCat) return renderSubmoduleList(category);

    if (navCtx.level === 'submodule' || navCtx.level === 'topic') {
      const activeTopic = getTreeTopic(category.id, navCtx.submodule);
      if (activeTopic) {
        return renderLearningPlanSidebar(activeTopic, ctx, category) + renderFeaturedPanel(category.id, ctx);
      }
    }

    return renderSubmoduleList(category) + renderFeaturedPanel(category.id, ctx);
  }

  function renderCategorySidebar(category) {
    if (!category) return '';
    const ctx = currentContext();
    let html = `<div class="sidebar-panel"><h3>${category.label}</h3><ul>`;
    category.children.forEach((child) => {
      const active = isChildActive(category, child) ? ' class="active"' : '';
      html += `<li><a href="${resolve(child.href)}"${active}>${child.label}</a></li>`;
    });
    html += `</ul></div>`;

    if (ctx.page === 'spark' || ctx.section === 'pyspark' || category.id === 'programming') {
      html += `<div class="sidebar-panel"><h3>Featured</h3><ul>
        <li><a href="${resolve('blog/spark-architecture.html')}" class="${ctx.page === 'spark' ? 'active' : ''}">Spark Architecture Guide</a></li>
      </ul></div>`;
    }

    return html;
  }

  function renderLeftSidebar() {
    const ctx = currentContext();
    let html = '';

    if (ctx.page === 'spark') {
      html += renderTopicTreeSidebar(getNavCategory('programming'));
      html += `<div class="sidebar-panel"><h3>Blog Posts</h3><ul>`;
      POSTS.forEach((p) => {
        const active = p.featured ? ' class="active"' : '';
        html += `<li><a href="${resolve(p.href)}"${active}>${p.title}</a></li>`;
      });
      html += `</ul></div>`;
    } else if (ctx.category) {
      html += renderTopicTreeSidebar(getNavCategory(ctx.category));
    } else if (ctx.page === 'home') {
      html += `<div class="sidebar-panel"><h3>Categories</h3><ul>`;
      NAV.forEach((cat) => {
        html += `<li><a href="${resolve(categoryHref(cat.id))}">${cat.label}</a></li>`;
      });
      html += `</ul></div>`;
      html += `<div class="sidebar-panel"><h3>Featured</h3><ul>
        <li><a href="${resolve('blog/spark-architecture.html')}">Spark Architecture Guide</a></li>
      </ul></div>`;
    } else if (ctx.page === 'blog') {
      html += renderCategorySidebar(getNavCategory('programming'));
      html += `<div class="sidebar-panel"><h3>All Posts</h3><ul>`;
      POSTS.forEach((p) => {
        html += `<li><a href="${resolve(p.href)}">${p.title}</a></li>`;
      });
      html += `</ul></div>`;
    } else if (ctx.page === 'about') {
      html += `<div class="sidebar-panel"><h3>About</h3><ul>
        <li><a href="#mission">Mission</a></li>
        <li><a href="#topics">Topics</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul></div>`;
      html += `<div class="sidebar-panel"><h3>Explore</h3><ul>`;
      NAV.forEach((cat) => {
        html += `<li><a href="${resolve(categoryHref(cat.id))}">${cat.label}</a></li>`;
      });
      html += `</ul></div>`;
    } else {
      html += `<div class="sidebar-panel"><h3>Explore</h3><ul>`;
      NAV.forEach((cat) => {
        html += `<li><a href="${resolve(categoryHref(cat.id))}">${cat.label}</a></li>`;
      });
      html += `</ul></div>`;
    }

    return html;
  }

  function renderRightSidebar() {
    const ctx = currentContext();
    const navCtx = detectNavigationContext();

    if (ctx.page === 'spark') {
      return `
        <div class="sidebar-panel" id="toc-panel"><h3>On This Page</h3><ul id="page-toc"><li><em>Loading…</em></li></ul></div>
        <div class="sidebar-panel"><h3>Related Topics</h3><ul>
          <li><a href="${resolve('programming/pyspark/index.html')}">PySpark</a></li>
          <li><a href="${resolve('azure-data-engineering/pyspark-on-databricks/index.html')}">PySpark on Databricks</a></li>
        </ul></div>
        <div class="sidebar-panel"><h3>Tags</h3><div class="tag-cloud">
          <a class="tag" href="#">spark</a>
          <a class="tag" href="#">pyspark</a>
          <a class="tag" href="#">architecture</a>
          <a class="tag" href="#">distributed</a>
        </div></div>
        ${renderGithubPanel()}`;
    }

    if (ctx.page === 'home') {
      return `
        <div class="sidebar-panel"><h3>Featured</h3><ul>
          <li><a href="${resolve('blog/spark-architecture.html')}">Spark Architecture Guide</a></li>
        </ul></div>
        <div class="sidebar-panel"><h3>Popular Topics</h3><ul>
          <li><a href="${resolve('programming/python/index.html')}">Python</a></li>
          <li><a href="${resolve('ai/machine-learning/index.html')}">Machine Learning</a></li>
          <li><a href="${resolve('azure-devops/ci-cd/index.html')}">CI/CD</a></li>
          <li><a href="${resolve('azure-data-engineering/azure-databricks/index.html')}">Azure Databricks</a></li>
        </ul></div>
        ${renderGithubPanel()}`;
    }

    if (ctx.category) {
      const cat = getNavCategory(ctx.category);
      const treeCat = getTreeCategory(ctx.category);
      const treeTopic = ctx.section ? getTreeTopic(ctx.category, ctx.section) : null;
      let related = '';

      if (navCtx.level === 'category' && cat && treeCat) {
        related += `<div class="sidebar-panel"><h3>${cat.label} Overview</h3>
          <p class="sidebar-overview-text">${cat.children.length} structured learning paths</p></div>`;
        related += `<div class="sidebar-panel"><h3>Featured Paths</h3><ul>`;
        cat.children.slice(0, 4).forEach((child) => {
          related += `<li><a href="${resolve(child.href)}">${child.label}</a></li>`;
        });
        related += `</ul></div>`;
        return related + renderGithubPanel();
      }

      if (treeTopic && ctx.topic && ctx.topic !== 'index') {
        const currentPage = treeTopic.pages.find((p) => p.slug === ctx.topic);
        if (currentPage) {
          related += `<div class="sidebar-panel step-info-panel">
            <h3>Current Topic</h3>
            <p class="step-info-title">${currentPage.label}</p>
            <p class="step-info-phase phase-${(currentPage.phase || 'beginner').toLowerCase()}">${currentPage.phase || 'Beginner'}</p>
            <p class="step-info-read">~${currentPage.readMinutes || 5} min read</p>
          </div>`;

          const idx = treeTopic.pages.findIndex((p) => p.slug === ctx.topic);
          if (idx > 0 || idx < treeTopic.pages.length - 1) {
            related += `<div class="sidebar-panel"><h3>Navigate</h3><ul class="step-nav-sidebar">`;
            if (idx > 0) {
              const prev = treeTopic.pages[idx - 1];
              related += `<li><a href="${resolve(prev.href)}">← ${prev.label}</a></li>`;
            }
            if (idx < treeTopic.pages.length - 1) {
              const next = treeTopic.pages[idx + 1];
              related += `<li><a href="${resolve(next.href)}">${next.label} →</a></li>`;
            }
            related += `</ul></div>`;
          }

          const nearby = treeTopic.pages
            .filter((p, i) => Math.abs(i - idx) <= 2 && p.slug !== ctx.topic)
            .slice(0, 4);
          if (nearby.length) {
            related += `<div class="sidebar-panel"><h3>Nearby Topics</h3><ul>`;
            nearby.forEach((p) => {
              related += `<li><a href="${resolve(p.href)}">${p.label}</a></li>`;
            });
            related += `</ul></div>`;
          }
        }
      } else if (cat) {
        const siblings = cat.children.filter((c) => c.id !== ctx.section).slice(0, 4);
        if (siblings.length) {
          related += `<div class="sidebar-panel"><h3>More in ${cat.label}</h3><ul>`;
          siblings.forEach((c) => {
            related += `<li><a href="${resolve(c.href)}">${c.label}</a></li>`;
          });
          related += `</ul></div>`;
        }
      }

      related += `<div class="sidebar-panel" id="toc-panel"><h3>On This Page</h3><ul id="page-toc"><li><em>Loading…</em></li></ul></div>`;
      return related + renderGithubPanel();
    }

    return renderGithubPanel();
  }

  function renderGithubPanel() {
    return `<div class="sidebar-panel"><h3>GitHub</h3>
      <p style="font-size:0.85rem;color:var(--muted);margin-bottom:0.5rem">Source &amp; issues</p>
      <a href="${SITE.github}" target="_blank" rel="noopener" style="font-family:var(--mono);font-size:0.82rem">→ View on GitHub</a>
    </div>`;
  }

  function renderMobileAccordion() {
    return NAV.map((category) => {
      const ctx = currentContext();
      const open = ctx.category === category.id ? ' open' : '';
      const catLink = `<li><a href="${resolve(categoryHref(category.id))}" class="drawer-category-link">All ${category.label}</a></li>`;
      const items = category.children.map((child) => {
        const active = isChildActive(category, child) ? ' class="active"' : '';
        return `<li><a href="${resolve(child.href)}"${active}>${child.label}</a></li>`;
      }).join('');

      return `
        <div class="drawer-accordion${open}">
          <button type="button" class="drawer-accordion-trigger" aria-expanded="${open ? 'true' : 'false'}">
            ${category.label}
            <span class="nav-chevron" aria-hidden="true">▾</span>
          </button>
          <ul class="drawer-submenu">${catLink}${items}</ul>
        </div>`;
    }).join('');
  }

  function renderMobileDrawer() {
    const ctx = currentContext();
    let extra = '';
    if (ctx.page === 'spark') {
      extra = `<div class="drawer-section"><h4>On This Page</h4><ul id="mobile-toc"></ul></div>`;
    }

    return `
      <div class="mobile-overlay" id="mobile-overlay"></div>
      <div class="mobile-drawer" id="mobile-drawer">
        <div class="drawer-header">
          <strong>${SITE.name}</strong>
          <button class="drawer-close" id="drawer-close" aria-label="Close menu">×</button>
        </div>
        <div class="drawer-section">
          <h4>Home</h4>
          <ul><li><a href="${resolve('index.html')}">Home</a></li></ul>
        </div>
        <div class="drawer-section"><h4>Browse</h4>${renderMobileAccordion()}</div>
        ${extra}
        <div class="drawer-section"><h4>Links</h4><ul>
          <li><a href="${resolve('blog/spark-architecture.html')}">Spark Architecture</a></li>
          <li><a href="${resolve('about/index.html')}">About</a></li>
          <li><a href="${SITE.github}" target="_blank" rel="noopener">GitHub</a></li>
        </ul></div>
      </div>`;
  }

  function renderFooter() {
    const year = new Date().getFullYear();
    return `
      <footer class="site-footer">
        <p>&copy; ${year} ${SITE.name} · Built for <a href="https://pages.github.com/" target="_blank" rel="noopener">GitHub Pages</a></p>
      </footer>`;
  }

  function injectLayout() {
    const headerEl = document.getElementById('site-header');
    if (headerEl) headerEl.outerHTML = renderTopNav();

    const leftEl = document.getElementById('sidebar-left');
    if (leftEl) {
      leftEl.className = 'sidebar sidebar-left';
      leftEl.innerHTML = renderLeftSidebar();
    }

    const rightEl = document.getElementById('sidebar-right');
    if (rightEl) {
      rightEl.className = 'sidebar sidebar-right';
      rightEl.innerHTML = renderRightSidebar();
    }

    const footerEl = document.getElementById('site-footer');
    if (footerEl) footerEl.outerHTML = renderFooter();

    document.body.insertAdjacentHTML('beforeend', renderMobileDrawer());
  }

  function generateTOC() {
    const main = document.querySelector('.spark-article') || document.querySelector('.main-content');
    if (!main) return;

    const sections = main.querySelectorAll('section[id] > h2');
    const items = sections.length ? sections : main.querySelectorAll('h2[id], h3[id]');

    if (!items.length) return;

    const tocHtml = [];
    items.forEach((h) => {
      const section = h.closest('section');
      const id = section ? section.id : h.id;
      if (!id) return;
      const text = h.textContent.replace(/^\d+\.\s*/, '');
      const level = h.tagName.toLowerCase();
      const cls = level === 'h3' ? ' toc-h3' : '';
      tocHtml.push(`<li><a class="toc-link${cls}" href="#${id}">${text}</a></li>`);

      if (level === 'h2' && section) {
        section.querySelectorAll(':scope > h3').forEach((h3) => {
          if (h3.id) {
            tocHtml.push(`<li><a class="toc-link toc-h3" href="#${h3.id}">${h3.textContent}</a></li>`);
          }
        });
      }
    });

    const tocEl = document.getElementById('page-toc');
    if (tocEl && tocHtml.length) tocEl.innerHTML = tocHtml.join('');

    const mobileToc = document.getElementById('mobile-toc');
    if (mobileToc && tocHtml.length) {
      mobileToc.innerHTML = tocHtml.map((li) => li.replace('toc-link', '')).join('');
    }
  }

  function initDesktopNav() {
    const items = document.querySelectorAll('.nav-item');
    let openItem = null;

    function closeAll() {
      items.forEach((item) => {
        item.classList.remove('open');
        item.querySelector('.nav-chevron-btn')?.setAttribute('aria-expanded', 'false');
      });
      openItem = null;
    }

    items.forEach((item) => {
      const chevron = item.querySelector('.nav-chevron-btn');
      if (!chevron) return;

      chevron.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const isOpen = item.classList.contains('open');
        closeAll();
        if (!isOpen) {
          item.classList.add('open');
          chevron.setAttribute('aria-expanded', 'true');
          openItem = item;
        }
      });

      item.addEventListener('mouseenter', () => {
        if (window.matchMedia('(min-width: 1025px)').matches) {
          closeAll();
          item.classList.add('open');
          chevron.setAttribute('aria-expanded', 'true');
          openItem = item;
        }
      });

      item.addEventListener('mouseleave', () => {
        if (window.matchMedia('(min-width: 1025px)').matches) {
          item.classList.remove('open');
          chevron.setAttribute('aria-expanded', 'false');
          if (openItem === item) openItem = null;
        }
      });
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav-item')) closeAll();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeAll();
    });
  }

  function initMobileAccordion() {
    document.querySelectorAll('.drawer-accordion-trigger').forEach((trigger) => {
      trigger.addEventListener('click', () => {
        const panel = trigger.closest('.drawer-accordion');
        const isOpen = panel.classList.contains('open');
        document.querySelectorAll('.drawer-accordion').forEach((p) => {
          p.classList.remove('open');
          p.querySelector('.drawer-accordion-trigger')?.setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) {
          panel.classList.add('open');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  function initMobileMenu() {
    const toggle = document.getElementById('menu-toggle');
    const drawer = document.getElementById('mobile-drawer');
    const overlay = document.getElementById('mobile-overlay');
    const close = document.getElementById('drawer-close');

    function open() {
      drawer.classList.add('open');
      overlay.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    function shut() {
      drawer.classList.remove('open');
      overlay.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    if (toggle) toggle.addEventListener('click', open);
    if (close) close.addEventListener('click', shut);
    if (overlay) overlay.addEventListener('click', shut);

    drawer?.querySelectorAll('a').forEach((a) => a.addEventListener('click', shut));
  }

  function highlightActiveTOC() {
    const links = document.querySelectorAll('#page-toc a, .sidebar-panel a.toc-link');
    if (!links.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            links.forEach((l) => l.classList.toggle('active', l.getAttribute('href') === `#${id}`));
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    );

    document.querySelectorAll('section[id]').forEach((s) => observer.observe(s));
  }

  document.addEventListener('DOMContentLoaded', () => {
    injectLayout();
    generateTOC();
    initDesktopNav();
    initMobileAccordion();
    initMobileMenu();
    if (document.getElementById('page-toc')) highlightActiveTOC();
  });
})();
