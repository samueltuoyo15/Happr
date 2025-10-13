import GoogleIcon from "../assets/google-icon.png";

const GoogleAuthButton = () => {
  return (
    <div className="w-full h-14 flex items-center justify-center gap-3 border border-border rounded-lg">
      <img src={GoogleIcon} width="22" height="22" alt="Google Icon" />

      <p> Continue with Google </p>
    </div>
  );
};
export default GoogleAuthButton;
