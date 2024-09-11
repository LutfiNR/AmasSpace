import Headline from '@/components/Headline';
import Price from '@/components/Price';

export const metadata = {
  title: 'Pricing - AmasSpace',
  description: 'Pricing page of AmasSpace',
};

const benefits = [
  'Work with your whole team',
  'Full Features',
  'Unlimited Meeting Duration',
  'Calendar Integration',
  'Full Customization',
  'Priority Support',
  'Domain Restricted Access',
  'Meeting Recording',
];

export default function Pricing() {
  return (
    <section className='px-4 py-8 md:px-8 md:py-12 lg:px-16 lg:py-24 bg-slate-50'>
      <Headline
        variant='default'
        className='text-xl md:text-3xl lg:text-4xl xl:text-5xl text-center'>
        Pricing
      </Headline>
      <div className='flex flex-col lg:flex-row gap-12 md:gap-16 lg:gap-24 justify-center mt-12'>
        <Price
          srcImg='/decoration/free.svg'
          variant='secondary'
          title='Free'
          content='Limited to 5 Users'
          price='$0'
          buttonText='Get Started'
          benefits={benefits}
        />
        <Price
          srcImg='/decoration/premium.svg'
          variant='primary'
          title='Premium'
          content='Unlimited'
          price='$7.9'
          buttonText='Start Free 30 Days Trial'
          benefits={benefits}
        />
      </div>
    </section>
  );
}
