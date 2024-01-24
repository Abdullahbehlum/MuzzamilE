import { Disclosure } from "@headlessui/react";
import { Input } from "@material-tailwind/react";
import React, { useState } from "react";

function ProductFilter() {
  const [fromValue, setFromValue] = useState(0);
  const [toValue, setToValue] = useState(7880);

  const handleRangeChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    setFromValue(newValue);
  };

  return (
    <>
      <div className="bg-white xl:w-auto  w-[300px]  overflow-hidden h-full xl:p-8 p-4  rounded-lg my-3 xl:my-0">
        <h1 className="text-center my-2 font-extrabold text-[23px] uppercase ">
          New Arrivals
        </h1>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`flex w-full justify-between rounded-lg   px-4 py-1 text-left text-sm font-medium focus:outline-none ${
                  open ? "" : "my-3"
                } `}
              >
                <span>AVAILABILITY</span>
                &nbsp;{" "}
                <i
                  className={`fa-solid fa-chevron-down ${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                <div>
                  <input type="checkbox" /> <span>In Stock (32) </span>
                  <br />
                  <input type="checkbox" disabled={true} />{" "}
                  <span className="cursor-not-allowed">Out Of Stock</span>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <span>Price</span>
        &nbsp;{" "}
        <div className="flex  flex-col ">
          <div className="py-3">
            <p>From, $</p>
            <Input
              type="number"
              value={fromValue}
              disabled={true}
              defaultValue={0}
              onChange={(e) => setFromValue(parseInt(e.target.value, 10))}
            />
          </div>

          <div>
            <p>To, $</p>
            <Input type="number" disabled={true} defaultValue={toValue} />
          </div>
          <input
            type="range"
            value={fromValue}
            min={0}
            max={7880}
            onChange={handleRangeChange}
          />
        </div>
        </div>
    </>
  );
}

export default ProductFilter;
