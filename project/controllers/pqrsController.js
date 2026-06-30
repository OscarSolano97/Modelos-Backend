import {
  createPqrsMessage,
  getAllPqrsMessage,
  getPqrsByIdMessage,
  updatePqrsMessage,
  deletePqrsMessage,
} from '../models/pqrsModels.js';

export const getAllPqrs = (req, res) => {
  res.status(200).json(getAllPqrsMessage());
};

export const getPqrsById = (req, res) => {
  res.status(200).json(getPqrsByIdMessage(req.params.id));
};

export const createPqrs = (req, res) => {
  res.status(201).json(createPqrsMessage(req.body));
};

export const updatePqrs = (req, res) => {
  res.status(200).json(updatePqrsMessage(req.params.id, req.body));
};

export const deletePqrs = (req, res) => {
  res.status(200).json(deletePqrsMessage(req.params.id));
};
