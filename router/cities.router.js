import express from 'express';
import citiesController from '../controllers/cities.controller.js'

const router = express.Router();

router.get('/', citiesController.getCities);

router.post('/', citiesController.createCity);

export default router;
