import Link from "next/link";

import Socials from "@/components/Socials";

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 sm:px-8 xl:px-0">
      <div className="container mx-auto px-0">
        <div className="mt-3 flex flex-row items-center justify-between rounded-2xl border border-white/15 bg-primary/90 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl sm:mt-4 sm:px-5">
          <Link prefetch href="/" className="group flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-xs font-bold text-accent transition-colors group-hover:bg-accent group-hover:text-primary">
              MR
            </span>
            <span className="text-sm font-semibold tracking-tight sm:text-base">
              Muhammad <span className="text-accent">Rizki</span>
            </span>
          </Link>

          <div className="flex items-center gap-x-3 sm:gap-x-5">
            <span className="hidden items-center gap-2 text-[10px] font-medium uppercase tracking-[0.18em] text-white/50 sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-warm shadow-[0_0_10px_#FFD447]" />
              Available for work
            </span>
            <Link
              href="/export"
              className="inline-flex items-center gap-x-1.5 rounded-lg border border-accent/30 bg-accent/10 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-accent transition-all duration-300 hover:bg-accent hover:text-primary sm:px-4"
              title="Unduh CV ATS & Export Portofolio PDF"
            >
              <span className="hidden sm:inline">CV &amp; Portfolio</span>
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
