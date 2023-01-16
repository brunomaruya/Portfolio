import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { House, Lightbulb, Newspaper, User } from 'phosphor-react';

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
          <Link href="/">
            <strong className="text-3xl text-primary-color">Bm</strong>
          </Link>
        </div>
        <nav>
          <ul className="flex gap-12 text-xl">
            <li className={router.pathname == '/' ? 'text-primary-color' : ''}>
              <Link
                href="/"
                className="flex items-center gap-1 hover:text-gray-400 duration-100 "
              >
                <House /> Home
              </Link>
            </li>
            <li
              className={
                router.pathname == '/about' ? 'text-primary-color' : ''
              }
            >
              <Link
                href="/about"
                className="flex items-center gap-1 hover:text-gray-400 duration-100"
              >
                <User /> About
              </Link>
            </li>
            <li
              className={
                router.pathname == '/projects' ? 'text-primary-color' : ''
              }
            >
              <Link
                href="/projects"
                className="flex items-center gap-1 hover:text-gray-400 duration-100"
              >
                <Lightbulb /> Projects
              </Link>
            </li>
            <li
              className={
                router.pathname == '/resume' ? 'text-primary-color' : ''
              }
            >
              <Link
                href="/resume"
                className="flex items-center gap-1 hover:text-gray-400 duration-100"
              >
                <Newspaper />
                Resume
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
