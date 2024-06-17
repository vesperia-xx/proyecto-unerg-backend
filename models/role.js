const { Schema, model } = require('mongoose')

const ROLES = ["user", "admin", "moderator"];

const roleSchema = Schema(
    {
        name: String,
    },
    {
        versionKey: false,
    }
);

module.exports = model("Role", roleSchema), ROLES;