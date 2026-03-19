export const NAV_LINKS = ["home", "about", "skills", "experience", "projects", "education", "contact"];

export const SKILLS = [
  { label: "Java / Spring — Backend Systems", pct: 95, color: "#3b82f6" },
  { label: "Distributed Systems & System Design", pct: 93, color: "#06b6d4" },
  { label: "AWS Infrastructure (CloudFront, Lambda, DynamoDB)", pct: 90, color: "#3b82f6" },
  { label: "Python — Automation & ML", pct: 85, color: "#06b6d4" },
  { label: "React / TypeScript — Full-Stack", pct: 80, color: "#3b82f6" },
  { label: "Capacity Planning & Platform Engineering", pct: 92, color: "#06b6d4" },
];

export const TECH_INVENTORY = [
  ["Backend",      ["Java", "Spring", "Python", "REST APIs"]],
  ["Cloud & Infra", ["AWS CloudFront", "Lambda", "DynamoDB", "IaC"]],
  ["Frontend",     ["React", "TypeScript", "Angular", "Flask", "Django"]],
  ["ML & Other",   ["TensorFlow", "CNN", "OAuth", "Agile"]],
];

export const HERO_TAGS = ["Java", "AWS", "CloudFront", "Python", "React", "Distributed Systems", "IaC", "TensorFlow"];

export const TYPER_LINES = [
  "SDE II @ AWS CloudFront — Seattle, WA",
  "Distributed Systems · 10M+ Events/Sec",
  "6+ years building infrastructure at scale",
  "Turning capacity chaos into automated order",
];

export const ABOUT_STATS = [
  ["6+",   "Years Experience"],
  ["10M+", "Events/Sec"],
  ["95%",  "Efficiency Gain"],
];

export const EXPERIENCES = [
  {
    title: "Software Development Engineer II",
    company: "Amazon Web Services (AWS) — CloudFront",
    period: "Jun 2023 – Present · Seattle, WA",
    color: "#3b82f6",
    points: [
      "Led design and implementation of CMAP — CloudFront's centralized capacity management platform processing 10M+ events/second with real-time supply/demand monitoring.",
      "Partnered with 10+ engineering teams to streamline platform development, resulting in a 95% increase in operational efficiency across the organization.",
      "Eliminated 80 hours of manual work per week through intelligent automation and event-driven pipeline systems.",
      "Managed end-to-end capacity forecasting, planning, and deployment across all CloudFront global regions to ensure service availability ahead of customer demand.",
      "Established automated processes for POP (Point of Presence) delivery and continuous capacity releases.",
      "Oversaw critical customer engagements, providing technical guidance on capacity capabilities and event operations support.",
    ],
  },
  {
    title: "Lead Software Engineer & Application Architect",
    company: "RoomieHub — Personal Project",
    period: "Apr 2024 – Jul 2025",
    color: "#06b6d4",
    points: [
      "Designed and architected RoomieHub — a co-living platform simplifying roommate-finding for university students, scaling to 5,000+ users.",
      "Directed and mentored a cross-functional team of 25 developers and testers delivering a robust Android and iOS application.",
      "Oversaw the complete development lifecycle from concept and requirements gathering through deployment and post-launch support.",
      "Implemented scalable cloud-based backend architectures with strong emphasis on data security and user privacy.",
      "Utilized Agile methodologies to ensure timely milestone delivery while maintaining high code quality.",
    ],
  },
  {
    title: "Software Development Engineer Intern",
    company: "Amazon Web Services (AWS)",
    period: "Jun 2022 – Aug 2022 · Seattle, WA",
    color: "#3b82f6",
    points: [
      "Designed and implemented an optimized pipeline for automated POP capacity request management — covering the full cycle from demand requests to new supply provisioning.",
      "Achieved 85% reduction in overall cycle time through process optimization techniques and automation flow.",
    ],
  },
  {
    title: "Software Development Engineer II",
    company: "JPMorgan Chase & Co.",
    period: "Jan 2021 – Aug 2021 · Bengaluru, India",
    color: "#06b6d4",
    points: [
      "Led the Global Technology Infrastructure's Magister team in designing, developing, and operating IaaS and IaC platforms.",
      "Led a team of 4 developers building an automated pipeline for configuration promotion across environments — reducing deployment from days to minutes using Java and Spring.",
      "Spearheaded auth system upgrade from ADFS to OAuth in Q3 2021, delivering improved security and alignment with industry standards.",
      "Developed three internal web applications for JP Morgan learning groups using React, Angular, Flask, and Django.",
    ],
  },
  {
    title: "Software Development Engineer I",
    company: "JPMorgan Chase & Co.",
    period: "Jul 2019 – Jan 2021 · Bengaluru, India",
    color: "#3b82f6",
    points: [
      "Developed automated configuration promotion pipeline reducing deployment from days to minutes using core Java and Spring.",
      "Spearheaded migration from Janus to ADFS in Q1 2020, ensuring seamless integration and minimal downtime.",
      "Built three internal web applications for training groups using React, Angular, Flask, and Django.",
    ],
  },
  {
    title: "Machine Learning Engineer Intern",
    company: "SIMBO.AI",
    period: "May 2019 – Jul 2019 · Bengaluru, India",
    color: "#06b6d4",
    points: [
      "Developed a CNN-based neural network to convert speech to phonetics for Indian languages and accents.",
      "Implemented the solution using Python and TensorFlow for Simbo AI's medical voice assistant product.",
    ],
  },
  {
    title: "Technology Analyst Intern",
    company: "JPMorgan Chase & Co.",
    period: "May 2018 – Jul 2018 · Bengaluru, India",
    color: "#3b82f6",
    points: [
      "Developed a local load balancer and centralized pipeline, reducing provision time from days to minutes using Python and REST APIs.",
      "Built a React web application for automated pipeline deployment and provisioning.",
    ],
  },
];

export const EDUCATION = [
  {
    degree: "M.S. Computer Science",
    school: "Arizona State University",
    year: "2021 – 2023",
    color: "#3b82f6",
    badge: "GRAD",
  },
  {
    degree: "B.Tech Computer Science",
    school: "Visvesvaraya National Institute of Technology",
    year: "2015 – 2019",
    color: "#06b6d4",
    badge: "GRAD",
  },
];

export const PROJECTS = [
  {
    title: "Centralized Event Management System",
    period: "Sep 2023 – Dec 2023",
    metric: "99.99%",
    metricLabel: "System Reliability",
    icon: "⚡",
    color: "#3b82f6",
    points: [
      "Designed and implemented a high-availability event management system using Java and serverless/containerized architectures (AWS Lambda, ECS, EC2) for automated global capacity planning across CloudFront infrastructure.",
      "Built secure, resilient infrastructure leveraging AWS CDK, SQS, and SNS for event orchestration with real-time monitoring via CloudWatch.",
    ],
    tags: ["Java", "AWS Lambda", "ECS", "EC2", "SQS", "SNS", "CDK", "CloudWatch"],
  },
  {
    title: "Automated Server Planning & Deployment System",
    period: "Jan 2024 – Jun 2024",
    metric: "50%",
    metricLabel: "Faster Rollout Velocity",
    icon: "🚀",
    color: "#06b6d4",
    points: [
      "Engineered automated deployment framework integrating capacity forecasts with real-time server metrics to dynamically scale infrastructure across global regions, ensuring continuous service availability.",
      "Designed proactive capacity provisioning system leveraging event-driven demand modeling, accelerating rollout velocity by 50% while maintaining optimal buffer capacity for peak traffic events.",
    ],
    tags: ["Capacity Planning", "Event-Driven", "AWS", "Infrastructure", "Automation"],
  },
  {
    title: "Automated CPU Efficiency System",
    period: "Jul 2024 – Dec 2024",
    metric: "3mo",
    metricLabel: "High-Velocity Metrics Window",
    icon: "🧠",
    color: "#3b82f6",
    points: [
      "Built automated system calculating per-server CPU efficiency by processing three months of high-velocity metrics (event load, request volume, byte-throughput) aggregated at minute-level granularity.",
      "Optimized global traffic distribution by integrating predictive efficiency data into the routing layer, enabling balanced load distribution across cities, countries, and regions while maintaining ultra-low latency.",
    ],
    tags: ["CPU Metrics", "Traffic Routing", "Java", "CloudFront", "Distributed Systems"],
  },
];

export const CONTACT_LINKS = [
  { label: "EMAIL",    value: "saianudeep.itha@gmail.com",      href: "mailto:saianudeep.itha@gmail.com",      color: "#3b82f6" },
  { label: "LINKEDIN", value: "linkedin.com/in/rama-itha",       href: "https://www.linkedin.com/in/rama-itha", color: "#06b6d4" },
  { label: "PHONE",    value: "+1 (628) 237-8344",               href: "tel:+16282378344",                      color: "#3b82f6" },
];
