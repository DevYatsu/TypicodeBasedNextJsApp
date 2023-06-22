export type CommentType = {
  body: string;
  username: string;
  email: string;
  id: number;
  postId: number;
  isAuthor?: boolean;
  isReply?: boolean;
  replyToCommentAuthor?: string;
};
