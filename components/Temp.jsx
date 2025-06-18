'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { MoveRight } from 'lucide-react';

export default function Temp() {
  const floatingRefs = [useRef(null), useRef(null)];
  const currentYs = [useRef(0), useRef(0)];

  useEffect(() => {
    let requestId;

    const animate = () => {
      const scrollY = window.scrollY;

      floatingRefs.forEach((ref, i) => {
        const targetY = Math.sin(scrollY * 0.01) * -60;
        currentYs[i].current += (targetY - currentYs[i].current) * 0.1;
        const transform = `translateY(${currentYs[i].current}px)`;

        if (ref.current) {
          ref.current.style.transform = transform;
        }
      });

      requestId = requestAnimationFrame(animate);
    };

    requestId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(requestId);
  }, []);

  const sections = [
    {
      imageOnLeft: true,
      title: 'PR Services',
      img: '/prservices2.png',
      headline:
        'Get seen on the most reputable and authoritative publications in the world!',
      description:
        'Our guaranteed, editorial PR placements will get you or your brand featured on the most exclusive sites. At Maximatic Media, we guarantee that all of your PR pieces are published by editorial or contributing staff. No disclaimers, no sponsored tags and no generic newswire affiliations.',
      highlights:
        'Tech and Startups | Artists | PR for SEO | TV and Broadcast Placements',
    },
    {
      imageOnLeft: false, // Reversed layout
      title: 'Social Media Growth',
      img: '/orm.png',
      headline:
        'Boost your online presence across all major platforms with authentic audience growth.',
      description:
        'From Instagram to LinkedIn, we create growth campaigns that engage real users, expand your influence, and enhance your credibility with measurable results and transparency.',
      highlights: 'Instagram | YouTube | LinkedIn | Twitter | Facebook',
    },
  ];

  return (
    <div className='w-full py-20 bg-[#fcf6f0] flex flex-col space-y-24 px-6 md:px-20 justify-center items-center'>
      {sections.map((section, i) => {
        const image = (
          <div className='flex justify-center'>
            <div className='relative w-[90%] md:w-[360px] aspect-[4/3]'>
              <Image
                src='/prservices1.jpg'
                alt='Background'
                width={400}
                height={400}
                className='rounded-md object-cover'
              />
              <div
                ref={floatingRefs[i]}
                className='absolute top-6 left-9 w-full h-full pointer-events-none will-change-transform'
              >
                <Image
                  src={section.img}
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
            <h4 className='text-blue-600 text-lg font-medium'>
              {section.title}
            </h4>
            <h2 className='text-4xl font-bold text-zinc-800 leading-8'>
              {section.headline}
            </h2>
            <p className='text-zinc-600 text-base md:text-lg'>
              {section.description}
            </p>
            <p className='text-base text-zinc-700'>
              <span className='text-blue-700 font-medium'>
                Check out our PR services <MoveRight className='inline ml-1' />
              </span>{' '}
              <span className='text-blue-500'>{section.highlights}</span>
            </p>
          </div>
        );

        return (
          <div
            key={i}
            className='w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20 max-w-5xl items-center'
          >
            {section.imageOnLeft ? (
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
      })}
    </div>
  );
}
