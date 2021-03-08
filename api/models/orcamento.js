const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const solicitacao = new Schema ({
    name: {
        type:String
    },

    email:{
        type:String
    },

    fone: {
        type:String
    },

    zap:{
        type:String
    },

    projeto:{
        type:String

    },
   
}, {
    timestamps:true,




});

mongoose.model('Solicitacao',solicitacao);