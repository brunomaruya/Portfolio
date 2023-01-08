import Image from 'next/image';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import bg from '../public/images/code.jpg';

export default function Home() {
  return (
    <>
      <Layout>
        <main className="h-full">
          <section className=" max-width h-screen flex flex-col items-start justify-center">
            <h1 className="text-7xl">Hi There!</h1>
            <h1 className="text-7xl">I&apos;m Bruno Maruya</h1>
          </section>
          <section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            consectetur earum, velit, saepe dolorem culpa consequuntur fugit
            facilis adipisci corporis deserunt sed provident blanditiis quo esse
            sit. At, voluptate deleniti.
          </section>
        </main>
      </Layout>
    </>
  );
}
