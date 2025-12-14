export const about = [
  "my interest in computers started quietly during childhood. a close friend and i spent hours experimenting with simple website builders like weebly, watching youtube videos about installing ubuntu, and trying random things on a computer just to see what would happen. i didn’t understand concepts like operating systems back then, but that curiosity stayed with me.",
  "in high school, that interest faded into the background as i explored biology with the idea of medical school. over time, i realized it wasn’t aligned with my interests or the realities around me. that detour helped me recognize what had always felt natural, building things, understanding systems, and learning how technology works beneath the surface.",
  "when i started studying computer science at njit, i initially thought i was there to learn coding. through coursework and hands on experiences at nasa and honeywell, i realized computer science is much broader. today, i care about clarity, reliability, and writing software that feels intentional, using this field as a way to build systems that genuinely help people, users, and the organizations that rely on them."
];

export const experience = [
  {
    title: "software engineering co-op",
    org: "honeywell",
    dates: "jan 2025 to may 2025",
    bullets: [
      "engineered a .net windows app to convert legacy boss shared memory files into structured xml for mc4.",
      "designed c# parsers and configuration driven xml templates to reduce implementation time and manual effort.",
      "collaborated across agile teams to integrate reusable components for scalable deployments.",
    ],
  },
  {
    title: "nasa comet software engineering intern",
    org: "jacobs",
    dates: "jun 2024 to aug 2024",
    bullets: [
      "developed a multithreaded c++ interface to parallelize plc hardware operations and reduce load and unload times.",
      "implemented unit tests with google test and improved workflows with version control practices.",
      "worked in performance focused, fault tolerant simulation modules using concurrent programming techniques.",
    ],
  },
  {
    title: "student technician - unified communications & networking",
    org: "njit",
    dates: "sep 2022 to jan 2024",
    bullets: [
      "helped support telephony and networking infrastructure across campus facilities.",
      "assisted with troubleshooting and configuration tasks for large user populations.",
    ],
  },
];

export const projects = [
  {
    name: "heart failure prediction using ml",
    dates: "summer 2025",
    stack: ["python", "pandas", "numpy", "scikit-learn"],
    blurb:
      "built an end to end ml workflow with preprocessing, visualizations, and model comparisons focused on recall and f1.",
    links: {
      repo: "https://github.com/aanilgeo/heart-failure-prediction-ml",
      live: "",
    },
  },
  {
    name: "ai resume analyzer",
    dates: "fall 2024",
    stack: ["react", "javascript", "python", "fastapi"],
    blurb:
      "built a tool to analyze resumes, extract keywords, and generate actionable suggestions through a clean, simple ui.",
    links: {
      repo: "https://github.com/aanilgeo/ai-resume-analyzer-team3",
      live: "",
    },
  },
];

export const skills = {
  frontend: ["react", "typescript", "javascript", "next.js", "tailwind css"],
  backend: ["java", "python", "node.js", "rest apis", "fastapi"],
  tools: ["git", "docker", "linux", "ci/cd"],
  data: ["numpy", "pandas", "scikit-learn"],
};

export const contact = {
  email: "andrewpularickal@gmail.com",
  location: "saddle brook, nj",
  note: "open to 2026 software engineering roles and collaborations.",
};