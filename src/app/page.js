"use client"
import Image from 'next/image';
import Headline from '../components/Headline';
import SwiperComponent from '@/components/SwiperComponent';
import Button from '@/components/Button';
import { Avatar } from "@nextui-org/react";
import { motion } from 'framer-motion';
import Decoration from '@/components/Decoration';



const needs = [
  [
    { icon: '/icon/sharescreen.svg', description: 'Share Screen' },
    { icon: '/icon/chat.svg', description: 'Chatting With Other' },
    { icon: '/icon/video.svg', description: 'Meet With Video' },
    { icon: '/icon/calendar.svg', description: 'Scheduling' },
  ],
  [
    { icon: '/icon/task.svg', description: 'Manage Team Project' },
    { icon: '/icon/custom.svg', description: 'Custom Avatar' },
    { icon: '/icon/google.svg', description: 'Google Integration' },
    { icon: '/icon/more.svg', description: 'And More' },
  ]
];

export default function Home() {
  return (
    <>
    <motion.div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-100 to-secondary">
  <Tagline />
  <SubHeadline />
  <Laptop />

  {/* Graph Decoration */}
  <Decoration
    src="/decoration/graph.svg"
    alt="graph"
    position="top-5 left-10 sm:left-32 md:left-64"
    size="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-24 lg:h-24"
  />

  {/* Clock Decoration */}
  <Decoration
    src="/decoration/clock.svg"
    alt="clock"
    position="top-5 right-10 sm:right-16 md:right-20"
    size="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-24 lg:h-24"
    delay={0.4}
  />

  {/* Diagram Decoration */}
  <Decoration
    src="/decoration/diagram.svg"
    alt="diagram"
    position="-bottom-16 left-10 sm:left-16 md:left-20"
    size="w-16 h-16 sm:w-24 sm:h-24 md:w-36 md:h-36 lg:w-56 lg:h-56"
    delay={0.4}
  />

  {/* Note Decoration */}
  <Decoration
    src="/decoration/note.svg"
    alt="note"
    position="bottom-0 right-10 sm:right-16 md:right-20"
    size="w-16 h-16 sm:w-24 sm:h-24 md:w-36 md:h-36 lg:w-56 lg:h-56"
    delay={0.8}
  />
</motion.div>


      {/* Experience Section */}
      <section className=' px-4 py-8 md:px-12 md:py-12 lg:px-24 lg:py-16 bg-slate-50'>
        <div className='pt-8'>
        <Headline variant="default" className="text-2xl md:text-4xl lg:text-5xl">FEEL NEW EXPERIENCES</Headline>
        </div>
        <Experience
          title='Unified Communication'
          description='Amasspace offers a centralized communication hub where conversations, project updates, and creative ideas flow seamlessly, ensuring everyone stays connected.'
          srcImg='/preview.svg'
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
        <Image src='/decoration/wall.svg' alt='wall' width={100} height={100} className=' object-cover absolute mix-blend-multiply w-full -z-10 h-full' />
        <div className='px-4 py-8 md:px-12 md:py-12 lg:px-16 lg:py-16 bg-gradientOne'>
          <Headline variant="secondary" className="text-xl md:text-3xl lg:text-4xl">GET YOUR TEAM NEEDS</Headline>
          <div className='flex flex-col items-center md:flex-row justify-center gap-8 md:gap-24 mt-16'>
            {needs.map((group, i) => (
              <div key={i} className='flex flex-col gap-8 lg:gap-12'>
                {group.map((need, index) => (
                  <div key={index} className='flex w-52 gap-4 md:w-auto md:gap-6 items-center'>
                    <Image src={need.icon} alt={need.description} width={48} height={48} />
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
              srcImg='https://i.pravatar.cc/150?u=a042581f4e29026024d'
              name='Sarah J.'
              review='Amasspace has completely transformed the way our team collaborates. The virtual 2D environment is not only fun but also incredibly effective in keeping everyone connected. The customizable avatars and workspaces make it feel like a real creative hub you know!'
              job='Creative Director'
            />
            <Review
              name='Mark R.'
              job='Project Manager'
              srcImg="https://i.pravatar.cc/150?u=a04258a2462d826712d"
              review='Managing projects has never been this intuitive. Amasspace&#39;s integrated project management tools, combined with its seamless communication features, have streamlined our workflow. The gamified elements keep the team motivated and engaged throughout the process.'
            />
            <Review
              name='Emily K.'
              job='Graphic Designer'
              srcImg="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              review='What I love most about Amasspace is the personalization. The ability to tailor my workspace and avatar to reflect my personality really makes a difference in how engaged I feel during work. Plus, the platform is so easy to use no steep learning curves!' />
            <Review
              name='John L.'
              job='UX Designer'
              srcImg="https://i.pravatar.cc/150?u=a04258114e29026302d"
              review='Amasspace brings creativity and collaboration to a whole new level. The pixel art design is nostalgic yet modern, and the tools provided make team collaboration effortless and enjoyable. It is like working in a virtual playground for professionals creative!'
            />
            <Review
              name='Rachel M.'
              job='Team Lead'
              srcImg="https://i.pravatar.cc/150?u=a04258114e29026702d"
              review='The communication features in Amasspace are top-notch. We’ve moved all our team discussions and project management into this platform, and the difference is clear—less confusion, more productivity, and a much stronger sense of connection among remote team members.'
            />
            <Review
              name='Alex P.'
              job='Software Developer'
              srcImg="https://i.pravatar.cc/150?u=a04258114e29026708c"
              review='Amasspace has solved so many of our team’s pain points. The virtual workspace helps us feel more connected, even when we are miles apart. The interface is intuitive, the tools are powerful, and the overall experience is both engaging and efficient. Like it'
            />
          </SwiperComponent>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className='bg-slate-50 grid grid-cols-1 lg:grid-cols-2'>
        <div className='py-8 px-4 md:py-12 md:px-12 lg:py-16 lg:px-24'>
          <h2 className='font-bold text-3xl md:text-4xl lg:text-5xl text-primary'>Lets Collaborate with Your Creative Team</h2>
          <div className='mt-6 flex gap-2 md:gap-4'>
            <Button href='/pricing.html' variant='secondaryOutline' size='px-4 py-2 md:px-6 md:py-3'>View Pricing</Button>
            <Button href='/download.html' variant='primary' size='px-4 py-2 md:px-6 md:py-3'>Get Started</Button>
          </div>
        </div>
        <div className='flex justify-center items-end'>
          <Image src='/decoration/character.svg' alt='character' width={300} height={300} className='w-1/2' />
        </div>
      </section>
    </>
  );
}

// Review Component
const Review = ({ srcImg, name, review, job }) => {
  return (
    <div className='pb-4'>
      <div className=' flex flex-col gap-4 md:gap-6 p-4 md:p-6 lg:p-8 items-start overflow-hidden rounded-xl shadow-lg border'>
        <div className='h-28 md:h-64 lg:h-64'>
        <p className='text-black-dark text-sm md:text-lg'><q>{review}</q></p>
        </div>
        <div className='flex gap-2 items-center mt-8'>
          <Avatar isBordered color="primaryy" src={srcImg} />
          <div className='flex flex-col justify-center'>
            <p className='text-black-dark text-sm font-semibold'>{name}</p>
            <p className='text-black-light text-xs'>{job}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Experience Component
const Experience = ({ title, description, srcImg, swap = true }) => {
  return (
    <div className='grid grid-cols-1  lg:grid-cols-2 mt-16 md:mt-32'>
      <div className={`flex ${swap ? 'lg:order-2' : ' '} justify-center items-center p-6`}>
        <Image src={srcImg} alt={title} width={400} height={300} className='w-full md:w-3/4 lg:w-10/12' />
      </div>
      <div className='text-black-light p-2 md:p-6 flex flex-col justify-center'>
        <h2 className='font-semibold text-2xl md:text-4xl'>{title}</h2>
        <p className='text-sm md:text-base mt-2'>{description}</p>
      </div>
    </div>
  );
}

const Tagline = () => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      data-scroll
      data-scroll-speed='2'
      className='text-8xl text-center font-saira text-primary drop-shadow-lg'>
      YOUR CREATIVE SPACE
    </motion.h1>
  );
};
const SubHeadline = () => {
  return (
    <motion.p
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      data-scroll
      data-scroll-speed='1'
      className='text-lg text-center text-gray-100 font-bold drop-shadow-lg font-opensans'>
      ENTER A VIRTUAL ROOM WHERE COLLABORATION MEETS CREATIVITY.
    </motion.p>
  );
};

const Laptop = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.4 }}
      className='sm:block w-1/2 mx-auto'>
      <img
        src='/decoration/desktop.svg'
        alt='laptop'
        className='object-cover w-full h-full'
      />
    </motion.div>
  );
};