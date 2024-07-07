const { response } = require('express');
const StudentPasantias = require('../models/studentPasantias');

const crearPasantias = async (req, res = response) => {
    const { title, empresa, tutorAcademico, tutorEmpresarial, hour, status, user } = req.body;

    // Mensajes de depuración
    console.log('Cuerpo de la solicitud:', req.body);

    if (!user) {
        return res.status(400).json({
            ok: false,
            msg: 'El campo "user" es obligatorio.'
        });
    }

    try {
        // Verificar si ya existe una pasantía para el usuario
        const existingPasantia = await StudentPasantias.findOne({ user });

        if (existingPasantia) {
            return res.status(400).json({
                ok: false,
                msg: 'Ya existe una pasantía activa para este usuario.'
            });
        }

        // Si no existe, procedemos a crear la nueva pasantía
        const studentPasantias = new StudentPasantias({ title, empresa, tutorAcademico, tutorEmpresarial, hour, status, user });

        await studentPasantias.save();

        res.json({
            ok: true,
            title: studentPasantias.title,
            empresa: studentPasantias.empresa,
            tutorAcademico: studentPasantias.tutorAcademico,
            tutorEmpresarial: studentPasantias.tutorEmpresarial,
            hour: studentPasantias.hour,
            status: studentPasantias.status,
            user: studentPasantias.user
        });
    } catch (error) {
        console.error('Error al crear la pasantía:', error);
        res.status(500).json({
            ok: false,
            msg: 'Error al crear la pasantía. Por favor, contacta al administrador.',
        });
    }
};

const obtenerPasantias = async (req, res = response) => {
    try {
        const pasantias = await StudentPasantias.find();
        res.json({
            ok: true,
            pasantias
        });
    } catch (error) {
        console.error('Error al obtener las pasantías:', error);
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener las pasantías. Por favor, contacta al administrador.',
        });
    }
};

const crearServicio = async (req, res = response) => {
    res.json({
        ok: true,
        msg: 'creando servicio'
    });
}

module.exports = {
    crearPasantias,
    crearServicio,
    obtenerPasantias
};