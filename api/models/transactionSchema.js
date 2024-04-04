import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  cropSaleListing: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CropSaleListing',
    required: true
  },
  buyer: { // Reference to a Warehouse Owner
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    // Adjust this ref according to your Warehouse or User schema
    ref: 'Warehouses', // or 'User' if you have a unified user schema
  },
  seller: { // Reference to the Farmer who owns the listing
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Farmer',
  },
  quantityPurchased: {
    type: Number,
    required: true,
  },
  totalCost: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'cancelled'],
    default: 'pending',
  },
  transactionDate: {
    type: Date,
    default: Date.now,
  },
  paymentDetails: { // Optional, depends on how you manage payments
    type: mongoose.Schema.Types.Mixed, // Can be adjusted based on your payment method details
    required: false,
  }
}, { timestamps: true });

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;
