"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Skills() {
  const ref = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skills = [
    { name: "Python", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "CSS/Tailwind", level: 92 },
    { name: "MySql", level: 88 },
    { name: "MongoDB", level: 80 },
  ];
  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -150,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 150,
      behavior: "smooth",
    });
  };
  return (
    <section ref={ref} className="py-24 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={
                isInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
              }
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="flex justify-between mb-2">
                <span className="group-hover:text-primary transition-colors">
                  {skill.name}
                </span>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-3 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full relative"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional tech stack */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl text-center mb-8">Technologies I Work With</h3>

          <div className="relative">

            {/* Left gradient fade */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-background to-transparent z-10" />

            {/* Right gradient fade */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-background to-transparent z-10" />

            {/* Left Arrow */}
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollLeft}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20
                        bg-primary/90 backdrop-blur-md
                        border border-primary/40
                        text-white
                        p-3 rounded-full
                        shadow-[0_0_20px_rgba(255,115,0,0.6)]
                        hover:bg-primary
                        transition-all duration-300"
            >
              <ChevronLeft size={22} />
            </motion.button>

            {/* Scroll Container */}
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar px-16"
            >
              {[
                "JavaScript",
                "Flask",
                "FastApi",
                "Python",
                "Git",
                "Docker",
                "AWS",
                "MySql",
                "PostgreSQL",
                "Redis",
                "Next.js",
                "Vue.js",
              ].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="px-6 py-3 bg-secondary border border-border rounded-full hover:border-primary/50 hover:bg-primary/10 transition-all cursor-default whitespace-nowrap"
                >
                  {tech}
                </motion.div>
              ))}
            </div>

            {/* Right Arrow */}
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollRight}
              className="absolute right-1 top-1/2 -translate-y-1/2 z-20
                  bg-primary/90 backdrop-blur-md
                  border border-primary/40
                  text-white
                  p-3 rounded-full
                  shadow-[0_0_20px_rgba(255,115,0,0.6)]
                  hover:bg-primary

                  transition-all duration-300"
                  
            >
              <ChevronRight size={22} />
            </motion.button>

          </div>
        </motion.div>
      </div>
    </section>
  );
}