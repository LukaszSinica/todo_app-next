import React from 'react'
import RedirectSection from './redirectSection';
import SignInForm from './signInForm';


export default function Login() {

  return (
    <section className="flex flex-col w-2/6 h-3/4 bg-stone-300 self-center my-8 shadow-md px-16 py-8 rounded-2xl">
        <p className="text-2xl text-black font-semibold self-center">SIGN IN</p>
        <SignInForm/>
        <RedirectSection text="Don't have an account?" redirectType={"Register"} redirect={"/"} />
    </section>
  )
}
