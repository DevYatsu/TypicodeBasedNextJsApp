import { ReactEventHandler } from "react";

export default function AddButton({
  content,
  className,
  onClick,
}: {
  content?: string;
  className?: string;
  onClick?: ReactEventHandler;
}) {
  return (
    <div className={` ${className}`}>
      <a
        className="inline-flex overflow-hidden text-white bg-indigo-300 rounded-md dark:text-black dark:bg-indigo-20"
        onClick={onClick}
      >
        <span className="px-1.5 sm:px-3.5 text-white bg-indigo-500 group-hover:bg-indigo-600 flex items-center justify-center">
          <svg
            className="w-5 h-5 "
            fill="#fff"
            viewBox="0 0 1920 1920"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <path
                d="M866.332 213v653.332H213v186.666h653.332v653.332h186.666v-653.332h653.332V866.332h-653.332V213z"
                fillRule="evenodd"
              />
            </g>
          </svg>
        </span>
        <span className="py-1 sm:py-1.5 pl-2 pr-3 sm:pl-4 sm:pr-5 ">
          {content}
        </span>
      </a>
    </div>
  );
}
