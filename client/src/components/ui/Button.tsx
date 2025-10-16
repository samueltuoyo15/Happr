type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  variant?: keyof typeof variants;
};

const variants = {
  primary: "bg-primary text-primary-foreground hover:opacity-[90%]",
  destructive: "bg-destructive text-destructive-foreground hover:opacity-[90%]",
  outline: "border border-border text-foreground hover:bg-accent",
  filled: "bg-card text-card-foreground",
  muted: "bg-muted text-muted-foreground hover:opacity-[90%]"
} as const;

const Button: React.FC<ButtonProps> = ({
  className = "",
  variant = "primary",
  children,
  ...props
}) => {
  const variantClasses = variants[variant] || variants.primary;
  const defaultClasses =
    "px-5 py-3 rounded-full font-medium disabled:opacity-[60%] transition-all duration-300";

  return (
    <button
      className={`${defaultClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
