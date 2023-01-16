import Image from 'next/image';
import React from 'react';
import Layout from '../components/Layout';
import projectsData from '../data/projects.json';
import Link from 'next/link';
import { AppWindow } from 'phosphor-react';

export default function Projects() {
  return (
    <Layout>
      <main className=" pt-[200px]">
        <section className="min-h-screen">
          <h1 className="text-5xl mb-14 flex justify-center text-primary-color">
            Projects
          </h1>
          <div className="grid grid-cols-3 grid-flow-row gap-10">
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="text-center bg-navbar-on-scroll py-3 px-6 border border-primary-color rounded-md"
              >
                <Image
                  width={400}
                  height={300}
                  src={project.imageUrl}
                  alt="project image"
                  className="mb-5"
                />
                <h1 className="text-3xl mb-5">{project.name}</h1>
                <p className="break-words mb-4">{project.description}</p>
                <div className="flex justify-center gap-5">
                  <Link
                    href={project.githubrUrl}
                    className="flex items-center gap-2 bg-primary-color-darker  py-2 px-3 rounded-md hover:brightness-75 duration-100"
                    target="_blank"
                  >
                    <i className="devicon-github-original text-xl "></i>
                    GitHub
                  </Link>
                  <Link
                    href={project.url}
                    target="_blank"
                    className="flex items-center gap-2 bg-primary-color-darker py-2 px-3 rounded-md hover:brightness-75 duration-100"
                  >
                    <AppWindow />
                    Demo
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
