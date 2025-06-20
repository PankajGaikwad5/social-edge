'use client';

import * as React from 'react';
import Link from 'next/link';
import { MenuIcon, XIcon } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  variable: '--font-geist-sans',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

const menuData = [
  {
    title: 'Claim Taken Usernames',
    links: [
      { label: 'Instagram Username Claim', href: '/usernames/Instagram' },
      { label: 'Facebook Username Claim', href: '/usernames/Facebook' },
      { label: 'Twitter Username Claim', href: '/usernames/Twitter' },
      { label: 'TikTok Username Claim', href: '/usernames/TikTok' },
    ],
  },
  {
    title: 'Social Media Verification',
    links: [
      {
        label: 'Instagram Verification Service',
        href: '/verification/Instagram',
      },
      {
        label: 'Facebook Verification Service',
        href: '/verification/Facebook',
      },
      { label: 'Twitter Verification Service', href: '/verification/Twitter' },
      { label: 'TikTok Verification Service', href: '/verification/TikTok' },
      { label: 'YouTube Verification Service', href: '/verification/Youtube' },
    ],
  },
  {
    title: 'PR Services',
    links: [
      { label: 'PR for Books and Authors', href: '#' },
      { label: 'PR for Brands & Entrepreneurs', href: '#' },
      { label: 'PR for Crisis Management', href: '#' },
      { label: 'PR for Casinos and SportBooks', href: '#' },
      { label: 'PR for Cannabis and CBD', href: '#' },
      { label: 'PR for Celebrities', href: '#' },
      { label: 'PR for Crypto, Blockchain & DeFi', href: '#' },
      { label: 'PR for Events and Seminars', href: '#' },
      { label: 'PR for Fashion', href: '#' },
      { label: 'PR for Fintech', href: '#' },
      { label: 'PR for Small Businesses', href: '#' },
      { label: 'PR for Musicians & Artists', href: '#' },
      { label: 'PR for Real Estate and Realtors', href: '#' },
      { label: 'PR for Startups', href: '#' },
      { label: 'PR for SEO and Link Building', href: '#' },
      { label: 'TV & Broadcast PR Services', href: '#' },
    ],
  },
  {
    title: 'Negative Content Removal',
    links: [
      { label: 'Google Review Removal', href: '#' },
      { label: 'Negative Search Results Removal', href: '#' },
      { label: 'AVVO Review Removal', href: '#' },
      { label: 'Glassdoor Review Removal', href: '#' },
      { label: 'Instagram Content Removal', href: '#' },
      { label: 'Facebook Content Removal', href: '#' },
      { label: 'TikTok Content Removal', href: '#' },
      { label: 'X (formerly Twitter) Content Removal', href: '#' },
      { label: 'YouTube Video Removal', href: '#' },
    ],
  },
  {
    title: 'Reputation Enhancements',
    links: [
      { label: 'Bury Negative Search Results', href: '#' },
      { label: 'Google Knowledge Panel Creation', href: '#' },
      { label: 'Crisis Communications Services', href: '#' },
      { label: 'Individual Reputation Management', href: '#' },
      { label: 'Instagram Account Recovery', href: '#' },
      { label: 'Online Reputation Management', href: '#' },
      { label: 'Wikipedia Publishing Service', href: '#' },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-white shadow-md' : ''
      } ${poppins.className}`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 flex h-16 items-center justify-between'>
        <Link
          href='/'
          className='text-xl font-bold uppercase text-zinc-800 text-nowrap'
        >
          SoCiAl EdGe
        </Link>

        <div className='hidden md:flex items-center space-x-2'>
          <NavigationMenu viewport={false} className='flex'>
            <NavigationMenuList>
              {menuData.map((group) => (
                <NavigationMenuItem key={group.title}>
                  <NavigationMenuTrigger className='font-bold text-xs cursor-pointer text-zinc-800 hover:text-zinc-600'>
                    {group.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    {/* Apply max-height and scrolling for PR Services */}
                    <ul
                      className={`grid w-[260px]  py-4 border-t-4 border-blue-400 ${
                        group.title === 'PR Services'
                          ? 'max-h-96 overflow-y-auto'
                          : ''
                      }`}
                    >
                      {group.links.map((link) => (
                        <li
                          key={link.label}
                          className='text-xs capitalize font-medium'
                        >
                          <NavigationMenuLink asChild>
                            <Link
                              href={link.href}
                              className='block hover:bg-zinc-100 p-1'
                            >
                              {link.label}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href='/docs'
                    className={`${navigationMenuTriggerStyle()} text-xs font-bold text-zinc-800`}
                  >
                    Blogs
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Button className='bg-blue-700 hover:bg-blue-500 text-white text-xs'>
            Contact Us
          </Button>
        </div>

        <button
          className='md:hidden p-2 rounded-md text-zinc-800 focus:outline-none'
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <nav className='md:hidden bg-white shadow-inner'>
          <ul className='space-y-1 p-4'>
            {menuData.map((group) => (
              <li key={group.title}>
                <details>
                  <summary className='font-bold text-sm text-zinc-800 cursor-pointer'>
                    {group.title}
                  </summary>
                  <ul
                    className={`mt-1 ml-4 space-y-1 ${
                      group.title === 'PR Services'
                        ? 'max-h-48 overflow-y-auto'
                        : ''
                    }`}
                  >
                    {group.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className='block text-sm text-zinc-700 hover:underline'
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ))}
            <li>
              <Link
                href='/docs'
                className='block text-sm font-bold text-zinc-800'
              >
                Blogs
              </Link>
            </li>
            <li className='pt-2'>
              <Button className='w-full bg-blue-700 hover:bg-blue-500 text-white text-sm'>
                Contact Us
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
