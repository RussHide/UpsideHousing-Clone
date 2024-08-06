import { Gallery, Hero, WhoWeAre, Contact, OurValues, CreditCalculator, Pricing, Footer, Amenities } from './Components'


const App = () => {
  return (
    <div className='space-y-24 overflow-hidden'>
      <Hero />
      <div className='container mx-auto'>
        <WhoWeAre />
        <OurValues />
      </div>
      <Gallery />
      <Pricing />
      <Amenities />

      {/* <div className='flex justify-center items-center rounded-2xl overflow-hidden'>
        <iframe width="1000" height="600" className='rounded-2xl' src="https://www.youtube.com/embed/_UvtNbOp2Zs?si=XjHgqWS0rPznuZ6B" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div> */}
      <Contact />
      <Footer />
      {/*    <CreditCalculator /> */}
    </div>
  )
}

export default App