import mongoose from 'mongoose';


const cropDetailSchema = new mongoose.Schema({
    cropName: {
        type: String,
        required: true
    },
    cropQuantity: {
        type: Number,
        required: true
    }
});

const warehouseDetailSchema = new mongoose.Schema({
    warehouseTotalStorage: {
        type: Number,
        required: true
    },
    warehouseName: {
        type: String,
        required: true
    },
    cropDetails: [cropDetailSchema]
});

const warehouseSchema = new mongoose.Schema({
    usertype: {
        type: String,
        required: true,
        default: "warehouseOwner"
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    governmentId: {
        type: String,
        required: true
    },
    warehouseDetails: warehouseDetailSchema
});


const Warehouse = mongoose.model('Warehouse', warehouseSchema);

export default Warehouse;