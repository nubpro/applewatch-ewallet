import classNames from "classnames";
import BasicLayout from "./basic.layout";

const BlogLayout = ({
  title,
  children,
  titleCoverStyle,
}: {
  title: string;
  titleCoverStyle?: string;
  children: React.ReactNode;
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
      <div className="container mx-auto p-4 md:p-8 mb-16">{children}</div>
    </BasicLayout>
  );
};

export default BlogLayout;
