import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-7xl lg:px-8 mx-auto mt-24 lg:mt-56">
      <article className="flex-auto lg:flex">
        <div id="introduce-text">
          <h1 class="bg-[radial-gradient(138.06%_1036.51%_at_95.25%_-2.54%,_#7ED4FD_14.06%,#709DF7_51.02%,#4D78EF_79.09%)] bg-clip-text text-5xl leading-[1.2] tracking-tighter text-transparent sm:text-center sm:text-[4rem] sm:leading-[4.75rem] lg:text-left">
            LET ME INTRODUCE MYSELF
          </h1>
          <p>
            I fell in love with programming and I have at least learnt
            something, I think…
          </p>
          <p>I am fluent in classics like C++, Javascript and Go.</p>
          <p>
            My field of Interest are building new Web Technologies and Products
            and also in areas related to Blockchain.
          </p>
          <p>
            Whenever possible, I also apply my passion for developing products
            with Node.js and Modern Javascript Library and Frameworks like
            React.js and Next.js
          </p>
        </div>

        <figure className="w-60 h-60 rounded-full overflow-hidden">
          <Image
            src="/avatar.jpg"
            alt="The Pulpit Rock"
            width="304"
            height="228"
          />
          {/* <figcaption>Fig1. - The Pulpit Rock, Norway.</figcaption> */}
        </figure>
      </article>
    </section>
  );
}
