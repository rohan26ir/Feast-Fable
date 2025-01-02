import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div>
      
      <div className='flex flex-col md:flex-row text-gray-200'>
        <div className='flex-1 text-center bg-[#1F2937] py-10'>
          <h3 className='text-xl font-semibold'>CONTACT US</h3>
          <p className='py-2'>123 ABS Street, Uni 21, Bangladesh</p>
          <p>+88 123456789</p>
          <p>Mon - Fri: 08:00 - 22:00</p>
          <p>Sat - Sun: 10:00 - 23:00</p>
        </div>

        <div className='flex-1 text-center bg-[#111827] py-10'>
          <h3 className='text-xl font-semibold'>Follow US</h3>
          <p className='py-2'>Join us on social media</p>
          <div className='flex gap-3 text-3xl text-center justify-center'>
          <FaFacebookF />
          <FaXTwitter />
          <FaInstagram />
          </div>
        </div>
      </div>
      <div className='flex justify-center bg-black text-gray-300 py-3'>
        <h3>Copyright © CulinaryCloud. All rights reserved.</h3>
      </div>
    
    </div>
  );
};

export default Footer;