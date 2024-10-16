import { Home } from "./components"

export const HomeModule = () => {
  return (
    <main className="min-h-screen relative bg-black overflow-x-hidden w-full max-w-screen">
      <div className="fixed z-[800] top-0">
        <Home.MegaSaleAds />
        <Home.Navbar />
      </div>
      <Home.Hero />
      <Home.CertifyingCompanies />
      <Home.Showcase />
      <Home.Colleagues />
      <Home.Certificate />
      <Home.Opportunities />
      <Home.CoderBolsa />
      <Home.Plans />
      <Home.Feedbacks />
      <Home.WorldGlobe />
      <Home.Media />
      <Home.MobileApp />
      <Home.Faq />
      <Home.Footer />
    </main>
  )
}
