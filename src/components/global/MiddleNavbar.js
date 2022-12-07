import React from "react";
import { NavLink } from "react-router-dom";

const MiddleNavbar = () => {
  return (
    <div className="bg-zinc-900 p-10">
      <div className="flex flex-row text-neutral-400 container mx-auto">
        <div className="basis-1/3">
          <div className="flex justify-center">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-neutral-200 font-normal sm:text-lg flex space-x-1 sm:h-7 h-5"
                  : "text-sm hover:text-neutral-200 font-light flex space-x-1 h-5"
              }
              to="/popular"
            >
              <img src="/assets/gas.png" alt="gas" />
              <p>Popular</p>
            </NavLink>
          </div>
        </div>
        <div className="basis-1/3">
          <div className="flex justify-center">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-neutral-200 font-normal sm:text-lg flex space-x-1 sm:h-7 h-5"
                  : "text-sm hover:text-neutral-200 font-light flex space-x-1 h-5"
              }
              to="/new-release"
            >
              <img src="/assets/new.png" alt="gas" />
              <p>New Release</p>
            </NavLink>
          </div>
        </div>
        <div className="basis-1/3">
          <div className="flex justify-center">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-neutral-200 font-normal sm:text-lg flex space-x-1 sm:h-7 h-5"
                  : "text-sm hover:text-neutral-200 font-light flex space-x-1 h-5"
              }
              to="/top-rated"
            >
              <img src="/assets/star.png" alt="gas" />
              <p>Top Rated</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleNavbar;
