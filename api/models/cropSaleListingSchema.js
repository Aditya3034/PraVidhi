import mongoose from 'mongoose';

const cropSaleListingSchema = new mongoose.Schema({
  farmer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Farmer',
    required: true,
  },
  cropName: {
    type: String,
    required: true,
  },
  cropType: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  pricePerKg: {
    type: Number,
    required: true,
  },
  totalPrice: { 
    type: Number,
    required: true,
  },
  availableInDays: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['available', 'pending', 'sold'],
    default: 'available',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

cropSaleListingSchema.pre('save', function(next) {
  
  this.totalPrice = this.quantity * this.pricePerKg;
  this.updatedAt = Date.now();
  next();
});

const CropSaleListing = mongoose.model('CropSaleListing', cropSaleListingSchema);

export default CropSaleListing;
