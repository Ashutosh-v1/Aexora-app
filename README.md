# Aexora | Smart AI Expense Tracker

**Aexora** is a modern, AI-integrated financial management solution designed to simplify how users track, analyze, and optimize their personal finances. Built with **Next.js**, it leverages artificial intelligence to provide actionable insights and automated categorization.

---

## 🚀 Features

* **AI-Powered Insights:** Automatically categorizes transactions and provides personalized budgeting advice.
* **Real-time Analytics:** Interactive dashboards to visualize spending patterns over time.
* **Smart Budgeting:** Set monthly limits and receive AI-driven alerts before you overspend.
* **Scalable Architecture:** Built with a focus on high performance and clean code principles.
* **Secure Authentication:** Robust user data protection and secure session management.

---

## 🛠️ Tech Stack

### **Frontend & Framework**
* **Next.js 14+** (App Router)
* **Tailwind CSS** (Styling & Responsive Design)
* **Shadcn/UI** (Component Library)
* **Lucide React** (Iconography)

### **Backend & Database**
* **Prisma** (Database ORM)
* **PostgreSQL / MongoDB** (Database)
* **Middleware.js** (Edge-based request handling)

### **AI Integration**
* **Gemini API / OpenAI SDK** (Intelligent financial analysis)

---

## 📂 Project Structure


```text
/aexora
├── actions/            # Server Actions for form submissions & data mutations
├── app/                # Next.js App Router (Pages, Layouts, API routes)
├── components/         # Reusable UI components (shadcn/ui)
├── data/               # Static data or initial seeds
├── hooks/              # Custom React hooks (state & logic)
├── lib/                # Utility functions, DB clients, and AI logic
├── prisma/             # Database schema and migrations
├── public/             # Static assets (images, icons, etc.)
└── middleware.js       # Authentication and route protection logic