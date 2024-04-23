import React, { useState } from "react";
import { Link } from "react-router-dom";

const CropPridiction = () => {
  // Define initial form state
  const initialFormState = {
    N: "",
    P: "",
    K: "",
    temperature: "",
    humidity: "",
    ph: "",
    rainfall: "",
  };

  // State to hold form values
  const [formValues, setFormValues] = useState(initialFormState);

  // Handle change in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formValues);

    try {
      const res = await fetch("/api/farmer/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  // Define the fields for the form dynamically
  const fields = [
    { name: "N", localname: "नायट्रोजन", placeholder: "Nitrogen (N)" },
    { name: "P", localname: "फॉस्फरस", placeholder: "Phosphorus (P)" },
    { name: "K", localname: "पोटॅशियम", placeholder: "Potassium (K)" },
    {
      name: "temperature",
      localname: "तापमान",
      placeholder: "Temperature (°C)",
    },
    { name: "humidity", localname: "आर्द्रता", placeholder: "Humidity (g/kg)" },
    { name: "ph", localname: "ph पातळी", placeholder: "pH Level" },
    {
      name: "rainfall",
      localname: "पावसाचे प्रमाण",
      placeholder: "Rainfall (mm)",
    },
  ];
  return (
    <div className=" bg-white">
      <div className=" h-[100dvh] font-Grifter pt-48 max-w-7xl  mx-auto items-center  ">
        <div className="  flex-col flex items-center justify-center px-4">
          <h1 className="text-xs sm:text-sm lg:text-[50px] font-normal">
            Crop Recommendation
          </h1>
          <div className="text-xs sm:text-sm lg:text-[30px] font-normal py-8">
            <h2>Boost your Production with our Prediction</h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 font-Poppins font-bold"
          >
            <div className=" grid grid-cols-4 gap-6 mt-24">
              {fields.map((field, index) => (
                <div key={index} className="flex flex-col">
                  <label htmlFor={field.name} className="mb-2 capitalize">
                    {field.name} ({field.localname})
                  </label>
                  <input
                    type="number"
                    name={field.name}
                    id={field.name}
                    placeholder={field.placeholder}
                    value={formValues[field.name]}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded-lg"
                    step="any"
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center pt-4 justify-center w-full">
              <button
                type="submit"
                className="bg-blue-500 w-1/3 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CropPridiction;
