import "./WhatMakes.css";
import { contacts } from "../../mock";

const WhatMakes = () => {
  return (
    <div className="WM_container">
      <div className="What_Mis_title">
        <h2>
          WHAT MAKES US THE <span>#1</span> ONLINE MARIJUANA DISPENSARY IN
          CANADA?
        </h2>
        <p>
          When it comes to what makes us the foremost online marijuana
          dispensary in Canada, we could wax lyrical about our positive
          qualities. Instead, to make this information clearer, we’ve
          highlighted the six prioritized features that we feel makes us a cut
          above the rest.
        </p>
      </div>

      <div className="our_services">
        {contacts.map((item) => {
          return (
            <div key={item.id} className="service">
              <img src={item.image} alt={item.image} />
              <div className="service_desc">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhatMakes;
