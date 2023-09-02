
import {Schema, model, Types } from 'mongoose';

const collection = 'itineraries';
const schema = new Schema({
    name:{type: String, required: true},
    price:{
        type: Number,
        required: true,
        validate:{
            validator: function(value) {
                return value >= 1 && value <= 5;
        },
        message: 'Please enter a number between 1 and 5.',
        },
    },
    duration:{type: Number, required: true},
    likes:{type: Number, default: 0},
    hashtags:[
        {type: String}
    ],
    comments:[
        {type: String}
    ],
    city:{type: Types.ObjectId, ref: 'cities'},
    user:{type: Types.ObjectId, ref: 'users'},
    activies:[
        {type: Types.ObjectId, ref: 'activities'}
    ]
}, {
    timestamps: true
});

const Itinerary = model(collection, schema);

export default Itinerary;