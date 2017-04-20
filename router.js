import express from 'express';

let router = express.Router();
router.get('/about-us', (req, res) => {
    res.send('I am working in To The New');
});

module.exports = router;

