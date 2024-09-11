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
      answer: 'Amasspace is a creative collaboration app designed like a 2D game, simulating an office environment. It includes features such as meetings, chat, task management, and a shared workspace for teamwork.',
    },
    {
      question: 'Which platforms does Amasspace support?',
      answer: 'Amasspace is available on Android, iOS, Windows, and macOS.',
    },
    {
      question: 'Can I conduct video meetings in Amasspace?',
      answer: 'Yes, Amasspace offers a video meeting feature, allowing you to collaborate visually in a virtual room.',
    },{
      question: 'Does Amasspace support task management?',
      answer: 'Yes, Amasspace provides task management features that allow you to create, manage, and track the progress of tasks within your team.',
    },{
      question: 'Can Amasspace be used offline?',
      answer: 'Some features in Amasspace may be limited or unavailable offline, as it relies on cloud-based services.',
    },
  ],
  [
    {
      question: 'Is Amasspace free to use?',
      answer: 'Amasspace offers a free version with basic features, but also provides subscription options for accessing premium features.',
    },
    {
      question: 'How do I join a workspace in Amasspace?',
      answer: 'You can join a workspace via an invitation link provided by the workspace owner or admin.',
    },
    {
      question: 'How do I download and install Amasspace on my device?',
      answer: 'You can download Amasspace from Google Play for Android, the App Store for iOS, and the official website for Windows and macOS versions.',
    },
    {
      question: 'Does Amasspace support integration with other apps?',
      answer: 'Yes, Amasspace supports integration with various third-party collaboration and productivity apps, such as Google Drive and Trello.',
    },
    {
      question: 'How can I contact Amasspace customer support?',
      answer: 'You can reach Amasspace customer support through the contact form on the official website or via the support email provided in the app.',
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
          <h1 className='font-saira text-2xl md:text-3xl lg:text-4xl text-slate-50 text-center mt-16 mb-8'>
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
      <div className='flex justify-center items-center p-6 h-32 md:h-32'>
        <Image src={srcImg} alt={category} width={80} height={80} className='w-auto h-full drop-shadow-lg' />
      </div>
      <p className='font-semibold text-sm md:text-lg text-black-light'>{category}</p>
    </div>
  );
};
