/**
 * ────────────────────────────────────────────────────────────
 *  EDIT EVERYTHING ABOUT YOUR SITE HERE.
 * ────────────────────────────────────────────────────────────
 */

export const profile = {
  name: "Katravath Vinod",
  shortName: "KV",
  role: "Full-Stack Developer",
  // The big hero line. Words wrapped in *asterisks* get the gradient highlight.
  headline: "Building *reliable, AI-powered* products at scale.",
  tagline:
    "Full-Stack Developer with 2 years at a healthcare startup, building production-grade apps with React, TypeScript, Node.js & MongoDB. Into microservices (gRPC, Temporal), cloud (AWS, GCP), and hands-on GenAI & real-time features people actually use.",
  availability: "Open to Software Developer roles",
  location: "Hyderabad / Remote",

  // ── CONTACT ────────────────────────────────────────────────
  email: "katravathvinod2509@gmail.com",
  phone: "+91 8688725530",
  resumeUrl: "/resume.pdf", // replace public/resume.pdf with your real PDF
  photo: "/profile.jpg", // drop your photo at public/profile.jpg (placeholder: /profile.svg)

  socials: {
    github: "https://github.com/Vinod2509",
    linkedin: "https://www.linkedin.com/in/katravathvinod/",
    leetcode: "https://leetcode.com/u/vinod_katravath/",
  },
};

// ── STATS BAND ───────────────────────────────────────────────
export const stats = [
  { value: "600+", label: "LeetCode solved", sub: "top 15% globally" },
  { value: "35%", label: "faster page loads", sub: "via render optimization" },
  { value: "2yr", label: "production exp", sub: "healthcare startup" },
  { value: "3×", label: "product lines", sub: "Stripe + Razorpay" },
  { value: "+40%", label: "session duration", sub: "real-time chat app" },
];

// ── CORE STACK ───────────────────────────────────────────────
export const stack = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "NestJS",
  "gRPC",
  "Temporal",
  "MongoDB",
  "PostgreSQL",
  "Redis",
  "Socket.io",
  "AWS · GCP",
  "GenAI / LLMs",
];

// ── FEATURED PROJECTS ────────────────────────────────────────
export const projects = [
  {
    title: "MindCare AI",
    badge: "LIVE",
    description:
      "Multi-tenant, AI-powered behavioral-health platform with role-based access (user / admin / superadmin) across subdomain-isolated orgs. Conversational AI intake, real-time mood dashboards, and appointment workflows — secured with Postgres Row-Level Security.",
    tags: ["Next.js", "Supabase", "RBAC · RLS", "LLM"],
    link: "https://neuralcare-ai.com/",
    featured: true,
  },
  {
    title: "Real-Time Chat + Code Editor",
    description:
      "Text / image / video chat at sub-100ms latency over Socket.io & WebSockets, with JWT-secured APIs. Drove +40% session duration and +20% user retention.",
    tags: ["Socket.io", "Node.js", "Express", "MongoDB"],
    link: "",
  },
  {
    title: "Multi-provider Payments",
    description:
      "Stripe + Razorpay integration powering secure transactions across 3 product lines with flexible, config-driven setups and streamlined payment workflows.",
    tags: ["Stripe", "Razorpay", "Webhooks"],
    link: "",
    accent: true,
  },
];

// ── WORK HISTORY ─────────────────────────────────────────────
export const experience = [
  {
    company: "Unify Technologies",
    role: "Full-Stack Developer",
    period: "Feb 2025 — Present",
    current: true,
    points: [
      "Architected and delivered full-stack modules end to end — schema design, NestJS REST APIs, and React + TypeScript + Tailwind frontends.",
      "Built scalable UI workflows with dynamic state & optimized rendering, cutting average page load time by 35%.",
      "Shipped multi-provider payments (Stripe, Razorpay) with flexible configs across 3 product lines.",
      "Integrated LLM APIs (OpenAI / Gemini) for summarization, intelligent auto-fill & assistants; built Temporal-powered AI inference pipelines and semantic search.",
    ],
  },
  {
    company: "Civil Guruji",
    role: "Full-Stack Developer Intern",
    period: "Jun 2024 — Dec 2024",
    points: [
      "Built end-to-end auth (login, signup, password reset) with React + Express and JWT sessions.",
      "Shipped subscription & review workflows, driving a 30% increase in platform participation within 3 months.",
      "Developed responsive job listing & application flows, cutting candidate submission time by 25%.",
    ],
  },
];

// ── WHAT I DO ────────────────────────────────────────────────
export const services = [
  {
    title: "Full-Stack Development",
    description:
      "Scalable web apps end to end — clean NestJS APIs, typed React frontends, reliable backends.",
  },
  {
    title: "Distributed Systems",
    description:
      "Microservices with gRPC & Temporal; resilient, observable, production-grade workflows.",
  },
  {
    title: "GenAI Integration",
    description:
      "LLM-powered features, semantic search & AI workflows that ship to real users.",
  },
  {
    title: "Real-Time & Cloud",
    description:
      "Low-latency real-time (Socket.io, WebSockets) and cloud delivery on AWS & GCP.",
  },
];
