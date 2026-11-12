import { motion } from "motion/react";
import { profile } from "@app/data/profile";

export default function Research() {
  return (
    <section id="research" className="bg-primary-white px-4 py-12 sm:px-6 md:px-20 md:py-20 lg:px-28">
      <h2 className="mb-10 text-center text-[28px]/[114%] tracking-tight lg:text-[48px]/[114%]">
        <span className="pr-2 md:pr-4">Research</span><span className="font-extrabold">& Experience</span>
      </h2>
      <motion.article initial={{ y: 60, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1, type: "spring" }} viewport={{ once: true }} className="bg-primary-black text-primary-white rounded-lg border-2 p-6 md:p-10">
        <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
          <div>
            <p className="text-sm font-semibold text-zinc-400">INDUSTRY–ACADEMIA COLLABORATION</p>
            <h3 className="mt-2 text-2xl font-extrabold md:text-3xl">Hardware-Agnostic Edge AI Middleware</h3>
            <p className="mt-2 text-zinc-300">Research and Software Developer Intern · Magna International</p>
          </div>
          <span className="text-sm text-zinc-400">May 2026 – Present · Remote</span>
        </div>
        <p className="mt-6 leading-relaxed text-zinc-300">
          Working on a hardware-agnostic Edge AI middleware designed to run AI models across heterogeneous hardware accelerators through a unified inference interface. Independently developed the Qualcomm backend, integrating Qualcomm QNN and QAIRT for native model execution on Qualcomm hardware. The work includes inference integration, tensor handling, hardware compatibility and INT8-quantized model execution.
        </p>
        <div className="mt-6">
          <p className="font-bold">Research and engineering focus</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {["C++", "Rust", "Qualcomm QNN", "QAIRT", "ONNX Runtime", "INT8 Quantization", "Docker", "Linux", "MobileNetV4", "Radxa Dragon Q6A", "Qualcomm NPU"].map((item) => (
              <li key={item} className="rounded-full bg-neutral-100 px-3 py-1 text-sm font-medium text-neutral-700">{item}</li>
            ))}
          </ul>
        </div>
        <div className="mt-8 grid gap-4 border-t border-zinc-700 pt-6 sm:grid-cols-3">
          {[["72.9%", "ImageNet Top-1 accuracy"], ["1.68 ms", "Average inference latency"], ["184.55 FPS", "Throughput"]].map(([value, label]) => (
            <div key={label}><p className="text-3xl font-extrabold">{value}</p><p className="mt-1 text-sm text-zinc-400">{label}</p></div>
          ))}
        </div>
        <p className="mt-4 text-xs text-zinc-500">Validated on the 50,000-image ImageNet validation set. Project source code is private.</p>
        <div className="mt-6 border-t border-zinc-700 pt-5">
          <p className="font-bold">Additional academic and engineering work</p>
          <p className="mt-2 leading-relaxed text-zinc-300">Academic and team projects across cloud computing, big data analytics, machine learning and software development. I also mentor juniors beginning their work in the Edge AI domain.</p>
          <a href={profile.orcid} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block font-semibold text-blue-400 underline underline-offset-4">ORCID profile ↗</a>
        </div>
      </motion.article>
    </section>
  );
}
