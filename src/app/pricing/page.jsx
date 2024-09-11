import Headline from "@/components/Headline";

export const metadata = {
    title: "Pricing - AmasSpace",
    description: "Pricing page of AmasSpace",
  };
  
  
  export default function Home() {
    return (
      <section className='px-4 py-8 md:px-8 md:py-12 lg:px-16 lg:py-24 bg-slate-50 '>
      <div className='pt-24 lg:pt-4'>
      <Headline
        variant='default'
        className='text-xl md:text-3xl lg:text-4xl xl:text-5xl'>
        Pricing
      </Headline>
      </div>
      </section>
    );
  }
  