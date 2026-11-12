import SocialCard from "./SocialCard";
import LinkedinIcon from "@app/assets/social/linkedin.svg?react";
import GmailIcon from "@app/assets/social/gmail.svg?react";
import GitHubIcon from "@app/assets/social/github.svg?react";
import { profile } from "@app/data/profile";

const socialLinks = [
  { path: profile.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
  { path: profile.github, icon: GitHubIcon, label: "GitHub" },
  { path: `mailto:${profile.email}`, icon: GmailIcon, label: "Email" }
];

const iconStyles = "group-hover:fill-primary-white h-5 w-5 md:h-10 md:w-10";

export default function SocialMedia() {
  return (
    <div className="flex gap-6 text-black">
      {socialLinks.map(({ path, icon: Icon, label }) => (
        <SocialCard key={path} path={path} aria-label={label}>
          <Icon className={iconStyles} />
        </SocialCard>
      ))}
    </div>
  );
}
