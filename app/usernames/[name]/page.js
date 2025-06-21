'use client';
import React, { useEffect, useState } from 'react';
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import { ClipboardList, List, Star, ArrowRight } from 'lucide-react';
import { FaStar } from 'react-icons/fa';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import AccordionSection from '@/components/Accordion';
import {
  fbData,
  InstaData,
  tiktokData,
  twitterData,
} from '@/components/cardData';
import { faq } from '@/components/faq';

const poppins = Poppins({
  variable: '--font-geist-sans',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

function Page({ params }) {
  const { name } = React.use(params);

  const [hoverImg, setHoverImg] = useState('/username.png');
  const [heroImage, setHeroImage] = useState('/username/insta.png');
  const [cardData, setCardData] = useState(InstaData);

  useEffect(() => {
    if (name === 'Instagram') {
      setHeroImage('/usernames/insta.png');
      setHoverImg('/username.png');
      setCardData(InstaData);
    }
    if (name === 'Facebook') {
      setHeroImage('/usernames/fb.png');
      setHoverImg('/fb.png');
      setCardData(fbData);
    }
    if (name === 'Twitter') {
      setHeroImage('/usernames/tw.png');
      setHoverImg('/tw.png');
      setCardData(twitterData);
    }
    if (name === 'TikTok') {
      setHeroImage('/usernames/tt.png');
      setHoverImg('/tt.png');
      setCardData(tiktokData);
    }
  }, []);

  console.log(name);
  const results = [
    {
      title: 'Entirely Risk-Free.',
      text: `You are welcome to pay us through a third-party escrow service.`,
    },
    {
      title: 'Fast Delivery.',
      text: `75% of all our cases are processed well in advance of the deadline date.`,
    },
    {
      title: 'World-Class Support.',
      text: `Our dedicated case managers will answer any queries within 24H!`,
    },
  ];

  return (
    <main className={`w-full ${poppins.className}`}>
      <div className='w-full flex flex-col justify-center items-center'>
        {/* first section */}
        <div className='w-full flex justify-center items-center bg-[#fdf6f0] pt-20 p-10 '>
          <div className='w-full flex flex-col md:flex-row max-w-[59rem] items-center'>
            <div className='flex flex-col space-y-3 text-black/80'>
              <h1 className='text-lg font-semibold md:text-5xl'>
                {name} Username Claim Service
              </h1>
              <p className='md:text-xl leading-6 text-black'>
                Is someone squatting on your perfect username?
                <br />
                We Can Help!
              </p>
            </div>
            <div className='max-w-md'>
              <img src={heroImage} alt='' />
            </div>
          </div>
        </div>

        {/* second section */}
        <div className='w-full bg-white max-w-[59rem] py-16 flex flex-col md:flex-row px-4 md:px-0 space-x-5 items-start'>
          <div className='flex flex-col'>
            <p className='text-zinc-500 mb-4 font-medium'>
              Rated Excellent 93 Reviews
            </p>
            <img
              src='https://maximaticmedia.com/wp-content/uploads/2022/11/stars.png'
              alt=''
            />
          </div>
          <div className='flex flex-col max-w-2xl'>
            <h2 className='text-2xl font-semibold leading-7'>{`"Didn't know this service even existed until i was referred to Social Edge. Will certainly be working with them again on my next projects"`}</h2>
            <p className='text-zinc-600 leading-5 font-medium'>Thomas P.</p>
          </div>
        </div>

        {/* third section */}
        <div className='w-full bg-[#f7f7f7] py-16 flex justify-center items-center px-4 md:px-0'>
          <div className='max-w-[59rem]'>
            <AnimatedSection
              img={hoverImg}
              title={`Claim Your Ideal ${name} Username!`}
              headline={`${name} Usernames Claims`}
              description={`Got an ${name} username that perfectly fits your personal brand or business but it's been taken by some old, inactive account? Unable to find any usernames that match your domain and site identity? If so, we can help you become the new owner of said username! Claim inactive ${name} usernames with ease using our lightning-fast ${name} username claim service`}
            />
          </div>
        </div>

        {/* Fourth section */}
        <div className='w-full bg-[#fffffe] max-w-[59rem] py-16 flex flex-col space-y-5 justify-center items-center'>
          <div className='flex flex-col space-y-2 text-center'>
            <h3 className='text-blue-700/80 font-semibold text-lg md:text-[2.5rem]'>
              How it Works
            </h3>
            <p className='text-zinc-700 font-medium tracking-wide'>
              Our process behind claiming {name} Usernames is simple and easy!
            </p>
          </div>

          <div className='grid md:grid-cols-3 space-x-7'>
            <div className='flex flex-col space-y-5'>
              <div className='flex space-x-4 items-center'>
                <List className='text-zinc-400/70' size={70} />
                <h3 className='text-5xl md:text-6xl text-cyan-500 font-bold'>
                  1
                </h3>
              </div>

              <div className='flex flex-col space-y-2'>
                <h4 className='text-lg md:text-[1.5rem] font-semibold text-black/80'>
                  Pre Qualification
                </h4>
                <p className='text-zinc-600 font-medium leading-6'>{`The username in question must be atleast six 6 characters long and not be a highly searched-for term. It must also not be generic i.e. "Money" or "Damiel"`}</p>
              </div>
            </div>
            <div className='flex flex-col space-y-5'>
              <div className='flex space-x-4 items-center'>
                <ClipboardList className='text-zinc-400/70' size={70} />
                <h3 className='text-5xl md:text-6xl text-cyan-500 font-bold'>
                  2
                </h3>
              </div>

              <div className='flex flex-col space-y-2'>
                <h4 className='text-lg md:text-[1.5rem] font-semibold text-black/80'>
                  Submission
                </h4>
                <p className='text-zinc-600 font-medium leading-6'>{`If we've agreed to take on your case, we will submit a request for the username claim directly to our Media Partner representative at Meta and await their approval`}</p>
              </div>
            </div>
            <div className='flex flex-col space-y-5'>
              <div className='flex space-x-4 items-center'>
                <FaStar className='text-zinc-400/70' size={70} />
                <h3 className='text-5xl md:text-6xl text-cyan-500 font-bold'>
                  3
                </h3>
              </div>

              <div className='flex flex-col space-y-2'>
                <h4 className='text-lg md:text-[1.5rem] font-semibold text-black/80'>
                  Result
                </h4>
                <p className='text-zinc-600 font-medium leading-6'>{`Following our submission, our internal ${name} rep will swap your current username with the handle you're seeking to claim and voila - say hello to your new username!`}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Fifth Pricing section */}
        <div className='w-full flex justify-center items-center bg-[#f7f7f7] py-20'>
          <div className='max-w-7xl flex flex-col justify-center items-center '>
            <div className='text-center space-y-2'>
              <h4
                className={`text-xl md:text-4xl  font-semibold  text-cyan-500`}
              >
                PRICING
              </h4>
              <p className='text-zinc-600/90 font-semibold tracking-wide'>
                Our {name} username claim services are backed by a 100% refund
                gurantee in the event of failure.
              </p>
            </div>
            {/* cards */}
            <div
              className={`mt-8 gap-10 px-4 ${
                cardData.length < 3
                  ? 'flex justify-center flex-wrap'
                  : 'grid md:grid-cols-3'
              }`}
            >
              {cardData.map((data, index) => (
                <div
                  className='bg-white shadow-2xl flex flex-col justify-center items-center space-y-2.5 p-8 rounded-3xl w-[340px] border border-gray-200 drop-shadow-xl'
                  key={index}
                >
                  <h4 className='text-lg md:text-2xl font-semibold text-center'>
                    {data.title}
                  </h4>
                  <ul className='flex-col'>
                    {data.features.map((item, i) => (
                      <li className='flex gap-2 items-start' key={i}>
                        <Check
                          className='text-blue-700/80'
                          strokeWidth={4}
                          size={50}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <h4 className='text-lg md:text-2xl font-semibold'>
                    {data.price}
                  </h4>
                  <Button className='bg-gradient-to-b from-[#583f80] to-[#59f] md:px-5 md:py-6 rounded-4xl mt-4'>
                    Check Eligibility for Free{' '}
                    <span>
                      <ArrowRight className='bg-white text-blue-700 rounded-full' />
                    </span>
                  </Button>
                  <p className='text-sm font-semibold text-neutral-500'>
                    No payment required
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sixth section */}
        <div className='w-full flex justify-center items-center py-16 bg-white'>
          <div className='mx-4'>
            <div className='mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-20 py-8'>
              <div className='flex justify-center items-center'>
                <h4 className='text-center md:text-4xl font-semibold leading-8'>
                  Why US?
                </h4>
              </div>
              {results.map((item, index) => {
                return (
                  <div className='flex flex-col space-y-8' key={index}>
                    <Check
                      size={30}
                      className='bg-blue-600 text-white rounded-full p-1'
                    />
                    <p className=' leading-5 text-neutral-500'>
                      <span className=' font-bold '>{item.title}</span>

                      <span className='text-neutral-600/90 font-medium'>
                        {item.text}
                      </span>
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Accordion section */}
        <div className='w-full bg-[#f7f7f7] py-20 flex justify-center items-center'>
          <div className='max-w-7xl flex flex-col md:flex-row gap-4 md:space-x-14'>
            <div className='flex flex-col space-y-4 font-medium md:max-w-[11rem]'>
              <h4 className=' md:text-[2.5rem] font-semibold leading-10'>
                Frequently Asked Questions
              </h4>
              <p className=' text-sm font-medium text-neutral-500'>
                {`Didn't find your question?`}
              </p>
              <Link href='/' className=' text-sm font-semibold text-blue-500'>
                Contact Us
              </Link>
            </div>
            <div className=''>
              <AccordionSection faq={faq} />
            </div>
          </div>
        </div>

        <div className='relative  w-full h-[270px] max-w-5xl overflow-hidden rounded-xl my-20 bg-[#f7f7f7]'>
          {/* Background Image */}
          <div className='absolute inset-0 z-0 '>
            <img
              src='/usernamelast.png'
              alt='Google Knowledge Panel image'
              className='w-full h-full object-cover'
            />
          </div>

          {/* Black Overlay */}
          <div className='absolute inset-0 bg-blue-700/80 z-10' />

          {/* Foreground content */}
          <div className='relative z-20 flex flex-col justify-center items-center  h-full text-white px-4 gap-5 text-center'>
            <h5 className='text-xl md:text-4xl tracking-wide font-bold'>
              Got a question? Give us a shout!
            </h5>
            <button className='text-black bg-white hover:bg-white/70 rounded-full px-5 py-3 font-semibold flex justify-center items-center gap-2 transition-all duration-300 cursor-pointer'>
              Contact Us{' '}
              <ArrowRight className='bg-black rounded-full text-white' />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Page;
