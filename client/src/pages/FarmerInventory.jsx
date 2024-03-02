import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const FarmerInventory = () => {

    const { currentUser, loading, error } = useSelector((state) => state.user);

    const navigate = useNavigate();

    // Initialize with predefined crops
    const initialCrops = [
        { cropName: 'Chole', cropQty: '' },
        { cropName: 'Rajma', cropQty: '' },
        // { cropName: 'CoffeeBeans', cropQty: '' },
        // { cropName: 'Maize', cropQty: '' },
        // { cropName: 'Lentils', cropQty: '' },
        // { cropName: 'MoongDal', cropQty: '' },
        // { cropName: 'MothBeans', cropQty: '' },
        // { cropName: 'PigeonPeas', cropQty: '' },
        // // Add any additional predefined crops here
    ];

    const [cropData, setCropData] = useState(initialCrops);

    // Handle change in form inputs for each crop data object
    const handleCropChange = (index, event) => {
        const values = [...cropData];
        if (event.target.name === "cropName") {
            values[index].cropName = event.target.value;
        } else {
            values[index].cropQty = event.target.value;
        }
        setCropData(values);
    };

    // Handle adding new crop input fields for custom crops
    const handleAddFields = () => {
        setCropData([...cropData, { cropName: '', cropQty: '' }]);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(cropData);

        try {
            
            const res = await fetch(`/api/farmer/${currentUser._id}/cropinfo`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                //   'Authorization': `Bearer ${token}`, // Include the token in the request
                },
                body: JSON.stringify({ cropInfo: cropData }),
            });
             const data = await res.json();

             if (data){
                navigate("/sell-crops")
                console.log(data);
             }

        } catch (error) {
            console.log(error.message);
        }

        // Process form data here
    };

    return (
        <div className="bg-white">
            <div className=" h-[100dvh]  font-Grifter pt-48 max-w-7xl mx-auto items-center">
                <div className="flex-col flex items-center justify-center px-4">
                    <h1 className="text-xs sm:text-sm lg:text-[50px] font-normal">
                        Inventory
                    </h1>
                    <div className="text-xs sm:text-sm lg:text-[30px] font-normal pt-8">
                        <h2>Boost your Production with our Prediction</h2>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4 mt-8">
                        {cropData.map((crop, index) => (
                            <div key={index} className="grid grid-cols-3 gap-6">
                                <input
                                    type="text"
                                    readOnly={index < initialCrops.length} // Make predefined crops read-only
                                    name="cropName"
                                    placeholder="Crop Name"
                                    value={crop.cropName}
                                    onChange={event => handleCropChange(index, event)}
                                    className={`border border-gray-300 p-2 rounded-lg ${index < initialCrops.length ? 'bg-gray-100' : ''}`}
                                />
                                <input
                                    type="number"
                                    name="cropQty"
                                    placeholder="Quantity (kg)"
                                    value={crop.cropQty}
                                    onChange={event => handleCropChange(index, event)}
                                    className="border border-gray-300 col-span-2 p-2 rounded-lg"
                                    step="any"
                                />
                            </div>
                        ))}
                        <div className="flex items-center justify-center w-full">
                            <button
                                type="button"
                                onClick={handleAddFields}
                                className="bg-green-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-green-700">
                                Add different Crop
                            </button>
                        </div>
                        <div className="flex items-center justify-center w-full">
                            <button
                                type="submit"
                                className="bg-blue-500 w-1/3 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-700">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FarmerInventory;
