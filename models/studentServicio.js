const { Schema, model } = require('mongoose')

const studentServicioSchema = Schema({
    title: {
        type: String,
        required: true
    },
    empresa: {
        type: String,
        required: true
    },
    tutorAcademico: {
        type: String,
        required: true
    },
    tutorComunitario: {
        type: String,
        required: true
    },
    hour: {
        type: Number,
        required: true,
        default: 0
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
}, {
    timestamps: true // Esto agrega createdAt y updatedAt automáticamente
});

module.exports = model('StudentServicio', studentServicioSchema);