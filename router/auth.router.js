import  express  from "express";
import passport from "passport";
import authController from "../controllers/auth.controller.js";
import { accountExistsSignin } from "../middlewares/auth/accountExistsSignin.middleware.js";
import { accountExistsSignup } from "../middlewares/auth/accountExistsSignup.middleware.js";
import { accountHasBeenVerified } from "../middlewares/auth/accountHasBeenVerified.middleware.js";
import { passwordIsOk } from "../middlewares/auth/passwordIsOk.middleware.js";
import { validator} from '../middlewares/validator.js';
import { createUserSchema } from "../schema/user.schema.js";



const {signup, signin, signout, token} = authController;

const router = express.Router();

router.post('/signup',validator(createUserSchema), accountExistsSignup,signup);

router.post('/signin'/*,validator(createUserSchema)*/, accountExistsSignin, accountHasBeenVerified, passwordIsOk, signin);

router.post('/signout', passport.authenticate('jwt', {session:false}),signout)

router.post('/token', passport.authenticate('jwt', {session:false}), token)
export default router;