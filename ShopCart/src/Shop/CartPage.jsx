import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pageheader from "../Components/Pageheader";
import deImgUrl from "../assets/images/shop/del.png";
import CheckoutPage from "./CheckoutPage";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  // Load Cart on Mount
  useEffect(() => {
    const storedCartItems =
      JSON.parse(localStorage.getItem("cart_items")) || [];
    setCartItems(storedCartItems);
  }, []);

  const updateLocalStorage = (items) => {
    localStorage.setItem("cart_items", JSON.stringify(items));
  };

  const handleIncrease = (cartId) => {
    const updated = cartItems.map((item) =>
      item.cartId === cartId ? { ...item, quantity: item.quantity + 1 } : item,
    );
    setCartItems(updated);
    updateLocalStorage(updated);
  };

  const handleDecrease = (cartId) => {
    const updated = cartItems.map((item) =>
      item.cartId === cartId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item,
    );
    setCartItems(updated);
    updateLocalStorage(updated);
  };

  const handleRemoveItem = (cartId) => {
    const updated = cartItems.filter((item) => item.cartId !== cartId);
    setCartItems(updated);
    updateLocalStorage(updated);
  };

  const calculateTotal = (item) => item.price * item.quantity;

  const cartSubtotal = cartItems.reduce(
    (sum, item) => sum + calculateTotal(item),
    0,
  );

  return (
    <div>
      <Pageheader title="Shop Cart" curPage="Cart Page" />

      <div className="shop-cart padding-tb">
        <div className="container">
          <div className="section-wrapper">
            <div className="cart-top">
              <table>
                <thead>
                  <tr>
                    <th className="cart-product">Product</th>
                    <th className="cart-price">Price</th>
                    <th className="cart-quantity">Quantity</th>
                    <th className="cart-toprice">Total</th>
                    <th className="cart-edit">Edit</th>
                  </tr>
                </thead>

                <tbody>
                  {cartItems.length === 0 && (
                    <tr>
                      <td
                        colSpan="5"
                        style={{ textAlign: "center", padding: "20px" }}
                      >
                        No items in cart
                      </td>
                    </tr>
                  )}

                  {cartItems.map((item) => (
                    <tr key={item.cartId}>
                      <td className="cart-product">
                        <div className="p-thumb">
                          <img
                            src={item.img}
                            alt={item.name}
                            style={{ width: "60px" }}
                          />
                        </div>
                        <span>{item.name}</span>
                      </td>

                      <td className="cart-price">${item.price}</td>

                      <td className="cart-quantity">
                        <div className="cart-plus-minus">
                          <button
                            className="dec qtybutton"
                            onClick={() => handleDecrease(item.cartId)}
                          >
                            {" "}
                            -{" "}
                          </button>
                          <input
                            type="text"
                            readOnly
                            value={item.quantity}
                            className="cart-plus-minus-box"
                          />
                          <button
                            className="inc qtybutton"
                            onClick={() => handleIncrease(item.cartId)}
                          >
                            {" "}
                            +{" "}
                          </button>
                        </div>
                      </td>

                      <td className="cart-toprice">${calculateTotal(item)}</td>

                      <td className="cart-edit">
                        <a onClick={() => handleRemoveItem(item.cartId)}>
                          <img src={deImgUrl} alt="delete icon" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {cartItems.length > 0 && (
              <div className="cart-total mt-4">
                <h4>Cart Summary</h4>
                <p>Subtotal: ${cartSubtotal}</p>
                <h5>Total: ${cartSubtotal}</h5>

                <Link to="/" className="lab-btn proceed-btn bg-primary mt-3">
                  <span>Proceed to Checkout</span>
                </Link>
              </div>
            )}

            <div className="cart-bottom">
              <div className="cart-checkout-box">
                <form className="coupon">
                  <input
                    className="cart-page-input-text"
                    type="text"
                    name="coupon"
                    id="coupon"
                    placeholder="Coupon Code..."
                  />
                  <input type="submit" value="Apply Coupon" />
                </form>

                <form className="cart-checkout">
                  <input type="submit" value="Update Cart" />
                  <div>
                    <CheckoutPage/>
                  </div>
                </form>
              </div>
            </div>

            <div className="shiping-box">
              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="calculate-shiping">
                    <h3>Calculate Shiping</h3>
                    <div className="outline-select">
                      <select>
                        <option value="uk">United Kingdom (UK)</option>
                        <option value="ind">India</option>
                        <option value="bang">Bangladesh</option>
                        <option value="aus">Australia</option>
                        <option value="np">Nepal</option>
                      </select>
                    </div>
                    <div className="outline-select shipping-select">
                      <select>
                        <option value="uk">London</option>
                        <option value="ind">New Delhi</option>
                        <option value="bang">Dhaka</option>
                        <option value="aus">Sydney</option>
                        <option value="np">Katmandu</option>
                      </select>
                    </div>
                    <input
                      type="text"
                      name="postalCode"
                      id="postalCode"
                      placeholder="Postcode/ZIP *"
                      className="cart-page input-text"
                    />
                    <button type="submit" className="blue-btn">Update Address</button>
                  </div>
                </div>

                <div className="col-md-6 col-12">
                  <div className="cart-overview">
                    <h3>Cart Totals</h3>
                    <ul className="lab-ul cart-totals">
                      <li>
                        <span className="pull-left">Cart Subtotal</span>
                        <p className="pull-right">${cartSubtotal}</p>
                      </li>
                      <li>
                        <span className="pull-left">Shipping and Handling</span>
                        <p className="pull-right">Free Shipping</p>
                      </li>
                      <li>
                        <span className="pull-left">Order Total</span>
                        <p className="pull-right">${cartSubtotal}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
