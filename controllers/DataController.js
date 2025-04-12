import Data from '../models/Data.js';

const DataController = {
    storeData: async (req, res) => {
        
        try {

            const data = new Data({
                category: req.body.category,
                value: req.body.value
            });

            await data.save();
            res.status(201).json({ message: 'Data stored successfully', data });
        } catch (error) {
            
            res.status(500).json({ message: 'Error uploading data', error: error.message });
        }
    },

    getData: async (req, res) => {
        try {
            const data = await Data.aggregate([
                {
                    $group: {
                        _id: '$category',
                        total: { $sum: 1 },
                        averageValue: { $avg: '$value' },
                        minValue:{$min:'$value'},
                        maxValue:{$max:'$value'}
                    }
                },
                {
                    $sort: { averageValue: -1 }
                }
            ]);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching data', error: error.message });
        }
    },

};

export default DataController;
