import { useState } from "react";
import { Link } from "react-router-dom";
import Selectedcategory from "../Components/Selectedcategory";
import Productdata from "../products.json";

const title = (
  <h2>
    Search Your One From <span>Thousand</span> of Products
  </h2>
);

const desc = "We have the largest collection of products";
const bannerlist = [
  {
    iconName: "iconfont-users-alt-4",
    text: "1.5 Million Customers",
  },
  {
    iconName: "iconfont-notification",
    text: "More then 2000 Merchant",
  },
  {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
  },
];

const Banner = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filterProducts, setfilterProducts] = useState(Productdata);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);

    // Move filtering here so `searchTerm` is defined and filtering runs on input change
    const filtered = Productdata.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setfilterProducts(filtered);
  };

  return (
    <div className="banner-section style-4">
      <div className="container">
        <div className="banner-content">
          {title}
          <form>
            <Selectedcategory select={"all"} />
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search your product"
              value={searchInput}
              onChange={handleSearch}
            />
            <button type="submit">
              <i className="icofont-search"></i>
            </button>
          </form>

          <p>{desc}</p>

          {/* 🔹 Banner feature list */}
          <ul className="lab-ul banner-features">
            {bannerlist.map((item, index) => (
              <li key={index}>
                <i className={item.iconName}></i>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>

          <ul className="lab-ul">
            {searchInput &&
              filterProducts.map((product, i) => (
                <li key={i}>
                  <Link to={`/shop ${product.id}`}>{product.name}</Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
