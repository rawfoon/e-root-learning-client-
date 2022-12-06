import React, { useContext, useState } from "react";
import {
  FaArrowCircleRight,
  FaBitbucket,
  FaBlog,
  FaHome,
  FaMoon,
  FaQuestionCircle,
  FaRegistered,
  FaSun,
  FaUniversalAccess,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import ReactTooltip from "react-tooltip";
import Logo from '../../assets/square-root.png'



const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log('header', user)

  const [open, setOpen] = useState(false);

  const [dark, setDark] = useState(false);

  const toggleMenu = () => {
    console.log("clicked");
    if (!open || open) {
      setOpen(!open);
    }
  };

  const toggleDark = () => {
    if (dark || !dark) {
      setDark(!dark);
    }
  };

  const handleSignOut = () => {
    logOut()
      .then(() => {
        console.log("logged out");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <header className="p-4 text-slate-200 bg-slate-700 dark:bg-gray-900 dark:text-gray-100">
        <div style={{maxWidth: "1440px"}} className="container flex justify-between h-16 mx-auto">
          <Link to="/" className="flex items-center p-2">
            
			<img src={Logo}fill="currentColor" className="w-16 h-16 text-white dark:text-violet-400" alt="" />
			{/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 32 32"
              className="w-8 h-8 dark:text-violet-400"
            >
              <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path>
              <path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"></path>
            </svg> */}
            <div className="text-3xl font-bold">E-Root Learning</div>
          </Link>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <Link
                to="/courses"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              >
                Courses
              </Link>
            </li>
            <li className="flex">
              <Link
                to="/faq"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              >
                FAQ
              </Link>
            </li>

            <li className="flex">
              <Link
                to="/blog"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              >
                Blog
              </Link>
            </li>


			<li className="flex">
                  {dark ? 
                    
                      <button
                        onClick={toggleDark}
                        className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
                      >
                        <FaMoon className="mr-2"/>
                        <span>Dark</span>
                      </button>
                   
                   : 
                   
                      <button
                        onClick={toggleDark}
                        className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
                      >
                        <FaSun className="mr-2" />
                        <span>Light</span>
                      </button>
                    
                  }
                </li>


          </ul>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            {user ? (
              <>
                {/* <span>{user.displayName}</span> */}
                <button onClick={handleSignOut} className="btn mr-3 py-1 dark:bg-transparent">
                 
				<FaArrowCircleRight className="mr-2 " /> <span>Log Out</span>
                </button>
				<Link to="/profile" title={user?.displayName}>
              {user?.photoURL ? (
                <>
                  <img
                    className="rounded-full"
                    src={user.photoURL}
                    style={{ height: "30px" }}
                    data-tip={user?.displayName}
                  />
                  <p data-tip=""></p>
                </>
              ) : (
                <FaUser
                  style={{ fontSize: "30px" }}
                  data-tip={user?.displayName}
                ></FaUser>
              )}
            </Link>
              </>
            ) : (
              <>
                <Link to="/login" className="self-center px-8 py-3 rounded">
                  Login
                </Link>
                <Link
                  to="/register"
                  className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
                >
                  Register
                </Link>
              </>
            )}

           
          </div>
          <button onClick={toggleMenu} className="p-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 dark:text-gray-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        <div className={`md:hidden ${!open ? "hidden" : ""}`}>
          <div
            className="h-full w-full p-3 space-y-2 w-60 dark:bg-gray-900 dark:text-gray-100"
            style={{ width: "100%" }}
          >
            <div className="flex items-center p-2 space-x-4">
              {/* <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" /> */}
              {user?.photoURL ? (
                <>
                  <img
                    className="rounded-full h-12 w-12"
                    src={user.photoURL}
                    data-tip={user?.displayName}
                  />
                  <p data-tip=""></p>
                </>
              ) : (
                <FaUser
                  style={{ fontSize: "30px" }}
                  data-tip={user?.displayName}
                ></FaUser>
              )}
              <div>
                <h2 className="text-lg font-semibold">
                  {user ? user.displayName : "User"}
                </h2>
                <span className="flex items-center space-x-1">
                  <Link
                    to="/profile"
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs hover:underline dark:text-gray-400"
                  >
                    View profile
                  </Link>
                </span>
              </div>
            </div>
            <div className="divide-y divide-gray-700">
              <ul className="pt-2 pb-4 space-y-1 text-sm">
                <li>
                  <Link
                    to="/"
                    rel="noopener noreferrer"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <FaHome />
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/courses"
                    rel="noopener noreferrer"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <FaBitbucket />
                    <span>Courses</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faq"
                    rel="noopener noreferrer"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <FaQuestionCircle />
                    <span>Faq</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    rel="noopener noreferrer"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <FaBlog />
                    <span>Blog</span>
                  </Link>
                </li>
               
                <li>
                  {dark ? 
                    
                      <button
                        onClick={toggleDark}
                        className="flex items-center p-2 space-x-3 rounded-md"
                      >
                        <FaMoon className="mr-2" />
                        <span>Dark</span>
                      </button>
                   
                   : 
                   
                      <button
                        onClick={toggleDark}
                        className="flex items-center p-2 space-x-3 rounded-md"
                      >
                        <FaSun className="mr-2" />
                        <span>Light</span>
                      </button>
                    
                  }
                </li>
              </ul>
              <ul className="pt-4 pb-2 space-y-1 text-sm">
                {user ? (
                  <li>
                    <a
                      onClick={handleSignOut}
                      rel="noopener noreferrer"
                      href="#"
                      className="flex items-center p-2 space-x-3 rounded-md"
                    >
                      <FaArrowCircleRight />
                      <span>Logout</span>
                    </a>
                  </li>
                ) : (
                  <>
                    <li>
                      <Link
                        to="/login"
                        rel="noopener noreferrer"
                        href="#"
                        className="flex items-center p-2 space-x-3 rounded-md"
                      >
                        <FaUniversalAccess></FaUniversalAccess>
                        <span>Login</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/register"
                        rel="noopener noreferrer"
                        href="#"
                        className="flex items-center p-2 space-x-3 rounded-md"
                      >
                        <FaRegistered />
                        <span>Register</span>
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </header>

      <ReactTooltip />
    </div>
  );
};

export default Header;
