import darkLogo from "@app/assets/logo-dark.png";
import lightLogo from "@app/assets/logo-light.png";

type Props = { color: string };

export default function Logo({ color }: Props) {
  const logo = color === "white" ? lightLogo : darkLogo;
  return (
    <button type="button" aria-label="Back to top" className="flex-center cursor-pointer transition-all duration-300 ease-in hover:scale-110" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
      <img src={logo} alt="Aditi Choudhary logo" className="h-12 w-12 object-contain md:h-14 md:w-14" />
    </button>
  );
}
