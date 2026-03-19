import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import paypalimg from "../assets/images/pyment/paypal-img.png";
import visaimg from "../assets/images/pyment/visa-img.png";
import "../Components/modal.css";

const CheckoutPage = () => {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("visa");

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleOrderConfirm = () => {
    alert("Your Order is placed succesfully!");
    localStorage.removeItem("cart");
    navigate(from, { replace: true });
  };

  return (
    <div className="modalCard">
      <Button variant="primary" className="py-2" onClick={handleShow}>
        Proceed to CheckOut
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <h5 className="px-3 mb-3 mt-3">Select Your Payment Method</h5>
        <div className="modal-content">
          <div className="modal-body">
            <div className="tabs mt-3">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item" role="presentation">
                  <a
                    className={`nav-link ${activeTab === "visa" ? "active" : ""}`}
                    id="visa-tab"
                    data-toggle="tab"
                    aria-controls="visa"
                    role="tab"
                    onClick={() => handleTabChange("visa")}
                    href="#visa"
                  >
                    <img src={visaimg} alt="visa img" width="80" />
                  </a>
                </li>

                <li className="nav-item" role="presentation">
                  <a
                    className={`nav-link ${activeTab === "paypal" ? "active" : ""}`}
                    id="paypal-tab"
                    data-toggle="tab"
                    aria-controls="paypal"
                    role="tab"
                    onClick={() => handleTabChange("paypal")}
                    href="#paypal"
                  >
                    <img src={paypalimg} alt="paypal img" width="80" />
                  </a>
                </li>
              </ul>

              <div className="tab-content" id="myTabContent">
                {/* VISA */}
                <div
                  className={`tab-pane fade ${activeTab === "visa" ? "show active" : ""}`}
                  id="visa"
                  role="tabpanel"
                  aria-labelledby="visa-tab"
                >
                  <div className="mt-4 mx-4">
                    <div className="text-center">
                      <h5>Credit Card</h5>
                    </div>

                    <div className="form mt-3">
                      <div className="inputbox">
                        <input type="text" required className="form-control" />
                        <span>Cardholder Name</span>
                      </div>

                      <div className="inputbox">
                        <input type="text" required className="form-control" />
                        <span>Card Number</span> <i className="fa fa-eye"></i>
                      </div>

                      <div className="d-flex flex-row">
                        <div className="inputbox">
                          <input type="text" required className="form-control" />
                          <span>Expiration Date</span> <i className="fa fa-eye"></i>
                        </div>
                        <div className="inputbox">
                          <input type="text" required className="form-control" />
                          <span>CVV</span> <i className="fa fa-eye"></i>
                        </div>
                      </div>

                      <div className="px-5 pay">
                        <button className="btn btn-success btn-block" onClick={handleOrderConfirm}>
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* PAYPAL */}
                <div
                  className={`tab-pane fade ${activeTab === "paypal" ? "show active" : ""}`}
                  id="paypal"
                  role="tabpanel"
                  aria-labelledby="paypal-tab"
                >
                  <div className="mt-4 mx-4">
                    <div className="text-center">
                      <h5>Paypal Account Info</h5>
                    </div>

                    <div className="form mt-3">
                      <div className="inputbox">
                        <input type="text" required className="form-control" />
                        <span>Enter Your Email</span>
                      </div>

                      <div className="inputbox">
                        <input type="text" required className="form-control" />
                        <span>Your Name</span>
                      </div>

                      <div className="d-flex flex-row">
                        <div className="inputbox">
                          <input type="text" required className="form-control" />
                          <span>Extra Info</span>
                        </div>
                        <div className="inputbox">
                          <input type="text" required className="form-control" />
                        </div>
                      </div>

                      <div className="px-5 pay">
                        <button className="btn btn-success btn-block">Add Paypal</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-3 px-4 p-Disclaimer">
                <em>Payment Disclaimer: </em>
                In no event shall payment or partial payment by owner for any material or service
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CheckoutPage;
