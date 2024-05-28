import React from 'react'

function Posts() {
  return (
<section className=' bg-sky  p-5'>
  <div className='flex justify-around '>
    <p className=' text-gray-600 p-2'>Recent</p>
    <a href="" className=' text-blue-700 p-2'>View all</a>
  </div>
  <div className=' flex justify-center gap-4  md:flex-col
   '>
    <div className='bg-white w-[418px] h-[295px] md:h-[318px] rounded-md shadow-md p-5 md:w-[300px] m-auto '>
    <h2 className=' text-[26px] font-bold  text-dark'>Making a design system from scratch </h2>
    <p className='underline'>12 Feb 2020   <span className=' border-r-[1px]'>Design , pattern</span></p>
    <p className='  mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe omnis sint hic facilis voluptatum voluptatibus doloremque accusantium nostrum mollitia quisquam.</p>
    </div>
{/* card 2 */}
<div className='bg-white w-[418px] h-[295px] md:h-[318px] rounded-md shadow-md p-5 md:w-[300px] m-auto '>
    <h2 className='text-dark text-[26px] font-bold '>Making a design system from scratch </h2>
    <p className='text-dark underline'>12 Feb 2020   <span className=' border-r-[1px]'>Design , pattern</span></p>
    <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe omnis sint hic facilis voluptatum voluptatibus doloremque accusantium nostrum mollitia quisquam.</p>
    </div>
  </div>
</section>
  )
}

export default Posts
