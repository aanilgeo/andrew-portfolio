export const about = [
  "my interest in computers started quietly during childhood. a close friend and i spent hours experimenting with simple website builders like weebly, watching youtube videos about installing ubuntu, and trying random things on a computer just to see what would happen. i didn’t understand concepts like operating systems back then, but that curiosity stayed with me.",
  "in high school, that interest faded into the background as i explored biology with the idea of medical school. over time, i realized it wasn’t aligned with my interests or the realities around me. that detour helped me recognize what had always felt natural, building things, understanding systems, and learning how technology works beneath the surface.",
  "when i started studying computer science at njit, i initially thought i was there to learn coding. through coursework and hands on experiences at nasa and honeywell, i realized computer science is much broader. today, i care about clarity, reliability, and writing software that feels intentional, using this field as a way to build systems that genuinely help people, users, and the organizations that rely on them."
];

export const experience = [
  {
    title: "Software Engineering Co-op",
    org: "Honeywell",
    dates: "Jan 2025 to May 2025",
    bullets: [
      "Engineered a .NET Windows application to convert legacy BOSS shared memory files into structured XML for MC4, improving system reliability.",
      "Designed C# parsers and configuration-driven XML templates, reducing implementation time by 40% and manual labor by 60%.",
      "Collaborated across Agile teams to integrate reusable logic components and support scalable production deployments.",
    ],
  },
  {
    title: "NASA COMET Software Engineering Intern",
    org: "Jacobs",
    dates: "Jun 2024 to Aug 2024",
    bullets: [
      "Developed a multithreaded C++ interface to parallelize PLC hardware operations, improving load and unload times by over 80%.",
      "Implemented unit tests with Google Test and strengthened version control workflows using AccuRev.",
      "Applied asynchronous and concurrent programming techniques to optimize real-time, fault-tolerant Artemis simulation modules.",
    ],
  },
  {
    title: "Student Technician - Unified Communications & Networking",
    org: "NJIT",
    dates: "Sep 2022 to Jan 2024",
    bullets: [
      "Upgraded campus telephony and networking infrastructure across 30+ buildings, improving system uptime and service reliability.",
      "Led a summer dorm Wi-Fi expansion initiative that increased student satisfaction scores by 15%.",
      "Partnered with senior engineers to diagnose configuration issues and maintain seamless communication for thousands of users.",
    ],
  },
];

export const projects = [
  {
    name: "Distributed Log Engine with AI Insights",
    dates: "Spring 2026",
    stack: ["Go", "gRPC", "Gemini AI", "Docker", "Makefile"],
    blurb:
      "Engineered a high-performance log ingestion system featuring a custom segmented storage layer and a RAG pipeline for automated AI root-cause analysis.",
    links: {
      repo: "https://github.com/aanilgeo/log-engine",
      live: "",
    },
  },
  {
    name: "AI Resume Analyzer",
    dates: "Fall 2024",
    stack: ["React", "FastAPI", "Python", "OpenAI API"],
    blurb:
      "Integrated AI and NLP models to extract, score, and rank resume content through a responsive React interface and data-driven rendering.",
    links: {
      repo: "https://github.com/aanilgeo/ai-resume-analyzer-team3",
      live: "",
    },
  },
  {
    name: "Heart Failure Prediction using ML",
    dates: "Summer 2025",
    stack: ["Python", "scikit-learn", "Pandas", "NumPy"],
    blurb:
      "Built an end-to-end machine learning pipeline evaluating classification models using F1 and recall metrics.",
    links: {
      repo: "https://github.com/aanilgeo/heart-failure-prediction-ml",
      live: "",
    },
  },
];

export const skills = {
  frontend: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  backend: ["Go", "Python", "C++", "Java", "C#", "Node.js", "FastAPI", "gRPC", "REST APIs"],
  tools: ["Git", "Docker", "Makefile", "Linux", "AWS", "CI/CD", "AccuRev", "Google Test"],
  data: ["NumPy", "Pandas", "scikit-learn", "PyTorch"],
};

export const contact = {
  email: "andrewpularickal@gmail.com",
  note: "Open to entry-level 2026 Software Engineering roles.",
};