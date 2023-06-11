import { PostData } from "../types/PostData";
import { User } from "../types/User";
import { Skeleton } from "./skeleton";

export async function Post({ userId, id, title, body }: PostData) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const user: User = await response.json();

  return (
    <div className="flex items-center justify-center">
      <div className="w-full p-5 bg-white border shadow-md dark:bg-slate-900 xl:w-9/12 rounded-xl">
        <div className="flex items-center justify-between w-full pb-3 border-b">
          <div className="flex items-center space-x-3">
            {/* <div className="h-8 w-8 rounded-full bg-slate-400 bg-[url('https://i.pravatar.cc/32')]" /> */}
            <div className="text-lg font-bold text-slate-700 dark:text-slate-50">
              {user.name || "error retrieving username"}
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <button className="px-3 py-1 text-xs font-semibold bg-gray-100 border dark:text-black rounded-2xl">
              {id || "error retrieving id"}
            </button>
          </div>
        </div>
        <div className="mt-4 mb-6">
          <div className="mb-3 text-xl font-bold text-black dark:text-white">
            {title || "error retrieving title"}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300">
            {body || "error retrieving body"}
          </div>
        </div>
      </div>
    </div>
  );
}

export function PostSkeleton() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full p-5 bg-white border shadow-md dark:bg-slate-900 xl:w-9/12 rounded-xl">
        <div className="flex items-center justify-between w-full pb-3 border-b">
          <div className="flex items-center space-x-3">
            <div className="text-lg font-bold bg-gray-100 rounded-full dark:bg-slate-50">
              <Skeleton className="w-[110px] sm:w-[150px] h-[20px] rounded-full" />
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <button className="px-3 py-1 text-xs font-semibold bg-gray-100 border rounded-2xl ">
              <Skeleton className="w-[10px] h-[20px] rounded-full" />
            </button>
          </div>
        </div>
        <div className="mt-4 mb-6">
          <div className="mb-3 text-xl font-bold bg-gray-100 w-[250px] sm:w-[400px] h-[20px]  rounded-full dark:bg-gray-200">
            <Skeleton />
          </div>
          <div className="text-sm bg-gray-100 w-[150px] sm:w-[300px] h-[20px]  rounded-full dark:bg-gray-400">
            <Skeleton />
          </div>
        </div>
      </div>
    </div>
  );
}
