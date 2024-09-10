import Button from '@/components/Button';
import Headline from '@/components/Headline';

export const metadata = {
  title: 'Download - AmasSpace',
  description: 'Download page of AmasSpace',
};

export default function Download() {
  return (
    <section className='px-4 py-8 md:px-8 md:py-12 lg:px-16 lg:py-24 bg-slate-50'>
      <Headline
        variant='default'
        className='text-xl md:text-3xl lg:text-4xl xl:text-5xl'>
        DOWNLOAD AMASSPACE
      </Headline>

      <div className='mt-8 md:mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='flex flex-col items-center'>
          <div className='flex justify-center items-center mb-6'>
            <img
              src='/decoration/desktop.svg'
              alt='desktop'
              width={300}
              height={300}
              className='drop-shadow-xl'
            />
          </div>
          <div className='flex flex-col items-center gap-4'>
            <Button
              variant='secondary'
              size='w-full md:w-1/2 py-3'>
              Windows
            </Button>
            <Button
              variant='secondary'
              size='w-full md:w-1/2 py-3'>
              Mac Os
            </Button>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <div className='flex justify-center items-center mb-6'>
            <img
              src='/decoration/mobile.svg'
              alt='mobile'
              width={280}
              height={280}
              className='drop-shadow-lg'
            />
          </div>
          <div className='flex flex-col items-center gap-4'>
            <Button
              variant='secondary'
              size='w-full md:w-1/2 py-3'>
              Android
            </Button>
            <Button
              variant='secondary'
              size='w-full md:w-1/2 py-3'>
              iOS
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
