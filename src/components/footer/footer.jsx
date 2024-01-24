import Aos from "aos";
import React, { useEffect } from "react";
import LogoWhite from "../../assets/images/Az.png";
import { Link } from "react-router-dom";
export const FooterContent = {
  head: "BE IN TOUCH WITH US:",
  Policies: "Our Policies",
  Privacy: "Privacy Policy",
  Terms: "Terms of Service",
  Shipping: "Shipping Policy",
  Refund: "Refund Policy",
  Contact: "Contact Information",
  Contacts: "Contacts",
  Phone: "Phone : +91637463",
  Email: "Email: abc332@example.com",
  Address: "",
};
function Footer() {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);
  const handleTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      {/* xl:min-h-min iphone12:h-[74vh]  iphoneXr:h-[70.9vh] */}
      <div className="w-ful text-black overflow-hidden xl:overflow-auto pt-5 px-2 iphone12:overflow-hidden ">
        {/* desktop */}

        <div
          data-aos="fade-bottom"
          className="  mx-4 grid xl:grid-cols-4 grid-cols-1  overflow-hidden  xl:p-4 p-1"
        >
          <div className="mb-3 xl:mb-0  ">
            <img
              src={LogoWhite}
              alt="not found"
              className="w-[70px] xl:mb-2 mb-3 xl:mx-12 mx-0"
            />
            <p className="text-balance  text-xs xl:text-sm">
       Shop Outside the Box
            </p>
          </div>

          <div className="flex flex-col xl:ml-4 ml-0 mb-3 xl:mb-0 text-xs xl:text-sm">
            <h3
              className=" font-bold text-[18px] mb-2 xl:mb-1 hover:text-red-500"
              style={{ fontFamily: "poppins" }}
            >
              {FooterContent.Policies}
            </h3>
            <ul className="text-[14px]">
              <li className="mb-2 xl:mb-1">
                <Link to={"/policies/privacy-policy"} onClick={handleTop}>
                  {FooterContent.Privacy}
                </Link>
              </li>
              <li className="mb-2 xl:mb-1">
                <Link to={"policies/terms-of-service"} onClick={handleTop}>
                  {FooterContent.Terms}
                </Link>
              </li>
              <li className="mb-2 xl:mb-1">
                <Link to={"/policies/shipping-policy"} onClick={handleTop}>
                  {FooterContent.Shipping}
                </Link>
              </li>
              <li className="mb-2 xl:mb-1">
                <Link to={"policies/refund-policy"} onClick={handleTop}>
                  {FooterContent.Refund}
                </Link>
              </li>
              <li>
                <Link to={"/contact"} onClick={handleTop}>
                  {FooterContent.Contact}
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col xl:ml-[-4em] ml-0">
            <h3
              className=" font-bold text-[18px] hover:text-red-500"
              style={{ fontFamily: "poppins" }}
            >
              {FooterContent.Contacts}
            </h3>
            <ul>
              <li>
                <p>{FooterContent.Phone}</p>
              </li>
              <li>
                <p>{FooterContent.Email}</p>
              </li>
              <li>
                <p>{FooterContent.Address}</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="mb-hide w-full overflow-hidden">
          <ul className=" inline_wrap text-center ">
            <li>
              <h1 className="text-red-500">{FooterContent.head}</h1>
            </li>
            <li>
              <div className="flex ">
                <input
                  type="text"
                  placeholder="Enter Your Email Here"
                  className="appearance-none border-none
         rounded-lg  outline-none py-2 xl:px-8 iphoneXr:px-4  "
                  required
                />{" "}
                &nbsp; &nbsp; &nbsp;
                <button
                  className="bg-white hover:bg-red-500 hover:text-white 
                 py-1 xl:ml-[-40px] sm:ml-[-30px] ml-0  rounded-lg px-8 iphoneXr:px-4 text-black"
                >
                  Subscribe
                </button>
              </div>
            </li>
          </ul>
        </div>
        <hr />
        <div
          className="flex xl:flex-row flex-col xl:justify-between justify-center 
         items-center px-3"
        >
          <div>
            <p className=" pt-2  text-center xl:mb-0 sm:mb-0 md:mb-0">
              © 2024,{" "}
              <span className="hover:text-red-500">
                <Link to={"/"}>Azguard Nine</Link>
              </span>{" "}
              Copyright, All Right Reserved.
            </p>
          </div>
          <div className="pt-2">
            <span className="hover:text-red-500">
              <Link to={""}>
                <iconify-icon
                  icon="ic:baseline-facebook"
                  width="24"
                ></iconify-icon>{" "}
                {/* ; */}
              </Link>
            </span>{" "}
            &nbsp;
            <span className="hover:text-red-500">
              <Link to={""}>
                <iconify-icon icon="mdi:instagram" width="24"></iconify-icon>
              </Link>
            </span>
            <span className="hover:text-red-500">
              <Link to={""}>
                <iconify-icon
                  icon="ic:baseline-tiktok"
                  width="28"
                ></iconify-icon>
              </Link>
            </span>{" "}
            &nbsp;
            <span className="hover:text-red-500">
              <Link to={""}>
                <iconify-icon icon="vaadin:youtube" width="28"></iconify-icon>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
