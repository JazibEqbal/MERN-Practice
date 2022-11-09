const mongoose= require('mongoose')

const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    answer: {
        type: String,
        required: false
    },
    solution: {
        type: Boolean,
        require: true,
        default: false
    },
    contest: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Contests'
    }
},{
    timestamps: true
})

const Questions = mongoose.model('Questions', questionSchema)

module.exports = Questions