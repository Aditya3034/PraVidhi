import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import ListingItem from "../components/ListingItem";
import { BiSolidDashboard } from "react-icons/bi";
import PranvidhiIphoneImg from "../assets/iphonePravidhiimg.png";
import { FaChevronDown } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import SigninModal from "../components/SigninModal";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const FAQ = [
    {
      id: 1,
      question: "How do I sign up for an account?",
      answer:
        "Details about your field like chemical contains, rainfall in your area such",
    },
    {
      id: 2,
      question: "What information do I need to input about my farm?",
      answer:
        "Details about your field like chemical contains, rainfall in your area such",
    },
    {
      id: 3,
      question:
        "Can I sell my products directly to retailers on this platform?",
      answer:
        "Details about your field like chemical contains, rainfall in your area such",
    },
    {
      id: 4,
      question: "How does the crop recommendation system work?",
      answer:
        "Details about your field like chemical contains, rainfall in your area such",
    },
    {
      id: 5,
      question: "How can I track my inventory in real-time?",
      answer:
        "Details about your field like chemical contains, rainfall in your area such",
    },
    {
      id: 6,
      question: "Can I use this platform on my mobile device?",
      answer:
        "Details about your field like chemical contains, rainfall in your area such",
    },
  ];

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

 

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className=" bg-white">
      <div className=" font-Grifter  pt-48   max-w-7xl  mx-auto items-center  ">
      {/* top */}
      <div className="flex h-[100dvh] flex-col items-center px-4 sm:h-[60vh] sm:gap-24 gap-12">
        <h1 className="font-bold text-3xl lg:text-[100px]">
          From Field to Future
        </h1>
        <div className="text-xs sm:text-sm lg:text-[30px] font-normal">
          <h2>Smart Solutions for Modern Farming Challenges</h2>
        </div>
        <button
          className="bg-[#3770FF] w-48 sm:w-[279px] text-white p-2 sm:p-4  rounded-full"
          onClick={toggleModal}
        >
          Join Now
        </button>

        <SigninModal isOpen={isModalOpen} onClose={toggleModal} />
      </div>

      <div className=" h-[100dvh] flex-col flex items-start justify-center px-4">
        <h1 className=" lg:text-[45px]">Your Smart Farming Partner</h1>
        <h3 className=" lg:text-[20px] text-[#9A9A9A]">Beyond the Ordinary</h3>

        <div className=" grid grid-cols-4 gap-6 my-24">
          {/* <Link to="farmer-dashboard"> */}
            <div className=" bg-[#eeeeee] rounded-[20px] flex flex-col items-center justify-center h-56 gap-4 ">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="200"
                  height="200"
                  viewBox="0 0 24 24"
                  className=" h-24"
                >
                  <path
                    fill="currentColor"
                    d="M3 13h8V3H3v10Zm0 8h8v-6H3v6Zm10 0h8V11h-8v10Zm0-18v6h8V3h-8Z"
                  />
                </svg>
              </div>
              <span className=" w-2/3 text-center">Personalized Dashboard</span>
            </div>
          {/* </Link> */}
          <div className=" bg-[#eeeeee] rounded-[20px] flex flex-col items-center justify-center h-56 gap-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="200"
                viewBox="0 0 20 20"
                className=" h-24"
              >
                <path
                  fill="currentColor"
                  d="m13.878.282l.348 1.071a2.205 2.205 0 0 0 1.398 1.397l1.072.348l.021.006a.423.423 0 0 1 0 .798l-1.071.348a2.208 2.208 0 0 0-1.399 1.397l-.348 1.07a.423.423 0 0 1-.798 0l-.349-1.07a2.23 2.23 0 0 0-.532-.867a2.224 2.224 0 0 0-.866-.536l-1.071-.348a.423.423 0 0 1 0-.798l1.071-.348a2.208 2.208 0 0 0 1.377-1.397l.348-1.07a.423.423 0 0 1 .799 0Zm4.905 7.931l-.766-.248a1.577 1.577 0 0 1-.998-.999l-.25-.764a.302.302 0 0 0-.57 0l-.248.764a1.576 1.576 0 0 1-.984.999l-.765.248a.303.303 0 0 0 0 .57l.765.249a1.578 1.578 0 0 1 1 1.002l.248.764a.302.302 0 0 0 .57 0l.249-.764a1.576 1.576 0 0 1 .999-.999l.765-.248a.303.303 0 0 0 0-.57l-.015-.004Zm-3.027 3.557c-.22-.16-.38-.371-.48-.621l-.26-.802a.52.52 0 0 0-.14-.22a.636.636 0 0 0-.22-.14l-.762-.25c-.27-.1-.49-.261-.65-.481A1.31 1.31 0 0 1 13.104 8H9.499a.5.5 0 0 1 0-1h2.636l-.343-1.04c-.09-.23-.18-.36-.29-.47a1.311 1.311 0 0 0-.471-.291l-1.061-.35c-.3-.1-.54-.291-.71-.532A1.419 1.419 0 0 1 9.088 3H5.749A2.75 2.75 0 0 0 3 5.75v8.5A2.75 2.75 0 0 0 5.75 17h8.5A2.75 2.75 0 0 0 17 14.25v-2.329a1.453 1.453 0 0 1-.498.079a1.328 1.328 0 0 1-.746-.23ZM7.5 7.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0ZM6.75 9.5a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5Zm.75 3.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0ZM9 10.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm.5 3.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4Z"
                />
              </svg>
            </div>
            <span className=" w-2/3 text-center">Crop Recommendation</span>
          </div>
          <div className=" bg-[#eeeeee] rounded-[20px] flex flex-col items-center justify-center h-56 gap-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="200"
                viewBox="0 0 24 24"
                className=" h-24"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464Zm14.112 7.016a.75.75 0 0 0-1.152-.96l-1.797 2.156c-.37.445-.599.716-.786.885a.764.764 0 0 1-.163.122l-.011.005l-.008-.004l-.003-.001a.767.767 0 0 1-.164-.122c-.187-.17-.415-.44-.786-.885l-.292-.35c-.329-.395-.625-.75-.901-1c-.301-.272-.68-.514-1.18-.514c-.5 0-.878.242-1.18.514c-.276.25-.572.605-.9 1l-1.83 2.194a.75.75 0 1 0 1.153.96l1.797-2.156c.37-.445.599-.716.786-.885a.764.764 0 0 1 .163-.122l.007-.003l.004-.002l.011.005a.767.767 0 0 1 .164.122c.187.17.415.44.786.885l.292.35c.329.395.625.75.901 1c.301.272.68.514 1.18.514c.5 0 .878-.242 1.18-.514c.276-.25.572-.605.9-1l1.83-2.194Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <span className=" w-2/3 text-center">Track & Manage Inventory</span>
          </div>

          <div className=" bg-[#eeeeee] rounded-[20px] flex flex-col items-center justify-center h-56 gap-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="200"
                viewBox="0 0 24 24"
                className=" h-24"
              >
                <path
                  fill="currentColor"
                  d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7a2.5 2.5 0 0 0 0 5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5S6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V18c0 .55.45 1 1 1h9c.55 0 1-.45 1-1v-1.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V18c0 .55.45 1 1 1h6v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"
                />
              </svg>
            </div>
            <span className=" w-2/3 text-center">
              Connect Directly with Stakeholders
            </span>
          </div>
        </div>
      </div>

      <div className=" h-[100dvh] flex-col flex items-start justify-center px-4">
        <h1 className=" lg:text-[45px]">How it works?</h1>
        <h3 className=" lg:text-[20px] text-[#9A9A9A]">
          Streamlining Your Agriculture Experience
        </h3>

        <div className="  flex justify-center items-center  my-24 ">
          <div className=" w-5/6 grid grid-cols-5 gap-24  ">
            <div className="col-span-2 flex items-center justify-center">
              <img src={PranvidhiIphoneImg} alt="imgs" />
            </div>
            <div className=" col-span-3 flex flex-col justify-between">
              <div>
                <h3 className=" text-[26px]">Sign Up</h3>
                <span className=" font-thin text-[#9A9A9A] text-[16px]">
                  Start by making a free account. Tell us a bit about your farm
                  so we can help you better.
                </span>
              </div>
              <div>
                <h3 className=" text-[26px]">
                  Share Your Farm Info, Get Smart Advice
                </h3>
                <span className=" font-thin text-[#9A9A9A] text-[16px]">
                  Tell us about your soil and farm conditions. We'll use this
                  info to give you smart advice, like what crops to grow and how
                  the market is doing. You can also connect directly with
                  retailers to sell your products.
                </span>
              </div>
              <div>
                <h3 className=" text-[26px]">
                  Improve Your Farming and Sell to Retailers
                </h3>
                <span className=" font-thin text-[#9A9A9A] text-[16px]">
                  Use our advice to farm better. Track your inventory in
                  real-time and see how your farm is doing. You can even sell
                  your products directly to retailers, making the process easier
                  and helping your farm grow.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="  flex-col flex items-start justify-center px-4">
        <h1 className=" lg:text-[45px]">Frequently asked questions?</h1>
        <h3 className=" lg:text-[20px] text-[#9A9A9A]">
          Streamlining Your Agriculture Experience
        </h3>

        <div className=" w-full  flex justify-center items-center  my-24 ">
          <div className=" w-5/6 flex flex-col gap-6 justify-center items-center ">
            {FAQ.map((item, index) => (
              <div key={index} className="w-5/6">
                <button
                  className="p-2  w-full flex justify-between items-center"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3>{item.question}</h3>
                  <FaChevronDown
                    className={`${
                      activeIndex === index ? "transform rotate-180" : ""
                    } transition-transform duration-500`}
                  />
                </button>
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    activeIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <span className="text-[#9A9A9A] flex justify-start p-2">
                    {item.answer}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
