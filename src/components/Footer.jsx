import Link from 'next/link';

const { default: Image } = require('next/image');

const Footer = () => {
  return (
    <div className='bg-primary p-6 flex flex-col justify-center items-center gap-6'>
      <Image
        src='/Footer Brand.svg'
        alt='footer brand'
        width={100}
        height={100}
        className='w-64'
      />
      <div className='hidden lg:flex gap-12 text-slate-50'>
        <Link href='/feature.html'>Feature</Link>
        <Link href='/download.html'>Download</Link>
        <Link href='/pricing.html'>Pricing</Link>
        <Link href='/blog.html'>Blog</Link>
        <Link href='/help-center.html'>Help Center</Link>
      </div>
      <Image
      src='/icon/Sosmed.svg'
      alt='sosmed'
      width={100}
      height={100}
      className='w-64'
      />
      <div className='w-full'>
      <div className='border border-slate-50 w-full'></div>
      <p className='text-slate-50 font-light text-sm text-center mt-2'>© 2024 RAMbutan Corp.</p>
      </div>
    </div>
  );
};

export default Footer;
