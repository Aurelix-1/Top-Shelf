import { CiSearch } from "react-icons/ci";
import "./Navbar.css";
import Logo from "../../assets/Logo (9).png";
import { BsBucket } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className="site-line">
        <h5 className="line-text">
          LIMITED OFFER: 30% OFF. Use RABBIT30 at Checkout. 23 : 15 : 00
        </h5>
      </div>
      <div className="site-shelf">
        <img className="navbar-img" src={Logo} alt="" />
        <div className="searchPart">
          <input className="site-input" type="text" placeholder="Search" />
          <button className="site-btn">
            {" "}
            <CiSearch />
          </button>
        </div>
        <h5 className="mini-text">Your Account  |  <BsBucket /></h5>
      </div>
      <div className='SiteLinks'>
        <ul className='links'>
          <li>
            <Link>Shop All</Link>
          </li>
          <li>
            <Link>Flow</Link>
          </li>
          <li>
            <Link>Edibles</Link>
          </li>
          <li>
            <Link>Concentrates</Link>
          </li>
          <li>
            <Link>Mushrooms</Link>
          </li>
          <li>
            <Link>Promotions/Bundles</Link>
          </li>
          <li>
            <Link>Support</Link>
          </li>
          <li>
            <Link>Rewards</Link>
          </li>
          <li>
            <Link>Blog</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
