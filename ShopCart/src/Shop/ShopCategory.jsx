import Data from "../products.json";

const ShopCategory = ({
  filterItem,
  setItem,
  menuItems,
  setProducts,
  selectedCategory,
  setSelectedCategory,
}) => {
  
  return (
    <>
      <div className="widget-header">
        <h5 className="ms-2">All Categories</h5>
      </div>

      <div>
        <button
          onClick={() => {
            setProducts(Data);
            setItem(Data);
            setSelectedCategory("All"); // ✅ highlight All
          }}
          className={`m-2 ${selectedCategory === "All" ? "bg-warning" : ""}`}
        >
          All
        </button>

        {menuItems.map((Val, id) => (
          <button
            key={id}
            className={`m-2 ${selectedCategory === Val ? "bg-warning" : ""}`}
            onClick={() => {
              filterItem(Val);
              setSelectedCategory(Val); // ✅ highlight category
            }}
          >
            {Val}
          </button>
        ))}
      </div>
    </>
  );
};

export default ShopCategory;
