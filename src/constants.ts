import { NavLink } from "./types/nav";
import { ProjectType } from "./types/project";

export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const linksInfo: NavLink[] = [
  { title: "About", path: "#about" },
  { title: "Skills", path: "#skills" },
  { title: "Projects", path: "#projects" },
  { title: "Research", path: "#research" },
  { title: "Publications", path: "#publications" },
  { title: "Contact", path: "#contact" }
];

export const projectsData: ProjectType[] = [
  {
    id: 1,
    title: "Hardware-Agnostic Edge AI Middleware",
    description:
      "Industry–academia collaboration with Magna International (May 2026–Present). Contributed to a modular middleware for ahead-of-time compiled inference across NVIDIA, Qualcomm and TI backends, independently developing the Qualcomm deployment pipeline. Deployed MobileNetV4 end to end on the Radxa Dragon Q6A using Docker, QAIRT/QNN, INT8 quantization and on-device context generation. Validated on the 50,000-image ImageNet validation set, achieving 72.9% Top-1 accuracy, 1.68 ms average inference latency and 184.55 FPS throughput.",
    demo: "",
    github: "",
    technologies: ["C++", "Rust", "Qualcomm QNN", "QAIRT", "ONNX", "Docker", "INT8 Quantization"],
    ariaLabel: { demo: "Project demonstration unavailable", github: "Private project repository" }
  },
  {
    id: 2,
    title: "AQMP: Adaptive Queue Measurement Prototype",
    description:
      "A network measurement and feedback prototype built using a C-based UDP probe tool and an Azure echo server with dual-sided logging and packet capture. Analysed 9,600 probes across four networks, measuring round-trip time, queue depth and packet loss. Prototyped a UDP feedback mechanism in which a receiver bitmap in each acknowledgement indicates whether a lost probe reached the server, supporting approximately 98% goodput.",
    demo: "",
    github: "https://github.com/adi-tii/AQMP",
    technologies: ["C", "UDP Sockets", "Wireshark", "Python", "Azure"],
    ariaLabel: { demo: "AQMP demonstration", github: "AQMP source code on GitHub" }
  },
  {
    id: 3,
    title: "Q-VAIDYA: FP8–QLoRA Optimization of LLaMA-4 Scout",
    description:
      "A team research implementation exploring FP8 quantization and QLoRA-based optimization for the LLaMA-4 Scout mixture-of-experts model. Combined a quantized backbone with parameter-efficient adapters and evaluated the approach on medical question-answering benchmarks. The reported results include a 50% reduction in model-weight memory footprint, approximately 2× inference speedup and 71% benchmark accuracy across PubMedQA and MedQA.",
    demo: "",
    github: "https://github.com/adi-tii/Q-Vaidya",
    technologies: ["Python", "PyTorch", "Hugging Face", "PEFT", "CUDA", "FP8", "QLoRA"],
    ariaLabel: { demo: "Q-VAIDYA demonstration", github: "Q-VAIDYA source code on GitHub" }
  },
  {
    id: 4,
    title: "LitReview AI: GenAI-Powered Literature Review System",
    description:
      "A GenAI hackathon project for research literature synthesis, independently implemented across the application layer. Built a retrieval-augmented generation pipeline using Sentence Transformers, ChromaDB and Groq-hosted language models. Developed the FastAPI backend and Streamlit interface, with PDF/DOCX ingestion, Tesseract OCR, K-Means clustering and NetworkX/PyVis visualizations connecting papers, themes, keywords and citations.",
    demo: "",
    github: "https://github.com/adi-tii/LitReviewAI",
    technologies: ["Python", "FastAPI", "Streamlit", "ChromaDB", "Groq", "RAG", "NetworkX"],
    ariaLabel: { demo: "LitReview AI demonstration", github: "LitReview AI source code on GitHub" }
  },
  {
    id: 5,
    title: "KLE Tech Sports Arena Court Booking System",
    description:
      "A full-stack court booking platform covering seven courts across badminton, table tennis and squash. Implemented real-time availability backed by a four-entity PostgreSQL schema using Prisma ORM. Prevented double-booking at the database layer with a unique constraint and added role-based access for student, staff and admin roles using NextAuth, JWT and REST API endpoints.",
    demo: "",
    github: "https://github.com/hegdev13/sports-arena-court-booking",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "NextAuth", "JWT", "REST APIs"],
    ariaLabel: { demo: "Sports Arena demonstration", github: "Sports Arena source code on GitHub" }
  }
];
