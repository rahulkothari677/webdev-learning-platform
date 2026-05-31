# WebDev Pathway — Modern Full-Stack & Systems Engineering

**Live Link:** [https://www.webdevpathway.com](https://www.webdevpathway.com)  
**Author / Developer:** Rahul Kothari  

WebDev Pathway is a premium, interactive, full-stack educational roadmap portal designed to guide developers from fundamental web setups to enterprise system architectures. The platform features an interactive curriculum overview grid, checked progress tracking, persistent study scratchpads, daily skill quizzes, and an integrated AI tutor.

---

## 🚀 Key Highlights & Features

* 📊 **Standard Graphics & Architecture Diagrams:** Every single technical module contains visual diagrams of engine lifecycles, CSS paint cascades, networking pipelines, and server cluster topologies.
* 🤖 **AI Tutor Assistant:** Built-in context-aware AI chatbot panel that reads the active essay context and answers student questions, reviews code snippets, or validates concepts.
* 🕶️ **Focus Mode:** A single-toggle layout that collapses sidebars, navigation panels, and HUD graphics to produce a clean, distraction-free reading column.
* 📝 **Auto-Saving Study Scratchpad:** An integrated rich editor allowing students to take notes while reading. Notes auto-save in local browser cache and can be exported as a text file.
* 🌓 **Theme Controls:** Comfortable eye-strain defenses including a dark cyber-themed layout ("Dark Cyber") and a sleek high-contrast light mode ("Light Lab").
* 🔥 **Learning Streaks & Quizzes:** Gamified daily challenge cards and active streak indicators map student commitment.
* ☁️ **Cloud synchronization:** Auto-syncs checked lessons list, notes, and streak statuses to a secure cloud database to resume learning on any device.

---

## 🛠️ Technology Stack

### Frontend System
* **HTML5 / CSS3 (Vanilla):** Dynamic, ultra-responsive layouts utilizing flexbox grid models, glassmorphism filters, CSS keyframe animation pipelines, and GPU hardware acceleration.
* **JavaScript (ES6+):** Vanilla event-driven application architecture, handling search queries filters, accordion transitions, and local storage caches.

### Backend Infrastructure
* **Node.js & Express:** Scalable modular routing, input validations using **Zod** schema guardrails, custom global exception handling, and cors security boundaries.
* **Databases:** Relational database systems (**PostgreSQL** connected via **Prisma ORM**) and document database clusters (**MongoDB** handled via **Mongoose** schemas).
* **Security & Auth:** Cryptographic encryption (bcrypt password salting), JSON Web Tokens (JWT) access keys with cookies, and Role-Based Access Control (RBAC) middleware.
* **Real-time Pipelines:** WebSockets (**Socket.io**) connection layers for duplex transmissions.
* **Caching & Uploads:** File stream processing (**Multer** + cloud uploads) and session memory caching (**Redis**).

---

## 📈 19-Phase Curriculum Architecture

The syllabus contains **91 engineered modules** structured across key engineering tracks:
* **Foundation (Phase 0):** Dev environment config, terminal commands, Git version control.
* **Frontend Core (Phases 1-4):** Semantic document trees, responsive painting, V8 execution scopes, React virtual DOM states.
* **Advanced Frontend (Phase 5):** Next.js server components, segment configurations, caching time invalidation models.
* **Tooling & Backend (Phases 6-10):** DevTools diagnostics, Node runtime engines, Prisma schemas, JWT cookies, Redis session caches.
* **Systems & AI (Phases 11-12):** CAP theorem scaling, Kafka event partitions, Gemini API prompt engineering.
* **CS & DevOps (Phases 13-16):** Network handshake processes, browser rendering steps, Docker container configurations, GitHub Actions workflows.
* **Capstones & Career (Phases 17-18):** Real-time Capstone applications, portfolio drafting, STAR negotiations playbook.

---

## ⚙️ Running Locally

### Frontend Setup
1. Navigate to the `frontend/` directory.
2. Open `index.html` directly in a browser or run a simple local server:
   ```bash
   npx serve .
   ```

### Backend Setup
1. Navigate to the `backend/` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your `.env` configuration (Database URLs, JWT Secrets).
4. Run migrations:
   ```bash
   npx prisma migrate dev
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

---

## 📄 License & Intellectual Property

This project is proprietary and copyright-protected. All rights are reserved by **Rahul Kothari**. 
Recruiters and hiring managers are granted full access to download and review the code for employment evaluation. Public cloning, hosting duplicates, or copying code blocks for public deployments is strictly prohibited. See the `LICENSE` file for details.
