import Button from '@/components/Button';
import Card from '@/components/Card';
import Headline from '@/components/Headline';
import { Chip } from '@nextui-org/react';


export const metadata = {
  title: 'Blog - AmasSpace',
  description: 'Blog page of AmasSpace',
};

export default function Blog() {
 

  return (
    <section className='flex flex-col gap-12 md:gap-16 pt-12 md:pt-16 px-4 py-8 md:px-8 md:py-12 lg:px-16 lg:py-24 bg-slate-50'>
      <div className=''>
      <Headline variant='default' className='text-2xl md:text-4xl lg:text-5xl'>
          BLOG
        </Headline>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        <div className='col-span-1 md:col-span-2 lg:col-span-4'>
          <Card
            chip={<Chip color='success' className='text-slate-50'>Product Update</Chip>}
            srcImg='/thumbnail/thumbnail-2.svg'
            title='Amasspace v2.5: New Features to Enhance Your Virtual Collaboration'
            content='We are excited to introduce Amasspace v2.5! This update brings'
            variant='landscape'
          />
        </div>
        <div>
        <Card
              chip={<Chip color='primary'>How To</Chip>}
              srcImg='/thumbnail/thumbnail-5.svg'
              title='How to Set Up Your Virtual Workspace in Amasspace'
              content="Creating an effective virtual workspace is crucial for maintaining productivity and collaboration in a remote setting. In this guide, we&#39;ll walk you through the steps to set up your virtual workspace in Amasspace, customize it to fit your team&#39;s needs, and get started with your first project."
            ></Card>
        </div>
        <div>
            <Card
              chip={<Chip color='secondary'>Tips & Tricks</Chip>}
              srcImg='/thumbnail/thumbnail-3.svg'
              title='10 Tips and Tricks to Maximize Engagement in Amasspace'
              content='Keeping your team engaged in a virtual environment can be challenging, but with the right strategies, Amasspace can become a hub of creativity and productivity. Here are 10 tips and tricks to help you get the most out of Amasspace and keep your team motivated.'
            ></Card>
        </div>
        <div className='col-span-1 md:col-span-2'>
          <Card
            chip={<Chip color='danger' className='text-slate-50'>Customer Story</Chip>}
            srcImg='/thumbnail/thumbnail-4.svg'
            title='How Amasspace Helped ABC Marketing Agency Boost Creativity and Collaboration'
            content='Remote work posed significant challenges for ABC Marketing Agency, particularly in fostering '
            variant='portrait'
          />
        </div>
        <div className='col-span-1 md:col-span-2 lg:col-span-4'>
          <Card
            chip={<Chip color='danger' className='text-slate-50'>Customer Story</Chip>}
            srcImg='/thumbnail/thubmnail-1.svg'
            title='How Amasspace Transformed Remote Collaboration for Creative Teams'
            content='Creative teams often struggle with staying connected and engaged in remote work environments. '
            variant='landscape'
          />
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <Button
          variant='primary'
          size='px-4 py-2 md:px-6 md:py-2 text-sm'
        >
          See More
        </Button>
      </div>
    </section>
  );
}
