const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;
const router = express.Router();

router.post('/encode', (req, res) => {
  res.send(Vigenere.Cipher(req.body.pass).crypt(req.body.txt))
});
router.post('/decode', (req, res) => {
  res.send(Vigenere.Decipher(req.body.pass).crypt(req.body.txt))
});
module.exports = router;
