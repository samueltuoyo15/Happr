type ButtonProps = {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
};

const CtaButton = ({ onClick, className, children }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`bg-primary text-primary-foreground px-6 py-3 rounded-full ${className}`}
    >
      {children}
    </button>
  );
};
export default CtaButton;
