// Mock data for Sachet Ranjan Bisi Portfolio

export const personalInfo = {
  name: "Sachet Ranjan Bisi",
  title: "AI/ML Engineer & Software Development Engineer",
  tagline: "Building production-ready AI/ML systems and scalable software solutions",
  email: "sb9229@nyu.edu",
  phone: "+1 773-709-0002",
  location: "New York City, NY",
  website: "iamsrb.com",
  github: "https://github.com/sacherbisi",
  linkedin: "https://linkedin.com/in/sachetbisi",
  bio: "I'm Sachet Ranjan Bisi, a Computer Engineering graduate from NYU with hands-on experience in software development and AI/ML deployment. I've built scalable APIs, optimized backend systems, and deployed intelligent applications across AWS, GCP, and Azure.\n\nMy work spans from boosting system throughput to building an LLM-powered system that improved accuracy and halved reconciliation time. I'm passionate about designing reliable, impactful systems that blend innovation with real-world impact.\n\nOutside of work, I'm a tech enthusiast and content consumer who loves following the NBA, diving into anime and immersive TV shows, and solving problems over a good cup of coffee.",
  skills: [
    "AI & Machine Learning",
    "NLP & RAG Systems",
    "Backend Engineering",
    "Cloud Architecture",
    "Scalable Infrastructure"
  ]
};

export const education = [
  {
    id: 1,
    shortTitle: "NYU",
    degree: "Master of Science in Computer Engineering",
    institution: "New York University",
    location: "New York, NY",
    period: "Sep 2023 – May 2025",
    gpa: "",
    description: "Specialized in Machine Learning, AI systems, and scalable backend engineering. Built production-grade RAG pipelines, deployed deep learning models, and optimized cloud architectures across AWS and GCP.",
    coursework: ["Machine Learning", "Artificial Intelligence", "Internet Protocols", "Network Security"]
  },
  {
    id: 2,
    shortTitle: "UIC",
    degree: "Bachelor of Science in Computer Engineering",
    institution: "University of Illinois at Chicago",
    location: "Chicago, IL",
    period: "Aug 2019 – May 2023",
    gpa: "",
    description: "Built a strong foundation in computer science fundamentals, embedded systems, and software engineering. Gained hands-on experience with circuit design, signal processing, and full-stack development.",
    coursework: ["Data Structures", "Computer Vision", "Systems Programming", "Computer Architecture"]
  },
  {
    id: 3,
    shortTitle: "Indus",
    degree: "IBDP & IGCSE (Grade 9–12)",
    institution: "Indus International School",
    location: "Hyderabad, India",
    period: "Aug 2015 – May 2019",
    gpa: "",
    description: "Completed the International Baccalaureate Diploma Programme with Higher Level courses in Computer Science, Business, and Mathematics. Developed analytical thinking and a global perspective through rigorous academics.",
    coursework: ["Computer Science HL", "Business HL", "Maths HL", "Physics SL", "English SL", "Hindi SL"]
  },
  {
    id: 4,
    shortTitle: "Seven Hills",
    degree: "CBSE (Grade 1–8)",
    institution: "Seven Hills Residential School",
    location: "India",
    period: "Until May 2015",
    gpa: "",
    description: "Foundational years at a prestigious residential school that nurtured discipline, curiosity, and a love for learning. Participated in various extracurricular activities including sports and cultural events.",
    coursework: ["General Curriculum"]
  }
];

export const experience = [
  {
    id: 1,
    company: "Viabot",
    role: "Software Engineer Intern",
    location: "Remote",
    period: "May 2024 – August 2024",
    description: "Developed and deployed scalable microservices using Python (FastAPI) on AWS and GCP, with automated CI/CD pipelines.",
    achievements: [
      "Improved system uptime by 40% and enabled faster cross-platform integrations through scalable microservices",
      "Reduced manual intervention by 30% and cut average release time with automated Jenkins and GitLab CI/CD pipelines",
      "Optimized resource utilization and boosted backend throughput by 60% through refactored Spring Boot components",
      "Achieved 95% test coverage and lowered post-release defect rates by 35% through extensive unit and integration testing"
    ],
    technologies: ["Python", "FastAPI", "Spring Boot", "AWS", "GCP", "Jenkins", "GitLab CI/CD", "Docker"]
  },
  {
    id: 2,
    company: "University of Illinois at Chicago",
    role: "Computer Engineering Intern",
    location: "Chicago, IL",
    period: "May 2022 – December 2022",
    description: "Collaborated on the development of an IR thermal camera prototype with integrated hardware and Python-based signal processing.",
    achievements: [
      "Enhanced temperature detection accuracy through integrated embedded hardware and Python signal processing",
      "Reduced manual debugging by 25% with automated circuit validation workflows",
      "Improved prototype reliability and performance consistency by 30% by diagnosing and resolving circuit design issues"
    ],
    technologies: ["Python", "Embedded Systems", "Signal Processing", "Circuit Design"]
  }
];

export const projects = [
  {
    id: 1,
    title: "LLM-Powered Medication Verification",
    category: "AI/ML",
    date: "October 2024",
    description: "Multi-modal RAG pipeline integrating OCR and speech-to-text for clinical medication verification with intelligent reconciliation workflows.",
    longDescription: "Designed a comprehensive RAG pipeline that processes handwritten and audio clinical inputs using OCR APIs and AWS Transcribe. Implemented LangChain for agentic orchestration, task routing, and memory management. Built scalable backend APIs with FastAPI and Django REST for asynchronous data processing.",
    technologies: ["RAG", "LangChain", "OCR", "AWS Transcribe", "FastAPI", "Django REST", "Python"],
    achievements: [
      "Improved text extraction accuracy by 25%",
      "Cut medication validation time by 50%",
      "Improved response latency by 60%"
    ],
    github: "",
    demo: ""
  },
  {
    id: 2,
    title: "Food Classification Deployment",
    category: "AI/ML",
    date: "December 2023",
    description: "End-to-end CNN model deployment with Docker containerization and GCP Cloud Run for scalable real-time inference.",
    longDescription: "Trained and fine-tuned MobileNetV2 for food classification, containerized with Docker, and deployed as a FastAPI microservice on GCP Cloud Run. Implemented automated CI/CD with Jenkins and Kubernetes orchestration for enhanced scalability.",
    technologies: ["TensorFlow", "MobileNetV2", "Docker", "FastAPI", "GCP Cloud Run", "Jenkins", "Kubernetes"],
    achievements: [
      "Achieved 88% model accuracy",
      "Reduced deployment time by 45%",
      "Improved inference performance by 85%"
    ],
    github: "",
    demo: ""
  },
  {
    id: 3,
    title: "Neural Network Application",
    category: "AI/ML",
    date: "December 2022",
    description: "Python-based neural network implementation for image classification and curve fitting using perceptron and backpropagation algorithms.",
    longDescription: "Built a perceptron training algorithm for image classification and optimized curve fitting using backpropagation. Developed a shape classification model achieving high accuracy on validation datasets.",
    technologies: ["Python", "NumPy", "Neural Networks", "Backpropagation"],
    achievements: [
      "Achieved 92% accuracy on validation datasets",
      "Reduced error by 86% during curve fitting",
      "Improved efficiency by 89% for shape classification"
    ],
    github: "",
    demo: ""
  },
  {
    id: 4,
    title: "Beep Baseball",
    category: "Hardware",
    date: "May 2023",
    description: "Hardware prototype project with rigorous electrical component testing and critical issue resolution.",
    longDescription: "Led research and authored the project proposal for an innovative beep baseball system. Conducted comprehensive testing on electrical components and collaborated with engineers to identify and resolve critical design issues.",
    technologies: ["Electrical Engineering", "Hardware Testing", "Circuit Design"],
    achievements: [
      "Secured $250 in funding",
      "Reduced potential production errors by 30%",
      "Enhanced product reliability"
    ],
    github: "",
    demo: ""
  }
];

export const skills = {
  languages: ["Python", "SQL", "C++", "Java", "TypeScript", "JavaScript", "Git", "Postman", "Docker", "Firebase"],
  frameworks: ["React", "Node.js", "Express.js", "Flask", "Bootstrap", "jQuery", "TailwindCSS", "Framer Motion", "GSAP"],
  concepts: ["DSA", "DBMS", "OOP", "Operating Systems", "System Design"],
  cloud: ["AWS", "GCP", "Docker", "Jenkins", "GitLab CI/CD", "Kubernetes"],
  tools: ["VS Code", "Git", "Postman", "Jupyter Notebook", "PyTest", "JUnit"]
};
