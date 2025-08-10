// src/components/Checkout.jsx
import React from "react";
import axios from "axios";

const Checkout = ({ cartItems }) => {
  const handleCheckout = async () => {
    try {
      // Call backend to create a Checkout Session
      const response = await axios.post(
        "http://localhost:4242/create-checkout-session",
        { items: cartItems }
      );

      // Redirect to Stripe Checkout URL returned by backend
      window.location.href = response.data.url;
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Error creating checkout session. Please try again.");
    }
  };

  return (
    <button onClick={handleCheckout} className="checkout-btn">
      Place Order & Pay with Stripe
    </button>
  );
};

export default Checkout;
