import Image from 'next/image';


const Card = (srcImg, title, content) => {
  return (
    <div className='w-80 h-min overflow-hidden '>
      <Image
        src={srcImg}
        alt={title}
        width={100}
        height={100}
      />
      <div>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;
