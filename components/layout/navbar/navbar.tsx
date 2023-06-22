"use client";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import Image from "next/image";
import {
  FileTextOutlined,
  FundProjectionScreenOutlined,
  HomeOutlined,
  ScheduleOutlined,
} from "@ant-design/icons";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a
            rel="noopener noreferrer"
            target="_blank"
            data-testid="navbar/vercel-logo"
            href="/"
            aria-label="Tới trang chủ Vercel"
            title="Tới trang chủ Vercel"
          >
            <svg
              aria-label="Logo của Vercel"
              height="22"
              role="img"
              //   style="width:auto;overflow:visible"
              viewBox="0 0 74 64"
            >
              <path
                d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"
                fill="var(--geist-foreground)"
              ></path>
            </svg>
          </a>
        </div>

        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          {/* <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Product
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover> */}
          <HomeOutlined />
          <a
            href="/home"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Home
          </a>
          <ScheduleOutlined />
          <a
            href="/experience"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Experience
          </a>

          <FundProjectionScreenOutlined />
          <a
            href="/project"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Project
          </a>

          <FileTextOutlined />
          <a
            href="/resume"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Resume
          </a>
        </Popover.Group>
      </nav>
    </header>
  );
}
