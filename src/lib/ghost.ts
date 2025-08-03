import GhostContentAPI from '@tryghost/content-api';
import { CONTENT_API_KEY } from 'astro:env/client';

const ghost = new GhostContentAPI({
  url: 'https://ghost.safwanyp.com',
  key: CONTENT_API_KEY,
  version: 'v5.0'
});

export { ghost };
