import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Header() {
  const headerWhenTop = 'bg-transparent';
  const headerWhenNotTop =
    'backdrop-blur-[10px] backdrop-saturate-200  bg-navbar-on-scroll ';
  const [headerBg, setHeaderBg] = useState(headerWhenTop);
  const [scrollY, setScrollY] = useState(0);
  const router = useRouter();

  useEffect(() => {
    function runOnScroll() {
      if (window.scrollY > 0) {
        setHeaderBg(headerWhenNotTop);
        setScrollY(window.scrollY);
      } else {
        setHeaderBg(headerWhenTop);
      }
    }
    window.addEventListener('scroll', runOnScroll);
  }, [scrollY]);

  return (
    <header className={`w-screen  fixed top-0 ${headerBg} z-30`}>
      <div className=" max-width h-[70px] flex items-center justify-between py-4">
        <div>
          <strong className="text-3xl text-primary-color">Bm</strong>
        </div>
        <nav>
          <ul className="flex gap-12">
            <li className={router.pathname == '/' ? 'text-primary-color' : ''}>
              <Link href="/">Home</Link>
            </li>
            <li
              className={
                router.pathname == '/about' ? 'text-primary-color' : ''
              }
            >
              <Link href="/about">About</Link>
            </li>
            <li
              className={
                router.pathname == '/projects' ? 'text-primary-color' : ''
              }
            >
              <Link href="/projects">Projects</Link>
            </li>
            <li
              className={
                router.pathname == '/resume' ? 'text-primary-color' : ''
              }
            >
              <Link href="/resume">Resume</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
