import Form from "../components/forms/Form";
import { getGenericFormInputsData } from "../utils/formFunctions";

interface RegisterFormData {
  username: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

const data = getGenericFormInputsData(
  "username",
  "email",
  "password",
  "passwordConfirmation"
);

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
