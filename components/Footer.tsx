import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <div className=" w-full mt-auto ">
      <div className=" flex justify-between items-center bg-black py-5 px-6">
        <div>
          <Link href="https://soumyajit.vercel.app/" target="_blank">
            soumyajit4419&apos;s portfolio as reference model
          </Link>
        </div>
        <div>
          <ul className="flex gap-5">
            <li>
              <Link
                href={'https://github.com/brunomaruya'}
                target="_blank"
                title="https://github.com/brunomaruya"
              >
                <i className="devicon-github-original text-3xl "></i>
              </Link>
            </li>
            <li>
              <Link
                href={'https://www.linkedin.com/in/bruno-maruya/'}
                target="_blank"
                title="https://www.linkedin.com/in/bruno-maruya/"
              >
                <i className="devicon-linkedin-plain text-3xl "></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
