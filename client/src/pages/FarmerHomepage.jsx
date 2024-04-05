import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const FarmerHomepage = () => {
  const { currentUser, loading, error } = useSelector((state) => state.user);

  return (
    <div className=" bg-white">
      <div className=" h-[100dvh] font-Raleway font-black pt-48 max-w-7xl  mx-auto items-center  ">
      <div className="  flex-col flex items-center justify-center px-4">
        <h1 className="text-xs sm:text-sm lg:text-[30px] font-normal">
          Sow, Grow, and Flourish: Unleashing the Power of Intelligent Farming
        </h1>

        <div className=" grid grid-cols-4 gap-6 my-24">
          <Link to={`/farmer-dashboard/${currentUser._id}`}>
            <div className=" bg-[#eeeeee] rounded-[20px] flex flex-col items-center justify-center h-56 gap-4 ">
              <div>
                <img
                  src="https://s3-alpha-sig.figma.com/img/9d9d/968e/27e242ac881093fde2e6eb1d278e23d2?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JdnyPOgRf9J9ZrDu3rgSTqtSp2LV5vY94hvGwsWlP2U1AajhzDqU-oghbl8l7eoqBDumjvW3xfEALms4Lsyy0jFnIqvLcZ2b4N-Mb6kAjUvcaAKv~5TLdaHfycMGd~JIl47RzR8dVCi5BkB5mGRhYHfSzadS95qp4m1WCVCl8qr52AoeJ6g3Y-7g~wbwn2Z9ogpmrrlKHtwoxkw3WIS4aQNg0Fi4xrX8z1D-EWEYDZXiRpMr~hX~4j2AP25v--XZk2aTYhebP4KRQTiGDLl8qYFY~nzcBuIkbhav4l0gi4IanmoRW7~6A6nNqHk9UZvjz-AHLg1qE40bQ030DjpQtA__"
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
                src="https://s3-alpha-sig.figma.com/img/00b5/4b71/b1388457192c526ac11c4f7e9dae0da1?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aO51CwqfJoYegTyN2DLO1p5tDRCKZptRF67i8asvF9D1nbXMOJlYKS5zFFQiH6V7zLck2ETWhQ1ru9NQBVfBU0D9qUnss5lb7nZj~NaFbOeY-f77E~2D0IIh9F9Gx2U0UTdHOuiYfP4HjTcedLGrnPA74Y3RbYR8kPvUKSj5BZ~MYU0GpcY6RlOQIEVcTFzOuDv4Jegw-kMLL77hS5RYb2S~Lw1EW4lOYtnjSAaVKTdHjJubPc7Qcjpwdy7dZVhEoLy4rWhYvCZwtYhD26vxhAF2ZSPiVMtfeS5ODjriZI~e~1hydUom2cVrWfWg8VunsaqvumRKW1C~GDmfFOz6~g__"
                alt=""
                className=" h-28"
              />
            </div>
            <span className=" w-2/3 text-center">Crop Recommendation</span>
          </Link>
          <Link to="/farmer-inventory" className=" bg-[#eeeeee] rounded-[20px] flex flex-col items-center justify-center h-56 gap-4">
            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/5da2/06fa/ae0aa9d6a7a8a6bc40cf8d011ffbea77?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U6Gx1aV721j3rPJgnweJXFDp~iRJVZ2TzEBWJK8XTmVY3amRMODc7lX~SMdLczpFChASfpV4RLgTEFLUY2RPRZNspGMhWuKLS0PHVEJHwqydfQ-C2Sk9vmPaPHYq0GH1okrwxRm17T3bd7qqTDUC95eLW8-k6Yh0KsCsLW2QtZNX1axNKCXEonbmKBEM46tNmxCz-Jdh5kv1SVmFQH2aekpa-d8Y66UNaJ0Y-56EYmojcloElrOAd9Tn~bWa1YvZcmmXisyw6YHMDMs9IK5jbXpnJBG84UI1lY6fNVpCHOZnfSIyq1SksUha4iNXlPjLHxUZyGmjr-pqHU-rvWLZVw__"
                alt=""
                className=" h-28"
              />
            </div>
            <span className=" w-2/3 text-center">Track & Manage Inventory</span>
          </Link>

          <Link to={`/farmer-dashboard/${currentUser._id}`} className=" bg-[#eeeeee] rounded-[20px] flex flex-col items-center justify-center h-56 gap-4">
            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/9e4c/3761/ff4e059070853fcdd107c79a6711b206?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NSACO4FkLwF~-IpjFfXO24LvehjB1gNPcRT3IpDIQmTyOs6En6VAgWnk8ydsHJQkTBq06FwPxhAlSVgZLG2nsUSQL1AfkaIhEqwDcgujjfZ4aPNnv2Bv3xg~3f3I9VBOgGICBxYkokEz4AqwL5yZjekMiKNueJ-s93PBkiehabRnv4fMyarPjbU5woMiFSeVUQDqIfkOcWKchxq5ou0MpYjrwubbIv~VMcGYfZwHAITXBLIOEsz60xlgLtJoxKTIHB5c4ZB8FVpbd4SfYJWhySOQMHY3N8g56ekQZxHVwWOI0yO7pxcs5udfldyM81wWzm0Oxn5XgRdGHTnOyiQjZA__"
                alt=""
                className=" h-28"
              />
            </div>
            <span className=" w-2/3 text-center">
              Connect Directly with Stakeholders
            </span>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FarmerHomepage;
