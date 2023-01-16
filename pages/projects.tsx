import Image from 'next/image';
import React from 'react';
import Layout from '../components/Layout';
import projectsData from '../data/projects.json';

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
                className="text-center bg-navbar-on-scroll py-3 px-10 border border-primary-color rounded-md"
              >
                <h1>{project.name}</h1>
                <Image width={40} height={30} src={project.imageUrl} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
