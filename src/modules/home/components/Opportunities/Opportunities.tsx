import { Divider } from "@/shared/components/atoms"
import { Collapsible } from "@/shared/components/molecules"

interface OpportunitiesProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Opportunities: React.FC<OpportunitiesProps> = (
  props: OpportunitiesProps
) => {
  const data = [
    {
      title: "Professional Development Services",
      about: `Our team will work with you to understand your professional goals and improve your soft skills..`,
    },
    {
      title: "Search for opportunities",
      about: `Complete your profile to apply for your dream jobs.`,
    },
  ]

  return (
    <section className="max-w-7xl px-3 xl:px-0 w-full md:mx-auto">
      <div className="md:items-center flex flex-col-reverse md:grid md:gap-x-[100px] grid-cols-1 md:grid-cols-2">
        <div className="col-span-1">
          <video
            src="/assets/mp4/opportunities.mp4"
            autoPlay
            loop
            playsInline
            muted
            className="rounded-sm overflow-hidden"
          />
        </div>
        <div className="col-span-1 text-brand-light">
          <Collapsible data={data} />
        </div>
      </div>
      <Divider className="my-[50px] md:my-[132px] col-span-2" />
    </section>
  )
}
