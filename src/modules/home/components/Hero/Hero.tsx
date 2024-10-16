"use client"

import { Slide } from "react-awesome-reveal"

interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Hero: React.FC<HeroProps> = (props: HeroProps) => {
  return (
    <section className="max-w-7xl px-3 xl:px-0 mx-auto pb-14 md:pb-24 pt-40 text-brand-light flex items-center justify-center flex-col">
      <div className="w-full max-w-[992px]">
        <h1 className="text-start md:text-center font-bold lg:leading-[70px] -tracking-[-1.8px] text-4xl md:text-6xl">
        Online and live courses for{" "}
          <Slide direction="left" className="inline-block">
            <span className="bg-orange-400 font-bold text-dark-main rounded-xl">
            transform your reality
            </span>
          </Slide>{" "}
          in record time
        </h1>
        <span className="mt-6 mb-9 md:mb-16 block w-full max-w-[776px] text-start md:mx-auto md:text-center">
        Live online trading taught by digital market experts, with a 100% practical focus, personalized mentoring and access to a community of +2800 students.
        </span>
        <button className="px-4 block w-full md:w-fit font-medium md:mx-auto py-5 bg-orange-400 rounded-xl text-dark-main hover:bg-orange-600 transition-all ease-in-out">
          See all courses
        </button>
      </div>
    </section>
  )
}
