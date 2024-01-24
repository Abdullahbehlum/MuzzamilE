import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Shoesimgdetails2 from "../../../assets/images/61BhGJ3b3hL._AC_SY550_.jpg";
import Shoesimgd2 from "../../../assets/images/51weUJDI6iL._AC_SY550_.jpg";
import Shoesimgdetails3 from "../../../assets/images/51F3xpVblTL._AC_SY550_.jpg";
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
    head: "Dokotoo Women's Casual Crew Neck Sweatshirt Loose Soft Long Sleeve Pullover Tops",
    price: "$31.88",
    Aboutpara:
      "Women's Solid Color Long Sleeve Hoodie is made with lightweight and soft material that makes you feeling well for the soft skin.",
    Aboutpara1:
      "Features：Crewneck Sweatshirt, Women's Fashion Hoodies & Sweatshirts, Long Sleeve, Relaxed Fit, Classic Solid Color Pullover Tops, Side Splits.",
    Aboutpara2:
      "Style: Our long sleeve sweatshirt makes the perfect casual&athleisure style. Easily pair it with jeans, shorts, leggings, skirts for a casual everyday look.",
    Aboutpara3:
      "Occasion: 2022 Latest Fashion Womens Sweatshirt are suitable for daily life, party, school, vacation, office, work, sportswear, home etc.",
    Aboutpara4:
      "Package Content:1 x Womens Sweatshirts. Please Refer to the Dokotoo Size Chart before Ordering. Anyother questions, please contact us freely.",
  },
];
function Womend2() {
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
  return <>
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
  </>;
}

export default Womend2;
