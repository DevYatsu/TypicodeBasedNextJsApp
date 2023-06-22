import Form from "../components/forms/Form";

interface LoginFormData {
  username: string;
  password: string;
}

const data = [
  { name: "username", placeholder: "John" },
  { name: "password", type: "password", placeholder: "********" },
];

export default function Page() {
  return (
    <div className="flex items-center justify-center pt-6 ">
      <Form<LoginFormData>
        data={data}
        submitURL="/api/login"
        goal="login"
        className="pt-10"
      />
    </div>
  );
}
