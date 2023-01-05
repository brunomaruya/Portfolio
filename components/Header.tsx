import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className="w-screen bg-black">
      <div className=" max-width flex items-center justify-between py-4">
        <div>
          <strong className="text-3xl">Bm</strong>
        </div>
        <nav>
          <ul className="flex gap-4">
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
