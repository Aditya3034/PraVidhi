import React from 'react';
import { IoCloseSharp } from 'react-icons/io5';


const SuccessModal = ({ isOpen, onClose, cropName }) => {
    if (!isOpen) return null;

    return (
      
      <div className="fixed inset-0 z-50 font-Poppins bg-black bg-opacity-50 flex justify-center items-center">
        <div className=" relative bg-white p-10 w-2/4 rounded-lg flex flex-col items-center">
          <button><IoCloseSharp onClick={onClose} className=" absolute right-3 top-2 text-2xl" /></button>
          {/* <p className=" text-[40px]">
            Connect, Sell, and Streamline with Us Today!"
          </p> */}
          <p className={`text-3xl font-bold ${cropName ? 'text-green-500' : 'text-red-500'}`}>Predictions!</p>

          <div className=" py-4">
          <div className="text-center">
            {/* <p className={`text-3xl font-bold ${cropName ? 'text-green-500' : 'text-red-500'}`}>Predictions!</p> */}
            {cropName ? (
              <p className="text-lg mb-6">You can cultivate <span className="font-black text-2xl">{cropName}</span> based on the conditions provided.</p>
            ) : (
              <p className="text-lg mb-6">Sorry, no crops are predicted for the given conditions.</p>
            )}
     
          </div>
        </div>
          {/* <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded" onClick={onClose}>Close</button> */}
        </div>
      </div>
      
    );
};

export default SuccessModal;
// {/* <div className="fixed inset-0 z-50 flex justify-center items-center">
        
// <button><IoCloseSharp onClick={onClose} className=" absolute right-3 top-2 text-2xl" /></button>
        
// <div className="relative bg-white p-8 rounded-lg shadow-lg">
//   <div className="text-center">
//     <p className={`text-3xl font-bold ${cropName ? 'text-green-500' : 'text-red-500'}`}>Predictions!</p>
//     {cropName ? (
//       <p className="text-lg mb-6">You can cultivate <span className="font-semibold">{cropName}</span> based on the conditions provided.</p>
//     ) : (
//       <p className="text-lg mb-6">Sorry, no crops are predicted for the given conditions.</p>
//     )}
//     <button onClick={onClose} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
//       Close
//     </button>
//   </div>
// </div>
// </div> */}