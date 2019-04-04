const express = require('express');
const router = express.Router();

// @route GET api/objave/test
// @desc Testna objave ruta
// @access public
router.get('/test', (req, res) => res.json({ poruka: "Objave rade" }));

module.exports = router;