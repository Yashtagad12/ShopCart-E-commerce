import { useState } from "react";
import Pageheader from "../Components/Pageheader";
import Data from "../products.json";

import Pagination from "./Pagination";
import Productcards from "./Productcards";
import Search from "./Search";
import ShopCategory from "./ShopCategory";
import Popularposts from "./Popularposts";
import Tags from "./Tags";

const showResults = "Showing 01-12 of 139 Results";

const Shop = () => {
  const [Gridlist, setGridlist] = useState(true);

  const [products, setproducts] = useState(Data);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const indexofLastProduct = currentPage * productsPerPage;
  const indexofFirstProduct = indexofLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexofFirstProduct,
    indexofLastProduct
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // CATEGORY LOGIC
  const [selectedCategory, setSelectedCategory] = useState("All");

  const menuItems = [...new Set(Data.map((val) => val.category))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => newVal.category === curcat);
    setSelectedCategory(curcat); // ✅ highlight category
    setproducts(newItem);
    setCurrentPage(1); // optional: reset page on filter
  };

  return (
    <div>
      <Pageheader title="Our Shop Page" curPage="Shop" />
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="shop-title d-flex flex-wrap justify-content-between">
                  <p>{showResults}</p>
                  <div
                    className={`product-view-mode ${
                      Gridlist ? "gridActive" : "listActive"
                    }`}
                  >
                    <a className="grid" onClick={() => setGridlist(!Gridlist)}>
                      <i className="icofont-ghost"></i>
                    </a>
                    <a className="list" onClick={() => setGridlist(!Gridlist)}>
                      <i className="icofont-listine-dots"></i>
                    </a>
                  </div>
                </div>

                <div>
                  <Productcards
                    Gridlist={Gridlist}
                    products={currentProducts}
                  />
                </div>

                <Pagination
                  productsPerPage={productsPerPage}
                  totalProducts={products.length}
                  paginate={paginate}
                  activePage={currentPage}
                />
              </article>
            </div>

            <div className="col-lg-4 col-12">
              <aside>
                <Search products={products} />

                <ShopCategory
                  filterItem={filterItem}
                  setItem={setproducts}
                  menuItems={menuItems}
                  setProducts={setproducts}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory} // ✅ Add this
                />
                <Popularposts/>
                <Tags/>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
