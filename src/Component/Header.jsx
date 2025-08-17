import React, { useState } from "react";

export default function Header({ label }) {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <header className="w-full py-6 bg-[#Faf9ee] fixed top-0 left-0 flex justify-between items-center px-5 sm:px-10 shadow-md z-50">
        <div className="logo text-4xl text-[#8B4513] drop-shadow font-comic">
          Roofly
        </div>
        <button
          className="md:hidden z-60"
          aria-label="Open menu"
          onClick={() => setNavOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-[#3C2F2F] hover:text-blue-800 cursor-pointer transition"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <nav
          className={`
            flex flex-col md:flex-row gap-8
            fixed top-0 left-0 bg-[#FFF5E1] w-[250px] h-screen shadow-lg z-60 transition-transform duration-300 ease-in-out
            ${
              navOpen ? "translate-x-0" : "-translate-x-full"
            } md:static md:bg-transparent md:w-auto md:h-auto md:shadow-none md:translate-x-0
          `}
        >
          <div className="flex justify-between items-center px-4 py-5 border-b border-gray-200 md:hidden">
            <div className="logo font-ror text-2xl text-[#8B4513]">Roofly</div>
            <button aria-label="Close menu" onClick={() => setNavOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-[#3C2F2F] hover:text-blue-800 cursor-pointer transition"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col md:flex-row gap-8 px-5 mt-5 md:mt-0 md:px-0 w-full font-roboto">
            {label.map((item, i) => (
              <li key={i}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="capitalize text-xl font-semibold py-2 text-[#3C2F2F] hover:text-blue-800 transition"
                  onClick={() => setNavOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div
        className={`fixed inset-0 bg-[#00000059] backdrop-blur-sm z-40 transition-opacity duration-300 ${
          navOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } md:hidden`}
        onClick={() => setNavOpen(false)}
      ></div>
    </>
  );
}
