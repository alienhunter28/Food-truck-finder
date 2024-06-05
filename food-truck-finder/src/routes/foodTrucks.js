const express = require('express');
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const router = express.Router();
const dataFilePath = path.join(__dirname, '../../data/Mobile_Food_Facility_Permit.csv');

router.get('/', (req, res) => {
    const results = [];

    fs.createReadStream(dataFilePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
          res.json(results);
      });
});

module.exports = router;
