import React, { useEffect, useState } from "react";
import { Navbars } from "./Navbar";
import { Link } from "react-router-dom";
import { Drawer, IconButton, InputAdornment, TextField } from "@mui/material";
import { Icon } from "@iconify/react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import Aos from "aos";
function MobileLayout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [SearchOpen, SetSearchOpen] = useState(false);
  const [MenuOpen, SetMenuOpen] = useState(false);
  const [MensDropdown, SetMensDropdown] = useState(false);
  const [WomensDropdown, SetWomensDropdown] = useState(false);
  const handleSearch = () => {
    SetSearchOpen(!SetSearchOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);
  const [MobileOpen, SetMobile] = useState(false);
  return (
    <>
      <div
        className={`${isScrolled ? "sticky top-0 bg-white w-full z-[10]" : ""}`}
      >
        <div className="flex justify-between overflow-hidden  dimension:justify-around items-center py-2 iphoneXr:py-4 px-4 iphoneXr:px-5">
          <div onClick={() => SetMobile(!MobileOpen)}>
            <iconify-icon
              icon="bitcoin-icons:menu-filled"
              width="23"
            ></iconify-icon>
          </div>
          {Navbars.map((nav, index) => (
            <>
              <div key={index}>
                <Link to={"/"}>
                  <img
                    src={nav.logo}
                    alt="Not found "
                    className="w-[50px] object-contain"
                  />
                </Link>
              </div>
            </>
          ))}
          <div>
            <ul className="inline_wrap">
              <li className="xl:text-[16px] text-[19px] cursor-pointer">
                <Link to={"https://web.whatsapp.com"} target="_blank">
                  <iconify-icon icon="ph:phone" width="23"></iconify-icon>
                </Link>
              </li>
              <li
                className="xl:text-[16px] text-[19px] cursor-pointer"
                onClick={() => SetSearchOpen(!SearchOpen)}
              >
                <iconify-icon
                  icon="material-symbols:search"
                  width="23"
                ></iconify-icon>
              </li>{" "}
              {SearchOpen && (
                <>
                  <Drawer anchor="top" variant="temporary" open={SearchOpen}>
                    <div className="flex flex-col justify-end items-end xl:mx-8 xl:mt-2 mx-3 mt-1">
                      <IconButton onClick={handleSearch}>
                        <Icon icon="material-symbols:close" />
                      </IconButton>
                    </div>
                    <div className="relative  xl:m-8 m-2">
                      <TextField
                        placeholder="Search"
                        fullWidth={true}
                        InputProps={{
                          endAdornment: (
                            <>
                              <InputAdornment position="end">
                                <iconify-icon
                                  icon="material-symbols:search"
                                  width="28"
                                ></iconify-icon>
                              </InputAdornment>
                            </>
                          ),
                        }}
                      />
                    </div>
                  </Drawer>
                </>
              )}
              <li className="xl:text-[16px] text-[22px] cursor-pointer">
                <iconify-icon
                  icon="bitcoin-icons:cart-filled"
                  width="23"
                  onClick={() => SetMenuOpen(!MenuOpen)}
                ></iconify-icon>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr />
      {MenuOpen && (
        <>
          <Drawer open={MenuOpen} variant="temporary" anchor="right">
            <div className="flex flex-col justify-end items-end xl:m-4 m-2 ">
              <IconButton onClick={() => SetMenuOpen(!MenuOpen)}>
                <Icon icon="material-symbols:close" />
              </IconButton>
            </div>

            <div
              data-aos="fade-down"
              className="my-32 mx-4 flex flex-col justify-center items-center"
            >
              <h1 className="font-semibold text-[32px] mb-2 ">Cart is Empty</h1>
              <p className="mb-4">Fill Your Cart, Fulfill Your Wishes</p>
              <button
                className="bg-black p-3 text-white btn"
                onClick={() => SetMenuOpen(!MenuOpen)}
              >
                Continue to Shipping
              </button>
            </div>
          </Drawer>
        </>
      )}
      {MobileOpen && (
        <>
          <Drawer open={MobileOpen}>
            <div className="flex flex-col justify-end items-end  ">
              <IconButton onClick={() => SetMobile(!MobileOpen)}>
                <Icon icon="material-symbols:close" />
              </IconButton>
            </div>
            {Navbars.map((nav, index) => (
              <>
                <div
                  key={index}
                  className="mx-7  my-2 flex flex-col justify-center items-center"
                >
                  <Link to={"/"} className="font-extrabold text-[22px]">
                    <img
                      src={nav.logo}
                      className="w-[100px] h-[100px] object-contain"
                    />{" "}
                  </Link>
                </div>
                <div>
                  <ul className="text-balance mx-7 my-2 text-center">
                    <li className="focus:bg-slate-400 my-4 focus:text-white">
                      <Link to={"/"} onClick={() => SetMobile(!MobileOpen)}>{nav.NavLink.Home}</Link>
                    </li>

                    <li
                      className="cursor-pointer relative my-4"
                      onClick={() => SetMensDropdown(!MensDropdown)}
                    >
                      {nav.NavLink.Mens}{" "}
                      {MensDropdown ? (
                        <>
                          <i className="fa-solid fa-chevron-up"></i>{" "}
                        </>
                      ) : (
                        <>
                          {" "}
                          <i className="fa-solid fa-chevron-down"></i>{" "}
                        </>
                      )}
                    </li>

                    {MensDropdown && (
                      <>
                        <ul>
                          <li className="focus:bg-slate-400 focus:text-white">
                            <Link
                              to={"/mens/mens-clothes"}
                              onClick={() => SetMobile(!MobileOpen)}
                            >
                              CLOTHES
                            </Link>
                          </li>
                          <li className="focus:bg-slate-400 focus:text-white">
                            <Link
                              to={"/mens/mens-shoes"}
                              onClick={() => SetMobile(!MobileOpen)}
                            >
                              SHOES
                            </Link>
                          </li>
                          <li className="focus:bg-slate-400 focus:text-white">
                            <Link onClick={() => SetMobile(!MobileOpen)} to={"/mens/mens-watch"}>WATCH</Link>
                          </li>
                        </ul>
                      </>
                    )}

                    <li
                      className="cursor-pointer outline-none my-4 "
                      onClick={() => SetWomensDropdown(!WomensDropdown)}
                    >
                      {nav.NavLink.Womens}{" "}
                      {WomensDropdown ? (
                        <>
                          <i className="fa-solid fa-chevron-up"></i>{" "}
                        </>
                      ) : (
                        <>
                          {" "}
                          <i className="fa-solid fa-chevron-down"></i>{" "}
                        </>
                      )}
                    </li>

                    {WomensDropdown ? (
                      <>
                        <ul>
                          <li className="focus:bg-slate-400 focus:text-white">
                            <Link onClick={() => SetMobile(!MobileOpen)} to={"/women/womens-clothes"}>CLOTHES</Link>
                          </li>
                          <li className="focus:bg-slate-400 focus:text-white">
                            <Link onClick={() => SetMobile(!MobileOpen)} to={"/women/women-jewelry"}>jewelry</Link>
                          </li>
                          <li className="focus:bg-slate-400 focus:text-white">
                            <Link onClick={() => SetMobile(!MobileOpen)} to={"/women/womens-handbag"}>handbag</Link>
                          </li>
                        </ul>
                      </>
                    ) : (
                      <></>
                    )}
                    {/* </>
                  )} */}
                    <li className="cursor-pointer my-4">
                      <Link onClick={() => SetMobile(!MobileOpen)} to={"/contact"}>{nav.NavLink.CONTACT}</Link>
                    </li>
                  </ul>
                </div>
              </>
            ))}
          </Drawer>
        </>
      )}
    </>
  );
}

export default MobileLayout;
