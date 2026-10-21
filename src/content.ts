export type ProjectCategory = "Data & Analytics" | "Machine Learning";

export interface Project {
  id: "cryptolens" | "churn" | "sales" | "diagnostic";
  index: string;
  title: string;
  shortTitle: string;
  category: ProjectCategory;
  description: string;
  technologies: string[];
  problem: string;
  approach: [string, string, string];
  outcome: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export interface SkillGroup {
  title: string;
  description: string;
  skills: string[];
}

export const profile = {
  name: "Siddharth Rajawat",
  firstName: "Siddharth",
  lastName: "Rajawat",
  role: "Associate Product Engineer",
  tagline: "AI, data & thoughtful engineering.",
  location: "Jaipur, India",
  email: "srajawat.dev@gmail.com",
  github: "https://github.com/its-siddharth",
  linkedin: "https://www.linkedin.com/in/siddharthrajawat",
  summary:
    "I’m an AI & Data Science student who enjoys turning complex data into useful products. From reliable pipelines to predictive models and interactive dashboards, I build across the journey from raw data to a clearer decision.",
};

export const projects: Project[] = [
  {
    id: "cryptolens",
    index: "01",
    title: "CryptoLens Analytics Platform",
    shortTitle: "CryptoLens",
    category: "Data & Analytics",
    description:
      "Market data, news sentiment, and time-series forecasts. Connected in one interactive analytics platform.",
    technologies: ["Python", "Streamlit", "LSTM", "Prophet", "REST APIs"],
    problem:
      "Market metrics and news feeds tell different parts of the same story. Bringing them together requires dependable ingestion, useful forecasts, and a clear way to explore the signals.",
    approach: [
      "Built an end-to-end pipeline to ingest real-time market metrics and news feeds through REST APIs.",
      "Combined LSTM and Prophet forecasting with VADER sentiment analysis to explore price patterns and news signals.",
      "Added API error handling and interactive Streamlit views to make the analytical workflow easier to use.",
    ],
    outcome:
      "An end-to-end analytical platform that brings market data, automated forecasts, and news sentiment into interactive views.",
  },
  {
    id: "churn",
    index: "02",
    title: "Customer Churn & Retention Engine",
    shortTitle: "Customer Churn",
    category: "Machine Learning",
    description:
      "Turning customer engagement signals into predictive insights for more focused retention campaigns.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Feature Engineering"],
    problem:
      "Customer engagement data can reveal early signs of churn. The challenge is turning those signals into predictions that help teams decide where to focus retention efforts.",
    approach: [
      "Prepared customer engagement data with Pandas and engineered features for churn classification.",
      "Trained predictive classification models using Python and Scikit-learn.",
      "Tuned model hyperparameters and evaluated precision and recall to balance retention priorities.",
    ],
    outcome:
      "A predictive churn classification model designed to support targeted retention campaigns using customer engagement signals.",
  },
  {
    id: "sales",
    index: "03",
    title: "Sales Funnel & Ad Performance BI",
    shortTitle: "Sales & Ad Intelligence",
    category: "Data & Analytics",
    description:
      "A clearer view of multi-channel conversions, from relational transaction data to actionable dashboards.",
    technologies: ["SQL", "Power BI", "Python", "Data Modeling"],
    problem:
      "Understanding a multi-channel sales funnel means connecting transaction data into a consistent view of conversions while keeping dashboards responsive.",
    approach: [
      "Modeled multi-channel sales conversions using relational transaction data.",
      "Designed parameterized SQL queries and aggregated views to support efficient dashboard queries.",
      "Built an automated Power BI tracking dashboard to explore sales funnel and advertising performance.",
    ],
    outcome:
      "An automated business intelligence dashboard connecting multi-channel conversion tracking with a structured relational data model.",
  },
  {
    id: "diagnostic",
    index: "04",
    title: "Predictive Diagnostic Classifier",
    shortTitle: "Predictive Diagnostics",
    category: "Machine Learning",
    description:
      "A reproducible classification workflow built around clean clinical data and consistent feature preparation.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Data Cleaning",
      "Quality Assurance",
    ],
    problem:
      "Clinical parameters need consistent preparation before a classification model can use them. Data quality and repeatable preprocessing are central to the workflow.",
    approach: [
      "Prepared clinical parameters through data cleaning and quality checks.",
      "Applied outlier removal and standardized feature scaling to create consistent model inputs.",
      "Implemented an automated classification pipeline with Python and Scikit-learn.",
    ],
    outcome:
      "A repeatable predictive classification workflow that produces risk assessment scores from preprocessed clinical parameters.",
  },
];

export const experiences: Experience[] = [
  {
    company: "Amdox Technology",
    role: "Data Analyst & Product Intern",
    period: "Mar — Jun 2026",
    location: "Remote",
    summary:
      "Connecting reliable data engineering with the everyday decisions of product teams.",
    highlights: [
      "Automated validation, aggregation, and ETL workflows across four business datasets using Python and SQL.",
      "Built and deployed Tableau reporting suites to track operational KPIs for cross-functional teams.",
      "Resolved API rate-limit errors and schema inconsistencies, and translated product requirements into data models and dashboard metrics.",
    ],
    technologies: ["Python", "SQL", "Tableau", "ETL Pipelines"],
  },
  {
    company: "SkillCraft Technology",
    role: "Machine Learning Intern",
    period: "Jun — Jul 2025",
    location: "Remote",
    summary:
      "Building, evaluating, and documenting predictive models through collaborative development.",
    highlights: [
      "Trained, tuned, and evaluated predictive classification models using Python and TensorFlow.",
      "Conducted exploratory data analysis and feature selection across varied datasets.",
      "Collaborated in agile sprints to benchmark model performance, document pipelines, and review code.",
    ],
    technologies: ["Python", "TensorFlow", "EDA", "Feature Selection"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Data & intelligence",
    description: "Finding useful patterns in complex information.",
    skills: [
      "Python",
      "SQL",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "TensorFlow",
      "NLP",
      "Time-Series Forecasting",
    ],
  },
  {
    title: "Engineering & systems",
    description: "Building the foundations that make data useful.",
    skills: [
      "FastAPI",
      "REST APIs",
      "PostgreSQL",
      "MySQL",
      "ETL Pipelines",
      "Git",
      "Linux",
      "C++",
      "Go",
    ],
  },
  {
    title: "Products & storytelling",
    description: "Making insights clear, accessible, and interactive.",
    skills: [
      "Streamlit",
      "Power BI",
      "Tableau",
      "JavaScript",
      "HTML & CSS",
      "Excel",
      "Data Visualization",
    ],
  },
];

export const education = {
  institution: "Vivekananda Global University",
  abbreviation: "VGU",
  location: "Jaipur, Rajasthan",
  degree: "B.Tech in Artificial Intelligence & Data Science",
  graduation: "Expected June 2027",
  coursework: [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Object-Oriented Programming",
    "Operating Systems",
    "Machine Learning",
    "Data Mining",
    "Statistics",
  ],
};
