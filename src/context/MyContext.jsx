import { useReducer, useState } from "react";
import PropTypes from "prop-types";
import branch from "../assets/branch.png";
import branchb from "../assets/branchb.png";
import role from "../assets/role.png";
import roleb from "../assets/roleb.png";
import user from "../assets/user.png";
import userb from "../assets/userb.png";
import scheme from "../assets/scheme.png";
import schemeb from "../assets/schemeb.png";
import prof from "../assets/prof.png";
import profb from "../assets/profb.png";
import req from "../assets/req.png";
import reqb from "../assets/reqb.png";
import stock from "../assets/stock.png";
import stockb from "../assets/stockb.png";
import card from "../assets/card.png";
import cardb from "../assets/cardb.png";
import list from "../assets/list.png";
import listb from "../assets/listb.png";
import queue from "../assets/queue.png";
import queueb from "../assets/queueb.png";
import trail from "../assets/trail.png";
import trailb from "../assets/trailb.png";
import acc from "../assets/acc.png";
import accb from "../assets/accb.png";
import { MenuContext } from "./MenuContext";
import { CardData } from "./CardContext";
import { useNavigate } from "react-router-dom";

const sideMenu = [
  {
    id: "1",
    title: "Card Profile",
    icon: prof,
    iconb: profb,
    link: "card-profile",
    child: {
      title: "Create Profile",
      path: "card-profile/create-profile",
    },
  },
  {
    id: "2",
    title: "Card Request",
    icon: req,
    iconb: reqb,
    link: "card-request",
    child: {
      title: "Request Details",
      path: "card-request/request-details",
    },
  },
  {
    id: "3",
    title: "Branches",
    icon: branch,
    iconb: branchb,
    link: "branches",
    child: "",
  },
  {
    id: "4",
    title: "Roles",
    icon: role,
    iconb: roleb,
    link: "roles",
    child: "",
  },
  
  {
    id: "5",
    title: "Users",
    icon: user,
    iconb: userb,
    link: "users",
    child: "",
  },
  {
    id: "6",
    title: "Card Scheme",
    icon: scheme,
    iconb: schemeb,
    link: "card-scheme",
    child: "",
  },
 
  {
    id: "7",
    title: "Authorization List",
    icon: list,
    iconb: listb,
    link: "authorization-list",
    child: "",
  },
  {
    id: "8",
    title: "Stock",
    icon: stock,
    iconb: stockb,
    link: "stock",
    child: "",
  },
  {
    id: "9",
    title: "Cards",
    icon: card,
    iconb: cardb,
    link: "cards",
    child: "",
  },
  {
    id: "10",
    title: "Authorization Queue",
    icon: queue,
    iconb: queueb,
    link: "authorization-queue",
    child: "",
  },
  {
    id: "11",
    title: "Trail",
    icon: trail,
    iconb: trailb,
    link: "trail",
    child: "",
  },
  {
    id: "12",
    title: "Account",
    icon: acc,
    iconb: accb,
    link: "account",
    child: "",
  },
];
const cardAll = [
  {
    id: "1",
    card_name: "Verve-1",
    currency: "NGN",
    expire: "40 months",
    bin: "50611234",
    date: "11/10/2024  23:21:03",
  },
  {
    id: "2",
    card_name: "Verve-1",
    currency: "NGN",
    expire: "40 months",
    bin: "50611234",
    date: "11/10/2024  23:21:03",
  },
  {
    id: "3",
    card_name: "Verve-1",
    currency: "NGN",
    expire: "40 months",
    bin: "50611234",
    date: "11/10/2024  23:21:03",
  },
];

const fee = [
  {
    id: "1",
    name: "",
    value: "",
    frequency: "",
    currency: "",
    accout_paid: "",
    account: "",
    time: "",
  },
];

const requestTable = [
  {
    id: "1",
    branch: "Corporate",
    initiator: "RootUser",
    quantity: "10",
    batch: "847264905",
    date: "11/10/2024  23:21:03",
    status: "Ready",
    type:"Classic Debit",
    charges:"1500", slug:"Ready"
  },
  {
    id: "2",
    branch: "Corporate",
    initiator: "RootUser",
    quantity: "10",
    batch: "847264905",
    date: "11/10/2024  23:21:03",
    status: "Ready",
    type:"Classic Debit",
    charges:"1500",
     slug:"Ready"
  },
  {
    id: "3",
    branch: "Corporate",
    initiator: "RootUser",
    quantity: "10",
    batch: "847264905",
    date: "11/10/2024  23:21:03",
    status: "In Progress",
    type:"Classic Debit",
    charges:"1500",
     slug:"Progress"
  },
  {
    id: "4",
    branch: "Corporate",
    initiator: "RootUser",
    quantity: "10",
    batch: "847264905",
    date: "11/10/2024  23:21:03",
    status: "Pending",
    type:"Classic Debit",
    charges:"1500",
     slug:"Pending"
  },
  {
    id: "5",
    branch: "Corporate",
    initiator: "RootUser",
    quantity: "10",
    batch: "847264905",
    date: "11/10/2024  23:21:03",
    status: `Acknowledged`,
    type:"Classic Debit",
    charges:"1500",
     slug:"Acknowledged"
  },
];

export const MyMenu = ({ children }) => {
  const [menu, setMenu] = useState(sideMenu);
  const [openNav, setOpenNav] = useState(false);
  const handleMenu = () => {
    setOpenNav(!openNav);
  };
  return (
    <MenuContext.Provider
      value={{ menu, setMenu, openNav, setOpenNav, handleMenu }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const CardDetails = ({ children }) => {
  const [cardArray, setCardArray] = useState(cardAll);
  const [requestArray, setRequestArray] = useState(requestTable);
  const [feeArray, setFeeArray] = useState(fee);
  const [edit, setEdit] = useState({});
  const [view, setView] = useState({});
  const navigate = useNavigate();

   const initialState = {
      isActive: false,
    }
    const reducer = (state,action) => {
      switch(action.type){
          case "Ready":
          return {isActive: true};
          case"Download":
          return{isActive: false};
          case"Acknowledged":
          return{isActive: false};
          case"Pending":
          return{isActive: false};
          case"Progress":
          return{isActive: false};
          default:
            throw Error('Unknown action.');
      }
    }
    
    const [state, dispatch] = useReducer(reducer, initialState)
    const handleDispatch = (slug, id) =>{
      console.log('state',state) 
      console.log('id',id) 
      // if(id){

      // }
        dispatch({type: "Ready"})
    }

  const editCard = (id) => {
    const getId = cardArray.find((each) => each.id === id);
    return setEdit(getId);
  };

  const deleteCard = (id) => {
    const getId = cardArray.find((each) => each.id === id);
    const update = cardArray.filter((each) => each.id !== getId.id);
    setCardArray(update);
  };

  const handleView = (id) => {
    const getView = requestArray.find((each) => each.id === id);
    setView(getView);
    navigate("card-request/request-details");
  };

  return (
    <CardData.Provider
      value={{
        cardArray,
        setCardArray,
        feeArray,
        setFeeArray,
        edit,
        editCard,
        deleteCard,
        setEdit,
        requestArray,
        setRequestArray,
        view,
        handleView,
        state,
        handleDispatch
      }}
    >
      {children}
    </CardData.Provider>
  );
};

MyMenu.propTypes = {
  children: PropTypes.array,
};

CardDetails.propTypes = {
  children: PropTypes.array,
};
