
import SocialMedia from "./SocialMedia";
import girl from "@app/assets/girlWithLaptop.svg";
import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";
import { profile } from "@app/data/profile";

export default function Hero() {
  return (
    <div className="flex-center bg-primary-white flex-col-reverse justify-evenly px-4 sm:px-6 md:flex-row md:px-20 md:pt-10 lg:px-28">
      <motion.section
        className="flex flex-col gap-8 md:w-1/2"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 3, type: "spring" }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col gap-3 text-[28px]/[114%] tracking-tight lg:gap-5 lg:text-5xl/[117%]">
          <h1>
            <span>Hello, I'm</span>{" "}
            <TypeAnimation
              sequence={[
                "Aditi Choudhary",
                5000,
                ...profile.animatedRoles
              ]}
              wrapper="span"
              speed={50}
              style={{ fontWeight: 800, display: "inline-block" }}
              repeat={Infinity}
              preRenderFirstString={true}
            />
          </h1>

          <p>
            <span className="font-extrabold">Computer Science </span>
            <span className="text-primary-white text-stroke-1 text-stroke-primary-black font-extrabold">
              Undergraduate
            </span>
          </p>
        </div>

        <p className="whitespace-pre-line text-base/6 font-normal text-zinc-500">
          {profile.introduction}
        </p>

        <div className="lg:mt-10">
          <SocialMedia />
        </div>
      </motion.section>

      <motion.div
        className="flex-center md:w-1/2"
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 3, type: "spring" }}
        viewport={{ once: true }}
      >
        <img
          src={girl}
          alt="Illustration of a person working on a laptop"
          fetchPriority="high"
          className="max-h-[750px] pb-8 sm:w-[539px] xl:w-630"
        />
      </motion.div>
    </div>
  );
}
