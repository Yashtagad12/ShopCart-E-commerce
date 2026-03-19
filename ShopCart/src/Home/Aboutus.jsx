import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InstructorImg from "/src/assets/images/instructor/01.png";

const subTitle = "Why Choose Us";
const title = "Become a Merchant";
const desc =
  "Take courses on your any device with our app & learn all about business what you want. Just download & install & start to learn";
const btnText = "Apply Now";

const countList = [
  {
    iconName: "icofont-users-alt-4",
    count: "12600",
    text: "Marchant Enrolled",
  },
  { 
    iconName: "icofont-graduate-alt",
    count: "30",
    text: "Certified Courses" },
  {
    iconName: "icofont-notification",
    count: "100",
    text: "Rewards and GitCards",
  },
];

const Aboutus = () => {
  const [counterValues, setCounterValues] = useState(countList.map(() => 0));

  useEffect(() => {
    countList.forEach((item, index) => {
      let start = 0;
      const end = parseInt(item.count);
      const speed = Math.ceil(end / 100);

      const timer = setInterval(() => {
        start += speed;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }

        setCounterValues((prev) => {
          const newValues = [...prev];
          newValues[index] = start;
          return newValues;
        });
      }, 20);
    });
  }, []);

  return (
    <div className="instructor-section style-2 padding-tb section-bg-ash">
      <div className="container">
        <div className="section-wrapper">
          <div className="row g-4 align-items-center justify-content-center row-cols-1 row-cols-md-2 row-cols-xl-3">
            <div className="col">
              {countList.map((val, i) => (
                <div key={i} className="count-item">
                  <div className="count-inner">
                    <div className="count-icon">
                      <i className={val.iconName}></i>
                    </div>
                    <div className="count-content">
                      <h2>
                        <span className="count">{counterValues[i]}</span>
                        <span>+</span>
                      </h2>
                      <p>{val.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="col">
              <div className="instructor-content">
                <span className="subtitle">{subTitle}</span>
                <h2 className="title">{title}</h2>
                <p>{desc}</p>
                <Link to="/sign-up" className="lab-btn">
                  {btnText}
                </Link>
              </div>
            </div>

            <div className="col">
              <div className="instructor-thumb">
                <img src={InstructorImg} alt="instructor img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
