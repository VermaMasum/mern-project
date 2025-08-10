// import React, { useState } from "react";
// import "./App.css";

// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Products from "./components/Products";
// import ProductDetails from "./components/ProductDetails";
// import Pricing from "./components/Pricing";
// import Cart from "./components/Cart";
// // import Technology from "./components/Technology";
// // import Contact from "./components/Contact";

// function App() {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     const itemExists = cartItems.find((item) => item.name === product.name);
//     if (itemExists) {
//       setCartItems(
//         cartItems.map((item) =>
//           item.name === product.name
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         )
//       );
//     } else {
//       setCartItems([...cartItems, { ...product, quantity: 1 }]);
//     }
//   };

//   const removeFromCart = (productName) => {
//     setCartItems(cartItems.filter((item) => item.name !== productName));
//   };

//   const updateQuantity = (productName, amount) => {
//     setCartItems(
//       cartItems.map((item) =>
//         item.name === productName
//           ? { ...item, quantity: Math.max(1, item.quantity + amount) }
//           : item
//       )
//     );
//   };

//   const clearCart = () => setCartItems([]);

//   return (
//     <>
//       <Navbar
//         cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
//       />
//       <main style={{ paddingTop: "80px" }}>
//         <Hero />
//         <About />
//         <Products addToCart={addToCart} />
//         <ProductDetails />
//         <Pricing />
//         <Cart
//           items={cartItems}
//           removeFromCart={removeFromCart}
//           updateQuantity={updateQuantity}
//           clearCart={clearCart}
//         />
//         {/* <Technology />
//         <Contact /> */}
//       </main>
//     </>
//   );
// }

// export default App;
//////////////////////////////////////////////////working below one

// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Products from "./components/Products";
// import ProductDetails from "./components/ProductDetails";
// import Pricing from "./components/Pricing";
// import Cart from "./components/Cart";
// import Checkout from "./components/Checkout";
// import Success from "./components/success";
// import Cancel from "./components/cancel";
// import Contact from "./components/Contact";
// import MoleTrapInstructions from "./components/MoleTrapInstructions";
// import FrenchContent from "./components/FrenchContent";
// import LanguageToggle from "./components/LanguageToggle";

// // import WelcomePage from "./components/WelcomePage";

// function App() {
//   const [cartItems, setCartItems] = React.useState([]);
//   const [language, setLanguage] = useState("en");

//   const addToCart = (product) => {
//     const existing = cartItems.find((item) => item.name === product.name);
//     if (existing) {
//       setCartItems(
//         cartItems.map((item) =>
//           item.name === product.name
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         )
//       );
//     } else {
//       setCartItems([...cartItems, { ...product, quantity: 1 }]);
//     }
//   };

//   const removeFromCart = (name) => {
//     setCartItems(cartItems.filter((item) => item.name !== name));
//   };

//   const updateQuantity = (name, amount) => {
//     setCartItems(
//       cartItems.map((item) =>
//         item.name === name
//           ? { ...item, quantity: Math.max(1, item.quantity + amount) }
//           : item
//       )
//     );
//   };

//   const clearCart = () => setCartItems([]);

//   return (
//     <Router>
//       <Navbar
//         cartCount={cartItems.reduce((a, b) => a + b.quantity, 0)}
//         language={language}
//         setLanguage={setLanguage}
//       />
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               {language === "fr" ? (
//                 <FrenchContent />
//               ) : (
//                 <>
//                   <Hero />
//                   <About />
//                   <MoleTrapInstructions />
//                   <Pricing />
//                   <Products addToCart={addToCart} />
//                   <Cart
//                     items={cartItems}
//                     removeFromCart={removeFromCart}
//                     updateQuantity={updateQuantity}
//                     clearCart={clearCart}
//                   />
//                   <Contact />
//                   <li>
//                     <div style={{ background: "yellow", padding: "5px" }}>
//                       TOGGLE TEST
//                     </div>
//                   </li>
//                 </>
//               )}
//             </>
//           }
//         />
//         <Route path="/success" element={<Success />} />
//         <Route path="/cancel" element={<Cancel />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Pricing from "./components/Pricing";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Success from "./components/success";
import Cancel from "./components/cancel";
import Contact from "./components/Contact";
import MoleTrapInstructions from "./components/MoleTrapInstructions";
import FrenchContent from "./components/FrenchContent";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [language, setLanguage] = useState("en");

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.name === product.name);
      if (existing) {
        return prev.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (name) => {
    setCartItems((prev) => prev.filter((item) => item.name !== name));
  };

  const updateQuantity = (name, amount) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.name === name
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const clearCart = () => setCartItems([]);

  return (
    <Router>
      <Navbar
        cartCount={cartItems.reduce((total, item) => total + item.quantity, 0)}
        language={language}
        setLanguage={setLanguage}
      />

      <Routes>
        <Route
          path="/"
          element={
            language === "fr" ? (
              <FrenchContent />
            ) : (
              <>
                <Hero />
                <About />
                <MoleTrapInstructions />
                <Pricing />
                <Products addToCart={addToCart} />
                <Cart
                  items={cartItems}
                  removeFromCart={removeFromCart}
                  updateQuantity={updateQuantity}
                  clearCart={clearCart}
                />
                <Contact />
              </>
            )
          }
        />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
