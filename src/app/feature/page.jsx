"use client"
import AccordionComponent from '@/components/Accordion';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Headline from '@/components/Headline';
import SwiperComponent from '@/components/SwiperComponent';
import { Chip } from '@nextui-org/react';
import Image from 'next/image';

const features = [
  {
    feature: 'Customization',
    subfeature: [
      {
        title: 'Customizable Avatars',
        description:
          'Personalize your avatar to express your style and identity within the workspace.',
      },
      {
        title: 'Interactive 2D Environment',
        description:
          'Explore a dynamic pixel art workspace where users can move around, interact with objects, and collaborate in a visually engaging environment.',
      },
    ],
  },
  {
    feature: 'Collaboration',
    subfeature: [
      {
        title: 'Text and Voice Chat',
        description:
          'Integrated messaging and voice communication to keep your team connected, whether in group chats or private conversations.',
      },
      {
        title: 'Video Conferencing',
        description:
          'Host virtual meetings with seamless video conferencing directly within Amasspace.',
      },
      {
        title: 'Team-Specific Rooms',
        description:
          'Create dedicated rooms for specific teams or projects, with customizable settings and permissions.',
      },
      {
        title: 'Brainstorming Tools',
        description:
          'Use virtual whiteboards and idea boards for collaborative brainstorming sessions.',
      },
      {
        title: 'Voting System',
        description:
          'Empower teams to vote on ideas and prioritize tasks efficiently.',
      },
    ],
  },
  {
    feature: 'Project Management',
    subfeature: [
      {
        title: 'Task Tracking',
        description:
          'Manage tasks with intuitive tracking tools, including deadlines, priorities, and progress indicators.',
      },
      {
        title: 'Visual Kanban Boards',
        description:
          'Organize your workflow with drag-and-drop task management using Kanban boards.',
      },
      {
        title: 'File Management',
        description:
          'Securely upload, organize, and share project files within your workspace.',
      },
      {
        title: 'Calendar Syncing',
        description:
          'Integrate with external calendars for scheduling and deadline management.',
      },
    ],
  },
  {
    feature: 'Analytics & Gamification',
    subfeature: [
      {
        title: 'Project Analytics',
        description:
          'Monitor project performance and team productivity with detailed reports.',
      },
      {
        title: 'Time Tracking',
        description: 'Track time spent on tasks and projects.',
      },
      {
        title: 'Achievements and Badges',
        description:
          'Reward users for completing tasks and reaching milestones.',
      },
      {
        title: 'Leaderboards',
        description:
          'Foster friendly competition with performance leaderboards.',
      },
    ],
  },
];

export default function Feature() {
  return (
    <>
      <section className='bg-gradient-to-br from-secondary to-primary grid grid-cols-1 lg:grid-cols-2 h-screen overflow-hidden'>
        <div className='py-8 px-4 md:py-12 md:px-12 lg:py-16 lg:px-24 flex flex-col gap-4 justify-end lg:justify-center'>
          <div className='text-slate-50'>
            <h2 className='font-saira text-3xl md:text-4xl lg:text-5xl'>
              Room For Collaboration Your Creative Team
            </h2>
            <p className='mt-4 text-base md:text-lg lg:text-xl'>
              Amasspace provides features such as project management,
              conversation, and other features to support your creative team
              collaboration.
            </p>
          </div>
          <div className='mt-6 flex gap-2 md:gap-4'>
            <Button
            href='/pricing.html'
              variant='whiteOutline'
              size='px-4 py-2 md:px-6 md:py-3 text-sm md:text-base lg:text-lg'>
              View Pricing
            </Button>
            <Button
            href='/download.html'
              variant='primary'
              size='px-4 py-2 md:px-6 md:py-3 text-sm md:text-base lg:text-lg'>
              Get Started
            </Button>
          </div>
        </div>
        <div className='flex justify-end items-center'>
          <Image
            src='/decoration/preview.svg'
            alt='character'
            className='max-w-xs md:max-w-xl lg:max-w-lg'
            width={600}
            height={600}
          />
        </div>
      </section>

      <section className='py-8 px-4 md:py-12 md:px-12 lg:py-16 lg:px-24 bg-slate-50'>
        <Headline variant='default' className='text-2xl md:text-4xl lg:text-5xl'>
          EVERYTHING IS HERE
        </Headline>
        <div className='grid grid-cols-1 md:grid-cols-2 mt-12 gap-6'>
          <div className='flex justify-center md:justify-start'>
            <Image
              src='/decoration/preview.svg'
              alt=''
              className='w-3/4 md:w-full'
              width={400}
              height={400}
            />
          </div>
          <AccordionComponent features={features}></AccordionComponent>
        </div>
      </section>

      <section className='py-8 px-4 md:py-12 md:px-12 lg:py-16 lg:px-24 bg-slate-50'>
        <Headline variant='default' className='text-2xl md:text-4xl lg:text-5xl'>
          LEARN AMASSPACE
        </Headline>
        <div className='mt-8 md:mt-12'>
          <SwiperComponent>
            <Card
              chip={<Chip color='primary'>How To</Chip>}
              srcImg='/thumbnail/thumbnail-5.svg'
              title='How to Set Up Your Virtual Workspace in Amasspace'
              content="Creating an effective virtual workspace is crucial for maintaining productivity and collaboration in a remote setting. In this guide, we&#39;ll walk you through the steps to set up your virtual workspace in Amasspace, customize it to fit your team&#39;s needs, and get started with your first project."
            ></Card>
            <Card
              chip={<Chip color='secondary'>Tips & Tricks</Chip>}
              srcImg='/thumbnail/thumbnail-3.svg'
              title='10 Tips and Tricks to Maximize Engagement in Amasspace'
              content='Keeping your team engaged in a virtual environment can be challenging, but with the right strategies, Amasspace can become a hub of creativity and productivity. Here are 10 tips and tricks to help you get the most out of Amasspace and keep your team motivated.'
            ></Card>
            <Card
              chip={<Chip color='success' className='text-slate-50'>Product Update</Chip>}
              srcImg='/thumbnail/thumbnail-2.svg'
              title='Amasspace v2.5: New Features to Enhance Your Virtual Collaboration'
              content='We are excited to introduce Amasspace v2.5! This update brings new features designed to improve collaboration and make your virtual workspace even more dynamic and user-friendly.'
            ></Card>
          </SwiperComponent>
        </div>
      </section>

      <section className='py-8 px-4 md:py-12 md:px-12 lg:py-16 lg:px-24 bg-slate-50 grid grid-rows-2 gap-12'>
        <div className='flex justify-center items-end'>
          <Image
            src='/decoration/character-full.svg'
            alt='character'
            className='max-w-[100px] md:max-w-[125px] lg:max-w-[150px] drop-shadow-lg'
            width={100}
            height={100}
          />
        </div>
        <div className='flex flex-col items-center text-center'>
          <h2 className='font-bold text-2xl md:text-3xl lg:text-4xl text-primary'>
            Let&#39;s Collaborate with Your Creative Team
          </h2>
          <div className='mt-6 flex gap-2 md:gap-4'>
            <Button
            href='/pricing.html'
              variant='secondaryOutline'
              size='px-3 py-2 md:px-4 md:py-2 text-sm'>
              View Pricing
            </Button>
            <Button
            href='/download.html'
              variant='primary'
              size='px-3 py-2 md:px-4 md:py-2 text-sm'>
              Get Started
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
