let pqrs = [
    {
        id: 1,
        tipo: "Petición",
        descripcion: "Necesito información"
    },

    {
        id: 2,
        tipo: "Queja",
        descripcion: "Servicio muy lento"
    },
    {
        id: 3,
        tipo: "Reclamo",
        descripcion: "No me gustó la comida"
    }
];

export function obtenerTodas() {
    return pqrs;
}

export function obtenerPorId(id) {
    return pqrs.find(p => p.id == id);
}

export function crear(datos) {
    pqrs.push(datos);
    return datos;
}

export function actualizar(id, datos) {
    const indice = pqrs.findIndex(p => p.id == id);
    pqrs[indice] = datos;
    return datos;
}

export function eliminar(id) {
    pqrs = pqrs.filter(p => p.id != id);
    return "PQRS eliminada";
}