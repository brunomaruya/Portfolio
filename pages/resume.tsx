import React from 'react';
import Layout from '../components/Layout';
import resumeImg from '../public/images/resume.jpg';
import Image from 'next/image';
import useDownloader from 'react-use-downloader';

export default function Resume() {
  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();

  const fileUrl = '/images/resume.pdf';
  const fileName = 'BrunoMaruyaResume.pdf';

  return (
    <Layout>
      <section className="  flex flex-col items-center">
        <h1 className="pt-20  md:pt-32 text-center text-5xl mb-6 md:mb-10 text-primary-color">
          Resume
        </h1>

        <div className="flex flex-col md:flex-row gap-3 md:gap-10 w-32 md:w-72 mb-5 md:mb-10">
          <a
            className="flex-1 bg-primary-color-darker text-center p-1 md:p-2 rounded-xl hover:brightness-75 duration-100"
            href="/images/resume.pdf"
            target="_blank"
          >
            Open
          </a>
          <button
            className="flex-1 bg-primary-color-darker text-center p-1 md:p-2 rounded-xl hover:brightness-75 duration-100"
            onClick={() => download(fileUrl, fileName)}
          >
            Download
          </button>
        </div>

        <div className="w-[350px] lg:w-[1000px]  mb-10">
          <Image className="rounded-md" src={resumeImg} alt="" />
        </div>
      </section>
    </Layout>
  );
}
