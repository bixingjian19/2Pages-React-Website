import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTransition, animated } from "react-spring";

function Navigation() {
  // 使用hook
  const [showMenu, setShowMenu] = useState(false);

  let menu;
  //   初始设置为Null
  let menueMask;

  if (showMenu) {
    menu = (
      <div className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow">
        The menu
      </div>
    );

    menueMask = (
      <div
        className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
        onClick={() => setShowMenu(false)}
      ></div>
    );
  }
  return (
    <nav>
      <span className="text-xl">
        <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} />
        {/* icon={}是这个标签的props 参数 */}
      </span>
      {menueMask}
      {menu}
    </nav>
  );
}
//上面的3个class classname是tailwind class 比如boder bottom

export default Navigation;
