import React from "react";
import { FaWindows } from "react-icons/fa";

const FeaturedComponent = () => {
  return (
    <div className="mt-8">
      <h1 className="py-2 text-white ">Featured & Recommended</h1>
      <div className="grid grid-cols-5">
        <div className="col-span-3 bg-white h-72">
          <img
            src="https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2300320/header.jpg?t=1736333063"
            alt=""
            className="w-full h-full"
          />
        </div>
        <div className="col-span-2 bg-black">
          <div className="flex-row">
            <h2 className="px-2 mt-1 text-xl font-bold text-white">
              Farming Simulator
            </h2>
            <div className="grid grid-cols-2 gap-2 p-2">
              <div className="h-20 ">
                <img
                  src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2300320/ss_02c19dc812ad26eaa0315d028b962ac0380b826b.600x338.jpg?t=1736333063"
                  alt=""
                  className="w-full h-full"
                />
              </div>
              <div className="h-20">
                <img
                  src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2300320/ss_b30e3e73c537a7684177468cddf4f018d843cd8d.1920x1080.jpg?t=1736333063"
                  alt=""
                  className="w-full h-full"
                />
              </div>
              <div className="h-20">
                <img
                  src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2300320/ss_c529c17caf2ddc223bc63c09e9ce8d334de6d8bb.600x338.jpg?t=1736333063"
                  alt=""
                  className="w-full h-full"
                />
              </div>
              <div className="h-20">
                <img
                  src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2300320/ss_519816c51c90f750e57dc86ddd69ae701aa8460b.600x338.jpg?t=1736333063"
                  alt=""
                  className="w-full h-full"
                />
              </div>
            </div>
            <h3 className="px-2 text-white">Now Available</h3>
            <div className="flex flex-row gap-2 px-2 mt-1 text-white">
              <div className="px-2 py-0.5 text-xs bg-gray-600">Realistic</div>
              <div className="px-2 py-0.5 text-xs bg-gray-600">Building</div>
              <div className="px-2 py-0.5 text-xs bg-gray-600">Relaxing</div>
            </div>
            <div className="flex justify-between px-2 my-1 text-white">
              <p className="text-xs">Rp 544 000</p>
              <i>
                <FaWindows />
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedComponent;
