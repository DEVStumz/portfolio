"use client";
import { motion } from "framer-motion";
import { useInView } from "./useInView";

export default function About() {
  const { ref, inView } = useInView();

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
  });

  return (
    <section id="about" style={{ background: "var(--cream)", scrollMarginTop: "80px" }}>
      <div
        ref={ref}
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "6rem 2.5rem",
        }}
      >
        <motion.p {...fadeUp(0)} style={{
          fontSize: "0.72rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--gold)",
          marginBottom: "0.75rem",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
        }}>
          <span style={{ display: "block", width: "1.5rem", height: "1px", background: "var(--gold)" }} />
          About Me
        </motion.p>

        <motion.h2 {...fadeUp(0.1)} style={{
          fontFamily: "'DM Serif Display', Georgia, serif",
          fontSize: "clamp(2rem, 3.5vw, 3rem)",
          lineHeight: 1.2,
          marginBottom: "3rem",
        }}>
          Precision-driven.<br />People-first.
        </motion.h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: "4rem",
          alignItems: "start",
        }}
          className="grid-cols-1 md:grid-cols-2"
        >
          <motion.div {...fadeUp(0.2)} style={{
            fontSize: "1.02rem",
            color: "var(--ink-mid)",
            fontWeight: 300,
            lineHeight: 1.88,
          }}>
            <p>
              Driven by a dual passion for{" "}
              <strong style={{ color: "var(--ink)", fontWeight: 500 }}>operational precision</strong>{" "}
              and exceptional interpersonal dynamics, I am a dedicated Administrative Assistant who transforms chaotic workflows into streamlined, efficient systems.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              With a strong foundation in high-volume data management and client relations, I specialize in maintaining{" "}
              <strong style={{ color: "var(--ink)", fontWeight: 500 }}>absolute data integrity</strong>{" "}
              while serving as a welcoming, professional front-face for growing brands.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              My administrative approach is rooted in the belief that an organization&apos;s internal efficiency directly impacts its external client experience. Whether auditing complex databases, managing multi-line communications, or resolving intricate customer inquiries — I bring meticulous attention to detail and a proactive problem-solving mindset to every task.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              Beyond standard task execution, I look for opportunities to{" "}
              <strong style={{ color: "var(--ink)", fontWeight: 500 }}>optimize workflows</strong>,
              leverage modern CRM tools, and build supportive environments where teams can thrive.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp(0.35)}
            style={{
              background: "var(--ink)",
              padding: "2.5rem",
              position: "relative",
            }}
          >
            <span style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "8rem",
              color: "rgba(201,168,76,0.12)",
              position: "absolute",
              top: "-1rem",
              left: "1.5rem",
              lineHeight: 1,
              userSelect: "none",
            }}>
              &ldquo;
            </span>
            <p style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontStyle: "italic",
              fontSize: "1.12rem",
              color: "rgba(247,244,239,0.82)",
              lineHeight: 1.78,
              position: "relative",
              zIndex: 1,
            }}>
              Administrative support is not merely about managing tasks; it is about engineering the framework that allows an organization to scale seamlessly. Pristine data integrity and exceptional customer service are the true cornerstones of business growth — and my mission is to execute both with absolute excellence.
            </p>
            <p style={{
              marginTop: "1.5rem",
              fontSize: "0.72rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--gold)",
            }}>
              — David O. Bilewumi
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
