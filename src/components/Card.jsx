"use client"
import {Chip} from "@nextui-org/react";
import Image from "next/image";

const Card = ({ chip, srcImg, title, content }) => {
  return (
    <div className="pb-4">
      <div className='overflow-hidden rounded-xl border shadow-md'>
      <div className='flex flex-col shadow-md'>
        <Image
          src={srcImg}
          alt={title}
          width={160}
          height={90}
          className="w-full"
        />
        <div className='flex flex-col justify-center p-6'>
        {chip}
          <h2 className='text-black-dark text-2xl font-semibold line-clamp-2 mt-4'>{title}</h2>
          <p className='text-black-light text-sm line-clamp-1 mt-2'>{content}</p>
          <a href="/blog.html" className="text-sm text-accent underline mt-6 font-semibold">Read More</a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Card;
