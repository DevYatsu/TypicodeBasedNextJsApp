export type ResponsePostData = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
export type ParamPostData = {
  userId: number;
  id: number;
  title: string;
  body: string;
  username?: string;
  isSelfPage?: boolean;
};
