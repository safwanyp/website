import type { Comment, Commenter } from '@/types';

type CommentToPost = {
  hostId: Comment['hostId'];
  commenter: Comment['commenter'];
  content: Comment['content'];
};

type PostComment = ({
  comment,
  sessionId
}: {
  comment: CommentToPost;
  sessionId: string;
}) => Promise<Comment>;
type GetComments = ({
  hostId
}: {
  hostId: Comment['hostId'];
}) => Promise<Comment[] | []>;
type MapComment = (comment: Comment) => Comment;

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

const postComment: PostComment = async ({ comment, sessionId }) => {
  const response = await fetch(
    `http://localhost:3000/api/kommentar/comments/${comment.hostId}`,
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

const getComments: GetComments = async ({ hostId }) => {
  const fetchUrl = `http://localhost:3000/api/kommentar/comments/${hostId}`;

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
