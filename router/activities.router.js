import express from 'express';
import activitiesController from '../controllers/activities.controller.js'
import { isAdmin } from '../middlewares/isAdmin.middleware.js';

const router = express.Router();
const {getActivities, createActivity, getActivityById, updateActivity, deleteActivity} = activitiesController;

router.get('/', getActivities);

router.get('/:id', getActivityById);

router.post('/', createActivity);

router.put('/:id', updateActivity);

router.delete('/:id',isAdmin , deleteActivity);


export default router;