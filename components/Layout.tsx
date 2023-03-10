import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Header from './Header';
// import bg from '../public/images/code.jpg';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>BrunoMaruya | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        ></link>
      </Head>
      <div>
        <Header />
        <main className="h-full ">
          <div className="image-bg "></div>
          <div className="max-width ">{children}</div>
        </main>

        <Footer />
      </div>
    </>
  );
}
