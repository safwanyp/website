type Site = {
  NAME: string;
  EMAIL: string;
  NUM_POSTS_ON_HOMEPAGE: number;
  NUM_WORKS_ON_HOMEPAGE: number;
  NUM_PROJECTS_ON_HOMEPAGE: number;
};

type Metadata = {
  TITLE: string;
  DESCRIPTION: string;
};

type Socials = {
  NAME: string;
  HREF: string;
}[];

type Commenter = {
  displayName: string;
  realName: string;
};

type Comment = {
  id: string;
  hostId: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  commenter: Commenter;
};

export type { Site, Metadata, Socials, Commenter, Comment };
