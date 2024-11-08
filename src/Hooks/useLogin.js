import LoginValidation from "../Validation/LoginValidation";
import { useFormik } from "formik";
const useLogin = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: LoginValidation,
    onSubmit: (values) => {
      console.log("Form Data", values);
    },
  });
  return { formik };
};

export default useLogin;
