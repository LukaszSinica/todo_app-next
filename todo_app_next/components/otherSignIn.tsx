"use client";
import React from "react";
import Image from "next/image";
import Google from "@/public/google.svg";
import { signIn } from "next-auth/react";

export default function OtherSignIn() {
  return (
    <section>
      <div className="flex items-center">
        <div className="flex-grow h-px bg-gray-500"></div>
        <span className="flex-shrink text-xl text-gray-500 px-4 hover:cursor-default">
          Or
        </span>
        <div className="flex-grow h-px bg-gray-500"></div>
      </div>
      <div className="flex w-full justify-center py-4">
        <div
          className="flex items-center border w-1/2 p-2 bg-white text-black rounded-lg border-stone-300 shadow-sm hover:cursor-pointer"
          onClick={() => signIn("google", { redirect: true, callbackUrl: "/" })}
        >
          <Image priority src={Google} alt="Google Logo" className="w-8 mr-4" />
          <span>Sign in with Google</span>
        </div>
      </div>
    </section>
  );
}
