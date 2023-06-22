import ComputersCanvas from "@/components/canvas/computer";

export default function Introduce() {
  return (
    <section className=" relative w-full h-screen px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-7xl lg:px-8 mx-auto mt-24 lg:mt-56">
      <div className="lg:flex">
        <div className="flex-auto">
          <h1 class="bg-[radial-gradient(138.06%_1036.51%_at_95.25%_-2.54%,_#7ED4FD_14.06%,#709DF7_51.02%,#4D78EF_79.09%)] bg-clip-text text-5xl leading-[1.2] tracking-tighter text-transparent sm:text-center sm:text-[4rem] sm:leading-[4.75rem] lg:text-left">
            Hi There! I AM TOAN
          </h1>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  );
}
