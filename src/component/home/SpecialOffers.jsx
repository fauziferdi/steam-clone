import React from "react";
const SpecialOffers = () => {
  return (
    <div className="mt-3">
      <h1 className="py-2 text-white ">Featured & Recommended</h1>
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-blue-500 h-[390px]">
          <img
            src="https://shared.fastly.steamstatic.com/store_item_assets/steam/spotlights/b0fc84eb444370690bd950a9/spotlight_image_english.jpg?t=1736201398"
            alt=""
            className="content-center w-full"
          />
          <div className="px-3 mt-1">
            <h2 className="text-white text-md">WEEKEND DEAL</h2>
            <p className="mt-3 text-xs text-white">
              Offer ends 19 Jan @ 1:00M.
            </p>
          </div>
          <div className="flex items-center p-3">
            <div className="px-2 py-1 bg-green-700">
              <p className="font-semibold text-green-200">-60%</p>
            </div>
            <div className="px-2 py-1 bg-gray-800">
              <p className="text-green-200">Rp259 999</p>
            </div>
          </div>
        </div>
        <div className="bg-blue-500 h-[390px]">
          <img
            src="https://shared.fastly.steamstatic.com/store_item_assets/steam/spotlights/75bed921146a2d4e44a837ec/spotlight_image_english.png?t=1734629513"
            alt=""
            className="content-center w-full"
          />
          <div className="px-3 mt-1">
            <h2 className="text-white text-md">WEEKEND DEAL</h2>
            <p className="mt-3 text-xs text-white">
              Offer ends 19 Jan @ 1:00M.
            </p>
          </div>
          <div className="flex items-center p-3">
            <div className="px-2 py-1 bg-green-700">
              <p className="font-semibold text-green-200">-60%</p>
            </div>
            <div className="px-2 py-1 bg-gray-800">
              <p className="text-green-200">Rp259 999</p>
            </div>
          </div>
        </div>
        <div className=" h-[390px] grid grid-rows-2 gap-3">
          <div className="bg-blue-200 ">
            <img
              src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2264340/header.jpg?t=1736173634"
              alt=""
              className="w-full"
            />
            <div className="flex justify-between ">
              <p className="p-1">Today's deal!</p>
              <div className="flex p-2">
                <div className="px-2 py-1 bg-green-700">
                  <p className="font-semibold text-green-200">-60%</p>
                </div>
                <div className="px-2 py-1 bg-gray-800">
                  <p className="text-green-200">Rp259 999</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue-200 ">
            <img
              src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1028590/header.jpg?t=1688877203"
              alt=""
              className="w-full"
            />
            <div className="flex justify-between ">
              <p className="p-1">Today's deal!</p>
              <div className="flex p-2">
                <div className="px-2 py-1 bg-green-700">
                  <p className="font-semibold text-green-200">-60%</p>
                </div>
                <div className="px-2 py-1 bg-gray-800">
                  <p className="text-green-200">Rp259 999</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
