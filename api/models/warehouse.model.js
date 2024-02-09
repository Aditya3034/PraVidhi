import mongoose from 'mongoose';

const warehouseSchema = new mongoose.Schema({
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
    warehouseDetails: {
        warehouseTotalStorage: {
            type: Number,
            // required: true
        },
        warehouseName: {
            type: String,
            // required: true
        },
        cropDetails: [{
            cropName: {
                type: String,
                // required: true
            },
            cropQuantity: {
                type: Number,
                // required: true
            }
        }]
    }
});


const Warehouse = mongoose.model('Warehouse', warehouseSchema);

export default Warehouse;