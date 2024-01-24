// womens-handbag/1 route
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ProductFilter from "../men/ProductFilter";
import {
  WomenHandbag,
  WomenHandbagTwo,
  WomenHandbagThree,
  WomenHandbagFour,
} from "./Product";
import { Breadcrumbs } from "@material-tailwind/react";
function HandBgProducts() {
  const naviagte = useNavigate();
  const handleTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div>
        <Breadcrumbs className="pt-7 xl:pt-8 overflow-hidden w-full">
          <Link to={"/"}>Home</Link> &nbsp;
          <p className="text-red-500">Hand Bags</p>
        </Breadcrumbs>
      </div>
      <div
        data-aos="fade-right"
        className="flex xl:justify-start xl:items-start md:justify-start iphoneXr:justify-center iphoneXr:items-center iphone12:justify-center
    container galaxy:justify-center galaxy:items-center overflow-x-auto  iphone12:items-center  my-12  xl:flex-row sm:flex-row md:flex-col flex-col"
      >
        <div>
          <ProductFilter />
        </div>
        <div>
          <div
            className=" my-5 xl:my-0 sm:my-0 md:my-0
          grid xl:grid-cols-3 gap-2 sm:grid-cols-2 grid-cols-1"
          >
            {/* 1  */}
            {WomenHandbag.map((productss, index) => (
              <>
                <div
                  className="bg-white flex flex-col justify-center items-center xl:mx-3
        rounded    p-3 xl:p-4 w-[300px] mb-4 xl:mb-0"
                  data-aos="fade-left"
                  key={index}
                >
                  <img
                    src={productss.Arrival}
                    className="object-contain h-[200px] hover:scale-[0.4] "
                    alt=""
                  />
                  <h5
                    className="text-sm xl:text-xs hover:text-red-400 cursor-pointer"
                    onClick={() => {
                      naviagte(`/womens-handbag/1`);
                      handleTop();
                    }}
                  >
                    {productss.head}
                  </h5>
                  <p>{productss.price}</p>
                </div>
              </>
            ))}
            {WomenHandbagTwo.map((productss, index) => (
              <>
                <div
                  className="bg-white flex flex-col justify-center items-center xl:mx-3
        rounded    p-3 xl:p-4 w-[300px] mb-4 xl:mb-0"
                  data-aos="fade-up"
                  key={index}
                >
                  <img
                    src={productss.Arrival}
                    className="object-contain h-[200px] hover:scale-[0.4] "
                    alt=""
                  />
                  <h5
                    className="text-sm xl:text-xs hover:text-red-400 cursor-pointer"
                    onClick={() => {
                      naviagte(`/womens-handbag/2`);
                      handleTop();
                    }}
                  >
                    {productss.head}
                  </h5>
                  <p>{productss.price}</p>
                </div>
              </>
            ))}
            {WomenHandbagThree.map((productss, index) => (
              <>
                <div
                  className="bg-white flex flex-col justify-center items-center xl:mx-3
        rounded    p-3 xl:p-4 w-[300px] mb-4 xl:mb-0"
                  data-aos="fade-right"
                  key={index}
                >
                  <img
                    src={productss.Arrival}
                    className="object-contain h-[200px] hover:scale-[0.4] "
                    alt=""
                  />
                  <h5
                    className="text-sm xl:text-xs hover:text-red-400 cursor-pointer"
                    onClick={() => {
                      naviagte(`/womens-handbag/3`);
                      handleTop();
                    }}
                  >
                    {productss.head}
                  </h5>
                  <p>{productss.price}</p>
                </div>
              </>
            ))}
            {WomenHandbagFour.map((productss, index) => (
              <>
                <div
                  className="bg-white flex flex-col justify-center items-center xl:mx-3
        rounded    p-3 xl:p-4 w-[300px] mb-4 xl:mb-0"
                  data-aos="fade-right"
                  key={index}
                >
                  <img
                    src={productss.Arrival}
                    className="object-contain h-[200px] hover:scale-[0.4] "
                    alt=""
                  />
                  <h5
                    className="text-sm xl:text-xs hover:text-red-400 cursor-pointer"
                    onClick={() => {
                      naviagte(`/womens-handbag/4`);
                      handleTop();
                    }}
                  >
                    {productss.head}
                  </h5>
                  <p>{productss.price}</p>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default HandBgProducts;
