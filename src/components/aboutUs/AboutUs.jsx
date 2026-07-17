import "./AboutUs.css";
import img from "../../assets/Button.png";
import imgg from "../../assets/Button (1).png";
import imggg from "../../assets/Button (2).png";

const AboutUs = () => {
  return (
    <div className='cards'>
      <div className='cardOne'>
        <img src={img} alt="car" />
        <div className="paragraphs">
          <h2>Reliable Shipping</h2>
          <p>Green Society provides Canada Post Xpress Shipping right to your doorstep! You can also opt in for shipping insurance. For orders over $149, shipping is free!</p>
        </div>
      </div>
      <div className='cardTwo'>
        <img src={imgg} alt="" />
        <div className="paragraphs">
          <h2>You're Safe With Us</h2>
          <p>Our secure payment system accepts the most common forms of payments making the checkout process quicker! The payments we accept are debit, all major credit cards, and cryptocurrency.</p>
        </div>
      </div>
      <div className='cardThree'>
        <img src={imggg} alt="" />
        <div className="paragraphs">
          <h2>Best Quality & Pricing</h2>
          <p>Here at Green Society, we take pride in the quality of our products and service. Our prices are set to ensure you receive your medication at a reasonable price and safely</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
