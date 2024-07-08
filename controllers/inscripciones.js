const { response } = require('express');
const StudentPasantias = require('../models/studentPasantias');
const StudentServicio = require('../models/studentServicio');

const crearPasantias = async (req, res = response) => {
    const { title, empresa, tutorAcademico, tutorEmpresarial, hour, user } = req.body;

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
        const studentPasantias = new StudentPasantias({ title, empresa, tutorAcademico, tutorEmpresarial, hour, user });

        await studentPasantias.save();

        res.json({
            ok: true,
            title: studentPasantias.title,
            empresa: studentPasantias.empresa,
            tutorAcademico: studentPasantias.tutorAcademico,
            tutorEmpresarial: studentPasantias.tutorEmpresarial,
            hour: studentPasantias.hour,
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

const crearServicio = async (req, res = response) => {
    const { title, empresa, tutorAcademico, tutorComunitario, hour, status, user } = req.body;

    if (!user) {
        return res.status(400).json({
            ok: false,
            msg: 'El campo "user" es obligatorio.'
        });
    }

    try {
        // Verificar si ya existe un servicio para el usuario
        const existingServicio = await StudentServicio.findOne({ user });

        if (existingServicio) {
            return res.status(400).json({
                ok: false,
                msg: 'Ya existe un servicio activo para este usuario.'
            });
        }

        // Si no existe, procedemos a crear el nuevo servicio
        const studentServicios = new StudentServicio({ title, empresa, tutorAcademico, tutorComunitario, hour, status, user });

        await studentServicios.save();

        res.json({
            ok: true,
            title: studentServicios.title,
            empresa: studentServicios.empresa,
            tutorAcademico: studentServicios.tutorAcademico,
            tutorComunitario: studentServicios.tutorComunitario,
            hour: studentServicios.hour,
            user: studentServicios.user
        });
    } catch (error) {
        console.error('Error al crear el servicio:', error);
        res.status(500).json({
            ok: false,
            msg: 'Error al crear el servicio. Por favor, contacta al administrador.',
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

const obtenerServicios = async (req, res = response) => {
    try {
        const servicios = await StudentServicio.find();
        res.json({
            ok: true,
            servicios
        });
    } catch (error) {
        console.error('Error al obtener los servicios:', error);
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener los servicios. Por favor, contacta al administrador.',
        });
    }
};

module.exports = {
    crearPasantias,
    crearServicio,
    obtenerPasantias,
    obtenerServicios,
};