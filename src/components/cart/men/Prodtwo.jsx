import React, { useState, useRef } from "react";

import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useParams } from "react-router-dom";
// import {} from "../../../assets";
import Arrivalp21 from "../../../assets/images/91udZF8CmoL._AC_SX679_.jpg"

import Arrivalp21details from "../../../assets/images/Dibinks.jpg";
import Arrivalp22details from "../../../assets/images/918xh1VJWEL._AC_SX522_.jpg";
import Arrivalp23details from "../../../assets/images/91VIBR-4+mL._AC_SX522_.jpg";
const ProductDetailTwo = {
  images: [
    {
      original: Arrivalp21,
      thumbnail: Arrivalp21details,
    },
    {
      original: Arrivalp21details,
      thumbnail: Arrivalp22details,
    },
    {
      original: Arrivalp23details,
      thumbnail: Arrivalp22details,
    },
  ],
  head: "Dubinik® Flannel Shirt for Men Casual Button Down Work Soft All Cotton Lightweight Flannel Mens Plaid Shirts Long Sleeve",
  price: "$32.99",

  Aboutpara: "[Relaxed Fit]: Refer to our size chart for the ideal fit; The Buck Camp Flannel is designed to highlight the chest and waist, offering a comfortable yet stylish shape; Its double-pleated back ensures ease of movement without any pulling or tugging; Adhere to care instructions for optimal shrinkage management",
  Aboutpara1: "[Quality of Material]: Legendary Whitetails flannel shirt for men, recognized for its top-tier quality, is crafted from 100% soft brushed cotton flannel and promises warmth and breathability; This 5.1 ounce Buck Camp Flannel Shirt is ideally weighted for layering or standalone wear, indoors and out; Beyond its softness, its pill-resistant premium fabric quality ensures a consistently sharp look and lasting comfort",
  Aboutpara2: "[Authentic Designs]: Our plaid shirt men's designs stay true to their images, ensuring you get exactly what you see; immediate out of box comfort with no need for a break-in period Its fade-resistant fabric ensures your men's flannel long sleeve shirt looks as vibrant as day one, wash after wash",
  Aboutpara3: "[Traditional Style]: The classic single pocket design gives you a clean look while providing an option for storage; use the pencil slot to hold your pencil when scoring on the range or safeguarding your sunglasses"
};
function ProductsDTwo() {
  const [Increment, setIncrement] = useState(0);
  const [Dec, setDec] = useState();
  const handleIncrement = () => {
    setIncrement(Increment + 1);
  };
  const HandleDecrement = () => {
    if (Increment > 0) {
      setIncrement(Increment - 1);
    }
  };
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-16 mx-auto ">
          <>
            <div className="lg:w-4/5 flex  flex-col xl:flex-row justify-center items-center md:flex-row sm:flex-row">
              <div className="desktop-hide">
                <ReactImageGallery
                  items={ProductDetailTwo.images}
                  showFullscreenButton={false}
                  lazyLoad={true}
                  autoPlay={true}
                  onPlay={false}
                  onPause={false}
                />
              </div>
              <div className="mb-hide">
                <ReactImageGallery
                  items={ProductDetailTwo.images}
                  thumbnailPosition="left"
                  showFullscreenButton={false}
                  lazyLoad={true}
                  autoPlay={true}
                  onPlay={false}
                  onPause={false}
                />
              </div>
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-2 mt-6 lg:mt-0">
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {ProductDetailTwo.head}
                </h1>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    <i className="fa-solid fa-star text-orange-500"></i>
                    <i className="fa-solid fa-star text-orange-500"></i>
                    <i className="fa-solid fa-star text-orange-500"></i>
                    <i className="fa-solid fa-star text-orange-500"></i>
                    <span className="text-gray-600 ml-3">5.0 Reviews</span>
                  </span>
                  <span className="flex ml-3 pl-3 py-2 border-l-2 capitalize border-gray-200 space-x-2s">
                    6,782 rating
                  </span>
                </div>
                <span className="title-font font-medium text-2xl text-gray-900">
                  {ProductDetailTwo.price}
                </span>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-2">
                  <div className="flex">
                    <span className="mr-3">Color</span>
                    <button className="border-2 border-gray-300 hover:scale-[1.1] rounded-full w-6 h-6 focus:outline-none"></button>
                    <button className="border-2 border-gray-300 ml-1 bg-gray-700 hover:scale-[1.1] rounded-full w-6 h-6 focus:outline-none"></button>
                    <button className="border-2 border-gray-300 ml-1 bg-red-500 hover:scale-[1.1] rounded-full w-6 h-6 focus:outline-none"></button>
                  </div>
                  <div className="flex ml-6 items-center">
                    <span className="mr-3">Size</span>
                    <div className="relative">
                      <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none  focus:border-red-500 text-base pl-3 pr-10">
                        <option>SM</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                      </select>
                      <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex xl:flex-row  sm:flex-row ">
                  <div className=" border border-gray-300 flex justify-center items-center xl:w-2/6 w-1/3 rounded-lg">
                    <span
                      className="xl:px-2 px-1 cursor-pointer"
                      onClick={handleIncrement}
                      >
                      +
                    </span>
                    <span className="xl:px-2 px-1">{Increment}</span> &nbsp;
                    <span
                      className="xl:px-2 cursor-pointer px-1"
                      onClick={HandleDecrement}
                    >
                      -
                    </span>
                    &nbsp;
                  </div>

                  <button className="flex  border-0 py-2 px-6 focus:outline-none bg-red-600 focus:bg-red-500 hover:bg-red-400  text-white h   ml-4">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="my-12 xl:mx-12 mx-5  text-black">
              <h1>Description</h1>
               <p className="my-3 xl:w-4/6 w-full xl:text-sm text-xs">
                {ProductDetailTwo.Aboutpara}
              </p>
               <p className="my-3 xl:w-4/6 w-full xl:text-sm text-xs">
                {ProductDetailTwo.Aboutpara1}
              </p>
               <p className="my-3 xl:w-4/6 w-full xl:text-sm text-xs">
                {ProductDetailTwo.Aboutpara2}
              </p>
               <p className="my-3 xl:w-4/6 w-full xl:text-sm text-xs">
                {ProductDetailTwo.Aboutpara3}
              </p>

            </div>
          </>
        </div>
      </section>
    </>
  );
}

export default ProductsDTwo;
