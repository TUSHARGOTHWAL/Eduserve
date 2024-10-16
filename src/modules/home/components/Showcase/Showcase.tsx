"use client"

import { Zoom } from "react-awesome-reveal"

interface ShowcaseProps extends React.HTMLAttributes<HTMLVideoElement> {}

export const Showcase: React.FC<ShowcaseProps> = (props: ShowcaseProps) => {
  return (
    <section className="max-w-7xl px-3 xl:px-0 mx-auto text-dark-main w-full">
      <Zoom>
        <video
          src="/assets/mp4/showcase.mp4"
          autoPlay
          loop
          playsInline
          muted
          className="max-w-[992px] rounded-xl overflow-hidden max-h-[640px] mb-16 md:mb-[124px] mx-auto w-full h-full"
        />
      </Zoom>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
        <div className="col-span-1 md:row-span-1 md:col-start-1 w-full rounded-sm py-9 px-4 lg:px-8 bg-gradient-to-br from-orange-200 to-orange-400">
          <h3 className="text-4xl lg:text-5xl tracking-[-1.8px] font-bold">
          High-quality online education at your fingertips
          </h3>
          <span className="block mt-4">
          Sign up for practical classes with personalized mentoring from leading market experts, and prepare to take the next step in your professional career.
          </span>
          <img
            src="/assets/chat-br.webp"
            alt="chat-br/webp"
            className="h-[200px] rounded-sm mt-7 mx-auto"
          />
        </div>
        <div className="col-span-1 md:row-span-1 relative md:col-start-1 w-full rounded-sm text-brand-light py-9 px-4 lg:px-8 bg-dark-tertiary/10">
          <img
            src="/assets/user-green.png"
            alt="user-green/png"
            className="absolute w-[84px] h-[84px] lg:-left-14 -left-2 -top-9 lg:-top-4"
          />
          <img
            src="/assets/user-violet.png"
            alt="user-violet/png"
            className="absolute w-[84px] h-[84px] lf:-right-14 right-2 -bottom-12 lg:-bottom-4"
          />
          <h3 className="text-4xl lg:text-5xl tracking-[-1.8px] font-bold">
            Tutors
          </h3>
          <span className="block mt-4">
          In each course you will have a mentor to answer questions and receive feedback on your projects whenever you need it.
          </span>
        </div>
        <div className="col-span-1 md:row-span-2 md:col-start-2 md:row-start-1 w-full rounded-sm text-brand-light py-9 px-4 lg:px-8 bg-dark-tertiary/10">
          <div className="w-fit mx-auto">
            <video
              src="/assets/mp4/professors.mp4"
              autoPlay
              loop
              playsInline
              muted
              className="rounded-sm overflow-hidden max-h-[512px] mb-4 w-fit h-full"
            />
          </div>
          <h3 className="text-4xl lg:text-5xl tracking-[-1.8px] font-bold">
          Specialist teachers
          </h3>
          <span className="block mt-4">
          Learn by interacting with leaders from the world's most innovative technology companies.
          </span>
        </div>
      </div>
    </section>
  )
}
