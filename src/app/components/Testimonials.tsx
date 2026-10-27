
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote, MessageSquareQuote } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  project: string;
  review: string;
  rating: number;
};

// Replace these examples with genuine client feedback before publishing.


const testimonials: Testimonial[] = [
  {
    name: "Karishma",
    role: "Marriage Website Client",
    project: "Marriage Website Development",
    review:
      "The marriage website turned out beautifully! The design was clean, attractive, and easy to navigate. I really appreciated the attention to detail and the effort put into making the website look professional. Communication throughout the project was smooth.",
    rating: 5,
  },
  {
    name: "Syed Athif",
    role: "Web Development Client",
    project: "Website Development",
    review:
      "Working with Shayazath was a good experience. He understood the project requirements, communicated clearly, and focused on delivering a solution that met my needs. I appreciated his technical approach and willingness to address feedback.",
    rating: 5,
  },
  {
    name: "Thameem Hussain",
    role: "Web Development Client",
    project: "Web Development & Integration",
    review:
      "Shayazath was professional and approachable throughout the project. He paid attention to the requirements, worked on the requested improvements, and kept the development process straightforward. Overall, it was a positive experience.",
    rating: 5,
  },
];



export function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.15,
  });

  return (
    <section
      ref={ref}
      id="testimonials"
      className="relative overflow-hidden px-4 py-24 bg-background"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="absolute top-20 left-1/2 -translate-x-1/2
        w-72 h-72 bg-primary/10 blur-[120px] rounded-full
        pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 35 }
          }
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2
            rounded-full border border-primary/30
            bg-primary/10 text-primary text-sm mb-5"
          >
            <MessageSquareQuote className="w-4 h-4" />
            Testimonials
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold mb-5">
            What People{" "}
            <span className="text-primary">Say</span>
          </h2>

          <div className="w-20 h-1 bg-primary mx-auto mb-5 rounded-full" />

          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Trust is built through clear communication, quality
            development, and a commitment to delivering results.
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={`${testimonial.name}-${index}`}
              initial={{ opacity: 0, y: 40 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 40 }
              }
              transition={{
                duration: 0.55,
                delay: 0.15 + index * 0.15,
              }}
              whileHover={{ y: -7 }}
              className="group relative flex flex-col h-full p-7
                rounded-2xl border border-border
                bg-card/60 backdrop-blur-sm
                hover:border-primary/50
                transition-colors duration-300"
            >
              {/* Decorative quote */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl
                  bg-primary/10 flex items-center justify-center"
                >
                  <Quote className="w-6 h-6 text-primary" />
                </div>

                <div className="flex gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {Array.from(
                    { length: testimonial.rating },
                    (_, starIndex) => (
                      <Star
                        key={starIndex}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                        aria-hidden="true"
                      />
                    )
                  )}
                </div>
              </div>

              {/* Review */}
              <blockquote className="text-muted-foreground leading-7
                flex-grow mb-7"
              >
                &ldquo;{testimonial.review}&rdquo;
              </blockquote>

              {/* Project information */}
              <div className="pt-5 border-t border-border">
                <h3 className="font-semibold text-foreground text-lg">
                  {testimonial.name}
                </h3>

                <p className="text-sm text-muted-foreground mt-1">
                  {testimonial.role}
                </p>

                <div className="inline-block mt-4 px-3 py-1.5
                  rounded-full bg-primary/10 text-primary text-xs"
                >
                  {testimonial.project}
                </div>
              </div>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-7 right-7 h-px
                bg-gradient-to-r from-transparent via-primary
                to-transparent opacity-0
                group-hover:opacity-100 transition-opacity"
              />
            </motion.article>
          ))}
        </div>

        {/* Closing message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-center mt-14"
        >
          <p className="text-muted-foreground">
            Interested in working together?
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 mt-4
              text-primary font-medium hover:gap-3
              transition-all duration-300"
          >
            Let&apos;s discuss your project
            <span aria-hidden="true">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
