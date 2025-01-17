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
      <div className="bg-blue-800">
        <ul className="flex items-center text-white">
          <a href="">
            <li className="px-4 py-2 hover:bg-blue-600">Your Store</li>
          </a>
          <a href="">
            <li className="px-4 py-2 hover:bg-blue-600">New & Noteworthy</li>
          </a>
          <a href="">
            <li className="px-4 py-2 hover:bg-blue-600">Categorie</li>
          </a>
          <a href="">
            <li className="px-4 py-2 hover:bg-blue-600">Point Shop</li>
          </a>
          <a href="">
            <li className="px-4 py-2 hover:bg-blue-600">News</li>
          </a>
          <a href="">
            <li className="px-4 py-2 hover:bg-blue-600">Labs</li>
          </a>

          <li className="ml-auto">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search"
                className="w-48 h-8 px-2 bg-blue-500"
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
