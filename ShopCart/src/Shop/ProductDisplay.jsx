import { useState } from "react";
import { Link } from "react-router-dom";

const desc =
  "Energistia an deliver atactica metrics after avsionary Apropria transition enterprise an sources applications emerging psd template.";

const ProductDisplay = ({ item }) => {
  const { id, name, price, seller, ratingsCount, quantity, img } = item;

  const [prequantity, setQuantity] = useState(quantity || 1);
  const [coupon, setCoupon] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");

  const handleDecrease = () => {
    if (prequantity > 1) setQuantity(prequantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(prequantity + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ NEW CART ITEM (always unique)
    const newCartItem = {
      cartId: crypto.randomUUID(), // unique entry
      productId: id,
      name,
      img,
      price,
      seller,
      quantity: prequantity,
      size,
      color,
      coupon,
      addedAt: new Date().toISOString(),
    };

    // ✅ GET EXISTING CART SAFELY
    const existingCart =
      JSON.parse(localStorage.getItem("cart_items")) || [];

    // ✅ ALWAYS APPEND (NO OVERWRITE)
    const updatedCart = [...existingCart, newCartItem];

    localStorage.setItem("cart_items", JSON.stringify(updatedCart));

    console.log("UPDATED CART:", updatedCart);

    // reset fields
    setQuantity(1);
    setSize("");
    setColor("");
    setCoupon("");
  };

  return (
    <div className="product-display">
      {/* PRODUCT INFO */}
      <div className="product-info">
        <h4>{name}</h4>

        <p className="rating">
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>&nbsp;
          <span>{ratingsCount} reviews</span>
        </p>

        <h4>${price}</h4>
        <h6>Seller: {seller}</h6>
        <p>{desc}</p>
      </div>

      {/* PRODUCT FORM */}
      <form onSubmit={handleSubmit} className="form-product-cat-info">
        <div className="select-product-size">
          <select value={size} onChange={(e) => setSize(e.target.value)}>
            <option value="">Select Size</option>
            <option>SM</option>
            <option>MD</option>
            <option>LG</option>
            <option>XL</option>
            <option>XXL</option>
          </select>
        </div>

        <div className="select-product-color">
          <select value={color} onChange={(e) => setColor(e.target.value)}>
            <option value="">Select Color</option>
            <option>Pink</option>
            <option>Ash</option>
            <option>Red</option>
            <option>White</option>
            <option>Blue</option>
            <option>Black</option>
          </select>
        </div>

        {/* QUANTITY + COUPON ROW */}
        <div className="cart-discount-row">
          <div className="cart-plus-minus">
            <div className="dec qtybutton" onClick={handleDecrease}>
              -
            </div>

            <input
              className="cart-plus-minus-box"
              type="text"
              value={prequantity}
              readOnly
            />

            <div className="inc qtybutton" onClick={handleIncrease}>
              +
            </div>
          </div>

          <div className="discount-code">
            <input
              type="text"
              placeholder="Enter Discount Code"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="lab-btn">
          <span>Add to Cart</span>
        </button>

        <Link to="/cart-page" className="lab-btn bg-primary">
          <span>Check Out</span>
        </Link>
      </form>
    </div>
  );
};

export default ProductDisplay;
