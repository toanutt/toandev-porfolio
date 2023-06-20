"use client";
import { ListNavItem } from "@/lib/constants";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [navActive, setNavActive] = useState(ListNavItem[0].href);

  return (
    <div className="flex flex-row justify-between">
      <h5>This is Navbar</h5>
      <ul className="flex flex-row justify-between">
        {ListNavItem.map((item) => {
          return (
            <li
              // className={`${
              //   navActive === item.href ? "text-rose-700" : "text-white"
              // }`}
              className="mr-4"
              key={item.href}
              onClick={() => setNavActive(item.href)}
            >
              <Link href={item.href}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
