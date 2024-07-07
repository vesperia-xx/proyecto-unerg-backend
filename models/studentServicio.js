const mongoose = require('mongoose');

const studentServicioSchema = new mongoose.Schema({
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
        required: true
    },
    status: {
        type: String,
        enum: ['en progreso', 'completado'], // Ejemplo de posibles valores de estado
        default: 'en progreso'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
}, {
    timestamps: true // Esto agrega createdAt y updatedAt automáticamente
});

const StudentServicio = mongoose.model('StudentServicio', studentServicioSchema);

module.exports = StudentServicio;