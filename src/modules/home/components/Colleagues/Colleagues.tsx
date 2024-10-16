interface ColleaguesProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Colleagues: React.FC<ColleaguesProps> = (
  props: ColleaguesProps
) => {
  return (
    <section className="bg-dark-tertiary/10 px-3 xl:px-0 py-[50px] md:py-[132px] text-brand-light w-screen mt-20 md:mt-[160px]">
      <div className="max-w-7xl w-full mx-auto items-center grid gap-[25px] lg:gap-x-[100px] grid-cols-1 md:grid-cols-2">
        <div className="col-span-1">
          <video
            src="/assets/mp4/colleagues.mp4"
            autoPlay
            loop
            playsInline
            muted
            className="rounded-sm overflow-hidden"
          />
        </div>
        <div className="col-span-1">
          <div className="flex flex-wrap items-center gap-2 lg:gap-x-4 mb-2">
            <span className="block whitespace-nowrap rounded-sm font-medium bg-gradient-to-br from-orange-200 to-orange-400 text-dark-main px-2 py-1">
            Group classes

            </span>
            <span className="block whitespace-nowrap rounded-sm font-medium bg-gradient-to-br from-orange-200 to-orange-400 text-dark-main px-2 py-1">
            Chat channels
            </span>
            <span className="block whitespace-nowrap rounded-sm font-medium bg-gradient-to-br from-orange-200 to-orange-400 text-dark-main px-2 py-1">
            Private forum
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl py-4 md:py-0 font-bold">
          Learn from your peers
          </h2>
          <p className="text-base md:text-2xl mt-2">
          Group learning has proven to be more efficient and motivating. Networking with colleagues helps you come up with new ideas and create better projects.
          </p>
        </div>
      </div>
    </section>
  )
}
