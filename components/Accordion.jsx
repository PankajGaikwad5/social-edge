'use client';
import React, { useEffect, useRef, useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function AccordionSection({ faq }) {
  const [maxWidth, setMaxWidth] = useState(0);
  const accordionRef = useRef(null);

  useEffect(() => {
    if (accordionRef.current) {
      // Temporarily expand all items to measure max width
      const items = accordionRef.current.querySelectorAll('[data-state]');
      const originalStates = Array.from(items).map((item) =>
        item.getAttribute('data-state')
      );

      // Force all items open
      items.forEach((item) => item.setAttribute('data-state', 'open'));

      // Measure width
      const width = accordionRef.current.offsetWidth;
      setMaxWidth(width);

      // Restore original states
      items.forEach((item, index) => {
        item.setAttribute('data-state', originalStates[index] || 'closed');
      });
    }
  }, []);

  return (
    <Accordion
      ref={accordionRef}
      type='single'
      collapsible
      className='w-full px-2'
      defaultValue='item-1'
      style={maxWidth ? { width: `${maxWidth}px` } : {}}
    >
      {faq.map((item, index) => {
        return (
          <AccordionItem value={item.id} key={index}>
            <AccordionTrigger>{item.ques}</AccordionTrigger>
            <AccordionContent className='flex flex-col gap-4 text-balance'>
              <p>{item.ans}</p>
            </AccordionContent>
          </AccordionItem>
        );
      })}
      {/* <AccordionItem value='item-2'>
        <AccordionTrigger>Shipping Details</AccordionTrigger>
        <AccordionContent className='flex flex-col gap-4 text-balance'>
          <p>
            We offer worldwide shipping through trusted courier partners.
            Standard delivery takes 3-5 business days, while express shipping
            ensures delivery within 1-2 business days.
          </p>
          <p>
            All orders are carefully packaged and fully insured. Track your
            shipment in real-time through our dedicated tracking portal.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-3'>
        <AccordionTrigger>Return Policy</AccordionTrigger>
        <AccordionContent className='flex flex-col gap-4 text-balance'>
          <p>
            We stand behind our products with a comprehensive 30-day return
            policy. If you&apos;re not completely satisfied, simply return the
            item in its original condition.
          </p>
          <p>
            Our hassle-free return process includes free return shipping and
            full refunds processed within 48 hours of receiving the returned
            item.
          </p>
        </AccordionContent>
      </AccordionItem> */}
    </Accordion>
  );
}
