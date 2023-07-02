import Link from "next/link";
import React from "react";
import SigninButton from "./SigninButton";

const Appbar = () => {
  return (
    <header className="flex gap-3 bg-gradient-to-b from-slate-900 to-slate-500 p-1 shadow-md ">
      <Link className="hover:text-sky-200 transition-colors" href={"/"}>
        Home
      </Link>
      <Link className="hover:text-sky-200 transition-colors" href={"/dashboard"}>
        Dashboard
      </Link>

      <SigninButton className="ml-auto" />
    </header>
  );
};

export default Appbar;
