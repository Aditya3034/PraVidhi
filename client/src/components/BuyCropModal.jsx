import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { IoCloseSharp } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import { MdOutlineSearch } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaBoxOpen } from "react-icons/fa6";

const BuyCropModal = ({ isModalOpen, toggleModal, selectedCrop }) => {
  console.log(selectedCrop);

  const { currentUser } = useSelector((state) => state.user);

  const [buyDetails, setBuyDetails] = useState({
    cropName: "",
    cropType: "",
    quantityAvailable: 0,
    location: "",
    pricePerKg: 0,
  });
  const [quantityRequired, setQuantityRequired] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    if (selectedCrop) {
      setBuyDetails({
        cropSaleListing: selectedCrop._id || "",
        buyer: currentUser._id  || "",
        seller: selectedCrop.farmer._id  || "",
        cropName: selectedCrop.cropName || "",
        cropType: selectedCrop.cropType || "",
        quantityAvailable: selectedCrop.quantity || "",
        location: selectedCrop.location || "",
        pricePerKg: selectedCrop.pricePerKg || "", // Assuming this is part of selectedCrop
      });
    }
  }, [selectedCrop]);

  useEffect(() => {
    const cost = quantityRequired * buyDetails.pricePerKg;
    setTotalCost(cost);
  }, [quantityRequired, buyDetails.pricePerKg]);

  console.log(buyDetails);

  const handleChange = (e) => {
    setBuyDetails({ ...buyDetails, [e.target.name]: e.target.value });
  };

  const handleQuantityChange = (e) => {
    setQuantityRequired(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validation: Check if entered quantity exceeds available quantity
    if (quantityRequired > buyDetails.quantityAvailable) {
      alert("Entered quantity should be less than available quantity.");
      return; // Prevent the form submission
    }

    // Assuming buyDetails includes all necessary info plus the quantityRequired and totalCost
    const buyRequestDetails = {
      ...buyDetails,
      quantityRequired :Number(quantityRequired),
      totalCost: Number(totalCost),
    };
    console.log(buyRequestDetails);
    try {
      const res = await fetch(`/api/transaction/${currentUser._id}/buy-request`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'Authorization': `Bearer ${token}`, 
        },
        body: JSON.stringify(buyRequestDetails),
      });

      if (!res.ok) {
        throw new Error("Failed to create buy request.");
      }

      const result = await res.json();
      console.log(result);
      toggleModal(); // Close the modal after successful submission
    } catch (error) {
      console.error(error.message);
    }
  };

  if (!isModalOpen) return null;

  return (
    <div className="fixed z-50 inset-0 font-Poppins bg-black bg-opacity-50 flex justify-center items-center ">
      <div className="relative bg-white p-10 h-auto lg:w-[25dvw] rounded-lg">
        <button onClick={toggleModal} className="absolute top-2 right-2">
          <IoCloseSharp className="text-2xl" />
        </button>
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-lg font-bold">Buy Crop</h2>
          <div>
            <div className="relative border-2 rounded-md p-3">
              <div className="absolute right-0 top-0 rounded-bl-md rounded-tr-md h-8 w-8 bg-[#00FFA34D]"></div>
              <div className="flex gap-6">
                {/* <img
                  src={buyDetails.imageUrl}
                  alt=""
                  className="h-16 w-16 rounded-full"
                /> */}
                <div className="text-xs h-full flex flex-col text-[#9A9A9A]">
                  {/* <h4 className="text-black font-bold">
                    {buyDetails}
                  </h4>
                  <span>{buyDetails}</span> */}
                  <div className="flex items-center text-[11px] gap-2 pt-2">
                    <div className="flex items-center gap-1">
                      <FaLocationDot className="text-[10px]" />
                      <span>{buyDetails.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaBoxOpen className="text-[10px]" />
                      <span>Delivery in {buyDetails.availableInDays} days</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col gap-1 pt-6 text-[14px] text-[#9A9A9A]">
                <span> Crop Name : {buyDetails.cropName}</span>
                <span> Crop Type: {buyDetails.cropType}</span>
                <span>
                  {" "}
                  Quantity Available: {buyDetails.quantityAvailable} Kg
                </span>
                <span> Price per kg: {buyDetails.pricePerKg}</span>

                <div className=" py-2">
                  Quantity Required :{" "}
                  <input
                    type="number"
                    name="quantityRequired"
                    value={quantityRequired}
                    onChange={handleQuantityChange}
                    className="block w-1/2 rounded-md border-0 px-4 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="py-1">Total Cost: {totalCost}</div>
                <button
                  type="submit"
                  className="w-full mt-5 rounded-md text-white bg-blue-600 py-2"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BuyCropModal;
