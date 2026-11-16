
"use client";

import {
  motion,
  useInView,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

import {
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react";

import {
  ExternalLink,
  Github,
  X,
  ArrowUpRight,
} from "lucide-react";

import myone from "../../../public/images/myone.png";
import learnyah from "../../../public/images/learnyah.png";
import wed from "../../../public/images/wedding.png";
import other from "../../../public/images/others.png";
import aispeech from "../../../public/images/aispeech.png";
import nexachain from "../../../public/images/nexachain.png";

export function Projects() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.1,
  });

  // Custom cursor motion
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const smoothX = useSpring(cursorX, {
    stiffness: 350,
    damping: 30,
    mass: 0.5,
  });

  const smoothY = useSpring(cursorY, {
    stiffness: 350,
    damping: 30,
    mass: 0.5,
  });

  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorHover, setCursorHover] = useState(false);

  const [selectedProject, setSelectedProject] = useState<Project | null>(
    null
  );

  // Project data
  const projects = [
    {
      title: "LearnYah - AI Learning Assistant",
      description:
        "A multi-user AI-powered learning platform that lets users upload study materials, ask document-based questions, understand complex concepts, and practice with AI-generated quizzes. Built using Retrieval-Augmented Generation (RAG), semantic search, embeddings, and LLM integration, with secure authentication and isolated user documents.",
      tags: [
        "Python",
        "FastAPI",
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "SQLAlchemy",
        "RAG",
        "FAISS",
        "Sentence Transformers",
        "Groq",
        "JWT",
        "Cloudflare R2",
        "Google Cloud Run",
        "Vercel",
      ],
      gradient: "from-violet-500/20 to-cyan-500/20",
      image: learnyah,
      code_link: [
        "https://github.com/Shayazath/Learnwise_frontend",
        "https://github.com/Shayazath/Learnwise_backend",
      ],
      live_url: ["https://learnyah-frontend.vercel.app"],
    },
    {
      title: "Nexachain - Investment Platform",
      description:
        "A full-stack investment and referral-based platform featuring JWT authentication, investment management, automated daily ROI calculations, multi-level referral income distribution, wallet transactions, and an interactive investor dashboard.",
      tags: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "JWT",
        "Node-cron",
        "Google Cloud Run",
        "Vercel",
      ],
      gradient: "from-cyan-500/20 to-blue-500/20",
      image: nexachain,
      code_link: [
        "https://github.com/Shayazath/nexachain-frontend",
        "https://github.com/Shayazath/nexachain-backend",
      ],
      live_url: ["https://nexachain-frontend-brown.vercel.app/"],
    },
    {
      title: "AI Speak to Text",
      description:
        "An AI-powered speech-to-text platform built with FastAPI and Faster-Whisper. Supports real-time microphone transcription and audio file uploads. Detects English, Hindi, and mixed-language speech, with editable transcripts and history management.",
      tags: [
        "Python",
        "FastAPI",
        "faster-whisper",
        "Next.js",
        "TypeScript",
        "WebSockets",
        "TiDB Cloud",
        "Google Cloud Run",
        "Vercel",
      ],
      gradient: "from-cyan-500/20 to-violet-500/20",
      image: aispeech,
      code_link: [
        "https://github.com/Shayazath/ai-speak-to-text-frontend",
        "https://github.com/Shayazath/ai-speak-to-text-backend",
      ],
      live_url: ["https://ai-speak-to-text-frontend.vercel.app/"],
    },
    {
      title: "Myone - Study app",
      description:
        "A social-driven study platform featuring user-contributed academic resources, interactive community engagement with likes and comments, and real-time collaborative chatting.",
      tags: ["React Native", "Express.js", "MongoDB", "AWS"],
      gradient: "from-primary/20 to-accent/20",
      image: myone,
      code_link: ["https://github.com/Shayazath/myone-rebuild"],
      live_url: [],
    },
    {
      title: "Wedding website",
      description:
        "A modern, high-performance wedding portal built with Vite and React, featuring elegant UI components to showcase event timelines, RSVP management, and the couple's journey.",
      tags: ["React", "Vite", "Emailjs", "Vercel"],
      gradient: "from-primary/20 to-accent/20",
      image: wed,
      code_link: ["https://github.com/Shayazath/wedding"],
      live_url: ["https://wedding-rahman-karishma.vercel.app/"],
    },
    {
      title: "Boredom stuffs",
      description:
        "Built out of moments of boredom, these projects came to life with a cold cup of coffee sitting beside me and 90s music playing in the background.",
      tags: ["JavaScript", "React", "CSS", "HTML"],
      gradient: "from-accent/20 to-primary/20",
      image: other,
      code_link: [
        "https://github.com/Shayazath/Wanna-be-mine-",
        "https://github.com/Shayazath/wedding",
      ],
      live_url: [
        "https://shayazath.github.io/Wanna-be-mine-/",
        "https://shayazath.github.io/Know-SHAYAZ",
      ],
    },
  ];

  type Project = (typeof projects)[number];

  // Cursor handlers
  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (selectedProject) return;

    cursorX.set(event.clientX);
    cursorY.set(event.clientY);
    setCursorVisible(true);
  };

  const handleMouseLeave = () => {
    setCursorVisible(false);
    setCursorHover(false);
  };

  // Close popup with Escape and prevent background scrolling
  useEffect(() => {
    if (!selectedProject) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24 md:cursor-none"
    >
      {/* Background decoration */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent" />

      {/* Main container */}
      <div className="relative mx-auto max-w-6xl">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 35 }
          }
          transition={{ duration: 0.6 }}
          className="mb-12 text-center sm:mb-16"
        >
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
            Featured{" "}
            <span className="text-primary">Projects</span>
          </h2>

          <div className="mx-auto h-1 w-20 rounded-full bg-primary" />

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
            A collection of applications and products I've
            designed, developed, and deployed.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:gap-8">
          {projects.map((project, index) => (
            <motion.button
              key={project.title}
              type="button"
              initial={{ opacity: 0, y: 35 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 35 }
              }
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => setSelectedProject(project)}
              onMouseEnter={() => setCursorHover(true)}
              onMouseLeave={() => setCursorHover(false)}
              aria-label={`View ${project.title} details`}
              className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-border bg-card text-left transition-all duration-300 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:cursor-none"
            >
              {/* Hover gradient */}
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              />

              {/* Project image */}
              <div className="relative h-48 w-full shrink-0 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 sm:h-56">
                <img
                  src={project.image.src}
                  alt={`${project.title} preview`}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                <span className="absolute bottom-3 right-3 flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3 py-2 text-xs font-medium text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
                  View project
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>

              {/* Card content */}
              <div className="relative z-10 flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="mb-3 text-xl font-semibold transition-colors group-hover:text-primary sm:text-2xl">
                  {project.title}
                </h3>

                <p className="mb-5 line-clamp-3 text-sm leading-7 text-muted-foreground sm:text-base">
                  {project.description}
                </p>

                {/* Technology tags */}
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-secondary/70 px-3 py-1.5 text-xs font-medium transition-colors group-hover:border-primary/40 sm:text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Explore project */}
                <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-4">
                  <span className="text-sm font-medium text-primary">
                    Explore project
                  </span>

                  <ArrowUpRight className="h-5 w-5 text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Project details popup */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-0 backdrop-blur-md sm:p-5 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-dialog-title"
              className="relative flex h-[100dvh] w-full flex-col overflow-hidden border border-border bg-card shadow-2xl sm:h-auto sm:max-h-[90dvh] sm:max-w-5xl sm:rounded-2xl md:grid md:grid-cols-2 md:cursor-auto"
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
            >
              {/* Close button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white backdrop-blur-md transition-colors hover:bg-primary"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Left side - Image */}
              <div className="relative h-56 shrink-0 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 sm:h-72 md:h-full md:min-h-[560px]">
                <img
                  src={selectedProject.image.src}
                  alt={`${selectedProject.title} preview`}
                  className="h-full w-full object-cover object-top"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 text-white sm:bottom-7 sm:left-7">
                  <span className="mb-2 inline-block rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-medium backdrop-blur-md">
                    Featured Project
                  </span>

                  <h3 className="text-xl font-bold sm:text-2xl md:text-3xl">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Right side - Details */}
              <div className="flex min-h-0 flex-1 flex-col overflow-y-auto p-5 sm:p-7 md:p-8">
                {/* Overview */}
                <div className="mb-6">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    Project Overview
                  </p>

                  <h2
                    id="project-dialog-title"
                    className="mb-4 text-2xl font-bold leading-tight sm:text-3xl"
                  >
                    {selectedProject.title}
                  </h2>

                  <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-7">
                  <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
                    Technologies Used
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-secondary px-3 py-2 text-xs font-medium sm:text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="mt-auto border-t border-border pt-6">
                  <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
                    Explore this project
                  </h4>

                  <div className="flex flex-wrap gap-3">
                    {selectedProject.code_link.map(
                      (link, index) => (
                        <a
                          key={link}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary px-4 py-3 text-sm font-medium transition-all hover:border-primary hover:bg-primary/10"
                        >
                          <Github className="h-4 w-4" />
                          GitHub
                          {selectedProject.code_link.length > 1
                            ? ` ${index + 1}`
                            : ""}
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      )
                    )}

                    {selectedProject.live_url.map((url) => (
                      <a
                        key={url}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    ))}
                  </div>
                </div>

                {/* Mobile close button */}
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="mt-5 w-full rounded-xl border border-border px-4 py-3 text-sm font-medium transition-colors hover:bg-secondary md:hidden"
                >
                  Close details
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom animated cursor - Desktop only */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[200] hidden items-center justify-center rounded-full border border-violet-400/60 bg-violet-500/20 text-white shadow-[0_0_30px_rgba(139,92,246,0.35)] backdrop-blur-md md:flex"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: cursorHover ? 76 : 16,
          height: cursorHover ? 76 : 16,
          opacity: cursorVisible && !selectedProject ? 1 : 0,
          scale: cursorHover ? 1 : 0.85,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
      >
        <AnimatePresence>
          {cursorHover && !selectedProject && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="flex items-center gap-1 text-[10px] font-bold tracking-wider"
            >
              VIEW
              <ArrowUpRight className="h-3 w-3" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
