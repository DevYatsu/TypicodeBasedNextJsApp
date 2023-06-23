import Form from "../components/forms/Form";

interface RegisterFormData {
  username: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

const data = [
  { name: "username", placeholder: "John" },
  { name: "email", type: "email", placeholder: "john.doe@gmail.com" },
  { name: "password", type: "password", placeholder: "********" },
  { name: "passwordConfirmation", type: "password", placeholder: "********" },
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
