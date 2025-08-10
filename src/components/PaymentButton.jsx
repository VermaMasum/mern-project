import React from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "sk_test_51RsUXN37DKORRJhXXRKGHr45dq5mwLOa1uWs4o2VvW04n1SbdZ7zpBee7Oy6swgXvat1MTIO23FVaS9jt8ub0YLS00JecgYnKn"
);

export default function PaymentButton() {
  const handleClick = async () => {
    const res = await fetch("http://localhost:4242/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    const { id } = await res.json();
    const stripe = await stripePromise;
    await stripe.redirectToCheckout({ sessionId: id });
  };

  return <button onClick={handleClick}>Pay $50</button>;
}
