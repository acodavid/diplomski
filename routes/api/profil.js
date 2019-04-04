const express = require('express');
const router = express.Router();

// @route GET api/profil/test
// @desc Testna profil ruta
// @access public
router.get('/test', (req, res) => res.json({ poruka: "Profil radi" }));

module.exports = router;