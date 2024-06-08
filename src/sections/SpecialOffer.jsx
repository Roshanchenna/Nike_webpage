import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='felx-1'>
        <img src={offer} alt="offer" width={773}  height={687} className='objext-contain w-full'/>
      </div>
      <div className="flex flex-1 flex-col">
      <h2 className='mt-2 font-palanquin text-4xl capitalize  font-bold lg:max-w-lg'>
        <span className='text-coral-red inline-block mt-3 '> Special </span> Offer
      </h2>
      <p className='mt-4 lg:max-w-lg info-text'>Ensuring premuim quality and comfort, our crafted footwear is designed to elevate your experience, providing you unmatched quality, innovation, and a touch of elegance.</p>
      <p className="mt-6 lg:max-w-lg info-text">Our dedication to detail and excellence ensures your satisfaction</p>
      <div className="mt-11 flex felx-1 flex-wrap gap-4">
      <Button label="View Details" iconURL={arrowRight} />
      </div>
      </div>
    </section>
  )
}

export default SpecialOffer