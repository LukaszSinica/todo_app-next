import React from "react";
import RedirectSection from "./redirectSection";
import OtherSignIn from "./otherSignIn";
import SignUpForm from "./signUpForm";

export default function SignUp() {
  return (
    <section className="flex flex-col w-2/6 bg-stone-300 self-center my-8 shadow-md px-16 py-8 rounded-2xl">
      <p className="text-2xl text-black font-semibold self-center">SIGN UP</p>
      <SignUpForm/>
      <OtherSignIn/>
      <RedirectSection text="Already a user?" redirectType={"Login"} redirect={"/signin"} />
    </section>
  );
}
