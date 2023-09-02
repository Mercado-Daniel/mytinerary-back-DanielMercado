import express from 'express';
import activitiesController from '../controllers/activities.controller.js'

const router = express.Router();
const {getActivities, createActivity, getActivityById, updateActivity, deleteActivity} = activitiesController;

router.get('/', getActivities);

router.get('/:id', getActivityById);

router.post('/', createActivity);

router.put('/:id', updateActivity);

router.delete('/:id', deleteActivity);


export default router;