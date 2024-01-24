import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Shoesimgdetails2 from "../../../assets/images/918jQqNvVkL._AC_SY535_.jpg";
import Shoesimgd2 from "../../../assets/images/81BVwC4O+1L._AC_SY535_.jpg";
import Shoesimgdetails3 from "../../../assets/images/81G-AnEmxfL._AC_SY535_.jpg";
import ReactImageGallery from "react-image-gallery";
const MenShoes = [
  {
    images: [
      {
        original: Shoesimgdetails2,
        thumbnail: Shoesimgdetails2,
      },
      {
        original: Shoesimgd2,
        thumbnail: Shoesimgd2,
      },
      {
        original: Shoesimgdetails3,
        thumbnail: Shoesimgdetails3,
      },
    ],
    head: "2E-youth Designer Purses and Handbags for Women Satchel Shoulder Bag Tote Top Handle Bag",
    price: " $35.99",
    Aboutpara:
      "2E-youth 6pcs purse set designer handbags for women！ Blue purse color matching design, interpretation of a simple sense of fashion. Multi layered interior design, you can easily in any situation.Durable large tote bag can hold 14 inch Laptop or tablet,A4 documents or books, and your favorite high heels.Satchel shoulder bag can hold coin purse,long wallet,sunglasses,umbrella,cosmetics and other items.2E-youth clutch purse can hold your keys,lipstick,and other little items;",
    Aboutpara1:
      "This 2E-youth purses and handbags have upgrade hardware，strong stitches,durable zipper,you can use 2E-youth women handbags set for a long time. And this tote bag for women is no smell,the 2E-youth handbags for women can be a gift for birthdays, anniversaries, Valentine's day, Christmas, graduations, mother's day and any other special day;",
    Aboutpara2:
      "Material of the 2E-youth 6pcs handbags for women:use smooth faux leather as external material.The stitching is well-made as runs smoothly and evenly,feels cosy to touch.Highly anti-scratch and tear-resistant,not easy to be out of shape.The 2E-youth handbag’s inner material is polyester.With durable smoothly zippers.",
    Aboutpara3:
      "Dimensions of the 2E-youth women handbags 6pcs purse set: large tote bag:13.8 L x 4.7 W x 11H,Handle height:7.8 middle tote bag:10.2 L x 5.1 W x 7.5 H;shoulder bag:11 L x 3.1 W x7.8 H;clutch:5.5 L x 3.7 H;purse:7.5 L x 3.7 H; key holder:2.2 L x 3.7 H.One separate adjustable strap length: 43.You can use 2E-youth purses together or individually.Suitable for use in everyday.",
    Aboutpara4:
      "If you meet any issues with this 2E-youth handbags for women, please feel free to contact us via e-mail on Amazon. We will solve your problems within 24 hours.Product Care Instructions:Use a soft cloth to wipe stains.",
  },
];

function Womenebagd3() {
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
      {MenShoes.map((products, index) => (
        <>
          <div
            key={index}
            className="lg:w-4/5 py-12 xl:py-20 overflow-hidden
          flex  flex-col  xl:flex-row justify-center items-center md:flex-row sm:flex-row"
          >
            <div className="desktop-hide">
              <ReactImageGallery
                items={products.images}
                showFullscreenButton={false}
                lazyLoad={true}
                autoPlay={true}
                onThumbnailClick={true}
                onPlay={false}
                onPause={false}
              />
            </div>
            <div className="mb-hide">
              <ReactImageGallery
                items={products.images}
                thumbnailPosition="left"
                showFullscreenButton={false}
                lazyLoad={true}
                autoPlay={true}
                onPlay={false}
                onPause={false}
              />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-2 mt-6 lg:mt-0 xl:text-left text-center ">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {products.head}
              </h1>
              <div className="flex  xl:justify-normal xl:items-start justify-center items-center mb-4">
                <span className="flex">
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
              <span className="title-font text-center font-medium text-2xl text-gray-900">
                {products.price}
              </span>
              <div className="flex  mt-6 xl:justify-normal xl:items-start justify-center items-center  pb-5 border-b-2 border-gray-100 mb-2">
                <div className="flex ">
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
              <div className="flex xl:flex-row  xl:justify-normal xl:items-start justify-center items-center sm:flex-row ">
                <div className=" border border-gray-300 p-2 flex justify-center items-center xl:w-2/6 w-1/3 rounded-lg">
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
              {products.Aboutpara}
            </p>
            <p className="my-3 xl:w-4/6 w-full xl:text-sm text-xs">
              {products.Aboutpara1}
            </p>
            <p className="my-3 xl:w-4/6 w-full xl:text-sm text-xs">
              {products.Aboutpara2}
            </p>
          </div>
        </>
      ))}
    </>
  );
}

export default Womenebagd3;
