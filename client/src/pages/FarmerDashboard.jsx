import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const FarmerDashboard = () => {
  const [fomrData, setFormData] = useState({});
  const [cropInputCount, setCropInputCount] = useState(1);
  const [crops, setCrops] = useState({});

  const addMoreCrops = () => {
    setCropInputCount(cropInputCount + 1);
  };

  // const handleAddCrop = (cropName, cropQuantity) => {
  //   setCrops((prevCrops) => ({ ...prevCrops, [cropName]: cropQuantity }));
  //   console.log(crops);
  // };

  const handleCropChange = (index, isName, value) => {
    setCrops((prevCrops) => {
      const updatedCrops = { ...prevCrops };
      const key = updatedCrops[`crop${index}`] ?? { name: "", quantity: 0 };
      if (isName) {
        key.name = value;
      } else {
        key.quantity = Number(value);
      }
      updatedCrops[`crop${index}`] = key;
      return updatedCrops;
    });
    // console.log(crops);
  };

  useEffect(() => {
    const transformedCrops = Object.values(crops).reduce((acc, crop) => {
      if (crop.name) acc[crop.name] = crop.quantity;
      return acc;
    }, {});

    setFormData((prevFormData) => ({
      ...prevFormData,
      crops: transformedCrops,
    }));
    console.log(fomrData);
  }, [crops]);

  const handleChange = (e) => {
    setFormData({
      ...fomrData,
      [e.target.id]: e.target.value,
    });
  };

  const { currentUser, loading, error } = useSelector((state) => state.user);
  console.log(currentUser.username);



  const handelSubmit = async (e)=>{
    console.log("INSUBMIT");
    e.preventDefault();
    
    try {
      const res = await fetch(`/api/farmer/${currentUser._id}/cropinfo`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fomrData)
      })

      const data = await res.json();
    } catch (error) {
      console.log(error);
    } 

  };

  return (
    <div>
      <h1 className=" text-slate-700 font-bold text-3xl lg:text-6xl">
        {" "}
        Welcome Back {currentUser.username}
      </h1>

      <form onSubmit={handelSubmit}>
        <h2 className="text-slate-700 font-bold text-xl lg:text-4xl">
          Tell us what crops you have
        </h2>

        <div className=" flex gap-8">
          <div>
            {[...Array(cropInputCount)].map((_, index) => (
              <div key={index}>
                <input
                  type="text"
                  placeholder="Crop Name"
                  className="border p-3 rounded-lg"
                  onChange={(e) =>
                    handleCropChange(index, true, e.target.value)
                  }
                />
                <input
                  type="number"
                  placeholder="Crop Quantity"
                  className="border p-3 rounded-lg"
                  onChange={(e) =>
                    handleCropChange(index, false, e.target.value)
                  }
                />
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={addMoreCrops}
            className="p-2 bg-blue-500 text-white rounded-lg mt-4 h-12 align-bottom"
          >
            Add More Crops
          </button>
        </div>
        <button
          type="submit"
        
          className="p-3 bg-blue-900 text-white rounded-lg mt-4 w-full max-w-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FarmerDashboard;
