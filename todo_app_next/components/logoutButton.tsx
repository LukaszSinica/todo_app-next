"use client";
import { signOut } from "next-auth/react";
import React from "react";

export default function LogoutButton() {
  return (
    <div className="flex w-full justify-end">
      <button
        className="rounded border bg-gradient-to-r from-stone-400 to-stone-600 px-2 py-1 shadow shadow-black border-stone-400 hover:scale-125 ease-in-out duration-150 self-end"
        onClick={() => signOut()}
      >
        Logout
      </button>
    </div>
  );
}
