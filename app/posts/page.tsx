import { Post } from "../components/Post";
import { PostData } from "../types/PostData";

export default async function Posts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const posts: PostData[] = await response.json();
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
        {posts.map((post: PostData) => {
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
