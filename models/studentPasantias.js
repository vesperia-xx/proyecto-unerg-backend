const { Schema, model } = require('mongoose')

const studentPasantiasSchema = Schema({
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
    tutorEmpresarial: {
        type: String,
        required: true
    },
    hour: {
        type: Number,
        required: true,
        default: 0 // Establece el valor predeterminado en 0
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
}, {
    timestamps: true // Esto agrega createdAt y updatedAt automáticamente
});

module.exports = model('StudentPasantias', studentPasantiasSchema);