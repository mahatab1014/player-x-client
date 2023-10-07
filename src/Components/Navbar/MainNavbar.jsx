import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProfider";

const MainNavbar = () => {
  const activeNavStyle =
    "btn btn-sm border-none bg-secondary hover:bg-secondary text-black hover:text-black  rounded-none leading-[1.1rem]";
  const unActiveNavStyle =
    "btn btn-sm bg-transparent border-none hover:bg-secondary text-white hover:text-black btn-sm rounded-none rounded-none leading-[1.1rem]";

  const { user, signOutUser } = useContext(AuthContext);

  const menuLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? activeNavStyle : unActiveNavStyle
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? activeNavStyle : unActiveNavStyle
          }
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Shop"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? activeNavStyle : unActiveNavStyle
          }
        >
          Shop
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? activeNavStyle : unActiveNavStyle
          }
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about-us"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? activeNavStyle : unActiveNavStyle
          }
        >
          About Us
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="navbar bg-base-100 container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuLinks}
          </ul>
        </div>
        <ul className="menu menu-horizontal px-1 hidden lg:flex uppercase text-white">
          {menuLinks}
        </ul>
      </div>
      <div className="navbar-center">
        <Link to="/">
          <figure>
            <img
              className="w-2/3 mx-auto"
              src="/images/logo-header.png"
              alt=""
            />
          </figure>
        </Link>
      </div>
      <div className="navbar-end">
        <h4 className="hidden md:block">{user?.displayName}</h4>
        {user ? (
          <div className="dropdown dropdown-end z-50">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={
                    user?.photoURL
                      ? `${user?.photoURL}`
                      : "/images/icons/profile.jpg"
                  }
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/profile">
                  <span className="justify-between">Profile</span>
                </Link>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li onClick={signOutUser}>
                <span>Logout</span>
              </li>
            </ul>
          </div>
        ) : (
          <div className="space-x-[1px]">
            <Link to="/auth/signin">
              <button className="text-xs btn btn-sm normal-case bg-secondary hover:bg-secondary text-black rounded-none border-none rounded-l-full">
                Sign In
              </button>
            </Link>
            <Link to="/auth/signup">
              <button className="text-xs btn btn-sm normal-case bg-secondary hover:bg-secondary text-black rounded-none border-none rounded-r-full">
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default MainNavbar;
