import React, { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";


const WarehouseDetailsForm = ({ isOpen, onClose, onSubmit,  data }) => {

  console.log(isOpen, onClose,  data);

  const [warehouseDetails, setWarehouseDetails] = useState({
    warehouseTotalStorage: "",
    warehouseName: "",
    cropDetails: [{ cropName: "", cropQuantity: "" }],
  });
  
  
    useEffect(() => {
      if (data) {
        setWarehouseDetails(data);
      }
    }, [data]); 


  if (!isOpen) return null;


  const handleChange = (e, index) => {
    if (e.target.name.startsWith("crop")) {
      const newCropDetails = [...warehouseDetails.cropDetails];
      if (e.target.name === `cropName${index}`) {
        newCropDetails[index].cropName = e.target.value;
      } else {
        newCropDetails[index].cropQuantity = e.target.value;
      }
      setWarehouseDetails({ ...warehouseDetails, cropDetails: newCropDetails });
    } else {
      setWarehouseDetails({
        ...warehouseDetails,
        [e.target.name]: e.target.value,
      });
    }
  };

  const addCropDetail = () => {
    setWarehouseDetails({
      ...warehouseDetails,
      cropDetails: [
        ...warehouseDetails.cropDetails,
        { cropName: "", cropQuantity: "" },
      ],
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  
  //   try {
  //     const response = await fetch(`/api/warehouse/warehouseDetails/${currentUser._id}`, { 
  //       method: 'PUT',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         // Include authorization headers if needed, for example:
  //         // 'Authorization': `Bearer ${token}`,
  //       },
  //       body: JSON.stringify(warehouseDetails),
  //     });
  
  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log(data);
        
  //       onClose(); 
  //     } else {
  //       throw new Error('Failed to save warehouse details');
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //     // Handle errors, for example, by showing an error message to the user
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(warehouseDetails); // Call the passed onSubmit function with the form data
    onClose(); // Optionally close the modal here or let the parent handle it based on submission success
  };
  

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="relative bg-white p-10 w-3/4 rounded-lg flex flex-col items-center">
        <button onClick={onClose} className="absolute right-3 top-2">
          <IoCloseSharp className="text-2xl" />
        </button>
        <form onSubmit={handleSubmit} className=" w-5/6 ">
          <div className=" flex justify-between gap-8">
            <div className="flex flex-col space-y-2 w-1/2">
              <label>Warehouse Name</label>
              <input
                type="text"
                name="warehouseName"
                placeholder="Name of Warehouse"
                value={warehouseDetails.warehouseName}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col space-y-2 w-1/2">
              <label>Total Storage</label>
              <input
                type="number"
                name="warehouseTotalStorage"
                placeholder="Storage Quantity (KG)"
                value={warehouseDetails.warehouseTotalStorage}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded-lg"
              />
            </div>
          </div>
          <div className=" w-full pt-8">
            <h3 className="text-lg  "> Tell us more about what Crop you have :</h3>
            {warehouseDetails.cropDetails.map((crop, index) => (
              <div key={index} className=" flex gap-4 items-center pb-4">
                <input
                  type="text"
                  name={`cropName${index}`}
                  placeholder="Crop Name"
                  value={crop.cropName}
                  onChange={(e) => handleChange(e, index)}
                  className="border border-gray-300 p-2 rounded-lg w-1/2"
                /> :
                <input
                  type="number"
                  name={`cropQuantity${index}`}
                  placeholder="Crop Quantity"
                  value={crop.cropQuantity}
                  onChange={(e) => handleChange(e, index)}
                  className="border border-gray-300 p-2 rounded-lg w-1/2"
                />
              </div>
            ))}
          </div>
        <div className="flex justify-center w-full">
          <button
            type="button"
            onClick={addCropDetail}
            className="mt-4 py-2 px-4  w-1/3 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Add More Crops
          </button>
        </div>
        <div className="flex justify-center w-full">
          <button
            type="submit"
            className="mt-4 py-2 px-4  w-1/3 bg-green-500 text-white rounded hover:bg-green-700"
          >
            Submit
          </button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default WarehouseDetailsForm;
