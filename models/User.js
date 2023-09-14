import {Schema, model, Types} from 'mongoose';

const collection = 'users';

const schema = new Schema({
    name: {type: String, required: true},
    lastName: {type: String, required: true},
    image: {type: String, default :'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg'},
    email: {type: String, required: true},
    password: {type: String, required: true},
    country: {type: String},
    online: {type: Boolean, default: false},
    verified: {type: Boolean, default: true},
    verified_code: {type: String}
}, {
    timestamps: true
});

const User = model(collection, schema);

export default User;