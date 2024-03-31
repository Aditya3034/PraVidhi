import Farmer from "../models/farmer.models.js"
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
import Warehouse from "../models/warehouse.model.js";

// FRMER AUTH ROUTES ---------------------------------------------------------------------

export const signup = async (req, res, next) => {
  const { userType , username, email, password, address, city, contact, state } = req.body;
console.log(userType);
  const hasedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new Farmer({ userType, username, email, password: hasedPassword, address, city, contact, state });

  try {
    await newUser.save();
    res.status(201).json("USER CREATED SUCESSFULLY");
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const validUser = await Farmer.findOne({ email });

    if (!validUser) return next(errorHandler(404, "USer not found"));

    const validPassword = bcryptjs.compareSync(password, validUser.password);

    if (!validPassword) return next(errorHandler(401, "Wrong Credentials"));

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);

    const { password: pass, ...rest } = validUser._doc;

    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};

export const google = async (req, res, next) => {
  try {
    const user = await Farmer.findOne({ email: req.body.email });

    if (user) {
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

      const { password: pass, ...rest } = user._doc;

      res
        .cookie("access_token", token, { httpOnly: true })
        .status(200)
        .json(rest);
    } else {
      const generatePassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hasedPassword = bcryptjs.hashSync(generatePassword, 10);
      const newUser = new Farmer({
        username:
          req.body.name.split(" ").join("").toLowerCase() +
          Math.random().toString(36).slice(-4),
        email: req.body.email,
        password: hasedPassword,
        avatar: req.body.photo,
      });
      await newUser.save();

      const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = newUser._doc;

      res
        .cookie("access_token", token, { httpOnly: true })
        .status(200)
        .json(rest);
    }
  } catch (error) {
    next(error);
  }
};

export const signout = async (req, res, next) => {
  try {
    res.clearCookie("access_token");
    res.status(200).json("User has been signed out");
  } catch (error) {
    next(error);
  }
};

// FRMER AUTH ROUTES END ------------------------------------------------------------------

// WAREHOUSES AUTH ROUTES START -----------------------------------------------------------

export const warehousesignup = async (req, res) => {
  const { name, address, city, state, email, password, governmentId } =
    req.body;

  try {
    // Check if the user already exists
    // const existingWarehouse = await Warehouse.findOne({email : email });
    // if (existingWarehouse) {
    //   return res.status(400).json({ message: "Email already in use." });
    // }

    // Hash the password
    const hashedPassword = await bcryptjs.hash(password, 12);
    // console.log(hashedPassword.toString());
    // Create a new warehouse user
    const newWarehouse = new Warehouse({
      name,
      address,
      city,
      state,
      email,
      password: hashedPassword,
      governmentId,
    });
    console.log(newWarehouse);

    await newWarehouse.save();
    res.status(201).json({ message: "Warehouse registered successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error registering warehouse." });
  }
};


export const warehousesignin = async (req, res) => {
  const {email , password} = req.body;

  try {
    const validUser = await Warehouse.findOne({ email });
// console.log(validUser.password);
    if (!validUser) return next(errorHandler(404, "USer not found"));

    const validPassword = bcryptjs.compareSync(password, validUser.password);
// console.log(validPassword)
    if (!validPassword) return next(errorHandler(401, "Wrong Credentials"));

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);

    const { password: pass, ...rest } = validUser._doc;

    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    
  }
}
// WAREHOUSES AUTH ROUTES END -------------------------------------------------------------
