import { useState } from "react";
import Ratting from "../Components/Ratting";
import descripimg from "/src/assets/images/shop/01.jpg";
const reviewTitle = "Add a Review";

const descriptionpara = "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, quo ipsa. Consequatur distinctio labore cumque tempora voluptatibus nesciunt mollitia ducimus sit omnis, aliquam eos quo explicabo odit assumenda laborum nisi."

const descriptioncontent = (
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              necessitatibus blanditiis eligendi porro, quos aspernatur eius
              fugiat sunt excepturi debitis ratione atque odit labore laboriosam
              mollitia voluptas. Eligendi pariatur, velit ab alias eos dolores a
              nostrum unde nam exercitationem adipisci et illo, excepturi
              veritatis officia atque. Illo perferendis animi cum deleniti
              aliquam libero odio corrupti, quod cupiditate! Error, veritatis
              repudiandae. Porro adipisci labore odit!</p>
)

const ReviewList = [
  {
    imgUrl: "/src/assets/images/instructor/01.jpg",
    imgAlt: "Client thumb",
    name: "Ganelon Boileau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/02.jpg",
    imgAlt: "Client thumb",
    name: "Morgana Cailot",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/03.jpg",
    imgAlt: "Client thumb",
    name: "Telford Bois",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/04.jpg",
    imgAlt: "Client thumb",
    name: "Cher Daviau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
];

const Review = () => {
  const [reviewShow, setReviewShow] = useState(true);

  return (
    <>
      {/* NAV */}
      <ul
        className={`review-nav lab-ul ${
          reviewShow ? "RevActive" : "DescActive"
        }`}
      >
        <li className="lab-btn desc" onClick={() => setReviewShow(false)}>
          Description
        </li>
        <li className="lab-btn rev" onClick={() => setReviewShow(true)}>
          Reviews {ReviewList.length}
        </li>
      </ul>

      {/* CONTENT */}
      <div
        className={`review-content ${
          reviewShow ? "review-content-show" : "description-show"
        }`}
      >
        {/* REVIEW SECTION */}
        {reviewShow && (
          <div className="review-showing">
            <ul className="content lab-ul">
              {ReviewList.map((review, i) => (
                <li key={i}>
                  <div className="post-thumb">
                    <img src={review.imgUrl} alt={review.imgAlt} />
                  </div>

                  <div className="post-content">
                    <div className="entry-meta">
                      <div className="posted-on">
                        <a href="#">{review.name}</a>
                        <p>{review.date}</p>
                      </div>
                    </div>
                    <div className="entry-content">
                      <p>{review.desc}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* REVIEW FORM */}
            <div className="client-review">
              <div className="review-form">
                <div className="review-title">
                  <h5>{reviewTitle}</h5>
                </div>

                <form action="action" className="row review-form">
                  <div className="col-md-4 col-12">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name *"
                      required
                    />
                  </div>

                  <div className="col-md-4 col-12">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address *"
                      required
                    />
                  </div>

                  <div className="col-md-4 col-12">
                    <div className="rating">
                      <span className="me-2">Your Rating</span>
                      <Ratting />
                    </div>
                  </div>

                  <div className="col-md-12 col-12">
                    <textarea
                      className="review-textarea"
                      name="message"
                      id="message"
                      rows="8"
                      placeholder="Type Your Message"
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <button type="submit" className="default-button">
                      <span>Submit Review</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* DESCRIPTION SECTION */}
        {!reviewShow && (
          <div className="description">
            <p className="description-para">
              {descriptionpara  }
            </p>

            <div className="post-item">
              <div className="post-thumb post-img">
                <img src={descripimg} alt="cloth" />
              </div>
              <div className="post-content">
                <ul className="lab-ul description-ul">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <li key={index}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {descriptioncontent}
          </div>
        )}
      </div>
    </>
  );
};

export default Review;
