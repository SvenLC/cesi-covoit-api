import express from 'express';
import { getCarpoolings, addCarpooling, delCarpooling } from './carpooling.controller.js';

const carpoolingRouter = express.Router();

carpoolingRouter.get('/', getCarpoolings);
carpoolingRouter.post('/', addCarpooling);
carpoolingRouter.delete('/:id', delCarpooling);

export default carpoolingRouter;

export { carpoolingRouter };