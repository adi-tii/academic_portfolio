import { ReactNode } from "react";

type Props = {
  path: string;
  children?: ReactNode;
  "aria-label"?: string;
};

export default function SocialCard({ path, children, "aria-label": ariaLabel }: Props) {
  return (
    <a href={path} aria-label={ariaLabel} className="flex-center group bg-primary-white hover:bg-primary-black h-12 w-12 cursor-pointer rounded border-2 p-1 transition-all duration-300 hover:scale-105 active:scale-90 md:h-auto md:w-auto md:p-4" target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
