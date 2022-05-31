import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>awwallet | Terms of Service</title>
      </Head>
      <div className="bg-white w-full h-full z-10 fixed flex flex-col items-center pt-10 px-5">
        <div
          className="font-extrabold text-xl py-4 md:text-2xl text-center text-secondary-400"
          id="howto"
        >
          Terms of Service
        </div>
        <ul className="list-disc px-5 space-y-3 font-medium">
          <div>
            By agreeing, accessing or utilizing awwallet or any page or part
            thereof, you agree to be bounded to these terms and conditions. If
            you choose NOT to accept these terms and conditions or any of its
            revisions, please do not proceed and immediately discontinue your
            access and/or use of awwallet.
          </div>
          <li>
            Use &quot;awwallet&quot; at your own risk. You understand the risk
            involved when sharing your credential token with us.
          </li>
          <li>
            We (&quot;awwallet&quot;) will not assume any legal responsibility
            in case any mishaps happen to your banking accounts such as but not
            limited to account theft, misappropriation of funds.
          </li>

          <li>
            &quot;awwallet&quot; is not affiliated with Malayan Banking Berhad,
            Grab Holdings Inc., Boost, Shopee and/or any entities under these
            companies.
          </li>

          <li>
            &quot;awwallet&quot; do not and will not store your credentials,
            banking information, credit cards, financial information in any
            servers.
          </li>
          <li>
            By using awwallet, you have consented awwallet to collect, store and
            process your personal information such as but not limited to your
            name, your address, your email, your phone number. awwallet also
            collects your usage pattern of awwallet to better enhance the
            service&apos;s experience. These information will not be shared with
            any third-party.
          </li>
        </ul>

        <div className="mt-4">
          <Link href="/">
            <a className="bg-primary-400 mt-8 py-4 px-8 font-extrabold text-primary-900 rounded-2xl md:text-xl inline-block shadow-xl">
              Return to home
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
