"use client";
import Link from "next/link";
import { ParamPostData } from "../types/PostData";
import { Skeleton } from "./skeleton";
import useTypicodeQuery from "../hooks/useTypicodeQuery";
import { useState } from "react";

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
                <div className="text-lg font-bold text-slate-700 dark:text-slate-50">
                  {username || user.name || "error retrieving username"}
                </div>
              </>
            ) : (
              <Link href={`/users/${userId}`}>
                {/* <div className="h-8 w-8 rounded-full bg-slate-400 bg-[url('https://i.pravatar.cc/32')]" /> */}
                <div className="text-lg font-bold text-slate-700 dark:text-slate-50">
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
            <div className="mb-3 text-xl font-bold text-black dark:text-white">
              {title}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              {body}
            </div>
          </div>
        ) : (
          <Link href={`/posts/${id}`}>
            <div className="mt-4 mb-6">
              <div className="mb-3 text-xl font-bold text-black dark:text-white">
                {title}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {body}
              </div>
            </div>
          </Link>
        )}
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
            <Skeleton className="w-[110px] sm:w-[150px] h-[20px] text-lg font-bold bg-gray-100 rounded-full dark:bg-slate-50" />
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
            title
          ) : (
            <Skeleton className=" mb-3 text-xl font-bold bg-gray-100 w-[200px] sm:w-[300px] h-[20px]  rounded-full dark:bg-gray-200" />
          )}
          {body ? (
            body
          ) : (
            <Skeleton className="text-sm bg-gray-100 w-[400px] sm:w-[600px] h-[20px]  rounded-full dark:bg-gray-400" />
          )}
        </div>
      </div>
    </div>
  );
}
