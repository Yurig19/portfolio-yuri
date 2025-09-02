'use client';

import { FadeInOnScroll } from '@/components/fadeInOnScrool';
import { MagicCard } from '@/components/magicui/magic-card';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { sendContactMessage } from '@/services/contact.service';
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { toast } from 'sonner';

export default function Contact() {
  const { theme } = useTheme();
  const t = useTranslations('ContactPage');
  return (
    <section className='min-h-screen px-6 py-16 sm:px-10 md:px-20 text-foreground'>
      <h1 className='text-4xl font-bold mb-12 text-center'>{t('title')}</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto'>
        <FadeInOnScroll>
          <div className='space-y-6 text-sm text-muted-foreground'>
            <h2 className='text-2xl font-bold'>{t('letsConnect')}</h2>
            <div>
              <p className='text-base text-foreground font-semibold'>
                {t('email')}
              </p>
              <p>yuri.zc35@gmail.com</p>
            </div>
            <div>
              <p className='text-base text-foreground font-semibold'>
                {t('phone')}
              </p>
              <p>(16) 99770-1045</p>
            </div>
            <div>
              <p className='text-base text-foreground font-semibold'>
                {t('findMeOn')}
              </p>
              <div className='flex gap-4 mt-2'>
                <Button
                  variant='outline'
                  size='icon'
                  onClick={() =>
                    window.open('https://github.com/Yurig19', '_blank')
                  }
                >
                  <GitHubLogoIcon className='w-5 h-5' />
                </Button>
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
                  <LinkedInLogoIcon className='w-5 h-5' />
                </Button>
                <Button
                  variant='outline'
                  size='icon'
                  onClick={() =>
                    window.open(
                      'https://www.instagram.com/yurigon19/',
                      '_blank'
                    )
                  }
                >
                  <InstagramLogoIcon className='w-5 h-5' />
                </Button>
              </div>
            </div>
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <Card className='shadow-md'>
            <MagicCard
              gradientColor={theme === 'dark' ? '#262626' : '#D9D9D955'}
            >
              <CardHeader>
                <CardTitle className='text-2xl'>{t('sendMessage')}</CardTitle>
              </CardHeader>
              <CardContent>
                <form
                  className='space-y-6'
                  onSubmit={async (e) => {
                    e.preventDefault();

                    const form = e.currentTarget;
                    const formData = new FormData(form);

                    const name = formData.get('name') as string;
                    const email = formData.get('email') as string;
                    const subject = formData.get('subject') as string;
                    const message = formData.get('message') as string;

                    const result = await sendContactMessage({
                      name,
                      email,
                      subject,
                      message,
                    });

                    if (result.success) {
                      toast.success(t('success'));
                      form.reset();
                    } else {
                      toast.error(t('error'));
                      console.error(result.error);
                    }
                  }}
                >
                  <div className='space-y-2'>
                    <Label htmlFor='name'>{t('name')}</Label>
                    <Input id='name' name='name' placeholder={t('yourName')} />
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='email'>{t('email')}</Label>
                    <Input
                      type='email'
                      id='email'
                      name='email'
                      placeholder={t('emailPlaceholder')}
                    />
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='subject'>{t('subject')}</Label>
                    <Input
                      id='subject'
                      name='subject'
                      placeholder={t('subjectPlaceholder')}
                    />
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='message'>{t('message')}</Label>
                    <Textarea
                      id='message'
                      name='message'
                      placeholder={t('messagePlaceholder')}
                      rows={4}
                    />
                  </div>
                  <Button type='submit' className='w-full'>
                    {t('sendButton')}
                  </Button>
                </form>
              </CardContent>
            </MagicCard>
          </Card>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
