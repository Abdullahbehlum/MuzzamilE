import React, { Suspense, lazy, useEffect, useState } from "react";
import { Navbars } from "./Navbar";
import { Link, Outlet } from "react-router-dom";
import MobileLayout from "./MobileLayout";
import Footer from "../footer/footer";
import Header from "./Header";
import { Drawer, IconButton, InputAdornment, TextField } from "@mui/material";
import { Icon } from "@iconify/react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [SearchOpen, SetSearchOpen] = useState(false);
  const [MenuOpen, SetMenuOpen] = useState(false);
  const [MensDropdown, SetMensDropdown] = useState(false);
  const [WomensDropdown, SetWomensDropdown] = useState(false);
  const handleSearch = () => {
    SetSearchOpen(!SetSearchOpen);
  };
  const handleTop =  () => {
    window.scrollTo(0,0);
  }
  useEffect(() => { 
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* <Header /> */}
      <div
        className={`hidden lg:hidden xl:block md:hidden sm:hidden ${
          isScrolled ? `sticky top-0 bg-white w-full  z-20 ` : ""
        }`}
      >
        <div className={`flex justify-evenly items-center py-2`}>
          {Navbars.map((nav, index) => (
            <>
              <div key={index}>
                <Link to={"/"} className="font-extrabold text-[22px]">
                  <img
                    src={nav.logo}
                    className="w-[80px] h-[80px] object-contain"
                  />{" "}
                </Link>
              </div>
              <div>
                <ul className="nav_items text-balance">
                  <li className="focus:bg-slate-400 xl:mx-2 focus:text-white">
                    <Link onClick={handleTop} to={"/"}>{nav.NavLink.Home}</Link>
                  </li>
                  <li  >
                  <Menu
                    allowHover={true}
                    animate={{
                      mount: { y: 0 },
                      unmount: { y: 25 },
                    }}
                  >
                    <MenuHandler>
                      <li className="cursor-pointer xl:mx-2">
                        {nav.NavLink.Mens}{" "}
                        <i
                          className="fa-solid fa-chevron-down"
                          onClick={() => SetMensDropdown(!MensDropdown)}
                        ></i>{" "}
                      </li>
                    </MenuHandler>
                    <MenuList className="outline-none z-50 ">
                      <MenuItem className="focus:bg-slate-400 focus:text-white">
                        <Link onClick={handleTop} to={"/mens/mens-clothes"}>CLOTHES</Link>
                      </MenuItem>

                      <MenuItem className="focus:bg-slate-400 focus:text-white">
                        <Link onClick={handleTop} to={"/mens/mens-shoes"}>SHOES</Link>
                      </MenuItem>

                      <MenuItem className="focus:bg-slate-400 focus:text-white">
                        <Link onClick={handleTop} to={"/mens/mens-watch"}>WATCH</Link>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                  </li>
                
                  <Menu
                    allowHover={true}
                    // placement="right-start"
                    animate={{
                      mount: { y: 0 },
                      unmount: { y: 25 },
                    }}
                  >
                    <MenuHandler>
                      <li className="cursor-pointer outline-none xl:mx-2">
                        {nav.NavLink.Womens}{" "}
                        <i
                          class="fa-solid fa-chevron-down"
                          onClick={() => SetWomensDropdown(!WomensDropdown)}
                        ></i>{" "}
                      </li>
                    </MenuHandler>
                    <MenuList className="outline-none z-50 ">
                      <MenuItem className="focus:bg-slate-400 focus:text-white">
                        <Link onClick={handleTop} to={"/women/womens-clothes"}>CLOTHES</Link>
                      </MenuItem>
                      <MenuItem className="focus:bg-slate-400 uppercase focus:text-white">
                        <Link onClick={handleTop} to={"/women/women-jewelry"}>jewelry</Link>
                      </MenuItem>
                      <MenuItem className="focus:bg-slate-400 uppercase focus:text-white">
                        <Link onClick={handleTop} to={"/women/womens-handbag"}>handbag</Link>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                  {/* </>
                  )} */}
                  <li className="cursor-pointer xl:mx-2">
                    <Link to={"/contact"}>{nav.NavLink.CONTACT}</Link>
                  </li>
                </ul>
              </div>
            </>
          ))}
          <div>
            <ul className="inline_wrap ">
              <li className="xl:text-[16px] text-[19px] cursor-pointer">
                <Link to={"/contact"}>
                  <iconify-icon
                    icon="tabler:messages"
                    width="28"
                  ></iconify-icon>
                </Link>
              </li>
              <li
                className="xl:text-[16px] text-[19px] cursor-pointer"
                onClick={() => SetSearchOpen(!SearchOpen)}
              >
                <iconify-icon
                  icon="material-symbols:search"
                  width="28"
                ></iconify-icon>
              </li>
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
                              <InputAdornment
                                position="end"
                                onClick={() => SetSearchOpen(false)}
                              >
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
                  width="28"
                  onClick={() => SetMenuOpen(!MenuOpen)}
                ></iconify-icon>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      {/* Mobile */}

      {MenuOpen && (
        <>
          <Drawer open={MenuOpen} variant="temporary" anchor="right">
            <div className="flex flex-col justify-end items-end xl:m-4 ">
              <IconButton onClick={() => SetMenuOpen(!MenuOpen)}>
                <Icon icon="material-symbols:close" />
              </IconButton>
            </div>
            <div></div>
            <div className="my-32 mx-4 flex flex-col justify-center items-center">
              <h1 className="font-semibold text-[32px] mb-3 ">Cart is Empty</h1>
              <p className="mb-3">Fill Your Cart, Fulfill Your Wishes</p>
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

      <div className="block  xl:hidden ">
        <MobileLayout />
      </div>

      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
