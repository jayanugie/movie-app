import React from "react";
import { Navbar } from "flowbite-react";

const TopNavbar = (props) => {
  return (
    <div className="sticky top-0 bg-zinc-900">
      <div className="container mx-auto">
        <Navbar fluid={true} rounded={true} className=" bg-zinc-900">
          <Navbar.Brand>
            <img
              src="/icons/netflix.png"
              className="h-12 sm:h-16 mx-5"
              alt="Flowbite Logo"
            />
            <input
              className="rounded-md p-2.5 sm:w-80 w-full text-neutral-50 bg-neutral-800 font-light border border-neutral-800 focus:outline-none"
              placeholder="Search Movies"
              onChange={({ target }) => props.search(target.value)}
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="mx-5">
            <Navbar.Link
              href="/"
              className="text-neutral-50 hover:cursor-pointer font-normal hover:text-black"
            >
              Home
            </Navbar.Link>
            <Navbar.Link className="text-neutral-50 hover:cursor-pointer font-normal hover:text-black">
              Movies
            </Navbar.Link>
            <Navbar.Link className="text-neutral-50 hover:cursor-pointer font-normal hover:text-black">
              Series
            </Navbar.Link>
            <Navbar.Link className="text-neutral-50 hover:cursor-pointer font-normal hover:text-black">
              My List
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default TopNavbar;
