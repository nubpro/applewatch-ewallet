import classNames from "classnames";
import Link from "next/link";
import BasicLayout from "./basic.layout";

const BlogLayout = ({
  title,
  children,
  titleCoverStyle,
  headingsMapping,
}: {
  title: string;
  titleCoverStyle?: string;
  children: React.ReactNode;
  headingsMapping: { heading: string; url: string }[];
}) => {
  return (
    <BasicLayout>
      <div
        className={classNames(
          "bg-secondary-400 h-48 md:h-60 flex justify-center items-center text-center px-4",
          titleCoverStyle
        )}
      >
        <div className="text-white font-bold text-lg md:text-2xl drop-shadow-md container">
          {title}
        </div>
      </div>
      <div className="container grid md:grid-cols-4 mx-auto px-4 md:px-8 mb-16">
        <div className="md:col-span-3">{children}</div>

        <div className="order-first md:order-last text-sm">
          <div className="sticky top-0 pt-10">
            <div className="font-semibold">On this page</div>
            <div className="mt-1 md:mt-3 space-y-0.5 flex flex-col">
              {headingsMapping.map((h) => (
                <Link href={h.url} key={h.heading}>
                  <a className="hover:underline">
                    <div>{h.heading}</div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </BasicLayout>
  );
};

export default BlogLayout;
