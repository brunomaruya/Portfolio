import Image from 'next/image';
import Layout from '../components/Layout';
import bg from '../public/images/code.jpg';

export default function Home() {
  return (
    <>
      <Layout>
        <main className="">
          <div className="image-bg "></div>{' '}
          <div className="   max-width h-screen flex flex-col items-start justify-center">
            <h1 className="block">Hi There!</h1>
            <h1 className="block">I'm Bruno Maruya</h1>
          </div>
        </main>
      </Layout>
    </>
  );
}
