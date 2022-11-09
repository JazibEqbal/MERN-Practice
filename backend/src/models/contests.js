const mongoose= require('mongoose');

const contestSchema= new mongoose.Schema({
    organiser: {
        type: String,
        required: true
    },
    contestname :{
        type: String,
        required: true
    },
    dateofcontest: {
        type: Date,
        required: true
    },
    question: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Questions'
    }]
},{
    timestamps: true
})

const Contests = mongoose.model('Contests',contestSchema);

module.exports = Contests