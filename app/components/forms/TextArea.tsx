import { TextAreaProps } from "@/app/types/Form";

const TextArea = ({ name, register, placeholder }: TextAreaProps) => (
  <>
    <label htmlFor="comment" className="sr-only">
      Your {name}
    </label>
    <textarea
      id={name}
      rows={6}
      className="w-full px-2 py-2 text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
      placeholder={placeholder}
      {...register(name, { required: true })}
    ></textarea>
  </>
);

export default TextArea;
