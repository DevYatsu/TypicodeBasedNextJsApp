"use client";
import { Post, PostSkeleton } from "@/app/components/Post";
import { useParams } from "next/navigation";
import useTypicodeQuery from "@/app/hooks/useTypicodeQuery";
import { useQuery } from "@tanstack/react-query";
import { ParamPostData } from "@/app/types/PostData";
import { CommentType } from "@/app/types/Comments";
import { User } from "@/app/types/User";
import { Skeleton } from "@/app/components/skeleton";
import { Comment, CommentSkeleton } from "@/app/components/Comment";
import AddButton from "../../components/buttons/AddButton";
import { useEffect, useState } from "react";
import { TextArea, NextForm as Form } from "reusable-react-form/lib";
import PostPageError from "./page-error";

interface CommentFormData {
  comment: string;
}

export default async function PostPage() {
  const params = useParams();

  const [addComment, setAddComment] = useState(false);

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

  useEffect(() => {}, [addComment]);

  if (isPostLoading)
    return <PostPageSkeleton comments={comments} user={user} />;
  if (isCommentsLoading) return <PostPageSkeleton post={post} user={user} />;
  if (isUserLoading)
    return <PostPageSkeleton post={post} comments={comments} />;

  if (postError instanceof Error) {
    "An error has occurred: " + postError.message;
    return <PostPageError />;
  }
  if (commentsError instanceof Error) {
    console.error("An error has occurred: " + commentsError.message);
    return <PostPageError />;
  }
  if (userError instanceof Error) {
    console.error("An error has occurred: " + userError.message);
    return <PostPageError />;
  }

  comments[2].isReply = true;
  comments[2].replyToCommentAuthor = "Akhy yanis";

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
      <div className="pt-4 pb-6">
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
      <section className="flex flex-col h-full px-4 py-5 rounded-lg sm:px-6 md:px-10 bg-slate-200 dark:bg-slate-800">
        <div className="flex items-center justify-between lg:items-end">
          <h2 className="text-2xl font-semibold leading-tight tracking-tighter lg:tracking-tight dark:text-white md:text-4xl lg:font-semibold">
            Comments
          </h2>
          <AddButton
            content="Comment"
            className="pl-2 mt-1 md:text-xl"
            onClick={() => setAddComment(!addComment)}
          />
        </div>
        <hr className="w-full h-1 mt-2 mb-0 bg-slate-700" />
        {addComment ? (
          <div className="flex flex-col items-center ">
            <h3 className="pt-3 text-lg font-bold text-gray-900 lg:text-2xl dark:text-white">
              Add a new comment
            </h3>
            <Form<CommentFormData>
              isSimpleForm={true}
              submitURL={`/api/comments/new`}
              extraData={{
                postId: params.id,
                responseToPostUser: String(user.id),
              }}
              successRedirectionURL={`/posts/${params.id}`}
            >
              <TextArea
                name={"comment"}
                placeholder={"Comment..."}
                required="Please write something."
              />
            </Form>
          </div>
        ) : (
          ""
        )}
        <div className="grid grid-cols-1 gap-0 md:gap-x-5">
          {comments.length > 0
            ? comments.map((comment: CommentType) => (
                <Comment key={comment.id} {...comment} />
              ))
            : "No comments yet. Comment now to be first!"}
        </div>
      </section>
    </div>
  );
}

function PostPageSkeleton({
  post,
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
          Post {post ? post.id : ""}
        </h1>
        <span className="text-lg italic text-muted-foreground dark:text-slate-50">
          By{" "}
          {user ? (
            user.name
          ) : (
            <Skeleton className="inline-block w-24 h-5 align-middle bg-indigo-300 dark:bg-indigo-400 rounded-2xl" />
          )}
        </span>
      </div>
      <div className="py-4">
        {post ? (
          <Post
            userId={post.userId}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        ) : (
          <PostSkeleton />
        )}
      </div>
      <section className="flex flex-col h-full px-4 py-5 rounded-lg sm:px-6 md:px-10 bg-slate-200 dark:bg-slate-800">
        <div className="flex items-center justify-between lg:items-end">
          <h2 className="text-2xl font-semibold leading-tight tracking-tighter lg:tracking-tight dark:text-white md:text-4xl lg:font-semibold">
            Comments
          </h2>
          <AddButton content="Comment" className="pl-2 mt-1 md:text-xl" />
        </div>
        <CommentSkeleton /> <CommentSkeleton /> <CommentSkeleton />
      </section>
    </div>
  );
}
