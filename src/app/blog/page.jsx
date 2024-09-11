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
      <Headline variant='default' className='text-2xl md:text-4xl lg:text-5xl'>
          BLOG
        </Headline>
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
            chip={<Chip color='success' className='text-slate-50'>Product Update</Chip>}
            srcImg='/thumbnail/thumbnail-2.svg'
            title='Amasspace v2.5: New Features to Enhance Your Virtual Collaboration'
            content='We are excited to introduce Amasspace v2.5! This update brings'
            variant='portrait'
          />
        </div>
        <div>
          <Card
            chip={<Chip color='success' className='text-slate-50'>Product Update</Chip>}
            srcImg='/thumbnail/thumbnail-2.svg'
            title='Amasspace v2.5: New Features to Enhance Your Virtual Collaboration'
            content='We are excited to introduce Amasspace v2.5! This update brings'
            variant='portrait'
          />
        </div>
        <div>
          <Card
            chip={<Chip color='success' className='text-slate-50'>Product Update</Chip>}
            srcImg='/thumbnail/thumbnail-2.svg'
            title='Amasspace v2.5: New Features to Enhance Your Virtual Collaboration'
            content='We are excited to introduce Amasspace v2.5! This update brings'
            variant='portrait'
          />
        </div>
        <div>
          <Card
            chip={<Chip color='success' className='text-slate-50'>Product Update</Chip>}
            srcImg='/thumbnail/thumbnail-2.svg'
            title='Amasspace v2.5: New Features to Enhance Your Virtual Collaboration'
            content='We are excited to introduce Amasspace v2.5! This update brings'
            variant='portrait'
          />
        </div>
        <div className='col-span-1 md:col-span-2 lg:col-span-4'>
          <Card
            chip={<Chip color='success' className='text-slate-50'>Product Update</Chip>}
            srcImg='/thumbnail/thumbnail-2.svg'
            title='Amasspace v2.5: New Features to Enhance Your Virtual Collaboration'
            content='We are excited to introduce Amasspace v2.5! This update brings'
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
