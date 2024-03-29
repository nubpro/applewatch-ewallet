import Link from "next/link";
import * as gtag from "../lib/gtag";

const Footer = (props: any) => {
  return (
    <div {...props}>
      <div className="text-sm flex flex-col md:flex-row md:justify-between">
        <div>
          <div>
            <a
              href="https://www.instagram.com/chaiwkhai"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-primary-900 hover:underline"
              onClick={() => {
                gtag.event({
                  action: "open_cwk_instagram",
                  category: "social_media",
                });
              }}
            >
              Made by CWK | Follow him on Instagram
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 30.002 30.001"
                className="inline-block ml-1"
              >
                <path
                  id="instagram"
                  d="M18,3c-4.074,0-4.584.018-6.184.09a11.04,11.04,0,0,0-3.641.7A7.666,7.666,0,0,0,3.787,8.175a11.06,11.06,0,0,0-.7,3.641C3.017,13.416,3,13.926,3,18s.017,4.584.09,6.184a11.04,11.04,0,0,0,.7,3.641,7.664,7.664,0,0,0,4.388,4.388,11.06,11.06,0,0,0,3.641.7c1.6.072,2.111.09,6.184.09s4.584-.018,6.184-.09a11.04,11.04,0,0,0,3.641-.7,7.664,7.664,0,0,0,4.388-4.388,11.06,11.06,0,0,0,.7-3.641c.072-1.6.09-2.111.09-6.184s-.018-4.584-.09-6.184a11.04,11.04,0,0,0-.7-3.641,7.664,7.664,0,0,0-4.388-4.388,11.06,11.06,0,0,0-3.641-.7C22.584,3.018,22.074,3,18,3m0,2.7c4.005,0,4.479.015,6.06.087a8.334,8.334,0,0,1,2.787.516,4.966,4.966,0,0,1,2.847,2.847,8.324,8.324,0,0,1,.516,2.785c.072,1.583.087,2.055.087,6.062s-.015,4.479-.087,6.06a8.386,8.386,0,0,1-.516,2.787,4.966,4.966,0,0,1-2.847,2.847,8.324,8.324,0,0,1-2.785.516c-1.581.072-2.055.087-6.062.087s-4.481-.015-6.06-.087a8.386,8.386,0,0,1-2.787-.516,4.966,4.966,0,0,1-2.847-2.847,8.272,8.272,0,0,1-.516-2.785C5.718,22.479,5.7,22.007,5.7,18s.015-4.479.087-6.06a8.334,8.334,0,0,1,.516-2.787A4.966,4.966,0,0,1,9.153,6.306a8.272,8.272,0,0,1,2.785-.516C13.521,5.718,13.993,5.7,18,5.7M18,23a5,5,0,1,1,5-5,5,5,0,0,1-5,5m0-12.7A7.7,7.7,0,1,0,25.7,18,7.7,7.7,0,0,0,18,10.3m9.807-.3a1.8,1.8,0,1,1-1.8-1.8,1.8,1.8,0,0,1,1.8,1.8"
                  transform="translate(-3 -3)"
                  fillRule="evenodd"
                />
              </svg>
            </a>
          </div>

          <div className="mt-1 text-color-900 text-xs">
            <div>
              <a
                href="https://www.facebook.com/groups/awwallet"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
                onClick={() => {
                  gtag.event({
                    action: "open_community",
                    category: "external_links",
                  });
                }}
              >
                Join our community
              </a>
            </div>
            <div>
              <Link href="/tos">
                <a className="hover:underline">Terms of Service</a>
              </Link>
            </div>
            <div>
              <a
                href="https://github.com/nubpro/applewatch-ewallet"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
                onClick={() => {
                  gtag.event({
                    action: "open_github",
                    category: "external_links",
                  });
                }}
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="font-bold order-first md:order-last text-primary-900 pb-2">
          &copy; awwallet 2022 - 2023
        </div>
      </div>
      <div className="mt-6 md:mt-10">
        <div className="text-xs text-color-900">
          awwallet is not affiliated with Malayan Banking Berhad, Grab Holdings
          Inc. Boost, Shopee and/or any entities under these companies.
        </div>
      </div>
    </div>
  );
};

export default Footer;
