import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { MenuContext } from "../context/MenuContext";
import dash from "../assets/dash.png";
import search from "../assets/search-md.png";
import bell from "../assets/bell.png";
import profile from "../assets/userholder.png";

const Header = () => {
  const { menu } = useContext(MenuContext);
  const location = useLocation();
  const getMenu = menu.find((each) => `/${each.link}` === location.pathname);

  return (
    <section className="flex justify-between px-5 z-10 py-2 bg-white sticky top-0">
      {getMenu ? (
        <div className="flex gap-3 items-center text-[#001735] text-xs">
          <div>
            <img src={getMenu.icon} alt="" />
          </div>
          {getMenu.title}
        </div>
      ) : (
        <div className="flex gap-3 items-center text-[#001735] text-xs">
          <div>
            <img src={dash} alt="" />
          </div>
          Dashboard
        </div>
      )}
      <div className="flex gap-6 items-center">
        {location.pathname === "/" && (
          <div className="flex border border-[#D0D5DD] rounded-[97.99px] px-4 py-1 items-center gap-2">
            <img src={search} alt="" className="h-fit" />
            <input
              type="search"
              className="outline-0 placeholder:text-[#344054] placeholder:text-xs"
              placeholder="Search"
            />
          </div>
        )}
        <div>
          <img src={bell} alt="" />
        </div>
        <div className="rounded-full bg-[#F2F4F7] border border-[#10182814] p-1">
          <img src={profile} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Header;
