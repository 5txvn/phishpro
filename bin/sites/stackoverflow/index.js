const router = require('express').Router();

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

router.post('/', (req, res) => {
    console.log(req.body)
    res.redirect("https://stackoverflow.com")
})

module.exports = router