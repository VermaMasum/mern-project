// models/order.js
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  items: {
    type: Array,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  paymentIntentId: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);

///////////////second but error free version of server.js/////////////
// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const Order = require("./models/Order.js"); // Adjust path if needed

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// // Connect to MongoDB
// mongoose.connect("mongodb://127.0.0.1:27017/grasshawk", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Test route
// app.get("/", (req, res) => {
//   res.send("API is working");
// });

// // Create order (after payment)
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
//     res.status(201).json({ message: "Order saved successfully" });
//   } catch (error) {
//     console.error("Error saving order:", error);
//     res.status(500).json({ message: "Failed to save order" });
//   }
// });

// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

/////////working first version of Order.js model/////////
// const mongoose = require("mongoose");

// const orderSchema = new mongoose.Schema({
//   items: Array,
//   amount: Number,
//   email: String,
//   paymentIntentId: String,
//   created: {
//     type: Date,
//     default: Date.now,
//   },
// });

// module.exports = mongoose.model("Order", orderSchema);
