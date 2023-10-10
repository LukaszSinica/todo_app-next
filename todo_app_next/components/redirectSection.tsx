"use client";
import Link from 'next/link';
import React from 'react'

type RedirectSectionProps = {
  text: string;
  redirectType: string;
  redirect: string;

}

export default function RedirectSection({text, redirectType, redirect}: RedirectSectionProps) {
  return (
    <p className="text-black">
      {text}
      <Link href={redirect} className="font-bold underline">
        {redirectType}
      </Link>
  </p>
  )
}
