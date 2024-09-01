import classNames from "classnames";
import { ReactNode } from "react";

const PageContainerWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  const wrapperClassName = classNames(
    "w-full px-[24px] md:px-[50px] lg:px-[100px] xl:px-[200px] ",
    className
  );

  return <div className={wrapperClassName}>{children}</div>;
};

export default PageContainerWrapper;
