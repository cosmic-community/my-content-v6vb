# My Content - Headless CMS

A modern Next.js application powered by Cosmic CMS, featuring pages, blog posts, and site settings.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- 📝 Dynamic blog with individual post pages
- 📄 Custom pages with rich content
- ⚙️ Site settings integration
- ⚡ Server-side rendering with Next.js 16
- 🔍 SEO-optimized with proper metadata
- 📱 Mobile-first responsive layout

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69f310e2d696f0214a976f00&clone_repository=69f31171d696f0214a976f3d)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a headless CMS backend with pages, blog posts, and site settings."

### Code Generation Prompt

> Build a Next.js application for a content management system called "My Content". The content is managed in Cosmic CMS with the following object types: . Create a beautiful, modern, responsive design with a homepage and pages for each content type.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic SDK** - Headless CMS integration
- **Bun** - Fast package manager and runtime

## Getting Started

### Prerequisites

- Bun installed on your machine
- A Cosmic account with bucket configured

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   bun install
   ```
3. Set up environment variables (see `.env.example`)
4. Run the development server:
   ```bash
   bun run dev
   ```

## Cosmic SDK Examples

```typescript
// Fetch all blog posts
const { objects: posts } = await cosmic.objects
  .find({ type: 'blog-posts' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1);

// Fetch a single page by slug
const { object: page } = await cosmic.objects
  .findOne({ type: 'pages', slug: 'about' })
  .depth(1);
```

## Cosmic CMS Integration

This app integrates with Cosmic CMS to manage:
- **Pages** - Static and dynamic pages
- **Blog Posts** - Articles with authors and categories
- **Site Settings** - Global configuration

Learn more at [Cosmic Docs](https://www.cosmicjs.com/docs).

## Deployment Options

### Vercel
1. Push your code to GitHub
2. Import the repository in Vercel
3. Add environment variables
4. Deploy

### Netlify
1. Connect your GitHub repository
2. Configure build settings (`bun run build`)
3. Add environment variables
4. Deploy

<!-- README_END -->