import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.white.png";

// function Navbar() {
//   const history = useHistory();

//   const fixTopPosition = (e) => {
//     try {
//       e.preventDefault();
//       const target = e.target.getAttribute("href");
//       const location = document.querySelector(target).offsetTop;
//       window.scrollTo({ left: 0, top: location - 100 });
//       // setClick(!click);
//     } catch (err) {
//       // const error = err;
//       console.log(err);
//     }
//   };

//   return (
//     <div className="fixed-top">
//       <nav
//         className="
//         relative
//         w-full
//         flex flex-wrap
//         items-center
//         justify-between
//         py-4
//         bg-gray-100
//         text-gray-500
//         hover:text-gray-700
//         focus:text-gray-700
//         shadow-lg
//         navbar navbar-expand-lg navbar-light
//         "
//       >
//         <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6 ">
//           <button
//             className="
//     navbar-toggler
//     text-gray-500
//     border-0
//     hover:shadow-none hover:no-underline
//     py-2
//     px-2.5
//     bg-transparent
//     focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
//   "
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <svg
//               aria-hidden="true"
//               focusable="false"
//               data-prefix="fas"
//               data-icon="bars"
//               className="w-6"
//               role="img"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 448 512"
//             >
//               <path
//                 fill="currentColor"
//                 d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
//               ></path>
//             </svg>
//           </button>
//           <div
//             className=" collapse navbar-collapse flex-grow items-center"
//             id="navbarSupportedContent"
//           >
//             <a
//               href="#home"
//               onClick={(e) => {
//                 history.push("/");
//               }}
//             >
//               <img
//                 src={Logo}
//                 alt="logo"
//                 className=" bg-main-yellow px-6 mr-4"
//               />
//             </a>

//             {/* <!-- Left links --> */}
//             <div className="navbar-nav flex flex-col pl-0 mr-auto space-x-2">
//               <ul className="navbar-nav flex flex-col pl-0 mr-auto space-x-2">
//                 <li>
//                   <a
//                     href="#home"
//                     className="nav-link text-gray-700 hover:text-main-yellow self-center"
//                     onClick={(e) => {
//                       history.push("/");
//                       fixTopPosition(e);
//                     }}
//                   >
//                     Home
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#about"
//                     className="nav-link text-gray-700 hover:text-main-yellow self-center"
//                     onClick={(e) => {
//                       history.push("/");
//                       fixTopPosition(e);
//                     }}
//                   >
//                     About
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#services"
//                     className="nav-link text-gray-700 hover:text-main-yellow self-center"
//                     onClick={(e) => {
//                       history.push("/");
//                       fixTopPosition(e);
//                     }}
//                   >
//                     Services
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#gallery"
//                     className="nav-link text-gray-700 hover:text-main-yellow self-center"
//                     onClick={(e) => {
//                       history.push("/");
//                       fixTopPosition(e);
//                     }}
//                   >
//                     Gallery
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#team"
//                     className="nav-link text-gray-700 hover:text-main-yellow self-center"
//                     onClick={(e) => {
//                       history.push("/");
//                       fixTopPosition(e);
//                     }}
//                   >
//                     Team
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#pricing"
//                     className="nav-link text-gray-700 hover:text-main-yellow self-center"
//                     onClick={(e) => {
//                       history.push("/");
//                       fixTopPosition(e);
//                     }}
//                   >
//                     Pricing
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#testimonial"
//                     className="nav-link text-gray-700 hover:text-main-yellow self-center"
//                     onClick={(e) => {
//                       history.push("/");
//                       fixTopPosition(e);
//                     }}
//                   >
//                     Testimonial
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#contact"
//                     className="nav-link text-gray-700 hover:text-main-yellow self-center"
//                     onClick={(e) => {
//                       history.push("/");
//                       fixTopPosition(e);
//                     }}
//                   >
//                     Contact
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             {/* <!-- Left links --> */}
//           </div>
//           {/* <!-- Collapsible wrapper --> */}
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;

function Navbar() {
  const history = useHistory();

  const fixTopPosition = (e) => {
    try {
      e.preventDefault();
      const target = e.target.getAttribute("href");
      const location = document.querySelector(target).offsetTop;
      window.scrollTo({ left: 0, top: location - 100 });
      // setClick(!click);
    } catch (err) {
      // const error = err;
      console.log(err);
    }
  };

  return (
    <div className="fixed-top">
      <nav
        className="
        relative
        w-full
        flex flex-wrap
        items-center
        justify-between
        py-4
        bg-gray-100
        text-gray-500
        hover:text-gray-700
        focus:text-gray-700
        shadow-lg
        navbar navbar-expand-lg navbar-light
        "
      >
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6 ">
          <button
            className="
    navbar-toggler
    text-gray-500
    border-0
    hover:shadow-none hover:no-underline
    py-2
    px-2.5
    bg-transparent
    focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
  "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="bars"
              className="w-6"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              ></path>
            </svg>
          </button>
          <div
            className=" collapse navbar-collapse flex-grow items-center"
            id="navbarSupportedContent"
          >
            <NavLink
              exact
              to="/"
              className="nav-link text-gray-700 hover:text-main-yellow self-center"
              activeClassName="text-main-yellow"
            >
              <img
                src={Logo}
                alt="logo"
                className=" bg-main-yellow px-6 mr-4"
              />
            </NavLink>

            {/* <!-- Left links --> */}
            <div className="navbar-nav flex flex-col pl-0 mr-auto space-x-2">
              <NavLink
                exact
                to="/"
                className="nav-link text-gray-700 hover:text-main-yellow my-2 self-center"
                activeClassName="text-main-yellow"
                // onClick={(e) => {
                //   history.push("/");
                //   fixTopPosition(e);
                // }}
              >
                HOME
              </NavLink>
              <NavLink
                to="/about"
                className="nav-link text-gray-700 hover:text-main-yellow my-2 self-center"
                activeClassName="text-main-yellow"
                // onClick={(e) => {
                //   history.push("/");
                //   fixTopPosition(e);
                // }}
              >
                ABOUT
              </NavLink>
              <NavLink
                to="/services"
                className="nav-link text-gray-700 hover:text-main-yellow my-2 self-center"
                activeClassName="text-main-yellow"
                // onClick={(e) => {
                //   history.push("/");
                //   fixTopPosition(e);
                // }}
              >
                Services
              </NavLink>
              <NavLink
                to="/gallery"
                className="nav-link text-gray-700 hover:text-main-yellow my-2 self-center"
                activeClassName="text-main-yellow"
                // onClick={(e) => {
                //   history.push("/");
                //   fixTopPosition(e);
                // }}
              >
                GALLERY
              </NavLink>
              <NavLink
                to="/team"
                className="nav-link text-gray-700 hover:text-main-yellow my-2 self-center"
                activeClassName="text-main-yellow"
                onClick={(e) => {
                  history.push("/");
                  fixTopPosition(e);
                }}
              >
                TEAM
              </NavLink>
              <NavLink
                to="/pricing"
                className="nav-link text-gray-700 hover:text-main-yellow my-2 self-center"
                activeClassName="text-main-yellow"
                onClick={(e) => {
                  history.push("/");
                  fixTopPosition(e);
                }}
              >
                PRICING
              </NavLink>
              <NavLink
                to="/testimonial"
                className="nav-link text-gray-700 hover:text-main-yellow my-2 self-center"
                activeClassName="text-main-yellow"
                onClick={(e) => {
                  history.push("/");
                  fixTopPosition(e);
                }}
              >
                TESTIMONIAL
              </NavLink>
              <NavLink
                to="/contact"
                className="nav-link text-gray-700 hover:text-main-yellow my-2 self-center"
                activeClassName="text-main-yellow"
                onClick={(e) => {
                  history.push("/");
                  fixTopPosition(e);
                }}
              >
                CONTACT
              </NavLink>
            </div>
            {/* <!-- Left links --> */}
          </div>
          {/* <!-- Collapsible wrapper --> */}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
