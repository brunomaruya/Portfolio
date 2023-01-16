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
          <div>
            {projectsData.map((project) => (
              <div key={project.id}>
                <h1>{project.name}</h1>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
