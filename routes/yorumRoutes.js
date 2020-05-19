const express = require('express');
const yorumController = require('../controllers/yorumController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(yorumController.yorumlariAl)
  .post(
    authController.protect,
    authController.emailKontrol,
    yorumController.yorumEkleDuzenle,
    yorumController.yorumEkle
  );

router
  .route('/:id')
  .get(yorumController.yorumAl)
  .delete(
    authController.protect,
    yorumController.yorumIdProtect,
    yorumController.yorumSil
  )
  .patch(
    authController.protect,
    yorumController.yorumIdProtect,
    yorumController.yorumGuncelle
  );

module.exports = router;
