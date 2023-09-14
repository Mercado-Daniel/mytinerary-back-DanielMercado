import express from 'express';
import itinirariesController from '../controllers/itiniraries.controller.js'
import passport from '../middlewares/auth/passport.js';
import { isAdmin } from '../middlewares/isAdmin.middleware.js';


const router = express.Router();
const {getItinerariesByCityId, getItineraries, createItinerary, getItineraryById, updateItinerary, deleteItinerary} = itinirariesController;

router.get('/', getItineraries);

router.get('/:id', getItineraryById);

router.get('/by-city/:cityId', getItinerariesByCityId);

router.post('/', passport.authenticate('jwt', {session:false}), createItinerary);

router.put('/:id', updateItinerary);

router.delete('/:id',isAdmin , deleteItinerary);


export default router;