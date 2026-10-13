import Link from "next/link";
import type { IconType } from "react-icons";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiGithubLine,
  RiPinterestLine,
  RiLinkedinLine,
  RiMailLine
} from "react-icons/ri";

export const socialData: { name: string; link: string; Icon: IconType }[] = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/muhammadrizki130304",
    Icon: RiLinkedinLine,
  },
  {
    name: "Email",
    link: "mailto:muhammad.rizki1303@gmail.com",
    Icon: RiMailLine,
  },
  {
    name: "Github",
    link: "https://github.com/MuhammadRizki1303",
    Icon: RiGithubLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-2 text-base sm:gap-x-5 sm:text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-1.25 hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
