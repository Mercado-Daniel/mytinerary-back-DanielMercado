import User from '../models/User.js';

const controller = {
    getUsers:(req, res) => {
        res.json({
            user: 'Daniel Mercado'
        });
    },
    createUser: async(req, res) => {
        try {
            const newUser = await User.create(req.body);
            return res.status(200).json({
                success: true,
                message: 'User created successfully'
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Error creating user'
            });
        }
    }
}

export default controller;