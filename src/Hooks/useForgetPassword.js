import { useFormik } from "formik";
import ForgetPasswordValidation from "../Validation/ForgetPasswordValidation";

const useForgetPassword = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: ForgetPasswordValidation,
    onSubmit: (values) => {
      console.log("Password reset requested for:", values.email);
      // Add your password reset request logic here
    },
  });
  return { formik };
};

export default useForgetPassword;
