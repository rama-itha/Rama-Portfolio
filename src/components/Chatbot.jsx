import { useState, useRef, useEffect } from "react";

const RESUME_CONTEXT = `
RAMA SAI ANUDEEP ITHA
Email: saianudeep.itha@gmail.com | Phone: +1 (628) 237-8344 | Location: San Francisco, CA

PROFESSIONAL SUMMARY
Software Engineer with 6+ years building highly scalable distributed systems and full-stack applications. 
Achieved 95% operational efficiency improvement, reduced deployment cycles by 50%, and maintained 99.99% uptime 
for infrastructure processing 10M+ events/second.

PROFESSIONAL EXPERIENCE

Software Development Engineer | Amazon Web Services (CloudFront), Seattle, WA | Jun 2023 - Present
- Developed CMAP, a centralized PaaS for CloudFront automating global resource planning using Java, React, and AWS,
  achieving 90% test coverage and boosting operational efficiency by 95%
- Managed end-to-end ML pipelines for global capacity forecasting using Python (scikit-learn, pandas, NumPy),
  accelerating deployment velocity by 50%
- Built distributed systems processing 10M+ events/second across 450+ global edge locations with 99.99% uptime
- Ensured resilience through chaos engineering for peak events including Super Bowl and Thursday Night Football
- Mentored junior engineers on distributed systems design, code quality, and performance optimization

Lead Software Engineer (Founder) | RoomieHub, Seattle, WA | Apr 2024 - Jul 2025
- Architected cross-platform mobile app (React Native) and distributed backend (Node.js, AWS) serving 5,000+ users
- Designed scalable microservices using Node.js, PostgreSQL, MongoDB, AWS Lambda achieving <200ms response times
- Implemented OAuth 2.0, JWT, WebSockets, Docker, and CI/CD pipelines end-to-end

Software Engineer II | JP Morgan Chase & Co., Bangalore, India | Jul 2019 - Aug 2021
- Engineered automated Java/Spring Boot pipeline reducing deployment cycles from days to minutes, cutting manual effort 90%
- Led IaaS platform processing thousands of transactions/second with 99.99% uptime across global infrastructure
- Built distributed microservices with MySQL/PostgreSQL improving database performance by 90%

Machine Learning Engineer Intern | Simbo.ai, Bangalore, India | May 2019 - Jul 2019
- Built CNN-based deep learning model in Python/TensorFlow for speech recognition across 15 Indian languages

Full-Stack Engineer | Inspiredge IT Solutions, Visakhapatnam, India | May 2017 - May 2018
- Built 20+ full-stack websites using React.js, AngularJS, Django, and MySQL

KEY TECHNICAL PROJECTS

Centralized Event Management System | Sep 2023 - Dec 2023
- High-availability event management using Java, AWS Lambda, ECS, EC2, CDK, SQS, SNS, CloudWatch — 99.99% reliability

Automated Server Planning & Deployment System | Jan 2024 - Jun 2024
- Automated deployment framework integrating capacity forecasts with real-time metrics, accelerating rollout by 50%

Automated CPU Efficiency System | Jul 2024 - Dec 2024
- Per-server CPU efficiency system processing high-velocity metrics to optimize global traffic distribution with ultra-low latency

TECHNICAL SKILLS
Languages: Java, Python, JavaScript, TypeScript, Go, C++, SQL, Kotlin
Frontend/Mobile: React.js, React Native, AngularJS, HTML5, CSS3
Backend: Spring Boot, Node.js, Express, Django, Flask, GraphQL, gRPC, Microservices, RESTful APIs
Distributed Systems: Kafka, SQS, SNS, Event-driven architecture, Load balancing, Fault tolerance
Databases: PostgreSQL, MySQL, DynamoDB, MongoDB, Redis, Cassandra
Cloud/DevOps: AWS (Lambda, ECS, EC2, S3, RDS, DynamoDB, CloudWatch, CDK), Docker, Kubernetes, CI/CD
ML/Data: TensorFlow, scikit-learn, pandas, NumPy, ETL pipelines
Testing: TDD, JUnit, Jest, Selenium, Chaos engineering, Load testing

KEY ACHIEVEMENTS
- 95% Operational Efficiency: Transformed manual capacity planning into automated system for 500+ engineers
- 50% Faster Deployments: ML-driven forecasting and automation across global infrastructure
- 99.99% Uptime: During Super Bowl, Thursday Night Football with millions of concurrent users
- 90% Manual Effort Reduction: Automated JP Morgan enterprise deployment pipelines
- 10M+ Events/Second: High-velocity telemetry across 450+ global edge locations
- 5,000+ Users: Founded and scaled RoomieHub from zero to production

CERTIFICATIONS: AWS Certified Solutions Architect - Associate | AWS Certified AI Practitioner

EDUCATION
Arizona State University | M.S. Computer Science | Aug 2021 - May 2023
VNIT Nagpur | B.Tech Computer Science | Jul 2015 - May 2019
`;

const SYSTEM_PROMPT = `You are an AI assistant embedded in Rama Sai Anudeep Itha's portfolio website. Answer questions about Rama based solely on his resume data below. Be concise, friendly, and professional — 2-4 sentences unless detail is genuinely needed. If asked something not in the resume, say you don't have that info and invite them to reach out at saianudeep.itha@gmail.com.

RESUME:
${RESUME_CONTEXT}`;

const SUGGESTED = [
  "What tech stack does Rama use?",
  "Tell me about CMAP",
  "What's RoomieHub?",
  "What are his key achievements?",
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! I'm Rama's portfolio assistant. Ask me anything about his experience, skills, or projects." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [hovered, setHovered] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const send = async (text) => {
    const userMsg = text || input.trim();
    if (!userMsg || loading) return;
    setInput("");
    const newMessages = [...messages, { role: "user", content: userMsg }];
    setMessages(newMessages);
    setLoading(true);
    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await response.json();
      const reply = data.content?.[0]?.text || "Sorry, I couldn't get a response.";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: "Something went wrong. Please try again." }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); }
  };

  return (
    <>
      {/* Floating toggle button */}
      <button
        onClick={() => setOpen((o) => !o)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: "fixed", bottom: 28, right: 28, zIndex: 1000,
          width: 56, height: 56, borderRadius: "50%",
          background: hovered ? "#2563eb" : "#1d4ed8",
          border: "1.5px solid #3b82f6",
          boxShadow: hovered ? "0 0 24px #3b82f680, 0 0 48px #3b82f630" : "0 0 16px #3b82f640",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "all 0.25s ease", cursor: "none",
        }}
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e2e8f0" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div style={{
          position: "fixed", bottom: 96, right: 28, zIndex: 999,
          width: "min(380px, calc(100vw - 40px))",
          height: "min(520px, calc(100vh - 140px))",
          background: "#080e1e", border: "1px solid #1e3a5f", borderRadius: 12,
          display: "flex", flexDirection: "column",
          boxShadow: "0 0 40px #3b82f620, 0 24px 64px #00000080",
          animation: "chatSlideIn 0.25s ease", overflow: "hidden",
        }}>
          {/* Header */}
          <div style={{
            background: "linear-gradient(135deg, #0f1e3a, #0a1628)",
            borderBottom: "1px solid #1e3a5f",
            padding: "14px 18px", display: "flex", alignItems: "center", gap: 10,
          }}>
            <div style={{
              width: 32, height: 32, borderRadius: "50%",
              background: "linear-gradient(135deg, #1d4ed8, #06b6d4)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 14, fontWeight: 700, color: "#fff",
              fontFamily: "'Orbitron', sans-serif", flexShrink: 0,
            }}>R</div>
            <div>
              <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 11, color: "#60a5fa", letterSpacing: 1 }}>
                RAMA://ASSISTANT
              </div>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, color: "#22c55e", letterSpacing: 1, marginTop: 2 }}>
                ● online
              </div>
            </div>
            <div style={{ marginLeft: "auto", fontFamily: "'Space Mono', monospace", fontSize: 9, color: "#334155" }}>
              AI-powered
            </div>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: "auto", padding: "14px 16px", display: "flex", flexDirection: "column", gap: 10 }}>
            {messages.map((m, i) => (
              <div key={i} style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start" }}>
                <div style={{
                  maxWidth: "85%",
                  background: m.role === "user" ? "linear-gradient(135deg, #1d4ed8, #2563eb)" : "#0f1e3a",
                  border: m.role === "user" ? "none" : "1px solid #1e3a5f",
                  borderRadius: m.role === "user" ? "12px 12px 2px 12px" : "12px 12px 12px 2px",
                  padding: "10px 14px",
                  fontFamily: "'Space Mono', monospace", fontSize: 12, lineHeight: 1.7,
                  color: m.role === "user" ? "#f0f9ff" : "#94a3b8",
                  boxShadow: m.role === "user" ? "0 0 12px #2563eb40" : "none",
                }}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <div style={{
                  background: "#0f1e3a", border: "1px solid #1e3a5f",
                  borderRadius: "12px 12px 12px 2px", padding: "10px 16px",
                  display: "flex", gap: 5, alignItems: "center",
                }}>
                  {[0, 1, 2].map((i) => (
                    <div key={i} style={{
                      width: 6, height: 6, borderRadius: "50%", background: "#3b82f6",
                      animation: `dotBounce 1.2s ease-in-out ${i * 0.2}s infinite`,
                    }} />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Suggested questions */}
          {messages.length === 1 && (
            <div style={{ padding: "0 16px 10px", display: "flex", flexWrap: "wrap", gap: 6 }}>
              {SUGGESTED.map((q) => (
                <button key={q} onClick={() => send(q)} style={{
                  background: "transparent", border: "1px solid #1e3a5f", borderRadius: 20,
                  padding: "5px 12px", fontFamily: "'Space Mono', monospace",
                  fontSize: 10, color: "#60a5fa", cursor: "none", transition: "all 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#3b82f6"; e.currentTarget.style.background = "#3b82f610"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#1e3a5f"; e.currentTarget.style.background = "transparent"; }}
                >{q}</button>
              ))}
            </div>
          )}

          {/* Input */}
          <div style={{
            borderTop: "1px solid #1e3a5f", padding: "12px 16px",
            display: "flex", gap: 8, alignItems: "flex-end", background: "#0a1628",
          }}>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask about Rama's experience..."
              rows={1}
              style={{
                flex: 1, background: "#0f1e3a", border: "1px solid #1e3a5f",
                borderRadius: 8, padding: "9px 12px",
                fontFamily: "'Space Mono', monospace", fontSize: 11,
                color: "#e2e8f0", resize: "none", outline: "none",
                lineHeight: 1.5, cursor: "none", transition: "border-color 0.2s",
              }}
              onFocus={(e) => e.target.style.borderColor = "#3b82f6"}
              onBlur={(e) => e.target.style.borderColor = "#1e3a5f"}
            />
            <button
              onClick={() => send()}
              disabled={!input.trim() || loading}
              style={{
                width: 36, height: 36, borderRadius: 8, flexShrink: 0,
                background: input.trim() && !loading ? "#2563eb" : "#1e293b",
                border: "none", display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "none", transition: "all 0.2s",
                boxShadow: input.trim() && !loading ? "0 0 12px #3b82f640" : "none",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e2e8f0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes chatSlideIn {
          from { opacity: 0; transform: translateY(12px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes dotBounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
          40% { transform: translateY(-6px); opacity: 1; }
        }
      `}</style>
    </>
  );
}