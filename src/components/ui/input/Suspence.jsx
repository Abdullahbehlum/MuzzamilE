import React from "react";
import Loader from "../../loader/Loader";

function Suspences({ children }) {
  return (
    <>
      <React.Suspense
        fallback={
          <>
            <Loader />
          </>
        }
      >
        {children}
      </React.Suspense>
    </>
  );
}

export default Suspences;
