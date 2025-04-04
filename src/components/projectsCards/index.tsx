import { ArrowRightIcon } from '@radix-ui/react-icons';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ProjectCardProps extends ComponentPropsWithoutRef<'div'> {
  name: string;
  className: string;
  background: ReactNode;
  description: string;
  codeHref: string;
  projectHref: string;
  cta: string;
}

interface ProjectCardWrapperProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
  className?: string;
}

const ProjectCard = ({
  children,
  className,
  ...props
}: ProjectCardWrapperProps) => {
  return (
    <div
      className={cn(
        'grid w-full auto-rows-[22rem] grid-cols-3 gap-4',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const ProjectCardGrid = ({
  name,
  className,
  background,
  description,
  codeHref,
  projectHref,
  cta,
  ...props
}: ProjectCardProps) => (
  <div
    key={name}
    className={cn(
      'group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl',
      'bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]',
      'transform-gpu dark:bg-background dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]',
      className
    )}
    {...props}
  >
    {/* <div>{background}</div> */}

    <div className='pointer-events-none z-10 flex transform-gpu flex-col gap-3 p-6 transition-all duration-300 group-hover:-translate-y-10'>
      <div className='w-full h-32 overflow-hidden rounded-lg'>{background}</div>
      <h3 className='text-base font-medium text-neutral-700 dark:text-neutral-300'>
        {name}
      </h3>
      <p className='text-sm text-neutral-400'>{description}</p>
    </div>

    <div className='pointer-events-auto absolute bottom-0 flex w-full justify-between gap-2 p-4 transition-all duration-300 opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0'>
      <Button variant='ghost' size='sm' className='text-sm' asChild>
        <a href={codeHref} target='_blank' rel='noopener noreferrer'>
          View Code <ArrowRightIcon className='ms-2 h-4 w-4 rtl:rotate-180' />
        </a>
      </Button>

      <Button variant='ghost' size='sm' className='text-sm' asChild>
        <a href={projectHref} target='_blank' rel='noopener noreferrer'>
          {cta} <ArrowRightIcon className='ms-2 h-4 w-4 rtl:rotate-180' />
        </a>
      </Button>
    </div>

    <div className='pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10' />
  </div>
);

export { ProjectCard, ProjectCardGrid };
