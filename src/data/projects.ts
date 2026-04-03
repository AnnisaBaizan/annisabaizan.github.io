export interface ProjectDoc {
  label: string;
  file: string;
}

export interface ProjectPresentation {
  id: string;
  label: string;
}

export interface ProjectDemo {
  id: string;
  label: string;
}

export type ProjectStatus =
  | "completed"
  | "active"
  | "in-progress"
  | "development"
  | "rd"
  | "pending"
  | "upcoming"
  | "placeholder";

export interface Project {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  accent: string;
  status: ProjectStatus;
  statusLabel: string;
  category: "health" | "institutional" | "analytics";
  year: string;
  description: string;
  longDesc: string;
  tags: string[];
  stack: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    other?: string[];
  };
  features: { icon: string; title: string; desc: string }[];
  stats?: { num: string; label: string }[];
  docs?: ProjectDoc[];
  presentations?: ProjectPresentation[];
  demos?: ProjectDemo[];
}

export interface CmsSite {
  id: string;
  icon: string;
  title: string;
  institution: string;
  year: string;
  description: string;
  tags: string[];
  link: string;
}

export interface Tool {
  id: string;
  title: string;
  category: "automation" | "tool";
  icon: string;
  accent: string;
  description: string;
  tags: string[];
  year: string;
  link: string;
  highlight: string;
}

// ─── MAIN PROJECTS ───────────────────────────────────────────────────────────

const projects: Project[] = [
  {
    slug: "manrisk",
    title: "MANRISK",
    shortTitle: "MANRISK",
    icon: "⚠️",
    accent: "#ffc107",
    status: "upcoming",
    statusLabel: "Upcoming",
    category: "institutional",
    year: "2025",
    description: "Organizational risk management system for Poltekkes Kemenkes Palembang. Supports risk identification, activity tracking, monitoring & evaluation, heat map visualization, and quarterly reporting with role-based access control.",
    longDesc: "Systematic risk identification, assessment, and mitigation tracking for government institutions. Follows ISO 31000 risk management framework with heat map visualization and quarterly reporting.",
    tags: ["PHP","CodeIgniter 3","MySQL","Bootstrap 3","jQuery","Gentelella"],
    stack: {
      frontend: ["Bootstrap 3","jQuery","Gentelella"],
      backend:  ["PHP","CodeIgniter 3"],
      database: ["MySQL"],
    },
    features: [
      { icon: "⚠️", title: "Risk Registry",         desc: "Structured risk identification with category and owner assignment." },
      { icon: "🗺️", title: "Heat Map Visualization", desc: "Probability × impact matrix with visual heat map." },
      { icon: "🛡️", title: "Mitigation Plans",       desc: "Action plan tracking with responsible parties and deadlines." },
      { icon: "📊", title: "Quarterly Reports",       desc: "Automated quarterly risk management reports for oversight bodies." },
    ],
    stats: [],
    docs: [],
    presentations: [],
    demos: [],
  },
  {
    slug: "workplaceeval",
    title: "WorkPlaceEval",
    shortTitle: "WorkPlaceEval",
    icon: "📊",
    accent: "#ffab91",
    status: "active",
    statusLabel: "Active Development",
    category: "institutional",
    year: "2024–2025",
    description: "Comprehensive HR evaluation system for multi-company management. Supports competency assessment, attendance tracking, and performance reporting with a dual-backend architecture across multiple organizations.",
    longDesc: "Enterprise-scale HR operations platform. Competency assessment, attendance tracking, and performance reporting with dual-backend architecture managing multiple company entities.",
    tags: ["Laravel 10","PHP 8.1","MySQL 8.0","Bootstrap 5","Blade","Laravel Sanctum","Eloquent ORM","Soft UI Dashboard"],
    stack: {
      frontend: ["Bootstrap 5","Blade","Soft UI Dashboard"],
      backend:  ["Laravel 10","PHP 8.1","Laravel Sanctum"],
      database: ["MySQL 8.0"],
      other:    ["Eloquent ORM"],
    },
    features: [
      { icon: "📊", title: "Competency Assessment", desc: "Multi-dimensional competency evaluation with scoring rubrics and weighted criteria." },
      { icon: "🏢", title: "Multi-Company",         desc: "Single system managing multiple company entities with isolated data scopes." },
      { icon: "📅", title: "Attendance Tracking",   desc: "Integrated attendance with late/early tracking and deviation reporting." },
      { icon: "📈", title: "Performance Reports",   desc: "Automated performance summaries with exportable Excel/PDF reports." },
    ],
    stats: [
      { num: "3+",  label: "Company Entities" },
      { num: "50+", label: "Evaluation Criteria" },
      { num: "6",   label: "Report Types" },
    ],
    docs: [],
    presentations: [],
    demos: [],
  },
  {
    slug: "equalsimile",
    title: "EqualSmile",
    shortTitle: "EqualSmile",
    icon: "♿",
    accent: "#f48fb1",
    status: "development",
    statusLabel: "In Development",
    category: "health",
    year: "2024–2025",
    description: "Voice-guided web tool for visually impaired users to navigate dental health information. Full ARIA compliance, keyboard-only navigation, text-to-speech output, and a minimal distraction-free interface built with the Web Speech API.",
    longDesc: "Accessibility-first dental health information platform. Full ARIA compliance, keyboard-only navigation, min-to-speech output, and a minimal distraction-free interface built with the Web Speech API.",
    tags: ["Laravel 9","PHP 8.0","Vue 3","MySQL","Bootstrap 5","Laravel Sanctum","WCAG 2.1"],
    stack: {
      frontend: ["Vue 3","Bootstrap 5","HTML/CSS"],
      backend:  ["Laravel 9","PHP 8.0","Laravel Sanctum"],
      database: ["MySQL"],
      other:    ["Web Speech API","WCAG 2.1"],
    },
    features: [
      { icon: "♿", title: "Full ARIA Compliance",  desc: "Complete screen reader support with ARIA landmarks and live regions." },
      { icon: "⌨️", title: "Keyboard Navigation",  desc: "100% keyboard-navigable interface with visible focus indicators." },
      { icon: "🔊", title: "Text-to-Speech",        desc: "Integrated Web Speech API for content narration." },
      { icon: "🦷", title: "Dental Health Info",    desc: "Structured dental health content optimized for accessibility." },
    ],
    stats: [],
    docs: [],
    presentations: [],
    demos: [],
  },
  {
    slug: "apppendamping",
    title: "App Pendamping",
    shortTitle: "AppPendamping",
    icon: "💰",
    accent: "#80cbc4",
    status: "pending",
    statusLabel: "Pending",
    category: "institutional",
    year: "2024",
    description: "Institutional budget planning & realization management system with a 7-level hierarchical budget structure. Features request workflows, multi-step approval, realization tracking, CSV import, audit trail, and role-based access.",
    longDesc: "Government financial management platform. 7-level hierarchical budget structure with multi-step approval workflows, realization tracking, CSV import, audit trail, and role-based access.",
    tags: ["React 18","TypeScript","Vite","Tailwind CSS","DaisyUI","FastAPI","MySQL","Docker","Chart.js","JWT Auth"],
    stack: {
      frontend: ["React 18","TypeScript","Vite","Tailwind CSS","DaisyUI","Chart.js"],
      backend:  ["FastAPI","Python"],
      database: ["MySQL"],
      other:    ["Docker","JWT Auth"],
    },
    features: [
      { icon: "📊", title: "Budget Planning",      desc: "7-level hierarchical budget structure with top-down allocation." },
      { icon: "✅", title: "Multi-step Approval",  desc: "Request workflows with multi-level approval and audit trail." },
      { icon: "📈", title: "Realization Tracking", desc: "Real-time budget realization monitoring with deviation alerts." },
      { icon: "📤", title: "CSV Import",           desc: "Bulk data import from Excel/CSV with validation and error reporting." },
    ],
    stats: [],
    docs: [],
    presentations: [],
    demos: [],
  },
  {
    slug: "calriskdentistry",
    title: "CalRiskDentistry",
    shortTitle: "CalRiskDentistry",
    icon: "🔬",
    accent: "#ce93d8",
    status: "rd",
    statusLabel: "R&D",
    category: "health",
    year: "2024",
    description: "Evidence-based Clinical Decision Support System for dental calculus and caries risk stratification. Combines clinical scoring algorithms with intelligent patient risk profiling and a structured knowledge base.",
    longDesc: "Clinical scoring algorithms, patient risk profiling, and a structured medical knowledge base. Implements evidence-based dentistry principles in a usable digital tool.",
    tags: ["PHP","CSS","JavaScript","Clinical Scoring","Risk Stratification","CDSS"],
    stack: {
      frontend: ["HTML/CSS","JavaScript"],
      backend:  ["PHP"],
      database: ["MySQL"],
      other:    ["Clinical Algorithms","CDSS"],
    },
    features: [
      { icon: "🔬", title: "Risk Stratification",   desc: "Evidence-based scoring for calculus and caries risk levels (low/medium/high)." },
      { icon: "🧬", title: "Clinical Algorithms",   desc: "Implemented Löe & Silness, DMFT/DMFS, and custom risk matrices." },
      { icon: "👤", title: "Patient Profiling",     desc: "Longitudinal risk tracking with trend analysis over multiple visits." },
      { icon: "📚", title: "Knowledge Base",        desc: "Structured medical knowledge with clinical references and evidence grades." },
    ],
    stats: [
      { num: "3",   label: "Risk Levels" },
      { num: "5+",  label: "Clinical Algorithms" },
    ],
    docs: [],
    presentations: [],
    demos: [],
  },
  {
    slug: "spkvikor",
    title: "SPKVIKOR",
    shortTitle: "SPKVIKOR",
    icon: "🎯",
    accent: "#b0bec5",
    status: "placeholder",
    statusLabel: "Placeholder",
    category: "analytics",
    year: "2024",
    description: "Customer eligibility and fraud detection system using VIKOR multi-criteria decision making method. Assesses applicant risk profiles and creditworthiness based on weighted scoring criteria for institutional lending decisions.",
    longDesc: "Multi-criteria decision support system using VIKOR method. Assesses applicant eligibility and flags fraud risk based on weighted scoring criteria for institutional lending.",
    tags: ["PHP","CodeIgniter","MySQL","VIKOR Method","Decision Support"],
    stack: {
      frontend: ["HTML/CSS","JavaScript"],
      backend:  ["PHP","CodeIgniter"],
      database: ["MySQL"],
      other:    ["VIKOR Algorithm"],
    },
    features: [
      { icon: "🎯", title: "VIKOR Scoring",       desc: "Multi-criteria decision making with weighted criteria and compromise ranking." },
      { icon: "🔍", title: "Eligibility Check",   desc: "Automated applicant eligibility assessment based on defined thresholds." },
      { icon: "⚠️", title: "Fraud Detection",     desc: "Risk flag system for anomalous applicant profiles." },
      { icon: "📊", title: "Decision Reports",    desc: "Ranked results with score breakdown for each applicant." },
    ],
    stats: [],
    docs: [],
    presentations: [],
    demos: [],
  },
  {
    slug: "sinta-scraper",
    title: "SINTA Scraper & Scoring",
    shortTitle: "SINTA Scraper",
    icon: "🕷️",
    accent: "#ef9a9a",
    status: "rd",
    statusLabel: "R&D",
    category: "analytics",
    year: "2024",
    description: "Automated scraping tool for SINTA (Science and Technology Index) that extracts researcher publication data and computes weighted scores based on journal quartile (Q1–Q4), citation counts, and publication metrics per author.",
    longDesc: "Targets SINTA portal, parses researcher profiles, aggregates publication metadata, and applies a configurable scoring algorithm to rank researchers by research output quality.",
    tags: ["Python","Flask","Web Scraping","Scoring Algorithm"],
    stack: {
      frontend: ["HTML/CSS","Jinja2"],
      backend:  ["Python","Flask"],
      database: ["SQLite"],
      other:    ["BeautifulSoup","Selenium"],
    },
    features: [
      { icon: "🕷️", title: "SINTA Scraping",   desc: "Automated extraction of researcher profiles and publication lists from SINTA portal." },
      { icon: "📊", title: "Weighted Scoring",  desc: "Configurable scoring by quartile (Q1–Q4), citations, and publication count." },
      { icon: "👤", title: "Per-Author Metrics",desc: "Individual researcher scorecard with publication breakdown." },
      { icon: "📤", title: "Export",            desc: "Export ranked results to CSV for institutional reporting." },
    ],
    stats: [],
    docs: [],
    presentations: [],
    demos: [],
  },
  {
    slug: "simkesgi",
    title: "SIMKESGI",
    shortTitle: "SIMKESGI",
    icon: "🦷",
    accent: "#80cbc4",
    status: "completed",
    statusLabel: "Completed",
    category: "health",
    year: "2023",
    description: "Dental Health Information Management System for Poltekkes Kemenkes Palembang. Full-stack web application covering patient records, treatment data, role-based access, and dental health statistics with automated reporting.",
    longDesc: "Patient records, treatment data, role-based access, and automated dental health statistics reporting. Built as an institutional innovation for the Ministry of Health.",
    tags: ["Laravel","PHP","MySQL","Vue.js","Blade","Laravel Sanctum","REST API"],
    stack: {
      frontend: ["Vue.js","Bootstrap","Blade"],
      backend:  ["Laravel","PHP","REST API"],
      database: ["MySQL","PostgreSQL"],
      other:    ["Docker","Git","Laravel Sanctum"],
    },
    features: [
      { icon: "🦷", title: "Patient Records",    desc: "Comprehensive dental patient management with treatment history and status tracking." },
      { icon: "📊", title: "Health Statistics",  desc: "Automated reporting for dental health statistics and institutional KPIs." },
      { icon: "🔐", title: "Role-Based Access",  desc: "Multi-role system: admin, dokter, perawat, and reporting staff." },
      { icon: "📋", title: "Treatment Data",     desc: "Structured treatment records with diagnosis coding and outcome tracking." },
    ],
    stats: [
      { num: "500+", label: "Patient Records" },
      { num: "4",    label: "User Roles" },
      { num: "12+",  label: "Report Types" },
    ],
    docs: [
      { label: "TOR/KAK Inovasi",         file: "TOR-KAK-inovasi.pdf" },
      { label: "SOP Inovasi",             file: "SOP-inovasi.pdf" },
      { label: "Buku Panduan",            file: "buku-panduan.pdf" },
      { label: "Bukti Pemanfaatan",       file: "bukti-pemanfaatan.pdf" },
      { label: "Evaluasi Inovasi",        file: "evaluasi-inovasi.pdf" },
      { label: "Surat Pernyataan Kepala", file: "surat-pernyataan-kepala-satker.pdf" },
      { label: "Executive Summary",       file: "executive-summary.pdf" },
    ],
    presentations: [
      { id: "5W1H",                   label: "5W1H" },
      { id: "teknis-internal",        label: "Teknis Internal" },
      { id: "teknis-eksternal",       label: "Teknis Eksternal" },
      { id: "institutional-showcase", label: "Institutional Showcase" },
      { id: "technical-design",       label: "Technical Design" },
    ],
    demos: [
      { id: "matriks-before-after", label: "Matriks Before-After" },
      { id: "flowchart-sistem",     label: "Flowchart Sistem" },
      { id: "code-review",          label: "Code Review" },
    ],
  },
  {
    slug: "ekmgs",
    title: "EKMGS",
    shortTitle: "EKMGS",
    icon: "🏛️",
    accent: "#81d4fa",
    status: "completed",
    statusLabel: "Completed",
    category: "institutional",
    year: "2023",
    description: "Integrated institutional monitoring system with real-time data tracking, structured data logging, and automated alert notifications for resource management across departments.",
    longDesc: "Institutional monitoring system with real-time data tracking, structured data logging, and automated alert notifications for resource management across departments.",
    tags: ["PHP","MySQL","Ajax","Chart.js","Bootstrap"],
    stack: {
      frontend: ["Bootstrap","HTML/CSS","Chart.js"],
      backend:  ["PHP","Ajax"],
      database: ["MySQL"],
    },
    features: [
      { icon: "📡", title: "Real-time Tracking",    desc: "Live data monitoring with auto-refresh for resource status." },
      { icon: "🔔", title: "Alert Notifications",   desc: "Automated alerts when resource thresholds are exceeded." },
      { icon: "📊", title: "Data Visualization",    desc: "Chart.js dashboards for multi-department data comparison." },
      { icon: "📋", title: "Structured Logging",    desc: "Timestamped activity logs with department-level granularity." },
    ],
    stats: [],
    docs: [],
    presentations: [],
    demos: [],
  },
  {
    slug: "elabmaintenance",
    title: "E-Lab Maintenance",
    shortTitle: "E-Lab Maintenance",
    icon: "🔧",
    accent: "#ffe082",
    status: "completed",
    statusLabel: "Completed",
    category: "institutional",
    year: "2023",
    description: "Digital laboratory equipment maintenance tracking system for academic labs. Streamlines maintenance schedules, repair logs, and equipment health records — eliminating paper-based tracking workflows.",
    longDesc: "Preventive and corrective maintenance management for laboratory equipment with scheduling, work orders, and compliance reporting.",
    tags: ["Laravel 9","PHP 8.0","Vue 3","MySQL","Bootstrap 5","Vite","Task Scheduler"],
    stack: {
      frontend: ["Vue 3","Bootstrap 5","Vite"],
      backend:  ["Laravel 9","PHP 8.0"],
      database: ["MySQL"],
      other:    ["Task Scheduler"],
    },
    features: [
      { icon: "🔧", title: "Equipment Registry",    desc: "Complete inventory of laboratory equipment with specs and history." },
      { icon: "📅", title: "Maintenance Scheduling", desc: "Preventive maintenance schedules with automated reminders." },
      { icon: "📋", title: "Work Orders",            desc: "Corrective maintenance work order management and tracking." },
      { icon: "📊", title: "Compliance Reports",     desc: "Maintenance compliance reporting for accreditation purposes." },
    ],
    stats: [],
    docs: [],
    presentations: [],
    demos: [],
  },
  {
    slug: "laravelclinic",
    title: "Laravel Dental Clinic System",
    shortTitle: "Laravel Clinic",
    icon: "🏥",
    accent: "#f48fb1",
    status: "completed",
    statusLabel: "Completed",
    category: "health",
    year: "2023",
    description: "Full-featured web information system and public profile for a dental clinic practice. Covers patient scheduling, clinic profile, service listings, and a complete admin dashboard for appointment and content management.",
    longDesc: "Full-stack clinic management covering patient scheduling, clinic profile, service listings, and a complete admin dashboard for patient and appointment management.",
    tags: ["Laravel","PHP 8","MySQL","Bootstrap 5","Blade","Eloquent ORM"],
    stack: {
      frontend: ["Bootstrap 5","Blade","HTML/CSS"],
      backend:  ["Laravel","PHP 8"],
      database: ["MySQL"],
      other:    ["Eloquent ORM"],
    },
    features: [
      { icon: "🏥", title: "Patient Registration", desc: "Digital patient registration with complete profile management." },
      { icon: "📅", title: "Appointment Scheduling",desc: "Online appointment booking with admin management dashboard." },
      { icon: "📋", title: "Clinic Profile",        desc: "Dynamic clinic info, services, and doctor profile pages." },
      { icon: "⚙️", title: "Admin Dashboard",       desc: "Complete CMS for content and appointment management." },
    ],
    stats: [],
    docs: [],
    presentations: [],
    demos: [],
  },
  {
    slug: "vbnetmedical",
    title: "VB.Net Medical Records App",
    shortTitle: "VB.NET Medical",
    icon: "💉",
    accent: "#90caf9",
    status: "completed",
    statusLabel: "Completed",
    category: "health",
    year: "2022",
    description: "Windows desktop application for managing patient medical records in a dental practice. Handles patient registration, dental history logging, treatment records, appointment scheduling, and data export with a SQL Server backend.",
    longDesc: "Windows-based medical records system. Handles patient registration, dental history logging, treatment records, appointment scheduling, and data export — designed for environments without reliable internet.",
    tags: ["VB.NET","Visual Studio 2019",".NET Framework","MariaDB","Windows Forms","XAMPP"],
    stack: {
      frontend: ["Windows Forms","VB.NET"],
      backend:  ["VB.NET",".NET Framework"],
      database: ["MariaDB","XAMPP"],
    },
    features: [
      { icon: "💉", title: "Medical Records",  desc: "Patient medical history with diagnosis and treatment records." },
      { icon: "📋", title: "Offline-First",    desc: "Full functionality without internet — designed for remote clinics." },
      { icon: "🔍", title: "Patient Search",   desc: "Fast patient lookup by ID, name, or date of birth." },
      { icon: "📊", title: "Basic Reports",    desc: "Daily and monthly visit reports with simple analytics." },
    ],
    stats: [],
    docs: [],
    presentations: [],
    demos: [],
  },
];

// ─── CMS & WEB PRESENCE ──────────────────────────────────────────────────────

export const cmsSites: CmsSite[] = [
  {
    id: "upk-poltekkes",
    icon: "📈",
    title: "UPK — Poltekkes Palembang",
    institution: "Poltekkes Kemenkes Palembang",
    year: "In Progress",
    description: "Website for the UPK (Unit Pengembangan Kompetensi) at Poltekkes Kemenkes Palembang. Currently in progress.",
    tags: ["WordPress","PHP"],
    link: "https://upk.poltekkespalembang.ac.id",
  },
  {
    id: "kebidanan-poltekkes",
    icon: "🤰",
    title: "Kebidanan — Poltekkes Palembang",
    institution: "Poltekkes Kemenkes Palembang",
    year: "Active",
    description: "Official website for the Midwifery department at Poltekkes Kemenkes Palembang.",
    tags: ["WordPress","PHP"],
    link: "https://kebidanan.poltekkespalembang.ac.id",
  },
  {
    id: "sipil-polsri",
    icon: "🏗️",
    title: "Teknik Sipil — POLSRI",
    institution: "Politeknik Negeri Sriwijaya",
    year: "Mar–Apr 2021",
    description: "Official website for the Civil Engineering major. Academic info, faculty profiles, and department news.",
    tags: ["WordPress","PHP"],
    link: "https://sipil.polsri.ac.id",
  },
  {
    id: "admbisnis-polsri",
    icon: "💼",
    title: "Adm. Bisnis — POLSRI",
    institution: "Politeknik Negeri Sriwijaya",
    year: "Oct–Nov 2020",
    description: "Official website for the Business Administration major. Academic information and department profile.",
    tags: ["WordPress","PHP"],
    link: "https://admbisnis.polsri.ac.id",
  },
  {
    id: "mesin-polsri",
    icon: "⚙️",
    title: "Teknik Mesin — POLSRI",
    institution: "Politeknik Negeri Sriwijaya",
    year: "Sep–Oct 2020",
    description: "Official website for the Mechanical Engineering major. Department profile and academic content management.",
    tags: ["WordPress","PHP"],
    link: "https://mesin.polsri.ac.id",
  },
];

// ─── TOOLS & AUTOMATION ──────────────────────────────────────────────────────

export const tools: Tool[] = [
  {
    id: "sakti-automation",
    title: "SAKTI Automation",
    category: "automation",
    icon: "⚡",
    accent: "#f0c040",
    description: "Tampermonkey UserScript automating PDN dropdown selection in SAKTI, the Ministry of Finance financial management system. Paired with PasteBridge — a Python + Flask + pyautogui desktop app (CustomTkinter GUI) that simulates real keyboard input to bypass Angular's trusted-input restriction.",
    tags: ["Python","Flask","Tampermonkey","pyautogui","CustomTkinter"],
    year: "2024",
    link: "https://github.com/AnnisaBaizan/HelpfullScript/tree/main/Sakti",
    highlight: "Bypasses Angular trusted-input restriction via real Ctrl+V simulation using pyautogui",
  },
  {
    id: "siakad-automation",
    title: "SIAKAD Automation Scripts (AMS)",
    category: "automation",
    icon: "🎓",
    accent: "#a5d6a7",
    description: "Collection of Tampermonkey userscripts for batch operations in the Student Information System (SIAKAD) at Poltekkes Palembang. Automates repetitive data entry, batch status updates, and multi-record operations that normally require manual clicks through the web interface.",
    tags: ["JavaScript","Tampermonkey","localStorage","DOM API"],
    year: "2024",
    link: "https://github.com/AnnisaBaizan/HelpfullScript",
    highlight: "Reduces multi-step batch operations from hours to minutes via script injection",
  },
  {
    id: "google-form-autofill",
    title: "Google Form Autofill",
    category: "automation",
    icon: "📋",
    accent: "#ce93d8",
    description: "Python + Playwright automation that reads data from Excel spreadsheets via pandas and automatically fills Google Forms. Handles multi-page forms, dropdown selectors, radio buttons, and checkboxes — ideal for bulk data submission workflows.",
    tags: ["Python","Playwright","pandas","openpyxl"],
    year: "2024",
    link: "https://github.com/AnnisaBaizan/HelpfullScript",
    highlight: "Reads Excel rows and maps each to form fields with smart selector matching",
  },
  {
    id: "bmn-repair-request",
    title: "Surat Usulan BMN",
    category: "tool",
    icon: "🔧",
    accent: "#90caf9",
    description: "Web app for digitizing official state property (BMN) improvement proposal letters at Poltekkes Palembang. Real-time letter preview as users type, auto-generated letter numbering from Google Sheets, 4-photo damage uploads to Google Drive, and multi-channel notifications via HTML email + WhatsApp (CallMeBot / Fonnte / Meta Cloud API). Optimized for F4 two-page institutional printing.",
    tags: ["HTML","CSS","JavaScript","Google Apps Script","Google Sheets","Google Drive","WhatsApp API"],
    year: "2024",
    link: "https://github.com/AnnisaBaizan/HelpfullScript/tree/main/gworkspace-webapps/surat-usulan-bmn",
    highlight: "Zero-server: GAS handles storage, Drive photo backup, and 3-provider WhatsApp notifications — 100% free",
  },
  {
    id: "sheets-pdf-exporter",
    title: "Google Sheets PDF Exporter",
    category: "tool",
    icon: "📄",
    accent: "#ffe082",
    description: "Google Apps Script with a custom Sheets menu that exports formatted PDF reports. Temporarily hides extra columns and adjusts print ranges before exporting, then restores the sheet to its original state — producing clean, professional PDFs without manual layout work.",
    tags: ["Google Apps Script","JavaScript","Google Sheets API"],
    year: "2023",
    link: "https://github.com/AnnisaBaizan/HelpfullScript",
    highlight: "Hides/restores columns dynamically so exported PDFs contain only relevant data",
  },
  {
    id: "qr-code-generator",
    title: "QR Code Generator",
    category: "tool",
    icon: "🔲",
    accent: "#80cbc4",
    description: "Two standalone single-file HTML tools for generating QR codes with embedded logos. Uses HTML5 Canvas API and QRCode.js for client-side generation — no backend or dependencies to install. Supports custom logo overlay, size adjustment, and PNG download.",
    tags: ["HTML","Canvas API","QRCode.js","JavaScript"],
    year: "2023",
    link: "https://github.com/AnnisaBaizan/HelpfullScript",
    highlight: "Entirely client-side — single HTML file, no install, works offline",
  },
];

export default projects;
export const getProject = (slug: string) => projects.find(p => p.slug === slug);
