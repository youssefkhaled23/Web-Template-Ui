import TextInput from "../../Components/DComponents/TextInput/TextInput";
import useOTP from "../../Hooks/useOTP";

const OTP = () => {
  const { formik } = useOTP();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Enter OTP</h2>
          <p className="mt-2 text-sm text-gray-600">
            We sent a 6-digit OTP to your email/phone. Please enter it below.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={formik.handleSubmit} className="mt-8 space-y-6">
          {/* OTP Input */}
          <TextInput
            label="One-Time Password"
            name="otp"
            type="text"
            placeholder="Enter your OTP"
            value={formik.values.otp}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.otp && formik.errors.otp}
          />

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#0F298B] focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200"
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? "Verifying..." : "Verify OTP"}
            </button>
          </div>

          {/* Resend OTP Link */}
          <div className="text-center text-sm">
            <button
              type="button"
              onClick={() => {
                // Logic to resend the OTP
                console.log("Resend OTP clicked");
              }}
              className="font-medium text-[#0F298B] hover:text-indigo-500"
            >
              Resend OTP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OTP;
