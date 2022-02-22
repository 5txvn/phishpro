const router = require('express').Router();

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
    console.log()
})

router.post('/', (req, res) => {
    console.log(req.body)
    res.redirect("https://github.com")
})

module.exports = router