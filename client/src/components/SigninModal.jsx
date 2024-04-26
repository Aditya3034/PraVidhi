import React from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom'; 
import Farmer from '../assets/farmer.png';
import WareHouse from '../assets/warehouse.png';
import Retailor from "../assets/Ret.png"

const SigninModal = ({ isOpen, onClose, children }) => {
    const toggleModal = () => {
        onClose();
    };

    if (!isOpen) return null;

    return (
      <div className="fixed inset-0  bg-black bg-opacity-50 flex justify-center items-center">
        <div className=" relative bg-white p-10 w-3/4 rounded-lg flex flex-col items-center">
          <button><IoCloseSharp onClick={toggleModal} className=" absolute right-3 top-2 text-2xl" /></button>
          <p className=" text-[40px]">
            Connect, Sell, and Streamline with Us Today!"
          </p>

          <div className=" grid grid-cols-3 gap-6 w-5/6">
            <div className=" flex flex-col justify-center items-center text-[14px]  rounded-lg">
              <img
                src={Farmer}
                alt=""
                className=" h-36"
              />
              <div className=" flex flex-col py-4 justify-center items-center ">
                <span>Farmer</span>
                <span className="text-[12px] text-center ">
                  Ready to grow your farm with precision? "Connect, Sell,
                  Thrive”
                </span>
              </div>
              <Link to="sign-up" onClick={toggleModal}
                className="bg-[#3770FF]  text-white p-2  px-8 rounded-full"
                
              >
                Join Now
              </Link>
            </div>
            <div className=" flex flex-col justify-center items-center text-[14px]  rounded-lg">
              <img
                src={WareHouse}
                alt=""
                className=" h-36"
              />
              <div className=" flex flex-col py-4 justify-center items-center ">
                <span>Warehouse</span>
                <span className=" text-[12px] text-center ">
                  "Efficient, Transparent, and Connected”
                </span>
              </div>
              <Link to="warehose-signUp" onClick={toggleModal}
                className="bg-[#3770FF]  text-white p-2 px-8 text-[14px]   rounded-full"
                
              >
                Join Now
              </Link>
            </div>

            <div className=" flex flex-col justify-center items-center  rounded-lg">
              <img
                src={Retailor}
                alt=""
                className=" h-36"
              />
              <div className=" flex flex-col py-4 justify-center items-center ">
                <span>Retailer</span>
                <span className=" text-[12px] text-center ">
                  "Streamline Your Food Distribution"
                </span>
              </div>
              <Link to="retailor-signUp" onClick={toggleModal}
                className="bg-[#3770FF]  text-white p-2 px-8 text-[14px]   rounded-full"
                
              >
                Join Now
              </Link>
            </div>
          </div>
          {/* <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded" onClick={onClose}>Close</button> */}
        </div>
      </div>
    );
  };

  export default SigninModal;
