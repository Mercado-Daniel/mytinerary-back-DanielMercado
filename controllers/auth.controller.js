import crypto from 'crypto';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';




const controller = {
    signup: async (req, res, next) => {
        try {
            req.body.verified_code = crypto.randomBytes(10).toString('hex');
            req.body.password = bcryptjs.hashSync(req.body.password, 10);

            const user = await User.create(req.body);

            return res.status(201).json({
                success: true,
                message: 'User registered successfully'
            });
            
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Error registering user'
            });
        }

    },
    signin: async (req, res, next) => {
        try {
            let user = await User.findOneAndUpdate(
                {email: req.user.email},
                {online: true},
                {new: true}
            )

            const token = jwt.sign(
                {
                    id: user._id,
                    email: user.email,
                    name: user.name,
                    image: user.image
                }, 
                process.env.SECRET,
                {
                    expiresIn:'10h' 
                }
            );

            delete user.password;

            return res.status(200).json({
                success: true,
                message: 'User logged in successfully',
                response:{
                    token,
                    user:{
                        name: user.name,
                        email: user.email,
                        image: user.image
                    },
                }
            });

        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Error authenticating user '
            });
        }
    },
    signout: async(req, res, next) => {
        try {
            const user = await User.findOneAndUpdate(
                {email: req.user.email},
                {online: false},
                {new: true}
            );
            return res.status(200).json({
                success: true,
                message: 'User signout'
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'signout error'
            })
        }
    },
    token: async (req, res, next) => {
        const { user } = req
        try {
            return res.status(200).json({
                //token,
                user: {
                    name:user.name,
                    email:user.email,
                    image:user.image
                }
            })
        } catch (error) {
            next(error)
        }
    }
}

export default controller