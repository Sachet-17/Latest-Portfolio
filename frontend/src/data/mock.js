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
  bio: "I'm a graduate student at NYU pursuing my Master's in Computer Engineering with a focus on Machine Learning and AI. I specialize in building production-grade AI/ML systems, scalable microservices, and high-performance backend infrastructure. My work spans from designing RAG pipelines and deploying deep learning models to optimizing cloud architectures and CI/CD workflows.",
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
    degree: "Master of Science in Computer Engineering",
    institution: "New York University",
    location: "New York City, NY",
    period: "Expected May 2025",
    gpa: "",
    coursework: ["Machine Learning", "Artificial Intelligence", "Internet Protocols", "Network Security"]
  },
  {
    id: 2,
    degree: "Bachelor of Science in Computer Engineering",
    institution: "University of Illinois at Chicago",
    location: "Chicago, IL",
    period: "May 2023",
    gpa: "",
    coursework: ["Data Structures", "Computer Vision", "Systems Programming", "Computer Architecture"]
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
  languages: ["Python", "Java", "JavaScript", "SQL", "C++"],
  frameworks: ["FastAPI", "Django REST", "TensorFlow", "PyTorch", "Scikit-learn", "Keras", "LangChain", "React.js"],
  cloud: ["AWS", "GCP", "Docker", "Jenkins", "GitLab CI/CD", "Kubernetes"],
  tools: ["VS Code", "Git", "Postman", "Jupyter Notebook", "PyTest", "JUnit"]
};
