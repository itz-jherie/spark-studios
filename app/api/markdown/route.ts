import { NextRequest, NextResponse } from 'next/server';
import { blogPosts } from '@/app/blog/blogData';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const path = searchParams.get('path') || '/';

  let content = '';
  let title = 'Flynth Technologies';

  // Home
  if (path === '/' || path === '') {
    title = 'Flynth Technologies | Built strong. Delivered fast.';
    content = `
# Flynth Technologies

Elite digital engineering agency specializing in high-performance web applications, secure platforms, custom digital experiences, and scalable systems.

## Our Services
- **Design**: Branding, UI/UX, Pitch Decks.
- **Development**: Next.js, Framer, WordPress, Web & Mobile Apps.
- **Strategy**: Digital transformation and market entry.

## Latest Insights
Check our [blog](/blog) for the latest on design and tech.
    `;
  } 
  // Blog Index
  else if (path === '/blog') {
    title = 'Flynth Technologies Blog';
    content = '# Flynth Technologies Blog\n\n' + blogPosts.map(post => `- [${post.title}](/blog/${post.slug}): ${post.excerpt}`).join('\n');
  }
  // Blog Post
  else if (path.startsWith('/blog/')) {
    const slug = path.replace('/blog/', '');
    const post = blogPosts.find(p => p.slug === slug);
    if (post) {
      title = post.title;
      // Convert HTML-ish content to Markdown (simple replacement for this demo)
      content = `# ${post.title}\n\n**${post.category}** | ${post.date}\n\n${post.content.replace(/<h2[^>]*>/g, '## ').replace(/<\/h2>/g, '\n').replace(/<h3[^>]*>/g, '### ').replace(/<\/h3>/g, '\n').replace(/<p[^>]*>/g, '').replace(/<\/p>/g, '\n\n').replace(/<strong[^>]*>/g, '**').replace(/<\/strong>/g, '**').replace(/<ul[^>]*>/g, '').replace(/<\/ul>/g, '').replace(/<li[^>]*>/g, '- ').replace(/<\/li>/g, '\n')}`;
    } else {
      return new NextResponse('Post Not Found', { status: 404 });
    }
  }
  // About
  else if (path === '/about') {
    title = 'About Flynth Technologies';
    content = `
# About Flynth Technologies

Flynth Technologies is an elite digital engineering agency based in Abuja, serving clients worldwide. We build the interfaces that allow growth to happen.

## Our Mission
To bridge the gap between world-class design standards and local market understanding.

## Why Work With Us?
- **Speed**: We are obsessed with performance.
- **Aesthetics**: We believe design is how it works, not just how it looks.
- **Global Reach**: Based in Nigeria, we bring a unique perspective to every project globally.
    `;
  }
  // Fallback for other pages
  else {
    content = `# ${path}\n\nContent for this page is available at https://flynth.com.ng${path}`;
  }

  return new NextResponse(content.trim(), {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
}
