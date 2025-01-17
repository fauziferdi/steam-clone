import React from "react";

const NavbarComponent = () => {
  return (
    <div className="flex items-center px-20 py-4 justify-items-center ">
      <div>
        <img
          src="https://store.fastly.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016"
          alt="logo"
          className="w-44"
        />
      </div>
      <div>
        <ul className="flex items-center gap-3 text-white ps-10">
          <li>
            <a href="#" className="hover:font-semibold">
              STORE
            </a>
          </li>
          <li>
            <a href="#" className="hover:font-semibold">
              COMMUNITYS
            </a>
          </li>
          <li>
            <a href="#" className="hover:font-semibold">
              USER
            </a>
          </li>
          <li>
            <a href="#" className="hover:font-semibold">
              CHAT
            </a>
          </li>
          <li>
            <a href="#" className="hover:font-semibold">
              SUPPORT
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default NavbarComponent;
