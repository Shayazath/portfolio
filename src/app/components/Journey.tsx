"use client";
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import Image from "next/image";
import { useState } from "react";

export function Journey() {


    const [activeCard, setActiveCard] = useState<number | null>(null);

    return (
        <>
            {activeCard !== null && (
                <div style={overlay} onClick={() => setActiveCard(null)} />
            )}

            <h2 className="text-5xl mb-4 text-center">
                My <span className="text-primary">Journey</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
            <div style={container}>
                {jobs.map(({ icon, title, company, period, description, hueA, hueB }, i) => (
                    <Card
                        key={i}
                        i={i}
                        icon={icon}
                        title={title}
                        company={company}
                        description={description}
                        period={period}
                        hueA={hueA}
                        hueB={hueB}
                        active={activeCard === i}
                        onClick={() => setActiveCard(i)}
                    />
                ))}
            </div>
        </>
    );
}

interface CardProps {
    icon: string
    title: string
    company: string
    period: string
    description: string[]
    hueA: number
    hueB: number
    i: number
    active: boolean
    onClick: () => void
}

function Card({ icon, title, company, period, description, active, onClick, hueA, hueB, i }: CardProps) {
    const background = `linear-gradient(306deg, hsl(${hueA}, 90%, 45%), hsl(${hueB}, 95%, 50%))`

    return (
        <motion.div
            className={`card-container-${i}`}
            style={active ? expandedCardContainer : cardContainer}
            initial="offscreen"
            whileInView="onscreen"
            onClick={onClick}
            viewport={{ amount: 0.8 }}
        >
            <div style={{ ...splash, background }} />
            <motion.div
                style={active ? expandedCard : card}
                variants={cardVariants}
                layout
                animate={active ? { rotate: 0, y: 0, scale: 1.05 } : { rotate: -10 }}
                transition={{ type: "spring", duration: 0.6 }}
            >

                {/* Top accent bar */}
                <div style={accentBar} />

                {/* Icon */}
                <div style={iconWrapper}>
                    <Image
                        src={icon}
                        alt={title}

                        width={100}
                        height={100}
                        style={{ objectFit: "contain", borderRadius: "50%", filter: "drop-shadow(0 0 10px hsl(25, 100%, 50% / 0.5))" }}
                    />
                </div>

                {/* Period badge */}
                <div style={periodBadge}>{period}</div>

                {/* Text */}
                <div style={textBlock}>
                    <div style={jobTitle}>{title}</div>
                    <div style={jobCompany}>{company}</div>
                    <ul style={jobDescription}>
                        {description.map((item, idx) => (
                            <li key={idx}>• {item}</li>
                        ))}
                    </ul>
                </div>
                {/* Bottom dot row */}
                <div style={dots}>
                    {[...Array(3)].map((_, d) => (
                        <div key={d} style={dot} />
                    ))}
                </div>

            </motion.div>
        </motion.div>
    )
}
const overlay: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backdropFilter: "blur(10px)",
    background: "rgba(0,0,0,0.4)",
    zIndex: 50,
}

const expandedCardContainer: React.CSSProperties = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    justifyContent: "center",
    rotate: '',
    zIndex: 100,
}
const expandedCard: React.CSSProperties = {
    width: 450,
    height: "auto",
    padding: 40,
    borderRadius: 20,
    background: "#111",
    border: "1px solid hsl(25, 100%, 40%)",
    boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
    // ✅ Add these:
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 16,
}
const cardVariants: Variants = {
    offscreen: { y: 300 },
    onscreen: {
        y: 50,
        transition: { type: "spring", bounce: 0.4, duration: 0.8 },
    },
}

/* ============== Styles ================ */
const jobDescription: React.CSSProperties = {
    fontSize: 13,
    color: "#cccccc",
    marginTop: 6,
    lineHeight: 1.4,
    textAlign: "center",
}
const container: React.CSSProperties = {
    margin: "100px auto",
    maxWidth: 500,
    paddingBottom: 100,
    width: "100%",
    fontFamily: "'Georgia', serif",
}

const cardContainer: React.CSSProperties = {
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    paddingTop: 20,
    marginBottom: -120,
}

const splash: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
}

const card: React.CSSProperties = {
    width: 300,
    height: 430,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 20,
    background: "linear-gradient(160deg, #1a1a1a 0%, #0d0d0d 100%)",
    border: "1px solid hsl(25, 100%, 40%)",
    boxShadow: `
        0 0 0 1px hsl(25, 100%, 25% / 0.4),
        0 0 20px hsl(25, 100%, 50% / 0.35),
        0 0 50px hsl(25, 100%, 50% / 0.2),
        0 0 100px hsl(25, 100%, 50% / 0.1),
        inset 0 1px 0 hsl(25, 100%, 60% / 0.15)
    `,
    transformOrigin: "10% 60%",
    overflow: "hidden",
    padding: "0 0 28px 0",
}

const accentBar: React.CSSProperties = {
    width: "100%",
    height: 6,
    background: "linear-gradient(90deg, hsl(20, 100%, 45%), hsl(35, 100%, 55%), hsl(20, 100%, 45%))",
    boxShadow: "0 0 12px hsl(25, 100%, 50%), 0 0 30px hsl(25, 100%, 50% / 0.6)",
    flexShrink: 0,
}

const iconWrapper: React.CSSProperties = {
    width: 150,
    height: 150,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    filter: "drop-shadow(0 0 12px hsl(25, 100%, 50% / 0.5))",
}

const periodBadge: React.CSSProperties = {
    background: "transparent",
    border: "1px solid hsl(25, 100%, 50%)",
    color: "hsl(25, 100%, 60%)",
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    padding: "5px 14px",
    borderRadius: 999,
    fontFamily: "'Arial', sans-serif",
    boxShadow: "0 0 10px hsl(25, 100%, 50% / 0.3), inset 0 0 10px hsl(25, 100%, 50% / 0.05)",
}

const textBlock: React.CSSProperties = {
    textAlign: "center",
    padding: "0 24px",
    width: "100%",   // ✅ Add this
}
const jobTitle: React.CSSProperties = {
    fontSize: 22,
    fontWeight: 700,
    color: "#ffffff",
    marginBottom: 8,
    lineHeight: 1.2,
    fontFamily: "'Cormorant Garamond', serif",
    textShadow: "0 0 20px hsl(25, 100%, 60% / 0.4)",
}

const jobCompany: React.CSSProperties = {
    fontSize: 14,
    color: "hsl(25, 90%, 55%)",
    fontWeight: 600,
    letterSpacing: "0.05em",
    fontFamily: "'Arial', sans-serif",
    textTransform: "uppercase" as const,
    textShadow: "0 0 10px hsl(25, 100%, 50% / 0.5)",
}

const dots: React.CSSProperties = {
    display: "flex",
    gap: 6,
}

const dot: React.CSSProperties = {
    width: 7,
    height: 7,
    borderRadius: "50%",
    background: "hsl(25, 100%, 55%)",
    boxShadow: "0 0 8px hsl(25, 100%, 55%), 0 0 16px hsl(25, 100%, 50% / 0.5)",
}

/* ============== Data ================ */

const jobs = [
    {
        icon: "/images/dhana.png",
        title: "Bio-Maths",
        company: "Dhanalakshmi Hr Sec School - Chennai, TN",
        period: "2019 – 2021",
        description: [
            "Completed HSC with 83% (2021)",
            "Completed SSLC with 73% (2019)"
        ],
        hueA: 15,
        hueB: 35,
    },
    {
        icon: "/images/nclogo.png",
        title: "Bachelor of Computer Applications",
        company: "The New College - Chennai, TN",
        period: "May 2022 – Apr 2025",
        description: [
            "Gold Medal – Academic Achievement Award (2nd Year)",
            "Silver Medal – Academic Achievement Award (1st Year)",
            "Leader of Department Union",
            "Mentor of Department Classes"
        ],
        hueA: 20,
        hueB: 40,
    },
    {
        icon: "/images/vcode.jpeg",
        title: "Full Stack Developer Intern",
        company: "VCODE - Chennai, TN",
        period: "Mar 2025 – Jun 2025",
        description: [
            "Designed and developed user-friendly website interfaces using React, Python(Django), and JavaScript for improved user engagement",
        ],
        hueA: 25,
        hueB: 45,
    },
    {
        icon: "/images/i2glogo.jpeg",
        title: "Python Backend Developer",
        company: "I2G - Bangalore, KA",
        period: "Jun 2025 – Present",
        description: [
            "Developed and maintained secure, scalable REST APIs using Python, Flask/FastAPI, with JWT-based authentication and RBAC",
        ],
        hueA: 30,
        hueB: 50,
    },
]