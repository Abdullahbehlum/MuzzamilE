import { Skeleton } from "@mui/material";
import React from "react";

function Loader() {
  return (
    <>
      <Skeleton animation="wave" sx={{
        width: "100vw",
        height: "100vw",

      }}  />
    </>
  );
}

export default Loader;
