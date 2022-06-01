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
import PayCashierMockupImage from "../public/mockups/pay_cashier.png";
import ReceiveMoneyMockupImage from "../public/mockups/receive_money.png";
import ViewActivityMockupImage from "../public/mockups/view_activity.png";
import BigTile from "../components/bigTile.component";

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
            {/* Sample placeholder image */}
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
              <source src="/demo2.mp4#t=0.5" type="video/mp4" />
            </video>

            <div className="absolute bottom-0 px-5 pb-4 pt-4 w-full bg-gradient-to-t from-secondary-400">
              <div className="font-extrabold uppercase text-xs text-primary-400 drop-shadow">
                {"What's New"}
              </div>
              <div className="text-white font-bold text-xl [text-shadow:0_2px_0_#661FFC]">
                awwallet brings support to Grab
              </div>
            </div>
          </div>

          <div className="flex-1 px-8 py-14 md:px-10 md:py-12">
            <div className="text-xl md:text-2xl">
              <div className="font-bold">Pay with just your Apple Watch</div>
              <div className="font-extrabold">
                Cash-free. Phone-free. For free.
              </div>
              <div className="font-semibold"></div>
            </div>

            <div className="mt-10">
              <div>Access your favourite eWallets on your watch</div>
              <div className="space-x-4 mt-6 flex md:space-x-6">
                <Link href="/grabpay/setup">
                  <a className="flex flex-col justify-center items-center">
                    <Image
                      src={GrabPayImage}
                      alt="GrabPay"
                      width={77}
                      height={65}
                    />
                    <div className="text-xs mt-1 text-center leading-tight text-red-500 font-bold">
                      NEW
                    </div>
                  </a>
                </Link>

                <Link href="/m2u/setup-free">
                  <a className="flex flex-col justify-center items-center">
                    <Image src={M2UImage} alt="M2U" width={200} height={33} />
                  </a>
                </Link>
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

        <div className="bg-gray-100 py-14 md:py-20 grid gap-y-12">
          <BigTile
            imageSrc={PayCashierMockupImage}
            imageAlt="Mockup photo of pay cashier feature"
            title={
              <>
                Forget the Phone.
                <br />
                Just Raise &amp; Pay
              </>
            }
            description={
              "Making payments from your watch is easier than taking your phone out from the pocket, unlocking the phone, swiping through the home pages to find the right app, then searching for the... You get the picture"
            }
          />

          <BigTile
            imageSrc={ReceiveMoneyMockupImage}
            imageAlt="Mockup photo of receive money feature"
            title={
              <>
                Get Paid.
                <br />
                Get awwallet.
              </>
            }
            description={
              <>
                <div className="italic text-gray-600 mb-2">
                  SCENARIO: You and your friends are splitting the bill
                </div>
                <span className="font-semibold">Friend:</span> Bro show me your
                QR code, I’ll transfer to you.
                <br />
                <span className="font-semibold">You:</span> *lift wrist*
                <br />
                <span className="font-semibold">Friend:</span> 😮
              </>
            }
          />

          <BigTile
            imageSrc={ViewActivityMockupImage}
            imageAlt="Mockup photo of view wallet activity feature"
            title="All Your Activity on Your Watch"
            description={
              <>
                We don’t want you to be lost in your spendings. <br />
                So we made it easier to access these info from your watch.
              </>
            }
          />
        </div>

        <div className="bg-primary-400 py-10 px-3" id={"download"}>
          <div className="mt-2 mb-10 text-xl font-bold text-center text-secondary-400">
            Download our supported eWallets
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
                    <div>See wallet activity ✅</div>
                    {/* <div>Customize your QR code ✅</div> */}
                    <div>Works without iPhone tethered</div>
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
                    <div>Works without iPhone tethered</div>
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
