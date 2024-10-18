import type { Site, Metadata, Socials } from '@/types';

const SITE: Site = {
  NAME: 'Safwan Parkar',
  EMAIL: 'safwanparkar6@gmail.com',
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3
};

const HOME: Metadata = {
  TITLE: 'Home',
  DESCRIPTION: 'Welcome to my personal website.'
};

const BLOG: Metadata = {
  TITLE: 'Blog',
  DESCRIPTION: 'All of my articles/posts on topics I am passionate about.'
};

const WORK: Metadata = {
  TITLE: 'Work',
  DESCRIPTION: 'Where I have worked and what I have done.'
};

const PROJECTS: Metadata = {
  TITLE: 'Projects',
  DESCRIPTION: 'All of my projects, with links to resources.'
};

const SOCIALS: Socials = [
  {
    NAME: 'github',
    HREF: 'https://github.com/safwanyp'
  },
  {
    NAME: 'linkedin',
    HREF: 'https://www.linkedin.com/in/safwanyp'
  }
];

export { SITE, HOME, BLOG, WORK, PROJECTS, SOCIALS };
