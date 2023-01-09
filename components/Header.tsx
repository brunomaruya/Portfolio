import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function Header() {
  const headerWhenTop = 'bg-transparent';
  const headerWhenNotTop =
    'backdrop-blur-[1px] backdrop-saturate-200  bg-navbar-on-scroll ';

  const [headerBg, setHeaderBg] = useState(headerWhenTop);
  const [scrollY, setScrollY] = useState(0);

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
    <header className={`w-screen  fixed top-0 ${headerBg} `}>
      <div className=" max-width h-[70px] flex items-center justify-between py-4">
        <div>
          <strong className="text-3xl">Bm</strong>
        </div>
        <nav>
          <ul className="flex gap-12">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/resume">Resume</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
