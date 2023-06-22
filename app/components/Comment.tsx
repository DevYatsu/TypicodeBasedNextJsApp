"use client";
import { useEffect, useState } from "react";
import { CommentType } from "../types/Comments";
import { Skeleton } from "@/app/components/skeleton";

const ArrowSVG = ({ className }: { className?: string }) => (
  <svg
    width="22px"
    height="22px"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#000000"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline ${className ? className : ""}`}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        opacity="0.1"
        d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z"
        fill="#6366f1"
      ></path>
      <path
        d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z"
        stroke="#6366f1"
        strokeWidth="2"
      ></path>
      <path
        d="M16 12L8 12"
        stroke="#6366f1"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M13 15L15.913 12.087V12.087C15.961 12.039 15.961 11.961 15.913 11.913V11.913L13 9"
        stroke="#6366f1"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </g>
  </svg>
);

export function Comment({
  body,
  email,
  postId,
  isAuthor,
  isReply,
  replyToCommentAuthor,
}: CommentType) {
  const [settings, setSettings] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target instanceof HTMLElement)) {
        return;
      }

      const targetClasses = e.target.classList;

      if (!targetClasses.contains("w-5") && !targetClasses.contains("h-5")) {
        setSettings(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <article
      className={`p-3 px-6 text-base bg-white rounded-lg dark:bg-gray-900 ${
        isReply ? "ml-3 md:ml-12 mt-3" : "mt-5"
      }`}
    >
      <footer
        className={`flex items-center justify-between ${
          isReply ? "mb-1" : "mb-2"
        }`}
      >
        <div className="flex flex-col items-start md:flex-row">
          <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
            @{email.split("@")[0]}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <time dateTime="2022-02-08" title="February 8th, 2022">
              Feb. 8, 2022 {postId}
            </time>
          </p>
        </div>
        <button
          onClick={() => setSettings(!settings)}
          className="relative inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          type="button"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
          </svg>
          <span className="sr-only">Comment settings</span>
          {settings && (
            <div className="absolute right-0 z-10 bg-white divide-y divide-gray-100 rounded shadow top-8 w-36 dark:bg-slate-800 dark:divide-gray-600">
              <ul
                className="py-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownMenuIconHorizontalButton"
              >
                {isAuthor ? (
                  <>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Edit
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Remove
                      </a>
                    </li>
                  </>
                ) : (
                  ""
                )}
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Report
                  </a>
                </li>
              </ul>
            </div>
          )}
        </button>
      </footer>
      <p className="text-gray-500 align-middle dark:text-gray-400">
        {isReply ? (
          <span className="inline-block pr-1 text-indigo-500 align-bottom">
            <span className="flex items-center">
              <ArrowSVG />
              <span>@{replyToCommentAuthor}</span>
            </span>
          </span>
        ) : (
          ""
        )}
        {body}
      </p>
      <div
        className={`flex items-center ${isReply ? "mt-2" : "mt-4 space-x-4"}`}
      >
        <button
          type="button"
          className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400"
        >
          <svg
            aria-hidden="true"
            className="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            ></path>
          </svg>
          Reply
        </button>
      </div>
    </article>
  );
}

export function CommentSkeleton() {
  return (
    <article
      className={`p-3 px-6 text-base bg-white rounded-lg dark:bg-gray-900 mt-5`}
    >
      <footer className={`flex items-center justify-between mb-2`}>
        <div className="flex flex-col items-center md:flex-row">
          <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
            <Skeleton className="mb-3 text-xl font-bold bg-gray-400 w-[100px] sm:w-[200px] h-[20px] rounded-full dark:bg-gray-200" />
          </div>
          <div className="w-full text-sm text-gray-600 dark:text-gray-400">
            <time dateTime="2022-02-08" title="February 8th, 2022">
              <Skeleton className="mb-3 text-xl font-bold bg-gray-200 w-[80px] sm:w-[100px] h-[20px]  rounded-full dark:bg-gray-700" />
            </time>
          </div>
        </div>
        <button
          className="relative inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          type="button"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
          </svg>
          <span className="sr-only">Comment settings</span>
        </button>
      </footer>
      <Skeleton className="align-middle mb-3 text-xl font-bold bg-gray-100 w-full sm:w-[700px] h-[20px]  rounded-full dark:bg-gray-700" />
      <div className="flex items-center mt-4 space-x-4">
        <button
          type="button"
          className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400"
        >
          <svg
            aria-hidden="true"
            className="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            ></path>
          </svg>
          Reply
        </button>
      </div>
    </article>
  );
}
