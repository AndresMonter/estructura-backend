import mongoose from "mongoose";



const ticketSchema= new mongoose.Schema({
    subTotal: Number,
    tax: Number,
    total: Number,
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Item"
    }] ,

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

});

export default mongoose.model("Ticket",ticketSchema);