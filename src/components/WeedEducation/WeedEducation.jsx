import "./WeedEducation.css";
import { Link } from "react-router-dom";
import { weedEdu } from "../../mock";

const WeedEducation = () => {
  return (
    <div className="Education-container">
      <div className="WeedEdu">
        <div className="titleBox">
          <h2>WEED EDUCATION</h2>
          <Link to="/weed-education">Show All</Link>
        </div>
        <div className="news">
          {weedEdu.map((item) => {
            return (
              <div key={item.id} className="newsBox">
                <img src={item.image} alt={item.image} />
                <p>{item.data}</p>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <Link>{item.link}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WeedEducation;
