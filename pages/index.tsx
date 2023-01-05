import Image from 'next/image';
import Layout from '../components/Layout';
import bg from '../public/images/code.jpg';

export default function Home() {
  return (
    <>
      <Layout>
        <main className="bg-[url(../public/images/code.jpg)] bg-cover bg-center h-screen">
          <div className=" ">
            <div className="pt-[70px] ">
              <h1 className=" max-width ext-3xl font-bold underline pt-[100rem] ">
                Hello world!
              </h1>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
