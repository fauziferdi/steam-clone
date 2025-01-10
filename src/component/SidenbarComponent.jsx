import React, { useState } from "react";

const SidebarComponent = () => {
  const [menu, setMenu] = useState([
    {
      title: "Your Tags",
      items: ["Trains", "Zombies", "Realistic", "Family Friendly", "Building"],
    },
    {
      title: "Recommended",
      items: ["By Friends", "By Curators", "Tags"],
    },
    {
      title: "Browse Categories",
      items: [
        "Top Sellers",
        "New Releases",
        "Upcoming",
        "Specials",
        "VR Titles",
        "Controller-Friendly",
        "Great on Deck",
        "Browse by genre",
      ],
    },
  ]);
  return (
    <div className="flex">
      <aside className="w-64" aria-label="Sidebar">
        <div className="px-5 py-4 overflow-y-auto rounded">
          <ul className="space-y-2 font-medium">
            <li>
              <div className="flex-row items-center">
                <img
                  src="https://store.fastly.steamstatic.com/public/images//gift/steamcards_promo_03.png?v=1"
                  alt="steam card"
                  className="w-2/3"
                />
                <p className="my-0 font-semibold text-blue-400">
                  STEAM GIFT CARDS
                </p>
                <p className="my-0 font-light text-gray-300">
                  Give the Gift of Game
                </p>
              </div>
            </li>
            {menu.map((item, index) => (
              <li key={index}>
                <p className="my-0 text-base font-bold text-gray-500">
                  {item.title}
                </p>
                {item.items.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block my-0 text-sm font-light text-gray-300 hover:text-blue-400"
                  >
                    {item}
                  </a>
                ))}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
};
export default SidebarComponent;
