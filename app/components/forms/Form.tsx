"use client";
import React from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import Input from "./Input";
import Link from "next/link";
import { FormProps } from "@/app/types/Form";
import Select from "./Select";
import TextArea from "./TextArea";

export default function Form<T extends FieldValues>({
  data,
  goal,
  title,
  submitURL,
  className,
  mistakeInstruction,
  isSimpleForm,
  extraData,
}: FormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<T>();

  const onSubmit: SubmitHandler<T> = async (data) => {
    console.log(data);

    await fetch(submitURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": "your-csrf-token",
        "Strict-Transport-Security":
          "max-age=31536000; includeSubDomains; preload",
        "X-Content-Type-Options": "nosniff",
        "X-Frame-Options": "SAMEORIGIN",
        "X-XSS-Protection": "1; mode=block",
      },
      body: extraData
        ? JSON.stringify(Object.assign(data, { ...extraData }))
        : JSON.stringify(data),
      credentials: "same-origin",
    });
  };

  return (
    <div
      className={`w-11/12 p-12 bg-slate-100 dark:bg-slate-800 sm:w-8/12 md:w-1/2 lg:w-5/12 ${className} ${
        isSimpleForm ? "w-full p-0 bg-inherit" : ""
      }`}
    >
      {isSimpleForm ? (
        ""
      ) : (
        <h1 className="text-xl font-semibold">
          Hello there ?,{" "}
          <span className="font-normal">
            {goal === "register"
              ? "please fill in your information to register"
              : goal === "login"
              ? "please fill in your information to login"
              : title}
          </span>
        </h1>
      )}
      <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col justify-between gap-3">
          {data.map((input, index) => (
            <div key={`${input.name}-${index}`}>
              {input.element !== undefined && input.element === "select" ? (
                <Select {...input} register={register} />
              ) : input.element !== undefined &&
                input.element === "textarea" ? (
                <TextArea {...input} register={register} />
              ) : (
                <Input {...input} register={register} />
              )}
              {errors[input.name] && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-indigo-900 shadow-lg focus:outline-none hover:bg-indigo-800 hover:shadow-none"
        >
          {goal === "register"
            ? "Sign Up"
            : goal === "login"
            ? "Sign In"
            : "Submit"}
        </button>
        <p className="inline-block mt-4 text-xs text-gray-500 cursor-pointer dark:hover:text-white hover:text-black">
          {goal === "register" ? (
            <Link href={"/login"}>Already registered? Login</Link>
          ) : goal === "login" ? (
            <Link href={"/register"}>Not Registered? Join Us</Link>
          ) : (
            <Link href={"/"}>
              {mistakeInstruction ? mistakeInstruction : ""}
            </Link>
          )}
        </p>
      </form>
    </div>
  );
}
