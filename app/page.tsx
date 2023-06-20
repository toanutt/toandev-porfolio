import Navbar from "@/components/layout/navbar/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex bg-slate-300 min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        Web Developer
        <Navbar />
        {/* <h3>
          <Link href="/about">About</Link>
        </h3>
        <h3>
          <Link href="/experience">Experience</Link>
        </h3>
        <h3>
          <Link href="/tech">Tech</Link>
        </h3> */}
      </div>
    </main>
  );
}
