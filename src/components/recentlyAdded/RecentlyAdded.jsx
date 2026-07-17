import "./RecentlyAdded.css";
import recentlyAddedProduct1 from "../../assets/recently-added-product-1.png";
import recentlyAddedProduct2 from "../../assets/recently-added-product-2.png";
import recentlyAddedProduct3 from "../../assets/recently-added-product-3.png";
import recentlyAddedProduct4 from "../../assets/recently-added-product-4.png";

const filters = ["Flowers", "Mushrooms", "Concentrate", "Edibles", "Shop All Weed"];

const products = [
  {
    category: "FLOWER",
    title: "2 Oz Deal Watermelon Zkittles + Purple Gushers",
    strain: "Sativa 100%",
    oldPrice: "",
    price: "$80.00",
    unit: "/ gram",
    image: recentlyAddedProduct1,
  },
  {
    category: "FLOWER",
    title: "2 Oz Deal Ahi Tuna + Master Tuna",
    strain: "",
    oldPrice: "$200.00",
    price: "$120.00",
    unit: "",
    image: recentlyAddedProduct2,
  },
  {
    category: "CONCENTRATES",
    title: "Mix And Match Shatter/Budder 28g (4 X 7G)",
    strain: "Indica 70%",
    oldPrice: "$200.00",
    price: "$102.00",
    unit: "",
    image: recentlyAddedProduct3,
  },
  {
    category: "FLOWER",
    title: "2 Oz Deal Watermelon Zkittles + Purple Gushers",
    strain: "Sativa 100%",
    oldPrice: "",
    price: "$80.00",
    unit: "/ gram",
    image: recentlyAddedProduct4,
  },
];

const educationCards = [
  {
    title: "Indica",
    text: "This type of cannabis is commonly taken by those who want to sink into a state of total relaxation in every limb. This reduces stress overall and can take your worries and fatigue away. Because of its relaxing effects, it is suggested to use this type of cannabis at night. It is particularly recommended for people who have trouble sleeping, be it due to insomnia, pain or other associated sleep issues.",
    link: "Shop Indica",
    icon: "moon",
  },
  {
    title: "Sativa",
    text: "Contrary to the deep all-body relaxation that comes with the use of indica strains, sativas are known for increasing the feeling of creativity, enhancing focus and lessening anxiety. This is more of a mind-centered high in terms of how and where you will feel the effects. Given its stimulating nature, it is recommended to use this during the day.",
    link: "Shop Sativa",
    icon: "sun",
  },
  {
    title: "Hybrids",
    text: "Hybrid strains are just that - they combine the head-focused high effects of sativas with the bodily relaxation of indicas. This is ideal for people who really want to sooth any fatigue and worries while also clearing the mind ready to focus fresh on something new. Hybrids are expertly tailored to result in strains with specific effects.",
    link: "Shop Hybrids",
    icon: "leaf",
  },
];

const LeafIcon = ({ icon }) => (
  <div className="recentlyAdded__leafBadge" aria-hidden="true">
    <svg viewBox="0 0 120 120" role="img">
      <path d="M60 18C72 34 76 49 64 72C76 58 91 52 106 54C101 72 88 83 68 85C76 92 84 96 96 97C82 107 68 102 60 89C52 102 38 107 24 97C36 96 44 92 52 85C32 83 19 72 14 54C29 52 44 58 56 72C44 49 48 34 60 18Z" />
      <path d="M60 70V106" />
    </svg>
    {icon === "moon" && <span className="recentlyAdded__leafMini recentlyAdded__leafMini--moon"></span>}
    {icon === "sun" && <span className="recentlyAdded__leafMini recentlyAdded__leafMini--sun"></span>}
  </div>
);

const RecentlyAdded = () => {
  return (
    <section className="recentlyAdded">
      <div className="recentlyAdded__contentWrap">
        <h2 className="recentlyAdded__title">RECENTLY ADDED</h2>

        <div className="recentlyAdded__filterBar">
          <p>Filter by Interest</p>
          <div className="recentlyAdded__filterList" aria-label="Product filters">
            {filters.map((filter, index) => (
              <button
                className={`recentlyAdded__filterButton ${index === 0 ? "recentlyAdded__filterButton--active" : ""}`}
                key={filter}
                type="button"
              >
                {filter}
              </button>
            ))}
          </div>
          <button className="recentlyAdded__showAll" type="button">
            Show All
          </button>
        </div>

        <div className="recentlyAdded__productGrid">
          {products.map((product, index) => (
            <article className="recentlyAdded__productCard" key={`${product.title}-${index}`}>
              <div className="recentlyAdded__imageBox">
                <img src={product.image} alt={product.title} />
              </div>

              <div className="recentlyAdded__productInfo">
                <p className="recentlyAdded__productCategory">{product.category}</p>
                <h3>{product.title}</h3>

                <div className="recentlyAdded__rating">
                  <span>&#9733;</span>
                  <p>4.6/5</p>
                  <i></i>
                  <p>135</p>
                  <em>Reviews</em>
                </div>

                {product.strain && <p className="recentlyAdded__strain">{product.strain}</p>}

                <div className="recentlyAdded__priceRow">
                  {product.oldPrice && <del>{product.oldPrice}</del>}
                  <strong>{product.price}</strong>
                  {product.unit && <span>{product.unit}</span>}
                </div>

                <div className="recentlyAdded__sizes">
                  <button type="button">28g</button>
                  <button type="button">1/2lb</button>
                  <button type="button">1/4lb</button>
                </div>

                <button className="recentlyAdded__cartButton" type="button">
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="recentlyAdded__educationGrid">
          {educationCards.map((card) => (
            <article className="recentlyAdded__educationCard" key={card.title}>
              <div className="recentlyAdded__educationImage">
                <LeafIcon icon={card.icon} />
              </div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <a href="#">{card.link}</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentlyAdded;
