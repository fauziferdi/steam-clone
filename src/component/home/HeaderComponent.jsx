import React from "react";
import { FaSearch } from "react-icons/fa";
const HeaderComponent = () => {
  return (
    <div>
      <div className="flex justify-end">
        <button className="w-40 p-1 text-gray-100 bg-blue-900">
          Wishlist (95)
        </button>
      </div>
      <div className="py-1 bg-blue-800 ps-2">
        <ul className="flex items-center gap-4 text-white">
          <li>Your Store</li>
          <li>New & Noteworthy</li>
          <li>Categorie</li>
          <li>Point Shop</li>
          <li>News</li>
          <li>Labs</li>
          <li className="ml-auto">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search"
                className="px-2 bg-blue-500 w-44"
              />
              <button className="absolute right-0 p-1 transform -translate-y-1/2 bg-blue-400 top-1/2">
                <FaSearch />
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default HeaderComponent;
