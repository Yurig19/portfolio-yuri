'use client';

import { FadeInOnScroll } from '@/components/fadeInOnScrool';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { useState } from 'react';

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
};

// const blogs: BlogPost[] = Array.from({ length: 25 }, (_, i) => ({
//   id: i + 1,
//   title: `Blog Post ${i + 1}`,
//   excerpt: `This is the summary of blog post number ${i + 1}.`,
//   image: '/portfolio-v1.png',
// }));

const blogs: BlogPost[] = [];

const ITEMS_PER_PAGE = 6;

export default function Blog() {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(blogs.length / ITEMS_PER_PAGE);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const currentBlogs = blogs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section className='min-h-screen px-6 py-16 sm:px-10 md:px-20 text-foreground'>
      <h1 className='text-4xl font-bold mb-12 text-center'>My Blog</h1>

      <FadeInOnScroll>
        {blogs.length > 0 ? (
          <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {currentBlogs.map((post) => (
              <Card
                key={post.id}
                className='rounded-2xl shadow-md overflow-hidden'
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className='w-full h-48 object-cover'
                />
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-muted-foreground'>{post.excerpt}</p>
                  <Button variant='secondary' className='mt-4' size='sm'>
                    Read more
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p className='text-muted-foreground text-center text-lg'>
            No blog posts available at the moment. Stay tuned!
          </p>
        )}
      </FadeInOnScroll>

      {blogs.length > 0 && (
        <Pagination className='mt-12 justify-center'>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                aria-disabled={page === 1}
              />
            </PaginationItem>
            <PaginationItem>
              <span className='text-sm px-2 py-1 rounded-md'>
                {page} / {totalPages}
              </span>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                onClick={() =>
                  setPage((prev) => Math.min(prev + 1, totalPages))
                }
                aria-disabled={page === totalPages}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </section>
  );
}
