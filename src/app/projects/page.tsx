'use client';

import { InteractiveHoverButtonWithText } from '@/components/buttons/interactiveHoverButton';
import { FadeInOnScroll } from '@/components/fadeInOnScrool';
import { Badge } from '@/components/ui/badge';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  projectUrl: string;
  codeUrl: string;
};

const projects: Project[] = [
  {
    id: 'portfolio-v1',
    title: 'Portfolio v1',
    description:
      'My first portfolio website, built with Next.js and Tailwind CSS.',
    image: '/portfolio-v1.png',
    tags: [
      'React Js',
      'Next.js',
      'Tailwind CSS',
      'TypeScript',
      'Shadcn UI',
      'Magic UI',
      'Framer Motion',
    ],
    projectUrl: '#',
    codeUrl: 'https://github.com/Yurig19/portfolio-yuri',
  },

  // {
  //   id: 'notely',
  //   title: 'Notely',
  //   description:
  //     'Note-taking app with markdown support, real-time sync, and authentication.',
  //   image: '/portfolio-v1.png',
  //   tags: ['Next.js', 'Tailwind CSS', 'Supabase', 'Markdown'],
  //   projectUrl: '#',
  //   codeUrl: '#',
  // },
  // {
  //   id: 'devfinder',
  //   title: 'DevFinder',
  //   description:
  //     'Find GitHub profiles with an interactive UI and built-in dark mode.',
  //   image: '/portfolio-v1.png',
  //   tags: ['React', 'TypeScript', 'GitHub API'],
  //   projectUrl: '#',
  //   codeUrl: '#',
  // },
  // {
  //   id: 'portfolio-v2',
  //   title: 'Portfolio v2',
  //   description:
  //     'Modern portfolio with smooth animations, dark/light mode, and responsive layout.',
  //   image: '/portfolio-v1.png',
  //   tags: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
  //   projectUrl: '#',
  //   codeUrl: '#',
  // },
];

export default function Projects() {
  const router = useRouter();

  return (
    <div className='w-full max-w-6xl mx-auto px-6 py-16'>
      <h1 className='text-4xl font-bold text-center mb-16'>All Projects</h1>
      <FadeInOnScroll>
        {projects.length > 0 ? (
          <div className='flex flex-col gap-20'>
            {projects.map((project) => (
              <div
                key={project.id}
                className='flex flex-col md:flex-row gap-8 items-center'
              >
                <div className='w-full md:w-1/2 aspect-video relative rounded-xl overflow-hidden border border-border'>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className='object-cover'
                  />
                </div>

                <div className='w-full md:w-1/2'>
                  <h2 className='text-2xl font-semibold mb-2'>
                    {project.title}
                  </h2>
                  <p className='text-muted-foreground mb-4'>
                    {project.description}
                  </p>

                  <div className='flex flex-wrap gap-2 mb-6'>
                    {project.tags.map((tag) => (
                      <Badge key={`${project.id}-${tag}`} variant='secondary'>
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className='flex gap-4'>
                    <InteractiveHoverButtonWithText
                      text='View Project'
                      onClick={() => router.push(project.projectUrl)}
                    />
                    <InteractiveHoverButtonWithText
                      text='View Code'
                      onClick={() => router.push(project.codeUrl)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className='text-muted-foreground text-center text-lg'>
            No projects available at the moment. Check back soon!
          </p>
        )}
      </FadeInOnScroll>

      {projects.length > 0 && (
        <div className='mt-20'>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href='#' />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href='#' />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
}
