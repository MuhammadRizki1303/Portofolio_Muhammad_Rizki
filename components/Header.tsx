import Link from "next/link";

import Socials from "@/components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center px-4 sm:px-8 xl:px-0 xl:h-22.5">
      <div className="container mx-auto px-0">
        <div className="flex flex-row justify-between items-center py-4 sm:py-6 xl:py-8">
          <Link prefetch href="/">
            <h1 className="text-lg sm:text-2xl xl:text-3xl font-bold">
              muhammad<span className="text-accent font-light">rizki.</span>
            </h1>
          </Link>

          <div className="flex items-center gap-x-1 sm:gap-x-4">
            <Link
              href="/export"
              className="inline-flex items-center gap-x-1.5 px-2.5 sm:px-3 py-1.5 rounded-full border border-accent/40 bg-accent/10 hover:bg-accent text-accent hover:text-white text-xs font-semibold tracking-wide transition-all duration-300 shadow-sm whitespace-nowrap"
              title="Unduh CV ATS & Export Portofolio PDF"
            >
              <span className="hidden sm:inline">Unduh CV &amp; PDF</span>
              <span className="sm:hidden">CV</span>
            </Link>
            <Socials />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
