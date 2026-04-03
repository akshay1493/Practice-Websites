import { ReactNode } from 'react';
import { cn } from '@/src/lib/utils';
import { motion } from 'motion/react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
  title?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  animate?: boolean;
}

export default function Section({
  children,
  className,
  id,
  containerClassName,
  title,
  subtitle,
  align = 'center',
  animate = true,
}: SectionProps) {
  const content = (
    <div className={cn('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8', containerClassName)}>
      {(title || subtitle) && (
        <div
          className={cn(
            'mb-16 max-w-3xl',
            align === 'center' ? 'mx-auto text-center' : 'text-left'
          )}
        >
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold text-navy-secondary mb-4 leading-tight">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-lg text-gray-600 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </div>
  );

  if (animate) {
    return (
      <motion.section
        id={id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className={cn('py-20 md:py-32', className)}
      >
        {content}
      </motion.section>
    );
  }

  return (
    <section id={id} className={cn('py-20 md:py-32', className)}>
      {content}
    </section>
  );
}
