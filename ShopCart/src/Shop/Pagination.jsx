const Pagination = ({
  productsPerPage,
  totalProducts,
  paginate,
  activePage,
}) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePrev = () => {
    if (activePage > 1) paginate(activePage - 1);
  };

  const handleNext = () => {
    if (activePage < totalPages) paginate(activePage + 1);
  };

  return (
    <ul className="default-pagination lab-ul">

      {/* PREVIOUS ICON BUTTON */}
      <li className="page-item">
        <button
          onClick={handlePrev}
          disabled={activePage === 1}
          className="bg-transparent"
        >
          <i className="icofont-rounded-left"></i>
        </button>
      </li>

      {/* PAGE NUMBERS */}
      {pageNumbers.map((number) => (
        <li
          key={number}
          className={`page-item ${number === activePage ? "bg-warning" : ""}`}
        >
          <button onClick={() => paginate(number)} className="bg-transparent">
            {number}
          </button>
        </li>
      ))}

      {/* NEXT ICON BUTTON */}
      <li className="page-item">
        <button
          onClick={handleNext}
          disabled={activePage === totalPages}
          className="bg-transparent"
        >
          <i className="icofont-rounded-right"></i>
        </button>
      </li>

    </ul>
  );
};

export default Pagination;
