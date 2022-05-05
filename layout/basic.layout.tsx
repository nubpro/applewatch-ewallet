import classNames from "classnames";
import React from "react";
import Footer from "../components/footer.component";
import Menu from "../components/menu.component";

const BasicLayout = ({ children }: { children: React.ReactNode }) => {
  const layoutPadding = "px-4 md:px-10";

  return (
    <div className="flex flex-col h-screen">
      <div className={classNames("bg-primary-400", layoutPadding)}>
        <Menu />
      </div>

      <div className="mb-auto">{children}</div>

      <Footer
        className={classNames("bg-primary-400 py-8 md:py-12", layoutPadding)}
      />
    </div>
  );
};

export default BasicLayout;
