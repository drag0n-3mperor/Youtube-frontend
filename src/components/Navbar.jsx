import { Link } from "react-router-dom";

function Navbar({ user }) {
  return (
    <div className="flex justify-between border border-black rounded-md m-4">
      <div className="flex justify-center align-item-center gap-4">
        <Link to="/home" className="py-2 px-4">
          Home
        </Link>
        <Link to="/contact" className="py-2 px-4">
          Contact
        </Link>
      </div>
      <div className="flex justify-center align-item-center gap-4">
        {!user ? (
          <Link to="/users/login" className="py-2 px-4">
            Login
          </Link>
        ) : (
          <Link to="/users/profile" className="py-2 px-4">
            {user}
          </Link>
        )}
        {!user ? (
          <Link to="/users/register" className="py-2 px-4">
            Register
          </Link>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Navbar;
