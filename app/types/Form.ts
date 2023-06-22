export type SelectValues = { value: string; displayValue: string }[];

export type SelectProps = {
  name: string;
  register: any;
  values: SelectValues;
};

export type InputProps = {
  type?: string;
  name: string;
  placeholder: string;
  register: any;
};
export type TextAreaProps = {
  name: string;
  placeholder: string;
  register: any;
};

type FormInputProps = {
  element?: "input" | undefined;
  placeholder: string;
  type?: string;
  name: string;
};
type FormSelectProps = {
  element: "select";
  name: string;
  values: SelectValues;
};
type FormTextAreaProps = {
  element?: "textarea";
  placeholder: string;
  name: string;
};
type FormData = (FormInputProps | FormSelectProps | FormTextAreaProps)[];
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
};
