const { Schema, model } = require('mongoose')

const usuarioSchema = Schema({
    name: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    CI: {
        type: Number,
        require: true
    },
    phoneNumber: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    roles: [
        {
            type: Schema.Types.ObjectId,
            ref: "Role",
        },
    ],
},
    {
        timestamps: true,
        versionKey: false,
    }
)

module.exports = model('Usuario', usuarioSchema);