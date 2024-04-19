import React, { useEffect, useState } from "react";
import { MdCancel } from "react-icons/md";
import { MdOutlineSearch } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaBoxOpen } from "react-icons/fa6";
import BuyCropModal from "../components/BuyCropModal";

const WarehouseRestockPage = () => {
  const popularCrops = [
    { name: "Rice", id: 1 },
    { name: "Wheat", id: 2 },
    { name: "Cotton", id: 3 },
    { name: "Sugarcane", id: 4 },
    { name: "Pulses", id: 5 },
    { name: "Tea", id: 6 },
    { name: "Soybean", id: 7 },
    { name: "Onion", id: 8 },
    { name: "Tomato", id: 9 },
    { name: "Potato", id: 10 },
  ];

  const [selectedCrop, setSelectedCrop] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);


  const [selectedSearchCropId, setSelectedSearchCropId] = useState(null);
  const [cropSaleListing, setCropSaleListing] = useState([]);
  console.log(cropSaleListing);

  useEffect(() => {
    const fetchAllCropSaleListing = async () => {
      try {
        const res = await fetch("/api/sellCrop/getAllCropSaleListing");
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }

        const data = await res.json();
        console.log(data);
        console.log(data[0].farmer);
        setCropSaleListing(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllCropSaleListing();
  }, []);

  const handleButtonClick = (id) => {
    setSelectedSearchCropId(id);
    console.log(id);
  };

  const toggleModal = (cropData) => {
    setIsModalOpen(!isModalOpen);
    setSelectedCrop(cropData);
    console.log(cropData);
  };


  return (
    <div className=" bg-white font-Grifter  pt-12 min-h-screen sm:pt-24">
      <div className=" relative w-full">
        <div className=" h-56 flex flex-col items-center justify-center bg-gradient-to-r from-[#0F2027] via-[#23414B] to-[#2C5364]">
          <h1 className=" text-white text-[50px]">Fresh from the Fields</h1>
          <h2 className=" text-[#9A9A9A] text-[20px]">
            Source Quality Crops from Farmers and Warehouses
          </h2>
        </div>
        <div className=" w-full flex justify-center items-center">
          <div className=" absolute -bottom-8  h-[70px] bg-white shadow-xl w-[770px] rounded-md">
            <div className=" flex h-full  items-center p-4">
              <div className=" flex items-center w-[80%] h-full font-Poppins">
                <MdOutlineSearch className=" text-xl font-bold text-[#9A9A9A] mx-2" />
                <input
                  type="text"
                  name="search"
                  id="search"
                  className=" border-gray-300 w-full h-16"
                  placeholder="Search for crops..."
                />
              </div>
             <div className="  w-[20%] flex justify-end">
             <MdCancel className=" text-xl font-bold text-[#9A9A9A] mx-2" />
             </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" pt-12 w-full flex flex-col justify-center items-center">
        <h1 className=" text-sm text-[#9A9A9A] font-Poppins">
          Popular searches : Rice, Wheat, Sugarcane, Rajma, Chole, Moong-Dal
        </h1>
        <div className="pt-6 flex gap-4 font-Poppins text-[#9A9A9A] text-sm">
          {popularCrops.map((crop) => (
            <button
              key={crop.id}
              className={`crop-button border-2 w-28 rounded-md p-2 ${
                selectedSearchCropId === crop.id
                  ? "bg-gray-400 text-white"
                  : "bg-transparent"
              }`}
              onClick={() => handleButtonClick(crop.id)}
            >
              {crop.name}
            </button>
          ))}
        </div>
      </div>
      <div className="pt-10  max-w-7xl flex items-center font-Poppins mx-auto">
        <div className="w-full  grid grid-cols-4 gap-4">
          {cropSaleListing.map((item) => (
            <div key={item.id} className="relative border-2 rounded-md p-3">
              <div className="absolute right-0 top-0 rounded-bl-md rounded-tr-md h-8 w-8 bg-[#00FFA34D]"></div>
              <div className="flex gap-6 h-16">
                <img
                  src={item.farmer.avatar}
                  alt=""
                  className="h-16 w-16 rounded-full"
                />
                <div className="text-xs h-full flex flex-col text-[#9A9A9A]">
                  <h4 className="text-black font-bold">
                    {item.farmer.username}
                  </h4>
                  <span>{item.farmer.usertype}</span>
                  <div className="flex items-center text-[11px] gap-2 pt-2">
                    <div className="flex items-center gap-1">
                      <FaLocationDot className="text-[10px]" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaBoxOpen className="text-[10px]" />
                      <span>Delivery in {item.availableInDays} days</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col gap-1 pt-6 text-[14px] text-[#9A9A9A]">
                <span> Crop Name : {item.cropName}</span>
                <span> Crop Type: {item.cropType}</span>
                <span> Quantity Available: {item.quantity} Kg</span>
                <span> Price per kg: {item.pricePerKg}</span>
                <button onClick={() => {
                      toggleModal(item);
                    }}
                    className="w-full mt-5 rounded-md text-white bg-blue-600 py-2">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BuyCropModal
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        selectedCrop={selectedCrop ? selectedCrop : ""}
      />
    </div>
    
  );
};

export default WarehouseRestockPage;
