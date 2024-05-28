import React from 'react'
import twitter from '../assets/Group.png'
import insta from '../assets/insta.png'
import link from '../assets/Linkedin.png'
import fb from '../assets/fb.png'

function Footer() {
  return (
<footer className=' p-12'>
  <div className='flex justify-center items-center gap-2'>
    <img src={twitter} alt=""/>
    <img src={insta} alt="" />
    <img src={fb} alt="" />
    <img src={link} alt="" />
  </div>
   <p className='text-center p-2 mt-3'>Copyright ©2020 All rights reserved </p>
</footer>
  )
}

export default Footer
