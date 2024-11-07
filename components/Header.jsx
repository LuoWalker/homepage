"use client";

import { usePathname } from "next/navigation";
import Avatar from "./Avatar";
import Navbar from "./Navbar";
import SignIn from "./SignIn";

export default function Header() {
  const pathname = usePathname();
  const page = pathname.split("/").slice(0, 2).join("/");

  return (
    <header className="grid w-full grid-flow-col grid-cols-4">
      <Avatar page={page} />

      <Navbar page={page} />

      <SignIn pathname={pathname} />
    </header>
  );
}
