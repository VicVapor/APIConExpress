const mongoose=require('mongoose');
const {Schema} = mongoose;

const MovieSchema=new Schema({
    tittle: {type: String, required: true},
    description: {type: String, required: true},
    director: {type: String},
    genre: {type: String, required: true},
    releaseYear: {type: String},
    language: {type: String, required: true},
    minimun_Age: {type: Number, required: true}
});

module.exports=mongoose.model('Movie', MovieSchema);