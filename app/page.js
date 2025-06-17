'use client';
import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Navbar from './components/Navbar';
import { Poppins } from 'next/font/google';
import { Button } from '@/components/ui/button';
import {
  ArrowBigDownDashIcon,
  ArrowRight,
  Check,
  ChevronRight,
  MoveRight,
  Quote,
} from 'lucide-react';
import Footer from './components/Footer';
import Temp from '@/components/Temp';
import Link from 'next/link';

const poppins = Poppins({
  variable: '--font-geist-sans',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

const temp = `"[...SE] blends traditional PR tactics with a keen understanding of the digital landscape..."`;

const pubs = [
  {
    title: 'Rolling Stone',
    desc: `"[...SE] blends traditional PR tactics with a keen understanding of the digital landscape..."`,
    img: '/pubpngs/1.png',
  },
  {
    title: 'Entrepreneur Stone',
    desc: `"Social Edge ... carved out a significant niche for itself in Wikipedia creation services..."`,
    img: '/pubpngs/2.png',
  },
  {
    title: 'Digital Journal ',
    desc: `"[...SE's] solutions... enhance corporate brands in Google's Search Engine Results Pages."`,
    img: '/pubpngs/3.png',
  },
  {
    title: 'San Francisco Examiner',
    desc: `"...Social Edge are setting standards in safeguarding business integrity in the digital realm."`,
    img: '/pubpngs/4.png',
  },
  {
    title: `L'Officiel`,
    desc: `"...this ability to shape and project a strong brand identity is what sets Maximatic Media apart."`,
    img: '/pubpngs/5.png',
  },
  {
    title: 'Yahoo Finance',
    desc: `"...Social Edge aims at setting a new standard in the field of public relations."`,
    img: '/pubpngs/6.png',
  },
  {
    title: 'Grid Daily',
    desc: `"...[SE] has quickly made a name for itself as a leading hybrid PR and ORM agency."`,
    img: '/pubpngs/7.png',
  },
  {
    title: 'California Business Journal',
    desc: `"...Social Edge's ability... making it a standout performer this year in the PR landscape."`,
    img: '/pubpngs/8.png',
  },
];

const logos = [
  '/logopngs/1.png',
  '/logopngs/2.png',
  '/logopngs/3.png',
  '/logopngs/4.png',
  '/logopngs/5.png',
  '/logopngs/6.png',
  '/logopngs/7.png',
  '/logopngs/8.png',
  '/logopngs/9.png',
  '/logopngs/10.png',
  '/logopngs/11.png',
  '/logopngs/12.png',
];

const reviews = [
  {
    text: `We used Social edge to verify serveral  of our artist's Instagram pages. They are unmatched in this regard`,
    author: `Dennis K.`,
  },
  {
    text: `(Social Edge) are the real deal. Will certainly be working again with them in future`,
    author: `Angie S.`,
  },
  {
    text: `I've used (Social Edge's) PR seven times and counting. Huge vouch! They are very well connected.`,
    author: `Marco L.`,
  },
  {
    text: `Got both my FB and IG verified my Social Edge. After getting scammed once before i was very glad to have found them`,
    author: `Jared B.`,
  },
];

const results = [
  {
    title: 'Completely Risk-Free.',
    text: `Our services are 100% guaranteed. We even offer third-party escrow facilitation. Either we succeed or you won't pay a cent!`,
  },
  {
    title: 'Top-Notch Support.',
    text: `Our dedicated managers will be there every step of the way to help you achieve your media objectives.`,
  },
  {
    title: 'Customized for you.',
    text: `Whether you're an artist, a public figure, an entrepreneur, or a brand - we will ensure that you receive the highest level of branding.`,
  },
];

export default function Home() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className={`m-auto  w-full text-[#323232] ${poppins.className}`}>
        {/* Hero Content */}
        <div className='flex flex-col w-full px-8 md:px-32 py-10 md:pb-20 pt-[5rem] md:pt-[8rem] bg-[#fcf6f0]'>
          <div className='flex flex-col gap-5 items-start'>
            <h1 className='text-xl md:text-6xl font-semibold max-w-full md:max-w-[54rem]'>
              Enhance Your PR and Online Reputation Management the Maximatic
              Way!
            </h1>
            <p className='text-xl md:max-w-[60rem] text-zinc-600'>
              Claim unavailable usernames, delete negative reviews and content,
              get seen in international news outlets and maximize your overall
              media presence with the help of Maximatic Media!
            </p>
            <Button className='bg-gradient-to-b from-[#3e3d79] to-[#59f] md:px-5 md:py-6 rounded-4xl mt-4'>
              Explore Our Services{' '}
              <span>
                {' '}
                <ArrowRight className='bg-white text-black rounded-full' />
              </span>
            </Button>
          </div>

          {/* Collabs Logos */}
          <div className='grid  grid-cols-2 md:grid-cols-6 gap-14 my-10 items-center'>
            {logos.map((img, index) => {
              return (
                <Image
                  src={img}
                  width={200}
                  height={200}
                  alt='logos'
                  key={index}
                />
              );
            })}
          </div>
        </div>

        {/* Features */}
        <div className='w-full flex justify-center items-center py-8'>
          <div className='w-full md:max-w-5xl flex flex-col gap-10 px-4'>
            <div className='w-full flex flex-col justify-center items-center text-base md:text-3xl my-8 font-bold'>
              <h2 className='text-black tracking-wide'>
                We&apos;ve been featured in some of the
              </h2>
              <h2 className='text-blue-600 tracking-wider'>
                world&apos;s most renowed publications
              </h2>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
              {pubs.map((item, index) => (
                <div
                  key={index}
                  className='flex flex-col items-center justify-between h-full bg-[#fcf6f0] rounded-sm p-6 border border-transparent hover:border-black transition-all duration-300 transform ease-in-out'
                >
                  <div className='flex justify-center items-center h-[100px] w-full border-b-2 border-zinc-500 mb-4'>
                    <Image
                      src={item.img}
                      alt='publication logo'
                      width={80}
                      height={80}
                      className='object-contain'
                    />
                  </div>
                  <h4 className='text-lg font-semibold text-center text-black mb-2'>
                    {item.title}
                  </h4>
                  <p className='text-sm text-zinc-700 italic text-center'>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/*  */}
          </div>
        </div>

        {/* Section */}
        <div className='my-14 w-full flex flex-col md:flex-row items-center justify-center gap-6 px-4 md:px-14'>
          {/* Top Blue Line for mobile (hidden on md and above) */}
          <div className='block md:hidden w-full h-[2px] bg-blue-500 rounded-full mb-4' />

          {/* Left Blue Line for desktop */}
          <div className='hidden md:block h-[2px] bg-blue-500 flex-1 rounded-full' />

          {/* Achievements Images */}
          <div className='flex flex-col sm:flex-row items-center gap-6 overflow-x-auto'>
            <Image
              src='/ach/1.png'
              width={240}
              height={240}
              alt='achievements'
              className='w-[180px] sm:w-[240px] h-auto object-contain'
            />
            <Image
              src='/ach/2.png'
              width={240}
              height={240}
              alt='achievements'
              className='w-[180px] sm:w-[240px] h-auto object-contain'
            />
            <Image
              src='/ach/3.png'
              width={240}
              height={240}
              alt='achievements'
              className='w-[180px] sm:w-[240px] h-auto object-contain'
            />
          </div>

          {/* Right Blue Line for desktop */}
          <div className='hidden md:block h-[2px] bg-blue-500 flex-1 rounded-full' />

          {/* Bottom Blue Line for mobile (hidden on md and above) */}
          <div className='block md:hidden w-full h-[2px] bg-blue-500 rounded-full mt-4' />
        </div>

        {/* blue section with text and button */}
        <div className='flex flex-col md:flex-row space-y-2 justify-around items-center bg-blue-600 p-8'>
          <h4 className='text-white md:text-2xl md:max-w-lg leading-6'>
            Our networking expertise has opened these doors for us and
            we&apos;re ready to do the same for your brand
          </h4>
          <Button className='bg-white text-black px-4 py-6 font-semibold md:text-lg'>
            Check out our services
          </Button>
        </div>

        {/* section to be edited */}
        {/* Section Styled Like Image */}
        <Temp />

        {/* clients served */}
        <div className='w-full flex justify-center items-center flex-col py-20'>
          <div className='flex flex-col text-center'>
            <h4 className='md:text-[2.5rem] font-semibold'>
              Over 450 Clients Served
            </h4>
            <p className='text-zinc-700 '>
              Guaranteed results are why our clients love us. Check out what our
              clients have to say about Maximatic Media.
            </p>
          </div>

          <div className='max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-6 px-4  py-8'>
            {reviews.map((item, index) => (
              <div
                key={index}
                className='flex flex-col justify-between h-full p-3 rounded-lg bg-white'
              >
                <div className='flex mb-4'>
                  <Quote className='text-blue-700' size={40} />
                </div>

                <div className='flex flex-col space-y-2 flex-1'>
                  <p className='text-zinc-800 font-semibold text-sm'>
                    {item.text}
                  </p>
                  <p className='text-neutral-500 font-semibold'>
                    {item.author}
                  </p>
                </div>

                <div className='mt-4'>
                  <Image
                    src='/stars.png'
                    width={120}
                    height={24}
                    alt='stars'
                    className='object-contain'
                  />
                </div>
              </div>
            ))}
          </div>

          <div className='w-full bg-[#fcf6f0] py-8'>
            <div className='max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-6 px-4  py-8'>
              <div className='flex justify-center items-center'>
                <h4 className='text-center md:text-4xl font-semibold leading-8'>
                  Guarantee
                  <br />d Results
                </h4>
              </div>
              {results.map((item, index) => {
                return (
                  <div className='flex flex-col space-y-8' key={index}>
                    <Check
                      size={30}
                      className='bg-blue-600 text-white rounded-sm'
                    />
                    <p className=' leading-5 text-neutral-500'>
                      <span className=' font-bold'>{item.title}</span>
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className='grid md:grid-cols-2 py-20 px-4 md:px-28 gap-14'>
            <div className='flex flex-col space-y-8'>
              <h4 className='text-blue-800 md:text-[2.5rem] font-semibold tracking-wide'>
                Who We Are
              </h4>
              <p className='text-neutral-600'>
                We are a boutique PR and Online Reputation Management Agency
                that helps individuals and brands alike to be who they want to
                be in the digital landscape. We make our mark by assisting our
                clients and social media. Check out our {`"About Us`} page to
                learn more about our story
              </p>

              <Button className='bg-transparent text-black font-semibold hover:bg-neutral-100/50 px-6 py-5 transition-all duration-300 border-black hover:border-0 border-2 w-fit cursor-pointer rounded-3xl'>
                About Us
                {/* <span className=''>
                  <ChevronRight />
                </span> */}
              </Button>
            </div>
            <div className='flex flex-col space-y-8'>
              <h4 className='text-blue-800 md:text-[2.5rem] font-semibold tracking-wide'>
                What We Do
              </h4>
              <p className='text-neutral-600'>
                From helping up-and-coming companies claim their official
                usernames on social platforms to obtaining PR placements for an
                aspiring artist in time for their next EP – our services are
                designed to help our clients succeed and grow! We are devoted to
                our work and devoted to writing about it too, so make sure to
                check out our blog!
              </p>

              <Button className='bg-transparent text-black font-semibold hover:bg-neutral-100/50 px-6 py-5 transition-all duration-300 border-black hover:border-0 border-2 w-fit cursor-pointer rounded-3xl'>
                Blog
                {/* <span className=''>
                  <ChevronRight />
                </span> */}
              </Button>
            </div>
          </div>
        </div>

        {/* blue bg with white text */}
        <div className='flex flex-col p-4 md:p-14 bg-[#3966c9] text-white space-y-2.5 md:pl-32'>
          <h4 className='md:text-5xl font-semibold'>Get in touch with us!</h4>
          <p className='max-w-lg md:text-2xl leading-6'>
            Stop wasting your time on guesswork. Got a question? We are here to
            help!
          </p>
          <Button className='px-14 font-bold py-5 hover:bg-white/70 cursor-pointer bg-white rounded-4xl text-black w-fit mt-7'>
            Contact Us <ArrowRight />
          </Button>
        </div>

        {/* our work why us section */}
        <div className='w-full flex justify-center items-center bg-white'>
          <div className='grid md:grid-cols-2 py-20 px-4 sm:px-14 md:px-28 gap-14'>
            <div className='flex flex-col space-y-8'>
              <h4 className='text-blue-500/90 sm:text-3xl md:text-[2.5rem] font-semibold tracking-wide'>
                Our Work
              </h4>
              <p className='text-neutral-600'>
                As a boutique PR agency, our work revolves around helping a
                small numbers of clients each month materialize their branding
                goals. We are selective with who we work with and as a result of
                that, Social Edge has helped dozens of brands, start-ups and
                individuals to get the digital footprint they need to depict a
                truly authorative online image. From social media verifications
                to editorial placements on Entrepreneur and NY Post, we leverage
                our network and industry expertise to deliver a service that few
                other agencies can match
              </p>
            </div>
            <div className='flex flex-col space-y-8'>
              <h4 className='text-blue-500/90 sm:text-3xl md:text-[2.5rem] font-semibold tracking-wide'>
                Why Us
              </h4>
              <p className='text-neutral-600'>
                {`With the amount of PR and social media professionals out there, it can sometimes be difficult to choose which person or agency to take a risk on. Our unique selling point? 100% guaranteed rendering of services. Many companies may claim that they can successfully execute these services whem, more often than not, they are not always able to deliver. By putting our money where our mouth is, we offer our clients the option to opt for thrid-party escrow facilitation of our transactions. Either we succeed or we don't get paid!`}
              </p>
            </div>
          </div>
        </div>

        {/* explore section */}
        <div className='w-full flex flex-col justify-center items-center bg-[#fcf6f0] py-12 space-y-10'>
          <div className='w-full flex flex-col '>
            <h4 className='text-lg md:text-4xl font-semibold text-center'>
              Explore Our Case Studies, Social Media Guides, <br />
              Branding Tips and Tricks, and more!
            </h4>
          </div>

          <div className='grid md:grid-cols-4 max-w-6xl justify-items-center relative w-full gap-10'>
            <div className='relative col-span-2 w-full h-[300px] overflow-hidden rounded-xl'>
              {/* Background Image */}
              <div className='absolute inset-0 z-0 '>
                <img
                  src='/wiki.jpg'
                  alt='wiki image'
                  className='w-full h-full object-cover'
                />
              </div>

              {/* Black Overlay */}
              <div className='absolute inset-0 bg-black/60 z-10' />

              {/* Foreground content */}
              <div className='relative z-20 flex flex-col justify-end pb-10 pl-8 h-full text-white px-4 gap-2.5'>
                <Link
                  href='/'
                  className='underline text-sm font-semibold text-left   '
                >
                  Wikipedia
                </Link>
                <p className='text-lg md:text-2xl font-semibold '>
                  How to Create a Wikipedia Page
                </p>
              </div>
            </div>
            <div className='relative  w-full h-[300px] overflow-hidden rounded-xl'>
              {/* Background Image */}
              <div className='absolute inset-0 z-0 '>
                <img
                  src='/insta.jpg'
                  alt='insta image'
                  className='w-full h-full object-cover'
                />
              </div>

              {/* Black Overlay */}
              <div className='absolute inset-0 bg-black/60 z-10' />

              {/* Foreground content */}
              <div className='relative z-20 flex flex-col justify-end pb-10 pl-8 h-full text-white px-4 gap-2.5'>
                <Link
                  href='/'
                  className='underline text-sm font-semibold text-left   '
                >
                  Instagram
                </Link>
                <p className='text-lg md:text-2xl font-semibold '>
                  Purchasing Rare and Collectible Instagram Usernames
                </p>
              </div>
            </div>
            <div className='relative  w-full h-[300px] overflow-hidden rounded-xl'>
              {/* Background Image */}
              <div className='absolute inset-0 z-0 '>
                <img
                  src='/gkp.jpg'
                  alt='Google Knowledge Panel image'
                  className='w-full h-full object-cover'
                />
              </div>

              {/* Black Overlay */}
              <div className='absolute inset-0 bg-black/60 z-10' />

              {/* Foreground content */}
              <div className='relative z-20 flex flex-col justify-end pb-10 pl-8 h-full text-white px-4 gap-2.5'>
                <Link
                  href='/'
                  className='underline text-sm font-semibold text-left   '
                >
                  Google Knowledge Panel
                </Link>
                <p className='text-lg md:text-2xl font-semibold '>
                  How to Create a Google Knowledge Panel
                </p>
              </div>
            </div>
          </div>

          <div className='relative  w-full h-[270px] max-w-6xl overflow-hidden rounded-xl'>
            {/* Background Image */}
            <div className='absolute inset-0 z-0 '>
              <img
                src='/ppl.jpg'
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
      <Footer />
    </div>
  );
}
