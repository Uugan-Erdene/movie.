import { DownBlluet } from "./icons/genrelist";
import { MagniFier } from "./icons/hailt";
import { HomeLogo } from "./icons/home";
import { Moon } from "./icons/moon";
export const Navbar = () => {
  const handleAddMovies = () => {};
  return (
    <div className="w-full bg-white h-[59] flex items-center justify-between ">
      <div className="flex gap-[8px] cursor-pointer items-center justify-center pl-20  ">
        <HomeLogo />
        <h1 className="font-bold text-base cursor-pointer text-[#4338CA]">
          Movie Z
        </h1>
      </div>
      <div className="flex cursor-pointer gap-[8px] ">
        <div
          onClick={handleAddMovies}
          className="flex gap-[8px] w-[97] h-[36] items-center justify-center rounded-sm border border-gray-100  "
        >
          <DownBlluet />
          <button className="cursor-pointer">Genre</button>
        </div>
        <div className="flex items-center pl-3 w-[379] gap-2 rounded-sm border border-gray-100">
          <MagniFier />
          <input placeholder="Search.." className="" />
        </div>
      </div>
      <div className="flex items-center justify-center   pr-20">
        <button className=" flex items-center justify-center cursor-pointer w-[36] h-[36] rounded-sm border border-gray-100">
          <Moon />
        </button>
      </div>
    </div>
  );
};
