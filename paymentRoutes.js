const express = require("express");
const router = express.Router();
const { isSignedIn, isAuthenticated } = require("../controllers/auth");
const { getToken, processPayment } = require("../controllers/payment");

router.get('/payment/gettoken/:userId', isAuthenticated, isSignedIn, getToken)

router.post('/payment/braintree/:userId', isAuthenticated, isSignedIn, processPayment)

module.exports = router