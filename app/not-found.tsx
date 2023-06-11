import Link from "next/link";

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen dark:bg-[#1A2238]">
      <h1 className="text-9xl font-extrabold text-[#1A2238] dark:text-white tracking-widest">
        404
      </h1>
      <div className="bg-[#FF6A3D] text-white dark:text-black px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <button className="mt-5">
        <Link
          href={"/"}
          className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none select-none"
        >
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>
          <span className="relative block px-8 py-3 bg-white dark:bg-[#1A2238] border border-current group-active:border-black dark:group-active:border-white">
            <div className="transition duration-300 group-active:text-black dark:group-active:text-white">
              Go Home
            </div>
          </span>
        </Link>
      </button>
    </div>
  );
}
