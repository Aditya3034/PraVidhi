import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
// import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import WareHouseSignIn from "./pages/WareHouseSignIn";
import Search from "./pages/Search";
import WareHouseSignUp from "./pages/WareHouseSignUp";
import FarmerHomepage from "./pages/FarmerHomepage"
import CropPridiction from "./pages/CropPridiction";
import FarmerInventory from "./pages/FarmerInventory";
import SellCrops from "./pages/SellCrops";


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/warehose-signUp" element={<WareHouseSignUp />} />
        <Route path="/warehose-signIn" element={<WareHouseSignIn />} />
        
        <Route path="/about" element={<About />} />
        <Route path='/search' element={<Search />} />
       

        <Route element={<PrivateRoute />}>
          <Route path="/farmer-homepage" element={<FarmerHomepage/>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/crop-predictions" element={<CropPridiction />} />
          <Route path="/farmer-inventory" element={ <FarmerInventory/>}/> 
          <Route path="/sell-crops" element={ <SellCrops />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
