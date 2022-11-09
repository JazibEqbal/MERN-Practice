const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
     type: String,
     required: true,
     trim: true,
     unique: true,
     lowercase: true,
     validate(value){
        if(!validator.isEmail(value)){
            throw new Error('Invalid Email')
        }
     }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true
    },
    avatar: {
        type: Buffer
    },
    tokens: [{
        token: {
            type: String,
            required: true,

        }
    }]
},{
    timestamps: true
})

//hiding confidential data
userSchema.methods.toJSON = () => {
    const user = this;
    const userObject = user.toObject();
    delete userObject.password;
    delete userObject.tokens;
    delete userObject.avatar;

    return userObject;
}

//generating token
userSchema.methods.generateAuthToken = async () => {
    const user = this
    const token = jwt.sign({_id: user._id}, 'My Secret')
    user.tokens = user.tokens.concat({token})
    await userSchema.save();
    return token;
}

//Finding user 


const User = mongoose.model('User',userSchema);

module.exports = User;