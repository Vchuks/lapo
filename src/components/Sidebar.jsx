import logo from "../assets/lapo-logo.png";
import dash from "../assets/dash.png";
import dashb from "../assets/dashb.png";
import cardInfra from "../assets/cardinfra.png";
import { NavLink, useLocation } from "react-router-dom";
import { UploadIcon } from "@radix-ui/react-icons";
import { useContext } from "react";
import { MenuContext } from "../context/MenuContext";

const Sidebar = () => {
  const { menu } = useContext(MenuContext);
  const navStyles = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "#F6F6F6" : "inherit",
      color: isActive ? "#014DAF" : "#808080",
      padding: "10px",
      display: "flex",
      fontSize: "14px",
      fontFamily: isActive ? "satoshiMedium" : "satoshiRegular",
      alignItems: "center",
      gap: "0.7rem",
      borderStyle: "solid",
      borderWidth: "1px",
      borderRadius: isActive ? "8px" : "none",
      borderColor: isActive ? "#E2E2E2" : "#fff",
      margin: "10px 0",
    };
  };

  const location = useLocation();

  return (
    <div className="w-96 p-5 h-full overflow-y-auto bg-white border-r border-r-[#E2E2E2]">
      <img src={logo} className="w-40" />
      <div className="flex flex-col justify-between  h-full 2xl:h-[95%]">
        <div>
          <NavLink className="" to="/" style={navStyles}>
            <div>
              <img src={location.pathname === "/" ? dashb : dash} alt="" />
            </div>
            <p>Dashboard</p>
          </NavLink>
          <p className="font-[satoshiMedium] text-xs px-[16px] py-[10px]">
            MAIN MENU
          </p>
          {menu.map((eachMenu) => (
            <NavLink
              key={eachMenu.id}
              style={navStyles}
              to={`${eachMenu.link}`}
            >
              <div>
                <img
                  src={
                    location.pathname === `/${eachMenu.link}`
                      ? eachMenu.iconb
                      : eachMenu.icon
                  }
                  alt=""
                />
              </div>
              <p>{eachMenu.title}</p>
            </NavLink>
          ))}
        </div>
        <div>
          <div className="text-[#121212] pt-16 flex items-center gap-4 p-2.5">
            <UploadIcon className="rotate-90 text-4xl text-[#121212]" />
            <p>Logout</p>
          </div>
          <div className="p-2.5 pt-14">
            <p className="font-[satoshiMedium] text-xs ">POWERED BY</p>
            <img src={cardInfra} alt="" className="pt-3 w-34" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
