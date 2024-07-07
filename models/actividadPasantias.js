const { Schema, model } = require('mongoose');

const actividadPasantiasSchema = Schema({

    activity: {
        type: String,
        required: true
    },
    week: {
        type: number,        
    },
    date: {
        type: Date,
    },
    hours: {
        type: number,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }

});

EventoSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});



module.exports = model('ActividadPasantias', actividadPasantiasSchema );