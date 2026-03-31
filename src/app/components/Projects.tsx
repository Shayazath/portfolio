"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import myone from "../../../public/images/myone.png";
import note from "../../../public/images/notes.png";
import wed from "../../../public/images/wedding.png";
import other from "../../../public/images/others.png";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: "Myone - Study app",
      description: "A social-driven study platform featuring user-contributed academic resources, interactive community engagement with likes and comments, and real-time collaborative chatting",
      tags: ["React Native", "Express.js", "MongoDB", "AWS"],
      gradient: "from-primary/20 to-accent/20",
      image: myone,
      code_link: ["https://github.com/Shayazath/myone-rebuild"],
      live_url: []

    },
    {
      title: "Notes app",
      description: "A lightweight personal productivity hub for quick-capture notes and task organization, powered by a Django and MySQL backend with reliable AWS hosting for private, cross-device access.",
      tags: ["Django", "Django HTML", "MySQL", "AWS"],
      gradient: "from-accent/20 to-primary/20",
      code_link: ["https://github.com/Shayazath/notes_app"],
      image: note,
      live_url: []

    },
    {
      title: "Wedding website",
      description: "A modern, high-performance wedding portal built with Vite and React, featuring elegant UI components to showcase event timelines, RSVP management, and the couple's journey.",
      tags: ["React", "Vite", "Emailjs", "Vercel"],
      gradient: "from-primary/20 to-accent/20",
      image: wed,
      code_link: ["https://github.com/Shayazath/wedding"],
      live_url: ["https://wedding-rahman-karishma.vercel.app/"]


    },
    {
      title: "Boredom stuffs",
      description: "Stuffs I did when I get bored of coding with a cold cup of coffee and hearing 90s music, still doesn't give up on coding and will never.",
      tags: ["Java Script", "React", "CSS", "HTML"],
      gradient: "from-accent/20 to-primary/20",
      code_link: ["https://github.com/Shayazath/Wanna-be-mine-", "https://github.com/Shayazath/wedding"],
      image: other,
      live_url: ["https://shayazath.github.io/Wanna-be-mine-/","https://shayazath.github.io/Know-SHAYAZ"]


    },
  ];

  return (
    <section ref={ref} className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="relative p-6">
                  {/* Project icon/image placeholder */}
                  <motion.div
                    className="w-full h-48 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 mb-6 flex items-center justify-center overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.img
                      src={project.image.src}
                      alt="myone"
                      className="w-full h-auto rounded-2xl object-contain"
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </motion.div>

                  <h3 className="text-2xl mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-secondary text-sm rounded-full border border-border group-hover:border-primary/50 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.code_link.map((link) => (
                      <motion.a
                        href={link} target="_blank"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
                      >
                        <Github className="w-5 h-5" />
                        <span>Code</span>
                      </motion.a>

                    ))}

                    {project.live_url && project.live_url.map((url, index) => (
                      <motion.a
                        key={index}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>Live Demo</span>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Hover effect overlay */}
                <motion.div
                  className="absolute inset-0 border-2 border-primary rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  initial={{ scale: 0.95 }}
                  whileHover={{ scale: 1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}