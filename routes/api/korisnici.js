const express = require('express');
const router = express.Router();

// @route GET api/korisnici/test
// @desc Testna korisnici ruta
// @access public
router.get('/test', (req, res) => res.json({ poruka: "Korisnici rade" }));

module.exports = router;