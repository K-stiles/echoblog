import Link from "next/link";
import { FC } from "react";
import ThemeSwitcher from "./theme_button";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className="h-[80px] bg-slate-100 dark:bg-slate-900 flex  items-center">
      <div className="w-3/4 mx-auto flex items-center justify-between px-10 py-2">
        <Link href={"/"} className="font-bold text-4xl">
          Echo<span className="text-emerald-700">Journal</span>
        </Link>

        <div className="flex items-center gap-3">
          <p>Home</p>
          <p>About</p>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
