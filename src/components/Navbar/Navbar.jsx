import React from "react";
import "./Navbar.css";
import logo from "./imgs/logo.png";
import search from "./imgs/search.png";
import account from "./imgs/account.png";
import favourite from "./imgs/favourite.png";
import cart from "./imgs/cart.png";
import "typeface-montserrat";
import { ADMIN } from "../../helpers/consts";
import { useAuth } from "../contexts/AuthContextProvider";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, {
  bindTrigger,
  bindMenu,
  bindPopover,
} from "material-ui-popup-state";
import menu from "../../img/list.png";
import { Popover } from "@mui/material";

const Navbar = () => {
  const pagesLeft = [
    { name: "HOME", link: "/", id: 1 },
    { name: "SNEAKERS", link: "/products", id: 2 },
    { name: "WOMEN", link: "/women", id: 3 },
    { name: "MEN", link: "/men", id: 4 },
  ];

  const {
    handleLogout,
    user: { email },
  } = useAuth();

  return (
    <div className="navbar">
      <div className="container">
        <div className="burger-menu">
          <PopupState
            className="burger"
            variant="popover"
            popupId="demo-popup-menu"
          >
            {(popupState) => (
              <React.Fragment>
                <Button
                  sx={{
                    padding: "0px",
                    height: "30px",
                    width: "30px",
                    minWidth: "30px",
                    backgroundColor: "#ff9900",
                  }}
                  variant="contained"
                  {...bindTrigger(popupState)}
                >
                  <img width={"10px"} src={menu} alt="" />
                </Button>

                <Menu {...bindMenu(popupState)}>
                  <ul className="">
                    {email === ADMIN ? (
                      <a style={{ textDecoration: "none" }} href="/admin">
                        <li
                          style={{
                            listStyleType: "none",
                            fontFamily: "montserrat",
                            fontWeight: "600",
                            color: "#3d3d3d",
                          }}
                          className="li__hover"
                        >
                          NEW
                        </li>
                      </a>
                    ) : null}
                    {pagesLeft.map((page) => (
                      <a
                        key={page.id}
                        style={{ textDecoration: "none" }}
                        href={page.link}
                      >
                        <MenuItem
                          className="li__hover"
                          sx={{
                            listStyleType: "none",
                            fontFamily: "montserrat",
                            padding: "0px",
                            fontWeight: "600",
                          }}
                          onClick={popupState.close}
                        >
                          {page.name}
                        </MenuItem>
                      </a>
                    ))}
                  </ul>
                  <MenuItem onClick={popupState.close}>My account</MenuItem>
                  <MenuItem onClick={popupState.close}>Logout</MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
        </div>
        <ul className="navbar__left_ul">
          {email === ADMIN ? (
            <a className="navbar__link" href="/admin">
              <li className="navbar__li">NEW</li>
            </a>
          ) : null}
          {pagesLeft.map((page) => (
            <a key={page.id} className="navbar__link" href={page.link}>
              <li className="navbar__li">{page.name}</li>
            </a>
          ))}
        </ul>
        <span className="navbar__logo">
          <img src={logo} alt="" className="navbar__logo" />
        </span>

        <ul className="navbar__right_ul">
          <li className="navbar__li navbar__li-texts">
            <a className="navbar__li navbar__li_a" href="./certificate">
              CERTIFICATE
            </a>
          </li>

          <li className="navbar__li navbar__li-texts">
            <a href="/personal" className="navbar__li_link">
            <span className="navbar__li_a">ACCOUNT</span>{" "}
            <img src={account} alt="" className="icons navbar__account" />
            </a>
          </li>
          <li className="navbar__li">
            <img src={favourite} alt="" className="icons navbar__favourite" />
          </li>
          <li className="navbar__li">
          <a href="/cart" className="navbar__cart_link">
            <img src={cart} alt="" className="icons navbar__cart" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
