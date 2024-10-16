import { Divider } from "@/shared/components/atoms"
import { ArrowDown } from "@/shared/components/atoms/icons"

interface CoderBolsaProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CoderBolsa: React.FC<CoderBolsaProps> = (
  props: CoderBolsaProps
) => {
  return (
    <section className="max-w-7xl px-3 xl:px-0 w-full mx-auto">
      <div className="w-full rounded-sm px-3 md:px-6 lg:px-16 gap-y-[50px] gap-x-[100px] py-[56px] text-dark-main bg-gradient-to-br from-orange-200 to-orange-400 flex flex-col lg:grid grid-cols-2 items-center">
        <div className="col-span-1">
          <h3 className="text-5xl lg:text-7xl font-bold mb-5 tracking-[-1.8px]">
            What is Eduserve Mate?
          </h3>
          <p className="text-xl">
          Our mission is to train individuals in India. And as a way to make this a reality, we created Eduserve Mate, a ML bot where train in realtime.
          </p>
        </div>
        <div className="col-span-1">
          <div className="rounded-sm shadow-md shadow-black/50 py-[40px] px-4 lg:px-[50px] bg-dark-main text-brand-light">
            <h3 className="text-4xl font-bold mb-5">How do I access it?</h3>
            {/* <div className="text-dark-low font-medium">
              <p className="mb-11">
              Access to CoderBolsa is automatic and for everyone , you only need to meet 2 requirements when you are in the course:
              </p>
              <p className="mb-5">
              • Deliver practical challenges;
              </p>
              <p>• Have 85% attendance in live classes.</p>
              <span className="flex items-center gap-x-1 w-fit hover:underline text-orange-400 mt-5 cursor-pointer">
                Ver cursos e carreiras <ArrowDown color=" #fb923c" />
              </span>
            </div> */}

            <video src="/assets/mp4/323304683-d81789c6-18ee-4217-ba2d-c67130a08239.mp4" 
            autoPlay
        loop
        muted ></video>
          </div>
        </div>
      </div>
      <Divider className="my-[50px] md:my-[132px] col-span-2" />
    </section>
  )
}
