import Form from "./Form";
import EmailIcon from "@app/assets/email.svg?react";
import { motion } from "motion/react";
import { profile } from "@app/data/profile";

export default function Contact() {
  return (
    <>
      <section className="bg-primary-black text-primary-black h-20 md:h-25"></section>
      <section id="contact" className="bg-primary-white relative px-4 py-10 sm:px-6 md:px-10 md:py-20 lg:px-20 xl:px-28">
        <h2 className="text-primary-black mb-10 text-center text-[28px]/[114%] tracking-tight lg:text-5xl/[117%]">
          <span className="pr-2 md:pr-4">Contact</span><span className="font-extrabold">Me</span>
        </h2>
        <div className="md:flex-row-reverse md:items-center md:gap-15 lg:flex xl:gap-28">
          <div className="my-8 flex w-full flex-col gap-8">
            <motion.h2 className="text-[28px]/[114%] font-extrabold tracking-tight lg:text-5xl/[117%]" initial={{ y: 50, opacity: 0 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, type: "spring" }}>
              Let's <span className="text-stroke-1 text-stroke-primary-black text-primary-white px-3">discuss</span><br />research & collaboration
            </motion.h2>
            <p className="text-base/[150%] text-zinc-500">I'm open to internships, R&D opportunities and interesting collaborations. Whether you have a question, an idea to explore, or simply want to connect, feel free to reach out.</p>
            <p className="flex items-center"><EmailIcon className="mr-3 h-5 w-5" /><a href={`mailto:${profile.email}`}>{profile.email}</a></p>
          </div>
          <Form />
        </div>
      </section>
    </>
  );
}
