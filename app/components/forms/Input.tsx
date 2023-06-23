"use client";
import { InputProps } from "@/app/types/Form";

const checkPassword = (getValues: any) => {
  const { password, passwordConfirmation } = getValues();
  return password === passwordConfirmation || "passwords do not match";
};

const Input = ({
  type,
  name,
  placeholder,
  register,
  minLength,
  maxLength,
  pattern,
  min,
  max,
  required,
  getValues,
  isPasswordConfirm,
}: InputProps) => {
  const regPattern = pattern
    ? typeof pattern === "string"
      ? new RegExp(pattern)
      : { value: new RegExp(pattern.value), message: pattern.message }
    : undefined;

  return (
    <>
      <label
        htmlFor={name}
        className="block text-xs font-semibold text-gray-600 uppercase dark:text-gray-200"
      >
        {name
          .split("")
          .map((letter) =>
            letter === letter.toUpperCase() ? ` ${letter}` : letter
          )
          .join("")}
      </label>
      <input
        id={name}
        type={type || "text"}
        name={name}
        placeholder={placeholder}
        {...register(name, {
          required,
          minLength,
          maxLength,
          pattern: regPattern,
          min,
          max,
          validate: isPasswordConfirm ? checkPassword(getValues) : undefined,
        })}
        autoComplete="on"
        className="block w-full p-3 mt-2 text-indigo-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
      />
    </>
  );
};

export default Input;
