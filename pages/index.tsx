import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import mockupPic from "../public/applewatch-mockup.png";
import logoPic from "../public/logo.png";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>awwallet | Malaysia First e-Wallet on the Apple Watch</title>
      </Head>

      <div className="bg-primary-400">
        <div className="px-4 md:px-10">
          <div className="flex justify-between py-5 md:py-7">
            <div>
              <div className="font-extrabold text-secondary-400 md:text-xl">
                <Link href="/">
                  <a className="flex items-center">
                    <div className="w-4 mr-2 md:w-6 md:mr-3">
                      <Image
                        src={logoPic}
                        alt="awwallet's logo"
                        layout="responsive"
                      />
                    </div>
                    <div>awwallet</div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-5 text-primary-900 font-semibold text-sm md:text-base">
              <a href="#howto">How-to</a>
              <Link href="/legal">
                <a>Legal</a>
              </Link>
              <a
                href="https://github.com/nubpro/applewatch-ewallet"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="font-extrabold text-xl uppercase text-primary-900 ml-0.5 md:text-4xl">
            Get Malaysia first e-Wallet on your wrist
          </div>
          <div className="font-semibold text-primary-850 md:text-2xl md:mt-2 md:space-y-1">
            <p>100% Free. 100% Open.</p>
            <p>Supports Maybank QRPay</p>
            <p>Works on the Apple Watch without an iPhone tethered</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center md:flex-row">
          <div className="sm:-ml-10 py-10 w-full md:w-1/2 md:-ml-0">
            <Image
              src={mockupPic}
              alt="apple watch mockup photo"
              layout="responsive"
              priority={true}
              placeholder="blur"
            />
          </div>

          <div className="md:flex-1 px-4">
            <div className="md:w-4/6 m-auto">
              <div className="text-sm font-medium italic text-center mb-1">
                Play the demo
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <video
                  className="rounded-md overflow-hidden "
                  controls
                  preload="metadata"
                >
                  <source src="/demo1.mp4#t=0.5" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 md:px-6 py-5">
          <div className="text-[10px] font-normaltext-primary-850 text-center">
            &quot;awwallet&quot; is not affiliated with Maybank, M2U and/or any
            entities under Malayan Banking Berhad. We just like the colour
            yellow.
          </div>
        </div>
      </div>
      <div className="py-6 text-center flex flex-col items-center">
        <div
          className="font-extrabold text-xl py-4 md:text-2xl text-secondary-400"
          id="howto"
        >
          WHAT YOU NEED
        </div>
        <div className="text-left">
          <p>✅ iPhone (iOS 13 and above)</p>
          <p>✅ Apple Watch (watchOS 7 and above)</p>
          <p>
            ✅ Install{" "}
            <a
              href="https://apps.apple.com/my/app/maybank2u-my/id1192180092"
              target="_blank"
              rel="noreferrer"
              className="border-dotted border-b-2 border-black"
            >
              Maybank2u MY
            </a>{" "}
            app on your iPhone
          </p>
        </div>
      </div>
      <div className="py-6 text-center px-4 md:px-10">
        <div className="font-extrabold text-xl py-4 md:text-2xl text-secondary-400">
          HOW-TO
        </div>

        <div>
          <div className="font-semibold text-md md:text-xl">
            1. Watch this video to learn how to setup it up
          </div>
          <div className="md:w-2/4 m-auto mt-3">
            <LiteYouTubeEmbed
              id="8CbVSXmF5PY"
              title="Setup Maybank e-Wallet on your Apple Watch!"
              poster="maxresdefault"
            />
          </div>
        </div>

        <div className="mt-8">
          <div className="font-semibold text-md md:text-xl">
            2. Install the shortcut on your iPhone
          </div>
          <a
            href="https://www.icloud.com/shortcuts/4ed4397fae5d48bca9a473fd6b3dd2a7"
            target="_blank"
            rel="noreferrer"
            className="bg-secondary-400 mt-8 py-4 px-8 font-extrabold text-white rounded-2xl md:text-xl inline-block motion-safe:animate-bounce"
          >
            <div className="flex items-center">
              <svg
                id="arrow-down-circle"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 94.063 94.063"
                className="mr-2"
              >
                <path
                  id="Path_1"
                  data-name="Path 1"
                  d="M47.031,88.184A41.152,41.152,0,1,0,5.879,47.031,41.152,41.152,0,0,0,47.031,88.184Zm0,5.879A47.031,47.031,0,1,0,0,47.031,47.031,47.031,0,0,0,47.031,94.063Z"
                  fill="#fff"
                  fillRule="evenodd"
                />
                <path
                  id="Path_2"
                  data-name="Path 2"
                  d="M10.987,17.736a2.939,2.939,0,0,1,4.162,0L30.7,33.3,46.261,17.736A2.943,2.943,0,1,1,50.423,21.9L32.786,39.535a2.939,2.939,0,0,1-4.162,0L10.987,21.9a2.939,2.939,0,0,1,0-4.162Z"
                  transform="translate(16.328 27.213)"
                  fill="#fff"
                  fillRule="evenodd"
                />
                <path
                  id="Path_3"
                  data-name="Path 3"
                  d="M19.814,10.125a2.939,2.939,0,0,1,2.939,2.939V42.459a2.939,2.939,0,0,1-5.879,0V13.064A2.939,2.939,0,0,1,19.814,10.125Z"
                  transform="translate(27.217 16.33)"
                  fill="#fff"
                  fillRule="evenodd"
                />
              </svg>
              {'Download "Pay with Maybank" shortcut'}
            </div>
          </a>
        </div>

        <div className="mt-8">
          <div className="font-semibold text-md md:text-xl">
            {
              "3. Join our Discord channel (Apple Malaysia) to get help and updates!"
            }
          </div>
          <div className="font-medium py-2">
            {"Share your result with us, we love to see them!"}
            <br />
          </div>

          <div className="mt-2">
            <a href="https://discord.gg/5wn4SsWpUy">
              <Image
                src="https://discordapp.com/api/guilds/783756405945401374/embed.png?style=banner3"
                alt="Apple Malaysia Discord invite link"
                width={320}
                height={140}
                className="rounded-xl"
              />
            </a>
          </div>
        </div>

        <div className="text-sm mt-6 py-4 font-medium">
          <a
            href="https://www.instagram.com/chaiwkhai"
            target="_blank"
            rel="noreferrer"
          >
            <p>made by CWK</p>
            <p className="flex justify-center">
              <span className="border-dotted border-b-2 border-black flex items-center">
                Follow his Instagram
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 30.002 30.001"
                  className="inline-block ml-0.5"
                >
                  <path
                    id="instagram"
                    d="M18,3c-4.074,0-4.584.018-6.184.09a11.04,11.04,0,0,0-3.641.7A7.666,7.666,0,0,0,3.787,8.175a11.06,11.06,0,0,0-.7,3.641C3.017,13.416,3,13.926,3,18s.017,4.584.09,6.184a11.04,11.04,0,0,0,.7,3.641,7.664,7.664,0,0,0,4.388,4.388,11.06,11.06,0,0,0,3.641.7c1.6.072,2.111.09,6.184.09s4.584-.018,6.184-.09a11.04,11.04,0,0,0,3.641-.7,7.664,7.664,0,0,0,4.388-4.388,11.06,11.06,0,0,0,.7-3.641c.072-1.6.09-2.111.09-6.184s-.018-4.584-.09-6.184a11.04,11.04,0,0,0-.7-3.641,7.664,7.664,0,0,0-4.388-4.388,11.06,11.06,0,0,0-3.641-.7C22.584,3.018,22.074,3,18,3m0,2.7c4.005,0,4.479.015,6.06.087a8.334,8.334,0,0,1,2.787.516,4.966,4.966,0,0,1,2.847,2.847,8.324,8.324,0,0,1,.516,2.785c.072,1.583.087,2.055.087,6.062s-.015,4.479-.087,6.06a8.386,8.386,0,0,1-.516,2.787,4.966,4.966,0,0,1-2.847,2.847,8.324,8.324,0,0,1-2.785.516c-1.581.072-2.055.087-6.062.087s-4.481-.015-6.06-.087a8.386,8.386,0,0,1-2.787-.516,4.966,4.966,0,0,1-2.847-2.847,8.272,8.272,0,0,1-.516-2.785C5.718,22.479,5.7,22.007,5.7,18s.015-4.479.087-6.06a8.334,8.334,0,0,1,.516-2.787A4.966,4.966,0,0,1,9.153,6.306a8.272,8.272,0,0,1,2.785-.516C13.521,5.718,13.993,5.7,18,5.7M18,23a5,5,0,1,1,5-5,5,5,0,0,1-5,5m0-12.7A7.7,7.7,0,1,0,25.7,18,7.7,7.7,0,0,0,18,10.3m9.807-.3a1.8,1.8,0,1,1-1.8-1.8,1.8,1.8,0,0,1,1.8,1.8"
                    transform="translate(-3 -3)"
                    fillRule="evenodd"
                  />
                </svg>
              </span>
            </p>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
