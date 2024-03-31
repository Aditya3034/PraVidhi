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
                src="https://s3-alpha-sig.figma.com/img/10a9/2d93/881365ffc512ef1e305c57e227ed10eb?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MT4cXjO5KdqArZNJC3DqKHm~v08nsjlE9xGtDO8~2-fJUhKbHwYjEuEbYzCDDM0G637IGMvR09FtbTV0sejhkR-aeCoQU~ETWbeU-yhn8PmkY~gkOGoGFN7YVrqNJwZ~qjzDL4sqIdJscqKuaPjK5Cf4jd1QrcMfHacMM8pcBEAqetRLLYwdlilV4LgWrWkElCj6c1mYxmx04rJab-ts5k30J2r~JcW5gzz6isdrZGjgmq1hQZkudHq3ZpXrp4vvzowrbVgkB-z6Cg4LJ-C~mzlbXeIHcqfpwn3M~M5UF1a1Dr2gM86pd5YAEt9cqPnZiIlwL-THVgKqKaluK1NCYg__"
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
                src="https://s3-alpha-sig.figma.com/img/e073/1d0d/dc010f63a2f55db2c461a32ce7a24c8b?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GuZcUTg5BCOUSY~I2nnt4tKygpLxz9HOkhPlO5q9PvkOiOnd32KiikKaFk5GWumxycNtzsfK5xRweCm0hze~WTLIFdaGyfWBX75dPGfEDH-HcChlQgokiV~mOZvYt1xoeloHLmCKGvFXcwfvT0EL5GFCe~H9V9hssiM5g6zPdUbJzLY8emU6HDp2GOb25ef-PVUhn0-5qvekf2C-XmTFWI51lUEhqKA3YVQ3AN~ITqIbaFC7IpBrLHsjYdwJBNsCRWOemU~Y71u4PSZgA4wXVKQI-rTZjJqk6MqnpZL2aBIFp4HL9ZdVMReby0ZFIKJYnrl3s21NfZifaMKPJRDbcA__"
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
                src="https://s3-alpha-sig.figma.com/img/8ae8/e833/b12dfb21ae1a9419c209b775ea5f2818?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EAm84y6k-odJtc0cFUoPp~QVa-w-S20p6-2jHshF8~AZMTDELLHhvKy6jph4oZY2wEQHx3eI6eo~o6FgTNMHK~ZQQUFnhPq95Lg2Ol7b930f6bKmH6AjWGJFn2KK5HbGGdb8c1r3iBqmEvKM78nxOktNnsR-whI8d1URkGyo3uqZFeBjjlacshk7~p2bOlYdCa1GLs6ahg4B~XlLnqTgXYljZWxZKShRwEgLysGkUgoGRbaLqbB60oXNTI7E4dOkoAHYIora~nog3sf7DuvN5E8j04D0u6vrwo1iMfR6cMhHYyqkHev0Yh-vX2l67V6-W57KVg7E9QNmpWu7Y3PBOA__"
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
