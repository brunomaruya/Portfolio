import Image from 'next/image';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import bg from '../public/images/code.jpg';
import profileImg from '../public/images/profile.jpg';

export default function Home() {
  return (
    <>
      <Layout>
        <main className="h-full">
          <section className=" max-width h-screen flex flex-col items-start justify-center">
            <h1 className="text-7xl">Hi There!</h1>
            <h1 className="text-7xl">I&apos;m Bruno Maruya</h1>
          </section>
          <section className="flex items-center gap-10">
            <div className="">
              <h1 className="text-5xl mb-7">Let Me Introduce Myself</h1>
              <p className="mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium consectetur earum, velit, saepe dolorem culpa
                consequuntur fugit facilis adipisci corporis deserunt sed
                provident blanditiis quo esse sit. At, voluptate deleniti.
              </p>
              <p className="mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium consectetur earum, velit, saepe dolorem culpa
                consequuntur fugit facilis adipisci corporis deserunt sed
                provident blanditiis quo esse sit. At, voluptate deleniti.
              </p>
              <p className="mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium consectetur earum, velit, saepe dolorem culpa
                consequuntur fugit facilis adipisci corporis deserunt sed
                provident blanditiis quo esse sit. At, voluptate deleniti.
              </p>
            </div>
            <Image
              className="max-w-[15rem] max-h-[15rem] object-cover rounded-full"
              alt=""
              src={profileImg}
            />
          </section>
        </main>
      </Layout>
    </>
  );
}
