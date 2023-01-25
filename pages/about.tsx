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
        <main className="max-width  px-10">
          <section className="pt-5 md:pt-0  h-screen flex flex-col items-start justify-center">
            <div className="w-full flex flex-col md:flex-row items-center md:items-start md:justify-between gap-10 md:gap-60">
              <div>
                <h1 className=" text-4xl md:text-5xl mb-4 text-center md:text-left">
                  <span className="text-primary-color">Know Who </span>I Am
                </h1>
                <div className="md:text-2xl">
                  <p className="mb-3">
                    <span className="text-primary-color">Hi Everyone</span> , I
                    am Bruno Maruya from Aichi, Japan.
                  </p>
                  <p>
                    Learning{' '}
                    <span className="text-primary-color">
                      Front-End Development
                    </span>{' '}
                    through Internet Courses and applying the acquired knowledge
                    in my projects
                  </p>
                </div>
              </div>

              <Image
                src={profileImg}
                alt=""
                className="max-w-[17rem] max-h-[17rem] md:max-w-[20rem] md:max-h-[20rem] object-cover  rounded-full"
              />
            </div>
          </section>
          <section className="w-full   ">
            <h1 className="text-5xl mt-[-3rem] md:mt-[-10rem] mb-14 flex justify-center">
              <span className="text-primary-color">Skills</span>
            </h1>
            <div className="flex justify-center flex-wrap gap-x-3 md:gap-x-20 gap-y-10">
              {skillsLogosData.map((skillLogo) => {
                return (
                  <div
                    key={skillLogo.id}
                    className="flex justify-center items-center border rounded-md
                    border-primary-color p-3 md:p-10 hover:scale-105 duration-100"
                  >
                    <i
                      className={`text-5xl md:text-7xl ${skillLogo.logoUrl}`}
                    ></i>
                  </div>
                );
              })}
            </div>
          </section>
          <section className="mt-10 md:mt-48 mb-10 md:mb-40 flex flex-col items-center justify-center">
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
