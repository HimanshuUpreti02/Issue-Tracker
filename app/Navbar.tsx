"use client";

import Link from "next/link";
import React from "react";
import classnames from "classnames";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  const currentPath = usePathname();
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href={"/"}>Logo</Link>
      <ul className="flex space-x-6">
        {links.map((link) => {
          const isActive = link.href === currentPath;
          return (
            <li key={link.href}>
              <Link
                className={classnames({
                  "text-zinc-900": isActive,
                  "text-zinc-500": !isActive,
                  "hover:text-zinc-800 transition-colors": true,
                })}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
