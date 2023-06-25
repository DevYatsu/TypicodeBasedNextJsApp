export function SuccessPrimary({
  title,
  message,
}: //   fullWidth,
{
  title: string;
  message: string;
  //   fullWidth?: boolean;
}) {
  return (
    <div
      className="flex w-full p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg"
      role="alert"
    >
      <svg
        className="inline w-5 h-5 mr-3"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <div>
        <span className="font-medium">{title}</span> {message}
      </div>
    </div>
  );
}
export function SuccessSecondary({
  title,
  message,
}: //   fullWidth,
{
  title: string;
  message: string;
  //   fullWidth?: boolean;
}) {
  return (
    <div
      className="px-4 py-3 text-teal-900 bg-teal-100 border-t-4 border-teal-500 rounded-b shadow-md"
      role="alert"
    >
      <div className="flex">
        <div className="py-1">
          <svg
            className="w-6 h-6 mr-4 text-teal-500 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
          </svg>
        </div>
        <div>
          <p className="font-bold">Our privacy policy has changed</p>
          <p className="text-sm">
            Make sure you know how these changes affect you.
          </p>
        </div>
      </div>
    </div>
  );
}
