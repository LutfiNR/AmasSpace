import Image from 'next/image';
import Headline from '../components/Headline';
import SwiperComponent from '@/components/SwiperComponent';
import Button from '@/components/Button';

export const metadata = {
  title: "Home - AmasSpace",
  description: "Home page of AmasSpace",
};

const needs = [
  [
    { icon: '/icon/sharescreen.svg', description: 'Share Screen' },
    { icon: '/icon/sharescreen.svg', description: 'Chatting With Other' },
    { icon: '/icon/sharescreen.svg', description: 'Meet With Video' },
    { icon: '/icon/sharescreen.svg', description: 'Scheduling' },
  ],
  [
    { icon: '/icon/sharescreen.svg', description: 'Manage Team Project' },
    { icon: '/icon/sharescreen.svg', description: 'Custom Avatar' },
    { icon: '/icon/sharescreen.svg', description: 'Google Integration' },
    { icon: '/icon/sharescreen.svg', description: 'And More' },
  ]
];

export default function Home() {
  return (
    <>
      {/* Experience Section */}
      <section className='px-4 py-8 md:px-12 md:py-12 lg:px-24 lg:py-16 bg-slate-50'>
        <Headline variant="default" className="text-2xl md:text-4xl lg:text-5xl">FEEL NEW EXPERIENCES</Headline>
        <Experience
          title='Unified Communication'
          description='Amasspace offers a centralized communication hub where conversations, project updates, and creative ideas flow seamlessly, ensuring everyone stays connected.'
          srcImg='/unified-communication.svg'
        />
        <Experience
          swap={false}
          srcImg='/fun.svg'
          title='Intuitive and Fun'
          description='Amasspace makes collaboration intuitive and enjoyable, reducing the friction often found in more complex tools.'
        />
        <Experience
          title='Project Management'
          description='The platform provides powerful project management tools within the virtual workspace, enabling teams to track progress, manage tasks, and collaborate in real-time without ever leaving the environment.'
          srcImg='/project-management.svg'
        />
      </section>

      {/* Needs Section */}
      <section className='relative bg-primary overflow-hidden -z-20'>
        <Image src='/decoration/wall.svg' alt='wall' width={100} height={100} className='absolute mix-blend-multiply w-full -z-10' />
        <div className='px-4 py-8 md:px-12 md:py-12 lg:px-16 lg:py-16 bg-gradientOne'>
          <Headline variant="secondary" className="text-xl md:text-3xl lg:text-4xl">GET YOUR TEAM NEEDS</Headline>
          <div className='flex flex-col items-center md:flex-row justify-center gap-8 md:gap-24 mt-16'>
            {needs.map((group, i) => (
              <div key={i} className='flex flex-col gap-8 lg:gap-12'>
                {group.map((need, index) => (
                  <div key={index} className='flex gap-4 md:gap-6 items-center'>
                    <img src={need.icon} alt={need.description} width={48} height={48} />
                    <span className='text-slate-100 text-sm md:text-base'>{need.description}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className='px-4 py-8 md:px-12 md:py-12 lg:px-24 lg:py-16 bg-slate-50'>
        <Headline variant="default" className="text-2xl md:text-4xl lg:text-5xl">WHAT THEY SAY</Headline>
        <div className='mt-8 md:mt-12'>
          <SwiperComponent>
            <Review
              srcImg='/photo/upik.jpg'
              name='Upik'
              review='Amasspace has streamlined our workflow by combining communication and project management in one intuitive platform. It is a game-changer!'
              job='Product Manager'
            />
            <Review />
            <Review />
            <Review />
            <Review />
          </SwiperComponent>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className='bg-slate-50 grid grid-cols-1 lg:grid-cols-2'>
        <div className='py-8 px-4 md:py-12 md:px-12 lg:py-16 lg:px-24'>
          <h2 className='font-semibold text-3xl md:text-4xl lg:text-5xl text-primary'>Lets Collaborate with Your Creative Team</h2>
          <div className='mt-6 flex gap-2 md:gap-4'>
            <Button variant='secondaryOutline' size='px-4 py-2 md:px-6 md:py-3'>View Pricing</Button>
            <Button variant='primary' size='px-4 py-2 md:px-6 md:py-3'>Get Started</Button>
          </div>
        </div>
        <div className='flex justify-center items-end'>
          <img src='/decoration/character.svg' alt='character' width={300} height={300} className='w-3/4 md:w-1/2 lg:w-1/2' />
        </div>
      </section>
    </>
  );
}

// Review Component
const Review = ({ srcImg, name, review, job }) => {
  return (
    <div className='flex flex-col gap-4 md:gap-6 p-4 md:p-6 lg:p-8 items-start overflow-hidden rounded-lg border'>
      <p className='text-black-dark text-sm md:text-lg'><q>{review}</q></p>
      <div className='flex gap-2 items-center'>
        <img
          src={srcImg}
          alt={name}
          width={40}
          height={40}
          className='w-10 h-10 rounded-full'
        />
        <div className='flex flex-col justify-center'>
          <p className='text-black-dark text-sm font-semibold'>{name}</p>
          <p className='text-black-light text-xs'>{job}</p>
        </div>
      </div>
    </div>
  );
}

// Experience Component
const Experience = ({ title, description, srcImg, swap = true }) => {
  return (
    <div className='grid grid-cols-1  lg:grid-cols-2 mt-16 md:mt-32'>
          <div className={`flex ${swap ? 'lg:order-2':' '} justify-center items-center p-6`}>
            <img src={srcImg} alt={title} width={400} height={300} className='w-full md:w-3/4 lg:w-10/12' />
          </div>
          <div className='text-black-light p-2 md:p-6 flex flex-col justify-center'>
            <h2 className='font-semibold text-2xl md:text-4xl'>{title}</h2>
            <p className='text-sm md:text-base mt-2'>{description}</p>
          </div>
    </div>
  );
}
