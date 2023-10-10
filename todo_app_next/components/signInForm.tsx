"use client";
import { signIn } from "next-auth/react";
import React, { useState } from "react";

export default function SignInForm() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleCredentials = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setCredentials({
      ...credentials,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <form
      className="flex flex-col py-8"
      method="post"
      onSubmit={() =>
        signIn("credentials", {
          email: credentials.email,
          password: credentials.password,
          redirect: true,
          callbackUrl: "/",
        })
      }
    >
      <div className="relative my-4">
        <input
          type="email"
          id="email"
          onChange={(e) => handleCredentials(e)}
          className=" block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-base text-black bg-gray-50 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer placeholder:opacity-0 focus:placeholder:opacity-100 focus:placeholder:transition-opacity focus:placeholder:ease-out focus:placeholder:duration-300"
          placeholder="example@example.com"
          required
        />
        <label
          htmlFor="email"
          className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
        >
          Email
        </label>
      </div>
      <div className="relative">
        <input
          type="password"
          id="password"
          onChange={(e) => handleCredentials(e)}
          className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-base text-black bg-gray-50 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=""
          required
        />
        <label
          htmlFor="password"
          className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
        >
          Password
        </label>
      </div>
      <button
        type="submit"
        className="p-4 border mt-8 shadow shadow-black border-stone-400 bg-gradient-to-r from-stone-400 to-stone-600 rounded-lg"
      >
        Login
      </button>
    </form>
  );
}
