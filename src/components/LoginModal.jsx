import React from "react";

function LoginModal({ handleCloseLoginView }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative p-6 bg-white rounded-lg shadow-lg w-80">
        {/* Close button */}
        <button
          onClick={handleCloseLoginView}
          className="absolute text-gray-500 top-4 right-4 hover:text-gray-700 focus:outline-none"
        >
          ✕
        </button>

        {/* Header */}
        <h2 className="text-2xl font-semibold text-gray-800">Welcome!</h2>
        <p className="mt-1 text-gray-600">Sign up or log in to continue</p>

        {/* Social buttons */}
        <div className="mt-6">
          <button className="flex items-center justify-center w-full py-2 mb-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            <i className="mr-2 fab fa-facebook-f"></i> Continue with Facebook
          </button>
          <button className="flex items-center justify-center w-full py-2 mb-3 border rounded-lg hover:bg-gray-100">
            <img
              src="https://img.icons8.com/ios-filled/24/000000/google-logo.png"
              alt="Google"
              className="mr-2"
            />
            Continue with Google
          </button>
          <button className="flex items-center justify-center w-full py-2 mb-3 text-white bg-black rounded-lg hover:bg-gray-800">
            <i className="mr-2 fab fa-apple"></i> Continue with Apple
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="mx-2 text-gray-400">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Log in and Sign up buttons */}
        <button className="w-full py-2 mb-3 text-white bg-pink-500 rounded-lg hover:bg-pink-600">
          Log in
        </button>
        <button className="w-full py-2 text-pink-500 border border-pink-500 rounded-lg hover:bg-pink-100">
          Sign up
        </button>

        {/* Terms and Privacy Policy */}
        <p className="mt-4 text-xs text-gray-500">
          By signing up, you agree to our{" "}
          <span className="text-pink-500 hover:underline">
            Terms and Conditions
          </span>{" "}
          and{" "}
          <span className="text-pink-500 hover:underline">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
}

export default LoginModal;
