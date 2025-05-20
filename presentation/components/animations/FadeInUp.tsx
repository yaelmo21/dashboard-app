'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

type FadeInUpProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
};

const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const FadeInUp = ({
  children,
  delay = 0,
  duration = 0.4,
  className = '',
}: FadeInUpProps) => (
  <motion.div
    variants={fadeInUpVariants}
    initial='hidden'
    animate='visible'
    transition={{ duration, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default FadeInUp;
