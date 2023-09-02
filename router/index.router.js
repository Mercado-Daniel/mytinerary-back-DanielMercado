import express from "express";
import userRouter from "./user.router.js";
import citiesRouter from "./cities.router.js";
import itinerariesRouter from "./itineraries.router.js";
import activitiesRouter from "./activities.router.js";


const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World');
});

router.use('/users', userRouter);
router.use('/cities', citiesRouter);
router.use('/itineraries', itinerariesRouter);
router.use('/activities', activitiesRouter);


export default router;