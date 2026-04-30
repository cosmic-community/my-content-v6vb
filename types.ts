export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface Page extends CosmicObject {
  type: 'pages';
  metadata: {
    content?: string;
    hero_image?: {
      url: string;
      imgix_url: string;
    };
    description?: string;
  };
}

export interface BlogPost extends CosmicObject {
  type: 'blog-posts';
  metadata: {
    content?: string;
    excerpt?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    author?: CosmicObject;
    category?: CosmicObject;
    published_date?: string;
  };
}

export interface SiteSettings extends CosmicObject {
  type: 'site-settings';
  metadata: {
    site_name?: string;
    site_description?: string;
    logo?: {
      url: string;
      imgix_url: string;
    };
    footer_text?: string;
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
}

export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}