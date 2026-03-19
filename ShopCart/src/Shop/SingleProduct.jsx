import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Pageheader from "../Components/Pageheader";
import Popularposts from "./Popularposts";
import ProductDisplay from "./ProductDisplay";
import Review from "./Review";
import Tags from "./Tags";

const SingleProduct = () => {
  const { id } = useParams();

  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("/src/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  // ✅ Correct product match
  const product = products.find((p) => String(p.id) === id);

  // ✅ Handle single or multiple images
  const images = product
    ? Array.isArray(product.img)
      ? product.img
      : [product.img]
    : [];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (!product) {
    return <p className="text-center mt-5">Loading product...</p>;
  }

  return (
    <div>
      <Pageheader title="OUR SHOP SINGLE" curPage="Shop / Single Product" />

      <div className="shop-single padding-tb aside-bg">
        <div className="container">
          <div className="row justify-content-center">
            {/* LEFT CONTENT */}
            <div className="col-lg-8 col-12">
              <article>
                <div className="product-details">
                  <div className="row align-items-center">
                    {/* IMAGE SLIDER */}
                    <div className="col-md-6 col-12">
                      <div className="product-thumb">
                        <div
                          className="swiper-container pro-single-top"
                          style={{ position: "relative" }}
                        >
                          <img
                            src={images[currentIndex]}
                            alt={product.name}
                            className="item-image"
                            style={{ width: "100%", display: "block" }}
                          />

                          {images.length > 1 && (
                            <>
                              <button
                                className="pro-single-prev"
                                onClick={handlePrev}
                              >
                                <i className="icofont-rounded-left"></i>
                              </button>

                              <button
                                className="pro-single-next"
                                onClick={handleNext}
                              >
                                <i className="icofont-rounded-right"></i>
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* PRODUCT DETAILS */}
                    <div className="col-md-6 col-12">
                      <div className="post-content">
                        <ProductDisplay item={product} />
                      </div>
                    </div>
                  </div>
                </div>

                <Review />
              </article>
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="col-lg-4 col-12">
              <aside className="ps-lg-4">
                <Popularposts />
                <Tags />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
