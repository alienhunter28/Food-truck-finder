const express = require('express');
const foodTruckRoutes = require('./routes/foodTrucks');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api/food-trucks', foodTruckRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
