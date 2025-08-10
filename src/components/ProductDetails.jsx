// import React from "react";
// import "./ProductDetails.css";
// import trapImage from "../assets/trap.png";

// const ProductDetails = () => {
//   return (
//     <section className="product-details-section" id="product-details">
//       <div className="product-details-container">
//         <h2>How to Use the Mole Trap</h2>
//         <img
//           src={trapImage}
//           alt="Mole Trap Instructions"
//           className="product-steps-image"
//         />
//         <div className="step-guide">
//           <h3>1. Setting the Trap</h3>
//           <p>
//             Locate the mole run. Press down the footplate to arm the trap. Place
//             the trap with the jaws centered over the tunnel. Step down the
//             handles to embed the trap and trigger it.
//           </p>

//           <h3>2. Moving the Trap</h3>
//           <p>
//             Relocate the trap if there are no moles caught in 2-3 days. Ensure
//             the trap is reset before reuse.
//           </p>

//           <h3>3. Removing the Mole</h3>
//           <p>
//             Pull the handles up carefully to remove the mole and reset the trap
//             for continued use.
//           </p>

//           <h3>4. Safety Tips</h3>
//           <p>
//             Always keep hands clear of the jaws. Store out of reach of children.
//             Use gloves when handling the trap.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductDetails;
import React from "react";
import "./ProductDetails.css";
import trapImage from "../assets/trap.png"; // make sure this path is correct

const ProductDetails = () => {
  return (
    <section className="product-details-section">
      <div className="product-details-wrapper">
        {/* Left - Image */}
        <div className="product-image">
          <img src={trapImage} alt="Mole Trap" />
        </div>

        {/* Right - Steps */}
        <div className="product-info">
          <h2>How to Use the Mole Trap</h2>

          <div className="step">
            <h3>1. Setting the Trap</h3>
            <p>
              Locate the mole run. Press down the footplate to arm the trap.
              Place the trap with the jaws centered over the tunnel. Step down
              the handles to embed the trap and trigger it.
            </p>
          </div>

          <div className="step">
            <h3>2. Moving the Trap</h3>
            <p>
              Relocate the trap if there are no moles caught in 2-3 days. Ensure
              the trap is reset before reuse.
            </p>
          </div>

          <div className="step">
            <h3>3. Removing the Mole</h3>
            <p>
              Pull the handles up carefully to remove the mole and reset the
              trap for continued use.
            </p>
          </div>

          <div className="step">
            <h3>4. Safety Tips</h3>
            <p>
              Always keep hands clear of the jaws. Store out of reach of
              children. Use gloves when handling the trap.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
