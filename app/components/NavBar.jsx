import Link from "next/link";
import { NavLinks } from "./constant";
import React from "react";
import AuthProviders from "./AuthProviders";

const NavBar = () => {
  const session = {};
  return (
    <nav className="flex justify-between py-4 px-3">
      <div className="flex justify-start">
        <Link
          href="/"
          className="rounded-full py-5 px-3 bg-sky-500/100 text-white font-extrabold hover:bg-slate-200"
        >
          LOgo
        </Link>

        <div className="lg:flex hidden items-center px-2 gap-4">
          {NavLinks.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="hover:bg-slate-200 p-3 rounded-full"
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex">
        <div className="flex items-center cursor-pointer rounded-full py-5 px-3 hover:bg-slate-200">
          {session ? (
            <>
              UserPhoto
            </>
          ) : (
            <AuthProviders />
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
