// ── COPYRIGHT & LICENSE ──
// Copyright (c) 2026 Rahul Kothari. All Rights Reserved.
// Project: WebDev Pathway (https://www.webdevpathway.com)
// Unauthorized copying or distribution of this file is strictly prohibited.

// ── COURSE ESSAYS DATABASE ──
const ESSAYS_DATA = {
  // Phase 0 — Foundation and Setup
  "0.1": { title: "Essay 0.1 — Your Complete Development Environment", phase: 0, path: "essays/essay-0.1.html", time: 45 },
  "0.2": { title: "Essay 0.2 — Terminal Mastery", phase: 0, path: "essays/essay-0.2.html", time: 45 },
  "0.3": { title: "Essay 0.3 — How Developers Actually Think", phase: 0, path: "essays/essay-0.3.html", time: 35 },

  // Phase 1 — HTML
  "1.1": { title: "Essay 1.1 — HTML: The Skeleton of Every Webpage", phase: 1, path: "essays/essay-1.1.html", time: 45 },
  "1.2": { title: "Essay 1.2 — CSS: Layout Paradigms & Paint Budgets", phase: 1, path: "essays/essay-1.2.html", time: 45 },
  "1.3": { title: "Essay 1.3 — HTML5 Modern Features & Metadata", phase: 1, path: "essays/essay-1.3.html", time: 45 },

  // Phase 2 — CSS
  "2.1": { title: "Essay 2.1 — CSS Fundamentals & Specificity Hierarchy", phase: 2, path: "essays/essay-2.1.html", time: 45 },
  "2.2": { title: "Essay 2.2 — Flexbox Layouts: Linear Space Alignment Rules", phase: 2, path: "essays/essay-2.2.html", time: 45 },
  "2.3": { title: "Essay 2.3 — CSS Grid Matrix: Two-Dimensional Space Frameworks", phase: 2, path: "essays/essay-2.3.html", time: 45 },
  "2.4": { title: "Essay 2.4 — Responsive Design: Mobile-First Viewports & Media Queries", phase: 2, path: "essays/essay-2.4.html", time: 45 },
  "2.5": { title: "Essay 2.5 — CSS Transitions & Animations: High-Performance Visual Timelines", phase: 2, path: "essays/essay-2.5.html", time: 45 },
  "2.6": { title: "Essay 2.6 — Tailwind CSS: Modern Utility-First Style Architecture", phase: 2, path: "essays/essay-2.6.html", time: 45 },

  // Phase 3 — JavaScript
  "3.1": { title: "Essay 3.1 — JavaScript Engine Loop: Variables, Conditions, & Execution Pipelines", phase: 3, path: "essays/essay-3.1.html", time: 45 },
  "3.2": { title: "Essay 3.2 — Functions & Closures: Advanced Scope Lifecycle Operations", phase: 3, path: "essays/essay-3.2.html", time: 45 },
  "3.3": { title: "Essay 3.3 — Array Modules & Higher-Order Methods: Map, Filter, & Reduce Algebra", phase: 3, path: "essays/essay-3.3.html", time: 45 },
  "3.4": { title: "Essay 3.4 — Objects & Structural Operators: Destructuring, Spread, & Optional Chaining Matrices", phase: 3, path: "essays/essay-3.4.html", time: 45 },
  "3.5": { title: "Essay 3.5 — DOM Manipulation: Scribing Element Nodes & Core Layout Integrity", phase: 3, path: "essays/essay-3.5.html", time: 45 },
  "3.6": { title: "Essay 3.6 — Event Architecture: Listeners, Bubbling, & Delegation Pipelines", phase: 3, path: "essays/essay-3.6.html", time: 45 },
  "3.7": { title: "Essay 3.7 — Asynchronous JavaScript: Timers, Promises, & Event Loop Architectures", phase: 3, path: "essays/essay-3.7.html", time: 45 },
  "3.8": { title: "Essay 3.8 — Fetch API: Making Network Requests & Parsing JSON Payloads", phase: 3, path: "essays/essay-3.8.html", time: 45 },
  "3.9": { title: "Essay 3.9 — ES6+ Modern Features: Modules, Template Literals, & Local Storage", phase: 3, path: "essays/essay-3.9.html", time: 45 },

  // Phase 4 — React
  "4.1": { title: "Essay 4.1 — React Fundamentals: Virtual DOM Architectures & Component Structures", phase: 4, path: "essays/essay-4.1.html", time: 45 },
  "4.2": { title: "Essay 4.2 — State with useState: Managing Component Data Transitions", phase: 4, path: "essays/essay-4.2.html", time: 50 },
  "4.3": { title: "Essay 4.3 — useEffect: Side Effects, Data Fetching, & Cleanup", phase: 4, path: "essays/essay-4.3.html", time: 55 },
  "4.4": { title: "Essay 4.4 — React Router: Multi-Page Web Applications & URL Parameters Tracking", phase: 4, path: "essays/essay-4.4.html", time: 50 },
  "4.5": { title: "Essay 4.5 — Forms in React: Controlled Inputs & Validation Handlers", phase: 4, path: "essays/essay-4.5.html", time: 45 },
  "4.6": { title: "Essay 4.6 — useContext: Global State Orchestration & Prop Drilling Elimination", phase: 4, path: "essays/essay-4.6.html", time: 50 },
  "4.7": { title: "Essay 4.7 — Scaled Codebase Organization & Vercel Deployment", phase: 4, path: "essays/essay-4.7.html", time: 45 },

  // Phase 5 — Next.js
  "5.1": { title: "Essay 5.1 — Next.js Framework: Server Components & File Routing Networks", phase: 5, path: "essays/essay-5.1.html", time: 50 },
  "5.2": { title: "Essay 5.2 — Data Fetching on the Server: Server Actions & Direct Database Ingestions", phase: 5, path: "essays/essay-5.2.html", time: 50 },
  "5.3": { title: "Essay 5.3 — Data Caching & Revalidations: Force Dynamic, Fetch Flags, & Time Invalidation Models", phase: 5, path: "essays/essay-5.3.html", time: 45 },
  "5.4": { title: "Essay 5.4 — Static vs Dynamic Rendering: PPR, Streaming, & Segment Options", phase: 5, path: "essays/essay-5.4.html", time: 45 },
  "5.5": { title: "Essay 5.5 — Middleware Engines: Request Interceptions & Security", phase: 5, path: "essays/essay-5.5.html", time: 40 },
  "5.6": { title: "Essay 5.6 — Platform API Optimizations: Route Handlers & Edge Streaming", phase: 5, path: "essays/essay-5.6.html", time: 40 },
  "5.7": { title: "Essay 5.7 — Advanced Full-Stack Security: CSRF Defenses, XSS Mitigation, & CORS Controls", phase: 5, path: "essays/essay-5.7.html", time: 45 },
  "5.8": { title: "Essay 5.8 — Ecosystem Deployment: Multi-Zone Optimizations & Vercel Advanced Architectures", phase: 5, path: "essays/essay-5.8.html", time: 45 },

  // Phase 6 — Developer Tools
  "6.1": { title: "Essay 6.1 — Browser DevTools: elements, console, network, performance, & sources", phase: 6, path: "essays/essay-6.1.html", time: 40 },
  "6.2": { title: "Essay 6.2 — VS Code mastery: extensions, shortcuts, debugging, snippets", phase: 6, path: "essays/essay-6.2.html", time: 40 },
  "6.3": { title: "Essay 6.3 — Postman: testing APIs, environments, collections, & automation frameworks", phase: 6, path: "essays/essay-6.3.html", time: 40 },

  // Phase 7 — Node.js and Express
  "7.1": { title: "Essay 7.1 — Node.js fundamentals: how it works, event loop, npm, package.json", phase: 7, path: "essays/essay-7.1.html", time: 45 },
  "7.2": { title: "Essay 7.2 — Express: building your first server, hello world on the internet", phase: 7, path: "essays/essay-7.2.html", time: 40 },
  "7.3": { title: "Essay 7.3 — Routes, middleware, and the request-response cycle", phase: 7, path: "essays/essay-7.3.html", time: 45 },
  "7.4": { title: "Essay 7.4 — Input validation with Zod: never trust user input", phase: 7, path: "essays/essay-7.4.html", time: 45 },
  "7.5": { title: "Essay 7.5 — Error handling middleware: professional-grade error management", phase: 7, path: "essays/essay-7.5.html", time: 40 },
  "7.6": { title: "Essay 7.6 — Environment variables: dotenv, secrets, configuration management", phase: 7, path: "essays/essay-7.6.html", time: 40 },
  "7.7": { title: "Essay 7.7 — Building a complete REST API: putting all backend skills together", phase: 7, path: "essays/essay-7.7.html", time: 50 },

  // Phase 8 — Databases
  "8.1": { title: "Essay 8.1 — Database fundamentals: relational vs NoSQL, when to use each", phase: 8, path: "essays/essay-8.1.html", time: 40 },
  "8.2": { title: "Essay 8.2 — SQL fundamentals: SELECT, WHERE, INSERT, UPDATE, DELETE", phase: 8, path: "essays/essay-8.2.html", time: 40 },
  "8.3": { title: "Essay 8.3 — Advanced SQL: JOINs, aggregation, GROUP BY, HAVING, subqueries", phase: 8, path: "essays/essay-8.3.html", time: 45 },
  "8.4": { title: "Essay 8.4 — PostgreSQL in practice: setup, pgAdmin, connecting to Node.js", phase: 8, path: "essays/essay-8.4.html", time: 45 },
  "8.5": { title: "Essay 8.5 — Prisma ORM: type-safe database access, schema, migrations", phase: 8, path: "essays/essay-8.5.html", time: 45 },
  "8.6": { title: "Essay 8.6 — Database design: normalization, ER diagrams, schema planning", phase: 8, path: "essays/essay-8.6.html", time: 40 },
  "8.7": { title: "Essay 8.7 — MongoDB and Mongoose: document databases, CRUD, schemas", phase: 8, path: "essays/essay-8.7.html", time: 45 },

  // Phase 9 — Authentication and Security
  "9.1": { title: "Essay 9.1 — Authentication fundamentals: sessions, cookies, how login works", phase: 9, path: "essays/essay-9.1.html", time: 45 },
  "9.2": { title: "Essay 9.2 — Password Hashing with bcrypt: cryptographic salts & one-way functions", phase: 9, path: "essays/essay-9.2.html", time: 45 },
  "9.3": { title: "Essay 9.3 — JWT in practice: creating, verifying, refresh tokens, secure storage", phase: 9, path: "essays/essay-9.3.html", time: 45 },
  "9.4": { title: "Essay 9.4 — Role-Based Access Control (RBAC): protecting routes and authority matrices", phase: 9, path: "essays/essay-9.4.html", time: 55 },
  "9.5": { title: "Essay 9.5 — Production Node.js Security: Helmet, CORS, rate-limiting, and OWASP top 10", phase: 9, path: "essays/essay-9.5.html", time: 45 },

  // Phase 10 — Advanced Backend Features
  "10.1": { title: "Essay 10.1 — File upload with Multer and cloud storage with Cloudinary", phase: 10, path: "essays/essay-10.1.html", time: 45 },
  "10.2": { title: "Essay 10.2 — Email sending: NodeMailer, SendGrid, transactional emails", phase: 10, path: "essays/essay-10.2.html", time: 45 },
  "10.3": { title: "Essay 10.3 — WebSockets and real-time systems with Socket.io", phase: 10, path: "essays/essay-10.3.html", time: 45 },
  "10.4": { title: "Essay 10.4 — Redis Cache Topologies: caching, session storage, and pub/sub", phase: 10, path: "essays/essay-10.4.html", time: 45 },

  // Phase 11 — System Design
  "11.1": { title: "Essay 11.1 — System design foundations: scalability, CAP theorem, load balancers", phase: 11, path: "essays/essay-11.1.html", time: 45 },
  "11.2": { title: "Essay 11.2 — Database internals: ACID, indexing, sharding, replication, MVCC", phase: 11, path: "essays/essay-11.2.html", time: 45 },
  "11.3": { title: "Essay 11.3 — Caching architecture: strategies, invalidation, Redis patterns", phase: 11, path: "essays/essay-11.3.html", time: 45 },
  "11.4": { title: "Essay 11.4 — Message queues: Kafka, RabbitMQ, async processing, job queues", phase: 11, path: "essays/essay-11.4.html", time: 45 },
  "11.5": { title: "Essay 11.5 — Designing real systems: URL shortener, WhatsApp, YouTube, Google Drive", phase: 11, path: "essays/essay-11.5.html", time: 45 },
  "11.6": { title: "Essay 11.6 — Microservices vs monolith: the real trade-offs, when each makes sense", phase: 11, path: "essays/essay-11.6.html", time: 45 },

  // Phase 12 — AI Integration
  "12.1": { title: "Essay 12.1 — AI and LLMs: what every web developer needs to understand", phase: 12, path: "essays/essay-12.1.html", time: 45 },
  "12.2": { title: "Essay 12.2 — Using AI APIs: Gemini, OpenAI, streaming responses, costs", phase: 12, path: "", time: 45 },
  "12.3": { title: "Essay 12.3 — Prompt engineering for production: reliable, structured outputs", phase: 12, path: "", time: 45 },
  "12.4": { title: "Essay 12.4 — RAG: building AI features grounded in your own data", phase: 12, path: "", time: 50 },

  // Phase 13 — CS Fundamentals for Web
  "13.1": { title: "Essay 13.1 — How the internet works: DNS, HTTP, HTTPS, TCP/IP, status codes", phase: 13, path: "", time: 45 },
  "13.2": { title: "Essay 13.2 — How browsers work: rendering pipeline, critical path, DevTools", phase: 13, path: "", time: 45 },
  "13.3": { title: "Essay 13.3 — Operating systems for developers: processes, threads, memory, Linux", phase: 13, path: "", time: 45 },
  "13.4": { title: "Essay 13.4 — Big O notation: why performance matters in real applications", phase: 13, path: "", time: 45 },
  "13.5": { title: "Essay 13.5 — Web security fundamentals: XSS, CSRF, SQL injection, HTTPS, CORS", phase: 13, path: "", time: 45 },

  // Phase 14 — TypeScript
  "14.1": { title: "Essay 14.1 — TypeScript fundamentals: why TypeScript, types, interfaces, enums", phase: 14, path: "", time: 45 },
  "14.2": { title: "Essay 14.2 — TypeScript with React: typed components, props, hooks, events", phase: 14, path: "", time: 45 },
  "14.3": { title: "Essay 14.3 — TypeScript with Express: typed routes, request handlers, middleware", phase: 14, path: "", time: 45 },

  // Phase 15 — Testing
  "15.1": { title: "Essay 15.1 — Testing fundamentals: unit, integration, end-to-end, what to test", phase: 15, path: "", time: 45 },
  "15.2": { title: "Essay 15.2 — Testing JavaScript and Node.js with Jest", phase: 15, path: "", time: 45 },
  "15.3": { title: "Essay 15.3 — Testing React components with React Testing Library", phase: 15, path: "", time: 45 },

  // Phase 16 — DevOps and Deployment
  "16.1": { title: "Essay 16.1 — Clean code principles: naming, functions, DRY, guard clauses", phase: 16, path: "", time: 45 },
  "16.2": { title: "Essay 16.2 — Docker: containerising your full-stack application", phase: 16, path: "", time: 45 },
  "16.3": { title: "Essay 16.3 — Deployment: Vercel, Render, Railway, Supabase, environment setup", phase: 16, path: "", time: 45 },
  "16.4": { title: "Essay 16.4 — CI/CD: GitHub Actions for automated testing and deployment", phase: 16, path: "", time: 45 },
  "16.5": { title: "Essay 16.5 — Monitoring, logging, and error tracking with Sentry", phase: 16, path: "", time: 45 },

  // Phase 17 — Projects
  "17.1": { title: "Essay 17.1 — Project 1: Job Board Platform: complete build guide with all decisions explained", phase: 17, path: "", time: 60 },
  "17.2": { title: "Essay 17.2 — Project 2: AI Study Assistant with RAG: complete build guide", phase: 17, path: "", time: 60 },
  "17.3": { title: "Essay 17.3 — Project 3: Real-Time Collaborative Notes: complete build guide", phase: 17, path: "", time: 60 },

  // Phase 18 — Career and Interviews
  "18.1": { title: "Essay 18.1 — GitHub profile and portfolio strategy", phase: 18, path: "", time: 45 },
  "18.2": { title: "Essay 18.2 — How to explain your projects to interviewers", phase: 18, path: "", time: 45 },
  "18.3": { title: "Essay 18.3 — System design interviews: framework and practice", phase: 18, path: "", time: 45 },
  "18.4": { title: "Essay 18.4 — Behavioural interviews: STAR method and your story", phase: 18, path: "", time: 45 },
  "18.5": { title: "Essay 18.5 — The complete interview playbook: from application to offer", phase: 18, path: "", time: 45 }
};

// Rotating Daily Challenges
const QUIZ_CHALLENGES = [
  {
    question: "Which JS Higher-Order method returns a new array with elements that pass a logical condition?",
    options: ["A) map()", "B) reduce()", "C) filter()"],
    correct: 2,
    explanation: {
      success: "🎉 Correct! filter() evaluates a boolean condition on each item and returns a new shallow array containing only the matching elements.",
      fail: "❌ Incorrect. map() transforms elements in place, reduce() aggregates values into a single value, whereas filter() is explicitly used to extract items matching conditions."
    }
  },
  {
    question: "Which CSS selector specificity has the highest weight?",
    options: ["A) Inline styles inside elements", "B) ID selectors", "C) Class and attribute selectors"],
    correct: 0,
    explanation: {
      success: "🎉 Correct! Inline styles have a specificity weight of 1000, which overrides IDs (100) and classes (10).",
      fail: "❌ Incorrect. Inline styles (1000) are heavier than IDs (100) and classes (10)."
    }
  },
  {
    question: "Which Express error-handling middleware signature is correct?",
    options: ["A) (req, res, next)", "B) (err, req, res, next)", "C) (err, req, res)"],
    correct: 1,
    explanation: {
      success: "🎉 Correct! Express recognizes error handlers strictly by having exactly 4 parameters: (err, req, res, next).",
      fail: "❌ Incorrect. Express requires error middleware to have exactly four arguments: (err, req, res, next)."
    }
  },
  {
    question: "In React, what is the primary role of the standard key prop in list nodes?",
    options: ["A) To uniquely identify sibling nodes for diff/reconstruction performance", "B) To bind events", "C) To inject inline styles"],
    correct: 0,
    explanation: {
      success: "🎉 Correct! The key prop helps React identify which items have changed, been added, or been removed, minimizing DOM paint operations.",
      fail: "❌ Incorrect. The key prop is strictly for lists diffing optimization in the Virtual DOM reconciler."
    }
  },
  {
    question: "What does Partition Tolerance mean in the CAP Theorem?",
    options: ["A) Database remains consistent", "B) The system continues to operate despite arbitrary network split errors", "C) The system responds instantly to requests"],
    correct: 1,
    explanation: {
      success: "🎉 Correct! Partition tolerance (P) means the system continues to operate despite network partitions (dropped/delayed messages between nodes).",
      fail: "❌ Incorrect. Partition tolerance is the ability to withstand network breaks between database clusters."
    }
  },
  {
    question: "Which HTTP header is sent by the browser to request WebSocket connection upgrades?",
    options: ["A) Upgrade: websocket", "B) Connection: Keep-Alive", "C) Content-Type: text/event-stream"],
    correct: 0,
    explanation: {
      success: "🎉 Correct! The browser initiates a handshake with 'Upgrade: websocket' and 'Connection: Upgrade' headers.",
      fail: "❌ Incorrect. Standard upgrades use the 'Upgrade: websocket' header."
    }
  },
  {
    question: "Why do we add random 'salts' to password crypt hashes?",
    options: ["A) To encrypt the payload", "B) To speed up execution", "C) To protect against precomputed Rainbow Table lookup matching attacks"],
    correct: 2,
    explanation: {
      success: "🎉 Correct! Salts ensure identical passwords have unique hash values, preventing hackers from matching them against Rainbow Tables.",
      fail: "❌ Incorrect. Salts protect against lookup attacks by adding random entropy to the hashing inputs."
    }
  }
];

// Rotate challenge based on day of the month
const dailyQuizIndex = new Date().getDate() % QUIZ_CHALLENGES.length;
const QUIZ_CHALLENGE = QUIZ_CHALLENGES[dailyQuizIndex];

const getBackendUrl = () => 'https://webdev-learning-platform-backend.onrender.com';
let syncTimeout = null;

function queueNotesSync() {
  if (!localStorage.getItem('faang-auth-token')) return;
  const indicator = document.getElementById('sync-indicator-status');
  if (indicator) {
    indicator.className = 'sync-status-dot pending';
    indicator.title = 'Saving notes to cloud...';
  }
  if (syncTimeout) clearTimeout(syncTimeout);
  syncTimeout = setTimeout(async () => {
    await syncProgressToServer();
  }, 2000);
}

function toggleAuthModal() {
  const modal = document.getElementById('auth-modal');
  if (!modal) return;
  modal.style.display = (modal.style.display === 'none' || modal.style.display === '') ? 'flex' : 'none';
  if (modal.style.display === 'flex') {
    const errorEl = document.getElementById('auth-error-msg');
    if (errorEl) errorEl.style.display = 'none';
  }
}

function switchAuthTab(tab) {
  const loginForm = document.getElementById('auth-form-login');
  const registerForm = document.getElementById('auth-form-register');
  const loginTab = document.getElementById('auth-tab-login');
  const registerTab = document.getElementById('auth-tab-register');
  
  if (tab === 'login') {
    loginForm.classList.add('active');
    registerForm.classList.remove('active');
    loginTab.classList.add('active');
    registerTab.classList.remove('active');
  } else {
    loginForm.classList.remove('active');
    registerForm.classList.add('active');
    loginTab.classList.remove('active');
    registerTab.classList.add('active');
  }
}

async function submitAuth(event, type) {
  event.preventDefault();
  const errorEl = document.getElementById('auth-error-msg');
  if (errorEl) errorEl.style.display = 'none';
  
  const suffix = type === 'login' ? 'login' : 'register';
  const usernameInput = document.getElementById(`auth-username-${suffix}`);
  const passwordInput = document.getElementById(`auth-password-${suffix}`);
  
  const username = usernameInput.value.trim();
  const password = passwordInput.value;
  
  if (!username || !password) {
    showAuthError("Username and password are required.");
    return;
  }
  
  try {
    const res = await fetch(`${getBackendUrl()}/api/auth/${suffix}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || 'Authentication failed.');
    }
    
    localStorage.setItem('faang-auth-token', data.token);
    localStorage.setItem('faang-username', data.username);
    
    toggleAuthModal();
    usernameInput.value = '';
    passwordInput.value = '';
    
    await syncProgressFromServer();
    updateAuthHUD();
    
  } catch (err) {
    showAuthError(err.message);
  }
}

function showAuthError(msg) {
  const errorEl = document.getElementById('auth-error-msg');
  if (errorEl) {
    errorEl.innerText = msg;
    errorEl.style.display = 'block';
  }
}

function logOut() {
  if (confirm("Are you sure you want to log out? Local data will remain but cloud syncing will stop.")) {
    localStorage.removeItem('faang-auth-token');
    localStorage.removeItem('faang-username');
    updateAuthHUD();
    alert("Logged out successfully.");
  }
}

function updateAuthHUD() {
  const token = localStorage.getItem('faang-auth-token');
  const username = localStorage.getItem('faang-username');
  const hudBtn = document.getElementById('auth-hud-btn');
  if (!hudBtn) return;
  
  if (token && username) {
    hudBtn.innerHTML = `
      <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 6px;"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
      <span>👤 ${username}</span>
      <span class="sync-status-indicator" style="margin-left: 6px;" id="sync-indicator-container">
        <span class="sync-status-dot synced" id="sync-indicator-status" title="Synced with cloud"></span>
      </span>
      <span onclick="event.stopPropagation(); logOut();" style="margin-left: 8px; color: var(--rose, #ef4444); cursor: pointer; font-weight: bold;" title="Log Out">&#10005;</span>
    `;
    hudBtn.onclick = () => {
      syncProgressToServer();
    };
  } else {
    hudBtn.innerHTML = `
      <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 6px;"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
      <span id="auth-btn-text">Log In</span>
    `;
    hudBtn.onclick = toggleAuthModal;
  }
}

async function syncProgressToServer() {
  const token = localStorage.getItem('faang-auth-token');
  if (!token) return;
  
  const indicator = document.getElementById('sync-indicator-status');
  if (indicator) {
    indicator.className = 'sync-status-dot pending';
    indicator.title = 'Syncing...';
  }
  
  const completed = JSON.parse(localStorage.getItem('faang-completed-essays') || '[]');
  const notes = localStorage.getItem('faang-student-notes') || '';
  
  try {
    const res = await fetch(`${getBackendUrl()}/api/progress`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token
      },
      body: JSON.stringify({
        completedEssays: completed,
        studyNotes: notes
      })
    });
    
    if (!res.ok) throw new Error('Failed to sync to cloud');
    
    if (indicator) {
      indicator.className = 'sync-status-dot synced';
      indicator.title = 'Synced with cloud';
    }
  } catch (err) {
    console.error('Sync to server error:', err);
    if (indicator) {
      indicator.className = 'sync-status-dot error';
      indicator.title = 'Sync error: ' + err.message;
    }
  }
}

async function syncProgressFromServer() {
  const token = localStorage.getItem('faang-auth-token');
  if (!token) return;
  
  const indicator = document.getElementById('sync-indicator-status');
  if (indicator) {
    indicator.className = 'sync-status-dot pending';
    indicator.title = 'Fetching cloud progress...';
  }
  
  try {
    const res = await fetch(`${getBackendUrl()}/api/progress`, {
      method: 'GET',
      headers: { 'x-auth-token': token }
    });
    
    if (!res.ok) throw new Error('Failed to fetch from cloud');
    
    const data = await res.json();
    
    const localCompleted = JSON.parse(localStorage.getItem('faang-completed-essays') || '[]');
    const serverCompleted = data.completedEssays || [];
    const mergedCompleted = Array.from(new Set([...localCompleted, ...serverCompleted]));
    localStorage.setItem('faang-completed-essays', JSON.stringify(mergedCompleted));
    
    const localNotes = localStorage.getItem('faang-student-notes') || '';
    const serverNotes = data.studyNotes || '';
    if (serverNotes && serverNotes !== localNotes) {
      localStorage.setItem('faang-student-notes', serverNotes);
      const textarea = document.getElementById('scratchpad-textarea');
      if (textarea) {
        textarea.value = serverNotes;
        updateWordCount(serverNotes);
      }
    }
    
    loadProgress();
    updateProgressHUD();
    
    if (indicator) {
      indicator.className = 'sync-status-dot synced';
      indicator.title = 'Synced with cloud';
    }
  } catch (err) {
    console.error('Sync from server error:', err);
    if (indicator) {
      indicator.className = 'sync-status-dot error';
      indicator.title = 'Sync error: ' + err.message;
    }
  }
}

// State Variables
let completedEssays = [];
let activeFilter = 'all';
let searchQuery = '';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  loadProgress();
  loadResumeHUD();
  initFilterListeners();
  initSearch();
  initCardClickEvents();
  initRoadmapGridEvents();
  initStreakTracker();
  initQuizChallenge();
  initScratchpad();
  updateProgressHUD();
  updateAuthHUD();
  initSpotlightGlow();
  initQuantumBackground();
  if (localStorage.getItem('faang-auth-token')) {
    syncProgressFromServer();
  }
});

// ── THEME ENGINES ──
function initTheme() {
  const savedTheme = localStorage.getItem('faang-course-theme');
  const body = document.body;
  const themeText = document.getElementById('theme-text');
  
  if (savedTheme === 'light') {
    body.classList.add('light-theme');
    if (themeText) themeText.innerText = "Light Lab";
  } else {
    body.classList.remove('light-theme');
    if (themeText) themeText.innerText = "Dark Cyber";
  }
}

function toggleGlobalTheme() {
  const body = document.body;
  const themeText = document.getElementById('theme-text');
  
  body.classList.toggle('light-theme');
  const isLight = body.classList.contains('light-theme');
  
  localStorage.setItem('faang-course-theme', isLight ? 'light' : 'dark');
  if (themeText) themeText.innerText = isLight ? "Light Lab" : "Dark Cyber";
}

// ── ACCORDION EXPANSION CONTROL ──
function togglePhase(phaseNum) {
  const track = document.getElementById(`phase-${phaseNum}-track`);
  track.classList.toggle('open');
}

// ── PROGRESS ORCHESTRATION ──
function loadProgress() {
  const saved = localStorage.getItem('faang-completed-essays');
  if (saved) {
    try {
      completedEssays = JSON.parse(saved);
    } catch (e) {
      completedEssays = [];
    }
  }
  
  // Set initial checkbox states
  document.querySelectorAll('.lesson-card-glass').forEach(card => {
    const id = card.getAttribute('data-lesson-id');
    const checkbox = card.querySelector('.checkbox-hud-input');
    if (checkbox) {
      if (completedEssays.includes(id)) {
        checkbox.checked = true;
        card.classList.add('completed');
      } else {
        checkbox.checked = false;
        card.classList.remove('completed');
      }
    }
  });
}

function toggleLessonCompletion(lessonId, event) {
  event.stopPropagation(); // Avoid triggering card navigation
  
  const card = document.querySelector(`.lesson-card-glass[data-lesson-id="${lessonId}"]`);
  const checkbox = event.target;
  
  if (checkbox.checked) {
    if (!completedEssays.includes(lessonId)) {
      completedEssays.push(lessonId);
    }
    card.classList.add('completed');
    // Bump learning streak
    bumpStreak();
  } else {
    completedEssays = completedEssays.filter(id => id !== lessonId);
    card.classList.remove('completed');
  }
  
  localStorage.setItem('faang-completed-essays', JSON.stringify(completedEssays));
  updateProgressHUD();
  loadResumeHUD();
  if (localStorage.getItem('faang-auth-token')) {
    syncProgressToServer();
  }
}

function updateProgressHUD() {
  const totalLessons = Object.keys(ESSAYS_DATA).length;
  const completedCount = completedEssays.length;
  
  // Percent Calc
  const percent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;
  
  // Animation for Percent Text & Bar/Ring
  const percentText = document.getElementById('progress-percent-val');
  if (percentText) percentText.innerText = `${percent}%`;
  
  const fillBar = document.getElementById('progress-bar-fill-bar');
  if (fillBar) fillBar.style.width = `${percent}%`;
  
  const circleMeter = document.getElementById('progress-circle-meter');
  if (circleMeter) {
    const offset = 188.4 - (percent / 100) * 188.4;
    circleMeter.style.strokeDashoffset = offset;
  }
  
  // Calculate completed read time hours and total course hours
  let completedMinutes = 0;
  let totalCourseMinutes = 0;
  
  Object.keys(ESSAYS_DATA).forEach(id => {
    const time = ESSAYS_DATA[id].time;
    totalCourseMinutes += time;
    if (completedEssays.includes(id)) {
      completedMinutes += time;
    }
  });
  
  const completedHours = (completedMinutes / 60).toFixed(1);
  const totalHours = (totalCourseMinutes / 60).toFixed(1);
  
  // Display Hours completed / Total hours
  document.getElementById('time-completed-val').innerText = `${completedHours}h / ${totalHours}h`;
  document.getElementById('completed-lessons-count').innerText = `${completedCount} / ${totalLessons}`;
  
  // Calculate Active Phase (first phase with incomplete items)
  let activePhaseName = 'All Completed';
  const phaseLessons = {};
  for (let p = 0; p <= 18; p++) {
    phaseLessons[p] = [];
  }
  
  Object.keys(ESSAYS_DATA).forEach(id => {
    const l = ESSAYS_DATA[id];
    phaseLessons[l.phase].push(id);
  });
  
  let foundActive = false;
  for (let p = 0; p <= 18; p++) {
    const totalInPhase = phaseLessons[p].length;
    const completedInPhase = phaseLessons[p].filter(id => completedEssays.includes(id)).length;
    
    // Update phase accordion stats row text
    const statsLabel = document.getElementById(`p${p}-stats`);
    if (statsLabel) {
      const totalMinutes = phaseLessons[p].reduce((sum, id) => sum + ESSAYS_DATA[id].time, 0);
      const estHours = (totalMinutes / 60).toFixed(1);
      statsLabel.innerText = `${completedInPhase} of ${totalInPhase} Lessons Completed · ~${estHours} Hours`;
    }
    
    if (completedInPhase < totalInPhase && !foundActive) {
      activePhaseName = `Phase ${p}`;
      foundActive = true;
    }
  }
  
  if (completedCount === totalLessons) {
    activePhaseName = "Graduated! 🎉";
  }
  document.getElementById('current-phase-val').innerText = activePhaseName;

  // Sync achievements badges statuses
  updateAchievementsHUD();
}

function updateAchievementsHUD() {
  const badgeMap = {
    'badge-html': 1,     // Phase 1
    'badge-css': 2,      // Phase 2
    'badge-js': 3,       // Phase 3
    'badge-backend': 7,  // Phase 7
    'badge-system': 11, // Phase 11
    'badge-ai': 12       // Phase 12
  };
  
  const phaseLessons = {};
  for (let p = 0; p <= 18; p++) {
    phaseLessons[p] = [];
  }
  
  Object.keys(ESSAYS_DATA).forEach(id => {
    const l = ESSAYS_DATA[id];
    phaseLessons[l.phase].push(id);
  });
  
  Object.keys(badgeMap).forEach(badgeId => {
    const phaseNum = badgeMap[badgeId];
    const totalInPhase = phaseLessons[phaseNum].length;
    const completedInPhase = phaseLessons[phaseNum].filter(id => completedEssays.includes(id)).length;
    const badgeEl = document.getElementById(badgeId);
    
    if (badgeEl) {
      const tooltipEl = badgeEl.querySelector('.badge-tooltip');
      if (totalInPhase > 0 && completedInPhase === totalInPhase) {
        badgeEl.classList.remove('locked');
        badgeEl.classList.add('unlocked');
        if (tooltipEl) {
          tooltipEl.innerText = `Unlocked! Completed all ${totalInPhase} lessons in Phase ${phaseNum}! 🎉`;
        }
      } else {
        badgeEl.classList.remove('unlocked');
        badgeEl.classList.add('locked');
        if (tooltipEl) {
          tooltipEl.innerText = `Phase ${phaseNum} Progress: ${completedInPhase} / ${totalInPhase} lessons. Complete all to unlock!`;
        }
      }
    }
  });
}


// ── SEARCH & FILTER IMPLEMENTATIONS ──
function initSearch() {
  const searchInput = document.getElementById('course-search-bar');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      applyFilterAndSearch();
    });
  }
}

function initFilterListeners() {
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeFilter = chip.getAttribute('data-filter');
      applyFilterAndSearch();
    });
  });
}

function applyFilterAndSearch() {
  let matchedAny = false;
  const phaseTracks = document.querySelectorAll('.phase-track');
  
  phaseTracks.forEach(track => {
    const phaseId = track.id.replace('phase-', '').replace('-track', '');
    const cards = track.querySelectorAll('.lesson-card-glass');
    let visibleCardsInPhase = 0;
    
    cards.forEach(card => {
      const lessonId = card.getAttribute('data-lesson-id');
      const isCompleted = completedEssays.includes(lessonId);
      const title = card.querySelector('.lesson-title').innerText.toLowerCase();
      const subtitle = card.querySelector('.lesson-subtitle').innerText.toLowerCase();
      
      // Filter Match
      let matchesFilter = false;
      if (activeFilter === 'all') {
        matchesFilter = true;
      } else if (activeFilter === 'completed') {
        matchesFilter = isCompleted;
      } else if (activeFilter === 'incomplete') {
        matchesFilter = !isCompleted;
      } else if (activeFilter === phaseId) {
        matchesFilter = true;
      }
      
      // Search Match
      let matchesSearch = true;
      if (searchQuery) {
        matchesSearch = title.includes(searchQuery) || subtitle.includes(searchQuery) || lessonId.includes(searchQuery);
      }
      
      if (matchesFilter && matchesSearch) {
        card.style.display = 'flex';
        visibleCardsInPhase++;
        matchedAny = true;
      } else {
        card.style.display = 'none';
      }
    });
    
    // Manage Phase Accordion Visibility
    if (visibleCardsInPhase > 0) {
      track.style.display = 'block';
      if (searchQuery || activeFilter === phaseId) {
        track.classList.add('open');
      }
    } else {
      track.style.display = 'none';
    }
  });
  
  // Manage empty search state panel
  const emptyHUD = document.getElementById('no-results-hud');
  if (emptyHUD) {
    if (matchedAny) {
      emptyHUD.style.display = 'none';
    } else {
      emptyHUD.style.display = 'block';
    }
  }
}

// ── RESUME LEARNING DATA PERSISTENCE ──
function logLastRead(lessonId) {
  localStorage.setItem('faang-last-read', lessonId);
  bumpStreak();
}

function loadResumeHUD() {
  const container = document.getElementById('resume-container');
  if (!container) return;
  
  const lastId = localStorage.getItem('faang-last-read');
  
  if (lastId && ESSAYS_DATA[lastId]) {
    const data = ESSAYS_DATA[lastId];
    const isCompleted = completedEssays.includes(lastId);
    
    container.innerHTML = `
      <div>
        <div class="resume-eyebrow">
          Phase ${data.phase} · Essay ${lastId} 
          ${isCompleted ? '<span style="color:#10b981; font-weight:700;">✓ Completed</span>' : '<span style="color:var(--text-secondary)">· Active</span>'}
        </div>
        <h3 class="resume-title" style="font-family:\'Outfit\', sans-serif;">${data.title}</h3>
      </div>
      <a href="${data.path}" class="resume-btn" onclick="logLastRead('${lastId}')">Resume Module</a>
    `;
  } else {
    container.innerHTML = `
      <div class="resume-empty">
        <svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" style="color: var(--text-muted); opacity: 0.6; margin-bottom: 12px;"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
        <div style="font-size:0.8rem; font-family:\'Plus Jakarta Sans\', sans-serif;">Select a lesson card below to initialize your progress tracking matrix.</div>
      </div>
    `;
  }
}

function initCardClickEvents() {
  document.querySelectorAll('.lesson-card-glass').forEach(card => {
    // Prevent navigation for locked cards
    if (card.classList.contains('lesson-locked')) {
      card.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
      });
      return;
    }

    card.addEventListener('click', (e) => {
      if (e.target.closest('.checkbox-hud-container') || e.target.closest('.lesson-action-link')) {
        return;
      }
      
      const id = card.getAttribute('data-lesson-id');
      logLastRead(id);
      
      const path = ESSAYS_DATA[id].path;
      window.location.href = path;
    });
  });
}

function initRoadmapGridEvents() {
  document.querySelectorAll('.roadmap-overview-grid a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Expand the target accordion section if it's closed
        if (!targetElement.classList.contains('open')) {
          targetElement.classList.add('open');
        }
        
        // Scroll to it smoothly
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Push hash to URL
        history.pushState(null, null, targetId);
      }
    });
  });
}

// ── STREAK TRACKING MODULE ──
function initStreakTracker() {
  let streak = parseInt(localStorage.getItem('faang-streak-count') || 0);
  const lastActiveStr = localStorage.getItem('faang-last-active-date');
  const todayStr = new Date().toDateString();
  
  if (lastActiveStr) {
    const lastActive = new Date(lastActiveStr);
    const today = new Date(todayStr);
    const diffTime = Math.abs(today - lastActive);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays > 1) {
      // Streak broken
      streak = 0;
      localStorage.setItem('faang-streak-count', 0);
    }
  } else {
    streak = 0;
  }
  
  drawStreakUI(streak);
}

function bumpStreak() {
  const todayStr = new Date().toDateString();
  const lastActiveStr = localStorage.getItem('faang-last-active-date');
  let streak = parseInt(localStorage.getItem('faang-streak-count') || 0);
  
  if (lastActiveStr !== todayStr) {
    if (lastActiveStr) {
      const lastActive = new Date(lastActiveStr);
      const today = new Date(todayStr);
      const diffTime = Math.abs(today - lastActive);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays === 1) {
        streak += 1;
      } else {
        streak = 1;
      }
    } else {
      streak = 1;
    }
    localStorage.setItem('faang-streak-count', streak);
    localStorage.setItem('faang-last-active-date', todayStr);
  }
  drawStreakUI(streak);
}

function drawStreakUI(streak) {
  const textEl = document.getElementById('streak-text');
  if (!textEl) return;
  
  textEl.innerText = `${streak} ${streak === 1 ? 'Day' : 'Days'} Active`;
  
  // Light up dots matching active learning days
  const dots = document.querySelectorAll('.streak-dot');
  const currentDayOfWeek = new Date().getDay(); // 0 is Sun, 1 is Mon... 6 is Sat
  const adjustedDay = currentDayOfWeek === 0 ? 4 : Math.min(4, currentDayOfWeek - 1); // map to index 0 (Mon) to 4 (Fri)
  
  dots.forEach((dot, idx) => {
    if (streak > 0 && idx <= adjustedDay) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

// ── QUIZ OF THE DAY MODULE ──
function initQuizChallenge() {
  const savedDate = localStorage.getItem('faang-daily-quiz-date');
  const todayStr = new Date().toDateString();
  
  if (savedDate !== todayStr) {
    localStorage.removeItem('faang-daily-quiz-done');
    localStorage.removeItem('faang-daily-quiz-date');
  }

  // Dynamically populate daily challenge DOM elements
  const questionEl = document.getElementById('quiz-question');
  const optionButtons = document.querySelectorAll('.quiz-option-btn');
  if (questionEl && optionButtons.length === QUIZ_CHALLENGE.options.length) {
    questionEl.innerText = QUIZ_CHALLENGE.question;
    optionButtons.forEach((btn, idx) => {
      btn.innerText = QUIZ_CHALLENGE.options[idx];
      btn.disabled = false;
      btn.classList.remove('correct', 'incorrect');
    });
    // Reset feedback display
    const feedbackEl = document.getElementById('quiz-feedback');
    if (feedbackEl) feedbackEl.innerText = "Select an option above to test your skills.";
  }

  const quizDone = localStorage.getItem('faang-daily-quiz-done');
  if (quizDone !== null) {
    const selectedIdx = parseInt(quizDone);
    showQuizFeedback(selectedIdx);
  }
}

function submitQuizAnswer(index) {
  const todayStr = new Date().toDateString();
  localStorage.setItem('faang-daily-quiz-done', index);
  localStorage.setItem('faang-daily-quiz-date', todayStr);
  showQuizFeedback(index);
}

function showQuizFeedback(selectedIndex) {
  const feedbackEl = document.getElementById('quiz-feedback');
  const optionButtons = document.querySelectorAll('.quiz-option-btn');
  if (!feedbackEl || optionButtons.length === 0) return;
  
  // Clear states
  optionButtons.forEach(btn => {
    btn.classList.remove('correct', 'incorrect');
    btn.disabled = true; // disable after select
  });
  
  const correctIdx = QUIZ_CHALLENGE.correct;
  
  // Add styling class
  optionButtons[correctIdx].classList.add('correct');
  if (selectedIndex !== correctIdx) {
    optionButtons[selectedIndex].classList.add('incorrect');
    feedbackEl.innerHTML = `<span style="color:#f43f5e; font-weight:700;">Incorrect!</span> ${QUIZ_CHALLENGE.explanation.fail}`;
  } else {
    feedbackEl.innerHTML = `<span style="color:#10b981; font-weight:700;">Correct!</span> ${QUIZ_CHALLENGE.explanation.success}`;
  }
}

// === STUDENT SCRATCHPAD MODULE ===
function initScratchpad() {
  const notesText = localStorage.getItem('faang-student-notes') || "";
  const textarea = document.getElementById('scratchpad-textarea');
  if (textarea) {
    textarea.value = notesText;
    updateWordCount(notesText);
    
    textarea.addEventListener('input', (e) => {
      const text = e.target.value;
      localStorage.setItem('faang-student-notes', text);
      updateWordCount(text);
      if (localStorage.getItem('faang-auth-token')) {
        queueNotesSync();
      }
    });
  }
}

function toggleScratchpadHUD() {
  const win = document.getElementById('scratchpad-window');
  if (!win) return;
  
  if (win.style.display === 'none' || win.style.display === '') {
    win.style.display = 'flex';
  } else {
    win.style.display = 'none';
  }
}

function updateWordCount(text) {
  const wordCountEl = document.getElementById('scratchpad-word-count');
  if (!wordCountEl) return;
  
  const trimmed = text.trim();
  const words = trimmed === "" ? 0 : trimmed.split(/\s+/).length;
  wordCountEl.innerText = `${words} ${words === 1 ? 'word' : 'words'}`;
}

function downloadStudentNotes() {
  const text = localStorage.getItem('faang-student-notes') || "";
  if (text.trim() === "") {
    alert("Scratchpad is empty. Add some study notes before exporting.");
    return;
  }
  
  const blob = new Blob([text], { type: 'text/plain' });
  const anchor = document.createElement('a');
  anchor.download = 'FAANG_Roadmap_Study_Notes.txt';
  anchor.href = window.URL.createObjectURL(blob);
  anchor.dataset.downloadurl = ['text/plain', anchor.download, anchor.href].join(':');
  
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}

// === RESET STATE ===
function resetAllPortalProgress(event) {
  event.preventDefault();
  if (confirm("Are you sure you want to reset all course progress stats and completion history? This action cannot be undone.")) {
    localStorage.removeItem('faang-completed-essays');
    localStorage.removeItem('faang-last-read');
    localStorage.removeItem('faang-streak-count');
    localStorage.removeItem('faang-last-active-date');
    localStorage.removeItem('faang-daily-quiz-done');
    completedEssays = [];
    
    // Reset Checkboxes
    document.querySelectorAll('.checkbox-hud-input').forEach(box => box.checked = false);
    document.querySelectorAll('.lesson-card-glass').forEach(card => card.classList.remove('completed'));
    
    // Reset Quiz
    const feedbackEl = document.getElementById('quiz-feedback');
    if (feedbackEl) feedbackEl.innerText = "Select an option above to test your skills.";
    document.querySelectorAll('.quiz-option-btn').forEach(btn => {
      btn.classList.remove('correct', 'incorrect');
      btn.disabled = false;
    });
    
    // Reset Streak dots
    document.querySelectorAll('.streak-dot').forEach(dot => dot.classList.remove('active'));
    const streakText = document.getElementById('streak-text');
    if (streakText) streakText.innerText = "0 Days Active";
    
    updateProgressHUD();
    loadResumeHUD();
    alert("Course progression matrix has been reset.");
  }
}

function toggleRoadmapGrid() {
  const grid = document.getElementById('roadmap-overview-section');
  if (grid) grid.classList.toggle('open');
}

function toggleFeaturesModal() {
  const modal = document.getElementById('features-modal');
  if (!modal) return;
  modal.style.display = (modal.style.display === 'none' || modal.style.display === '') ? 'flex' : 'none';
}

function toggleAchievementsModal() {
  const modal = document.getElementById('achievements-modal');
  if (!modal) return;
  modal.style.display = (modal.style.display === 'none' || modal.style.display === '') ? 'flex' : 'none';
}

// Account Auth and Sync Bindings
window.toggleAuthModal = toggleAuthModal;
window.switchAuthTab = switchAuthTab;
window.submitAuth = submitAuth;
window.logOut = logOut;
window.syncProgressToServer = syncProgressToServer;
window.syncProgressFromServer = syncProgressFromServer;
window.toggleRoadmapGrid = toggleRoadmapGrid;
window.toggleFeaturesModal = toggleFeaturesModal;
window.toggleAchievementsModal = toggleAchievementsModal;

// --- PREMIUM HOVER SPOTLIGHT TRACKER ---
function initSpotlightGlow() {
  document.addEventListener('mousemove', (e) => {
    // Only track if on desktop
    if (window.innerWidth <= 1024) return;
    
    const target = e.target.closest('.lesson-card-glass, .panel-glass, .quiz-card-hud, .resume-card');
    if (!target) return;
    
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty('--mouse-x', `${x}px`);
    target.style.setProperty('--mouse-y', `${y}px`);
  });
}

// --- QUANTUM PARTICLE NETWORK BACKGROUND ---
function initQuantumBackground() {
  const canvas = document.getElementById('quantum-bg');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;
  
  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });
  
  const particles = [];
  const maxParticles = Math.min(60, Math.floor((width * height) / 25000)); // Dynamic count based on screen size
  
  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.35;
      this.vy = (Math.random() - 0.5) * 0.35;
      this.radius = Math.random() * 1.5 + 0.5;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = document.body.classList.contains('light-theme') ? 'rgba(109, 40, 217, 0.15)' : 'rgba(139, 92, 246, 0.35)';
      ctx.fill();
    }
  }
  
  for (let i = 0; i < maxParticles; i++) {
    particles.push(new Particle());
  }
  
  function drawLines() {
    const isLightTheme = document.body.classList.contains('light-theme');
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          const opacity = 0.12 * (1 - dist / 110);
          ctx.strokeStyle = isLightTheme ? `rgba(109, 40, 217, ${opacity * 0.6})` : `rgba(6, 182, 212, ${opacity})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
  }
  
  function loop() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    drawLines();
    requestAnimationFrame(loop);
  }
  
  loop();
}
