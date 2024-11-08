import { useFormik } from "formik";
import SignUpValidation from "../Validation/SignUpValidation";
const useSignup = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
    validationSchema: SignUpValidation,
    onSubmit: (values) => {
      console.log("Form Data", values);
    },
  });
  return { formik };
};

export default useSignup;
