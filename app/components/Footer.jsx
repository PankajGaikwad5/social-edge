import React from 'react';

function Footer() {
  return (
    <footer className='bg-[#383735] text-white '>
      <div className='px-16 py-16 flex'>
        {/*  */}
        <div className='flex-col space-y-4 text-lg'>
          <div className='flex flex-col gap-2'>
            <h4 className='text-lg font-bold uppercase'>Social Edge</h4>
            <p className='text-zinc-200'>
              Social Edge is a boutique PR and Online Reputation Management
              agency specializing in reputation repair and publicity enhancement
              services
            </p>
          </div>
          <p className='text-zinc-200'>All prices listed on site are in USD</p>
          <p className='text-zinc-200'>
            We are based at 8 The Green, Dover, DE 19901
          </p>
        </div>
        {/*  */}
        <div className='flex gap'>
          <div className='flex flex-col space-y-0.5'>
            <h5 className='uppercase font-bold tracking-tight text-lg'>
              customer service
            </h5>
            <p>Email Support</p>
            <a href='#' className='text-zinc-200'>
              support@maximaticmedia.com
            </a>
            <a href='#' className='flex flex-col space-y-1'>
              <span className='text-lg text-white'>Contact Number</span>
              <span className='text-zinc-200 underline'>{`(305)-615-5883`}</span>
            </a>
            <p className='text-zinc-200'>Availble 7 days a week.</p>
            <p className='text-zinc-200'>CHAT SUPPORT</p>
            <p className='text-zinc-200'>Available Monday to Friday</p>
            <p className='text-zinc-200'>9 am to 5pm IST</p>
          </div>
          <div className='flex flex-col'></div>
          <div className='flex flex-col'></div>
        </div>
        {/*  */}
      </div>
    </footer>
  );
}

export default Footer;
