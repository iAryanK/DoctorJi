import React from "react";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full border-b py-2 flex items-center justify-between">
      <Link href="/">
        <h1 className="text-xl font-bold pl-2 flex items-center">
          Doctor{" "}
          <div className="rotate-6 text-amber-500 dark:text-amber-200">Ji</div>
        </h1>
      </Link>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
