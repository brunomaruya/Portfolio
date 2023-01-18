import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import bg from '../public/images/code.jpg';
import profileImg from '../public/images/profile.jpg';

export default function Home() {
  return (
    <>
      <Layout>
        <main className="h-full px-10">
          <section className=" max-width h-screen flex flex-col items-start justify-center">
            <div className=" w-full pt-16 md:pt-0 flex flex-col md:flex-row justify-between items-center gap-8">
              <div>
                <h1 className="text-5xl text-center sm:text-6xl lg:text-7xl sm:text-left">
                  Hi There!
                </h1>

                <h1 className="text-5xl text-center sm:text-6xl lg:text-7xl sm:text-left">
                  I&apos;m&nbsp;
                  <span className="text-primary-color">Bruno Maruya</span>
                </h1>
              </div>
              <div className="">
                <img src="https://media.giphy.com/media/zhYSVCirREeIZtONCI/giphy.gif" />
              </div>
            </div>
          </section>
          <section className="flex flex-col md:flex-row items-center gap-10">
            <div className="">
              <h1 className="text-5xl mb-7 text-center md:text-left">
                Let Me <span className="text-primary-color">Introduce</span>{' '}
                Myself
              </h1>
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
          <section className="flex flex-col justify-center items-center mt-20">
            <h1 className="text-5xl mb-7">Find Me On</h1>
            <h2 className="text-2xl">
              Feel free to{' '}
              <strong className="text-primary-color ">connect</strong> with me
            </h2>
            <ul className="mt-5 flex gap-x-8">
              <li>
                <Link
                  href={'https://github.com/brunomaruya'}
                  target="_blank"
                  title="https://github.com/brunomaruya"
                >
                  <i className="devicon-github-original text-4xl "></i>
                </Link>
              </li>
              <li>
                <Link
                  href={'https://www.linkedin.com/in/bruno-maruya/'}
                  target="_blank"
                  title="https://www.linkedin.com/in/bruno-maruya/"
                >
                  <i className="devicon-linkedin-plain text-4xl "></i>
                </Link>
              </li>
            </ul>
          </section>
        </main>
      </Layout>
    </>
  );
}
