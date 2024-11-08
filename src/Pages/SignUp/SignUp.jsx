import CheckboxInput from "../../Components/DComponents/CheckBoxInput/CheckBoxInput";
import TextInput from "../../Components/DComponents/TextInput/TextInput";
import { Link } from "react-router-dom";
import useSignup from "../../Hooks/useSignup";

const SignUp = () => {
  const { formik } = useSignup();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Create an Account
          </h2>
          <p className="mt-2 text-sm text-gray-600">Sign up to get started</p>
        </div>

        {/* Form */}
        <form onSubmit={formik.handleSubmit} className="mt-8 space-y-6">
          {/* Username Input */}
          <TextInput
            label="Username"
            name="username"
            type="text"
            placeholder="Enter your username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.username && formik.errors.username}
          />

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

          {/* Confirm Password Input */}
          <TextInput
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            placeholder="Re-enter your password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
          />

          {/* Terms & Conditions */}
          <CheckboxInput
            label="I accept the terms and conditions"
            name="terms"
            checked={formik.values.terms}
            onChange={formik.handleChange}
          />
          {formik.touched.terms && formik.errors.terms && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.terms}
            </div>
          )}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#0F298B] focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200"
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? "Signing up..." : "Sign up"}
            </button>
          </div>

          {/* Sign In Link */}
          <div className="text-center text-sm">
            <span className="text-gray-600">Already have an account?</span>
            <Link to="/user/login" className="font-medium text-[#0F298B] ">
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
