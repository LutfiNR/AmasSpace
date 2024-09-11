import AccordionNew from '@/components/AccordionNew';
import Headline from '@/components/Headline';
import Image from 'next/image';

export const metadata = {
  title: 'Help Center - AmasSpace',
  description: 'Help Center page of AmasSpace',
};

const categories = [
  { icon: '/icon/Get Started.svg', description: 'Get Started' },
  { icon: '/icon/Account Management.svg', description: 'Account Management' },
  { icon: '/icon/Billing & Payment.svg', description: 'Billing & Payment' },
  { icon: '/icon/Feature & Functionality.svg', description: 'Feature & Functionality' },
  { icon: '/icon/Security & Privacy.svg', description: 'Security & Privacy' },
  { icon: '/icon/Technical Support.svg', description: 'Technical Support' },
];

const faq = [
  [
    {
      question: 'What is AmasSpace?',
      answer: 'Amasspace is a virtual workspace that enables teams to collaborate, share files, and create a seamless project management experience. Our goal is to create a platform that fosters collaboration and innovation while providing a unique and engaging experience for users.',
    },
    {
      question: 'What features does AmasSpace offer?',
      answer: 'Amasspace offers a variety of features to help teams work together more efficiently and enjoy a more engaging experience. Some of the key features include: 1. Customizable avatars and pixel art workspaces 2. Interactive 2D environments 3. Text and voice chat 4. Video conferencing 5. Team-specific rooms 6. Brainstorming tools',
    },
  ],
  [
    {
      question: 'What is AmasSpace?',
      answer: 'Amasspace is a virtual workspace that enables teams to collaborate, share files, and create a seamless project management experience. Our goal is to create a platform that fosters collaboration and innovation while providing a unique and engaging experience for users.',
    },
    {
      question: 'What features does AmasSpace offer?',
      answer: 'Amasspace offers a variety of features to help teams work together more efficiently and enjoy a more engaging experience. Some of the key features include: 1. Customizable avatars and pixel art workspaces 2. Interactive 2D environments 3. Text and voice chat 4. Video conferencing 5. Team-specific rooms 6. Brainstorming tools',
    },
  ],
];

export default function Help() {
  return (
    <>
      <section className='relative bg-primary overflow-hidden h-1/2 -z-20'>
        <Image
          src='/decoration/wall.svg'
          alt='wall'
          width={100}
          height={100}
          className='object-cover absolute mix-blend-multiply w-full -z-10 h-full'
        />
        <div className='px-4 py-8 md:px-12 md:py-12 lg:px-16 lg:py-16 bg-gradientOne'>
          <h1 className='font-saira text-2xl md:text-3xl lg:text-4xl text-slate-50 text-center mt-16 mb-8 pt-12'>
            Get Answers, Find Solutions, Collaborate Better
          </h1>
        </div>
      </section>

      <section className='py-8 px-4 md:py-12 md:px-12 lg:py-16 lg:px-24 bg-slate-50 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12'>
        {categories.map((category) => (
          <Card key={category.description} srcImg={category.icon} category={category.description} />
        ))}
      </section>

      <section className='py-8 px-4 md:py-12 md:px-12 lg:py-16 lg:px-24 bg-slate-50'>
        <Headline variant='default' className='text-xl md:text-3xl lg:text-4xl'>
          FAQ
        </Headline>
        <div className='mt-8 md:mt-12 grid grid-cols-1 lg:grid-cols-2 md:gap-8'>
          <AccordionNew items={faq[0]} />
          <AccordionNew items={faq[1]} />
        </div>
      </section>
    </>
  );
}

const Card = ({ srcImg, category }) => {
  return (
    <div className='flex flex-col gap-4 justify-center items-center text-center'>
      <div className='flex justify-center items-center p-6 h-24 md:h-32'>
        <Image src={srcImg} alt={category} width={80} height={80} className='w-auto h-full drop-shadow-lg' />
      </div>
      <p className='font-semibold text-sm md:text-lg text-black-light'>{category}</p>
    </div>
  );
};
