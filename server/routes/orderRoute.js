const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")(
  'sk_test_51Nj4WDSEDoWA1zjDmDlqyfGiYscorwx1HLHPGV1osv2qzo2SNqnKyAB1J107lUgvBSoeCS6ESDeFZhz0lmOtNMnS00mciwos9v'
);
const Order = require("../models/orderModel");

router.post("/placeorder", async (req, res) => {
  const { token, subTotal, currentUser, cartItems } = req.body;
  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const paymentIntent = await stripe.paymentIntents.create({
      amount: subTotal * 100,
      currency: 'inr',
      customer: customer.id,
      payment_method:customer.default_source,
      receipt_email: token.email,
    });

    if (paymentIntent.status === 'succeeded') {
      const newOrder = new Order({
        name: currentUser.name,
        email: currentUser.email,
        userid: currentUser._id,
        orderItems: cartItems,
        orderAmount: subTotal,
        shippingAddress: {
          street: token.card.address_line1,
          city: token.card.address_city,
          country: token.card.address_country,
          picode: token.card.address_zip,
        },
        transectionId: paymentIntent.id,
      });
      await newOrder.save();
      res.send("Payment Success");
    } else {
      res.send("Payment Failed");
    }
  } catch (error) {
    res.status(400).json({
      message: "Something went wrong",
      error: error.stack,
    });
  }
});

// ... (other routes)

module.exports = router;