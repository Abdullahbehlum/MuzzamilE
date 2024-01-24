import React from "react";
import {
  Product,
  ProductFive,
  ProductFour,
  ProductSix,
  ProductThree,
  ProductTwo,
} from "../Products";
import { Link, useNavigate } from "react-router-dom";
import ProductFilter from "./ProductFilter";
import { Breadcrumbs } from "@material-tailwind/react";
import { HandleToPPage } from "../../ui/Navbar/CllickTop";
function MenCLothes() {
  const naviagte = useNavigate();
  const handleTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div>
        <Breadcrumbs className="pt-7 xl:pt-8 overflow-hidden w-full">
          <Link to={"/"}>Home</Link> &nbsp;
          <Link to={"mens/mens-clothes"} className="text-red-500">
            Men's Fashion
          </Link>
        </Breadcrumbs>
      </div>
      <div
        // data-aos="fade-left"
        data-aos="fade-right"
        className="flex xl:justify-start xl:items-start md:justify-start iphoneXr:justify-center iphoneXr:items-center iphone12:justify-center
    container galaxy:justify-center galaxy:items-center overflow-x-auto  iphone12:items-center  my-12  xl:flex-row sm:flex-row md:flex-col flex-col">     <div>
          <ProductFilter />
        </div>
        <div>
          <div
            className=" my-5 xl:my-0 sm:my-0 md:my-0 overflow-hidden
          grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1"
          >
            {Product.map((productss, index) => (
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
                      naviagte(`/product/1`);
                    handleTop();
                    }}
                  >
                    {productss.head}
                  </h5>
                  <p>{productss.price}</p>
                </div>
              </>
            ))}
            {ProductTwo.map((productss, index) => (
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
                    onClick={() => naviagte(`/product/2`)}
                  >
                    {productss.head}
                  </h5>
                  <p>{productss.price}</p>
                </div>
              </>
            ))}
            {ProductThree.map((productss, index) => (
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
                      naviagte(`/product/3`);
                      HandleToPPage();
                    }}
                  >
                    {productss.head}
                  </h5>
                  <p>{productss.price}</p>
                </div>
              </>
            ))}

            {ProductFour.map((productss, index) => (
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
                      naviagte(`/product/4`);
                      HandleToPPage();
                    }}
                  >
                    {productss.head}
                  </h5>
                  <p>{productss.price}</p>
                </div>
              </>
            ))}
            {ProductFive.map((productss, index) => (
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
                      naviagte(`/product/5`);
                      HandleToPPage();
                    }}
                  >
                    {productss.head}
                  </h5>
                  <p>{productss.price}</p>
                </div>
              </>
            ))}
            {ProductSix.map((productss, index) => (
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
                      naviagte(`/product/6`);
                      HandleToPPage();
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

export default MenCLothes;
