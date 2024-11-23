import GhostContentAPI from '@tryghost/content-api';

const ghost = new GhostContentAPI({
  url: 'https://ghost.safwanyp.com',
  key: import.meta.env.CONTENT_API_KEY,
  version: 'v5.0'
});

export { ghost };
