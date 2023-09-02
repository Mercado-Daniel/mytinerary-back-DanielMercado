import Activity from '../models/Activity.js';

const controller = {
    getActivities: async (req, res) => {
        let queries = {};

        if(req.query.name){
            queries.name = new RegExp(`^${req.query.name}`,  'i');
        }

        try {
            const activities = await Activity.find(queries);

            if(activities.length > 0) {
                return res.status(200).json({
                    success: true,
                    activities
                });
            }

            return res.status(404).json({
                success: false,
                message: 'No activities were found'
            });

        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'Error getting the activities'
            });
        }
    },
    getActivityById: async(req, res) => {
        try {
            const activity = await Activity.findById(req.params.id);

            if(activity){
                return res.status(200).json({}).json({
                    success: true,
                    activity
                });
            }

            return res.status(404).json({
                success: false,
                message: 'activity not found'
            });

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error getting the activity'
            });
        }
    },
    createActivity: async (req, res) => {
        try {
            const newActivity = await Activity.create(req.body);

            return res.status(200).json({
                success: true,
                message: 'Activity created successfully'
            });

        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'Error creating activity'
            });
        }
    },
    updateActivity: async (req, res) => {
        try {
            await Activity.updateOne({_id: req.params.id}, req.body);
            return res.status(200).json({
                success: true,
                message: 'Activity updated successfully'
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'Error updating activity'
            });
        }
    },
    deleteActivity: async (req, res) => {
        try {
            await Activity.deleteOne({_id: req.params.id}, req.body);
            return res.status(200).json({
                success: true,
                message: 'Activity deleted successfully'
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'Error deleting activity'
            });
        }
    }
}

export default controller;