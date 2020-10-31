const express = require('express');
const router = express.Router();

const { auth } = require('../controllers/auth');
const { findLatestPublications, findByCityAndCategory, findMyPublications, findById } = require('../controllers/search');

router.post('/auth', auth);
router.get('/search/me/:userId', findMyPublications);
router.get('/search/latest/:items', findLatestPublications);
router.get('/search/filter/:cityId/:categoryId', findByCityAndCategory);
router.get('/search/:publicationId', findById);

exports.router = router;
