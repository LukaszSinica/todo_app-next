import Link from 'next/link'
import React from 'react'
import Image from 'next/image';

type LogoProps = {
    logo: any;
}

export default function Logo({logo}: LogoProps) {
  return (
    <Link href={'/'}><Image priority src={logo} alt="LS Logo" className="w-12"/></Link>

  )
}
