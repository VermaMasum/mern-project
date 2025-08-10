const express = require("express");
const Stripe = require("stripe");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Stripe secret key from environment
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

app.use(cors());
app.use(express.json());

app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Test Product",
            },
            unit_amount: 5000, // amount in cents ($50)
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });

    res.json({ id: session.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(4242, () =>
  console.log("🚀 Server running on http://localhost:4242")
);

///////////////////////////////////////////////////
// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const Stripe = require("stripe");
// const Order = require("./models/Order");

// const app = express();
// const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB connection
// mongoose
//   .connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("✅ MongoDB Connected"))
//   .catch((err) => console.error("❌ MongoDB connection error:", err));

// // Route: Create Payment Intent
// app.post("/api/create-payment-intent", async (req, res) => {
//   try {
//     const { items, email } = req.body;

//     // Calculate amount (example: ₹ items.length * 100)
//     const amount =
//       items.reduce((total, item) => total + item.price * item.quantity, 0) *
//       100;

//     const paymentIntent = await stripe.paymentIntents.create({
//       amount,
//       currency: "inr",
//       receipt_email: email,
//       metadata: { integration_check: "accept_a_payment" },
//     });

//     res.status(200).send({
//       clientSecret: paymentIntent.client_secret,
//       amount,
//     });
//   } catch (err) {
//     console.error("Error creating payment intent:", err);
//     res.status(500).send({ error: err.message });
//   }
// });

// // Route: Save Order after successful payment
// app.post("/api/orders", async (req, res) => {
//   try {
//     const { items, amount, email, paymentIntentId } = req.body;

//     const order = new Order({
//       items,
//       amount,
//       email,
//       paymentIntentId,
//     });

//     await order.save();
//     res.status(201).json({ message: "Order saved successfully", order });
//   } catch (err) {
//     console.error("Error saving order:", err);
//     res.status(500).send({ error: err.message });
//   }
// });

// app.get("/api/orders", async (req, res) => {
//   try {
//     const orders = await Order.find();
//     res.status(200).json(orders);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Error fetching orders" });
//   }
// });

// // Start server
// const PORT = process.env.PORT || 4242;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });

/////////seconmd but got error

// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const Order = require("./models/Order");

// dotenv.config();

// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
// const app = express();

// app.use(cors());
// app.use(bodyParser.json()); // parse JSON
// app.use(bodyParser.raw({ type: "application/json" })); // needed for webhook

// // MongoDB connection
// mongoose
//   .connect(process.env.MONGODB_URI)
//   .then(() => console.log("✅ MongoDB connected"))
//   .catch((err) => console.error("❌ MongoDB error:", err));

// // Create checkout session
// app.post("/create-checkout-session", async (req, res) => {
//   const { items } = req.body;
//   if (!items || !Array.isArray(items)) {
//     return res.status(400).json({ error: "Items array is required" });
//   }

//   const lineItems = items.map((item) => ({
//     price_data: {
//       currency: "usd",
//       product_data: { name: item.name },
//       unit_amount: item.price * 100,
//     },
//     quantity: item.quantity,
//   }));

//   try {
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       line_items: lineItems,
//       mode: "payment",
//       success_url: process.env.SUCCESS_URL,
//       cancel_url: process.env.CANCEL_URL,
//       metadata: { cart: JSON.stringify(items) },
//     });

//     res.json({ url: session.url });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Stripe webhook (needs raw body parser)
// app.post(
//   "/webhook",
//   bodyParser.raw({ type: "application/json" }),
//   async (req, res) => {
//     const sig = req.headers["stripe-signature"];

//     let event;
//     try {
//       event = stripe.webhooks.constructEvent(
//         req.body,
//         sig,
//         process.env.STRIPE_WEBHOOK_SECRET
//       );
//     } catch (err) {
//       console.log(`❌ Webhook error: ${err.message}`);
//       return res.status(400).send(`Webhook Error: ${err.message}`);
//     }

//     if (event.type === "checkout.session.completed") {
//       const session = event.data.object;
//       const cart = JSON.parse(session.metadata.cart);

//       const order = new Order({
//         items: cart,
//         amount: session.amount_total / 100, // matches schema
//         email: session.customer_email, // matches schema
//         paymentIntentId: session.payment_intent,
//       });

//       await order.save();
//       console.log("✅ Order saved to MongoDB");
//     }

//     res.json({ received: true });
//   }
// );

// // ✅ Manual API to create orders (for Postman testing)
// app.post("/api/orders", async (req, res) => {
//   try {
//     const { items, amount, email, paymentIntentId } = req.body;
//     const order = new Order({ items, amount, email, paymentIntentId });
//     await order.save();
//     res.status(201).json({ message: "Order saved successfully" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // ✅ Get all orders
// app.get("/api/orders", async (req, res) => {
//   try {
//     const orders = await Order.find().sort({ created: -1 });
//     res.json(orders);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// app.listen(process.env.PORT, () =>
//   console.log(`🚀 Server running on port ${process.env.PORT}`)
// );

///////////////////working first version////////////////////

// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const Order = require("./models/Order");

// // Load env variables before anything else
// dotenv.config();

// // Initialize Stripe after loading env variables
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB connection
// mongoose
//   .connect(process.env.MONGODB_URI)
//   .then(() => console.log("✅ MongoDB connected"))
//   .catch((err) => console.error("❌ MongoDB error:", err));

// // Create checkout session
// app.post("/create-checkout-session", async (req, res) => {
//   const { items } = req.body;

//   const lineItems = items.map((item) => ({
//     price_data: {
//       currency: "usd",
//       product_data: { name: item.name },
//       unit_amount: item.price * 100,
//     },
//     quantity: item.quantity,
//   }));

//   try {
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       line_items: lineItems,
//       mode: "payment",
//       success_url: process.env.SUCCESS_URL,
//       cancel_url: process.env.CANCEL_URL,
//       metadata: { cart: JSON.stringify(items) },
//     });

//     res.json({ url: session.url });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Stripe webhook
// app.post(
//   "/webhook",
//   express.raw({ type: "application/json" }),
//   async (req, res) => {
//     const sig = req.headers["stripe-signature"];

//     let event;
//     try {
//       event = stripe.webhooks.constructEvent(
//         req.body,
//         sig,
//         process.env.STRIPE_WEBHOOK_SECRET
//       );
//     } catch (err) {
//       console.log(`❌ Webhook error: ${err.message}`);
//       return res.status(400).send(`Webhook Error: ${err.message}`);
//     }

//     if (event.type === "checkout.session.completed") {
//       const session = event.data.object;
//       const cart = JSON.parse(session.metadata.cart);

//       const order = new Order({
//         items: cart,
//         paymentIntentId: session.payment_intent,
//         totalAmount: session.amount_total / 100,
//         customerEmail: session.customer_email,
//       });

//       await order.save();
//       console.log("✅ Order saved to MongoDB");
//     }

//     res.json({ received: true });
//   }
// );

// app.listen(process.env.PORT, () =>
//   console.log(`🚀 Server running on port ${process.env.PORT}`)
// );
