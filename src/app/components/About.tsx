"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Code2, Palette, Rocket } from "lucide-react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable and scalable code that stands the test of time.",
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "Crafting beautiful and intuitive user experiences that delight users.",
    },
    {
      icon: Rocket,
      title: "Fast Performance",
      description: "Building lightning-fast applications optimized for the best performance.",
    },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </motion.div>

        {/* Text + Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 md:order-1"
          >
            <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate developer with a keen eye for design and a love for creating
              exceptional digital experiences. With years of experience in web development,
              I specialize in building modern, responsive, and user-friendly applications.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              My journey in tech has been driven by curiosity and a constant desire to learn
              and improve. I believe in writing clean code, following best practices, and
              delivering products that not only meet but exceed expectations.
            </p>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="order-1 md:order-2 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 mx-auto relative"
          >
            <motion.div
              className="w-full h-full rounded-2xl border border-primary/30 overflow-hidden relative"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/images/shay.png"
                alt="Profile Picture"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-5 md:p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <motion.div
                className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </motion.div>
              <h3 className="text-lg md:text-xl mb-2">{feature.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}