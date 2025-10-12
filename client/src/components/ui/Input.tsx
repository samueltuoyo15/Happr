type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

const Input: React.FC<InputProps> = ({ className = "", ...props }) => {
  return (
    <input
      className={`h-14 w-full flex items-center py-3 px-5 text-sm bg-input
      text-input-foreground border border-input rounded-full ${className}`}
      {...props}
    />
  );
};

export default Input;
