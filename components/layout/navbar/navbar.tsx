"use client";
import { ListNavItem } from "@/lib/constants";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [navActive, setNavActive] = useState(ListNavItem[0].href);

  return (
    <div className="overflow-hidden pt-8 pb-24 text-slate-400 lg:py-16">
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
      {/* <div className="pointer-events-none">
        <div className="absolute -right-14 top-16 h-px w-[400%] bg-gradient-to-l from-slate-400 opacity-20"></div>
        <div className="absolute left-full top-16 ml-14 h-px w-screen bg-slate-400 opacity-20"></div>
        <div className="absolute top-[-135%] bottom-[-65%] right-11 w-px opacity-20 background-image:linear-gradient(to bottom, rgba(148, 163, 184, 0) 30%, rgb(148, 163, 184), rgba(148, 163, 184, 0))"></div>
        <div className="absolute -right-24 -bottom-16 h-px w-[400%] opacity-30 background-image:linear-gradient(to right, rgba(119, 185, 250, 0) 60%, rgb(119, 185, 250) 77%, rgba(119, 185, 250, 0) 94%)"></div>
        <div className="absolute top-[-120%] bottom-[-80%] -left-12 w-px opacity-20 background-image:linear-gradient(to bottom, rgba(148, 163, 184, 0) 30%, rgb(148, 163, 184), rgba(148, 163, 184, 0))"></div>
        <div className="absolute top-16 -left-80 mt-[-0.5px] h-[2px] w-28 rounded-full bg-gradient-to-r from-blue-500"></div>
        <div className="absolute -left-12 bottom-8 ml-[-0.5px] h-28 w-[2px] rounded-full bg-gradient-to-t from-violet-400"></div>
      </div> */}
    </div>
  );
}
