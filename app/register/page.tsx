import {
  NextForm as Form,
  genSelect,
  getGenericFormInputsData,
} from "reusable-react-form/lib";

interface RegisterFormData {
  username: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

const data = [
  ...getGenericFormInputsData(
    "username",
    "email",
    "password",
    "passwordConfirmation"
  ),
  genSelect("test", [{ value: "str", displayValue: "effe" }]),
];

export default function Page() {
  return (
    <div className="flex items-center justify-center">
      <Form<RegisterFormData>
        data={data}
        submitURL="/api/register"
        goal="register"
        successRedirectionURL="/login"
        removeRequestProps={["passwordConfirmation"]}
      />
    </div>
  );
}
