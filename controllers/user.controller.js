import User from '../models/User.js';

const controller = {
    getUsers: async (req, res) => {
        let queries = {};

        if(req.query.name){
            queries.name = new RegExp(`^${req.query.name}`,  'i');
        }

        try {
            const users = await User.find(queries);

            if(users.length > 0) {
                return res.status(200).json({
                    success: true,
                    users
                });
            }

            return res.status(404).json({
                success: false,
                message: 'No users were found'
            });

        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'Error getting the users'
            });
        }
    },
    getUserById: async(req, res) => {
        try {
            const user = await User.findById(req.params.id);

            if(user){
                return res.status(200).json({}).json({
                    success: true,
                    user
                });
            }

            return res.status(404).json({
                success: false,
                message: 'User not found'
            });

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error getting the user'
            });
        }
    },
    createUser: async (req, res) => {
        try {
            const newUser = await User.create(req.body);

            return res.status(200).json({
                success: true,
                message: 'User created successfully'
            });

        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'Error creating user'
            });
        }
    },
    updateUser: async (req, res) => {
        try {
            await User.updateOne({_id: req.params.id}, req.body);
            return res.status(200).json({
                success: true,
                message: 'User updated successfully'
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'Error updating user'
            });
        }
    },
    deleteUser: async (req, res) => {
        try {
            await User.deleteOne({_id: req.params.id}, req.body);
            return res.status(200).json({
                success: true,
                message: 'User deleted successfully'
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'Error deleting user'
            });
        }
    }
}

export default controller;