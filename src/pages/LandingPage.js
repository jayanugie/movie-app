import React from "react";
import Footer from "../components/global/Footer";
import TopNavbar from "../components/global/TopNavbar";

const LandingPage = () => {
  const LandingPageComponents = () => {
    return (
      <div className="h-screen bg-zinc-900 text-white">
        <div className="flex justify-center pt-80">
          <div>
            <h1 className="text-5xl font-serif bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-neutral-200">
              Movie App - Netflix Redesign
            </h1>
            <p className="text-neutral-400">This website is taken from the TMDB API database</p>
            <a href="/popular">
              <button className="mt-3 rounded-md p-2 transition ease-in-out delay-150 bg-neutral-200 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300 text-black hover:text-white">
                See Result
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <TopNavbar />
      <LandingPageComponents />
      <Footer />
    </div>
  );
};

export default LandingPage;
