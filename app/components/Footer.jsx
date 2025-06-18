import { Linkedin, MoveRight } from 'lucide-react';
import React from 'react';
import { FaTelegram, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <footer className='bg-[#383735] text-white'>
      <div className='px-6 md:px-20 py-16 max-w-7xl mx-auto'>
        <div className='grid gap-10 md:gap-2 grid-cols-1 md:grid-cols-5'>
          {/* Column 1: About */}
          <div className='space-y-3.5 col-span-2 text-zinc-200 text-base'>
            <h4 className='text-white text-lg font-bold uppercase'>
              Social Edge
            </h4>
            <p>
              Social Edge is a boutique PR and Online Reputation Management
              agency specializing in reputation repair and publicity enhancement
              services.
            </p>
            <p>All prices listed on site are in USD</p>
            <p>We are based at 8 The Green, Dover, DE 19901</p>

            <div className='w-full flex justify-start '>
              <img
                src='https://maximaticmedia.com/wp-content/uploads/2022/12/maximaticmedia-Protected-Paym.png'
                alt=''
                className='scale-50 -ml-20'
              />
            </div>
            <div className='w-full flex justify-start max-w-[10rem] -mt-5 -ml-5'>
              <img
                src='https://maximaticmedia.com/wp-content/uploads/2022/12/1200px-Escrow_com_logo-1-980x311.png'
                alt=''
                className=''
              />
            </div>
          </div>

          {/* Column 2: Customer Service */}
          <div className='space-y-2 text-zinc-200 text-base'>
            <h5 className='uppercase font-bold tracking-tight text-white text-lg mb-2'>
              Customer Service
            </h5>
            <p>Email Support:</p>
            <a
              href='mailto:support@maximaticmedia.com'
              className='text-blue-300 underline'
            >
              support@maximaticmedia.com
            </a>
            <div className='space-y-1 mt-2'>
              <p className='text-white font-semibold'>Contact Number</p>
              <p className='underline'>(305)-615-5883</p>
            </div>
            <p className='mt-2'>Available 7 days a week.</p>
            <p className='font-semibold mt-2 text-white'>CHAT SUPPORT</p>
            <p>Available Monday to Friday</p>
            <p>9 AM to 5 PM IST</p>
          </div>

          {/* Column 3: Essential Links */}
          <div>
            <h5 className='uppercase font-bold tracking-tight text-white text-lg mb-2'>
              Essential Links
            </h5>
            <ul className='space-y-2 font-semibold text-base text-zinc-200'>
              <li>
                <a href='#'>About Us</a>
              </li>
              <li>
                <a href='#'>Blog</a>
              </li>
              <li>
                <a href='#'>Contact Us</a>
              </li>
              <li>
                <a href='#'>Partnerships</a>
              </li>
              <li>
                <a href='#'>Privacy Policy</a>
              </li>
              <li>
                <a href='#'>Terms and Conditions</a>
              </li>
              <li>
                <a href='#'>Sitemap</a>
              </li>
            </ul>
          </div>

          {/* Column 4: From the Blog */}
          <div>
            <h5 className='uppercase font-bold tracking-tight text-white text-lg mb-2'>
              From the Blog
            </h5>
            <ul className='space-y-4 text-base text-white font-semibold '>
              <li className=''>
                How to Use Trademark Infringement to Claim on Instagram Username
                <MoveRight size={18} />
              </li>
              <li className=''>
                Purchasing Rare and Collectible Instagram Usernames
                <MoveRight size={18} />
              </li>
              <li className=''>
                The Ins and Outs of Instagram Verification
                <MoveRight size={18} />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='w-full mx-0 p-4 md:p-10 border-t border-zinc-500 flex justify-center items-center'>
        <div className='w-full max-w-5xl flex justify-between items-center'>
          <p className='text-sm font-semibold text-zinc-300 tracking-wide'>
            &copy; 2025 Social Edge | All Rights Reserved
          </p>
          <div className='flex items-center justify-between text-2xl font-bold text-white space-x-4'>
            <a href='#'>
              <FaWhatsapp />
            </a>
            <a href='#' className='bg-transparent'>
              <FaTelegram />
            </a>
            <a href='#'>
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
