import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Link to="/" className="w-full flex items-center gap-2 mt-4">
      <img
        src="/icons/happr-icon.jpg"
        width="36"
        height="36"
        className="rounded-full"
        alt="Happr Logo"
      />
      <h1 className="text-2xl"> Happr </h1>
    </Link>
  );
};
export default Navbar;
