import React, { useState } from 'react'
import Pdthree1 from "../../../assets/images/81iKppSUfrL._AC_SX679_.jpg"
import Pdthree2 from "../../../assets/images/81EzV7ajFRL._AC_SX522_.jpg"
import Pdthree3 from "../../../assets/images/81z+QSzJ-JL._AC_SX522_.jpg"
import ReactImageGallery from 'react-image-gallery';
const ProductDetailSix = {
    images: [
      {
        original: Pdthree1,
        thumbnail: Pdthree2,
      },
      {
        original: Pdthree2,
        thumbnail: Pdthree1,
      },
      {
        original: Pdthree3,
        thumbnail: Pdthree2,
      },
    ],
    head: "Derbars Men's Cotton Plaid Shirts Jacket Fleece Lined Flannel Shirts Sherpa Button Down Jackets with Hood for Men    ",
    price: "$33.99",
  
    Aboutpara:"Comfortable Fit: This long sleeve flannel shirt crafted with a 100% Cotton flannel shell and soft beige sherpa lining will keep you warm all season long. Your new wardrobe favorite.    ",
    Aboutpara1:"Features: Button, long sleeves（The sleeves lined), 2 side pockets, drawstring hood, plaid element outer and fuzzy fleece inside, to provide extra warmth and comfort.    ",
    Aboutpara2: "Size: Our flannel shirts are regular fit style, a variety of sizes and colors for you to choose, please refer to the size chart to choose the size that suits you.",
    Aboutpara3:"Occasion: This is a versatile hooded jacket that will look stylish with your Tshirt and jeans. Perfect For Daily Wear, such as hiking, trekking, camping, hunting, biking and other outdoor activities. Any occasion is perfect in Spring, Fall and Winter.    "
  };
function ProductdSix() {
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
                  items={ProductDetailSix.images}
                  showFullscreenButton={false}
                  lazyLoad={true}
                  autoPlay={true}
                  onPlay={false}
                  onPause={false}
                />
              </div>
              <div className="mb-hide">
                <ReactImageGallery
                  items={ProductDetailSix.images}
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
                  {ProductDetailSix.head}
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
                  {ProductDetailSix.price}
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
                {ProductDetailSix.Aboutpara}
              </p>
               <p className="my-3 xl:w-4/6 w-full xl:text-sm text-xs">
                {ProductDetailSix.Aboutpara1}
              </p>
               <p className="my-3 xl:w-4/6 w-full xl:text-sm text-xs">
                {ProductDetailSix.Aboutpara2}
              </p>
               <p className="my-3 xl:w-4/6 w-full xl:text-sm text-xs">
                {ProductDetailSix.Aboutpara3}
              </p>

            </div>
          </>
        </div>
      </section>  
    </>
  )
}

export default ProductdSix
