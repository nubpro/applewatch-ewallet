import Link from "next/link";
import Image from "next/image";
import logoPic from "../public/logo.png";
import * as gtag from "../lib/gtag";

const Menu = () => {
  return (
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
      <div className="flex overflow-scroll items-center space-x-3 md:space-x-5 text-primary-900 font-semibold text-sm md:text-base">
        <Link href="/#install">
          <a>Download</a>
        </Link>

        <a
          href="https://www.facebook.com/groups/347421593618481"
          target="_blank"
          rel="noreferrer"
          onClick={() => {
            gtag.event({
              action: "open_community",
              category: "external_links",
            });
          }}
        >
          Join the Community
        </a>
      </div>
    </div>
  );
};

export default Menu;
