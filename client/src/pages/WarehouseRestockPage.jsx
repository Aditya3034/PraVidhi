import React from "react";
import { MdCancel } from "react-icons/md";
import { MdOutlineSearch } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaBoxOpen } from "react-icons/fa6";

const WarehouseRestockPage = () => {
  return (
    <div className=" bg-white font-Grifter  pt-12 min-h-screen sm:pt-24">
      <div className=" relative">
        <div className=" h-56 flex flex-col items-center justify-center bg-gradient-to-r from-[#0F2027] via-[#23414B] to-[#2C5364]">
          <h1 className=" text-white text-[50px]">Fresh from the Fields</h1>
          <h2 className=" text-[#9A9A9A] text-[20px]">
            Source Quality Crops from Farmers and Warehouses
          </h2>
        </div>
        <div className=" max-w-7xl">
          <div className=" absolute -bottom-8 left-[27%] h-[70px] bg-white shadow-md w-[770px] rounded-md">
            <div className=" flex h-full justify-between items-center p-4">
              <div className=" flex items-center">
                <MdOutlineSearch className=" text-xl font-bold text-[#9A9A9A] mx-2" />
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search for crops..."
                />
              </div>
              <MdCancel className=" text-xl font-bold text-[#9A9A9A] mx-2" />
            </div>
          </div>
        </div>
      </div>
      <div className=" pt-12 w-full flex justify-center items-center">
        <h1 className=" text-sm text-[#9A9A9A] font-Poppins">
          Popular searches : Rice, Wheat, Sugarcane, Rajma, Chole, Moong-Dal
        </h1>
      </div>
      <div className=" pt-10 max-w-7xl flex items-center font-Poppins  mx-auto">
        <div className=" w-full grid grid-cols-4 gap-4">
          <div className=" border-2 rounded-md p-3">
            <div className=" flex gap-6 h-16">
              <img
                src="https://s3-alpha-sig.figma.com/img/7568/3fd5/7261c2ae940abab762a6e0130b36b3a9?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NcxBVYc9fzxYoUpt7S5fmInSc7IlPGjp5tBePiUdGQrC6Z9Rt8sV2LM5XSDeHObTKOtWrZ~ZmXjr8Rn5ZyE22-VpP-eFZCIFH6WE1ZCTOQ4IzT8kJ7Kx1QQb4gdP8E3Rgb4nFspewKFfwp1xgrWuRp0R3DZjDqPNpa6aW8yvcKTLV0PoTfbvQ~hQCJSQZg5rgIn4oc1vMxUunsnG1AthzwDMiPSn8GRF-sWZt3wfTqmNe9wgRLyKD~fOsqOVAcE8AVhkB-f-JsM77ZKejdpDBSiaqDNso~wlCT96KVgSyGeSYUhGrDtKqeO5aYrjIIBnhDZTO8KxULO8XU8~0i1ceQ__"
                alt=""
                className=" h-16 w-16 rounded-full"
              />
              <div className=" text-xs h-full flex flex-col text-[#9A9A9A]">
                <h4 className=" text-black font-bold ">Name of farmer</h4>
                <span>Farmer</span>
                <div className=" flex items-center text-[11px] gap-2 pt-2">
                  <div className=" flex items-center gap-2">
                    <FaLocationDot />
                    <span>Mumbai</span>
                  </div>
                  <div className=" flex items-center gap-2">
                    {" "}
                    <FaBoxOpen />
                    <span>Delivery in 2 days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" border-2 rounded-md p-3">hi</div>
          <div className=" border-2 rounded-md p-3">hi</div>
          <div className=" border-2 rounded-md p-3">hi</div>
        </div>
      </div>
    </div>
  );
};

export default WarehouseRestockPage;
