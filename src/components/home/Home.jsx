import React, { Suspense, lazy } from "react";
import Suspences from "../ui/input/Suspence";

function Home() {
  const Banner = lazy(() => import("./Banner"));
  const Featuredproducts = lazy(() => import("../cart/FeaturedProduct"));
  return (
    <>
      <div className="relative">
        <Suspense fallback={<></>} >
          <Banner />
        </Suspense>
      </div>
      <div className="py-4" >
        <Suspences>
          <Featuredproducts />
        </Suspences>
      </div>
    </>
  );
}

export default Home;
