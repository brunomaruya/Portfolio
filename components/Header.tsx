import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  Hamburger,
  House,
  Lightbulb,
  List,
  Newspaper,
  User,
  X,
} from 'phosphor-react';

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

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuStyles = isMenuOpen
    ? 'right-0 shadow-[0_0_60px_0_rgba(0,0,0,1)] '
    : 'right-[-20rem] shadow-none ';

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const openMenu = () => {
    setIsMenuOpen(true);
    console.log('opened');
  };

  return (
    <>
      <header className={`w-screen fixed top-0 ${headerBg} z-30 px-10 `}>
        <div className=" max-width h-[70px]  flex items-center justify-between py-4">
          <div>
            <Link href="/">
              <strong className="text-3xl text-primary-color">Bm</strong>
            </Link>
          </div>
          <List
            onClick={openMenu}
            className={`absolute right-0 mx-10  text-4xl md:block lg:hidden`}
          />
          <nav className={`  `}>
            <ul
              className={`absolute flex ${menuStyles} 
              
              duration-100  flex-col w-80 top-0  h-screen
               bg-background  px-24 pt-20 gap-12 text-xl 
               lg:bg-transparent lg:flex-row lg:static lg:h-full lg:gap-5 lg:p-0  lg:w-full lg:duration-[0] lg:shadow-none`}
            >
              <X
                onClick={closeMenu}
                className="absolute z-30 top-0 right-0 text-4xl my-5 mx-10 lg:hidden"
              />
              <li
                className={router.pathname == '/' ? 'text-primary-color' : ''}
              >
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
    </>
  );
}
