import "./CustomerTesti.css";

const reviews = [
  {
    name: "Vikki Starr",
    date: "January 15, 2023",
    dateTime: "2023-01-15",
    text: "Absolutely love TopShelfBC; affordable on any budget and such fast delivery, straight to my door. I recommend them to all my friends and family for their 420 needs.",
    avatar: "VS",
    tone: "green",
  },
  {
    name: "Terry Baskey",
    date: "January 5, 2023",
    dateTime: "2023-01-05",
    text: "Best damn place to buy your cannabis at great prices",
    avatar: "TB",
    tone: "gold",
  },
  {
    name: "Jasmin Lee",
    date: "January 3, 2023",
    dateTime: "2023-01-03",
    text: "Fast shipping, friendly support, and the products always arrive fresh. TopShelfBC has become my first choice.",
    avatar: "JL",
    tone: "brown",
  },
];

const Stars = () => (
  <div className="customerTesti__stars" aria-label="5 star rating">
    <span>&#9733;</span>
    <span>&#9733;</span>
    <span>&#9733;</span>
    <span>&#9733;</span>
    <span>&#9733;</span>
  </div>
);

const CustomerTesti = () => {
  return (
    <section className="customerTesti">
      <div className="customerTesti__container">
        <h2 className="customerTesti__title">CUSTOMER TESTIMONIALS</h2>

        <div className="customerTesti__slider">
          <button className="customerTesti__arrow customerTesti__arrow--left" aria-label="Previous testimonial">
            <span aria-hidden="true">&#8249;</span>
          </button>

          <div className="customerTesti__track">
            <article className="customerTesti__ratingCard">
              <h3>VOTED BEST ONLINE DISPENSARY IN CANADA</h3>

              <div className="customerTesti__ratingLine"></div>

              <p className="customerTesti__google">Google</p>
              <p className="customerTesti__grade">EXCELLENT</p>

              <div className="customerTesti__reviewCount">
                <Stars />
                <span></span>
                <p>on 135 Reviews</p>
              </div>
            </article>

            {reviews.map((review) => (
              <article className="customerTesti__card" key={review.name}>
                <div className="customerTesti__person">
                  <div className={`customerTesti__avatar customerTesti__avatar--${review.tone}`}>
                    {review.avatar}
                  </div>
                  <p>{review.name}</p>
                </div>

                <div className="customerTesti__divider"></div>
                <Stars />
                <p className="customerTesti__text">{review.text}</p>
                <time dateTime={review.dateTime}>{review.date}</time>
              </article>
            ))}
          </div>

          <button className="customerTesti__arrow customerTesti__arrow--right" aria-label="Next testimonial">
            <span aria-hidden="true">&#8250;</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerTesti;
