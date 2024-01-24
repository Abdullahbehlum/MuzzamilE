import React from "react";
import { useNavigate } from "react-router-dom";
import { HandleToPPage } from "../ui/Navbar/CllickTop";
import Menclo from "../../assets/images/81iKppSUfrL._AC_SX679_.jpg";
import MenSho from "../../assets/images/81d5u6zG-EL._AC_SX695_.jpg";
import MenWatch from "../../assets/images/715lOfKKNdL._AC_SY675_.jpg";
import Womenclo from "../../assets/images/61Wu1yX+fFL._AC_SY741_.jpg";
import WomenJelw from "../../assets/images/817IU7ktOjL._AC_SY535_.jpg";
import Womenhandbg from "../../assets/images/71pYTpZ0bFL._AC_SY535_.jpg";
function Category() {
  const navigate = useNavigate();
  return (
    <>
      {/* 1 Men Clothes */}
      {/* 1 Men Shoes */}
      {/* 1 Men watch */}
      {/* 1 Men clothes */}
      {/* 1 Men jellwery */}
      {/* 1 Men HandBag */}
      <div>
        <h1 className="head px-9 py-3">Our Categories</h1>
      </div>
      <div className="grid xl:mx-8 mx-3 xl:grid-cols-6 justify-around md:grid-cols-2 sm:grid-cols-2 grid-cols-1 ">
        <h1
          data-aos="fade-right"
          className="cursor-pointer xl:mb-0 mb-2 bg-white uppercase p-2 text-center mx-2 rounded-lg"
          onClick={() => {
            navigate("/mens/mens-clothes"), HandleToPPage();
          }}
        >
          <div className="flex-col flex justify-center items-center">
            <img src={Menclo} alt="no" width={100} className="my-2" />{" "}
          </div>
          &nbsp; Men's Clothes
        </h1>
        <h1
          data-aos="fade-right"
          className="cursor-pointer bg-white p-2 uppercase text-center mx-2 xl:mb-0 mb-2"
          onClick={() => {
            navigate("mens/mens-watch"), HandleToPPage();
          }}
        >
          <div className="flex-col flex justify-center items-center">
            <img src={MenWatch} alt="no" width={70} className="my-2" />{" "}
          </div>
          Men 's watch
        </h1>
        <h1
          className="cursor-pointer bg-white py-5 uppercase text-center mx-2 xl:mb-0 mb-2 "
          onClick={() => {
            navigate("/mens/mens-shoes"), HandleToPPage();
          }}
        >
          <div className="flex-col flex justify-center items-center">
            <img src={MenSho} alt="no" width={130} className="my-2" />{" "}
          </div>
          &nbsp; Men 's Shoes
        </h1>
        <h1
          className="cursor-pointer bg-white p-2  uppercase text-center mx-2 xl:mb-0 mb-2"
          onClick={() => {
            navigate("/women/womens-clothes"), HandleToPPage();
          }}
        >
          <div className="flex-col flex justify-center items-center">
            <img src={Womenclo} alt="no" width={80} className="my-2" />{" "}
          </div>
          womens clothes
        </h1>
        <h1
          className="cursor-pointer bg-white uppercase p-2 text-center mx-2 xl:mb-0 mb-2"
          onClick={() => {
            navigate("women/women-jewelry"), HandleToPPage();
          }}
        >
          <div className="flex-col flex justify-center items-center">
            <img src={WomenJelw} alt="no" width={100} className="my-2" />{" "}
          </div>
          Women Jewelry
        </h1>
        <h1
           data-aos="fade-up" className="cursor-pointer bg-white uppercase p-2 text-center"
          onClick={() => {
            navigate("/women/womens-handbag"), HandleToPPage();
          }}
        >
          <div className="flex-col flex justify-center items-center">
            <img src={Womenhandbg} alt="no" width={128} className="my-2" />{" "}
          </div>
          Women Handbags
        </h1>
      </div>
    </>
  );
}

export default Category;
