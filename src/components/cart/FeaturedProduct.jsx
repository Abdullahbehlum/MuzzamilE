import React, { Suspense, lazy, useEffect, useState } from "react";
import {
  Product,
  ProductFive,
  ProductFour,
  ProductSix,
  ProductThree,
  ProductTwo,
} from "./Products";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { HandleToPPage } from "../ui/Navbar/CllickTop";
import Category from "../category/Category";
function FeaturedProduct() {
  const naviagte = useNavigate();
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  return (
    <>
      <div className="my-4">
        <Category />
      </div>
      <h1 className="head py-3 px-4">NEW ARRIVALS</h1>
      <div className="flex justify-center xl:my-5 items-center xl:flex-row md:flex-row sm:flex-row flex-col">
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
                  naviagte(`/product/1`), HandleToPPage();
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
                onClick={() => {
                  naviagte(`/product/2`);
                  HandleToPPage();
                }}
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
        {/* {ProductFive.map((productss, index) => (
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
        ))} */}
      </div>
      <div className="flex justify-center items-center">
        <button
          className="btn bg-red-500 rounded-lg  text-white"
          onClick={() => {
            naviagte("/women/womens-clothes");
            HandleToPPage();
          }}
        >
          View All
        </button>
      </div>
    </>
  );
}

export default FeaturedProduct;
