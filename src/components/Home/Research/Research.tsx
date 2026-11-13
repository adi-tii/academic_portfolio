
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { profile } from "@app/data/profile";
import { useCursorHover } from "@app/hooks/useCursorHover";

const architectureDiagrams = [
  {
    title: "Middleware Architecture",
    description: "End-to-end middleware and heterogeneous backend architecture.",
    src: `${import.meta.env.BASE_URL}img/architecture/overall-architecture.png`,
    alt: "Hardware-agnostic middleware architecture diagram",
  },
  {
    title: "NVIDIA Backend Pipeline",
    description: "Model optimization, deployment and TensorRT inference workflow.",
    src: `${import.meta.env.BASE_URL}img/architecture/nvidia-pipeline.png`,
    alt: "NVIDIA TensorRT backend pipeline diagram",
  },
  {
    title: "Qualcomm Backend Pipeline",
    description: "QAIRT conversion, native context generation and QNN execution.",
    src: `${import.meta.env.BASE_URL}img/architecture/qualcomm-pipeline.png`,
    alt: "Qualcomm QNN backend pipeline diagram",
  },
  {
    title: "TI Backend Pipeline",
    description: "TIDL model optimization and runtime execution workflow.",
    src: `${import.meta.env.BASE_URL}img/architecture/ti-pipeline.png`,
    alt: "Texas Instruments TIDL backend pipeline diagram",
  },
];

export default function Research() {
  const { handleMouseEnter, handleMouseLeave } = useCursorHover();

  const [benchmarksOpen, setBenchmarksOpen] = useState(false);
  const [architectureOpen, setArchitectureOpen] = useState(false);
  const [selectedDiagram, setSelectedDiagram] = useState<
    (typeof architectureDiagrams)[number] | null
  >(null);

  useEffect(() => {
    if (!selectedDiagram) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedDiagram(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedDiagram]);

  const technologyStack = [
    {
      category: "Systems & Model Interoperability",
      items: ["Rust", "C/C++", "Python", "PyTorch", "ONNX", "ONNX Runtime"],
    },
    {
      category: "Hardware Acceleration",
      items: [
        "NVIDIA TensorRT",
        "CUDA",
        "Qualcomm QNN / QAIRT",
        "TI TIDL / DLR",
        "OpenVINO",
      ],
    },
    {
      category: "Vision & Communication",
      items: ["ROS 2", "gRPC", "Protocol Buffers"],
    },
    {
      category: "Deployment & Observability",
      items: [
        "Docker",
        "Linux",
        "GitHub Actions",
        "OpenTelemetry",
        "Prometheus",
        "Grafana",
      ],
    },
  ];

  const capabilities = [
    {
      title: "Hardware-Agnostic Inference",
      description:
        "Unified middleware and backend abstraction for executing models across heterogeneous CPUs, GPUs, DSPs and NPUs.",
    },
    {
      title: "Model Optimization & Deployment",
      description:
        "ONNX-based model conversion, hardware-specific compilation, quantization and optimized deployment artifact generation.",
    },
    {
      title: "Accelerator Integration",
      description:
        "Native inference execution through NVIDIA TensorRT/CUDA, Qualcomm QNN/QAIRT and TI TIDL/DLR.",
    },
    {
      title: "Vision Pipeline Integration",
      description:
        "Camera-based inference, ROS 2 integration, gRPC communication and real-time result processing.",
    },
    {
      title: "Performance Engineering",
      description:
        "Cross-platform benchmarking, latency and throughput profiling, accuracy evaluation and resource monitoring.",
    },
    {
      title: "Deployment & Observability",
      description:
        "Containerized deployment, automated hardware validation and runtime telemetry across edge platforms.",
    },
  ];

  const benchmarks = [
    {
      hardware: "NVIDIA Thor",
      precision: "FP8",
      top1: "78.96%",
      top5: "88.30%",
      latency: "0.808 ms",
      throughput: "1,237.6 FPS",
    },
    {
      hardware: "NVIDIA Orin",
      precision: "INT8",
      top1: "72.90%",
      top5: "85.40%",
      latency: "1.688 ms",
      throughput: "741.24 FPS",
    },
    {
      hardware: "TI TDA4",
      precision: "FP16",
      top1: "78.11%",
      top5: "94.27%",
      latency: "10.80 ms",
      throughput: "92.60 FPS",
    },
    {
      hardware: "Qualcomm",
      precision: "INT8",
      top1: "71.32%",
      top5: "90.80%",
      latency: "1.680 ms",
      throughput: "184.55 FPS",
    },
  ];

  const DropdownArrow = ({ isOpen }: { isOpen: boolean }) => (
    <motion.span
      animate={{ rotate: isOpen ? 180 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-white bg-white text-primary-black shadow-md"
      aria-hidden="true"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </motion.span>
  );

  return (
    <section
      id="research"
      className="bg-primary-white px-4 py-12 sm:px-6 md:px-20 md:py-20 lg:px-28"
    >
      <h2 className="mb-10 text-center text-[28px]/[114%] tracking-tight lg:text-[48px]/[114%]">
        <span className="pr-2 md:pr-4">Research</span>
        <span className="font-extrabold">& Experience</span>
      </h2>

      <motion.article
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring" }}
        viewport={{ once: true }}
        className="bg-primary-black rounded-lg border-2 p-6 text-primary-white md:p-10"
      >
        {/* Project Header */}
        <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
          <div>
            <p className="text-sm font-semibold text-zinc-400">
              INDUSTRY–ACADEMIA COLLABORATION
            </p>

            <h3 className="mt-2 text-2xl font-extrabold md:text-3xl">
              Hardware-Agnostic Edge AI Model Deployment & Inference Platform
            </h3>

            <p className="mt-2 text-zinc-300">
              Research and Software Developer Intern · Magna International
            </p>
          </div>

          <span className="text-sm text-zinc-400">
            May 2026 – Present · Remote
          </span>
        </div>

        {/* Project Overview */}
        <motion.div
          className="mt-6"
          onMouseEnter={() => handleMouseEnter(150)}
          onMouseLeave={() => handleMouseLeave(40)}
        >
          <p className="leading-relaxed text-zinc-300">
            An end-to-end Edge AI deployment platform designed to optimize and
            execute deep learning models across heterogeneous System-on-Chips
            (SoCs), including NVIDIA, Qualcomm and Texas Instruments. The
            platform establishes a unified model deployment and inference
            architecture, combining hardware-specific model optimization,
            accelerator integration and a modular, hardware-agnostic middleware.
            It supports portable model execution, precision-aware optimization,
            real-time vision inference, cross-platform benchmarking and runtime
            observability across diverse edge computing environments.
          </p>
        </motion.div>

        {/* Core Capabilities */}
        <div className="mt-8">
          <p className="font-bold">Core Capabilities</p>

          <div className="mt-4 grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {capabilities.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  backgroundColor: "#ffffff",
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                  delay: index * 0.06,
                }}
                viewport={{ once: true }}
                className="group rounded-lg border border-zinc-800 bg-zinc-950 p-4 transition-colors duration-300 hover:border-white"
              >
                <p className="font-semibold text-primary-white transition-colors duration-300 group-hover:text-black">
                  {item.title}
                </p>

                <p className="mt-1 text-sm leading-relaxed text-zinc-400 transition-colors duration-300 group-hover:text-zinc-700">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mt-8 border-t border-zinc-700 pt-6">
          <p className="font-bold">Technology Stack</p>

          <div className="mt-4 space-y-5">
            {technologyStack.map((group) => (
              <div key={group.category}>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  {group.category}
                </p>

                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <motion.li
                      key={item}
                      whileHover={{ y: -3, scale: 1.04 }}
                      transition={{ duration: 0.2 }}
                      className="rounded-full bg-neutral-100 px-3 py-1 text-sm font-medium text-neutral-700 shadow-sm transition-colors duration-200 hover:bg-zinc-300"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Cross-Platform Benchmarks */}
        <div className="mt-8 border-t border-zinc-700 pt-6">
          <button
            type="button"
            aria-expanded={benchmarksOpen}
            aria-controls="benchmark-content"
            onClick={() => setBenchmarksOpen((open) => !open)}
            className="flex w-full cursor-pointer items-center justify-between gap-4 rounded-md py-2 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-black"
          >
            <div>
              <p className="font-bold">Cross-Platform Benchmark Results</p>

              <p className="mt-1 text-sm text-zinc-400">
                MobileNetV4 · ImageNet 50,000-image validation set
              </p>
            </div>

            <DropdownArrow isOpen={benchmarksOpen} />
          </button>

          <motion.div
            id="benchmark-content"
            initial={false}
            animate={{
              height: benchmarksOpen ? "auto" : 0,
              opacity: benchmarksOpen ? 1 : 0,
            }}
            transition={{
              height: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
              opacity: { duration: 0.3, ease: "easeInOut" },
            }}
            className="overflow-hidden"
            aria-hidden={!benchmarksOpen}
          >
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[650px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-zinc-700 text-xs uppercase tracking-wide text-zinc-400">
                    <th className="pb-3 pr-4">Hardware</th>
                    <th className="pb-3 pr-4">Precision</th>
                    <th className="pb-3 pr-4">Top-1 Acc.</th>
                    <th className="pb-3 pr-4">Top-5 Acc.</th>
                    <th className="pb-3 pr-4">Latency</th>
                    <th className="pb-3">Throughput</th>
                  </tr>
                </thead>

                <tbody>
                  {benchmarks.map((item) => (
                    <motion.tr
                      key={item.hardware}
                      whileHover={{
                        backgroundColor: "rgba(255,255,255,0.07)",
                      }}
                      transition={{ duration: 0.2 }}
                      className="border-b border-zinc-800 last:border-0"
                    >
                      <td className="py-4 pr-4 font-semibold">
                        {item.hardware}
                      </td>

                      <td className="py-4 pr-4 text-zinc-300">
                        {item.precision}
                      </td>

                      <td className="py-4 pr-4 text-zinc-300">
                        {item.top1}
                      </td>

                      <td className="py-4 pr-4 text-zinc-300">
                        {item.top5}
                      </td>

                      <td className="py-4 pr-4 text-zinc-300">
                        {item.latency}
                      </td>

                      <td className="py-4 font-semibold">
                        {item.throughput}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-zinc-500">
              Benchmarked across NVIDIA Thor, NVIDIA Orin, TI TDA4 and
              Qualcomm Dragon Radxa Q6a platforms using hardware-specific
              precision configurations. Performance varies by hardware,
              runtime and execution configuration.
            </p>
          </motion.div>
        </div>

        {/* Runtime Observability */}
        <div className="mt-5 rounded-lg bg-zinc-900 p-4">
          <p className="font-semibold text-primary-white">
            Runtime Observability
          </p>

          <p className="mt-1 text-sm leading-relaxed text-zinc-400">
            OpenTelemetry integration for collecting and exporting runtime
            telemetry, including inference latency, throughput, memory
            utilization and hardware-level performance.
          </p>
        </div>

        {/* Project Architecture */}
        <div className="mt-6 border-t border-zinc-700 pt-5">
          <button
            type="button"
            aria-expanded={architectureOpen}
            aria-controls="architecture-content"
            onClick={() => setArchitectureOpen((open) => !open)}
            className="flex w-full cursor-pointer items-center justify-between gap-4 rounded-md py-2 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-black"
          >
            <div>
              <p className="font-bold">Project Architecture</p>

              <p className="mt-1 text-sm text-zinc-400">
                Explore the complete system architecture, model deployment
                pipelines, hardware-specific backends and inference execution
                workflows.
              </p>
            </div>

            <DropdownArrow isOpen={architectureOpen} />
          </button>

          <motion.div
            id="architecture-content"
            initial={false}
            animate={{
              height: architectureOpen ? "auto" : 0,
              opacity: architectureOpen ? 1 : 0,
            }}
            transition={{
              height: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
              opacity: { duration: 0.3, ease: "easeInOut" },
            }}
            className="overflow-hidden"
            aria-hidden={!architectureOpen}
          >
            <div className="mt-5">
              <p className="mb-4 text-sm leading-relaxed text-zinc-400">
                Select a diagram to explore the middleware architecture and
                individual hardware backend workflows.
              </p>

              <div className="flex gap-4 overflow-x-auto pb-4">
                {architectureDiagrams.map((diagram, index) => (
                  <motion.button
                    key={diagram.title}
                    type="button"
                    onClick={() => setSelectedDiagram(diagram)}
                    whileHover={{ y: -4, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="group w-64 shrink-0 cursor-pointer overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900 text-left transition-colors duration-300 hover:border-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    aria-label={`View larger image: ${diagram.title}`}
                  >
                    <div className="flex h-40 items-center justify-center overflow-hidden bg-white p-2">
                      <img
                        src={diagram.src}
                        alt={diagram.alt}
                        loading="lazy"
                        className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-4">
                      <p className="text-sm font-semibold text-primary-white">
                        {String(index + 1).padStart(2, "0")} · {diagram.title}
                      </p>

                      <p className="mt-3 text-xs font-semibold text-blue-400 transition-colors group-hover:text-blue-300">
                        Click to enlarge ↗
                      </p>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Academic & Engineering Work */}
        <div className="mt-6 border-t border-zinc-700 pt-5">
          <p className="font-bold">
            Additional academic and engineering work
          </p>

          <motion.div
            onMouseEnter={() => handleMouseEnter(150)}
            onMouseLeave={() => handleMouseLeave(40)}
          >
            <p className="mt-2 leading-relaxed text-zinc-300">
              Academic and team projects across AI-ML, big data analytics,
              computer networks, embedded intelligent systems and software
              development. I also mentor juniors beginning their work in the
              Edge AI domain.
            </p>
          </motion.div>

          <a
            href={profile.orcid}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block font-semibold text-blue-400 underline underline-offset-4 transition-colors duration-300 hover:text-blue-300"
          >
            ORCID profile ↗
          </a>
        </div>
      </motion.article>

      {/* Architecture Image Lightbox */}
      <AnimatePresence>
        {selectedDiagram && (
          <motion.div
            key="architecture-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex cursor-auto items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-8"
            onClick={() => setSelectedDiagram(null)}
            role="dialog"
            aria-modal="true"
            aria-label={selectedDiagram.title}
          >
            <motion.div
              initial={{ scale: 0.94, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative flex max-h-[92vh] w-full max-w-6xl cursor-auto flex-col overflow-hidden rounded-xl border border-zinc-700 bg-zinc-950 shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-4 border-b border-zinc-800 px-5 py-4">
                <div>
                  <p className="font-semibold text-white">
                    {selectedDiagram.title}
                  </p>
                  <p className="mt-1 text-xs text-zinc-400">
                    Project Architecture · Magna International
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedDiagram(null)}
                  className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-zinc-600 text-2xl text-white transition-colors hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  aria-label="Close architecture image"
                >
                  ×
                </button>
              </div>

              <div className="flex min-h-0 flex-1 cursor-zoom-in items-center justify-center overflow-auto bg-white p-2 sm:p-5">
                <img
                  src={selectedDiagram.src}
                  alt={selectedDiagram.alt}
                  className="max-h-[72vh] max-w-full object-contain"
                />
              </div>

              <div className="border-t border-zinc-800 px-5 py-3">
                <p className="text-sm text-zinc-400">
                  {selectedDiagram.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
