import * as modelo from "../models/pqrsModel.js";

export function obtenerTodas(req, res) {
    const datos = modelo.obtenerTodas();
    res.status(200).json(datos);
}

export function obtenerPorId(req, res) {
    const datos = modelo.obtenerPorId(req.params.id);
    res.status(200).json(datos);
}

export function crear(req, res) {
    const datos = modelo.crear(req.body);
    res.status(201).json(datos);
}

export function actualizar(req, res) {
    const datos = modelo.actualizar(req.params.id, req.body);
    res.status(200).json(datos);
}

export function eliminar(req, res) {
    const mensaje = modelo.eliminar(req.params.id);
    res.status(200).json({ mensaje });
}