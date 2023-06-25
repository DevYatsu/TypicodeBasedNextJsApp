import AddButton from "@/app/components/buttons/AddButton";
import { DangerPrimary, DangerSecondary } from "@/app/components/alerts/danger";
import ErrorIcon from "@/app/components/icons/error";

export default function PostPageError() {
  return (
    <div>
      <div className="space-y-2 xl:pl-12">
        <h1 className="text-3xl dark:text-white font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1scroll-m-20 text-4xl font-bold tracking-tight">
          Post Error
        </h1>
        <span className="text-lg italic text-muted-foreground dark:text-slate-50">
          By Admin
        </span>
      </div>
      <div className="py-4">
        {
          <DangerPrimary
            title="Fetching post is impossible!"
            message="Please reload the page."
          />
        }
      </div>
      <section className="flex flex-col h-full px-4 py-5 rounded-lg sm:px-6 md:px-10 bg-slate-200 dark:bg-slate-800">
        <div className="flex items-center justify-between lg:items-end">
          <h2 className="text-2xl font-semibold leading-tight tracking-tighter lg:tracking-tight dark:text-white md:text-4xl lg:font-semibold">
            Comments
          </h2>
          <AddButton content="Comment" className="pl-2 mt-1 md:text-xl" />
        </div>
        <div className="flex flex-col items-center w-full pt-10 ">
          <DangerSecondary />
          <ErrorIcon className="max-w-xs " />
        </div>
      </section>
    </div>
  );
}
