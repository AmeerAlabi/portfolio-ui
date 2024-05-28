import React from 'react';
import hero from '../assets/hero.png';

function Introduction() {
  return (
    <section className='flex justify-center gap-2 mt-8 md:flex-col-reverse py-10 px-3'>
      <div className='mr-20 md:m-auto md:flex flex-col'>
        <h1 className='text-[48px] font-bold leading-[50px] p-2 md:text-center text-dark'>
          Hi, I am John, <br />
          Creative Technologist
        </h1>
        <p className='text-[18px] mt-6 md:text-center text-dark'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Dolorem culpa voluptatum similique quisquam <br />
          nemo provident possimus fugit. Ipsa, soluta dolorum.
        </p>
        <div className='m-auto'>
          <button className='w-[220px] bg-peach text-white h-[45px] rounded-lg mt-7 md:flex md:justify-center md:items-center'>
            Download Resume
          </button>
        </div>
      </div>
      <img src={hero} alt="" className='ml-8 w-[250px] md:w-[250px] md:m-auto'/>
    </section>
  );
}

export default Introduction;
