'use client';
import React, { useEffect, useRef, useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function AccordionSection() {
  const [maxWidth, setMaxWidth] = useState(0);
  const accordionRef = useRef(null);

  const faq = [
    {
      id: 1,
      ques: `How can I know if your username claim services are truly risk-free?`,
      ans: `We pride ourselves on being one of the only service providers in the industry that allows their customers to opt out for escrow. We are a results-oriented bsuiness and thus, only work on guarantees. In the event we fail to claim your desired username successfully, we will either issue a full refund via your desired payment method or the funds submitted into escrow will be remitted back to you in-full.`,
    },
    {
      id: 2,
      ques: `Will you be needing access to my account?`,
      ans: `We will never ask you for your login and password, Ever. All of our claims are processed internally via the Media Partnership program and we do not require access to your accounts.`,
    },
    {
      id: 3,
      ques: `What payment methods do you accept?`,
      ans: `We accept Wise, Zelle, Cashapp, Wire transfer and various crypto currencies. We also accept payments through Escrow.com under the condition that you cover all of the associated fees.`,
    },
    {
      id: 4,
      ques: `Can you gurantee the username will be claimed?`,
      ans: `Given the nature of the service, the only thing we can truly guarantee is a full refund in the event of failure. The final decision is entirely within the control of Instagram's internal staff. With that said, we boast a 90% success rate across all of our username claim cases and will thoroughly vet your case before accepting any sort of payment.`,
    },
    {
      id: 5,
      ques: `Are there any additional requirements for my current username?`,
      ans: `Your existing account that we'll be swapping the username to should be representative of the name/entity we are claiming the username for. It should have atleast 20 posts, been active within the last 60 days and have atleast a thousand or so followers. These are not absolute necessities but will drastically improve our ability to argue for the claim. If you are a corporate entity claiming your business username, documents of a trademark agreement woule be of immense help.`,
    },
    {
      id: 6,
      ques: `How will i get the new username?`,
      ans: `Once we are successful in claiming your desired username, then swap will happen automatically on our own accord. No input from you will be necessary, the staff over at the Instagram will switch your existing username to the new username on the back-end.`,
    },
    {
      id: 7,
      ques: `Can you change the username of verfied profiles?`,
      ans: `Yes, this is a service we provide. Please submit the eligibility form and provide all the necessary details as we may not be able to process every verified username change due to logistical concerns.`,
    },
  ];

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
