import { Breadcrumbs } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

function Refund() {
  return (
    <>
      <Breadcrumbs className="pt-7 xl:pt-8">
        <Link to={"/"}>Home</Link> &nbsp;
        <Link to={"/policies/terms-of-service"} className="text-blue-600">
          Refund Policy
        </Link>
      </Breadcrumbs>
      <div className="flex flex-col justify-center items-center overflow-hidden iphone12:overflow-hidden">
        <div>
          <h1 className="head text-center xl:mb-8 mb-3">
            Return & Refund policy
          </h1>
          <div className="flex justify-center text-slate-700 items-center flex-col overflow-hidden ">
            {/* 1 */}
            <h4 className="xl:mb-8 mb-3 overflow-hidden  text-black xl:text-sm  relative 
            xl:right-[13.3em] right-[3em] iphoneXr:right-[4em] text-xs font-extrabold">
              How we Manage our Returns & Refunds
            </h4>
            <p className="xl:text-sm text-xs text-balance xl:w-1/2 w-4/5 xl:mb-5 mb-3">
              We are committed to our customers and want you to be happy! In the
              unlikely event that you receive a flawed product, please send us
              an email at kurtadesignerofficial@gmail.com with images
              documenting the flaw you discovered within 14 days of the delivery
              date. We will inspect each complaint individually and our team
              will produce and send a replacement at no charge if discovered
              that replacement should take place. If you are not satisfied with
              our product you don't need to pay a single penny for that. &nbsp;
              <span className="text-black font-semibold">
                kurtadesignerofficial@gmail.com
              </span>{" "}
            </p>
            <p className="xl:text-sm text-xs text-balance xl:w-1/2 w-4/5 xl:mb-5 mb-3">
              Also, late or missing refunds (if applicable). If you haven’t
              received a refund yet, first check your bank account again. Then
              contact your credit card company, it may take some time before
              your refund is officially posted. Next, contact your bank, there
              is often some processing time before a refund is posted. If you’ve
              done all of this and you still have not received your refund yet,
              please contact us at &nbsp;
              <span className="text-black font-semibold">
              Abc332@example.com
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Refund;
