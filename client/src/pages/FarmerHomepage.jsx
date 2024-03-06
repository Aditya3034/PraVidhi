import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const FarmerHomepage = () => {
  const { currentUser, loading, error } = useSelector((state) => state.user);

  return (
    <div className=" bg-white">
      <div className=" h-[100dvh] font-Grifter pt-48 max-w-7xl  mx-auto items-center  ">
      <div className="  flex-col flex items-center justify-center px-4">
        <h1 className="text-xs sm:text-sm lg:text-[30px] font-normal">
          Sow, Grow, and Flourish: Unleashing the Power of Intelligent Farming
        </h1>

        <div className=" grid grid-cols-4 gap-6 my-24">
          <Link to={`/farmer-dashboard/${currentUser._id}`}>
            <div className=" bg-[#eeeeee] rounded-[20px] flex flex-col items-center justify-center h-56 gap-4 ">
              <div>
                <img
                  src="https://s3-alpha-sig.figma.com/img/9d9d/968e/27e242ac881093fde2e6eb1d278e23d2?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RkwIG2YX2Cxz573CRPhf6uwAckTBxH1HnXDadN0OeSDyacwm1ECuDI~y9hzRLCKGHeT6ZU6r1jQGa6nOIImonvnhjdDM7MMzkdAvl-mOlzH19B3S-81h8OSgCm3TaLP7B9CaUVC~qvRMnrrEE2C3rd8VxDnHu0qq8KGIgDoIXXj7sM5~DMeste2Ln2LQJKQtk7cixxDQDe54WolHlT0pCpRqiBd-pGwzm3CafXdpnhU52cNHpc6quNNyvJkY5IZ~UNxqUeCt3JSFO-r4iqvTyC~erXI0ZYgc0fReCW6M~xaCJ4lufSu1I69PLOuFF~ZSmPuXVV6-28J914dWJ51pvw__"
                  alt=""
                  className=" h-28"
                />
              </div>
              <span className=" w-2/3 text-center">Dashboard</span>
            </div>
          </Link>
          <Link  to="/crop-predictions" className=" bg-[#eeeeee] rounded-[20px] flex flex-col items-center justify-center h-56 gap-4">
            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/00b5/4b71/b1388457192c526ac11c4f7e9dae0da1?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OzpvdwY3gbIoK5W23TybP~jNIFrJQXMdsSUk-r4TM2-G63xcixa9qWzd3~hRpDYumba~36aLypV6N7U34ROdLwWxhIhd~dBOkbgBoTkLHWqFqS-aLPRU9HEx9tr5u~7IMJ~hprgF6Uk0SNn4-JxqAF3xVG5S84VDBiCHg1fZz-VxKTGJLiGtj27aKmSXG84euHsfOiTo0g9rBl3g707aItUYzD4EN2JGqnHSC2WSsBfJez9Xc-M7goHHKSyEAO-5qmUweeje0Xf2KkGhdsfvkqQAgnTsXsat4htrAnT8wzDYw1GJvxTtFmW5leP7uhgquchHrXyBO-Cm2CdhGjv4ug__"
                alt=""
                className=" h-28"
              />
            </div>
            <span className=" w-2/3 text-center">Crop Recommendation</span>
          </Link>
          <Link to="/farmer-inventory" className=" bg-[#eeeeee] rounded-[20px] flex flex-col items-center justify-center h-56 gap-4">
            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/5da2/06fa/ae0aa9d6a7a8a6bc40cf8d011ffbea77?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R-a8Vx9iNQxNWx~gXVQG0hLwR1vaxYP4ls15UWfNftLVBzOVPSSUCri9RxzaiFZd9iiV-aOyBo3ODJtS5yxn9XgaCQWar3TYiXnjAuzR7xByeQqJgGVJv81DWw2XgqLeQOQTZRFuu0~oQsPitHXe8H5Xs-MTPeMuxLyVydAEtZQORLbmak2Pu8~vwiq8vN4zEPOq1ONeRVxVoENYy9aPtDaoqcj6u4-COABms02jNuIYe69xnbSlzL8IMQTGJCkUBU4wRtR~ah0NwK6CPJCjRa3wrzK6JGT3KM33BABqADauBpWOiLH8Nk9O8bMs0ofdMBINhS8EfKhCH6BBtvRpjg__"
                alt=""
                className=" h-28"
              />
            </div>
            <span className=" w-2/3 text-center">Track & Manage Inventory</span>
          </Link>

          <div className=" bg-[#eeeeee] rounded-[20px] flex flex-col items-center justify-center h-56 gap-4">
            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/9e4c/3761/ff4e059070853fcdd107c79a6711b206?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WHEcCKqLcnVMRIR2NGj69SfUZRcjC1lS82U6737Im7vJTWwb1-3URyToDfSzYPQmMb-NJJNHrj17EySV7Pui2QDUjAbCXJYZK4DtQJsDdHaQiaBZFIOGrrV3oSdkiIc8tzVj9FmkXAbuYl4mXUiVASfzBXBWydPp7W3Dk1LUjN47VwTanOpFTD0Ph8tRmYFEssy21ipa3UJyO1Q0ryx1TU7AkH4N0bLEgeGUvDF0doygHioFS2ZxA~RHcorei8YNZfIQV6W7aqtSwfRizUCG6VFfICeDpR5OQsfGxp2rz6u90QIOQzVLBlMFe7ss1A78u2cNLcggNL-4NfSGjPhbBw__"
                alt=""
                className=" h-28"
              />
            </div>
            <span className=" w-2/3 text-center">
              Connect Directly with Stakeholders
            </span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FarmerHomepage;
