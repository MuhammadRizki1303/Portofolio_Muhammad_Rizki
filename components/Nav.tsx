"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { IconType } from "react-icons";
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiDocumentCheck,
  HiEnvelope,
  HiArrowDownTray,
} from "react-icons/hi2";

export const navData: { name: string; path: string; Icon: IconType }[] = [
  { name: "home", path: "/", Icon: HiHome },
  { name: "about", path: "/about", Icon: HiUser },
  { name: "services", path: "/services", Icon: HiRectangleGroup },
  { name: "work", path: "/work", Icon: HiViewColumns },
  { name: "sertifikat", path: "/sertifikat", Icon: HiDocumentCheck },
  {
    name: "export & cv",
    path: "/export",
    Icon: HiArrowDownTray,
  },
  {
    name: "contact",
    path: "/contact",
    Icon: HiEnvelope,
  },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navigasi utama"
      className="fixed inset-x-0 bottom-0 z-50 xl:inset-y-0 xl:left-auto xl:right-[2%] xl:flex xl:h-screen xl:w-20 xl:flex-col xl:items-center xl:justify-center"
    >
      <div className="flex min-h-16 w-full items-center justify-between gap-0 border-t border-white/10 bg-primary/95 px-1.5 pt-1.5 pb-[env(safe-area-inset-bottom)] text-xl backdrop-blur-lg sm:px-3 xl:h-max xl:w-16 xl:flex-col xl:justify-center xl:gap-y-10 xl:overflow-visible xl:rounded-full xl:border-0 xl:bg-white/10 xl:px-0 xl:py-8 xl:text-2xl">
        {navData.map((link) => (
          <Link
            prefetch
            className={`${
              link.path === pathname && "text-accent"
            } group relative flex min-h-11 min-w-0 flex-1 flex-col items-center justify-center gap-y-0.5 px-0.5 transition-all duration-300 hover:text-accent xl:min-h-0 xl:flex-none xl:px-0`}
            href={link.path}
            key={link.path}
            aria-current={link.path === pathname ? "page" : undefined}
          >
            <div
              role="tooltip"
              className="absolute pr-14 right-0 hidden xl:group-hover:flex"
            >
              <div className="bg-white relative flex text-primary items-center p-1.5 rounded-[3px]">
                <div className="text-[12px] leading-none font-semibold capitalize">
                  {link.name}
                </div>

                <div
                  className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"
                  aria-hidden
                />
              </div>
            </div>

            <div className="text-xl">
              <link.Icon aria-hidden />
            </div>
            <span className="max-w-full truncate text-[8px] capitalize leading-none opacity-70 sm:text-[9px] xl:hidden">
              {link.name.split(" ")[0]}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
