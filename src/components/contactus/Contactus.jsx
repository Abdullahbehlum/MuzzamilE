import { Breadcrumbs } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import TextInput from "../ui/input/TextInput";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Icon } from "@iconify/react";
const ContactSchema = Yup.object({
  name: Yup.string().required("Name is Required"),
  email: Yup.string().email().required("Email is Required "),
  phone: Yup.string().required("phone number is Required "),
  com: Yup.string().required("Comments is Required "),
});

function Contactus() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(ContactSchema), mode: "all" });
  const handleCpntactUs = (data) => {
    try {
      console.log(data);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <Breadcrumbs className="pt-7 xl:pt-8 overflow-hidden w-full">
        <Link to={"/"}>Home</Link> &nbsp;
        <Link to={"/conet-with-us"} className="text-red-500">
          Contact us
        </Link>
      </Breadcrumbs>
      <div className="2 xl:mx-8  xl:my-4 flex justify-center items-center flex-col ">
        <div className="shadow-sm bg-white h-max  xl:w-[550px] w-auto                                                   iphoneXr:mx-1 overflow-hidden px-5 py-5 xl:rounded-lg ">
          <h1 className="head">Let’s Talk</h1>
          <p className="para mb-3">
            To request a quote our products, contact us directly or fill out the
            form and we will get back to you promptly.
          </p>
          <form onSubmit={handleSubmit(handleCpntactUs)}>
            <div className="mb-2">
              <TextInput
                placeholder="Name*"
                name={"name"}
                register={register}
                error={errors.name}
                defaultValue={""}
                className={`w-full outline-none border border-gray-400   p-3`}
              />
            </div>
            <div className="mb-2">
              <TextInput
                placeholder="Email*"
                name={"email"}
                register={register}
                error={errors.email}
                defaultValue={""}
                className={`w-full outline-none border border-gray-400 p-3`}
              />
            </div>

            <div className="mb-2">
              <TextInput
                placeholder="phone*"
                name={"phone"}
                type={"number"}
                register={register}
                error={errors.phone}
                defaultValue={""}
                className={`w-full outline-none border border-gray-400 p-3`}
              />
            </div>
            <div className="mb-2">
              <TextInput
                placeholder="Comment*"
                name={"com"}
                register={register}
                error={errors.com}
                defaultValue={""}
                className={`w-full outline-none border border-gray-400 p-3`}
              />
            </div>

            <button className="btn bg-black text-white capitalize w-full">
              Send
            </button>
          </form>
        </div>
      </div>

      <div
        className="grid xl:grid-cols-3  my-3
    place-content-center place-items-center   md:grid-cols-2 sm:grid-cols-2 grid-cols-1"
      >
        <div className="text-center ">
          <i className="fa-solid fa-envelope"></i>
          <p>abc33@example.com</p>
        </div>
        <div className="text-center">
          <i className="fa-solid fa-phone"></i>
          <p>+9198449803</p>
        </div>
        <div className="text-center my-3">
          <span>
            <Link to={""}>
              <iconify-icon
                icon="ic:baseline-facebook"
                width="24"
              ></iconify-icon>{" "}
              {/* ; */}
            </Link>
          </span>{" "}
          &nbsp;
          <span>
            <Link to={""}>
              <iconify-icon icon="mdi:instagram" width="24"></iconify-icon>
            </Link>
          </span>
          <span>
            <Link to={""}>
              <iconify-icon icon="ic:baseline-tiktok" width="24"></iconify-icon>
            </Link>
          </span>{" "}
          &nbsp;
          <span>
            <Link to={""}>
              <iconify-icon icon="vaadin:youtube" width="24"></iconify-icon>
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}

export default Contactus;
