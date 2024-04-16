import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    location : {
        type: String,
        required : true
    },
    address : {
        type: String,
        required : true
    },
    desc: {
        type: String,
        required: true,
        trim: true,
    },
    banner: {
        type: String,
        required: true,
        trim: true,
    },
    galarry: [
        {
            type: String
        }
    ],
    priceOld: {
        type: Number
    },
    priceCurrent: {
        type: Number
    },
    facilities: [
        {
            img: String,
            name: String
        }
    ],
    rating:{
        type : Number
    },
    type:{
        type: String
    }
},
    { timestamps: true }
)

export default mongoose.models?.Hotel || mongoose.model('Hotel', hotelSchema);