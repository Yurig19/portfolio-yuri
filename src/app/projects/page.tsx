'use client';

import { InteractiveHoverButtonWithText } from '@/components/buttons/interactiveHoverButton';
import { FadeInOnScroll } from '@/components/fadeInOnScrool';
import { Badge } from '@/components/ui/badge';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type Project = {
  id: string;
  title: string;
  description: string;
  mediaType: 'image' | 'video' | 'gif';
  mediaSrc: string;
  tags: string[];
  projectUrl?: string;
  frontendUrl?: string;
  backendUrl?: string;
  codeUrl?: string;
};

const projects: Project[] = [
  {
    id: 'portfolio-v1',
    title: 'Portfolio v1',
    description:
      'My first portfolio website, built with Next.js and Tailwind CSS.',
    mediaType: 'image',
    mediaSrc: '/portfolio-v1.png',
    tags: [
      'ReactJs',
      'Nextjs',
      'TailwindCSS',
      'TypeScript',
      'ShadcnUI',
      'MagicUI',
      'FramerMotion',
    ],
    projectUrl: '#',
    codeUrl: 'https://github.com/Yurig19/portfolio-yuri',
  },
  {
    id: 'epi',
    title: 'EPI System',
    description:
      'Fullstack project with separate frontend and backend repositories.',
    mediaType: 'gif',
    mediaSrc: '/Arc 2025-08-22 01-11-44.gif',
    tags: [
      'Fullstack',
      'NestJS',
      'ReactJs',
      'Node',
      'Vite',
      'TypeScript',
      'PostgreSQL',
      'Prisma',
    ],
    frontendUrl: 'https://github.com/Yurig19/epi-frontend',
    backendUrl: 'https://github.com/Yurig19/epi-backend',
  },
];

export default function Projects() {
  const t = useTranslations('ProjectsPage');
  const router = useRouter();

  const goTo = (url?: string) => {
    if (url) router.push(url);
  };

  return (
    <div className='w-full max-w-6xl mx-auto px-6 py-20'>
      <h1 className='text-5xl font-bold text-center mb-20'>
        {t('allProjects')}
      </h1>
      <FadeInOnScroll>
        {projects.length > 0 ? (
          <div className='flex flex-col gap-28'>
            {projects.map((project) => (
              <div
                key={project.id}
                className='flex flex-col items-center rounded-2xl overflow-hidden border border-border shadow-lg bg-background'
              >
                <div className='w-full h-[420px] relative'>
                  {project.mediaType === 'image' && (
                    <Image
                      src={project.mediaSrc}
                      alt={project.title}
                      fill
                      className='object-cover'
                    />
                  )}

                  {project.mediaType === 'gif' && (
                    <img
                      src={project.mediaSrc}
                      alt={project.title}
                      className='w-full h-full object-cover'
                    />
                  )}

                  {project.mediaType === 'video' && (
                    <video
                      src={project.mediaSrc}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className='w-full h-full object-cover'
                    />
                  )}
                </div>

                <div className='w-full p-8 text-center'>
                  <h2 className='text-3xl font-semibold mb-4'>
                    {t(`project.${project.id}.title`)}
                  </h2>
                  <p className='text-lg text-muted-foreground mb-6'>
                    {t(`project.${project.id}.description`)}
                  </p>

                  <div className='flex flex-wrap justify-center gap-3 mb-6'>
                    {project.tags.map((tag) => (
                      <Badge
                        key={`${project.id}-${tag}`}
                        variant='secondary'
                        className='text-sm px-3 py-1.5'
                      >
                        {t(`project.${project.id}.tags.${tag}`)}
                      </Badge>
                    ))}
                  </div>

                  <div className='flex flex-wrap justify-center gap-4'>
                    {project.projectUrl && (
                      <InteractiveHoverButtonWithText
                        text={t('viewProject')}
                        onClick={() => goTo(project.projectUrl)}
                      />
                    )}
                    {project.frontendUrl && (
                      <InteractiveHoverButtonWithText
                        text={t('viewFrontendCode')}
                        onClick={() => goTo(project.frontendUrl)}
                      />
                    )}
                    {project.backendUrl && (
                      <InteractiveHoverButtonWithText
                        text={t('viewBackendCode')}
                        onClick={() => goTo(project.backendUrl)}
                      />
                    )}
                    {project.codeUrl && (
                      <InteractiveHoverButtonWithText
                        text={t('viewCode')}
                        onClick={() => goTo(project.codeUrl)}
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className='text-muted-foreground text-center text-lg'>
            {t('noProjects')}
          </p>
        )}
      </FadeInOnScroll>
    </div>
  );
}
