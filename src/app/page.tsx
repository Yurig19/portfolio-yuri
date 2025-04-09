'use client';

import { BlogsCard, BlogsCardGrid } from '@/components/blogsCards';
import { InteractiveHoverButtonWithText } from '@/components/buttons/interactiveHoverButton';
import { FadeInOnScroll } from '@/components/fadeInOnScrool';
import { MagicCard } from '@/components/magicui/magic-card';
import { Marquee } from '@/components/magicui/marquee';
import { TextAnimate } from '@/components/magicui/text-animate';
import { ProjectCard, ProjectCardGrid } from '@/components/projectsCards';
import { SkillsViewer } from '@/components/skillsView';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';

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
            key={`index-${i + 199} `}
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
            key={`index-${i + 199}`}
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
  const { theme } = useTheme();

  const router = useRouter();

  return (
    <div className='flex flex-col min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] text-foreground'>
      <header className='text-left w-full max-w-4xl mb-16'>
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className='text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text'
        >
          Full Stack Developer
        </motion.h2>
        <TextAnimate animation='blurInUp' by='character' once>
          Crafting high-performance, responsive, and user-friendly web
          applications using modern technologies, clean code, and best practices
          for seamless user experiences.
        </TextAnimate>

        <div className='flex gap-4 mt-4'>
          <FadeInOnScroll>
            <InteractiveHoverButtonWithText
              text='Get in touch'
              onClick={() => router.push('/contact')}
            />
          </FadeInOnScroll>
          <FadeInOnScroll>
            <Button
              variant='outline'
              size='icon'
              onClick={() =>
                window.open('https://github.com/Yurig19', '_blank')
              }
            >
              <GitHubLogoIcon />
            </Button>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <Button
              variant='outline'
              size='icon'
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/yuri-gonçalves-404a75249',
                  '_blank'
                )
              }
            >
              <LinkedInLogoIcon />
            </Button>
          </FadeInOnScroll>
        </div>
      </header>

      <FadeInOnScroll>
        <section className='w-full max-w-4xl mb-16'>
          <h2 className='text-2xl font-semibold border-b pb-2 border-border'>
            Skills
          </h2>
          <SkillsViewer />
        </section>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <section className='w-full max-w-4xl mb-16'>
          <h2 className='text-2xl font-semibold border-b pb-2 border-border'>
            Work Experience
          </h2>

          <div className='relative mt-8 ml-4 pl-6 border-l-2 border-border'>
            {[
              {
                role: 'Web Full Stack Developer',
                company: 'Fairy Solutions',
                period: 'Ago 2024 – Mar 2025',
                description:
                  'I worked in web development with a focus on back-end implementation using JavaScript (TypeScript), primarily with the NestJS framework, along with Prisma and, occasionally, TypeORM. In this role, I gained experience with various integrations, such as payment systems and artificial intelligence solutions. I also handled some front-end tasks and contributed to multiple projects. Additionally, I was responsible for writing and maintaining technical documentation.',
              },
              {
                role: 'Web Development Intern',
                company: 'Fairy Solutions',
                period: 'Feb 2024 – Ago 2024',
                description:
                  'I worked in web development with a focus on back-end implementation using JavaScript (TypeScript), primarily with the NestJS framework, along with Prisma and, occasionally, TypeORM. In this role, I gained experience with various integrations, such as payment systems and artificial intelligence solutions. I also handled some front-end tasks and contributed to multiple projects. Additionally, I was responsible for writing and maintaining technical documentation.',
              },
            ].map((exp, index) => (
              <motion.div
                key={`${index}-${exp.role}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className='relative mb-10'
              >
                <div className='absolute -left-[10px] top-4 w-4 h-4 rounded-full bg-primary border-2 border-background shadow-md' />

                <Card className='p-4 ml-4'>
                  <MagicCard
                    gradientColor={theme === 'dark' ? '#262626' : '#D9D9D955'}
                  >
                    <CardHeader>
                      <CardTitle className='text-lg'>{exp.role}</CardTitle>
                      <CardDescription className='text-sm'>
                        {exp.company} • {exp.period}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className='text-sm'>
                      {exp.description}
                    </CardContent>
                  </MagicCard>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <section className='w-full max-w-4xl mb-16'>
          <h2 className='text-2xl font-semibold border-b pb-2 border-border'>
            Education
          </h2>
          <div className='flex flex-col gap-6 mt-4'>
            {[
              {
                degree: 'Bachelor s Degree in Systems Analysis and Development',
                institution: 'Universidade Paulista (UNIP)',
                period: '2022 – 2024',
                description:
                  'During the course, I acquired solid knowledge in data structures, algorithms, distributed systems, databases, and web development.',
              },
            ].map((edu, index) => (
              <motion.div
                key={`${index}-${edu.degree}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <MagicCard
                    gradientColor={theme === 'dark' ? '#262626' : '#D9D9D955'}
                  >
                    <CardHeader>
                      <CardTitle className='text-lg'>{edu.degree}</CardTitle>
                      <CardDescription className='text-sm'>
                        {edu.institution} • {edu.period}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className='text-sm'>
                      {edu.description}
                    </CardContent>
                  </MagicCard>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </FadeInOnScroll>
      <FadeInOnScroll>
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
      </FadeInOnScroll>
      <FadeInOnScroll>
        <section className='w-full max-w-4xl mb-16'>
          <h2 className='text-2xl font-semibold border-b pb-2 border-border'>
            Latest Blog Posts
          </h2>
          <div className='gap-6 mt-4 '>
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
      </FadeInOnScroll>
    </div>
  );
}
