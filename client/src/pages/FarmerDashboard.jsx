import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const FarmerDashboard = () => {
  const [fomrData, setFormData] = useState({});
  const [cropInputCount, setCropInputCount] = useState(1);
  const [crops, setCrops] = useState({});
  console.log(fomrData);

  const addMoreCrops = () => {
    setCropInputCount(cropInputCount + 1);
  };

  

  const handleCropChange = (index, isName, value) => {
    setCrops((prevCrops) => {
      const updatedCrops = { ...prevCrops };
      const crop = updatedCrops[`crop${index}`] ?? {};
      if (isName) {
        crop.cropName = value;
      } else {
        crop.cropQty = Number(value);
      }
      updatedCrops[`crop${index}`] = crop;
      return updatedCrops;
    });
  };

  useEffect(() => {
    // Directly set the crops object in the form data, as it already has the desired structure.
    setFormData((prevFormData) => ({
      ...prevFormData,
      crops: crops,
    }));
  }, [crops]);

  const handleChange = (e) => {
    setFormData({
      ...fomrData,
      [e.target.id]: e.target.value,
    });
  };

  const { currentUser, loading, error } = useSelector((state) => state.user);
  console.log(currentUser._id);



  const handelSubmit = async (e)=>{
    console.log("INSUBMIT");
    e.preventDefault();
    
    const cropsArray = Object.values(crops);

    try {
      const res = await fetch(`/api/farmer/${currentUser._id}/cropinfo`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cropInfo: cropsArray })
      })

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error.message);
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
