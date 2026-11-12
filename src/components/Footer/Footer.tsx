import Logo from "@app/components/Header/Logo";
import { profile } from "@app/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-primary-black text-primary-white flex flex-col gap-5 px-5 py-5 sm:flex-row sm:items-center sm:justify-between md:px-20 lg:px-[112px]">
      <div className="flex items-center gap-3">
        <Logo color="white" />
        <div>
          <p className="font-semibold">Designed and developed by Aditi Choudhary.</p>
          <p className="mt-1 text-sm text-zinc-400">{profile.footerLine}</p>
        </div>
      </div>
      <p className="text-sm text-zinc-400">© {year} Aditi Choudhary. All rights reserved.</p>
    </footer>
  );
}
