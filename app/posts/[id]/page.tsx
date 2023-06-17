"use client";
import { Post, PostSkeleton } from "@/app/components/Post";
import { useParams } from "next/navigation";
import useTypicodeQuery from "@/app/hooks/useTypicodeQuery";
import { useQuery } from "@tanstack/react-query";
import Loading from "./loading";
import { ParamPostData } from "@/app/types/PostData";
import { Comment } from "@/app/types/Comments";
import { User } from "@/app/types/User";
import { Skeleton } from "@/app/components/skeleton";

export default async function PostPage() {
  const params = useParams();

  const {
    error: postError,
    isLoading: isPostLoading,
    data: post,
  } = useTypicodeQuery(["posts", String(params.id)], `/posts/${params.id}`);
  const {
    error: commentsError,
    isLoading: isCommentsLoading,
    data: comments,
  } = useTypicodeQuery(
    ["posts", String(params.id), "comments"],
    `/posts/${params.id}/comments`
  );

  const {
    isLoading: isUserLoading,
    error: userError,
    data: user,
  } = useQuery({
    queryKey: ["users", String(params.id)],
    queryFn: async () => {
      return await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`
      )
        .then((d) => d.json())
        .then((post) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        )
        .then((d) => d.json());
    },
  });

  if (isPostLoading)
    return <PostPageSkeleton comments={comments} user={user} />;
  if (isCommentsLoading) return <PostPageSkeleton post={post} user={user} />;
  if (isUserLoading)
    return <PostPageSkeleton post={post} comments={comments} />;

  if (postError instanceof Error) {
    "An error has occurred: " + postError.message;
    throw new Error("An error has occurred: " + postError.message);
  }
  if (commentsError instanceof Error) {
    console.error("An error has occurred: " + commentsError.message);
    throw new Error("An error has occurred: " + commentsError.message);
  }
  if (userError instanceof Error) {
    console.error("An error has occurred: " + userError.message);
    throw new Error("An error has occurred: " + userError.message);
  }

  return (
    <div>
      <div className="space-y-2 xl:pl-12">
        <h1 className="text-3xl dark:text-white font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1scroll-m-20 text-4xl font-bold tracking-tight">
          Post {params.id}
        </h1>
        <span className="text-lg italic text-muted-foreground dark:text-slate-50">
          By {user.name}
        </span>
      </div>
      <div className="py-4">
        <Post
          userId={post.userId}
          id={post.id}
          key={post.id}
          title={post.title}
          body={post.body}
          username={user.name || "Error retrieving username"}
          isSelfPage={true}
        />
      </div>
      <section className="flex items-center justify-center ">
        {comments.length > 0
          ? "comments apparently"
          : "No comments yet. Comment now to be first!"}
      </section>
    </div>
  );
}

function PostPageSkeleton({
  post,
  comments,
  user,
}: {
  post?: ParamPostData;
  comments?: Comment[];
  user?: User;
}) {
  return (
    <div>
      <div className="space-y-2 xl:pl-12">
        <h1 className="text-3xl dark:text-white font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1scroll-m-20 text-4xl font-bold tracking-tight">
          Post
        </h1>
        <span className="text-lg italic text-muted-foreground dark:text-slate-50">
          By{" "}
          <Skeleton className="inline-block w-24 h-5 align-middle bg-indigo-400 rounded-2xl" />
        </span>
      </div>
      <div className="py-4">
        <PostSkeleton />
      </div>
      <section className="flex items-center justify-center ">
        {comments ? "comments load successfully" : "comments loading"}
      </section>
    </div>
  );
}
