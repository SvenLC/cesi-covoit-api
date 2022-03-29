import { fetchCarpoolings, createCarpooling, deleteCarpooling } from './carpooling.service.js';

export const getCarpoolings = async (req, res, next) => {
  try {
    const result = fetchCarpoolings();
    res.status(200).json(result);

  } catch (error) {
    next(error);
  }
};

export const addCarpooling = async (req, res, next) => {
  const { body } = req;

  try {
    const addedCarpooling = createCarpooling(body);
    res.status(200).json(addedCarpooling);

  } catch (error) {
    next(error);
  }
};

export const delCarpooling = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedCarpooling = deleteCarpooling(id);
    res.status(200).json(deletedCarpooling);

  } catch (error) {
    next(error);
  }
};