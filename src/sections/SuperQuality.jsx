import { arrowRight } from "../assets/icons"
import Button from "../components/Button"
import {shoe8} from "../assets/images"
const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-3 w-full max-container">
      <div className="flex flex-1 flex-col">
      <h2 className='mt-2 font-palanquin text-4xl capitalize  font-bold lg:max-w-lg'>
        we provide you <span className='text-coral-red inline-block mt-3 '> Super </span>
        <br />
        <span className='text-coral-red inline-block mt-3 '>Quality</span> Shoes
      </h2>
      <p className='mt-4 lg:max-w-lg info-text'>Ensuring premuim quality and comfort, our crafted footwear is designed to elevate your experience, providing you unmatched quality, innovation, and a touch of elegance.</p>
      <p className="mt-6 lg:max-w-lg info-text">Our dedication to detail and excellence ensures your satisfaction</p>
      <div className="mt-11">
      <Button label="View Details" iconURL={arrowRight} />
      </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain"/>
      </div>
    </section>
  )
}

export default SuperQuality