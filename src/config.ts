/**
 * ────────────────────────────────────────────────────────────
 *  EDIT EVERYTHING ABOUT YOUR SITE HERE.
 *  Swap any placeholder below with your real details.
 * ────────────────────────────────────────────────────────────
 */

export const profile = {
  name: "Vinod Katravath",
  shortName: "VK",
  role: "Full-Stack Developer",
  // The big hero line. Words wrapped in *asterisks* get the gradient highlight.
  headline: "Building *reliable, AI-powered* products at scale.",
  tagline:
    "Full-Stack Developer with 2+ years shipping production features end to end at a healthcare startup. Strong on the fundamentals — data structures, system design, clean APIs — and hands-on putting AI into products people actually use.",
  availability: "Open to Software Developer roles",
  location: "Hyderabad / Remote",

  // ── CONTACT ────────────────────────────────────────────────
  email: "systems@unify.digital", // ← replace with your real email
  phone: "+91 8688725530", // ← replace / remove
  resumeUrl: "/resume.pdf", // ← put your resume.pdf in /public

  socials: {
    github: "https://github.com/", // ← your GitHub
    linkedin: "https://linkedin.com/in/", // ← your LinkedIn
    leetcode: "https://leetcode.com/", // ← your LeetCode (optional)
  },
};

// ── STATS BAND ───────────────────────────────────────────────
export const stats = [
  { value: "600+", label: "LeetCode solved", sub: "top 15% globally" },
  { value: "35%", label: "faster page loads", sub: "via render optimization" },
  { value: "2yr", label: "production exp", sub: "healthcare startup" },
  { value: "3×", label: "product lines", sub: "Stripe + Razorpay" },
  { value: "40%", label: "lower AI cost", sub: "caching + embeddings" },
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
  "Socket.io",
  "Agora",
  "AWS · GCP",
  "GenAI / LLMs",
];

// ── FEATURED PROJECTS ────────────────────────────────────────
export const projects = [
  {
    title: "MindCare AI",
    badge: "LIVE",
    description:
      "Multi-tenant, AI-powered behavioral-health platform with role-based access across subdomain-isolated orgs. Conversational AI intake, real-time mood dashboards, and appointment workflows — secured with Postgres Row-Level Security.",
    tags: ["Next.js", "Supabase", "RBAC · RLS", "LLM"],
    link: "", // ← live URL or GitHub (optional)
    featured: true,
  },
  {
    title: "Real-Time Chat + Code Editor",
    description:
      "Text / image / video chat at sub-100ms latency over Socket.io, with a collaborative code editor. Drove +40% session duration.",
    tags: ["Socket.io", "Node", "MongoDB", "Agora"],
    link: "",
  },
  {
    title: "Multi-provider Payments",
    description:
      "Stripe + Razorpay integration powering secure transactions across 3 product lines with flexible, config-driven setups.",
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
    period: "2023 — Present",
    current: true,
    points: [
      "Shipped production features end to end for a healthcare platform using React, TypeScript, Node.js & MongoDB.",
      "Built distributed services with microservices architecture (gRPC, Temporal) for reliable, scalable workflows.",
      "Integrated GenAI & LLM-powered workflows; cut AI cost ~40% with caching and embeddings.",
      "Delivered real-time features (Agora, Socket.io) and cloud integrations across AWS & GCP.",
    ],
  },
  // Add more roles here if you have them.
];

// ── WHAT I DO ────────────────────────────────────────────────
export const services = [
  {
    title: "Full-Stack Development",
    description:
      "Scalable web apps end to end — clean APIs, typed frontends, and reliable backends.",
  },
  {
    title: "Distributed Systems",
    description:
      "Microservices with gRPC & Temporal; resilient, observable, production-grade workflows.",
  },
  {
    title: "GenAI Integration",
    description:
      "LLM-powered features, embeddings & RAG that ship to real users — cost-aware and fast.",
  },
  {
    title: "Real-Time & Cloud",
    description:
      "Low-latency real-time (Socket.io, Agora) and cloud delivery on AWS & GCP.",
  },
];
