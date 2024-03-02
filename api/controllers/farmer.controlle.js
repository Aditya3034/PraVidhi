import bcryptjs from "bcryptjs";
import Farmer from "../models/farmer.models.js";
import { errorHandler } from "../utils/error.js";

export const test = (req, res) => {
  res.json({
    message: "HELLO WORLD",
  });
};

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, "You can only update your own account!"));
  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    const updatedUser = await Farmer.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar,
        },
      },
      { new: true }
    );

    const { password, ...rest } = updatedUser._doc;

    res.status(200).json(rest);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, "You can only delete your own account!"));
  try {
    await Farmer.findByIdAndDelete(req.params.id);
    res.clearCookie("access_token");
    res.status(200).json("User has been deleted!");
  } catch (error) {
    next(error);
  }
};

export const getUserListin = async (req, res, next) => {
  // if (req.user.id === req.params.id) {
  //   try {
  //     const listings = await Listing.find({ userRef: req.params.id });
  //     res.status(200).json(listings);
  //   } catch (error) {
  //     next(error);
  //   }
  // } else {
  //   return next(errorHandler(401, "You can only view your own listings"));
  // }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await Farmer.findById(req.params.id);

    if (!user) return next(errorHandler(404, "User Not founde"));

    const { password: pass, ...rest } = user._doc;

    res(200).json(rest);
  } catch (error) {
    next(error);
  }
};


export const updateCropInfo = async (req, res, next) => {

  try {
    const userId = req.params.id;
    // console.log(userId);
    const { cropInfo } = req.body;
    // console.log(cropInfo);

    const updatedFarmer = await Farmer.findByIdAndUpdate(
      req.params.id,
      { $set: { cropInfo } },
      { new: true }
    );

    res.status(200).json(updatedFarmer);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }

};