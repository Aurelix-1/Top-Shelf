import React, { useState } from "react";
// import { FaLeaf } from "react-icons/fa";
// import { FaCcMastercard, FaCcVisa, FaBitcoin } from "react-icons/fa";
// import { SiMonero } from "react-icons/si";
import "./Footer.css";

const quickLinksLeft = [
  "Track Your Order",
  "Shop All",
  "Flower",
  "Edibles",
  "Concentrates",
  "Refunds",
];

const quickLinksRight = [
  "Mushrooms",
  "Promotions / Bundles",
  "Support",
  "Reward",
  "Blog",
  "Shipping Faq",
];

const moreLeft = [
  "Buy weed online in Canada",
  "Buy weed online in New Brunswick",
  "Buy weed online in Prince Edward Island",
  "Buy weed online in Northwest Territories",
  "Buy weed online in Saskatchewan",
];

const moreRight = [
  "Buy weed online in Manitoba",
  "Buy weed online in Quitebec",
  "Buy weed online in British Columbia",
  "Buy weed online in Ontario",
  "Buy weed online in Alberta",
];

function Footer() {
  const [email, setEmail] = useState("");

  const handleReveal = () => {
    console.log("Reveal coupon for:", email);
  };

  return (
    <footer className="footer">
      <div className="coupon-card">
        <h2 className="coupon-title">
          UNLOCK 20% OFF YOUR
          <br />
          FIRST ORDER
        </h2>
        <p className="coupon-subtitle">
          Reveal coupon code by entering your email
        </p>
        <hr className="coupon-divider" />
        <div className="coupon-form">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="coupon-input"
          />
          <button className="coupon-btn" onClick={handleReveal}>
            Reveal coupon
          </button>
        </div>
      </div>

      <div className="footer-main">
        <div className="footer-brand">
          <div className="footer-logo">
            {/* <FaLeaf className="footer-logo-icon" /> */}
            <div>
              <span className="footer-logo-title">TOP SHELF</span>
              <span className="footer-logo-subtitle">BRITISH COLUMBIA</span>
            </div>
          </div>
          <p className="footer-desc">
            #1 Canadian top rated online dispensary that meets the customers
            needs in every single medical marijuana aspect. The team here at
            TopShelfBC is heavily involved in the Canadian cannabis industry for
            over 15 years. We strive to provide the top quality products,
            service and care at the lowest prices you'll ever find.
          </p>
        </div>

        <div className="footer-links">
          <h3 className="footer-heading">QUICK LINK</h3>
          <div className="footer-columns">
            <ul>
              {quickLinksLeft.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <ul>
              {quickLinksRight.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <h3 className="footer-heading">CONTACT US</h3>
          <p className="footer-contact">info@topshelfbc.cc</p>

          <h3 className="footer-heading">MORE</h3>
          <div className="footer-columns">
            <ul>
              {moreLeft.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <ul>
              {moreRight.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="footer-payments">
            {/* <FaCcMastercard className="payment-icon mastercard" />
            <FaCcVisa className="payment-icon visa" />
            <FaBitcoin className="payment-icon bitcoin" />
            <SiMonero className="payment-icon monero" /> */}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2022 Top Shelf BC. All Rights Reserved.</span>
        <div className="footer-bottom-links">
          <span>Out Of Stock</span>
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
