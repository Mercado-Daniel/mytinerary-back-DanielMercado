import express from 'express';
import citiesController from '../controllers/cities.controller.js'
import { isAdmin } from '../middlewares/isAdmin.middleware.js';

const router = express.Router();
const {getCities, createCity, getCityById, updateCity, deleteCity} = citiesController;

router.get('/', getCities);

router.get('/:id', getCityById);

router.post('/', createCity);

router.put('/:id', updateCity);

router.delete('/:id', isAdmin, deleteCity);


export default router;
