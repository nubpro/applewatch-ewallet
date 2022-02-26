import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import mockupPic from "../public/applewatch-mockup.png";
import removeProxyman from "../public/remove-proxyman.png";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import * as gtag from "../lib/gtag";
import Menu from "../components/menu";
import Footer from "../components/footer";
import teaserPic from "../public/teaser-ewallets.png";
import Link from "next/link";
import BasicLayout from "../layout/basic.layout";
import GrabPayImage from "../public/ewallets/grabpay.png";
import MAEImage from "../public/ewallets/mae.png";
import BoostImage from "../public/ewallets/boost.png";
import ShopeePayImage from "../public/ewallets/shopeepay.png";
import M2UImage from "../public/ewallets/m2u.png";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>awwallet | Malaysia First e-Wallet on the Apple Watch</title>
        <meta
          name="google-site-verification"
          content="1AZpUVyibVdjocfPK11efOFJXH-pqKXsr-D0DSGVqcc"
        />
      </Head>

      <BasicLayout>
        <div className="flex flex-col md:flex-row md:h-[500px]">
          <div className="relative bg-slate-400 overflow-hidden h-[500px] md:w-96">
            {/* Sample placeholde image */}
            {/* <Image
              src={removeProxyman}
              alt="TBA"
              layout="fill"
              className="object-cover"
            /> */}

            <video
              className="w-full h-full object-cover"
              controls={false}
              autoPlay
              loop
              playsInline
              muted
              preload="metadata"
            >
              <source src="/demo1.mp4#t=0.5" type="video/mp4" />
            </video>

            <div className="absolute bottom-0 px-5 pb-4 pt-4 w-full bg-gradient-to-t from-secondary-400">
              <div className="font-extrabold uppercase text-xs text-primary-400 drop-shadow">
                {"What's New"}
              </div>
              <div className="text-white font-bold text-xl [text-shadow:0_2px_0_#661FFC]">
                Pay with GrabPay
                <br />
                on your Apple Watch
              </div>
            </div>
          </div>

          <div className="flex-1 px-5 py-10 md:px-10 md:py-12">
            <div className="md:text-2xl">
              <div className="font-bold">Pay at your favourite restaurant</div>
              <div className="font-extrabold">
                Cash-free. Phone-free. For free.
              </div>
              <div className="font-semibold">
                Uh. The App. No, not the bill...
              </div>
            </div>

            <div className="mt-10">
              <div>Access your favourite eWallets on your Apple Watch</div>
              <div className="space-x-4 mt-6 flex md:space-x-6">
                <div className="flex flex-col justify-center items-center">
                  <Image
                    src={GrabPayImage}
                    alt="GrabPay"
                    width={77}
                    height={65}
                  />
                </div>

                <div className="flex flex-col justify-center items-center">
                  <Image src={M2UImage} alt="M2U" width={200} height={33} />
                </div>
                <br />
                <div className="flex flex-col justify-center items-center">
                  <Image src={BoostImage} alt="Boost" width={158} height={50} />
                  <div className="text-xs italic mt-1 text-center">
                    coming soon
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center">
                  <Image src={MAEImage} alt="MAE" width={119} height={60} />
                  <div className="text-xs italic mt-1 text-center">
                    coming soon
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center">
                  <Image
                    src={ShopeePayImage}
                    alt="ShopeePay"
                    width={261}
                    height={50}
                  />
                  <div className="text-xs italic mt-1 text-center">
                    coming soon
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 py-10 px-3">
          <div className="mt-2 mb-10 md:text-xl font-bold text-center text-secondary-400 [text-shadow:0_2px_0_#FFE419]">
            We currently support the following eWallets
          </div>

          <div className="space-y-14">
            <div className="flex flex-col w-10/12 m-auto space-y-3 justify-center drop-shadow-lg sm:flex-row sm:space-y-0 sm:items-center">
              <a
                href="#"
                className="group h-80 sm:w-64 bg-white hover:bg-gray-100 rounded-2xl overflow-hidden flex flex-col sm:rounded-none sm:rounded-l-2xl"
              >
                <div className="text-center py-3">
                  <div className="relative h-14 mt-2 mb-1">
                    <Image
                      src={GrabPayImage}
                      layout={"fill"}
                      alt="GrabPay"
                      className="object-contain"
                    />
                  </div>
                  <div className="text-xs uppercase font-extrabold tracking-wide">
                    Free Version
                  </div>
                </div>

                <div className="text-sm mb-auto space-y-1 px-6 text-primary-900">
                  <div>High merchant availability</div>
                  <div>Show QR code only</div>
                  <div>Collect GrabReward points</div>
                  <div>Phone-free</div>
                </div>

                <div className="border-t text-center py-3.5 font-bold text-secondary-400 group-hover:bg-gray-100">
                  Get started for FREE
                </div>
              </a>

              <a
                href="#"
                className="group h-[23em] sm:w-72 bg-secondary-500 hover:bg-secondary-700 rounded-2xl flex flex-col drop-shadow-md overflow-hidden"
              >
                <div className="text-center py-3">
                  <div className="relative h-14 mt-2 mb-1">
                    <Image
                      src={GrabPayImage}
                      layout={"fill"}
                      alt="GrabPay"
                      className="object-contain"
                    />
                  </div>
                  <div className="text-xs uppercase font-extrabold tracking-wide text-primary-400">
                    Pro Version
                  </div>
                </div>

                <div className="text-sm mb-auto space-y-1 px-6 text-white">
                  <div>SUPER HIGH merchant availability</div>
                  <div className="font-semibold">💸 Show wallet balance 💸</div>
                  <div className="font-semibold">🎨🖌 Colour your QR code!</div>
                  <div>
                    Show QR code and{" "}
                    <span className="font-semibold">✨ barcode ✨</span>
                  </div>

                  <div>Collect GrabReward points</div>
                  <div>Phone-free</div>
                </div>

                <div className="bg-secondary-500 border-t border-secondary-700 group-hover:bg-secondary-700 group-hover:border-secondary-900 text-center py-3.5 font-semibold text-primary-400 flex flex-row justify-between px-4">
                  <div>Try for free</div>
                  <div>RM0.00/mon</div>
                </div>
              </a>
            </div>

            <div className="flex flex-col w-10/12 m-auto space-y-3 justify-center drop-shadow-lg sm:flex-row sm:space-y-0 sm:items-center">
              <Link href="/m2u/setup-m2u-free">
                <a className="group h-80 sm:w-64 bg-white hover:bg-gray-100 rounded-2xl overflow-hidden flex flex-col">
                  <div className="text-center mt-8 mb-3">
                    <div className="mb-1 flex justify-center">
                      <Image
                        src={M2UImage}
                        alt="M2U"
                        width={150}
                        height={25}
                        className="p-0"
                      />
                    </div>
                    <div className="text-xs uppercase font-extrabold tracking-wide">
                      Free Version
                    </div>
                  </div>

                  <div className="text-sm mb-auto space-y-1 px-6 text-primary-900">
                    <div>Less merchant availability</div>
                    <div>Show QR code only</div>
                    <div>Phone-free</div>
                  </div>

                  <div className="border-t text-center py-3.5 font-bold text-secondary-400 group-hover:bg-gray-100">
                    Get started for FREE
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </BasicLayout>
    </>
  );

  return (
    <>
      <Head>
        <title>awwallet | Malaysia First e-Wallet on the Apple Watch</title>
        <meta
          name="google-site-verification"
          content="1AZpUVyibVdjocfPK11efOFJXH-pqKXsr-D0DSGVqcc"
        />
      </Head>

      <div className="bg-primary-400">
        <div className="px-4 md:px-10">
          <Menu />

          <div className="font-extrabold text-xl text-primary-900 ml-0.5 md:text-3xl leading-6">
            Get Malaysia First e-Wallet on the Apple Watch
          </div>

          <div className="font-extrabold text-xl text-secondary-400 md:text-3xl mt-2 space-y-1 md:mt-4 md:space-y-3">
            <div>{"It's free and open source."}</div>

            <div>
              <div>Pay with just your watch.</div>
              <div>Leave the phone.</div>
            </div>

            <div>
              <div>Supports Maybank QRPay</div>
              <div className="text-sm">(Other e-wallets are coming!)</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center md:flex-row">
          <div className="sm:-ml-10 py-10 w-full md:w-1/2 md:-ml-0">
            <Image
              src={mockupPic}
              alt="apple watch mockup photo"
              layout="responsive"
              priority={true}
            />
          </div>

          <div className="md:flex-1 px-4">
            <div className="md:w-4/6 m-auto">
              <div className="text-sm font-medium italic text-center mb-1">
                Watch the demo
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <video
                  className="rounded-md overflow-hidden "
                  controls={false}
                  autoPlay
                  loop
                  playsInline
                  muted
                  preload="metadata"
                  onClick={() => {
                    gtag.event({
                      action: "play_demo",
                      category: "video",
                    });
                  }}
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

      <div className="space-y-12 mt-5 md:mt-10 px-4 md:px-10">
        <div className="text-center flex flex-col items-center">
          <div
            className="font-extrabold text-xl py-4 md:text-2xl text-secondary-400"
            id="install"
          >
            {"What's Coming? 👀"}
          </div>

          <div>
            <div className="m-auto md:max-w-2xl">
              <a
                href="https://www.facebook.com/groups/347421593618481"
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  gtag.event({
                    action: "open_community",
                    category: "external_links",
                    label: "teaser",
                  });
                }}
              >
                <Image
                  src={teaserPic}
                  alt="Teaser upcoming supported e-wallets on awwallet"
                  className="rounded-xl mt-2"
                  layout={"responsive"}
                />
              </a>
            </div>

            <div className="mt-4 font-semibold text-md md:text-lg">
              e-Wallet providers such as Grab, Touch n Go, Boost may be coming
              to awwallet
              <br />
              Tell us which want you would like to see first!
            </div>

            <a
              href="https://www.facebook.com/groups/347421593618481"
              target="_blank"
              rel="noreferrer"
              className="bg-secondary-400 mt-3 py-4 px-8 font-extrabold text-white rounded-2xl inline-block"
              onClick={() => {
                gtag.event({
                  action: "open_community",
                  category: "external_links",
                  label: "tell us in our fb group",
                });
              }}
            >
              <div className="flex items-center">
                ✋ Tell us in our Facebook Group
              </div>
            </a>
          </div>
        </div>

        <div className="text-center flex flex-col items-center">
          <div
            className="font-extrabold text-xl py-4 md:text-2xl text-secondary-400"
            id="install"
          >
            What You Need
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
                className="underline decoration-primary-400 underline-offset-4 decoration-4"
                onClick={() => {
                  gtag.event({
                    action: "open_m2u_appstore",
                    category: "external_links",
                  });
                }}
              >
                Maybank2u MY
              </a>{" "}
              app on your iPhone
            </p>
          </div>
        </div>

        <div className="text-center">
          <div className="font-extrabold text-xl py-4 md:text-2xl text-secondary-400">
            Installation Steps
          </div>

          <div className="space-y-10">
            <div>
              <div className="font-semibold text-md md:text-lg">
                1. Watch this video to learn how to setup it up
              </div>
              <div className="md:w-2/4 m-auto mt-3">
                <LiteYouTubeEmbed
                  id="8CbVSXmF5PY"
                  title="Setup Maybank e-Wallet on your Apple Watch!"
                  poster="maxresdefault"
                  onIframeAdded={() =>
                    gtag.event({
                      action: "play_tutorial",
                      category: "video",
                    })
                  }
                />
              </div>
            </div>

            <div>
              <div className="font-semibold text-md md:text-lg" id="download">
                {'2. Install "Pay with Maybank" shortcut on your iPhone'}
              </div>
              <a
                href="https://www.facebook.com/groups/347421593618481"
                target="_blank"
                rel="noreferrer"
                className="bg-secondary-400 mt-3 py-4 px-8 font-extrabold text-white rounded-2xl inline-block"
                onClick={() => {
                  gtag.event({
                    action: "download_maybank_shortcut",
                    category: "download",
                    label: "redirect to fb",
                  });
                }}
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
                  Get the download link from our Facebook Group
                </div>
              </a>

              <div className="mt-3">
                <Link href="/update">
                  <a className="text-sm underline decoration-primary-400 underline-offset-4 decoration-4">
                    🚨 If you want to update an existing shortcut, please refer
                    to the update guide
                  </a>
                </Link>
              </div>
            </div>

            <div>
              <div className="font-semibold text-md md:text-lg">
                3. Turn off Proxyman or uninstall it before runnning the
                shortcut on your watch
              </div>
              <div className="font-medium py-1">
                {"If you don't, you will get an invalid certification error"}
                <br />
              </div>

              <div className="mt-3">
                <Image
                  src={removeProxyman}
                  alt="Uninstall Proxyman app from your iPhone"
                  width={300}
                  height={223}
                  className="rounded-xl mt-2"
                />
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
