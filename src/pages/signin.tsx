import { signIn } from "next-auth/react";
import React from "react";

const SignIn = () => {
  const signInGoogle = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    signIn('google', { callbackUrl: process.env.NEXT_PUBLIC_APP_URL });
  }

  return (
    <div className="grid place-items-center h-screen">
      <button
        onClick={signInGoogle}
        className="flex items-center gap-x-3 border rounded-md p-3 hover:bg-gray-50">
        <img
          className="w-5 h-5"
          alt="Google Icon"
          src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" />
        Sign in with Google
      </button>
    </div>
  )
}

export default SignIn;