const mongoose = require('mongoose');

const GirlSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    country: {
        type: String,
    },
    eyeColor: {
        type: String,
    },
    hairColor: {
        type: String,
    },
    height: {
        type: Number,
    },
    weight: {
        type: Number,
    },
    cup: {
        type: String,
    },
    breasts: {
        type: Boolean,
    },
    status: {
        type: String,
        enum : ['Have Not Seen', 'Evaluating', 'Evaluated'],
    },
    favoriteOf: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Boy',
    },
});

module.exports = mongoose.model('Girl', GirlSchema);