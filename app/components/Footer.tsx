export default function Footer() {
  const date = new Date();

  return (
    <footer className="bg-slate-100 dark:bg-gray-900">
      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center text-center">
          <a href="/">TypicodeNextJsBasedApp</a>

          <p className="max-w-md mx-auto mt-4 text-gray-500 dark:text-gray-400">
            The footer of my project apparently.
          </p>
        </div>

        <hr className="my-10 border-gray-200 dark:border-gray-700" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-500">
            © Copyright {date.getFullYear()}. Licence MIT.
          </p>

          <div className="flex mt-3 -mx-2 sm:mt-0">
            <a
              href="https://github.com/DevYatsu/TypicodeBasedNextJsApp"
              className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="Reddit"
            >
              Github
            </a>

            <a
              href="/register"
              className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="Reddit"
            >
              Register
            </a>

            <a
              href="/login"
              className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="Reddit"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
