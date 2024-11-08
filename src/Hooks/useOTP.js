import { useFormik } from "formik";
import OTPValidation from "../Validation/OTP";

const useOTP = () => {
  const formik = useFormik({
    initialValues: {
      otp: "",
    },
    validationSchema: OTPValidation,
    onSubmit: (values) => {
      console.log("OTP Submitted:", values.otp);
      // Add your OTP verification logic here
    },
  });
  return { formik };
};

export default useOTP;
