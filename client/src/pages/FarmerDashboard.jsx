import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Chole from "../assets/chole.jpg";
import Rajma from "../assets/rajma.jpg";
import FarmerCropSellModal from "../components/FarmerCropSellModal";

const FarmerDashboard = () => {
  const Imgarray = [
    {
      cropName: "Rice",
      image:
        "https://s3-alpha-sig.figma.com/img/3a10/32fa/eb0bf00d66734d3ba082abaeccaef3e0?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KNjfWMmQgHWHag1dPqeqdeOxlJSRRKAR-glmAK7H7vbTHwTtTJKc~Eo6LkpUr9Nz-JbAjmpMTy7hX0yM~Ou916iPiAV6DYeqhavTqLDwoZwv~jba5zbJ1CEy8BqvrTQ2X2ekdc9IsO8XIx3umcVYyBOz96Is7XDEYeJ0rsP8cKINdmjDwtqt4QhrxX4TpgjCkLoACoS~oddW3A268SYqhtuQAOz-iD4rSPmsfOXlMVMJiPCJVEGQIS1Uiey~XgglBN4wTPjvGg-r5Kfr2MbFaOw5M0kVQGS5qzkK29HE9tbtgHboQtNeix7FwpfYCkxRTnGaMUaqXp-pn4FGcvcWew__",
    },
    { cropName: "Rajma", image: Rajma },
    { cropName: "Chole", image: Chole },
  ];

  const { currentUser, loading, error } = useSelector((state) => state.user);

  const [farmerCrops, setFarmerCrops] = useState([]);
  console.log(farmerCrops);

  // console.log(currentUser.cropInfo);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedCrop, setSelectedCrop] = useState(null);

  const toggleModal = (cropData) => {
    setIsModalOpen(!isModalOpen);
    setSelectedCrop(cropData);
    console.log(cropData);
  };

  useEffect(() => {
    const fetchFarmerData = async () => {
      try {
        if (currentUser && currentUser._id) {
          const res = await fetch(`/api/farmer/getCropInfo/${currentUser._id}`);
          if (!res.ok) {
            throw new Error("Failed to fetch");
          }
          const data = await res.json();
          console.log(data);
          setFarmerCrops(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchFarmerData();
  }, [currentUser]);

  return (
    <div className="bg-white">
      {/* <img src="./assets/chole.jpg" alt="" /> */}
      <div className=" h-[100dvh]  font-Grifter pt-48 max-w-7xl mx-auto items-center">
        <div className="flex-col flex items-center justify-center px-4">
          <h1 className="text-xs sm:text-sm lg:text-[50px] font-normal">
            Sell directly to warehouses or retailers
          </h1>
          <div className="text-xs sm:text-sm lg:text-[30px] font-normal pt-8 text-[#9A9A9A]">
            <h2>Sell at the most favorable price</h2>
          </div>
          <div className=" font-Poppins grid grid-cols-4 gap-6 my-24 w-full">
            {farmerCrops.map((item, index) => (
              <div key={index} className="border rounded-md">
                {/* Find the image from Imgarray that matches the cropName */}
                <div className=" relative">
                  <span className=" font-Grifter absolute uppercase text-white text-5xl top-[35%] left-[22%] ">
                    {item.cropName}
                  </span>
                  <img
                    className=" h-36 w-full rounded-md "
                    src={
                      Imgarray.find((img) => img.cropName === item.cropName)
                        ?.image || "defaultImageURL"
                    }
                    alt={item.cropName}
                  />
                </div>
                <div className=" flex justify-between gap-2 p-4 text-[14px]">
                  <span>Name : {item.cropName}</span>
                  <span>Quantity : {item.cropQty} KG</span>
                </div>
                <div className=" flex justify-center py-4">
                  <button
                    className="w-[80%] p-1 text-white rounded-md bg-[#3166e1]"
                    onClick={() => {
                      toggleModal(item);
                    }}
                    disabled={item.cropQty <= 0} // This will disable the button if cropQty is 0 or less
                  >
                    {item.cropQty > 0 ? "Sell" : "Sold Out"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <FarmerCropSellModal
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        selectedCrop={selectedCrop ? selectedCrop : ""}
      />
    </div>
  );
};

export default FarmerDashboard;
