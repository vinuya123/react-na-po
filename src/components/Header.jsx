"use client"

import React from "react";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";

import Button from "./Button";

const Header = ({ children, className }) => {
  // Use useNavigate for navigation
  const navigate = useNavigate();

  const handleLogout = () => {
    // Handle logout logic
  };

  return (
    <div
      className={twMerge(`
          h-fit
          p-6
      `,
        className
      )}
    >
      <div
        className="
          w-full
          mb-4
          flex
          items-center
          justify-between
      "
      >
        <div
          className="
            hidden
            md:flex
            gap-x-2
            items-center
          "
        >
          <button
            onClick={() => navigate(-1)}
            className="
              rounded-full
              flex
              bg-black
              items-center
              justify-center
              hover:opacity-75
              transition
          "
          >
            <RxCaretLeft className="text-white" size={35} />
          </button>
          <button
            onClick={() => navigate(1)}
            className="
              rounded-full
              flex
              bg-black
              items-center
              justify-center
              hover:opacity-75
              transition
          "
          >
            <RxCaretRight className="text-white" size={35} />
          </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <button
            className="
              rounded-full
              p-2
              bg-white
              flex
              items-center
              justify-center
              hover:opacity-75
              transition
          "
          >
            <HiHome className="text-black" size={20} />
          </button>
          <button
            className="
              rounded-full
              p-2
              bg-white
              flex
              items-center
              justify-center
              hover:opacity-75
              transition
          "
          >
            <BiSearch className="text-black" size={20} />
          </button>
        </div>
        <div
          className="
            flex
            justify-between
            items-center
            gap-x-4
        "
        >
          <>
            <div>
              <Button
                onClick={() => {}}
                className="
                  bg-white
                  px-6
                  py-2
              "
              >
                Explore Premium
              </Button>
            </div>
          </>
        </div>
      </div>
      {children}
    </div>
  );
};

// Wrap your component with the Router
const App = () => (
  <Router>
    <Header />
    {/* Your other components go here */}
  </Router>
);

export default App;
