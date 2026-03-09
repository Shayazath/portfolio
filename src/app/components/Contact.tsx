"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin, Send, Instagram } from "lucide-react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // ✅ State keys now match input name attributes exactly
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/Shayazath" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/shayazath-khan-r/" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/_shayaz_/" },
    { icon: Mail, label: "Email", href: "mailto:shayazathkhan@gmail.com" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(
        "service_wxnuwk1",
        "template_m8i3o3l",
        formRef.current!,
        "3lL5HQ4iUfCIMpUky"
      );
      setStatus("success");
      setFormData({ from_name: "", from_email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  // ✅ This now works because e.target.name matches state keys
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section ref={ref} className="py-24 px-4 bg-card/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label htmlFor="from_name" className="block mb-2 text-white font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  autoComplete="off"
                  placeholder="Your name"
                  style={{ color: "#fff", caretColor: "#fff", background: "#1a1a1a" }}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:border-primary focus:outline-none transition-colors placeholder:text-gray-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="from_email" className="block mb-2 text-white font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  autoComplete="off"
                  placeholder="your@email.com"
                  style={{ color: "#fff", caretColor: "#fff", background: "#1a1a1a" }}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:border-primary focus:outline-none transition-colors placeholder:text-gray-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-white font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Your message..."
                  style={{ color: "#fff", caretColor: "#fff", background: "#1a1a1a" }}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:border-primary focus:outline-none transition-colors resize-none placeholder:text-gray-500"
                  required
                />
              </div>

              {status === "success" && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-500 text-sm text-center">
                  ✅ Message sent successfully! I'll get back to you soon.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-sm text-center">
                  ❌ Something went wrong. Please try again or email me directly.
                </motion.p>
              )}

              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
                {status === "sending" ? "Sending..." : "Send Message"}
              </motion.button>

            </form>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-12">
              <h3 className="text-2xl mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-6">
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              <div className="flex items-center gap-3 text-primary">
                <Mail className="w-5 h-5" />
                <a href="mailto:shayazathkhan@gmail.com" className="hover:underline underline-offset-4">
                  shayazathkhan@gmail.com
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-2xl mb-6">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 rounded-full bg-secondary border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all group"
                    aria-label={social.label}
                    target="_blank"
                  >
                    <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              className="mt-12 p-8 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/30"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(255, 107, 53, 0.1)",
                  "0 0 40px rgba(255, 107, 53, 0.2)",
                  "0 0 20px rgba(255, 107, 53, 0.1)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-center">
                <span className="text-primary">Open to opportunities</span>
                <br />
                <span className="text-muted-foreground">Available for freelance work</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}