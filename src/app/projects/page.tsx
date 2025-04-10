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
];

export default function Projects() {
  const router = useRouter();

  return (
    <div className='w-full max-w-6xl mx-auto px-6 py-20'>
      <h1 className='text-5xl font-bold text-center mb-20'>All Projects</h1>
      <FadeInOnScroll>
        {projects.length > 0 ? (
          <div className='flex flex-col gap-28'>
            {projects.map((project) => (
              <div
                key={project.id}
                className='flex flex-col md:flex-row gap-10 items-center'
              >
                <div className='w-full md:w-1/2 h-[320px] relative rounded-2xl overflow-hidden border border-border shadow-lg'>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className='object-cover'
                  />
                </div>

                <div className='w-full md:w-1/2'>
                  <h2 className='text-3xl font-semibold mb-4'>
                    {project.title}
                  </h2>
                  <p className='text-lg text-muted-foreground mb-6'>
                    {project.description}
                  </p>

                  <div className='flex flex-wrap gap-3 mb-6'>
                    {project.tags.map((tag) => (
                      <Badge
                        key={`${project.id}-${tag}`}
                        variant='secondary'
                        className='text-sm px-3 py-1.5'
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className='flex gap-6'>
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
        <div className='mt-24 flex justify-center'>
          <Pagination>
            <PaginationContent className='gap-4 text-lg'>
              <PaginationItem>
                <PaginationPrevious href='#' className='px-4 py-2 text-base' />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href='#' className='px-4 py-2 text-base' />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
}
