const Role = require("../models/role");


const createRoles = async () => {
    try {
        // Count Documents
        const count = await Role.estimatedDocumentCount();

        // check for existing roles
        if (count > 0) return;

        // Create default Roles
        const values = await Promise.all([
            new Role({ name: "User" }).save(),
            new Role({ name: "AdminPasantias" }).save(),
            new Role({ name: "AdminServicio" }).save(),
        ]);

        console.log(values);
    } catch (error) {
        console.error(error);
    }
};

module.exports = {
    createRoles
}