import Image from 'next/image';
import { Envelope, GithubLogo, LinkedinLogo } from 'phosphor-react';
import React, { FormEvent, useEffect, useRef, useState } from 'react';
import Layout from '../components/Layout';
import background from '../public/images/code2.jpg';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const notify = () =>
    toast('Your message has been successfully sent!', {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  const serviceId = String(process.env.NEXT_PUBLIC_SERVICE_ID);
  const templateId = String(process.env.NEXT_PUBLIC_TEMPLATE_ID);
  const publicId = String(process.env.NEXT_PUBLIC_PUBLIC_ID);
  console.log(process.env.NEXT_PUBLIC_PUBLIC_ID);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, e.currentTarget, publicId).then(
      (result) => {
        console.log(result.text);
        console.log('working in local');
      },
      (error) => {
        console.log(`The errrrrorr is: ${error.text}`);
      }
    );
    e.currentTarget.reset();
    notify();
  };

  return (
    <Layout>
      <main className="max-width px-10 pt-32 flex flex-col lg:grid lg:grid-cols-2 lg:grid-flow-row lg:gap-10 overflow-hidden">
        <section className="mb-32">
          <h1 className="text-5xl mb-20   text-primary-color">
            Send me some Message
          </h1>

          <form
            className="flex flex-col gap-10"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="flex flex-col gap-5 lg:flex-row lg:w-full  ">
              <div className="flex flex-col gap-3 lg:w-full">
                <label className="text-xl" htmlFor="name">
                  Your Name
                </label>
                <input
                  className="text-black py-2 px-4 rounded-md w-full"
                  type="text"
                  id="name"
                  placeholder="Enter Your Name"
                  name="from_name"
                  required
                />
              </div>

              <div className="flex flex-col gap-3 lg:w-full">
                <label className="text-xl" htmlFor="email">
                  Your Email
                </label>
                <input
                  className="text-black py-2 px-4 rounded-md w-full"
                  type="email"
                  id="email"
                  placeholder="Enter Your Email"
                  name="email"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-xl" htmlFor="message">
                Your Message
              </label>
              <textarea
                className="text-black py-2 px-4 rounded-md"
                name="message"
                id="message"
                cols={30}
                rows={10}
                placeholder="Enter Your Message"
                required
              ></textarea>
            </div>
            <input
              className="bg-primary-color-darker p-3 text-xl rounded-md hover:brightness-75 duration-75"
              type="submit"
              value="Send"
            />
          </form>
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            style={{ width: '400px' }}
          />
        </section>
        <section
          className="bg-gradient-to-b from-gray-800  to-gray-700  relative  w-screen left-[calc(-50vw_+_50%)]
                     pb-5                                                         md:w-screen md:right-0 md:left-auto"
        >
          <Image
            className="w-full h-full object-cover absolute mix-blend-overlay blur-[1.5px]"
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
                <i className="devicon-linkedin-plain text-3xl  "></i>
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
