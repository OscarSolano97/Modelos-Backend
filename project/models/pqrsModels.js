export const getAllPqrsMessage = () => ({
  mensaje: 'Simulación: se consultaron todas las PQRS.',
});

export const getPqrsByIdMessage = (id) => ({
  mensaje: `Simulación: se consultó la PQRS con id ${id}.`,
});

export const createPqrsMessage = (datos) => ({
  mensaje: 'Simulación: se creó una nueva PQRS.',
  datos,
});

export const updatePqrsMessage = (id, datos) => ({
  mensaje: `Simulación: se actualizó la PQRS con id ${id}.`,
  datos,
});

export const deletePqrsMessage = (id) => ({
  mensaje: `Simulación: se eliminó la PQRS con id ${id}.`,
});
