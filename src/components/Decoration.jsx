import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Decoration = ({ src, alt, position, size, delay = 0, floatAmount = 5 }) => {
  return (
    <motion.img
      initial={{ opacity: 0, y: 0, }}
      animate={{ opacity: 1, y: [0, -floatAmount, 0] }}
      transition={{
        opacity: {
          duration: 2,
          delay: delay,
        },
        y: {
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          delay: delay,
        },
      }}
      className={`${size} absolute ${position} drop-shadow-2xl`}
      src={src}
      alt={alt}
    />
  );
};

Decoration.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  delay: PropTypes.number,
  floatAmount: PropTypes.number,
};

export default Decoration;