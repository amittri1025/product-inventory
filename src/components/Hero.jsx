import React from 'react'
import { Link } from 'react-router-dom'


const Hero = () => {
  return (
    <section className=" h-[300px] bg-no-repeat bg-red-300 bg-center py-24">
    <div className="container mx-auto flex justify-around h-full">
      {/* text */}
      <div className="flex justify-start">
       <h2 className='text-3xl'>The Best Beers you have ever Tasted !</h2>
      </div>
    </div>
  </section>
  )
}

export default Hero