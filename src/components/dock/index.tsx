'use client';

import { buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { ContactIcon, FolderKanban, HomeIcon, Newspaper } from 'lucide-react';
import Link from 'next/link';
import { Dock, DockIcon } from '../magicui/dock';
import { ModeToggle } from '../theme/mode-toggle';

const menuData = {
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    { href: '/projects', icon: FolderKanban, label: 'Projects' },
    { href: '/contact', icon: ContactIcon, label: 'Contact' },
    { href: '/blog', icon: Newspaper, label: 'Blog' },
  ],
  // contact: {
  //   social: {
  //     GitHub: {
  //       name: 'GitHub',
  //       url: '#',
  //       icon: GitHubLogoIcon,
  //       navbar: true,
  //     },
  //     LinkedIn: {
  //       name: 'LinkedIn',
  //       url: '#',
  //       icon: LinkedInLogoIcon,
  //       navbar: true,
  //     },
  //     X: {
  //       name: 'X',
  //       url: '#',
  //       icon: X,
  //       navbar: true,
  //     },
  //     email: {
  //       name: 'Send Email',
  //       url: '#',
  //       icon: GitBranchPlus,
  //       navbar: false,
  //     },
  //   },
  // },
};

export default function DockMenu() {
  return (
    <div className='pointer-events-none fixed inset-x-0 bottom-5 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14'>
      <div className='fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background' />
      <Dock className='z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]'>
        {menuData.navbar.map((item) => (
          <DockIcon key={item.label}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={cn(
                    buttonVariants({ variant: 'ghost', size: 'icon' }),
                    'size-12'
                  )}
                >
                  <item.icon className='size-4' />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation='vertical' className='h-full' />
        {/* {Object.entries(menuData.contact.social)
          .filter(([_, social]) => social.navbar)
          .map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    className={cn(
                      buttonVariants({ variant: 'ghost', size: 'icon' }),
                      'size-12'
                    )}
                  >
                    <social.icon className='size-4' />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))} */}
        {/* <Separator orientation='vertical' className='h-full py-2' /> */}
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <ModeToggle />
            </TooltipTrigger>
            <TooltipContent>
              <p>Theme</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>
    </div>
  );
}
