/**
 * project-data.js
 * Tool & automation project data for Annisa Baizan's portfolio.
 * Loaded as window.TOOLS_DATA (global array).
 */

window.PROJECTS_DATA = [
  {
    id: 'manrisk',
    color: 'card-amber',
    status: 'upcoming',
    statusLabel: 'Upcoming',
    name: 'MANRISK',
    desc: 'Organizational risk management system for Poltekkes Kemenkes Palembang. Supports risk identification, activity tracking, monitoring & evaluation, heat map visualization, and quarterly reporting with role-based access control.',
    stack: ['PHP', 'CodeIgniter 3', 'MySQL', 'Bootstrap 3', 'jQuery', 'Gentelella'],
    link: 'manrisk/index.html',
    year: '2025'
  },
  {
    id: 'workplaceeval',
    color: 'card-peach',
    status: 'active',
    statusLabel: 'Active Development',
    name: 'WorkPlaceEval',
    desc: 'Comprehensive HR evaluation system for multi-company management. Supports competency assessment, attendance tracking, and performance reporting with a dual-backend architecture across multiple organizations.',
    stack: ['Laravel 10', 'PHP 8.1', 'MySQL 8.0', 'Bootstrap 5', 'Blade', 'Laravel Sanctum', 'Eloquent ORM', 'Soft UI Dashboard'],
    link: 'workplaceeval/index.html',
    year: '2024–2025'
  },
  {
    id: 'equalsimile',
    color: 'card-pink',
    status: 'development',
    statusLabel: 'In Development',
    name: 'EqualSmile',
    desc: 'Voice-guided web tool for visually impaired users to navigate dental health information. Full ARIA compliance, keyboard-only navigation, text-to-speech output, and a minimal distraction-free interface built with the Web Speech API.',
    stack: ['Laravel 9', 'PHP 8.0', 'Vue 3', 'MySQL', 'Bootstrap 5', 'Laravel Sanctum', 'WCAG 2.1'],
    link: 'equalsimile/index.html',
    year: '2024–2025'
  },
  {
    id: 'apppendamping',
    color: 'card-teal',
    status: 'pending',
    statusLabel: 'Pending',
    name: 'App Pendamping',
    desc: 'Institutional budget planning & realization management system with a 7-level hierarchical budget structure. Features request workflows, multi-step approval, realization tracking, CSV import, audit trail, and role-based access.',
    stack: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'DaisyUI', 'FastAPI', 'MySQL', 'Docker', 'Chart.js', 'JWT Auth'],
    link: 'apppendamping/index.html',
    year: '2024'
  },
  {
    id: 'calriskdentistry',
    color: 'card-lavender',
    status: 'rd',
    statusLabel: 'R&D',
    name: 'CalRiskDentistry',
    desc: 'Evidence-based Clinical Decision Support System for dental calculus and caries risk stratification. Combines clinical scoring algorithms with intelligent patient risk profiling and a structured knowledge base.',
    stack: ['PHP', 'CSS', 'JavaScript', 'Clinical Scoring', 'Risk Stratification', 'CDSS'],
    link: 'calriskdentistry/index.html',
    year: '2024'
  },
  {
    id: 'spkvikor',
    color: 'card-slate',
    status: 'placeholder',
    statusLabel: 'Placeholder',
    name: 'SPKVIKOR',
    desc: 'Customer eligibility and fraud detection system using VIKOR multi-criteria decision making method. Assesses applicant risk profiles and creditworthiness based on weighted scoring criteria for institutional lending decisions.',
    stack: ['PHP', 'CodeIgniter', 'MySQL', 'VIKOR Method', 'Decision Support'],
    link: null,
    noLinkText: 'Documentation in progress',
    year: '2024'
  },
  {
    id: 'sinta-scraper',
    color: 'card-lavender',
    status: 'placeholder',
    statusLabel: 'R&D',
    name: 'SINTA Scraper & Scoring',
    desc: 'Automated scraping tool for SINTA (Science and Technology Index) that extracts researcher publication data and computes weighted scores based on journal quartile (Q1–Q4), citation counts, and publication metrics per author.',
    stack: ['Python', 'Flask', 'Web Scraping', 'Scoring Algorithm'],
    link: null,
    noLinkText: 'README coming soon',
    year: '2024'
  },
  {
    id: 'simkesgi',
    color: 'card-mint',
    status: 'completed',
    statusLabel: 'Completed',
    name: 'SIMKESGI',
    desc: 'Dental Health Information Management System for Poltekkes Kemenkes Palembang. Full-stack web application covering patient records, treatment data, role-based access, and dental health statistics with automated reporting.',
    stack: ['Laravel', 'PHP', 'MySQL', 'Vue.js', 'Blade', 'Laravel Sanctum', 'REST API'],
    link: 'simkesgi/index.html',
    year: '2023'
  },
  {
    id: 'ekmgs',
    color: 'card-sky',
    status: 'completed',
    statusLabel: 'Completed',
    name: 'EKMGS',
    desc: 'Integrated institutional monitoring system with real-time data tracking, structured data logging, and automated alert notifications for resource management across departments.',
    stack: ['PHP', 'MySQL', 'Ajax', 'Chart.js', 'Bootstrap'],
    link: 'ekmgs/index.html',
    year: '2023'
  },
  {
    id: 'elabmaintenance',
    color: 'card-sage',
    status: 'completed',
    statusLabel: 'Completed',
    name: 'E-Lab Maintenance',
    desc: 'Digital laboratory equipment maintenance tracking system for academic labs. Streamlines maintenance schedules, repair logs, and equipment health records — eliminating paper-based tracking workflows.',
    stack: ['Laravel 9', 'PHP 8.0', 'Vue 3', 'MySQL', 'Bootstrap 5', 'Vite', 'Task Scheduler'],
    link: 'elabmaintenance/index.html',
    year: '2023'
  },
  {
    id: 'laravelclinic',
    color: 'card-coral',
    status: 'completed',
    statusLabel: 'Completed',
    name: 'Laravel Dental Clinic System',
    desc: 'Full-featured web information system and public profile for a dental clinic practice. Covers patient scheduling, clinic profile, service listings, and a complete admin dashboard for appointment and content management.',
    stack: ['Laravel', 'PHP 8', 'MySQL', 'Bootstrap 5', 'Blade', 'Eloquent ORM'],
    link: 'laravelclinic/index.html',
    year: '2023'
  },
  {
    id: 'vbnetmedical',
    color: 'card-slate',
    status: 'completed',
    statusLabel: 'Completed',
    name: 'VB.Net Medical Records App',
    desc: 'Windows desktop application for managing patient medical records in a dental practice. Handles patient registration, dental history logging, treatment records, appointment scheduling, and data export with a SQL Server backend.',
    stack: ['VB.NET', 'Visual Studio 2019', '.NET Framework', 'MariaDB', 'Windows Forms', 'XAMPP'],
    link: 'vbnetmedical/index.html',
    year: '2022'
  },
];

window.TOOLS_DATA = [
  {
    id: 'sakti-automation',
    title: 'SAKTI Automation',
    category: 'automation',
    icon: '⚡',
    description: 'Tampermonkey UserScript automating PDN dropdown selection in SAKTI, the Ministry of Finance financial management system. Paired with PasteBridge — a Python + Flask + pyautogui desktop app (CustomTkinter GUI) that simulates real keyboard input to bypass Angular\'s trusted-input restriction.',
    stack: ['Python', 'Flask', 'Tampermonkey', 'pyautogui', 'CustomTkinter'],
    year: '2024',
    link: 'https://github.com/AnnisaBaizan/HelpfullScript/tree/main/Sakti',
    highlight: 'Bypasses Angular trusted-input restriction via real Ctrl+V simulation using pyautogui'
  },
  {
    id: 'siakad-automation',
    title: 'SIAKAD Automation Scripts (AMS)',
    category: 'automation',
    icon: '🎓',
    description: 'Collection of Tampermonkey userscripts for batch operations in the Student Information System (SIAKAD) at Poltekkes Palembang. Automates repetitive data entry, batch status updates, and multi-record operations that normally require manual clicks through the web interface.',
    stack: ['JavaScript', 'Tampermonkey', 'localStorage', 'DOM API'],
    year: '2024',
    link: 'https://github.com/AnnisaBaizan/HelpfullScript',
    highlight: 'Reduces multi-step batch operations from hours to minutes via script injection'
  },
  {
    id: 'google-form-autofill',
    title: 'Google Form Autofill',
    category: 'automation',
    icon: '📋',
    description: 'Python + Playwright automation that reads data from Excel spreadsheets via pandas and automatically fills Google Forms. Handles multi-page forms, dropdown selectors, radio buttons, and checkboxes — ideal for bulk data submission workflows.',
    stack: ['Python', 'Playwright', 'pandas', 'openpyxl'],
    year: '2024',
    link: 'https://github.com/AnnisaBaizan/HelpfullScript',
    highlight: 'Reads Excel rows and maps each to form fields with smart selector matching'
  },
  {
    id: 'bmn-repair-request',
    title: 'BMN Repair Request System',
    category: 'tool',
    icon: '🔧',
    description: 'Zero-infrastructure web app for government asset (BMN) repair requests. Submissions save directly to Google Sheets, file attachments upload to Google Drive, and notifications are dispatched automatically via email and WhatsApp — no server required.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Google Apps Script', 'Google Sheets', 'Google Drive'],
    year: '2024',
    link: 'https://github.com/AnnisaBaizan/HelpfullScript',
    highlight: 'Fully serverless: Google Apps Script handles storage, Drive uploads, and multi-channel notifications'
  },
  {
    id: 'sheets-pdf-exporter',
    title: 'Google Sheets PDF Exporter',
    category: 'tool',
    icon: '📄',
    description: 'Google Apps Script with a custom Sheets menu that exports formatted PDF reports. Temporarily hides extra columns and adjusts print ranges before exporting, then restores the sheet to its original state — producing clean, professional PDFs without manual layout work.',
    stack: ['Google Apps Script', 'JavaScript', 'Google Sheets API'],
    year: '2023',
    link: 'https://github.com/AnnisaBaizan/HelpfullScript',
    highlight: 'Hides/restores columns dynamically so exported PDFs contain only relevant data'
  },
  {
    id: 'qr-code-generator',
    title: 'QR Code Generator',
    category: 'tool',
    icon: '🔲',
    description: 'Two standalone single-file HTML tools for generating QR codes with embedded logos. Uses HTML5 Canvas API and QRCode.js for client-side generation — no backend or dependencies to install. Supports custom logo overlay, size adjustment, and PNG download.',
    stack: ['HTML', 'Canvas API', 'QRCode.js', 'JavaScript'],
    year: '2023',
    link: 'https://github.com/AnnisaBaizan/HelpfullScript',
    highlight: 'Entirely client-side — single HTML file, no install, works offline'
  },
];

window.CMS_DATA = [
  {
    id: 'upk-poltekkes',
    icon: '📈',
    title: 'UPK — Poltekkes Palembang',
    year: 'In Progress · Poltekkes Kemenkes Palembang',
    description: 'Website for the UPK (Unit Pengembangan Kompetensi) at Poltekkes Kemenkes Palembang. Currently in progress.',
    stack: ['WordPress', 'PHP'],
    link: 'https://upk.poltekkespalembang.ac.id'
  },
  {
    id: 'kebidanan-poltekkes',
    icon: '🤰',
    title: 'Kebidanan — Poltekkes Palembang',
    year: 'Poltekkes Kemenkes Palembang',
    description: 'Official website for the Midwifery department at Poltekkes Kemenkes Palembang.',
    stack: ['WordPress', 'PHP'],
    link: 'https://kebidanan.poltekkespalembang.ac.id'
  },
  {
    id: 'sipil-polsri',
    icon: '🏗️',
    title: 'Teknik Sipil — POLSRI',
    year: 'Mar–Apr 2021 · Politeknik Negeri Sriwijaya',
    description: 'Official website for the Civil Engineering major. Academic info, faculty profiles, and department news.',
    stack: ['WordPress', 'PHP'],
    link: 'https://sipil.polsri.ac.id'
  },
  {
    id: 'admbisnis-polsri',
    icon: '💼',
    title: 'Adm. Bisnis — POLSRI',
    year: 'Oct–Nov 2020 · Politeknik Negeri Sriwijaya',
    description: 'Official website for the Business Administration major. Academic information and department profile.',
    stack: ['WordPress', 'PHP'],
    link: 'https://admbisnis.polsri.ac.id'
  },
  {
    id: 'mesin-polsri',
    icon: '⚙️',
    title: 'Teknik Mesin — POLSRI',
    year: 'Sep–Oct 2020 · Politeknik Negeri Sriwijaya',
    description: 'Official website for the Mechanical Engineering major. Department profile and academic content management.',
    stack: ['WordPress', 'PHP'],
    link: 'https://mesin.polsri.ac.id'
  },
];
