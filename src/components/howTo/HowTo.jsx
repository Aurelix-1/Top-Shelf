import "./HowTo.css";

const HowTo = () => {
  return (
    <section className="howto">
      <div className="howto-container">
        <div className="howto-header">
          <h2 className="howto-title">
            HOW TO ORDER WEED ONLINE <br />
            FROM TOP SHELF BC - MAIL <br />
            ORDER MARIJUANA
          </h2>

          <p className="howto-description">
            Ordering weed online from Top Shelf BC is easy. We are proud to have
            made the process accessible across multiple platforms and simple to
            understand, meaning that more people can come to us to buy their
            cannabis products online.
          </p>
        </div>

        <div className="howto-grid">
          <div className="howto-item">
            <span className="howto-step">1</span>

            <div className="howto-icon">
              <img src="./health.png" alt="Register" />
            </div>

            <h3 className="howto-item-title">REGISTER</h3>

            <p className="howto-item-text">
              Sign up for an account with us. This is quick and simple. We don’t
              require any more details from you than the bare minimum needed for
              you to place an order and get your product delivered.
            </p>
          </div>

          <div className="howto-item">
            <span className="howto-step">2</span>

            <div className="howto-icon">
              <img src="./shop.png" alt="Shop" />
            </div>

            <h3 className="howto-item-title">SHOP</h3>

            <p className="howto-item-text">
              Decide on what you want to purchase. We stock a wide range of
              edibles,flowers , concentrates and mushrooms there is bound to be
              something for everyone.
            </p>
          </div>

          <div className="howto-item">
            <span className="howto-step">3</span>

            <div className="howto-icon">
              <img src="./payment.png" alt="Payment" />
            </div>

            <h3 className="howto-item-title">MAKE PAYMENT</h3>

            <p className="howto-item-text">
              Pay securely. Our site boasts sturdy protection certificates to
              keep your card details and related data safe.
            </p>
          </div>

          <div className="howto-item">
            <span className="howto-step">4</span>

            <div className="howto-icon">
              <img src="./relax.png" alt="Relax" />
            </div>

            <h3 className="howto-item-title">RELAX</h3>

            <p className="howto-item-text">
              Your product will be packaged discretely and shipped by Canada
              Post Xpresspost. We will provide you with a tracking number so
              then you can follow your mail order marijuana every step of the
              way.
            </p>
          </div>
        </div>

        <button className="howto-button">Choose your Weed</button>
      </div>
    </section>
  );
};

export default HowTo;
