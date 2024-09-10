'use client';
import { Accordion, AccordionItem } from '@nextui-org/react';

const AccordionComponent = ({ features }) => {
  return (
    <div className="p-4 md:p-6 lg:p-8">
      <Accordion defaultExpandedKeys={["0"]}>
        {features.map((item, index) => {
          return (
            <AccordionItem
              key={index}
              aria-label={item.feature}
              title={
                <span className="text-black-light text-lg sm:text-xl md:text-2xl font-bold">
                  {item.feature}
                </span>
              }
            >
              {item.subfeature.map((subitem, subindex) => {
                return (
                  <div key={`${index}-${subindex}`} className="mb-4">
                    <div className="flex gap-4 items-center">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-black-light font-bold text-sm sm:text-base md:text-lg">
                        {subitem.title}
                      </span>
                    </div>
                    <p className="text-black-light mt-1 ml-6 text-xs sm:text-sm md:text-base lg:text-lg">
                      {subitem.description}
                    </p>
                  </div>
                );
              })}
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default AccordionComponent;
