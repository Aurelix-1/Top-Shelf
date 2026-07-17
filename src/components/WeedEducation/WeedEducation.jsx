import "./WeedEducation.css";
import { weedEdu } from "../../mock";

const WeedEducation = () => {
  return (
    <section className="Education-container">
      <div className="WeedEdu">
        <div className="titleBox">
          <h2>WEED EDUCATION</h2>
          <a href="#" className="newsLink">
            Show All
          </a>
        </div>
        <div className="news">
          {weedEdu.map((item) => {
            return (
              <div key={item.id} className="newsBox">
                <img src={item.image} alt={item.title} />
                <p className="newData">{item.data}</p>
                <h3>{item.title}</h3>
                <p className="newDesc">{item.desc}</p>
                <a href="#" className="newsLink">
                  {item.link}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WeedEducation;
