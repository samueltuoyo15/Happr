type ButtonProps = {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
};

const CtaButton = ({ onClick, className, children }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`bg-primary text-primary-foreground px-6 py-3 border
      border-primary rounded-full
      transition-all duration-300 hover:bg-transparent hover:text-primary ${className}`}
    >
      {children}
    </button>
  );
};
export default CtaButton;
