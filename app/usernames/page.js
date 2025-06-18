import React from 'react';
import { Poppins } from 'next/font/google';
import Image from 'next/image';

const poppins = Poppins({
  variable: '--font-geist-sans',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

function page() {
  return (
    <main className={`w-full ${poppins.className}`}>
      <div className='w-full flex flex-col justify-center items-center'>
        {/* first section */}
        <div className='w-full flex justify-center items-center bg-[#fdf6f0] pt-20 p-10 '>
          <div className='w-full flex max-w-[59rem] items-center'>
            <div className='flex flex-col space-y-3 text-black/80'>
              <h1 className='text-lg font-semibold md:text-5xl'>
                Instagram Username Claim Service
              </h1>
              <p className='md:text-xl leading-6 text-black'>
                Is someone squatting on your perfect username?
                <br />
                We Can Help!
              </p>
            </div>
            <div className='max-w-md'>
              <img
                src='https://maximaticmedia.com/wp-content/uploads/2022/11/username-claim-insta.png'
                alt=''
              />
            </div>
          </div>
        </div>

        {/* second section */}
        <div className='w-full bg-white max-w-[59rem] py-10 flex'>
          <div className='flex flex-col'>
            <p className='text-zinc-500'>Rated Excellent 93 Reviews</p>
            <img
              src='https://maximaticmedia.com/wp-content/uploads/2022/11/stars.png'
              alt=''
            />
          </div>
          <div className='flex flex-col'>
            <h2 className='text-2xl'>{`"Didn't know this service even existed until i was referred to Social Edge. Will certainly be working with them again on my next projects"`}</h2>
          </div>
        </div>
      </div>
    </main>
  );
}

export default page;
