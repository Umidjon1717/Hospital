import React from 'react'
import element from '../assets/element.png'
import hero from '../assets/hero.png'
const Hero = () => {
  return (
    <main>
        <section >
            <img className=' mt-[30px]' src={element} alt="element" />
            <div className="max-w-[1360px] my-0 mx-auto px-[16px] py-10">
                <div className='flex justify-between'>
                <div>
                <h1 className='text-[#3C567B] text-[48px] font-bold mb-14'>Virtual healthcare Saviour 
                for you</h1>
                <p className='text-[#93C1F9] text-[19px] font-normal mb-32'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br /> Aenean commodo ligula eget dolor. Aenean massa. </p>
                <button className='bg-[#458FF6] py-4 px-8 rounded-[50px] text-white ml-8'>Consult today</button>
                </div>
                <div>
                    <img  src={hero} alt="hero" />
                </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Hero