'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

import BR from 'country-flag-icons/react/3x2/BR';
import ES from 'country-flag-icons/react/3x2/ES';
import US from 'country-flag-icons/react/3x2/US';

const flags: Record<string, React.ComponentType<{ className?: string }>> = {
  en: US,
  pt: BR,
  es: ES,
};

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const CurrentFlag = flags[locale] ?? BR;

  const changeLocale = (newLocale: string) => {
    router.push(`/${newLocale}${pathname.replace(/^\/(en|pt|es)/, '')}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='icon' className='size-12'>
          <CurrentFlag className='rounded-sm' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        {Object.entries(flags).map(([lng, Flag]) => (
          <DropdownMenuItem key={lng} onClick={() => changeLocale(lng)}>
            <div
              className={`flex items-center justify-center ${locale === lng ? 'font-bold' : ''}`}
            >
              <Flag className='rounded-sm' />
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
