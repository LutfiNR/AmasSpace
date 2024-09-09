'use client';
import { motion } from 'framer-motion';

const variants = {
  default: {
    color: 'text-primary',
    bg: 'bg-accent',
  },
  secondary: {
    color: 'text-slate-100',
    bg: 'bg-slate-100',
  },
};

const Headline = ({ children, variant }) => {
  return (
    <div className='flex flex-col items-center py-6 overflow-hidden'>
      {variant && (
        <motion.h1
        initial={{ opacity: 0, }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          className={`${
            variants[variant].color || variants.default.color
          } text-4xl font-bold inline overflow-hidden`}>
          {children}
          <motion.div
            initial={{ width: 0, transformOrigin: 'center' }}
            animate={{ width: '75%' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`${
              variants[variant].bg || variants.default.bg
            } w-full h-1 mt-2 my-0 mx-auto rounded`}></motion.div>
        </motion.h1>
      )}
    </div>
  );
};

export default Headline;
