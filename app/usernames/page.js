import React from 'react';
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import { ClipboardList, List, Star } from 'lucide-react';
import { FaStar } from 'react-icons/fa';
import { Check } from 'lucide-react';

const poppins = Poppins({
  variable: '--font-geist-sans',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

function page() {
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
        <div className='w-full bg-white max-w-[59rem] py-16 flex flex-col md:flex-row px-4 md:px-0 space-x-5 items-start'>
          <div className='flex flex-col'>
            <p className='text-zinc-500 mb-4'>Rated Excellent 93 Reviews</p>
            <img
              src='https://maximaticmedia.com/wp-content/uploads/2022/11/stars.png'
              alt=''
            />
          </div>
          <div className='flex flex-col max-w-2xl'>
            <h2 className='text-2xl font-semibold leading-7'>{`"Didn't know this service even existed until i was referred to Social Edge. Will certainly be working with them again on my next projects"`}</h2>
            <p className='text-zinc-600 leading-5'>Thomas P.</p>
          </div>
        </div>

        {/* third section */}
        <div className='w-full bg-[#f7f7f7] py-16 flex justify-center items-center px-4 md:px-0'>
          <div className='max-w-[59rem]'>
            <AnimatedSection
              img={'/username.png'}
              bg={'/prservices1.jpg'}
              title={`Claim Your Ideal Instagram Username!`}
              headline={`Instagram Usernames Claims`}
              description={`Got an Instagram username that perfectly fits your personal brand or business but it's been taken by some old, inactive account? Unable to find any usernames that match your domain and site identity? If so, we can help you become the new owner of said username! Claim inactive Instagram usernames with ease using our lightning-fast Instagram username claim service`}
            />
          </div>
        </div>

        {/* Fourth section */}
        <div className='w-full bg-[#fffffe] max-w-[59rem] py-16 flex flex-col space-y-5 justify-center items-center'>
          <div className='flex flex-col space-y-2 text-center'>
            <h3 className='text-blue-700/80 font-semibold text-lg md:text-[2.5rem]'>
              How it Works
            </h3>
            <p className='text-zinc-700 tracking-wide'>
              Our process behind claiming Instagram Usernames is simple and
              easy!
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
                <p className='text-zinc-600/80 font-semibold leading-6'>{`The username in question must be atleast six 6 characters long and not be a highly searched-for term. It must also not be generic i.e. "Money" or "Damiel"`}</p>
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
                <p className='text-zinc-600/80 font-semibold leading-6'>{`If we've agreed to take on your case, we will submit a request for the username claim directly to our Media Partner representative at Meta and await their approval`}</p>
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
                <p className='text-zinc-600/80 font-semibold leading-6'>{`Following our submission, our internal Instagram rep will swap your current username with the handle you're seeking to claim and voila - say hello to your new username!`}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Fifth section */}
        <div className='w-full flex justify-center items-center bg-[#f7f7f7] py-16'>
          <div className='max-w-[59rem]'>
            <div className='text-center space-y-2'>
              <h4
                className={`text-xl md:text-4xl  font-semibold  text-cyan-500`}
              >
                PRICING
              </h4>
              <p className='text-zinc-600/90 font-semibold tracking-wide'>
                Our Instagram username claim services are backed by a 100%
                refund gurantee in the event of failure.
              </p>
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
                      <span className=' font-bold'>{item.title}</span>

                      <span className='text-neutral-600'>{item.text}</span>
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default page;
