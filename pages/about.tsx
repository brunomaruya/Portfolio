import Image from 'next/image';
import React from 'react';
import Layout from '../components/Layout';
import profileImg from '../public/images/profile.jpg';
import skillsLogosData from '../data/skillsLogos.json';
import GitHubCalendar from 'react-github-calendar';

export default function About() {
  return (
    <>
      <Layout>
        <main className="max-width">
          <section className=" h-screen flex flex-col items-start justify-center">
            <div className="flex gap-10">
              <div>
                <h1 className="text-5xl mb-4">
                  <span className="text-primary-color">Know Who </span>I Am
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  facilis blanditiis, aspernatur ipsa fuga repellat excepturi
                  iure. Dicta mollitia aut eius sint minus ipsam, sit
                  recusandae, provident, enim eveniet iure.
                </p>
              </div>
              <Image
                src={profileImg}
                alt=""
                className="max-w-[15rem] max-h-[15rem] object-cover"
              />
            </div>
          </section>
          <section className="w-full  ">
            <h1 className="text-5xl mb-14 flex justify-center">
              <span className="text-primary-color">Skills</span>
            </h1>
            <div className="flex justify-center flex-wrap gap-x-20 gap-y-10">
              {skillsLogosData.map((skillLogo) => {
                return (
                  <div
                    key={skillLogo.id}
                    className="flex justify-center items-center border rounded-md
                    border-primary-color p-10 hover:scale-105 duration-100"
                  >
                    <i className={`text-7xl ${skillLogo.logoUrl}`}></i>
                  </div>
                );
              })}
            </div>
          </section>
          <section className="mt-48 flex flex-col items-center justify-center">
            <h1 className="text-5xl mb-14 ">
              Days I&nbsp;<strong className="text-primary-color">Code</strong>
            </h1>
            <GitHubCalendar username="brunomaruya" color="rgb(14 165 233)" />
          </section>
        </main>
      </Layout>
    </>
  );
}
