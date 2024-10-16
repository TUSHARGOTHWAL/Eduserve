import { Collapsible } from "@/shared/components/molecules"

interface CertificateProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Certificate: React.FC<CertificateProps> = (
  props: CertificateProps
) => {
  const data = [
    {
      title: "Content certified by top mentors",
      about: `The content of our courses is certified by the top experts in field and technology companies around.`,
    },
    {
      title: "Challenges",
      about: `During the course, you will face challenges so that you can practically apply what you learned in class.`,
    },
    {
      title: "Certificate",
      about: `At the end of each course or career, you will receive a certificate to share on your social networks.`,
    },
  ]

  return (
    <section className="max-w-7xl px-3 xl:px-0 py-[50px] md:py-[132px] w-full mx-auto items-center grid gap-x-[100px] grid-cols-1  md:grid-cols-2">
      <div className="col-span-1 text-brand-light">
        <Collapsible data={data} />
      </div>
      <div className="col-span-1">
        <video
          src="/assets/mp4/certificate.mp4"
          autoPlay
          loop
          playsInline
          muted
          className="rounded-sm w-full overflow-hidden"
        />
      </div>
    </section>
  )
}
