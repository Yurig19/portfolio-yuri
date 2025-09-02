'use client';

import { BlogsCard, BlogsCardGrid } from '@/components/blogsCards';
import { InteractiveHoverButtonWithText } from '@/components/buttons/interactiveHoverButton';
import { FadeInOnScroll } from '@/components/fadeInOnScrool';
import { MagicCard } from '@/components/magicui/magic-card';
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
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type Feature = {
  name: string;
  description: string;
  href: string;
  codeUrl: string;
  cta: string;
  background: React.ReactNode;
  className: string;
};

type Blog = {
  title: string;
  description: string;
  blogUrl: string;
  background: React.ReactNode;
  cta: string;
  className: string;
};

const blogs: Blog[] = [];

export default function Home() {
  const { theme } = useTheme();

  const t = useTranslations('HomePage');

  const features: Feature[] = [
    {
      name: t('features.0.name'),
      description: t('features.0.description'),
      href: '/',
      codeUrl: 'https://github.com/Yurig19/portfolio-yuri',
      cta: t('features.0.cta'),
      background: (
        <Image
          src='/portfolio-v1.png'
          alt='Portfolio v1'
          width={500}
          height={500}
          className='h-full w-full object-cover rounded-lg'
        />
      ),
      className: 'lg:row-start-1 lg:row-end-4 lg:col-start-1 lg:col-end-2',
    },
  ];

  const router = useRouter();

  return (
    <div className='flex flex-col min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] text-foreground'>
      <header className='text-left w-full max-w-7xl mb-16'>
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className='text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text'
        >
          {t('title')}
        </motion.h2>
        <TextAnimate
          className='text-lg'
          animation='blurInUp'
          by='character'
          once
        >
          {t('about')}
        </TextAnimate>

        <div className='flex gap-4 mt-4'>
          <FadeInOnScroll>
            <InteractiveHoverButtonWithText
              text={t('getInTouch')}
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
        <section className='w-full max-w-7xl mb-16'>
          <h2 className='text-2xl font-semibold border-b pb-2 border-border'>
            {t('skills')}
          </h2>
          <SkillsViewer />
        </section>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <section className='w-full max-w-7xl mb-16'>
          <h2 className='text-2xl font-semibold border-b pb-2 border-border'>
            {t('workExperience')}
          </h2>

          <div className='relative mt-8 ml-4 pl-6 border-l-2 border-border'>
            {[
              {
                role: t('work.0.role'),
                company: t('work.0.company'),
                period: t('work.0.period'),
                description: t('work.0.description'),
              },
              {
                role: t('work.1.role'),
                company: t('work.1.company'),
                period: t('work.1.period'),
                description: t('work.1.description'),
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
        <section className='w-full max-w-7xl mb-16'>
          <h2 className='text-2xl font-semibold border-b pb-2 border-border'>
            {t('education')}
          </h2>
          <div className='flex flex-col gap-6 mt-4'>
            {[
              {
                degree: t('educationData.0.degree'),
                institution: t('educationData.0.institution'),
                period: t('educationData.0.period'),
                description: t('educationData.0.description'),
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
        <section className='w-full max-w-7xl mb-16'>
          <h2 className='text-2xl font-semibold border-b pb-2 border-border'>
            {t('latestProjects')}
          </h2>
          <div className='gap-6 mt-4'>
            {features.length > 0 ? (
              <ProjectCard className='flex gap-4'>
                {features.map((feature) => (
                  <ProjectCardGrid
                    key={feature.name}
                    {...feature}
                    projectHref={feature.href}
                    codeHref={feature.codeUrl}
                  />
                ))}
              </ProjectCard>
            ) : (
              <p className='text-muted-foreground mt-4'>{t('noProjects')}</p>
            )}
          </div>
        </section>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <section className='w-full max-w-7xl mb-16'>
          <h2 className='text-2xl font-semibold border-b pb-2 border-border'>
            {t('latestBlogPosts')}
          </h2>
          <div className='gap-6 mt-4'>
            {blogs.length > 0 ? (
              <BlogsCardGrid className='flex gap-4'>
                {blogs.map((blog) => (
                  <BlogsCard key={blog.title} {...blog} />
                ))}
              </BlogsCardGrid>
            ) : (
              <p className='text-muted-foreground mt-4'>{t('noBlogs')}</p>
            )}
          </div>
        </section>
      </FadeInOnScroll>
    </div>
  );
}
