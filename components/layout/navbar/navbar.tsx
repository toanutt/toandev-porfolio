"use client";
import { ListNavItem } from "@/lib/constants";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [navActive, setNavActive] = useState(ListNavItem[0].href);

  return (
    <>
      This is Navbar
      {ListNavItem.map((item) => {
        return (
          <li
            className={`${
              navActive === item.href ? "text-rose-700" : "text-white"
            }`}
            key={item.href}
            onClick={() => setNavActive(item.href)}
          >
            <Link href={item.href}>{item.title}</Link>
          </li>
        );
      })}
    </>
  );
}
