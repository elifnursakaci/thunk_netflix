import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="mb-10">
      <Link to={"/"}>
        <img className="max-w-[150px]" src="/Netflix-Logo.png" alt="netflix" />
      </Link>
    </header>
  );
};

export default Header;
