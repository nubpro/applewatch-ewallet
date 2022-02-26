const StepWrapper = ({
  step,
  title,
  children,
}: {
  step?: number;
  title: string;
  children?: React.ReactNode;
}) => {
  return (
    <div>
      <div className="flex items-center">
        {step && (
          <span className="shrink-0 bg-primary-400 text-primary-850 shadow-md shadow-primary-400/60 w-10 h-10 flex items-center justify-center text-lg py-1 px-2 rounded-xl">
            {step}
          </span>
        )}

        <div className="pl-3 leading-tight font-medium">{title}</div>
      </div>
      {children && <div className="mt-4 pl-12">{children}</div>}
    </div>
  );
};

export default StepWrapper;
