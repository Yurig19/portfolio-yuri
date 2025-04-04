'use client';

import { BlogsCard, BlogsCardGrid } from '@/components/blogsCards';
import { InteractiveHoverButtonWithText } from '@/components/buttons/interactiveHoverButton';
import { Marquee } from '@/components/magicui/marquee';
import { TextAnimate } from '@/components/magicui/text-animate';
import { ProjectCard, ProjectCardGrid } from '@/components/projectsCards';
import { SkillsViewer } from '@/components/skillsView';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const files = [
  {
    name: 'bitcoin.pdf',
    body: 'Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.',
  },
  {
    name: 'finances.xlsx',
    body: 'A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.',
  },
  {
    name: 'logo.svg',
    body: 'Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.',
  },
  {
    name: 'keys.gpg',
    body: 'GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.',
  },
  {
    name: 'seed.txt',
    body: 'A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.',
  },
];

const features = [
  {
    name: 'Notely',
    description:
      'An online note-taking app with markdown support and real-time sync.',
    href: '/',
    cta: 'View project',
    background: (
      <Marquee
        pauseOnHover
        className='absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] '
      >
        {files.map((f, i) => (
          <figure
            key={i}
            className={cn(
              'relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4',
              'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
              'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]',
              'transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none'
            )}
          >
            <div className='flex flex-row items-center gap-2'>
              <div className='flex flex-col'>
                <figcaption className='text-sm font-medium dark:text-white '>
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className='mt-2 text-xs'>{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
    className: 'lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3',
  },
  {
    name: 'Notely',
    description:
      'Full-text search engine for documents and media using Elasticsearch.',
    href: '/',
    cta: 'View project',
    background: (
      <Marquee
        pauseOnHover
        className='absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] '
      >
        {files.map((f, i) => (
          <figure
            key={i}
            className={cn(
              'relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4',
              'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
              'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]',
              'transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none'
            )}
          >
            <div className='flex flex-row items-center gap-2'>
              <div className='flex flex-col'>
                <figcaption className='text-sm font-medium dark:text-white '>
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className='mt-2 text-xs'>{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
    className: 'lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3',
  },
];

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-background text-foreground'>
      <header className='text-left w-full max-w-4xl mb-16'>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='text-5xl font-extrabold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text'
        >
          Full Stack Developer
        </motion.h1>
        <TextAnimate animation='blurInUp' by='character' once>
          Crafting high-performance, responsive, and user-friendly web
          applications using modern technologies, clean code, and best practices
          for seamless user experiences.
        </TextAnimate>

        <div className='flex gap-4 mt-4'>
          <InteractiveHoverButtonWithText text='Hire me' />
          <Button variant='outline' size='icon'>
            <Mail size={16} />
          </Button>
        </div>
      </header>

      <section className='w-full max-w-4xl mb-16'>
        <h2 className='text-2xl font-semibold border-b pb-2 border-border'>
          Skills
        </h2>
        <SkillsViewer />
      </section>

      <section className='w-full max-w-4xl mb-16'>
        <h2 className='text-2xl font-semibold border-b pb-2 border-border'>
          Latest Projects
        </h2>
        <div className='gap-6 mt-4 '>
          <ProjectCard className='flex gap-4'>
            {features.map((feature) => (
              <ProjectCardGrid
                key={feature.name}
                {...feature}
                projectHref=''
                codeHref=''
              />
            ))}
          </ProjectCard>
        </div>
      </section>

      <section className='w-full max-w-4xl mb-16'>
        <h2 className='text-2xl font-semibold border-b pb-2 border-border'>
          Latest Blog Posts
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-4'>
          <BlogsCardGrid className='flex gap-4'>
            {features.map((feature) => (
              <BlogsCard
                key={feature.name}
                {...feature}
                projectHref=''
                codeHref=''
              />
            ))}
          </BlogsCardGrid>
        </div>
      </section>
    </div>
  );
}
