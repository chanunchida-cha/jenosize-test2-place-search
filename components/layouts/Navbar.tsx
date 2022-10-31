import { observer } from "mobx-react-lite";
import React, { ChangeEvent } from "react";
import { searchStore } from "../../stores/searchStore";

const Navbar = observer(() => {
  const { searchText, setSearchText } = searchStore;
  const handleInputChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };
  return (
    <div className="fixed top-0 w-screen drop-shadow-lg">
      <div className="xl:grid xl:grid-cols-10 2xl:grid 2xl:grid-cols-10 px-10 bg-white py-5">
        <div className=" text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl  xl:col-span-10 xl:col-start-2 2xl:col-span-10 2xl:col-start-2 font-semibold  flex h-full mb-3">
          <span className="my-auto ">Search Place</span>
        </div>
        <div className="xl:col-start-7 xl:col-span-3 2xl:col-start-7 2xl:col-span-3">
          <label
            htmlFor="search"
            className="hidden sm:hidden md:hidden lg:hidden xl:block 2xl:block mb-2 text-lg font-medium text-gray-900 "
          >
            Search
          </label>
          <div className="relative">
            <input
              type="search"
              id="default-search"
              value={searchText}
              onChange={handleInputChanged}
              className="block p-2  w-full text-sm text-gray-900 bg-gray-50 rounded-3xl sm:rounded-xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "
              placeholder="Search..."
              required
            />
            <div className="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-blue-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
export default Navbar;
