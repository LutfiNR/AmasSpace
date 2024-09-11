"use client"
import {Chip} from "@nextui-org/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const variants = {
  potrait:'grid-rows-2',
  landscape:'grid-cols-2',
}

const Card = ({ chip, srcImg, title, content, variant }) => {
  const [widthDevice, setWidthDevice] = useState(0);

  useEffect(() => {
    // Function to update width
    const updateWidth = () => {
      setWidthDevice(window.innerWidth);
    };

    // Initial width on mount
    updateWidth();

    // Add event listener to update width on resize
    window.addEventListener('resize', updateWidth);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  return (
    <div className="pb-4">
      <div className='overflow-hidden rounded-xl border shadow-md'>
      <div className={`grid ${variant === 'landscape' && widthDevice >= 1024 ? variants['landscape']: variants['potrait']} shadow-md`}>
        <Image
          src={srcImg}
          alt={title}
          width={400}
          height={400}
          className="w-full h-full object-cover"
        />
        <div className='flex flex-col justify-between p-6'>
        <div>
        {chip}
          <h2 className='text-black-dark text-2xl font-semibold line-clamp-2 mt-4'>{title}</h2>
          <p className='text-black-light text-sm line-clamp-1 mt-2'>{content}</p>
        </div>
          <a href="/blog.html" className="text-sm text-accent underline mt-6 font-semibold">Read More</a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Card;
