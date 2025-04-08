import { cn } from '@/lib/utils';
import { Marquee } from '../magicui/marquee';

const skills = [
  { name: 'Nest', img: '/nestjs.svg' },
  { name: 'Next', img: '/next.svg' },
  { name: 'Postgresql', img: '/postgresql.svg' },
  { name: 'Docker', img: '/docker.svg' },
  { name: 'HTML5', img: '/html5.svg' },
  { name: 'CSS', img: '/css.svg' },
  { name: 'NodeJs', img: '/nodejs.svg' },
  { name: 'ReactJs', img: '/react.svg' },
  { name: 'Git', img: '/git.svg' },
  { name: 'Github', img: '/github.svg' },
  { name: 'TailwindCss', img: '/tailwindcss.svg' },
  { name: 'Prisma', img: '/prisma.svg' },
  { name: 'AWS', img: '/aws.svg' },
  { name: 'MySql', img: '/mysql.svg' },
];

const firstRow = skills.slice(0, skills.length / 2);
const secondRow = skills.slice(skills.length / 2);

const SkillCard = ({ img, name }: { img: string; name: string }) => {
  return (
    <div
      className={cn(
        'relative flex h-20 w-20 items-center justify-center rounded-xl border p-2 shadow-md',
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
      )}
    >
      <img className='h-12 w-12 object-contain' src={img} alt={name} />
    </div>
  );
};

export function SkillsViewer() {
  return (
    <div className='relative flex w-full flex-col items-center justify-center overflow-hidden py-4'>
      <Marquee pauseOnHover className='[--duration:30s]'>
        {firstRow.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className='[--duration:30s]'>
        {secondRow.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </Marquee>
      <div className='pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background' />
      <div className='pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background' />
    </div>
  );
}
