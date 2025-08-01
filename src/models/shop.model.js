'use strict'


const mongoose = require('mongoose'); 
const DOCUMENT_NAME = 'Shop';
const COLLECTION_NAME = 'Shops';

var shopSchema = new mongoose.Schema({
    name:{
        type:String,
        trim: true,
        maxLength: 100
    },  
    email:{
        type:String,
        trim:true,
        unique:true,
    },
    status:{
        type:String,
        enum: ['active','inactive'],
        unique:true,
    },
    verify: {
        type: Schema.Types.Boolean,
        default: false
    },
    password:{
        type:String,
        required:true,
    },
    roles: {
        type: Array,
        default: [],
    }
}, {
    timestamps: true,
    collection: COLLECTION_NAME,
});


export default mongoose.model(DOCUMENT_NAME, shopSchema);