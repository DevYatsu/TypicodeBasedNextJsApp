import { PostSkeleton } from "../components/Post";

export default function Loading() {
  return (
    <div className="w-full h-full ">
      <div className="space-y-2 xl:pl-12">
        <h1 className="text-3xl dark:text-white font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1scroll-m-20 text-4xl font-bold tracking-tight">
          Posts
        </h1>
        <span className="text-lg text-indigo-400 text-muted-foreground dark:text-indigo-400">
          All the posts avaible on the website
        </span>
      </div>
      <div className="grid grid-cols-1 pt-5 gap-y-4">
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
      </div>
    </div>
  );
}
