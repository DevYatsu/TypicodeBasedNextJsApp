import { HTMLInputTypeAttribute } from "react";

export type SelectValues = { value: string; displayValue: string }[];
type InputPropsRestrictions<T> =
  | {
      value: T;
      message: string;
    }
  | T;

export type FormInputProps = {
  element?: "input";
  type?: HTMLInputTypeAttribute;
  name: string;
  placeholder: string;
  isPasswordConfirm?: boolean;
  minLength?: InputPropsRestrictions<number>;
  maxLength?: InputPropsRestrictions<number>;
  pattern?: InputPropsRestrictions<string>;
  min?: InputPropsRestrictions<number>;
  max?: InputPropsRestrictions<number>;
  required?: boolean | string;
};
export type FormSelectProps = {
  element: "select";
  name: string;
  values: SelectValues;
};
export type FormTextAreaProps = {
  element: "textarea";
  name: string;
  placeholder: string;
  required?: boolean | string;
  minLength?: InputPropsRestrictions<number>;
  maxLength?: InputPropsRestrictions<number>;
  rows?: number;
};

export type SelectProps = FormSelectProps & { register: any };
export type InputProps = FormInputProps & { register: any; getValues: any };
export type TextAreaProps = FormTextAreaProps & { register: any };

export type FormData = (FormInputProps | FormSelectProps | FormTextAreaProps)[];

type FormGoal = "register" | "login";
type extraFormData = {
  postId?: string;
  responseToPostUser?: string;
  responseToCommentId?: string;
  responseToCommentUser?: string;
  postUserId?: string;
};

export type FormProps = {
  data: FormData;
  goal?: FormGoal;
  title?: string;
  submitURL: string;
  className?: string;
  mistakeInstruction?: string;
  isSimpleForm?: boolean;
  extraData?: extraFormData;
  successRedirectionURL: string;
  removeRequestProps?: string[];
};
