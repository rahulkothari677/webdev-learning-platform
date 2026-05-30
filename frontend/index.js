// ── COURSE ESSAYS DATABASE ──
const ESSAYS_DATA = {
  "1.1": { title: "Essay 1.1 — HTML: The Skeleton of Every Webpage", phase: 1, path: "essays/essay-1.1.html", time: 45 },
  "1.2": { title: "Essay 1.2 — CSS: Layout Paradigms & Paint Budgets", phase: 1, path: "essays/essay-1.2.html", time: 45 },
  "1.3": { title: "Essay 1.3 — HTML5 Modern Features & Metadata", phase: 1, path: "essays/essay-1.3.html", time: 45 },
  "2.1": { title: "Essay 2.1 — CSS Fundamentals & Specificity Hierarchy", phase: 2, path: "essays/essay-2.1.html", time: 45 },
  "2.2": { title: "Essay 2.2 — Flexbox Layouts: Linear Space Alignment Rules", phase: 2, path: "essays/essay-2.2.html", time: 45 },
  "2.3": { title: "Essay 2.3 — CSS Grid Matrix: Two-Dimensional Space Frameworks", phase: 2, path: "essays/essay-2.3.html", time: 45 },
  "2.4": { title: "Essay 2.4 — Responsive Design: Mobile-First Viewports & Media Queries", phase: 2, path: "essays/essay-2.4.html", time: 45 },
  "2.5": { title: "Essay 2.5 — CSS Transitions & Animations: High-Performance Visual Timelines", phase: 2, path: "essays/essay-2.5.html", time: 45 },
  "2.6": { title: "Essay 2.6 — Tailwind CSS: Modern Utility-First Style Architecture", phase: 2, path: "essays/essay-2.6.html", time: 45 },
  "3.1": { title: "Essay 3.1 — JavaScript Engine Loop: Variables, Conditions, & Execution Pipelines", phase: 3, path: "essays/essay-3.1.html", time: 45 },
  "3.2": { title: "Essay 3.2 — Functions & Closures: Advanced Scope Lifecycle Operations", phase: 3, path: "essays/essay-3.2.html", time: 45 },
  "3.3": { title: "Essay 3.3 — Array Modules & Higher-Order Methods: Map, Filter, & Reduce Algebra", phase: 3, path: "essays/essay-3.3.html", time: 45 },
  "3.4": { title: "Essay 3.4 — Objects & Structural Operators: Destructuring, Spread, & Optional Chaining Matrices", phase: 3, path: "essays/essay-3.4.html", time: 45 },
  "3.5": { title: "Essay 3.5 — DOM Manipulation: Scribing Element Nodes & Core Layout Integrity", phase: 3, path: "essays/essay-3.5.html", time: 45 },
  "3.6": { title: "Essay 3.6 — Event Architecture: Listeners, Bubbling, & Delegation Pipelines", phase: 3, path: "essays/essay-3.6.html", time: 45 },
  "3.7": { title: "Essay 3.7 — Asynchronous JavaScript: Timers, Promises, & Event Loop Architectures", phase: 3, path: "essays/essay-3.7.html", time: 45 },
  "3.8": { title: "Essay 3.8 — Fetch API: Making Network Requests & Parsing JSON Payloads", phase: 3, path: "essays/essay-3.8.html", time: 45 },
  "3.9": { title: "Essay 3.9 — ES6+ Modern Features: Modules, Template Literals, & Local Storage", phase: 3, path: "essays/essay-3.9.html", time: 45 },
  "4.1": { title: "Essay 4.1 — React Fundamentals: Virtual DOM Architectures & Component Structures", phase: 4, path: "essays/essay-4.1.html", time: 45 },
  "4.2": { title: "Essay 4.2 — State with useState: Managing Component Data Transitions", phase: 4, path: "essays/essay-4.2.html", time: 50 },
  "4.3": { title: "Essay 4.3 — useEffect: Side Effects, Data Fetching, & Cleanup", phase: 4, path: "essays/essay-4.3.html", time: 55 },
  "4.4": { title: "Essay 4.4 — React Router: Multi-Page Web Applications & URL Parameters Tracking", phase: 4, path: "essays/essay-4.4.html", time: 50 },
  "4.5": { title: "Essay 4.5 — Forms in React: Controlled Inputs & Validation Handlers", phase: 4, path: "essays/essay-4.5.html", time: 45 },
  "4.6": { title: "Essay 4.6 — useContext: Global State Orchestration & Prop Drilling Elimination", phase: 4, path: "essays/essay-4.6.html", time: 50 },
  "4.7": { title: "Essay 4.7 — Scaled Codebase Organization & Vercel Deployment", phase: 4, path: "essays/essay-4.7.html", time: 45 },
  "5.1": { title: "Essay 5.1 — Next.js Framework: Server Components & File Routing Networks", phase: 5, path: "essays/essay-5.1.html", time: 50 },
  "5.2": { title: "Essay 5.2 — Data Fetching on the Server: Server Actions & Direct Database Ingestions", phase: 5, path: "essays/essay-5.2.html", time: 50 },
  "5.3": { title: "Essay 5.3 — Data Caching & Revalidations: Force Dynamic, Fetch Flags, & Time Invalidation Models", phase: 5, path: "essays/essay-5.3.html", time: 45 },
  "5.4": { title: "Essay 5.4 — Static vs Dynamic Rendering: PPR, Streaming, & Segment Options", phase: 5, path: "essays/essay-5.4.html", time: 45 },
  "5.5": { title: "Essay 5.5 — Middleware Engines: Request Interceptions & Security", phase: 5, path: "essays/essay-5.5.html", time: 40 },
  "5.6": { title: "Essay 5.6 — Platform API Optimizations: Route Handlers & Edge Streaming", phase: 5, path: "essays/essay-5.6.html", time: 40 },
  "5.7": { title: "Essay 5.7 — Advanced Full-Stack Security: CSRF Defenses, XSS Mitigation, & CORS Controls", phase: 5, path: "essays/essay-5.7.html", time: 45 },
  "5.8": { title: "Essay 5.8 — Ecosystem Deployment: Multi-Zone Optimizations & Vercel Advanced Architectures", phase: 5, path: "essays/essay-5.8.html", time: 45 },
  "6.1": { title: "Essay 6.1 — Browser DevTools: Elements, Console, Network, Performance, & Sources", phase: 6, path: "essays/essay-6.1.html", time: 40 },
  "6.2": { title: "Essay 6.2 — VS Code Mastery: Extensions, Shortcuts, Debugging, &amp; Snippets", phase: 6, path: "essays/essay-6.2.html", time: 40 },
  "6.3": { title: "Essay 6.3 — Postman: Testing APIs, Environments, Collections, &amp; Automation Frameworks", phase: 6, path: "essays/essay-6.3.html", time: 40 },
  "7.1": { title: "Essay 7.1 — Node.js Fundamentals: Event Loop, Libuv Threads, npm, &amp; package.json", phase: 7, path: "essays/essay-7.1.html", time: 45 },
  "7.2": { title: "Essay 7.2 — Express Core: Server Framework Instantiation &amp; Port Handshaking", phase: 7, path: "essays/essay-7.2.html", time: 40 },
  "7.3": { title: "Essay 7.3 — Routes, Middleware, and the HTTP Request-Response Lifecycle Matrix", phase: 7, path: "essays/essay-7.3.html", time: 45 },
  "7.4": { title: "Essay 7.4 — Input Validation with Zod: Schema Enforcement &amp; Defensive Request Guardrails", phase: 7, path: "essays/essay-7.4.html", time: 45 },
  "7.5": { title: "Essay 7.5 — Error Handling Middleware: Professional Global Trace Management", phase: 7, path: "essays/essay-7.5.html", time: 40 },
  "7.6": { title: "Essay 7.6 — Environment Variables: dotenv, Secrets, &amp; Configuration Management", phase: 7, path: "essays/essay-7.6.html", time: 40 },
  "7.7": { title: "Essay 7.7 — Building a Complete REST API: Putting All Backend Skills Together", phase: 7, path: "essays/essay-7.7.html", time: 50 },
  "8.1": { title: "Essay 8.1 — Database Fundamentals: Relational vs NoSQL Topologies", phase: 8, path: "essays/essay-8.1.html", time: 40 },
  "8.2": { title: "Essay 8.2 — SQL Fundamentals: Structured Query Mutations &amp; Data Filters", phase: 8, path: "essays/essay-8.2.html", time: 40 },
  "8.3": { title: "Essay 8.3 — Advanced SQL: Relational JOIN Planes, Aggregations, &amp; Subqueries", phase: 8, path: "essays/essay-8.3.html", time: 45 },
  "8.4": { title: "Essay 8.4 — PostgreSQL in Practice: Cluster Setup, pgAdmin Management, &amp; Connection Pools", phase: 8, path: "essays/essay-8.4.html", time: 45 },
  "8.5": { title: "Essay 8.5 — Prisma ORM: Type-Safe Database Access, Declarative Schemas, &amp; Automated Migrations", phase: 8, path: "essays/essay-8.5.html", time: 45 },
  "8.6": { title: "Essay 8.6 — Database Design: Normalization Rules, ER Diagrams, &amp; Schema Planning", phase: 8, path: "essays/essay-8.6.html", time: 40 },
  "8.7": { title: "Essay 8.7 — MongoDB and Mongoose: Document Databases, CRUD Operations, &amp; Schemas", phase: 8, path: "essays/essay-8.7.html", time: 45 },
  "9.1": { title: "Essay 9.1 — Authentication Fundamentals: Sessions, Cookies, &amp; Login Architecture", phase: 9, path: "essays/essay-9.1.html", time: 45 },
  "9.2": { title: "Essay 9.2 — Password Hashing with bcrypt: Cryptographic Salts &amp; One-Way Functions", phase: 9, path: "essays/essay-9.2.html", time: 45 },
  "9.3": { title: "Essay 9.3 — JWT in Practice: Creating, Verifying, Refresh Tokens, &amp; Secure Storage", phase: 9, path: "essays/essay-9.3.html", time: 45 },
  "9.4": { title: "Essay 9.4 — Role-Based Access Control (RBAC): Protecting Routes &amp; Authority Matrices", phase: 9, path: "essays/essay-9.4.html", time: 55 },
  "9.5": { title: "Essay 9.5 — Production Node.js Security: Helmet, CORS, Rate-Limiting, &amp; OWASP Top 10", phase: 9, path: "essays/essay-9.5.html", time: 45 },
  "10.1": { title: "Essay 10.1 — File Upload with Multer &amp; Cloud Storage with Cloudinary", phase: 10, path: "essays/essay-10.1.html", time: 45 },
  "10.2": { title: "Essay 10.2 — Email Sending: NodeMailer, SendGrid, &amp; Transactional Routing Structures", phase: 10, path: "essays/essay-10.2.html", time: 45 },
  "10.3": { title: "Essay 10.3 — WebSockets &amp; Real-Time Systems with Socket.io", phase: 10, path: "essays/essay-10.3.html", time: 45 },
  "10.4": { title: "Essay 10.4 — Redis Cache Topologies: Strategies, Session Storage, &amp; Pub/Sub Channels", phase: 10, path: "essays/essay-10.4.html", time: 45 },
  "11.1": { title: "Essay 11.1 — System Design Foundations: Scalability, CAP Theorem, &amp; Load Balancers", phase: 11, path: "essays/essay-11.1.html", time: 45 },
  "11.2": { title: "Essay 11.2 — Database Internals: ACID Compliance, Indexing, Sharding, &amp; Replication", phase: 11, path: "essays/essay-11.2.html", time: 45 },
  "11.3": { title: "Essay 11.3 — Caching Architecture: Strategies, Invalidation, &amp; Distributed Topologies", phase: 11, path: "essays/essay-11.3.html", time: 45 },
  "11.4": { title: "Essay 11.4 — Message Queues: Kafka, RabbitMQ, Async Processing, &amp; Job Queues", phase: 11, path: "essays/essay-11.4.html", time: 45 },
  "11.5": { title: "Essay 11.5 — Designing Real Systems: URL Shortener, WhatsApp, YouTube, &amp; Google Drive", phase: 11, path: "essays/essay-11.5.html", time: 45 },
  "11.6": { title: "Essay 11.6 — Microservices vs. Monoliths: The Real-World Engineering Trade-Offs", phase: 11, path: "essays/essay-11.6.html", time: 45 },
  "12.1": { title: "Essay 12.1 — AI and LLMs: What Every Web Developer Needs to Understand", phase: 12, path: "essays/essay-12.1.html", time: 45 }
};

// Quiz Question Database
const QUIZ_CHALLENGE = {
  question: "Which JS Higher-Order method returns a new array with elements that pass a logical condition?",
  options: ["A) map()", "B) reduce()", "C) filter()"],
  correct: 2,
  explanation: {
    success: "🎉 Correct! filter() evaluates a boolean condition on each item and returns a new shallow array containing only the matching elements.",
    fail: "❌ Incorrect. map() transforms elements in place, reduce() aggregates values into a single value, whereas filter() is explicitly used to extract items matching conditions."
  }
};

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
  initStreakTracker();
  initQuizChallenge();
  initScratchpad();
  updateProgressHUD();
  updateAuthHUD();
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
    if (completedEssays.includes(id)) {
      checkbox.checked = true;
      card.classList.add('completed');
    } else {
      checkbox.checked = false;
      card.classList.remove('completed');
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
  
  // Animation for Percent Text & Bar
  document.getElementById('progress-percent-val').innerText = `${percent}%`;
  document.getElementById('progress-bar-fill-bar').style.width = `${percent}%`;
  
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
  const phaseLessons = { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [], 11: [], 12: [] };
  
  Object.keys(ESSAYS_DATA).forEach(id => {
    const l = ESSAYS_DATA[id];
    phaseLessons[l.phase].push(id);
  });
  
  let foundActive = false;
  for (let p = 1; p <= 12; p++) {
    const totalInPhase = phaseLessons[p].length;
    const completedInPhase = phaseLessons[p].filter(id => completedEssays.includes(id)).length;
    
    // Update phase accordion stats row text
    const statsLabel = document.getElementById(`p${p}-stats`);
    if (statsLabel) {
      let estHours = p === 1 ? '2.0' : p === 2 ? '4.0' : p === 3 ? '6.5' : p === 4 ? '5.5' : p === 5 ? '6.0' : p === 7 ? '5.0' : p === 8 ? '5.0' : p === 10 ? '3.0' : p === 11 ? '4.5' : p === 12 ? '1.0' : '2.5';
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
  const quizDone = localStorage.getItem('faang-daily-quiz-done');
  if (quizDone !== null) {
    const selectedIdx = parseInt(quizDone);
    showQuizFeedback(selectedIdx);
  }
}

function submitQuizAnswer(index) {
  localStorage.setItem('faang-daily-quiz-done', index);
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

// Account Auth and Sync Bindings
window.toggleAuthModal = toggleAuthModal;
window.switchAuthTab = switchAuthTab;
window.submitAuth = submitAuth;
window.logOut = logOut;
window.syncProgressToServer = syncProgressToServer;
window.syncProgressFromServer = syncProgressFromServer;
