"use client";
import Link from "next/link";
import { ParamPostData } from "../types/PostData";
import { Skeleton } from "./skeleton";
import useTypicodeQuery from "../hooks/useTypicodeQuery";

export async function Post({
  userId,
  id,
  title = "error retrieving title",
  body = "error retrieving body",
  username,
  isSelfPage = false,
}: ParamPostData) {
  let user;

  if (!isSelfPage) {
    const { data, isLoading } = useTypicodeQuery(
      ["users", String(userId)],
      `/users/${userId}`
    );

    if (isLoading) {
      return <PostSkeleton title={title} body={body} id={id} />;
    }
    user = data;
  }

  return (
    <div className="flex items-center justify-center">
      <div className="w-full p-5 bg-white border shadow-md dark:bg-slate-900 xl:w-9/12 rounded-xl">
        <div className="flex items-center justify-between w-full pb-3 border-b">
          <div className="flex items-center space-x-3">
            {isSelfPage ? (
              <>
                {/* <div className="h-8 w-8 rounded-full bg-slate-400 bg-[url('https://i.pravatar.cc/32')]" /> */}
                <div className="italic font-bold text-md md:text-lg text-slate-700 dark:text-slate-50">
                  {username || user.name || "error retrieving username"}
                </div>
              </>
            ) : (
              <Link href={`/users/${userId}`}>
                {/* <div className="h-8 w-8 rounded-full bg-slate-400 bg-[url('https://i.pravatar.cc/32')]" /> */}
                <div className="italic font-bold text-md md:text-lg text-slate-700 dark:text-slate-50">
                  {username || user.name || "error retrieving username"}
                </div>
              </Link>
            )}
          </div>
          <div className="flex items-center space-x-8">
            {isSelfPage ? (
              <button className="px-3 py-1 text-xs font-semibold bg-gray-100 border dark:text-black rounded-2xl">
                {id}
              </button>
            ) : (
              <Link href={`/posts/${id}`}>
                <button className="px-3 py-1 text-xs font-semibold bg-gray-100 border dark:text-black rounded-2xl">
                  {id}
                </button>
              </Link>
            )}
          </div>
        </div>
        {isSelfPage ? (
          <div className="mt-4 mb-6">
            <div className="mb-3 text-lg font-bold text-black sm:text-xl dark:text-white">
              {title}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              {body}
            </div>
          </div>
        ) : (
          <Link href={`/posts/${id}`}>
            <div className="mt-4 mb-6">
              <div className="mb-3 text-lg font-bold text-black sm:text-xl dark:text-white">
                {title}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {body}
              </div>
            </div>
          </Link>
        )}
        <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
          <div className="flex space-x-4 md:space-x-8">
            <div className="flex items-center transition cursor-pointer hover:text-slate-600 dark:hover:text-slate-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1.5 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
              <span>125</span>
            </div>
            <div className="flex items-center transition cursor-pointer hover:text-slate-600 dark:hover:text-slate-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1.5 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
              <span>4</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PostSkeleton({
  id,
  title,
  body,
}: {
  id?: number;
  title?: string;
  body?: string;
}) {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full p-5 bg-white border shadow-md dark:bg-slate-900 xl:w-9/12 rounded-xl">
        <div className="flex items-center justify-between w-full pb-3 border-b">
          <div className="flex items-center space-x-3">
            <Skeleton className="w-[110px] sm:w-[150px] h-[20px] textLg font-bold bg-gray-100 rounded-full dark:bg-slate-50" />
          </div>
          <div className="flex items-center space-x-8">
            <button className="px-3 py-1 text-xs font-semibold bg-gray-100 border dark:text-black rounded-2xl">
              {id ? (
                id
              ) : (
                <Skeleton className="w-[10px] h-[20px] rounded-full" />
              )}
            </button>
          </div>
        </div>
        <div className="mt-4 mb-6">
          {title ? (
            <div className="mb-3 text-xl font-bold text-black dark:text-white selection:bg-indigo-500">
              {title}
            </div>
          ) : (
            <Skeleton className="mb-3 text-xl font-bold bg-gray-100 w-[200px] sm:w-[300px] h-[20px]  rounded-full dark:bg-gray-200" />
          )}
          {body ? (
            <div className="text-sm text-gray-600 dark:text-gray-300">
              {body}
            </div>
          ) : (
            <Skeleton className="text-sm bg-gray-100 w-full sm:w-[600px] h-[20px]  rounded-full dark:bg-gray-400" />
          )}
        </div>
        <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
          <div className="flex space-x-4 md:space-x-8">
            <div className="flex items-center transition cursor-pointer hover:text-slate-600 dark:hover:text-slate-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1.5 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
              <span>0</span>
            </div>
            <div className="flex items-center transition cursor-pointer hover:text-slate-600 dark:hover:text-slate-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1.5 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
