"use client";

import Link from "next/link";
import React from "react";
import classnames from "classnames";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { Avatar, Box, DropdownMenu, Flex, Text } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";

const Navbar = () => {
  return (
    <nav className="border-b mb-5 px-5 py-5 ">
      <Flex justify={"between"}>
        <Flex align={"center"} gap={"3"}>
          <Link href={"/"}>Logo</Link>
          <NavLinks />
        </Flex>
        <AuthStatus />
      </Flex>
    </nav>
  );
};

const AuthStatus = () => {
  const { status, data: Session } = useSession();
  console.log(status);
  if (status === "loading") return <Skeleton width={"3rem"} />;
  if (status === "unauthenticated") {
    return (
      <Link className="nav-link" href={"/api/auth/signin"}>
        Log In
      </Link>
    );
  }

  return (
    <Box>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Avatar
            src={Session!.user!.image!}
            fallback="?"
            size={"2"}
            radius="full"
            className="cursor-pointer"
          />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Label>
            <Text size={"2"}>{Session!.user?.email}</Text>
          </DropdownMenu.Label>
          <DropdownMenu.Item>
            <Link href={"/api/auth/signout"}>Log Out</Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Box>
  );
};

const NavLinks = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  const currentPath = usePathname();
  return (
    <ul className="flex space-x-6">
      {links.map((link) => {
        const isActive = link.href === currentPath;
        return (
          <li key={link.href}>
            <Link
              className={classnames({
                "nav-link": true,
                "!text-zinc-900": isActive,
              })}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Navbar;
