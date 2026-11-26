/**
 * Central portfolio data for Joel Tomy.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 */

/** Site base path ('./' so it works on GitHub Pages and in previews). */
export const BASE = import.meta.env.BASE_URL;
import { portrait } from './images';
import perfectPairPoster from '../assets/perfect-pair-demo-poster.jpg';
import pp0 from '../assets/reel/pp-0.webp';
import pp1 from '../assets/reel/pp-1.webp';
import pp2 from '../assets/reel/pp-2.webp';
import pp3 from '../assets/reel/pp-3.webp';
import pp4 from '../assets/reel/pp-4.webp';
import dk0 from '../assets/reel/dk-0.webp';
import dk1 from '../assets/reel/dk-1.webp';
import dk2 from '../assets/reel/dk-2.webp';
import dk3 from '../assets/reel/dk-3.webp';
import dk4 from '../assets/reel/dk-4.webp';
import docketPoster from '../assets/docket-demo-poster.jpg';

/** The demo video is too big to bundle into the single-file build, so that build streams it from the live site. */
const demoVideo = (file: string) =>
  import.meta.env.MODE === 'single' ? `https://joeltomy34.github.io/assets/${file}` : `${BASE}assets/${file}`;

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Joel Tomy',
  displayName: 'Joel Tomy',
  firstName: 'JOEL',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A JOEL TOMY PRODUCTION',
  role: 'AI / ML Engineer',
  tagline: ['Machine Learning', 'Deep Learning & NLP', 'Agentic AI'],
  intro:
    'A Master of Management Analytics candidate at McGill building machine learning, deep learning, NLP and agentic AI systems, from notebook to deployed model. Before that, three years at ICICI Bank and Walmart Global Tech turning data into automation and Gen AI tools.',
  location: 'Montreal, Quebec',
  email: 'joeltomy34@gmail.com',
  links: {
    linkedin: 'https://ca.linkedin.com/in/joel-tomy',
    github: 'https://github.com/joeltomy34',
  },
  /** Put your resume at public/assets/Joel_Tomy_Resume.pdf and set this to `${BASE}assets/Joel_Tomy_Resume.pdf`.
   *  While empty, the site shows the designed resume sheet and hides the download buttons. */
  resumePdf: '',
  portrait: {
    src: portrait.p720,
    srcSet: `${portrait.p420} 420w, ${portrait.p720} 720w, ${portrait.p1100} 1100w`,
    alt: 'Portrait of Joel Tomy',
  },
  focusAreas: ['Machine Learning', 'Deep Learning', 'NLP & LLMs', 'Agentic AI', 'MLOps'],
  languages: ['English', 'Hindi', 'Malayalam'],
};

export const education = [
  {
    school: 'McGill University',
    place: 'Montreal',
    degree: 'Master of Management Analytics (MMA)',
    period: 'July 2026 – August 2027',
    score: 'Class of 2027',
  },
  {
    school: 'Kristu Jayanti College',
    place: 'Bangalore',
    degree: 'BCom Honours, Accounting and Finance',
    period: 'May 2020 – June 2023',
    score: 'CGPA 8.45 / 10',
  },
];

export const experience = [
  {
    company: 'McGill University, Faculty of Law',
    role: 'Exam Systems Documentation & Training Assistant',
    place: 'Montreal',
    period: 'Nov 2026 – Present',
    points: [
      'Writing documentation and training for myCourses assessments and Respondus LockDown Browser.',
      'Building Power Automate flows for the Student Affairs Office: a shared advising mailbox logged to an Excel tracker, and extension requests moved to Microsoft Forms.',
      'Building Docket, a browser-based exam scheduler for exam days, times and rooms.',
    ],
  },
  {
    company: 'Walmart Global Tech',
    role: 'Senior Analyst, People Services Generalist',
    place: 'Bangalore',
    period: 'Feb 2026 – Jun 2026',
    points: [
      'Subject matter expert for Workday recruiting operations and complex immigration processes.',
      'Built Power BI reporting suites for trend analysis and volume forecasting.',
      'Developed three Gen AI automation solutions targeting 15,000+ manual cases.',
      'Presented improvement proposals to VP and Group Director leadership.',
    ],
  },
  {
    company: 'Walmart Global Tech',
    role: 'Analyst, People Services Generalist (Recruitment Services)',
    place: 'Bangalore',
    period: 'Apr 2024 – Feb 2026',
    points: [
      'Improved SLA compliance by 25% and data accuracy by 30% across business units.',
      'Designed SOPs for 10+ HR processes, raising process consistency by 20%.',
      'Automated work with Macros, Mail Merge and VBA, cutting manual effort by 40%.',
      'Integrated 12 manual Excel processes into ServiceNow and Power BI; trained 15+ associates.',
    ],
  },
  {
    company: 'Walmart Global Tech',
    role: 'Process Specialist, Recruitment Services',
    place: 'Bangalore',
    period: 'Nov 2023 – Apr 2024',
    points: ['Ran recruitment operations in Workday HRIS before moving up to Analyst.'],
  },
  {
    company: 'ICICI Bank',
    role: 'Deputy Manager II, Wealth & Trade',
    place: 'Bangalore',
    period: 'Jul 2023 – Oct 2023',
    points: [
      'Advised high-net-worth clients on banking and investment needs.',
      'Matched client data to short- and long-term investment objectives.',
      'Drove business development across assets and fee-based services.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  /** Optional demo video shown at the top of the project page. */
  demo?: { src: string; poster: string; label: string; note?: string };
  /** Joel's role and the team, shown on the project page. */
  role?: string;
  team?: string;
  note?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants' | 'chart' | 'text';
  /** Which section the project appears in. */
  kind: 'capstone' | 'agentic' | 'ml' | 'nlp';
  /** Shown on the card instead of the year, e.g. 'In progress'. */
  status?: string;
  /** Key screens that crossfade on the project card, shown at their original size (1440×760). */
  reel?: { src: string }[];
};

export const projects: Project[] = [
  {
    id: 'atkinsrealis-capstone',
    kind: 'capstone',
    title: 'AtkinsRéalis Capstone',
    year: '2026 – 2027',
    status: 'In progress',
    genre: 'MMA Capstone • Industry partner • Applied analytics',
    logline: 'An applied analytics project with industry partner AtkinsRéalis, from problem definition to a deployable result.',
    stack: ['Python', 'SQL', 'Machine Learning', 'Solution architecture'],
    build: [
      'The capstone of the McGill Master of Management Analytics: a sustained project with AtkinsRéalis as the industry partner.',
      'Joel leads the four-person team as team lead and solutions architect, alongside a data engineer, a modeler and a UI/UX lead.',
    ],
    features: ['Problem definition with the industry partner', 'Data engineering on the partner’s datasets', 'Modelling and a user-facing interface', 'Delivery in August 2027'],
    metrics: [
      { value: 'Lead', label: 'team lead & solutions architect' },
      { value: '4', label: 'person team' },
      { value: '2027', label: 'final delivery, August' },
    ],
    role: 'Team lead & solutions architect',
    team: 'McGill MMA capstone with AtkinsRéalis.',
    note: 'Client work; details shared once the project is complete.',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
  {
    id: 'perfect-pair',
    kind: 'agentic',
    title: 'Perfect Pair',
    year: '2026',
    genre: 'Agentic AI • Retail • Amazon Bedrock',
    logline: 'An agentic returns desk that turns refunds into exchanges and store credit, and shows its reasoning at every step.',
    stack: ['Claude on Amazon Bedrock', 'AgentCore', 'Strands Agents', 'Cedar policies', 'JavaScript', 'Python'],
    build: [
      'Reads the customer’s words and photo, checks reviews, stock and policy, then offers the option that fixes the problem, with the refund always visible.',
      'Prices every option after all costs. On five test returns it kept 3.8× the value of a rules engine.',
      'Money limits run as policy rules outside the model; risky or high-value cases go to a store associate or manager.',
      'A prevention agent finds styles that keep coming back for fit, and a feedback loop recalibrates how far it trusts a photo.',
    ],
    features: [
      'Understands the customer’s message and photo',
      'Checks reviews, stock and return policy',
      'Offers an exchange or store credit, with the refund always visible',
      'Policy rules (Cedar) enforce money limits outside the model',
      'Hands risky or high-value cases to a store associate or manager',
      'Prevention agent flags styles that keep coming back for fit',
    ],
    metrics: [
      { value: '3.8×', label: 'value kept vs a rules engine, on five test returns' },
      { value: 'Product Fit', label: 'special prize at the final' },
      { value: '90/100', label: 'ideation round score' },
      { value: 'Finalist', label: 'BSRM × ALDO, Fall 2026' },
    ],
    demo: {
      src: demoVideo('perfect-pair-demo.mp4'),
      poster: perfectPairPoster,
      label: 'One-minute demo of Perfect Pair',
      note: '1-minute demo with subtitles. The demo uses synthetic data created for the hackathon.',
    },
    reel: [
      { src: pp0 },
      { src: pp1 },
      { src: pp2 },
      { src: pp3 },
      { src: pp4 },
    ],
    role: 'Sole developer: product design, agents, policy rules and the full technical build.',
    team: 'Entered in the BSRM × ALDO Retail Gen AI Hackathon as team Code Reapers.',
    note: 'Code is in a private repository, available on request.',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'flow',
  },
  {
    id: 'docket',
    kind: 'agentic',
    title: 'Docket',
    year: '2026',
    genre: 'Agentic AI • Scheduling • Web app',
    logline: 'An exam scheduler for McGill’s Faculty of Law, built with Claude, that sets exam days, times and rooms from real course data.',
    stack: ['Claude', 'JavaScript', 'HTML', 'CSS', 'Excel'],
    build: [
      'Built a browser app for Student Affairs staff that reads the course enrollment report, assessment parameters and constraints, then schedules exams and books rooms.',
      'Instructors can enter their assessment details in the app itself instead of filling in Excel sheets.',
    ],
    features: ['Automatic exam day, time and room scheduling', 'Dashboard, heatmap and report', 'In-app form for instructors', 'Built-in offline assistant, Amicus'],
    metrics: [
      { value: '0', label: 'official conflicts in the demo schedule' },
      { value: '320', label: 'students checked (synthetic demo)' },
      { value: '1 file', label: 'runs in the browser, nothing to install' },
      { value: 'Offline', label: 'assistant built in' },
    ],
    reel: [
      { src: dk0 },
      { src: dk1 },
      { src: dk2 },
      { src: dk3 },
      { src: dk4 },
    ],
    demo: {
      src: demoVideo('docket-demo.mp4'),
      poster: docketPoster,
      label: 'Demo of Docket scheduling exams from synthetic data',
      note: 'Narrated walkthrough, under a minute. All courses, instructors, students and rooms in this demo are synthetic.',
    },
    role: 'Designed and built with Claude for the Faculty of Law Student Affairs Office.',
    note: 'An internal Faculty of Law tool, so the code is private. The demo runs the real app on synthetic data.',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },  {
    id: 'pubg-cheater-detection',
    kind: 'ml',
    title: 'Cheater Detection',
    year: '2026',
    genre: 'Deep Learning • Anomaly detection',
    logline: 'A deep learning model that flags likely cheaters in PUBG match data.',
    stack: ['PyTorch', 'TensorFlow / Keras', 'Python', 'pandas'],
    build: [
      'Individual deep learning project for MGSC 673 (Intro to AI & Deep Learning) at McGill.',
      'Built end to end: data preparation, neural network design, training and evaluation on player match statistics.',
    ],
    features: ['Neural network classifier on player match stats', 'End-to-end pipeline from raw data to evaluation', 'In progress, final version due December 2026'],
    metrics: [{ value: 'Deep learning', label: 'neural network classifier' }],
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'shield',
  },
  {
    id: 'rossmann-forecast',
    kind: 'ml',
    title: 'Store Sales Forecasting',
    year: '2026',
    genre: 'Machine Learning • Regression',
    logline: 'An end-to-end ML pipeline predicting daily sales for Rossmann stores.',
    stack: ['scikit-learn', 'pandas', 'NumPy', 'matplotlib', 'Jupyter'],
    build: [
      'Individual project for INSY 674 (Enterprise Data Science & ML in Production): Géron’s end-to-end ML workflow applied to the Kaggle Rossmann Store Sales dataset.',
      'Covers framing, exploration, feature engineering, model selection and fine-tuning, with a follow-up causal inference study on the same use case.',
    ],
    features: ['Full data science lifecycle in one notebook', 'Feature engineering and scikit-learn pipelines', 'Model comparison and hyperparameter tuning', 'Causal inference follow-up'],
    metrics: [{ value: 'Daily sales', label: 'continuous target, regression' }],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'chart',
  },
  {
    id: 'claims-cost',
    kind: 'ml',
    title: 'Claim Cost Prediction',
    year: '2026',
    genre: 'Machine Learning • Insurance',
    logline: 'Predicting workers’ compensation claim costs to improve reserve accuracy.',
    stack: ['scikit-learn', 'pandas', 'Python', 'Git / GitHub'],
    build: [
      'Group project for INSY 674 at McGill on a workers’ compensation claims dataset.',
      'Joel owned measuring and comparing model performance and fine-tuning the final system.',
    ],
    features: ['Model evaluation and comparison', 'Hyperparameter fine-tuning', 'Team workflow on GitHub'],
    metrics: [{ value: 'Reserves', label: 'predicting claim cost for reserve accuracy' }],
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'tenants',
  },
  {
    id: 'safeplate-to',
    kind: 'ml',
    title: 'SafePlate TO',
    year: '2026',
    genre: 'Statistical Learning • Public data',
    logline: 'Risk-ranking Toronto restaurant inspections using the City’s DineSafe data.',
    stack: ['Python', 'statsmodels', 'scikit-learn', 'pandas'],
    build: [
      'Group "mini startup" project for MGSC 661 (Multivariate Statistics) at McGill.',
      'Uses Toronto’s DineSafe inspection records to rank which establishments are most at risk, pitched as a startup product.',
    ],
    features: ['Risk ranking from public inspection data', 'Statistical learning models', 'Startup-style pitch'],
    metrics: [{ value: 'DineSafe', label: 'City of Toronto open data' }],
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'shield',
  },
  {
    id: 'icu-step-down',
    kind: 'ml',
    title: 'ICU Step-Down Risk',
    year: '2026',
    genre: 'Machine Learning • Healthcare',
    logline: 'Predicting which patients may deteriorate on the ward after leaving the ICU, for Scope AI-Thon 2026.',
    stack: ['Python', 'scikit-learn'],
    build: [
      'Built with team Strawhats (Joel Tomy, Asad Nadeem, Ruilei Ma) for Scope AI-Thon 2026, a competition on AI for early detection of acute patient deterioration.',
      'The team moved from its first concept, PulseBridge 360, to focus on the ICU-to-ward step-down.',
    ],
    features: ['ICU readmission and ward deterioration risk', 'Focus on the handover after ICU discharge'],
    metrics: [{ value: '3', label: 'person team' }],
    palette: { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' },
    motif: 'chart',
  },
  {
    id: 'genai-case-resolution',
    kind: 'ml',
    title: 'Gen AI Case Resolution',
    year: '2026',
    genre: 'Generative AI • Automation • Walmart',
    logline: 'Three automation solutions on Walmart’s internal Gen AI platform that resolve repetitive HR cases and take triage off the team’s plate.',
    stack: ['Generative AI', 'Automation', 'Workday', 'Power BI'],
    build: [
      'Built at Walmart Global Tech, People Services: three Gen AI automation solutions on the company’s internal platform.',
      'Targeted 15,000+ manual cases, alongside Power BI reporting suites for trend analysis and volume forecasting.',
    ],
    features: ['Resolves repetitive HR cases', 'Takes triage off the team', 'Improvement proposals presented to VP and Group Director leadership'],
    metrics: [
      { value: '15,000+', label: 'manual cases targeted' },
      { value: '3', label: 'Gen AI solutions' },
    ],
    note: 'Internal Walmart work; no public code.',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'trading-agent',
    kind: 'ml',
    title: 'Multi-Market Trading Agent',
    year: '2026',
    genre: 'Side project • LLM agents',
    logline: 'A paper-trading bot that runs a golden-cross rule across 20 markets every day.',
    stack: ['Python', 'LLM agents', 'cron'],
    build: [
      'Runs a golden-cross paper-trading rule across 20 markets on a daily schedule.',
      'Next: a control-room dashboard and an AI council that runs ChatGPT, Gemini and Claude side by side, built on Tauric Research’s TradingAgents.',
    ],
    features: ['Daily automated runs', 'Paper trading only', 'Multi-model AI council (in progress)'],
    metrics: [
      { value: '20', label: 'markets watched' },
      { value: 'Daily', label: 'automated runs' },
    ],
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'chart',
  },

  {
    id: 'web-scraping-apis',
    kind: 'nlp',
    title: 'Web Scraping & API Data',
    year: '2026',
    genre: 'Text Analytics • Data collection',
    logline: 'Collecting text data from the web: scraping pages with BeautifulSoup and pulling data from REST APIs into analysis-ready tables.',
    stack: ['Python', 'BeautifulSoup', 'REST APIs', 'pandas'],
    build: [
      'Module 1 of INSY 669 Text Analytics at McGill: text mining foundations, web scraping and API data collection.',
      'Worked with scraped Yelp reviews and the Open-Meteo API to build datasets for text analysis.',
    ],
    features: ['HTML parsing with BeautifulSoup', 'API calls and JSON to DataFrame', 'Scraped review data for text mining'],
    metrics: [{ value: 'Module 1', label: 'INSY 669 Text Analytics' }],
    note: 'Coursework. A rebuilt version on a new use case is coming to GitHub.',
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'text',
  },
  {
    id: 'text-module-cases',
    kind: 'nlp',
    title: 'Text Mining Cases',
    year: '2026',
    genre: 'Text Analytics • NLP',
    logline: 'Module case studies applying text mining and NLP to real business text.',
    stack: ['Python', 'NLTK', 'spaCy', 'Hugging Face'],
    build: ['Case assignments from INSY 669 Text Analytics, applying NLP methods to business questions.'],
    features: ['Text preprocessing and feature extraction', 'NLP models on business text'],
    metrics: [{ value: 'NLP', label: 'INSY 669 module cases' }],
    note: 'Coursework. Rebuilt versions on new use cases are coming to GitHub.',
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'text',
  },
  {
    id: 'chatbot-lab',
    kind: 'nlp',
    title: 'LLM Chatbot',
    year: '2026',
    genre: 'Text Analytics • LLMs',
    logline: 'A chatbot built in the INSY 669 Text Analytics lab using large language models.',
    stack: ['Python', 'LLM APIs'],
    build: ['Built in the Text Analytics chatbot lab at McGill.'],
    features: ['Conversational interface over an LLM'],
    metrics: [{ value: 'Lab', label: 'INSY 669 chatbot lab' }],
    note: 'Coursework. A rebuilt version on a new use case is coming to GitHub.',
    palette: { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' },
    motif: 'flow',
  },
  {
    id: 'text-group-project',
    kind: 'nlp',
    title: 'Text Analytics Group Project',
    year: '2026',
    status: 'In progress',
    genre: 'Text Analytics • Team project',
    logline: 'The INSY 669 group project, applying text analytics end to end to a real dataset.',
    stack: ['Python', 'NLP'],
    build: ['Team project for INSY 669 Text Analytics at McGill, in progress.'],
    features: ['End-to-end text analytics on a real dataset'],
    metrics: [{ value: 'Team', label: 'INSY 669 group project' }],
    note: 'In progress.',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'text',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'product-fit',
    title: 'Product Fit Prize',
    org: 'BSRM × ALDO Hackathon',
    detail: 'Perfect Pair won the Product Fit special prize at the live final of the Retail Gen AI Hackathon.',
    laurel: 'Special Prize',
  },
  {
    id: 'aldo-finalist',
    title: 'Hackathon Finalist',
    org: 'BSRM × ALDO Hackathon',
    detail: 'Scored 90/100 in the ideation round, tied for 6th, and went through to the live final.',
    laurel: 'Finalist',
  },
  {
    id: 'exemplary',
    title: '2× Exemplary',
    org: 'Walmart Global Tech',
    detail: 'Two consecutive Exemplary performance ratings.',
    laurel: 'Performance',
  },
  {
    id: 'bravo',
    title: '4 Bravo Awards',
    org: 'Walmart Global Tech',
    detail: 'Four Bravo / Make A Difference awards.',
    laurel: 'Recognition',
  },
  {
    id: 'student-leader',
    title: 'Student Leader',
    org: 'Kristu Jayanti College',
    detail: 'Social Media Representative (DPAF), Festing Team member and Sports Representative, 2020 – 2023.',
    laurel: 'Campus',
  },
];

export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [
  { issuer: 'Google', name: 'Google Data Analytics Professional Certificate' },
  { issuer: 'Google', name: 'Google Advanced Data Analytics (in progress)' },
  { issuer: 'Coursera', name: 'AI Agents and Agentic AI with Python and Generative AI' },
  { issuer: 'Coursera', name: 'Python Programming Essentials' },
  { issuer: 'Coursera', name: 'Programming for Everybody (Python)' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'ml',
    title: 'Machine Learning',
    subtitle: 'Statistical learning to production models',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary' },
      { name: 'scikit-learn', mono: 'Sk' },
      { name: 'statsmodels', mono: 'Sm' },
      { name: 'pandas', mono: 'Pd' },
      { name: 'NumPy', mono: 'Np' },
      { name: 'matplotlib', mono: 'Mp' },
      { name: 'Jupyter', mono: 'Ju' },
      { name: 'Causal Inference', mono: 'Ci' },
    ],
  },
  {
    id: 'dl',
    title: 'Deep Learning',
    subtitle: 'Neural networks',
    skills: [
      { name: 'PyTorch', mono: 'Pt' },
      { name: 'TensorFlow', mono: 'Tf' },
      { name: 'Keras', mono: 'Ks' },
    ],
  },
  {
    id: 'nlp',
    title: 'NLP & LLMs',
    subtitle: 'Text, language models and data collection',
    skills: [
      { name: 'Hugging Face', mono: 'Hf' },
      { name: 'LLM APIs', mono: 'Ll' },
      { name: 'NLTK', mono: 'Nl' },
      { name: 'spaCy', mono: 'Sc' },
      { name: 'BeautifulSoup', mono: 'Bs' },
      { name: 'REST APIs', mono: 'Ap' },
    ],
  },
  {
    id: 'agents',
    title: 'Agentic AI',
    subtitle: 'Agents and generative AI',
    skills: [
      { name: 'AI Agents', mono: 'Ag' },
      { name: 'Generative AI', mono: 'Ga' },
      { name: 'Amazon Bedrock', mono: 'Br' },
      { name: 'Strands Agents', mono: 'Sa' },
    ],
  },
  {
    id: 'mlops',
    title: 'MLOps & Cloud',
    subtitle: 'Shipping models',
    skills: [
      { name: 'MLflow', mono: 'Mf' },
      { name: 'Docker', mono: 'Dk' },
      { name: 'FastAPI', mono: 'Fa' },
      { name: 'Streamlit', mono: 'St' },
      { name: 'AWS', mono: 'Aw' },
      { name: 'Git / GitHub', mono: 'Gt' },
    ],
  },
  {
    id: 'data',
    title: 'Data & Optimization',
    subtitle: 'Databases and operations research',
    skills: [
      { name: 'SQL', mono: 'Sq' },
      { name: 'MySQL', mono: 'My' },
      { name: 'Data Modeling', mono: 'Er' },
      { name: 'PuLP', mono: 'Lp' },
      { name: 'Excel Solver', mono: 'Xs' },
      { name: 'R', mono: 'R' },
    ],
  },
  {
    id: 'bi',
    title: 'BI & Automation',
    subtitle: 'From the Walmart years',
    skills: [
      { name: 'Power BI', mono: 'Bi' },
      { name: 'Tableau', mono: 'Tb' },
      { name: 'Excel & VBA', mono: 'Vb' },
      { name: 'Power Automate', mono: 'Pa' },
      { name: 'Workday HRIS', mono: 'Wd' },
      { name: 'ServiceNow', mono: 'Sn' },
    ],
  },
  {
    id: 'web',
    title: 'Web',
    subtitle: 'Building the tools',
    skills: [
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'JavaScript', mono: 'Js' },
    ],
  },
];

/** Shown when a skill card is hovered or tapped: where the skill shows up across courses and projects. */
export const skillEvidence: Record<string, string[]> = {
  Python: ['Every MMA course', 'Cheater Detection', 'Store Sales Forecasting', 'Perfect Pair'],
  'scikit-learn': ['Store Sales Forecasting', 'Claim Cost Prediction', 'INSY 674 Enterprise Data Science'],
  statsmodels: ['MGSC 661 Multivariate Statistics', 'SafePlate TO'],
  pandas: ['Every MMA course'],
  NumPy: ['MGSC 661 labs', 'Store Sales Forecasting'],
  matplotlib: ['MGSC 661 labs', 'Store Sales Forecasting'],
  Jupyter: ['MGSC 661 labs', 'INSY 674 notebooks'],
  'Causal Inference': ['INSY 674 Assignment 2'],
  PyTorch: ['MGSC 673 Intro to AI & Deep Learning', 'Cheater Detection'],
  TensorFlow: ['MGSC 673 Intro to AI & Deep Learning'],
  Keras: ['MGSC 673 Intro to AI & Deep Learning'],
  'Hugging Face': ['INSY 669 Text Analytics'],
  'LLM APIs': ['INSY 669 Text Analytics', 'Perfect Pair', 'Multi-Market Trading Agent'],
  NLTK: ['INSY 669 Text Analytics'],
  spaCy: ['INSY 669 Text Analytics'],
  BeautifulSoup: ['INSY 669 Text Analytics: web scraping'],
  'REST APIs': ['INSY 669 Text Analytics: API data collection'],
  'Amazon Bedrock': ['Perfect Pair: Claude on Bedrock with AgentCore'],
  'Strands Agents': ['Perfect Pair'],
  'AI Agents': ['Perfect Pair', 'Multi-Market Trading Agent', 'AI Agents and Agentic AI certificate'],
  'Generative AI': ['Perfect Pair', 'Walmart Global Tech: 3 Gen AI solutions, 15,000+ cases'],
  MLflow: ['INSY 674 ML in Production'],
  Docker: ['INSY 674 ML in Production'],
  FastAPI: ['INSY 674 ML in Production'],
  Streamlit: ['INSY 674 ML in Production'],
  AWS: ['Perfect Pair: Claude on Amazon Bedrock, AgentCore'],
  'Git / GitHub': ['Claim Cost Prediction', 'This portfolio'],
  SQL: ['MMA database course'],
  MySQL: ['MMA database course'],
  'Data Modeling': ['MMA database course: ER modeling'],
  PuLP: ['MMA operations research'],
  'Excel Solver': ['MMA operations research'],
  'Power BI': ['Walmart Global Tech: reporting suites for trend analysis and forecasting'],
  Tableau: ['MMA coursework'],
  'Excel & VBA': ['Walmart Global Tech: 40% less manual effort'],
  'Power Automate': ['McGill Faculty of Law'],
  'Workday HRIS': ['Walmart Global Tech, Recruitment Services'],
  ServiceNow: ['Walmart Global Tech: 12 Excel processes moved into ServiceNow and Power BI'],
  R: ['MMA coursework'],
  JavaScript: ['Docket'],
  HTML: ['Docket', 'This portfolio'],
  CSS: ['Docket', 'This portfolio'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Beginning',
    period: '2020 – 2023',
    synopsis: 'BCom Honours in Accounting and Finance at Kristu Jayanti College, Bangalore.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Foundation',
        description: 'BCom Honours in Accounting and Finance, finishing with a CGPA of 8.45 / 10.',
        tags: ['BCom Honours', 'Finance'],
        runtime: 'May 2020 – Jun 2023',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'The Organiser',
        description: 'Social Media Representative (DPAF), Festing Team member and Sports Representative on campus.',
        tags: ['Leadership', 'Events'],
        runtime: 'Aug 2020 – Jul 2023',
        palette: crimson,
      },
    ],
  },
  {
    number: 2,
    title: 'The Bank',
    period: '2023',
    synopsis: 'A first job in banking, on the wealth and trade side at ICICI Bank.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Banker',
        description: 'Deputy Manager II, Wealth & Trade at ICICI Bank.',
        tags: ['Banking', 'Wealth & Trade'],
        runtime: 'Jul – Oct 2023',
        palette: ocean,
      },
    ],
  },
  {
    number: 3,
    title: 'People Services',
    period: '2023 – 2026',
    synopsis: 'Close to three years in Recruitment Services at Walmart Global Tech, from Process Specialist to Senior Analyst.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Specialist',
        description: 'Process Specialist in Recruitment Services, working in Workday HRIS.',
        tags: ['Workday', 'Recruitment'],
        runtime: 'Nov 2023 – Apr 2024',
        palette: violet,
      },
      {
        code: 'S03 E02',
        title: 'The Analyst',
        description: 'Analyst, People Services Generalist: VBA and macro automation, Power BI reporting and Gen AI solutions.',
        tags: ['Power BI', 'VBA', 'Gen AI'],
        runtime: 'Apr 2024 – Feb 2026',
        palette: jade,
      },
      {
        code: 'S03 E03',
        title: 'The Senior Analyst',
        description: 'Promoted to Senior Analyst, with two consecutive Exemplary ratings and four Bravo awards along the way.',
        tags: ['Exemplary ×2', 'Bravo ×4'],
        runtime: 'Feb – Jun 2026',
        palette: crimson,
      },
    ],
  },
  {
    number: 4,
    title: 'Montreal',
    period: '2026 – Present',
    synopsis: 'A move from India to Quebec for the Master of Management Analytics at McGill.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The ML Engineer',
        description: 'Master of Management Analytics at McGill: statistical learning, deep learning, text analytics and ML in production.',
        tags: ['McGill MMA', 'PyTorch', 'scikit-learn', 'NLP'],
        runtime: 'Jul 2026 – Aug 2027',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'The Hackathon',
        description: 'Builds Perfect Pair, an agentic returns desk, which wins the Product Fit prize at the BSRM × ALDO Retail Gen AI Hackathon.',
        tags: ['Agentic AI', 'AWS', 'Product Fit'],
        runtime: 'Oct 2026',
        palette: amber,
      },
      {
        code: 'S04 E03',
        title: 'The Builder',
        description: 'Joins McGill’s Faculty of Law as Exam Systems Documentation & Training Assistant, and builds Docket and Power Automate flows for the Student Affairs Office.',
        tags: ['Power Automate', 'Docket'],
        runtime: 'Nov 2026 – Present',
        palette: ocean,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'Finishing the MMA and the AtkinsRéalis capstone, and heading into AI and ML engineering.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Capstone',
        description: 'Team lead and solutions architect on the MMA capstone with AtkinsRéalis.',
        tags: ['Capstone', 'Team lead'],
        runtime: 'In production',
        palette: violet,
      },
      {
        code: 'S05 E02',
        title: 'The Next Role',
        description: 'Looking for AI and ML engineering roles.',
        tags: ['Machine Learning', 'AI Engineering'],
        runtime: 'Coming 2027',
        palette: jade,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Now studying', title: 'McGill MMA', detail: 'Master of Management Analytics • Class of 2027', palette: crimson },
  { label: 'Hackathon prize', title: 'Product Fit', detail: 'Agentic AI • Perfect Pair • BSRM × ALDO', palette: amber },
  { label: 'Deep learning', title: 'PyTorch', detail: 'Cheater Detection • MGSC 673', palette: violet },
  { label: 'Machine learning', title: 'scikit-learn', detail: 'Store Sales Forecasting • INSY 674', palette: ocean },
  { label: 'Language', title: 'NLP & LLMs', detail: 'Hugging Face • spaCy • Text Analytics', palette: jade },
  { label: 'Shipping models', title: 'MLOps', detail: 'MLflow • Docker • FastAPI', palette: crimson },
  { label: 'Agents', title: 'Agentic AI', detail: 'Perfect Pair • Trading Agent', palette: amber },
  { label: 'Performance', title: '2× Exemplary', detail: 'Walmart Global Tech', palette: ocean },
  { label: 'Certified', title: 'Google Data Analytics', detail: 'Professional Certificate', palette: violet },
  { label: 'Primary language', title: 'Python', detail: 'Across every MMA course', palette: jade },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'McGill · MMA',
    lines: ['Master of Management Analytics, McGill University', 'July 2026 – August 2027', 'Before that: BCom Honours, Kristu Jayanti College'],
    chips: ['Class of 2027', 'CGPA 8.45'],
  },
  {
    kicker: 'Experience',
    title: 'Three years in',
    lines: ['ICICI Bank · Deputy Manager II, Wealth & Trade', 'Walmart Global Tech · Process Specialist → Analyst → Senior Analyst', 'McGill Faculty of Law · Exam Systems Assistant'],
  },
  {
    kicker: 'Skills',
    title: 'Models, end to end.',
    lines: ['Python · scikit-learn · statsmodels · PyTorch · TensorFlow', 'Hugging Face · spaCy · NLTK · LLM APIs · AI agents', 'MLflow · Docker · FastAPI · Streamlit · AWS'],
    chips: ['PyTorch', 'scikit-learn', 'Hugging Face', 'MLflow', 'Docker', 'AWS'],
  },
  {
    kicker: 'Projects',
    title: `${projects.length} Projects`,
    lines: ['Perfect Pair and Docket: agentic AI built with Claude', 'Cheater Detection: deep learning on PUBG match data', 'Store Sales Forecasting · Claim Cost Prediction · SafePlate TO · ICU Step-Down Risk'],
  },
  {
    kicker: 'Achievements',
    title: 'Top Moments',
    lines: ['Product Fit prize, BSRM × ALDO Hackathon', '2× Exemplary rating, Walmart Global Tech', '4 Bravo / Make A Difference awards'],
  },
  {
    kicker: 'Certified',
    title: 'Google Data Analytics',
    lines: ['Professional Certificate', 'Advanced Data Analytics in progress'],
  },
  {
    kicker: 'Current mission',
    title: 'AI / ML engineering',
    lines: ['Looking for AI and ML engineering roles'],
  },
];

export type ProfileId = 'joel' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'capstone' | 'originals' | 'models' | 'text' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'joel',
    name: 'Joel',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'capstone', 'originals', 'models', 'text', 'journey', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'capstone', 'originals', 'models', 'text', 'skills', 'moments', 'journey', 'about', 'picks'],
  },
  {
    id: 'developer',
    name: 'Builder',
    blurb: 'Projects & tools first',
    color: '#46e3a8',
    order: ['originals', 'capstone', 'models', 'text', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Story',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'capstone', 'originals', 'models', 'text', 'picks', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Who I am', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Agentic AI', card: 'Agentic AI', meta: `${projects.filter((p) => p.kind === 'agentic').length} solutions • Built with Claude`, palette: crimson },
  capstone: { nav: 'Capstone', card: 'Capstone', meta: 'AtkinsRéalis • Team lead', palette: ocean },
  text: { nav: 'Text Analytics', card: 'Text Analytics', meta: `${projects.filter((p) => p.kind === 'nlp').length} projects • INSY 669`, palette: jade },
  models: { nav: 'ML Projects', card: 'ML Projects', meta: `${projects.filter((p) => p.kind === 'ml').length} projects • Models & data`, palette: ocean },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 highlights', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • Everything on one page', palette: violet },
};
