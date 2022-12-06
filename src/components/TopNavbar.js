import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const TopNavbar = (props) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="sticky top-0 bg-zinc-900">
      <div className="container mx-auto">
        <div className="flex flex-row mx-5">
          {/* logo */}
          <div className="lg:basis-1/3 basis-1/5 ">
            <a href="/">
              <img src="/icons/netflix.png" className="h-16" alt="logo" />
            </a>
          </div>
          {/* search */}
          <div className="lg:basis-1/3 basis-3/5 p-3">
            <input
              placeholder="Search Movies"
              className="w-full p-2 bg-zinc-700 rounded-lg text-zinc-300 focus:outline-none"
              onChange={({ target }) => props.search(target.value)}
            />
          </div>

          {/* navigation */}
          {/* mobile menu */}
          <div className="flex lg:hidden justify-end lg:basis-1/3 basis-1/5">
            <div
              className="p-5 space-y-2 cursor-pointer"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              {/* nav mobile  */}
              <ul className="text-neutral-400 space-y-2 p-5">
                <li className="p-2 hover:bg-zinc-700 hover:text-neutral-200">
                  <a href="/popular">Popular</a>
                </li>
                <li className="p-2 hover:bg-zinc-700 hover:text-neutral-200">
                  <a href="/new-release">New Release</a>
                </li>
                <li className="p-2 hover:bg-zinc-700 hover:text-neutral-200">
                  <a href="/top-rated">Top Rated</a>
                </li>
              </ul>
            </div>
          </div>

          {/* desktop menu */}
          <div className="basis-1/3  text-neutral-400 space-x-10 justify-end p-5 font-light hidden lg:flex">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-neutral-200 font-normal" : undefined
              }
              to="/popular"
            >
              Popular
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-neutral-200 font-normal" : undefined
              }
              to="/new-release"
            >
              New Release
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-neutral-200 font-normal" : undefined
              }
              to="/top-rated"
            >
              Top Rated
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
