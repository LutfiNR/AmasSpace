"use client";
import { useState } from 'react';
import Image from "next/image";
import ReactCardFlip from 'react-card-flip';

const variants = {
  primary: {
    bg: 'secondary',
    bg2: 'slate-50',
    bg3: 'secondary',
    color2: 'text-primary',
    color3: 'text-slate',
    color: 'text-slate-50',
    border: 'border-none',
    border2: 'border border-slate-50'
  },
  secondary: {
    bg: 'slate-50',
    bg2: 'slate-50',
    bg3: 'primary',
    color: 'text-primary',
    color2: 'text-primary',
    color3: 'text-slate-50',
    border: 'border border-primary',
    border2: 'border-none'
  },
};

const Price = ({ variant, title, content, price, buttonText, srcImg, benefits }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      {/* Front Side */}
      <div className={`lg:w-96 flex flex-col rounded-lg p-6 gap-6 sm:gap-8 items-center bg-${variants[variant].bg} ${variants[variant].color} ${variants[variant].border}`}>
        <div className="pt-6">
          <Image
            src={srcImg}
            alt={title}
            width={100}
            height={100}
            className="h-24 w-auto sm:h-32"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-bold text-xl sm:text-2xl">{title}</h2>
          <p className="text-center text-sm sm:text-base">{content}</p>
        </div>
        <div>
          <h1 className="text-5xl sm:text-8xl font-black">{price}<span className="font-normal text-sm sm:text-base">/month</span></h1>
        </div>
        <div className="w-full">
          <button onClick={handleFlip} className={`bg-${variants[variant].bg3} ${variants[variant].color3} ${variants[variant].border2} py-2 w-full rounded-md`}>See Benefit</button>
          <button className={`bg-${variants[variant].bg2} ${variants[variant].color2} ${variants[variant].border} py-2 w-full rounded-md mt-4`}>{buttonText}</button>
        </div>
      </div>

      {/* Back Side */}
      <div className={`lg:w-96 flex flex-col rounded-lg p-6 gap-6 sm:gap-8 items-center bg-${variants[variant].bg} ${variants[variant].color} ${variants[variant].border}`}>
        <h2 className="font-bold text-xl sm:text-2xl mb-4">Benefits</h2>
        <ul className="text-center text-sm sm:text-base">
          {benefits.map((benefit, index) => (
            <li key={index} className='mt-4 font-semibold'>{benefit}</li>
          ))}
        </ul>
        <button onClick={handleFlip} className={`bg-${variants[variant].bg3} ${variants[variant].color3} ${variants[variant].border2} py-2 w-full rounded-md mt-8`}>Back</button>
      </div>
    </ReactCardFlip>
  );
}

export default Price;
