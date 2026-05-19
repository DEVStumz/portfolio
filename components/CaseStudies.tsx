"use client";
import { motion } from "framer-motion";
import { useInView } from "./useInView";

const cases = [
  {
    number: "01",
    type: "Data Entry Focus",
    title: "Data Architecture Optimization",
    situation:
      "The department was operating with a legacy database plagued by duplicate records, inconsistent formatting, and outdated client information — slowing down both the sales and support teams and compromising operational integrity.",
    task:
      "Auditing, cleansing, and migrating a large volume of client profiles into a new centralized CRM system — within a tight deadline, while maintaining zero downtime for active users.",
    action:
      "Formulated a systematic data-cleansing protocol to cross-reference and eliminate duplicates. Standardized formatting across all custom fields, built an automated validation workflow for new entries, and meticulously hand-verified high-priority accounts. Managed the final migration after hours to ensure uninterrupted standard operations.",
    result:
      "100% of data migrated with zero data loss and absolute accuracy — significantly accelerating internal response times and saving hours of manual search effort per week.",
  },
  {
    number: "02",
    type: "Customer Service Focus",
    title: "Escalated Support Turnaround",
    situation:
      "During a major service transition, customer inquiry volume spiked sharply, leading to prolonged wait times, a backlog of unresolved tickets, and a measurable dip in client satisfaction scores.",
    task:
      "Assigned to lead the communication frontline — de-escalating high-stress client calls, clearing the ticket backlog, and re-establishing client trust under significant pressure.",
    action:
      "Developed a triaging workflow to categorize tickets by urgency, ensuring high-risk issues were addressed immediately. Authored a set of clear, empathetic communication templates for common queries. Personally handled the most severely escalated calls — actively listening, offering immediate remediations, and following up post-resolution.",
    result:
      "Cleared the full ticket backlog, restored average response times, and boosted personal CSAT scores — turning frustrated callers into brand advocates and preventing critical client churn.",
  },
];

export default function CaseStudies() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="work" style={{ background: "var(--cream)", scrollMarginTop: "80px" }}>
      <div
        ref={ref}
        style={{ maxWidth: "1100px", margin: "0 auto", padding: "6rem 2.5rem" }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: "0.72rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: "0.75rem",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <span style={{ display: "block", width: "1.5rem", height: "1px", background: "var(--gold)" }} />
          Work Samples
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: "clamp(2rem, 3.5vw, 3rem)",
            lineHeight: 1.2,
            marginBottom: "3.5rem",
          }}
        >
          Case Studies
        </motion.h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {cases.map((c, i) => (
            <motion.div
              key={c.number}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15, ease: "easeOut" as const }}
              style={{
                display: "grid",
                gridTemplateColumns: "1.4fr 3fr",
                gap: "3rem",
                paddingBottom: "4rem",
                marginBottom: "4rem",
                borderBottom: i < cases.length - 1 ? "1px solid var(--cream-dark)" : "none",
              }}
              className="case-grid"
            >
              {/* Meta */}
              <div>
                <div style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: "4.5rem",
                  color: "var(--gold-light)",
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                }}>
                  {c.number}
                </div>
                <div style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--rust)",
                  marginBottom: "0.5rem",
                }}>
                  {c.type}
                </div>
                <div style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: "1.35rem",
                  lineHeight: 1.3,
                  color: "var(--ink)",
                }}>
                  {c.title}
                </div>
              </div>

              {/* Body */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {[
                  { label: "Situation", text: c.situation },
                  { label: "Task", text: c.task },
                  { label: "Action", text: c.action },
                ].map((block) => (
                  <div key={block.label}>
                    <div style={{
                      fontSize: "0.65rem",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      marginBottom: "0.4rem",
                    }}>
                      {block.label}
                    </div>
                    <p style={{
                      fontSize: "0.95rem",
                      color: "var(--ink-mid)",
                      lineHeight: 1.78,
                      fontWeight: 300,
                    }}>
                      {block.text}
                    </p>
                  </div>
                ))}

                {/* Result badge */}
                <div style={{
                  background: "var(--gold-pale)",
                  border: "1px solid var(--gold-light)",
                  padding: "1rem 1.25rem",
                  fontSize: "0.88rem",
                  color: "var(--ink)",
                  lineHeight: 1.6,
                }}>
                  <span style={{ color: "var(--teal)", fontWeight: 500 }}>✓ Result: </span>
                  {c.result}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .case-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
