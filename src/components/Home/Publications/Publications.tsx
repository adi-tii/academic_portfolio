
import { motion } from "motion/react";
import { profile } from "@app/data/profile";

const publications = [
  {
    status: "ACCEPTED · NOVEMBER 2025",
    title:
      "From Billions to Bits: A Survey on Efficient Inference and Domain Adaptation for Large Language Models",
    authorship: "First Author",
    venue: "IEEE Conference on Engineering Informatics, IIT Dharwad (2025)",
    href: profile.orcid,
    linkLabel: "View research profile"
  },
  {
    status: "PUBLISHED · MARCH 2026",
    title: "Scales of Attention: A BERT Framework for Legal Judgment Prediction",
    authorship: "First Author",
    venue:
      "IEEE International Conference for Convergence in Computing Technology (I3CT), Sinhgad University (2026)",
    href: "https://doi.org/10.1109/I3CTCON68242.2026.11508072",
    linkLabel: "View DOI"
  }
];

const certifications = [
  {
    name: "NPTEL – Advanced Distributed Systems, IIT Madras (2026)",
    href: "https://drive.google.com/file/d/1QqmtUhe41pyIInNYrJG7X2nM3hYOwyCK/view?usp=sharing"
  },
  {
    name: "NPTEL – Cyber Security and Privacy, IIT Madras (2026)",
    href: "https://drive.google.com/file/d/1iTAxIIPGtommFIpRE36IRpdwnvwOOHvG/view?usp=sharing"
  },
  {
    name: "Juniper Networks Certified Associate – Junos (JNCIA-Junos), 2026",
    href: "https://drive.google.com/file/d/135zZSyzgJYcT-rZ_Q725rtuliBK_Twe6/view?usp=drive_link"
  }
];

export default function Publications() {
  return (
    <section
      id="publications"
      className="bg-primary-black px-4 py-12 text-primary-white sm:px-6 md:px-20 md:py-20 lg:px-28"
    >
      <h2 className="mb-10 text-center text-[28px]/[114%] tracking-tight lg:text-[48px]/[114%]">
        <span className="pr-2 md:pr-4">Selected</span>
        <span className="font-extrabold">Publications</span>
      </h2>

      <div className="grid gap-5 lg:grid-cols-2">
        {publications.map((paper, index) => (
          <motion.article
            key={paper.title}
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.9,
              delay: index * 0.15,
              type: "spring"
            }}
            viewport={{ once: true }}
            className="flex flex-col items-start rounded-lg border-2 border-zinc-700 p-6 md:p-8"
          >
            <p className="text-xs font-bold tracking-widest text-zinc-400">
              {paper.status}
            </p>

            <h3 className="mt-5 text-xl font-extrabold leading-snug md:text-2xl">
              {paper.title}
            </h3>

            <p className="mt-4 font-semibold text-zinc-300">
              {paper.authorship}
            </p>

            <p className="mt-2 flex-grow leading-relaxed text-zinc-400">
              {paper.venue}
            </p>

            <a
              href={paper.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 font-semibold text-blue-400 underline underline-offset-4"
            >
              {paper.linkLabel} ↗
            </a>
          </motion.article>
        ))}
      </div>

      <div className="mt-10 flex flex-col gap-8 border-t border-zinc-700 pt-8 md:flex-row md:justify-between">

        {/* Certifications */}
        <div className="flex-1">
          <h3 className="text-xl font-extrabold">
            Certifications
          </h3>

          <ul className="mt-4 space-y-4">
            {certifications.map((cert) => (
              <li
                key={cert.name}
                className="flex items-center justify-start gap-3 text-sm text-zinc-300"
              >
                <span>{cert.name}</span>

                <a
                  href={cert.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center py-1 font-semibold text-blue-400 underline underline-offset-4 transition-colors hover:text-blue-300"
                >
                  View ↗
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
