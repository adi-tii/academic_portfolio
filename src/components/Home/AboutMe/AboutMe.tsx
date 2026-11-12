import girl from "@app/assets/girl.svg";
import { useCursorHover } from "@app/hooks/useCursorHover";
import { motion } from "motion/react";
import { profile } from "@app/data/profile";

export default function AboutMe() {
  const { handleMouseEnter, handleMouseLeave } = useCursorHover();
  return (
    <section className="bg-primary-black flex flex-col gap-10 px-4 py-5 sm:p-6 md:p-20 lg:flex-row lg:px-28" id="about">
      <div className="flex-center lg:w-1/2">
        <img src={girl} alt="Decorative portfolio illustration" />
      </div>
      <div className="lg:w-1/2">
        <h3 className="text-primary-white mb-10 text-[28px]/[114%] tracking-tight lg:text-5xl/[117%]">
          <span className="pr-2 md:pr-4">About</span><span className="font-extrabold">Me</span>
        </h3>
        <article className="flex flex-col gap-4 text-zinc-300" onMouseEnter={() => handleMouseEnter(150)} onMouseLeave={() => handleMouseLeave(40)}>
          <motion.p initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1, type: "spring" }} viewport={{ once: true }}>
            I'm a Computer Science and Engineering undergraduate at {profile.university}, pursuing a B.E. from 2023 to 2027, with a current CGPA of {profile.cgpa}. My interests span computer science, artificial intelligence, computer systems, distributed computing, computer architecture, and the intersection of hardware and software.
          </motion.p>
          <motion.p initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 2, type: "spring" }} viewport={{ once: true }}>
            My interest in computer science grew from a curiosity about how things work beneath the surface. What started as an interest in programming gradually developed into a fascination with systems, technology, and the engineering behind them. Over time, I found myself drawn towards research and problem-solving, especially questions that go beyond simply making something work to understanding how it could work better.
          </motion.p>
          <motion.p initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 3, type: "spring" }} viewport={{ once: true }}>
            I'm particularly interested in Edge AI, efficient AI systems, computer architecture, distributed systems, network engineering, and building reliable, adaptable software. I enjoy exploring how models can be optimized for resource-constrained devices and how computing systems can become faster and more efficient.
          </motion.p>
          <motion.p initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 3.5, type: "spring" }} viewport={{ once: true }}>
            Beyond technology, I'm curious about human behaviour, psychology, astronomy, biology, and world affairs. I enjoy mentoring, exchanging ideas, following technology and industry trends, and discovering perspectives that challenge the way I think. I see my future as a combination of research, higher studies, engineering and perhaps entrepreneurship—and I'm looking forward to where curiosity takes me.
          </motion.p>
        </article>
      </div>
    </section>
  );
}
