import mongoose from 'mongoose';

const farmerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  cropInfo: {
    type: Map,
    of: Number
  },  
},
{ timestamps: true }
);

const Farmer = mongoose.model('Farmer', farmerSchema);

export default Farmer;