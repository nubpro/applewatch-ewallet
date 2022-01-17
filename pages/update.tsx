import type { NextPage } from "next";
import Head from "next/head";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import Menu from "../components/menu";
import Footer from "../components/footer";
import viewShortcutPic from "../public/view-shortcut.png";
import Image from "next/image";
import getMaybankTokenPic from "../public/get-maybank-token.png";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>awwallet | Updating awallet</title>
        <meta
          name="google-site-verification"
          content="1AZpUVyibVdjocfPK11efOFJXH-pqKXsr-D0DSGVqcc"
        />
      </Head>

      <div className="bg-primary-400">
        <div className="px-4 md:px-10">
          <Menu />
        </div>
      </div>

      <div className="space-y-12 mt-5 md:mt-10 px-4 md:px-10">
        <div className="text-center">
          <div className="font-extrabold text-xl py-4 md:text-2xl text-secondary-400">
            Steps to Update awwallet
          </div>

          <div className="space-y-6 mt-4">
            <div>
              <div className="font-semibold">
                1. Open Shortcuts app on your iPhone
              </div>
            </div>

            <div>
              <div className="font-semibold">
                {'2. Tap "..." to open the "Pay with Maybank" shortcut'}

                <div className="mt-2">
                  <Image
                    src={viewShortcutPic}
                    alt="View Pay with Maybank shortcut"
                    width={150}
                    height={98}
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="font-semibold">
                3. Scroll down until it almost reaches the end of the screen.
                <br />
                {
                  'While scrolling, look for a long list of text. It starts with "adapter=POSTLOGIN..."'
                }
              </div>

              <div className="w-72 m-auto mt-2">
                <Image
                  src={getMaybankTokenPic}
                  alt="Get Maybank token"
                  layout={"responsive"}
                />
              </div>
            </div>

            <div>
              <div className="font-semibold">
                4. Tap on the text once. It should highlight everything. Copy
                it.
              </div>
            </div>

            <div>
              <div className="font-semibold">
                5. Install the latest shortcut. During the setup process, it
                will ask for Maybank secret token.
                <br />
                Paste what you copied previously.
              </div>
            </div>

            <div>
              <div className="font-semibold">
                6. Add the shortcut. Replace it if it asked.
              </div>
            </div>

            <div>
              <div className="font-semibold">
                7. You have completed the update process. Test it.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-5 mt-10">
        <Footer />
      </div>
    </>
  );
};

export default Home;
