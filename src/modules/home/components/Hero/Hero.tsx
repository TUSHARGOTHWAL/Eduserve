"use client";

import { Slide } from "react-awesome-reveal";

interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Hero: React.FC<HeroProps> = (props: HeroProps) => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        src="/assets/mp4/31251-385265625.mp4"
        className="absolute top-0 left-0 w-full h-full object-cover py-2"
        autoPlay
        loop
        muted
        playsInline
        style={{ filter: "brightness(0.1)" }} // Darken the video for readability
      ></video>

      {/* Content Overlay */}
      <div className="relative z-10 w-full max-w-[992px] text-white px-3 xl:px-0 text-center">
        <h1 className="font-bold lg:leading-[70px] tracking-[-1.8px] text-4xl md:text-6xl">
          Online and live courses for{" "}
          <Slide direction="left" className="inline-block">
            <span className="bg-orange-400 font-bold text-dark-main rounded-xl">
              transform your reality
            </span>
          </Slide>{" "}
          in record <br />time
        </h1>
        <span className="mt-6 mb-9 md:mb-16 block w-full max-w-[776px] mx-auto">
          Live online trading taught by digital market experts, with a 100% practical focus, personalized mentoring, and access to a community of +2800 students.
        </span>
        <button className="px-4 block w-full md:w-fit font-medium md:mx-auto py-5 bg-orange-400 rounded-xl text-dark-main hover:bg-orange-600 transition-all ease-in-out">
          See all courses
        </button>
      </div>
    </section>
  );
};
