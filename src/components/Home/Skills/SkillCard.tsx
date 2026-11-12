import { ReactNode } from "react";

type Props = { title: string; children?: ReactNode };

export default function SkillCard({ title, children }: Props) {
  return (
    <li className="group bg-primary-white hover:bg-primary-black flex h-40 w-40 flex-col items-center justify-center rounded border-2 p-4 transition-all duration-300 sm:h-[186px] sm:w-[186px] sm:p-6">
      <span className="group-hover:text-primary-white transition-colors duration-300">{children}</span>
      <h3 className="group-hover:text-primary-white mt-5 text-center text-sm/[120%] font-bold tracking-tight sm:text-base">{title}</h3>
    </li>
  );
}
