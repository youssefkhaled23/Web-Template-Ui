import { useFormik } from "formik";
import LoginValidation from "../../Validation/LoginValidation";
import TextInput from "../../Components/DComponents/TextInput/TextInput";
import CheckboxInput from "../../Components/DComponents/CheckBoxInput/CheckBoxInput";
import { Link } from "react-router-dom";

const Login = () => {
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Welcome back
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Please sign in to your account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={formik.handleSubmit} className="mt-8 space-y-6">
          {/* Email Input */}
          <TextInput
            label="Email address"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && formik.errors.email}
          />

          {/* Password Input */}
          <TextInput
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && formik.errors.password}
          />

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <CheckboxInput
              label="Remember me"
              name="rememberMe"
              checked={formik.values.rememberMe}
              onChange={formik.handleChange}
            />
            <div className="text-sm">
              <a href="#" className="font-medium text-[#0F298B]">
                Forgot your password?
              </a>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#0F298B] focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200"
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? "Signing in..." : "Sign in"}
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="text-center text-sm">
            <span className="text-gray-600">Don&apos;t have an account?</span>
            <Link
              to="/user/register"
              className="font-medium text-[#0F298B] hover:text-indigo-500"
            >
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
