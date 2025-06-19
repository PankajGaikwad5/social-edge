'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { MoveRight } from 'lucide-react';

export default function AnimatedSection({
  imageOnLeft = true,
  img,
  bg,
  title,
  headline,
  description,
  highlights,
}) {
  const floatingRef = useRef(null);
  const currentY = useRef(0);

  useEffect(() => {
    let requestId;

    const animate = () => {
      const scrollY = window.scrollY;
      const targetY = Math.sin(scrollY * 0.01) * -60;
      currentY.current += (targetY - currentY.current) * 0.1;

      if (floatingRef.current) {
        floatingRef.current.style.transform = `translateY(${currentY.current}px)`;
      }

      requestId = requestAnimationFrame(animate);
    };

    requestId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(requestId);
  }, []);

  const image = (
    <div className='flex justify-center'>
      <div className='relative w-[90%] md:w-[360px] aspect-[4/3]'>
        <Image
          src={bg}
          alt='Background'
          width={400}
          height={400}
          className='rounded-md object-cover'
        />
        <div
          ref={floatingRef}
          className='absolute top-6 left-9 w-full h-full pointer-events-none will-change-transform'
        >
          <Image
            src={img}
            alt='Floating'
            width={400}
            height={400}
            className='rounded-md object-cover shadow-2xl scale-[1.02]'
          />
        </div>
      </div>
    </div>
  );

  const text = (
    <div className='col-span-2 flex flex-col gap-4'>
      <h4 className='text-blue-600 text-lg font-medium'>{title}</h4>
      <h2 className='text-4xl font-bold text-zinc-800 leading-8'>{headline}</h2>
      <p className='text-zinc-600 text-base md:text-lg'>{description}</p>
      {/* <p className='text-base text-zinc-700'>
        <span className='text-blue-700 font-medium'>
          Check out our PR services <MoveRight className='inline ml-1' />
        </span>{' '}
        {highlights && <span className='text-blue-500'>{highlights}</span>}
      </p> */}
    </div>
  );

  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20 max-w-5xl items-center'>
      {imageOnLeft ? (
        <>
          <div className='order-1 md:order-none'>{image}</div>
          {text}
        </>
      ) : (
        <>
          {text}
          <div className='order-1 md:order-none'>{image}</div>
        </>
      )}
    </div>
  );
}
