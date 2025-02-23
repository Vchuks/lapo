import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuContext } from "../context/MenuContext";
import dash from "../assets/dash.png";
import search from "../assets/search-md.png";
import bell from "../assets/bell.png";
import profile from "../assets/userholder.png";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  HamburgerMenuIcon,
} from "@radix-ui/react-icons";

const Header = () => {
  const { menu, handleMenu } = useContext(MenuContext);
  const location = useLocation();
  const getMenu = menu?.find((each) => `/${each.link}` === location.pathname);
  const getMenuChild = menu?.find(
    (each) => `/${each.child.path}` === location.pathname
  );
 

  return (
    <section className="flex justify-between px-3 md:px-5 z-10 py-2 bg-white sticky top-0">
      <HamburgerMenuIcon
        className="mt-2 ham block mr-2 lg:hidden"
        onClick={handleMenu}
      />
      {getMenu ? (
        <div className="w-full flex gap-3 mt-2  items-center text-[#001735] text-xs">
          <div className="w-3 md:w-fit">
            <img src={getMenu.icon} alt="" className="" />
          </div>
          {getMenu.title}
        </div>
      ) : getMenuChild ? (
        <div className="w-full flex gap-1 md:gap-3 mt-2  items-center  text-xs">
          <ChevronLeftIcon />
         <Link to={getMenuChild.link}> <span>Back</span></Link>
          <div className="w-3 md:w-fit">
            <img src={getMenuChild.icon} alt="" className="" />
          </div>
          <ChevronRightIcon />
          <div className="flex items-center gap-1 md:gap-3">
          <Link to={getMenuChild.link}> {getMenuChild.title}</Link> <ChevronRightIcon />
            <span className="text-[#001735]">{getMenuChild.child.title}</span>
          </div>
        </div>
      ) : (
        <div className="flex gap-3 items-center text-[#001735] text-xs">
          <div className="w-3 md:w-fit">
            <img src={dash} alt="" />
          </div>
          Dashboard
        </div>
      )}
      <div className="flex gap-2 md:gap-6 items-center">
        {location.pathname === "/" && (
          <div className="flex w-36 md:w-fit border border-[#D0D5DD] rounded-[97.99px] px-4 py-1 items-center gap-2">
            <img src={search} alt="" className="h-fit" />
            <input
              type="search"
              className="outline-0 placeholder:text-[#344054] placeholder:text-xs"
              placeholder="Search"
            />
          </div>
        )}
        <div className="w-5 md:w-fit">
          <img src={bell} alt="" />
        </div>
        <div className="w-5 md:w-fit rounded-full bg-[#F2F4F7] border border-[#10182814] p-1">
          <img src={profile} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Header;
