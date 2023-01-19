import Image from 'next/image';
import { Envelope, GithubLogo, LinkedinLogo } from 'phosphor-react';
import React from 'react';
import Layout from '../components/Layout';
import background from '../public/images/code2.jpg';

export default function Contact() {
  return (
    <Layout>
      <main className="max-width px-10 pt-32 flex flex-col md:grid md:grid-cols-2 md:grid-flow-row md:gap-10 overflow-hidden">
        <section className="mb-32">
          <h1 className="text-5xl mb-20   text-primary-color">
            Send me a Message
          </h1>

          <form className="flex flex-col gap-10">
            <div className="flex flex-col gap-5 lg:flex-row lg:w-full  ">
              <div className="flex flex-col gap-3 lg:w-full">
                <label className="text-xl" htmlFor="name">
                  Your Name
                </label>
                <input
                  className="py-2 px-4 rounded-md w-full"
                  type="text"
                  id="name"
                  placeholder="Enter Your Name"
                />
              </div>

              <div className="flex flex-col gap-3 lg:w-full">
                <label className="text-xl" htmlFor="email">
                  Your Email
                </label>
                <input
                  className="py-2 px-4 rounded-md w-full"
                  type="text"
                  id="email"
                  placeholder="Enter Your Email"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-xl" htmlFor="message">
                Your Message
              </label>
              <textarea
                className="py-2 px-4 rounded-md"
                name="message"
                id="message"
                cols={30}
                rows={10}
                placeholder="Enter Your Message"
              ></textarea>
            </div>
            <input
              className="bg-primary-color-darker p-3 text-xl rounded-md hover:brightness-75 duration-75"
              type="submit"
              value="Send"
            />
          </form>
        </section>
        <section
          className="bg-gradient-to-b from-gray-800  to-blue-900  relative  w-screen left-[calc(-50vw_+_50%)]
                                                                              md:w-screen md:right-0 md:left-auto"
        >
          <Image
            className="w-full h-full object-cover absolute mix-blend-overlay"
            alt="background"
            src={background}
          />
          <div className="px-10">
            <h1 className="text-5xl mb-20 ">Contact Information</h1>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-3 lg:text-2xl">
                <Envelope className="text-3xl " />
                brun0yuj1ym02@gmail.com
              </li>
              <li className="flex items-center gap-3 lg:text-2xl">
                <LinkedinLogo className="text-3xl " />
                bruno-maruya
              </li>
              <li className="flex items-center gap-3 lg:text-2xl">
                <i className="devicon-github-original text-3xl  "></i>
                brunomaruya
              </li>
            </ul>
          </div>
        </section>
      </main>
    </Layout>
  );
}
