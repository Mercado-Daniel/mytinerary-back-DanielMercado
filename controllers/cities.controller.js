import City from "../models/city.js"

const controller = {
    getCities: async (req, res) => {
        try{
            const cities = await City.find()//es un find de mongoose distinto al de js

            return res.status(200).json({
                success: true,
                cities//como el valor de la variable tiene el mismo nombre que la propiedad va de esta forma
            });
        }catch(error){
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "Error getting the cities"
            });
        }

    },
    createCity: async (req , res) => {
        try{
            const newCity = await City.create(req.body);
    
            return res.status(201).json({
                success: true,
                message: "City created successfully"
            });
        }catch(error){
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "Error creating city"
            });
        }

    }
}

export default controller;