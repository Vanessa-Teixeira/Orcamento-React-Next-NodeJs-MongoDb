const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const home = new Schema ({
    topTitulo: {
        type:String
    },

    topTextoBtn:{
        type:String
    },

    serTitulo: {
        type:String
    },

    serSubtitulo:{
        type:String
    },

    serUmIcone:{
        type:String

    },

    serDoisIcone:{
        type:String
    },
    serTresIcone:{
        type:String
    },
    serUmTitulo:{
        type:String
    },
    serDoisTitulo:{
        type:String
    },
    serTresTitulo:{
        type:String
    },

    serDescUm:{
        type:String
    },

    serDescDois:{
        type:String
    },

    serDescTres:{
        type:String
    },
}, {
    timestamps:true,




});

mongoose.model('Home',home);