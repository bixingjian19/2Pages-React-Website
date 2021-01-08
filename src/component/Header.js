import React from "react";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="border-b  p-3 flex justify-between items-center">
      <span className="font-bold">Appname</span>
      <Navigation />
    </header>
  );
}
//上面的3个class classname是tailwind class 比如boder bottom

export default Header;
