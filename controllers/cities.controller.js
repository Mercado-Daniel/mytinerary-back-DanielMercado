const controller = {
    getCities: (req, res) => {
        res.json({
            cities:[
                {name: 'Rosario'},
                {name: 'Cordoba'}
            ]
        });
    }
}

export default controller;