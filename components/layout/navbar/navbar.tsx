"use client";
import { ListNavItem } from "@/lib/constants";
import Link from "next/link";
import { useState } from "react";
import OverView from "../introduce/introduce";
import {
  FileTextOutlined,
  FundProjectionScreenOutlined,
  HomeOutlined,
  ScheduleOutlined,
} from "@ant-design/icons";

export default function Navbar() {
  const [navActive, setNavActive] = useState(ListNavItem[0].href);

  return (
    <header className="flex justify-between overflow-hidden bg-[radial-gradient(145.05%_100%_at_50%_0%,#1D2B41_0%,#020509_57.38%,#0F1A29_88.16%)] pt-8 pb-24 text-slate-400 lg:py-16">
      <h3>LOGO</h3>
      <ul className="flex flex-row justify-between">
        {/* {ListNavItem.map((item) => {
          return (
            <>
              <li
                // className={`${
                //   navActive === item.href ? "text-rose-700" : "text-white"
                // }`}
                className="mr-4"
                key={item.href}
                onClick={() => setNavActive(item.href)}
              >
                <HomeOutlined />
                <Link href={item.href}>{item.title}</Link>
              </li>
            </>
          );
        })} */}

        <li
          // className={`${
          //   navActive === item.href ? "text-rose-700" : "text-white"
          // }`}
          className="mr-4"

          // onClick={() => setNavActive(item.href)}
        >
          <HomeOutlined />
          <Link href="/home">Home</Link>
        </li>

        <li
          // className={`${
          //   navActive === item.href ? "text-rose-700" : "text-white"
          // }`}
          className="mr-4"

          // onClick={() => setNavActive(item.href)}
        >
          <ScheduleOutlined />
          <Link href="/experience">Experience</Link>
        </li>

        <li
          // className={`${
          //   navActive === item.href ? "text-rose-700" : "text-white"
          // }`}
          className="flex mr-4"

          // onClick={() => setNavActive(item.href)}
        >
          <FundProjectionScreenOutlined />
          <Link href="/project">Project</Link>
        </li>

        <li
          // className={`${
          //   navActive === item.href ? "text-rose-700" : "text-white"
          // }`}
          className="mr-4"

          // onClick={() => setNavActive(item.href)}
        >
          <FileTextOutlined />
          <Link href="/resume">Resume</Link>
        </li>
      </ul>
      {/* <OverView /> */}
    </header>
  );
}
