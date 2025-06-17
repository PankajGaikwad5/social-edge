import React from 'react';

function Footer() {
  return (
    <footer className='bg-[#383735] text-white px-16 py-16 grid grid-cols-4'>
      <div className='flex-col space-y-4 text-lg'>
        <div className='flex flex-col gap-2'>
          <h4 className='text-lg font-bold uppercase'>Social Edge</h4>
          <p className='text-zinc-200'>
            Social Edge is a boutique PR and Online Reputation Management agency
            specializing in reputation repair and publicity enhancement services
          </p>
        </div>
        <p className='text-zinc-200'>All prices listed on site are in USD</p>
        <p className='text-zinc-200'>
          We are based at 8 The Green, Dover, DE 19901
        </p>
      </div>
    </footer>
  );
}

export default Footer;
