'use client';
import React from 'react';
import { useEffect, useRef } from 'react';
import { MoveRight } from 'lucide-react';
import Image from 'next/image';

function Temp() {
  const floatingRef = useRef(null);
  const floatingRef2 = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const floatOffset = Math.sin(scrollY * 0.01) * 6;

      if (floatingRef.current)
        floatingRef.current.style.transform = `translateY(${floatOffset}px)`;

      if (floatingRef2.current)
        floatingRef2.current.style.transform = `translateY(${floatOffset}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className='w-full py-20 bg-[#fcf6f0] flex flex-col space-y-8 px-6 md:px-20 justify-center items-center'>
      <div className=' w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20 max-w-5xl items-center'>
        {/* Floating Image on Left */}
        <div className='order-1 md:order-none flex justify-center'>
          <div className='relative w-[90%] md:w-[360px] aspect-[4/3]'>
            <Image
              src='/prservices1.jpg'
              alt='...'
              width={400}
              height={400}
              className='rounded-md object-cover'
            />
            <div
              ref={floatingRef}
              className='absolute top-5 left-5 w-full h-full transition-transform duration-300 ease-in-out'
            >
              <Image
                src='/prservices2.png'
                alt='...'
                width={400}
                height={400}
                className='rounded-md object-cover'
              />
            </div>
          </div>
        </div>

        {/* Text Content on Right (2 columns span) */}
        <div className='col-span-2 flex flex-col gap-4'>
          <h4 className='text-blue-600 text-lg font-medium'>PR Services</h4>
          <h2 className='text-4xl   font-bold text-zinc-800 leading-8'>
            Get seen on the most <br /> reputable and authoritative publications
            in the world!
          </h2>
          <p className='text-zinc-600 text-base md:text-lg'>
            Our guaranteed, editorial PR placements will get you or your brand
            featured on the most exclusive sites. At Maximatic Media, we
            guarantee that all of your PR pieces are published by editorial or
            contributing staff. No disclaimers, no sponsored tags and no generic
            newswire affiliations. Just top-notch articles on notable sites that
            actually bring results.
          </p>
          <p className='text-base text-zinc-700'>
            <span className='text-blue-700 font-medium'>
              Check out our PR services <MoveRight className='inline ml-1' />
            </span>{' '}
            <span className='text-blue-500'>
              Tech and Startups | Artists | PR for SEO | TV and Broadcast
              Placements
            </span>
          </p>
        </div>
      </div>
      <div className=' w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20 max-w-5xl items-center relative'>
        {/* Text Content on Right (2 columns span) */}
        <div className='col-span-2 flex flex-col gap-4'>
          <h4 className='text-blue-600 text-lg font-medium'>PR Services</h4>
          <h2 className='text-4xl   font-bold text-zinc-800 leading-8'>
            Get seen on the most <br /> reputable and authoritative publications
            in the world!
          </h2>
          <p className='text-zinc-600 text-base md:text-lg'>
            Our guaranteed, editorial PR placements will get you or your brand
            featured on the most exclusive sites. At Maximatic Media, we
            guarantee that all of your PR pieces are published by editorial or
            contributing staff. No disclaimers, no sponsored tags and no generic
            newswire affiliations. Just top-notch articles on notable sites that
            actually bring results.
          </p>
          <p className='text-base text-zinc-700'>
            <span className='text-blue-700 font-medium'>
              Check out our PR services <MoveRight className='inline ml-1' />
            </span>{' '}
            <span className='text-blue-500'>
              Tech and Startups | Artists | PR for SEO | TV and Broadcast
              Placements
            </span>
          </p>
        </div>

        {/* Floating Image on Left */}
        <div className='order-1 md:order-none flex justify-center'>
          <div className='relative w-[90%] md:w-[360px] aspect-[4/3]'>
            <Image
              src='/prservices1.jpg'
              alt='...'
              width={400}
              height={400}
              className='rounded-md object-cover'
            />
            <div
              ref={floatingRef2}
              className='absolute top-5 left-5 w-full h-full transition-transform duration-300 ease-in-out'
            >
              <Image
                src='/prservices2.png'
                alt='...'
                width={400}
                height={400}
                className='rounded-md object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Temp;
