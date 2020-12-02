const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    phone: {
        type: String,
        required: true
    },

    service: {
        type: String,
        required: true,
    },
    schedule: {
        type: String,
        required: true
    }, 
    createdAt: {
        type: Date,
        default: Date.now
    }
});

ProductSchema.plugin(mongoosePaginate);
mongoose.model("Product", ProductSchema);