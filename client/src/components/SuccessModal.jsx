import React from 'react';

const SuccessModal = ({ isOpen, onClose, cropName }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 flex justify-center items-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative bg-white p-8 rounded-lg shadow-lg">
          <div className="text-center">
            <p className={`text-3xl font-bold ${cropName ? 'text-green-500' : 'text-red-500'}`}>Predictions!</p>
            {cropName ? (
              <p className="text-lg mb-6">You can cultivate <span className="font-semibold">{cropName}</span> based on the conditions provided.</p>
            ) : (
              <p className="text-lg mb-6">Sorry, no crops are predicted for the given conditions.</p>
            )}
            <button onClick={onClose} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Close
            </button>
          </div>
        </div>
      </div>
    );
};

export default SuccessModal;
