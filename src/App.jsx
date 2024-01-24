import Aos from "aos";
import { Suspense, lazy, useEffect } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Suspences1 from "./components/ui/input/Suspence";
import ProductDetails from "./components/cart/ProductDetails";
import "aos/dist/aos.css";
import Loader from "./components/loader/Loader";
function App() {
  const Layout = lazy(() => import("./components/Navbar/Layout"));
  const Home = lazy(() => import("./components/home/Home"));
  const Policies = lazy(() => import("./components/policy/privacy-policy"));
  const Terms = lazy(() => import("./components/policy/TermService"));
  const ShippingPolicy = lazy(() => import("./components/policy/Shipping"));
  const RefundPolicy = lazy(() => import("./components/policy/Refund"));
  const Contactus = lazy(() => import("./components/contactus/Contactus"));
  // Men FASHION IS GIVEN
  const MenClothes = lazy(() => import("./components/cart/men/MenCLothes"));
  const ProductsDTwo = lazy(() => import("./components/cart/men/Prodtwo"));
  const ProductsDThree = lazy(() =>
    import("./components/cart/men/ProductdThree")
  );
  const ProductsDFour = lazy(() =>
    import("./components/cart/men/ProductdFour")
  );
  const ProductsDFive = lazy(() =>
    import("./components/cart/men/ProductdFive")
  );
  const ProductsDSix = lazy(() => import("./components/cart/men/ProductdSix"));
  // Men FASHION IS END
  //  Men SHoes Is GIVEN
  const ProductShoes = lazy(() =>
    import("./components/cart/menShoes/Shoesmens")
  );
  const ProductShoesdetails = lazy(() =>
    import("./components/cart/menShoes/Shoesd1")
  );
  const ProductShoesdetails2 = lazy(() =>
    import("./components/cart/menShoes/menShoesD2")
  );
  const ProductShoesdetails3 = lazy(() =>
    import("./components/cart/menShoes/menShoesD3")
  );
  const ProductShoesdetails4 = lazy(() =>
    import("./components/cart/menShoes/menShoesD4")
  );
  const ProductShoesdetails5 = lazy(() =>
    import("./components/cart/menShoes/menShoesD5")
  );
  const ProductShoesdetails6 = lazy(() =>
    import("./components/cart/menShoes/menShoesD6")
  );
  const Watchmen = lazy(() => import("./components/cart/menwatches/Watchmen"));
  // Men watch details
  const Watchmend1 = lazy(() => import("./components/cart/menwatches/Watchd1"));
  const Watchmend2 = lazy(() => import("./components/cart/menwatches/watchd2"));
  const Watchmend3 = lazy(() => import("./components/cart/menwatches/Watchd3"));
  const Watchmend4 = lazy(() => import("./components/cart/menwatches/Watchd4"));
  const Watchmend5 = lazy(() => import("./components/cart/menwatches/watchd5"));
  // Men watch details end
  const WomenProducts = lazy(() =>
    import("./components/cart/women/WomenProduct")
  );
  // women details
  const WomenProductsd1 = lazy(() => import("./components/cart/women/Womend1"));
  const WomenProductsd2 = lazy(() => import("./components/cart/women/Womend2"));
  const WomenProductsd3 = lazy(() => import("./components/cart/women/Womend3"));
  const WomenProductsd4 = lazy(() => import("./components/cart/women/Womend4"));
  const WomenProductsd5 = lazy(() => import("./components/cart/women/Womend5"));
  const WomenProductsd6 = lazy(() => import("./components/cart/women/womend6"));
  // jellwery is given
  const JellweryProduct = lazy(() =>
    import("./components/cart/women-jwellery/JellweryProduct")
  );
  const JellweryProductd1 = lazy(() =>
    import("./components/cart/women-jwellery/Jwelleryd1")
  );
  const JellweryProductd2 = lazy(() =>
    import("./components/cart/women-jwellery/Jwelleryd2")
  );
  const JellweryProductd3 = lazy(() =>
    import("./components/cart/women-jwellery/Jwelleryd3")
  );
  const JellweryProductd4 = lazy(() =>
    import("./components/cart/women-jwellery/Jwelleryd4")
  );
  const JellweryProductd5 = lazy(() =>
    import("./components/cart/women-jwellery/Jwelleryd5")
  );
  // Hand bag
  const HandbagProduct = lazy(() =>
    import("./components/cart/women-handbag/HandBgProducts")
  );
  const HandbagProductd1 = lazy(() =>
    import("./components/cart/women-handbag/womenebagd1")
  );
  const HandbagProductd2 = lazy(() =>
    import("./components/cart/women-handbag/Womenbgd2")
  );
  const HandbagProductd3 = lazy(() =>
    import("./components/cart/women-handbag/Womenbgd3")
  );
  const HandbagProductd4 = lazy(() =>
    import("./components/cart/women-handbag/Womenbgd4")
  );

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={
            <Suspences1>
              <Layout />
            </Suspences1>
          }
        >
          <Route index element={<Home />} />
          <Route
            path="policies/privacy-policy"
            element={
              <Suspences1>
                <Policies />
              </Suspences1>
            }
          />
          <Route
            path="policies/terms-of-service"
            element={
              <Suspences1>
                <Terms />
              </Suspences1>
            }
          />
          <Route
            path="policies/shipping-policy"
            element={
              <Suspences1>
                <ShippingPolicy />
              </Suspences1>
            }
          />
          <Route
            path="policies/refund-policy"
            element={
              <Suspences1>
                <RefundPolicy />
              </Suspences1>
            }
          />
          <Route
            path="contact"
            element={
              <Suspences1>
                <Contactus />
              </Suspences1>
            }
          />
          <Route
            path="product/1"
            element={
              <Suspences1>
                <ProductDetails />
              </Suspences1>
            }
          />{" "}
          <Route
            path="product/2"
            element={
              <Suspences1>
                <ProductsDTwo />
              </Suspences1>
            }
          />{" "}
          <Route
            path="product/3"
            element={
              <Suspences1>
                <ProductsDThree />
              </Suspences1>
            }
          />{" "}
          <Route
            path="product/4"
            element={
              <Suspences1>
                <ProductsDFour />
              </Suspences1>
            }
          />{" "}
          <Route
            path="product/5"
            element={
              <Suspences1>
                <ProductsDFive />
              </Suspences1>
            }
          />{" "}
          <Route
            path="product/6"
            element={
              <Suspences1>
                <ProductsDSix />
              </Suspences1>
            }
          />{" "}
          <Route
            path="mens/mens-clothes"
            element={
              <Suspences1>
                <MenClothes />
              </Suspences1>
            }
          />
          <Route
            path="mens/mens-watch"
            element={
              <Suspences1>
                <Watchmen />
              </Suspences1>
            }
          />
          <Route
            path="watch/1"
            element={
              <Suspences1>
                <Watchmend1 />
              </Suspences1>
            }
          />
          <Route
            path="watch/2"
            element={
              <Suspences1>
                <Watchmend2 />
              </Suspences1>
            }
          />
          <Route
            path="watch/3"
            element={
              <Suspences1>
                <Watchmend3 />
              </Suspences1>
            }
          />
          <Route
            path="watch/4"
            element={
              <Suspences1 >
                <Watchmend4 />
              </Suspences1>
            }
          />
          <Route
            path="watch/5"
            element={
              <Suspences1>
                <Watchmend5 />
              </Suspences1>
            }
          />
          <Route
            path="mens/mens-shoes"
            element={
              <Suspences1 >
                <ProductShoes />
              </Suspences1>
            }
          />
          <Route
            path="shoes/1"
            element={
              <Suspences1 >
                <ProductShoesdetails />
              </Suspences1>
            }
          />
          <Route
            path="shoes/2"
            element={
              <Suspences1 >
                <ProductShoesdetails2 />
              </Suspences1>
            }
          />
          <Route
            path="shoes/3"
            element={
              <Suspences1>
                <ProductShoesdetails3 />
              </Suspences1>
            }
          />
          <Route
            path="shoes/4"
            element={
              <Suspences1 >
                <ProductShoesdetails4 />
              </Suspences1>
            }
          />
          <Route
            path="shoes/5"
            element={
              <Suspences1>
                <ProductShoesdetails5 />
              </Suspences1>
            }
          />
          <Route
            path="shoes/6"
            element={
              <Suspense
                fallback={
                  <>
                    <Loader />
                  </>
                }
              >
                <ProductShoesdetails6 />
              </Suspense>
            }
          />
          {/* Shoes Product details is given */}
          {/* Shoes Product details is End */}
          <Route
            path="/women/womens-clothes"
            element={
              <Suspense
                fallback={
                  <>
                    <Loader />
                  </>
                }
              >
                <WomenProducts />
              </Suspense>
            }
          />
          {/* women product details  */}
          <Route
            path="women/clothes/1"
            element={
              <Suspense
                fallback={
                  <>
                    <Loader />
                  </>
                }
              >
                <WomenProductsd1 />
              </Suspense>
            }
          />
          <Route
            path="women/clothes/2"
            element={
              <Suspense
                fallback={
                  <>
                    <Loader />
                  </>
                }
              >
                <WomenProductsd2 />
              </Suspense>
            }
          />
          <Route
            path="women/clothes/3"
            element={
              <Suspense
                fallback={
                  <>
                    <Loader />
                  </>
                }
              >
                <WomenProductsd3 />
              </Suspense>
            }
          />
          <Route
            path="women/clothes/4"
            element={
              <Suspense
                fallback={
                  <>
                    <Loader />
                  </>
                }
              >
                <WomenProductsd4 />
              </Suspense>
            }
          />
          <Route
            path="women/clothes/5"
            element={
              <Suspense
                fallback={
                  <>
                    <Loader />
                  </>
                }
              >
                <WomenProductsd5 />
              </Suspense>
            }
          />
          <Route
            path="women/clothes/6"
            element={
              <Suspense
                fallback={
                  <>
                    <Loader />
                  </>
                }
              >
                <WomenProductsd6 />
              </Suspense>
            }
          />
          {/* women product details end  */}
          <Route
            path="women/women-jewelry"
            element={
              <Suspense
                fallback={
                  <>
                    <Loader />
                  </>
                }
              >
                <JellweryProduct />
              </Suspense>
            }
          />
          {/* jellwery is given */}
          <Route
            path="women-jewelry/1"
            element={
              <Suspences1>
                <JellweryProductd1 />
              </Suspences1>
            }
          />
          <Route
            path="women-jewelry/2"
            element={
              <Suspences1>
                <JellweryProductd2 />
              </Suspences1>
            }
          />
          <Route
            path="women-jewelry/3"
            element={
              <Suspences1>
                <JellweryProductd3 />
              </Suspences1>
            }
          />
          <Route
            path="women-jewelry/4"
            element={
              <Suspences1>
                <JellweryProductd4 />
              </Suspences1>
            }
          />
          <Route
            path="women-jewelry/5"
            element={
              <Suspences1>
                <JellweryProductd5 />
              </Suspences1>
            }
          />
          <Route
            path="women/womens-handbag"
            element={
              <Suspences1>
                <HandbagProduct />
              </Suspences1>
            }
          />
          {/* handbag  */}
          <Route
            path="/womens-handbag/1"
            element={
              <Suspences1>
                <HandbagProductd1 />
              </Suspences1>
            }
          />
          <Route
            path="/womens-handbag/2"
            element={
              <Suspences1>
                <HandbagProductd2 />
              </Suspences1>
            }
          />
          <Route
            path="/womens-handbag/3"
            element={
              <Suspences1>
                <HandbagProductd3 />
              </Suspences1>
            }
          />
          <Route
            path="/womens-handbag/4"
            element={
              <Suspences1 >
                <HandbagProductd4 />
              </Suspences1>
            }
          />
        </Route>

      </Routes>
    </>
  );
}

export default App;
