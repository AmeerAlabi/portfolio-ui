import React from 'react'
import dashboard from '../assets/Rectangle 30.png'
import hr from '../assets/Vector 13.png'
import vib from '../assets/Rectangle 32.png'
import days from '../assets/Rectangle 34.png'
function Works() {
  return (
<section>

  <h2 className=' text-gray-600 p-4'>Featured Works </h2>

  <div className='flex justify-center items-center md:flex-col'>
    <img src={dashboard} alt="" className=' w-[246px] h-[180px]  md:w-[320px] md:h-[220px] ' />
    <div className=' m-5'>
      <h2 className='text-3xl font-bold text-dark p-2 '>Designing Dashboard</h2>
      <p className=' text-gray-400 text-[13px] mt-5 p-2'><span className='bg-dark text-white px-2 rounded-xl '>2020</span> Dashboard</p>
      <p className=' p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo facilis <br /> mollitia aut neque consequuntur deleniti?Lorem ipsum dolor sit <br /> amet Lorem ipsum dolor sit amet. </p>
    </div>
  </div>
    <img src={hr} alt="" className=' m-auto' />


  <div className='flex justify-center items-center md:flex-col'>
    <img src={vib} alt="" className=' w-[246px] h-[180px]  md:w-[320px] md:h-[220px] ' />
    <div className=' m-5'>
      <h2 className='text-3xl font-bold text-dark p-2 '>Designing Dashboard</h2>
      <p className=' text-gray-400 text-[13px] mt-5 p-2'><span className='bg-dark text-white px-2 rounded-xl '>2020</span> Dashboard</p>
      <p className=' p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo facilis <br /> mollitia aut neque consequuntur deleniti?Lorem ipsum dolor sit <br /> amet Lorem ipsum dolor sit amet. </p>
    </div>
  </div>
  <img src={hr} alt="" className=' m-auto' />



  <div className='flex justify-center items-center md:flex-col'>
    <img src={days} alt="" className=' w-[246px] h-[180px]  md:w-[320px] md:h-[220px] ' />
    <div className=' m-5'>
      <h2 className='text-3xl font-bold text-dark p-2 '>Designing Dashboard</h2>
      <p className=' text-gray-400 text-[13px] mt-5 p-2'><span className='bg-dark text-white px-2 rounded-xl '>2020</span> Dashboard</p>
      <p className=' p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo facilis <br /> mollitia aut neque consequuntur deleniti?Lorem ipsum dolor sit <br /> amet Lorem ipsum dolor sit amet. </p>

    </div>
  </div>
  <img src={hr} alt="" className=' m-auto' />
</section>
  )
}

export default Works
