type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

const Input: React.FC<InputProps> = ({ className = "", ...props }) => {
  return (
    <input
      className={`h-14 w-full flex items-center p-3 text-sm bg-input
      text-input-foreground border border-input rounded-lg ${className}`}
      {...props}
    />
  );
};

export default Input;
