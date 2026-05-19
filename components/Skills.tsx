"use client";
import { motion } from "framer-motion";
import { useInView } from "./useInView";

const columns = [
  {
    title: "Administrative & Data",
    items: [
      { name: "High-Volume Data Entry", desc: "Flawless alphanumeric entry, indexing, and meticulous proofreading at scale." },
      { name: "Database & CRM Management", desc: "Maintaining, auditing, and updating complex digital records and customer profiles." },
      { name: "Reporting & Analytics", desc: "Compiling operational metrics and generating clean executive summaries." },
      { name: "Office Operations", desc: "Calendar management, travel coordination, and digital file organization." },
    ],
    tools: [],
  },
  {
    title: "Client & Customer Relations",
    items: [
      { name: "Omnichannel Support", desc: "Managing high-volume inquiries via phone, email, and live chat with a premium touch." },
      { name: "Conflict De-escalation", desc: "Resolving complex client grievances swiftly, transforming friction into loyalty." },
      { name: "Client Onboarding", desc: "Guiding new accounts through documentation processes with clarity and warmth." },
      { name: "Cross-Functional Liaison", desc: "Serving as an articulate bridge between clients and internal departments." },
    ],
    tools: [],
  },
  {
    title: "Tools & Technology",
    items: [
      { name: "Productivity Suites", desc: "" },
      { name: "CRMs & Helpdesks", desc: "" },
      { name: "Collaboration", desc: "" },
    ],
    toolGroups: [
      { label: "Productivity Suites", tags: ["Google Workspace", "MS Office 365", "Outlook"] },
      { label: "CRMs & Helpdesks", tags: ["Salesforce", "HubSpot", "Zendesk", "Zoho CRM"] },
      { label: "Collaboration", tags: ["Slack", "Trello", "Asana", "Notion"] },
    ],
  },
];

export default function Skills() {
  const { ref, inView } = useInView();

  return (
    <section id="skills" style={{ background: "var(--cream-dark)", scrollMarginTop: "80px" }}>
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
          Core Competencies
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: "clamp(2rem, 3.5vw, 3rem)",
            lineHeight: 1.2,
            marginBottom: "3rem",
          }}
        >
          Skills &amp; Expertise
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            border: "1px solid rgba(26,22,18,0.12)",
          }}
          className="grid-cols-1 md:grid-cols-3"
        >
          {columns.map((col, ci) => (
            <div
              key={col.title}
              style={{
                padding: "2.5rem",
                borderRight: ci < columns.length - 1 ? "1px solid rgba(26,22,18,0.12)" : "none",
              }}
            >
              <div style={{
                fontSize: "0.68rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "1.5rem",
                paddingBottom: "1rem",
                borderBottom: "1px solid rgba(201,168,76,0.28)",
              }}>
                {col.title}
              </div>

              {col.toolGroups ? (
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  {col.toolGroups.map((g) => (
                    <div key={g.label}>
                      <div style={{
                        fontSize: "0.9rem",
                        fontWeight: 500,
                        color: "var(--ink)",
                        marginBottom: "0.5rem",
                      }}>
                        {g.label}
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                        {g.tags.map((t) => (
                          <span
                            key={t}
                            style={{
                              fontSize: "0.7rem",
                              letterSpacing: "0.04em",
                              padding: "0.3rem 0.65rem",
                              border: "1px solid rgba(26,22,18,0.15)",
                              color: "var(--ink-mid)",
                              background: "var(--cream)",
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {col.items.map((item) => (
                    <div key={item.name}>
                      <div style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--ink)", marginBottom: "0.2rem" }}>
                        {item.name}
                      </div>
                      <div style={{
                        fontSize: "0.82rem",
                        color: "var(--ink-light)",
                        lineHeight: 1.6,
                        fontWeight: 300,
                      }}>
                        {item.desc}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
