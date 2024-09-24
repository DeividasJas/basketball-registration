'use client';
import { navLinks } from '@/types/navLinks';
import { User } from '@/types/user';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from '@kinde-oss/kinde-auth-nextjs/components';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const pathname = usePathname();
  // const isauthenticated = isAuthenticated();
  // console.log(isauthenticated);

  useEffect(() => {
    const checkAuthGetUser = async () => {
      const response = await fetch('/api/auth');
      const { isAuthenticated } = await response.json();
      setIsAuthenticated(isAuthenticated);

      const userResponse = await fetch('/api/user');
      const user: User = await userResponse.json();
      setUser(user);
    };
    checkAuthGetUser();
  }, []);
  return (
    <>
      <header className='flex justify-between items-center'>
        <Link href='/'>
          <Image
            src={'/basketball.svg'}
            width='40'
            height='40'
            alt='basketball'
            className='m-3'
          />
        </Link>
        <nav className=''>
          <ul className='flex gap-4 mr-3 sm:text-xl'>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`my-navbar ${
                    pathname === link.href ? 'text-zinc-800' : 'text-zinc-400'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {isAuthenticated ? (
              <li>
                <LogoutLink className='my-navbar text-zinc-400'>
                  Logout {user && user.given_name}
                </LogoutLink>
              </li>
            ) : (
              <>
                <li>
                  <LoginLink className='my-navbar text-zinc-400'>
                    Sign in
                  </LoginLink>
                </li>
                <li>
                  <RegisterLink className='my-navbar text-zinc-400'>
                    Sign up
                  </RegisterLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
}
