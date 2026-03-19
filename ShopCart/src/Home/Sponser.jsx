import React, { useEffect, useRef, useState } from "react";

const sponsorList = [
  { imgUrl: "/src/assets/images/sponsor/01.png" },
  { imgUrl: "/src/assets/images/sponsor/02.png" },
  { imgUrl: "/src/assets/images/sponsor/03.png" },
  { imgUrl: "/src/assets/images/sponsor/04.png" },
  { imgUrl: "/src/assets/images/sponsor/05.png" },
  { imgUrl: "/src/assets/images/sponsor/06.png" },
];

const Sponser = () => {
  const sliderRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  // 🔹 Responsive items per view
  const updateItemsPerView = () => {
    if (window.innerWidth >= 1024) {
      setItemsPerView(3);
    } else if (window.innerWidth >= 768) {
      setItemsPerView(2);
    } else {
      setItemsPerView(1);
    }
  };

  // 🔹 Set items per view on load & resize
  useEffect(() => {
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  // 🔹 Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) =>
        prev >= sponsorList.length - itemsPerView ? 0 : prev + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [itemsPerView]);

  // 🔹 Apply sliding animation
  useEffect(() => {
    if (sliderRef.current) {
      const itemWidth =
        sliderRef.current.children[0].offsetWidth + 40; // 40px gap
      sliderRef.current.style.transform = `translateX(-${
        index * itemWidth
      }px)`;
      sliderRef.current.style.transition = "0.6s ease";
    }
  }, [index]);

  return (
    <div className="sponser-section section-bg">
      <div className="container">
        <div
          className="sponser-slider"
          style={{ overflow: "hidden", width: "100%" }}
        >
          <div
            ref={sliderRef}
            style={{
              display: "flex",
              gap: "40px",
              alignItems: "center",
            }}
          >
            {sponsorList.map((item, i) => (
              <div
                key={i}
                style={{
                  minWidth:
                    itemsPerView === 3
                      ? "33.33%"
                      : itemsPerView === 2
                      ? "50%"
                      : "100%",
                  textAlign: "center",
                }}
              >
                <img
                  src={item.imgUrl}
                  alt="sponsor"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponser;
