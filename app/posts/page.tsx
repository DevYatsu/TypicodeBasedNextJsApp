"use client";
import { Post } from "../components/Post";
import { ResponsePostData } from "../types/PostData";
import useTypicodeQuery from "../hooks/useTypicodeQuery";
import Loading from "./loading";

export default async function Posts() {
  const {
    isLoading: isPostLoading,
    error: postError,
    data: posts,
  } = useTypicodeQuery("posts", "/posts");

  if (isPostLoading) return <Loading />;

  if (postError instanceof Error) {
    "An error has occurred: " + postError.message;
    throw new Error("An error has occurred: " + postError.message);
  }

  return (
    <div className="w-full h-full ">
      <div className="space-y-2 xl:pl-12">
        <h1 className="text-3xl dark:text-white font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1scroll-m-20 text-4xl font-bold tracking-tight">
          Posts
        </h1>
        <span className="text-lg text-muted-foreground dark:text-slate-50">
          All the posts avaible on the website
        </span>
      </div>
      <div className="grid grid-cols-1 pt-5 gap-y-4">
        {posts.map((post: ResponsePostData) => {
          return (
            <Post
              userId={post.userId}
              id={post.id}
              key={post.id}
              title={post.title}
              body={post.body}
            />
          );
        })}
      </div>
    </div>
  );
}
