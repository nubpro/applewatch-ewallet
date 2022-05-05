import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import mockupPic from "../public/applewatch-mockup.png";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import * as gtag from "../lib/gtag";
import Menu from "../components/menu.component";
import Footer from "../components/footer.component";
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
        <title>awwallet | Get Malaysia eWallets on your Apple Watch</title>
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
              <div className="font-bold">
                Make payment with just your Apple Watch
              </div>
              <div className="font-extrabold">
                Cash-free. Phone-free. For free.
              </div>
              <div className="font-semibold"></div>
            </div>

            <div className="mt-10">
              <div>Access your favourite eWallets on your watch</div>
              <div className="space-x-4 mt-6 flex md:space-x-6">
                <div className="flex flex-col justify-center items-center">
                  <Image
                    src={GrabPayImage}
                    alt="GrabPay"
                    width={77}
                    height={65}
                  />
                  <div className="text-xs mt-1 text-center leading-tight text-red-500">
                    NEW
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center">
                  <Image src={M2UImage} alt="M2U" width={200} height={33} />
                </div>
                <br />
                <div className="flex flex-col justify-center items-center">
                  <Image src={BoostImage} alt="Boost" width={158} height={50} />
                  <div className="text-xs italic mt-1 text-center leading-tight">
                    coming soon
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center">
                  <Image src={MAEImage} alt="MAE" width={119} height={60} />
                  <div className="text-xs italic mt-1 text-center leading-tight">
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
                  <div className="text-xs italic mt-1 text-center leading-tight">
                    coming soon
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 py-10 px-3" id={"download"}>
          <div className="mt-2 mb-10 md:text-xl font-bold text-center text-secondary-400 [text-shadow:0_2px_0_#FFE419]">
            Choose our supported eWallets
          </div>

          <div className="space-y-14">
            <div className="flex flex-col w-10/12 m-auto space-y-3 justify-center drop-shadow-lg sm:flex-row sm:space-y-0 sm:items-center">
              <Link href="/grabpay/setup">
                <a className="group h-[23em] sm:w-72 bg-secondary-500 hover:bg-secondary-700 rounded-2xl flex flex-col drop-shadow-md overflow-hidden">
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
                    <div>High merchant support ✅</div>
                    <div>Collect GrabReward points ✅</div>
                    <div>Pay with QR code and barcode ✅</div>
                    <div>Receive payment ✅</div>
                    <div>Glance at your wallet balance ✅</div>
                    <div>Check your activity ✅</div>
                    <div>Customize your QR code ✅</div>
                    <div>Forget the phone</div>
                  </div>

                  <div className="bg-secondary-500 border-t border-secondary-700 group-hover:bg-secondary-700 group-hover:border-secondary-900 text-center py-3.5 font-semibold text-primary-400 flex flex-row justify-between px-4">
                    <div>Try for free</div>
                    <div>RM 11.90/yr</div>
                  </div>
                </a>
              </Link>
            </div>

            <div className="flex flex-col w-10/12 m-auto space-y-3 justify-center drop-shadow-lg sm:flex-row sm:space-y-0 sm:items-center">
              <Link href="/m2u/setup-free">
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
                    <div>Pay with QR code only</div>
                    <div>{"Lower uptime due to Maybank's maintenance"}</div>
                    <div>Forget the phone</div>
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
};

export default Home;
