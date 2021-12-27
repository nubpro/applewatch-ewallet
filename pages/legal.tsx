import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>AWWALLET | Legal</title>
      </Head>
      <div className="bg-white w-full h-full z-10 fixed flex flex-col items-center pt-10 px-5">
        <div
          className="font-extrabold text-xl py-4 md:text-2xl text-center"
          id="howto"
        >
          {"Let's have a mutual understanding, shall we?"}
        </div>
        <div className="font-bold mt-2 mb-4">
          Legal Disclosure and Privacy Notice
        </div>
        <ul className="list-disc px-5 space-y-3 font-medium">
          <li>
            AWWALLET is not affiliated with Maybank, Maybank2u and/or any
            entities under Malayan Banking Berhad.
          </li>
          <li>
            We (AWWALLET) will not assume any legal responsibility in case any
            mishaps happen to your bank accounts.
          </li>
          <li>Use AWWALLET at your own risk.</li>
          <li>
            AWWALLET do not and will not keep a copy of any credentials and/or
            personal information related to your bank accounts.
          </li>
        </ul>

        <div className="mt-4">
          <Link href="/">
            <a className="bg-primary-400 mt-8 py-4 px-8 font-extrabold text-primary-900 rounded-2xl md:text-xl inline-block shadow-xl">
              I read the policies and I fully understand.
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
