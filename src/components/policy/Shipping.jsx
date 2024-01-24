import { Breadcrumbs } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

function Shipping() {
  return (
    <>
      <Breadcrumbs className="pt-7 xl:pt-8">
        <Link to={"/"}>Home</Link> &nbsp;
        <Link to={"/policies/shipping-policy"} className="text-blue-600">
          Shipping policy
        </Link>
      </Breadcrumbs>
      <div className="flex flex-col justify-center items-center overflow-hidden iphone12:overflow-hidden">
        <div>
          <h1 className="head text-center xl:mb-8 mb-3">Shipping policy</h1>
          <div className="flex justify-center text-slate-700 items-center flex-col overflow-hidden ">
            {/* 1 */}
            <h4 className="xl:mb-8 mb-3 overflow-hidden text-black xl:text-sm  relative xl:right-[19.3em] right-[10em] text-xs font-extrabold">
              Shipping Policy
            </h4>
            <p className="xl:text-sm text-xs text-balance xl:w-1/2 w-4/5 xl:mb-5 mb-3">
              We Offer Very Fast Shipping all over the PAKISTAN And Normally Our
              Products Are Delivered Within 3 Days But They Can Take Up To 5
              Days Maximum During Peak Times. Worldwide shipping takes
              approximately 7-15 days for your order to arrive.
            </p>
            <p className="xl:text-sm text-xs text-balance xl:w-1/2 w-4/5 xl:mb-5 mb-3">
              During the holiday season, we and shipping carriers may experience
              a significant rise in the number of orders. Therefore, we
              apologize for any delays, both, in order processing and extended
              delivery time.
            </p>
            <p className="xl:text-sm text-xs text-balance xl:w-1/2 w-4/5 xl:mb-5 mb-3">
              Our courier service is highly reliable and offers real-time
              package tracking unless stated otherwise. You’ll receive an ‘order
              confirmation’ email once you place your order. After your order is
              shipped, you'll receive a 'shipping confirmation' email containing
              the tracking number of your package.
            </p>
            <p className="xl:text-sm text-xs text-balance xl:w-1/2 w-4/5 xl:mb-5 mb-3">
              Any questions or concerns, feel free to contact us directly at &nbsp;
              <span className="text-black font-semibold">
              Abc332@example.com
              </span>{" "}
            </p>
            <p className="xl:text-sm text-xs text-balance xl:w-1/2 w-4/5 xl:mb-5 mb-3">
              (Mon.- Fri. 9:00 a.m.- 5:00 p.m.) EST
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shipping;
