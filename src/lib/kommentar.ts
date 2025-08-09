import type { Comment, Commenter } from '@/types';

type CommentToPost = {
  hostId: Comment['hostId'];
  commenter: Comment['commenter'];
  content: Comment['content'];
};

type PostComment = ({
  baseUrl,
  comment,
  sessionId
}: {
  baseUrl: string;
  comment: CommentToPost;
  sessionId: string;
}) => Promise<Comment>;
type GetComments = ({
  baseUrl,
  hostId
}: {
  baseUrl: string;
  hostId: Comment['hostId'];
}) => Promise<Comment[] | []>;
type MapComment = (comment: Comment) => Comment;

const removeTrailingSlash = (url: string) => {
  return url.endsWith('/') ? url.slice(0, -1) : url;
};

const mapComment: MapComment = (comment) => {
  const mapped = {
    ...comment,
    createdAt: new Date(comment.createdAt).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }),
    updatedAt: new Date(comment.updatedAt).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  };

  return mapped;
};

const postComment: PostComment = async ({ baseUrl, comment, sessionId }) => {
  const base = removeTrailingSlash(baseUrl);
  const response = await fetch(
    `${base}/api/kommentar/comments/${comment.hostId}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Cookie: `sessionId=${sessionId}`
      },
      body: JSON.stringify(comment)
    }
  );

  const postedComment = await response.json();

  return postedComment;
};

const getComments: GetComments = async ({ baseUrl, hostId }) => {
  const base = removeTrailingSlash(baseUrl);
  const fetchUrl = `${base}/api/kommentar/comments/${hostId}`;

  const response = await fetch(fetchUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const fetchedComments = await response.json();

  const mappedComments = fetchedComments.map(mapComment);

  return mappedComments;
};

export { postComment, getComments };
