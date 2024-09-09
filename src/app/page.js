
import Image from 'next/image';
import Headline from '../components/Headline'

export const metadata = {
  title: "Home - AmasSpace",
  description: "Home page of AmasSpace",
};

const needs = [
  [{
    icon: '/icon/sharescreen.svg',
    description: 'Share Screen',
  },
  {
    icon: '/icon/sharescreen.svg',
    description: 'Chatting With Other',
  },
  {
    icon: '/icon/sharescreen.svg',
    description: 'Meet With Video',
  },
  {
    icon: '/icon/sharescreen.svg',
    description: 'Scheduling',
  },],
  [
    {
      icon: '/icon/sharescreen.svg',
      description: 'Manage Team Project',
    },
    {
      icon: '/icon/sharescreen.svg',
      description: 'Custom Avatar',
    },
    {
      icon: '/icon/sharescreen.svg',
      description: 'Google Integration',
    },
    {
      icon: '/icon/sharescreen.svg',
      description: 'And More',
    },
  ]
]

export default function Home() {
  return (
    <>
      <section className='px-16 py-16 bg-slate-100'>
        <Headline variant="default">FEEL NEW EXPERIENCES</Headline>
        <Experience
          title='Unified Communication'
          description='Amasspace offers a centralized communication hub where conversations, project updates, and creative ideas flow seamlessly, ensuring everyone stays connected.'
        />
        <Experience
          swap={false}
          srcImg='/fun.svg'
          title='Intuitive and Fun'
          description='Amasspace makes collaboration intuitive and enjoyable, reducing the friction often found in more complex tools.'
        />
        <Experience
          title='Project Management'
          description='The platform service powerful project management tools within the virtual workspace, enabling teams to track progress, manage tasks, and collaborate in real-time without ever leaving the environment.'
        />
      </section>

      <section className='relative bg-primary overflow-hidden -z-20 '>
        <Image src='/wall.svg' alt='wall' width={100} height={100} className='absolute mix-blend-multiply w-full -z-10' />
        <div className='px-16 py-16 bg-gradientOne'>
          <Headline variant="secondary">GET YOUR TEAM NEEDS</Headline>
          <div className='flex justify-center gap-48 mt-24'>
            <div className='flex flex-col gap-12'>
            {needs[0].map((need, index) => (
              <div key={index} className='flex gap-6 items-center'>
                <Image src={need.icon} alt={need.description} width={48} height={48} />
                <span className='text-slate-100 text-base'>{need.description}</span>
              </div>
            ))}
            </div>
            <div className='flex flex-col gap-12'>
            {needs[1].map((need, index) => (
              <div key={index} className='flex gap-6 items-center'>
                <Image src={need.icon} alt={need.description} width={48} height={48}/>
                <span className='text-slate-100 text-base'>{need.description}</span>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

const Experience = ({ title, description, srcImg, swap = true }) => {
  return (
    <div className='grid grid-cols-2 mt-32'>
      {swap ? (
        <>
          <div className='p-6' >
            <Image src={srcImg} alt='unified communication' width={100} height={100} />
          </div>
          <div className='text-black-light p-6'>
            <h2 className='font-semibold text-4xl'>{title}</h2>
            <p className='text-base mt-2'>{description}</p>
          </div></>
      ) : (
        <>
          <div className='text-black-light p-6'>
            <h2 className='font-semibold text-4xl'>{title}</h2>
            <p className='text-base mt-2'>{description}</p>
          </div>
          <div className='p-6 flex justify-center items-center' >
            <Image src={srcImg} alt='unified communication' width={100} height={100} className='w-3/4' />
          </div></>
      )}
    </div>
  )
}