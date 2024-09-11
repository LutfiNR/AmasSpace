'use client';
import { Accordion, AccordionItem } from '@nextui-org/react';

const AccordionNew = ({ items }) => {
  return (
    <div className='p-4 md:p-6 lg:p-8'>
      <Accordion>
        {items.map((item, index) => {
          return (
            <AccordionItem
              key={index}
              aria-label={item.question}
              title={
                <span className='text-black-light text-lg sm:text-xl md:text-2xl font-bold'>
                  {item.question}
                </span>
              }>
              <p className='text-black-light mb-2 text-xs sm:text-sm md:text-base lg:text-lg'>
                {item.answer}
              </p>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default AccordionNew;
