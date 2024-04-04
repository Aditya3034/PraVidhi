import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IoCloseSharp } from "react-icons/io5";

const FarmerCropSellModal = ({ isModalOpen, toggleModal, selectedCrop }) => {
  const { currentUser } = useSelector((state) => state.user);

  const [sellDetails, setSellDetails] = useState({
    cropName: "",
    cropType: "",
    quantity: "",
    pricePerKg: "",
    availableInDays: "",
    location: "",
  });

  useEffect(() => {
    if (selectedCrop) {
      setSellDetails({
        cropName: selectedCrop.cropName || "",
        cropType: selectedCrop.cropType || "",
        quantity: selectedCrop.cropQty || "",
        pricePerKg: selectedCrop.pricePerKg || "",
        availableInDays: selectedCrop.availableInDays || "",
        location: selectedCrop.location || "",
      });
    }
  }, [selectedCrop]);

  console.log(sellDetails);

  const handleChange = (e) => {
    setSellDetails({ ...sellDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const totalPrice = calculateTotalPrice(
      sellDetails.quantity,
      sellDetails.pricePerKg
    );

    try {
      const res = await fetch(`/api/farmer/${currentUser._id}/sell-request`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'Authorization': `Bearer ${token}`, // Uncomment and use the correct token variable
        },
        body: JSON.stringify({ ...sellDetails, totalPrice }),
      });

      if (!res.ok) {
        throw new Error("Failed to create sell request.");
      }

      const result = await res.json();
      console.log(result);
      toggleModal(); // Close the modal after successful submission
    } catch (error) {
      console.error(error.message);
    }
  };

  const calculateTotalPrice = (quantity, pricePerKg) => {
    return quantity * pricePerKg;
  };

  if (!isModalOpen) return null;

  return (
    <div className="fixed z-50 inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="relative bg-white p-10 rounded-lg">
        <button onClick={toggleModal} className="absolute top-2 right-2">
          <IoCloseSharp className="text-2xl" />
        </button>
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-lg font-bold">Sell Crop Details</h2>
          <div className=" grid md:grid-cols-2 grid-cols-1 gap-4">
            <div className=" w-full flex">
              <label htmlFor="cropName" className=" w-1/3">Crop Name</label>
              <input
                id="cropName"
                name="cropName"
                type="text"
                className=" rounded-md border-2 border w-2/3"
                value={sellDetails.cropName}
                onChange={handleChange}
                disabled // Assuming the crop name is preselected and cannot be changed
              />
            </div>
            <div className=" w-full flex">
              <label htmlFor="cropType" className=" w-1/3">Crop Type</label>
              <input
                id="cropType"
                name="cropType"
                type="text"
                className=" rounded-md border-2 border w-2/3"
                value={sellDetails.cropType}
                onChange={handleChange}
              />
            </div>
            <div className=" w-full flex">
              <label htmlFor="quantity" className=" w-1/3">Quantity Available (KG)</label>
              <input
                id="quantity"
                name="quantity"
                type="number"
                className=" rounded-md border-2 border w-2/3"

                value={sellDetails.quantity}
                onChange={handleChange}
              />
            </div>
            <div className=" w-full flex">
              <label htmlFor="pricePerKg" className=" w-1/3">Price Per KG</label>
              <input
                id="pricePerKg"
                name="pricePerKg"
                type="number"
                className=" rounded-md border-2 border  w-2/3"

                value={sellDetails.pricePerKg}
                onChange={handleChange}
              />
            </div>
            <div className=" w-full flex">
              <label htmlFor="availableInDays" className=" w-1/3">Available in (Days)</label>
              <input
                id="availableInDays"
                name="availableInDays"
                type="number"
                className=" rounded-md border-2 border  w-2/3"

             value={sellDetails.availableInDays}
                onChange={handleChange}
              />
            </div>
            <div className=" w-full flex">
              <label htmlFor="location" className=" w-1/3">Location</label>
              <input
                id="location"
                name="location"
                type="text"
                className=" rounded-md border-2 border w-2/3"

                value={sellDetails.location}
                onChange={handleChange}
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md"
          >
            Submit Sell Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default FarmerCropSellModal;
