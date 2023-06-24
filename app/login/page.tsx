import { getGenericFormInputsData } from "reusable-react-form/lib/utils";
import Form from "reusable-react-form/lib/next";

interface LoginFormData {
  email: string;
  password: string;
}

const data = getGenericFormInputsData("email", "password");

export default function Page() {
  return (
    <div className="flex items-center justify-center pt-6 ">
      <Form<LoginFormData>
        data={data}
        submitURL="/api/login"
        goal="login"
        className="pt-10"
        successRedirectionURL="/"
      />
    </div>
  );
}
