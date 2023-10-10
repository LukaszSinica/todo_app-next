import React from 'react'
import LogoIcon from '@/public/logo.svg'
import Logo from '../components/logo';
import LogoutButton from '../components/logoutButton';
import { Session } from 'next-auth';

type HeaderProps = {
  session: Session | null;
}

export default async function Header({session}: HeaderProps) {

  return (
    <header className="w-100 h-16 bg-stone-300 flex items-center p-8 shadow-md">
      <Logo logo={LogoIcon}/>
      {session?.user?.email ? <LogoutButton /> : null
      }
    </header>
  )
}
