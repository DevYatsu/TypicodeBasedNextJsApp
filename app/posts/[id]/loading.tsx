import { PostSkeleton } from "@/app/components/Post";
import { Skeleton } from "@/app/components/skeleton";

export default function Loading() {
  return (
    <div>
      <div className="space-y-2 xl:pl-12">
        <h1 className="text-3xl dark:text-white font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1scroll-m-20 text-4xl font-bold tracking-tight">
          Post
        </h1>
        <span className="text-lg italic text-muted-foreground dark:text-slate-50">
          By{" "}
          <Skeleton className="inline-block w-24 h-5 align-middle bg-indigo-300 dark:bg-indigo-400 rounded-2xl" />
        </span>
      </div>
      <div className="py-4">
        <PostSkeleton />
      </div>
      <section className="flex items-center justify-center ">
        "comments"
      </section>
    </div>
  );
}
