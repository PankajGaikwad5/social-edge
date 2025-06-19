'use client';

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

function Accordion({ ...props }) {
  return <AccordionPrimitive.Root data-slot='accordion' {...props} />;
}

function AccordionItem({ className, ...props }) {
  return (
    <AccordionPrimitive.Item
      data-slot='accordion-item'
      className={cn('border-b last:border-b-0', className)}
      {...props}
    />
  );
}

function AccordionTrigger({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Header className='flex'>
      <AccordionPrimitive.Trigger
        data-slot='accordion-trigger'
        className={cn(
          'focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 rounded-md py-4 text-left text-xl font-semibold transition-all outline-none  focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 text-blue-600 cursor-pointer',
          className
        )}
        {...props}
      >
        {children}

        {/* + icon in a circle that morphs into − */}
        <span
          aria-hidden
          className='relative flex h-7 w-7 items-center justify-center rounded-full border-2 border-blue-700 text-blue-700'
        >
          {/* Horizontal bar (always visible) */}
          <span className='absolute h-[1px] w-3 bg-current' />

          {/* Vertical bar (scales out when open) */}
          <span className='vertical-line absolute h-3 w-[1px] bg-current transition-transform duration-300 origin-center' />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Content
      data-slot='accordion-content'
      className='data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden font-medium text-zinc-700/90'
      {...props}
    >
      <div className={cn('pt-0 pb-4', className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
