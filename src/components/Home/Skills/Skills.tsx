
import SkillCard from "./SkillCard";
import type { IconType } from "react-icons";

import {
  SiCplusplus,
  SiPython,
  SiLinux,
  SiGit,
  SiDocker
} from "react-icons/si";

import {
  FaJava,
  FaSitemap,
  FaCubes,
  FaDesktop,
  FaDatabase,
  FaNetworkWired,
  FaMicrochip,
  FaCalculator,
  FaBrain,
  FaCloud
} from "react-icons/fa";

const skills: { title: string; icon: IconType }[] = [
  { title: "C++", icon: SiCplusplus },
  { title: "Python", icon: SiPython },
  { title: "Java", icon: FaJava },
  { title: "Data Structures & Algorithms", icon: FaSitemap },
  { title: "Object-Oriented Programming", icon: FaCubes },
  { title: "Operating Systems", icon: FaDesktop },
  { title: "Database Management Systems", icon: FaDatabase },
  { title: "Computer Networks", icon: FaNetworkWired },
  { title: "Computer Organization & Architecture", icon: FaMicrochip },
  { title: "Mathematics", icon: FaCalculator },
  { title: "AI & Machine Learning", icon: FaBrain },
  { title: "Linux", icon: SiLinux },
  { title: "Git", icon: SiGit },
  { title: "Cloud Computing", icon: FaCloud },
  { title: "DevOps", icon: SiDocker }
];

export default function Skills() {
  return (
    <section
      className="bg-primary-white px-4 py-10 sm:px-6 md:px-20 lg:px-28 lg:pb-25 2xl:px-36"
      id="skills"
    >
      <h2 className="mb-10 text-center text-[28px]/[114%] tracking-tight lg:text-[48px]/[114%]">
        <span className="pr-2 md:pr-4">My</span>
        <span className="font-extrabold">Skills</span>
      </h2>

      <ul className="grid grid-cols-2 justify-items-center gap-5 md:grid-cols-3 md:gap-5 lg:grid-cols-4 lg:gap-12 xl:grid-cols-5">
        {skills.map(({ title, icon: Icon }) => (
          <SkillCard key={title} title={title}>
            <span className="inline-flex h-12 w-12 items-center justify-center text-primary-black transition-colors duration-300 group-hover:text-primary-white [&>svg]:h-12 [&>svg]:w-12">
              <Icon aria-hidden="true" />
            </span>
          </SkillCard>
        ))}
      </ul>
    </section>
  );
}
