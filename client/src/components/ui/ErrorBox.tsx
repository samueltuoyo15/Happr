const ErrorBox = ({ title, message }: { title: string; message: string }) => {
  return (
    <div className="w-full flex flex-col items-center gap-3 p-4 bg-destructive text-destructive-foreground text-center rounded-md">
      <h3 className="text-2xl"> {title}</h3>
      <p>{message}</p>
    </div>
  );
};
export default ErrorBox;
