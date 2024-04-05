import React from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom'; 

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
                src="https://s3-alpha-sig.figma.com/img/10a9/2d93/881365ffc512ef1e305c57e227ed10eb?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f7Q8~k6L3aOqyjWms9zx3vzjrVOi1QPPn-ZiJUBWpRJYdVLJ-cANsTBMpmEU7rLHAptXPMizc9Yu3qHiNCJCTmzbkOC37p5fzt2kuWp6BqFk4X389yTweydbplHkedOMIsfVSrkVKj~z45g3k27zyn8X6PZUnWKUsjR4t935yf-wZaHaCZSTMbMGDqCUQbPjcj4qzUNmtZGlXioqtH48e7xeckDOQrZveD-sBFq0oF4V40rz2CkTHuF3EUTFhVHqrrxQ4snmqyjV4tX5W3jOXTyfzzX9BUPGpp3yILKPhcQi5FHKK4kaLScnxJf9-stNwum2VvOHNlDu8-szUv0zTg__"
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
              <Link to="sign-up"
                className="bg-[#3770FF]  text-white p-2  px-8 rounded-full"
                
              >
                Join Now
              </Link>
            </div>
            <div className=" flex flex-col justify-center items-center text-[14px]  rounded-lg">
              <img
                src="https://s3-alpha-sig.figma.com/img/e073/1d0d/dc010f63a2f55db2c461a32ce7a24c8b?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mSew~~WbTcFaqkBQoTohG9dD9C8-D6Ftuf~WPCG3wmYpigJx4TfgsU3hQt~H4pmsJltQxOcYKO4-z~esp4O0jrR1rmQgJ1QtDCs1qi6wDUJDn8P3r07ZEEirUGtRo51tjndYxYOBqZGY0fZVW2G-GXCvOgopcKUJ-mrGkdE1Vge3FCMXcQ-uQHPQdtZVLbNMYFsLFqZMLnyoYLu654kbbrGVhncmJ8-QeXTsN2KYDrLF6-JUvsx6S5y~nJveRbO5wHQvd3Xz~jfPxgZbTlUNliYIk7EeT1Kknzu3qlHy3k0iGfeojwABy2TYfboZuZ28bUKxKf4GDPFZOMEfgeiz2w__"
                alt=""
                className=" h-36"
              />
              <div className=" flex flex-col py-4 justify-center items-center ">
                <span>Warehouse</span>
                <span className=" text-[12px] text-center ">
                  "Efficient, Transparent, and Connected”
                </span>
              </div>
              <Link to="warehose-signUp"
                className="bg-[#3770FF]  text-white p-2 px-8 text-[14px]   rounded-full"
                
              >
                Join Now
              </Link>
            </div>

            <div className=" flex flex-col justify-center items-center  rounded-lg">
              <img
                src="https://s3-alpha-sig.figma.com/img/8ae8/e833/b12dfb21ae1a9419c209b775ea5f2818?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TkH~ekXFqPTLQ5cPwnekUQllq7j1RuCvrKzhGVyU8crBZv4Vryg0SM0iYgAf0edL3KGJQLcfjtMpT7pbyeHymMSklRN4WbRN0Wex84b~-s9sax0nLeZ2fW3QVvwtJAi~dDHpGgfl5cGdaClffgDS8vHwL8EbCL5z40D4l4ODMNntBtbARiXhGfABUJDc3htm36cksU3SJZ2ajumd8pP5l-vHUQWIDJ3NfM50yJ-qEAsS66GsnrpH6qqSsseedRQlEbbuN7t86o5Z0D-3MRw-TeECddMBAqTE5ZjuqcDiBmYF6dmEciEOHfecMF6P7RYJtLt18YuzeQfUu88DKeqeMA__"
                alt=""
                className=" h-36"
              />
              <div className=" flex flex-col py-4 justify-center items-center ">
                <span>Retailer</span>
                <span className=" text-[12px] text-center ">
                  "Streamline Your Food Distribution"
                </span>
              </div>
              <Link to="retailor-signUp"
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
