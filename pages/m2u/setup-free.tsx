import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import * as gtag from "../../lib/gtag";
import offProxymanPic from "../../public/off-proxyman.jpg";
import BlogLayout from "../../layout/blog.layout";
import React from "react";
import StepWrapper from "../../components/stepWrapper.component";
import viewShortcutPic from "../../public/view-shortcut.png";
import getMaybankTokenPic from "../../public/get-maybank-token.png";

const SetupM2UFree: NextPage = () => {
  return (
    <BlogLayout
      title={"Setup Maybank2U (M2U) eWallet on your Apple Watch for FREE!"}
      titleCoverStyle={"bg-gradient-to-tr from-[#EFCD11] to-[#C40DB6]"}
      headingsMapping={[
        {
          heading: "Installation steps",
          url: "#install",
        },
        {
          heading: "Update existing shortcut",
          url: "#update",
        },
      ]}
    >
      <div
        className="md:text-md text-secondary-400 font-semibold pt-10"
        id="install"
      >
        Installation steps
      </div>

      <div className="py-4 space-y-10">
        <StepWrapper
          step={1}
          title="Watch this video to learn how to setup up Maybank2U eWallet on your Apple Watch"
        >
          <div className="md:w-3/4">
            <LiteYouTubeEmbed
              id="8CbVSXmF5PY"
              title="Setup Maybank e-Wallet on your Apple Watch!"
              poster="maxresdefault"
              onIframeAdded={() =>
                gtag.event({
                  action: "play_tutorial_m2u",
                  category: "video",
                })
              }
            />
          </div>
        </StepWrapper>

        <StepWrapper
          step={2}
          title={'Install "Pay with Maybank" shortcut on your iPhone'}
        >
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="bg-secondary-400 mt-3 py-4 px-8 font-extrabold text-white rounded-2xl inline-block"
            onClick={() => {
              gtag.event({
                action: "download_maybank_shortcut",
                category: "download",
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
              {'Download "Pay with Maybank" Shortcut'}
            </div>
          </a>

          <div className="mt-3 text-sm">
            🚨 Want to update the existing shortcut? Refer the{" "}
            <Link href="#update">
              <a className="underline decoration-secondary-400">update guide</a>
            </Link>
          </div>
        </StepWrapper>

        <StepWrapper
          step={3}
          title="Turn off Proxyman before running the shortcut on
            your watch. (Proxyman > More > Turn off Capture Traffic)"
        >
          <span className="text-sm">
            {"🚨 Do it or you will get an invalid certification error"}
          </span>

          <div className="mt-3">
            <Image
              src={offProxymanPic}
              alt="Turn off Proxyman"
              width={300}
              height={262}
              className="rounded-xl mt-2"
            />
          </div>
        </StepWrapper>

        <StepWrapper step={4} title="🎉 Done! Run the shortcut on your watch.">
          <span className="text-sm">
            🚨 Stuck? Need help? Ask for help in{" "}
            <a
              href="https://www.facebook.com/groups/awwallet"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-secondary-400"
              onClick={() => {
                gtag.event({
                  action: "open_community",
                  category: "external_links",
                });
              }}
            >
              awwallet FB Group
            </a>
          </span>
        </StepWrapper>
      </div>

      <hr />

      <div
        className="md:text-md pt-10 text-secondary-400 font-semibold"
        id={"update"}
      >
        Update existing shortcut
      </div>

      <div className="mt-6 space-y-10">
        <StepWrapper step={1} title="Open Shortcuts app on your iPhone" />

        <StepWrapper
          step={2}
          title={'Tap "..." to open the "Pay with Maybank" shortcut'}
        >
          <Image
            src={viewShortcutPic}
            alt="View Pay with Maybank shortcut"
            width={150}
            height={98}
          />
        </StepWrapper>

        <StepWrapper
          step={3}
          title={"Scroll down until it almost reaches the end of the screen."}
        >
          <span className="text-sm">
            {
              '🚨 While scrolling, look for a long list of text. It starts with "adapter=POSTLOGIN..."'
            }
          </span>

          <div className="w-72 mt-2">
            <Image
              src={getMaybankTokenPic}
              alt="Get Maybank token"
              layout={"responsive"}
            />
          </div>
        </StepWrapper>

        <StepWrapper
          step={4}
          title={
            "Tap on the text once. It should highlight everything. Copy it."
          }
        />

        <StepWrapper step={5} title={"Install the latest shortcut."}>
          <span className="text-sm">
            {
              "🚨 During the setup process, it will ask for Maybank secret token. Paste what you copied previously."
            }
          </span>
        </StepWrapper>

        <StepWrapper
          step={6}
          title={"Add the shortcut. Replace it if you're asked."}
        />
        <StepWrapper
          step={7}
          title={"🎉 You have completed the update process. Give it a run!"}
        />
      </div>
    </BlogLayout>
  );
};

export default SetupM2UFree;
