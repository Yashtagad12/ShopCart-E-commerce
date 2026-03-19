import { useState } from "react";
import { useParams } from "react-router-dom";
import Pageheader from "../Components/Pageheader";
import Popularposts from "../Shop/Popularposts";
import Tags from "../Shop/Tags";
import blogList from "../utilis/blogdata";
import Blogimg1 from "/src/assets/images/blog/single/01.jpg";
import Blogimg2 from "/src/assets/images/blog/single/02.jpg";

const singleblogtags = ["gency", "Business", "Personal"];

const socialList = [
  { iconName: "icofont-facebook", siteLink: "#", className: "facebook" },
  { iconName: "icofont-twitter", siteLink: "#", className: "twitter" },
  { iconName: "icofont-linkedin", siteLink: "#", className: "linkedin" },
  { iconName: "icofont-instagram", siteLink: "#", className: "instagram" },
  { iconName: "icofont-pinterest", siteLink: "#", className: "pinterest" },
];

const articles = {
  prevarticle: {
    articlename: "Previous Article",
  articlepara: "Evisculate Parallel Processes via Technics Sound Models Authoritative"
},
  nextarticle: {
  articlename: "Next Article",
  articlepara: "Evisculate Parallel Processes via Technics Sound Models Authoritative"}
  };

const SingleBlog = () => {
  const [blog, setBlog] = useState(blogList);
  const { id } = useParams();

  const result = blog.filter((b) => b.id === Number(id));
  console.log(result[0]);

  return (
    <div>
      <Pageheader title={"Single Blog Page"} curPage={"Blog / blog"} />
      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          {result.map((item) => (
                            <div key={item.id}>
                              <div className="post-thumb">
                                <img
                                  src={item.imgUrl}
                                  alt={item.imgAlt}
                                  className="w-100"
                                />
                              </div>

                              <div className="post-content">
                                <h3>{item.title}</h3>
                                <div className="meta-post">
                                  <ul className="lab-ul">
                                    {item.metaList.map((val, i) => (
                                      <li key={i}>
                                        <i className={val.iconName}>
                                          {val.text}
                                        </i>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <p>
                                  Serenity hasir taken poseson mying entre soung
                                  these sweet morngs sprng whch enoywith whole
                                  heart create am alones and feel the charm of
                                  exstenceth spot whch the blissouls like
                                  mineing am soo happy my dearsi frend absoribed
                                  the exquste sense enjoy my whole hearts alone
                                  and fee the charm of exstenceths spotsi whch
                                  was the blis of soulis mineing amsoing dear
                                  frend soingu absoribed the exqust sense
                                  tranqui existence neglect my talentsr should
                                  ncapable ofing is drawng singe wonderful
                                  serenty has taken possesison of my entre
                                  soulng these sweet present moment and yet feel
                                  that never was greater artst
                                </p>

                                <blockquote>
                                  <p>
                                    Dynamically recaptiualize distributed
                                    technologies is whereas turnkey channels and
                                    onotonectally provides acess to resource
                                    leveling expertise vias worldwide
                                    deliverable uolisticly aserer are diverse
                                    vortable.
                                  </p>

                                  <cite>
                                    <a href="#">...melissa Hunter</a>
                                  </cite>
                                </blockquote>

                                <p>
                                  whole heart create am alones and feel the
                                  charm of exstenceth spot whch the blissouls
                                  like mineing am soo happy my dearsi frend
                                  absoribed the exquste sense enjoy my whole
                                  hearts alone and fee the charm of exstenceths
                                  spotsi whch was the blis of soulis mineing
                                  amsoing dear frend soingu absoribed the exqust
                                  sense tranqui existence neglect my talentsr
                                  should ncapable ofing is drawng singe
                                  wonderful serenty has taken possesison of my
                                  entre soulng these sweet present moment and
                                  yet feel that never was greater artst
                                </p>
                                <img src={Blogimg1} alt={item.imgAlt} />
                                <p>
                                  Serenity hasir taken poseson mying entre soung
                                  these sweet morngs sprng whch enoywith whole
                                  heart create am alones and feel the charm of
                                  exstenceth spot whch the blissouls like
                                  mineing am soo happy my dearsi frend absoribed
                                  the exquste sense enjoy my whole hearts alone
                                  and fee the charm of exstenceths spotsi whch
                                  was the blis of soulis mineing amsoing dear
                                  frend soingu absoribed the exqust sense
                                  tranqui existence neglect my talentsr should
                                  ncapable ofing is drawng singe wonderful
                                  serenty has taken possesison of my entre
                                  soulng these sweet present moment and yet feel
                                  that never was greater artst
                                </p>

                                <div className="video-thumb">
                                  <img src={Blogimg2} alt={item.imgAlt} />
                                  <a
                                    className="video-button popup"
                                    href="https://youtu.be/W9kWIw7LLqc?si=DK_Izn7syPWCevFI"
                                    target="_blank"
                                  >
                                    <i className="icofont-ui-play"></i>
                                  </a>
                                </div>

                                <p>
                                  whole heart create am alones and feel the
                                  charm of exstenceth spot whch the blissouls
                                  like mineing am soo happy my dearsi frend
                                  absoribed the exquste sense enjoy my whole
                                  hearts alone and fee the charm of exstenceths
                                  spotsi whch was the blis of soulis mineing
                                  amsoing dear frend soingu absoribed the exqust
                                  sense tranqui existence neglect my talentsr
                                  should ncapable ofing is drawng singe
                                  wonderful serenty has taken possesison of my
                                  entre soulng these sweet present moment and
                                  yet feel that never was greater artst
                                </p>

                                <div className="tags-section">
                                  <ul className="tags lab-ul">
                                    {singleblogtags.map((tag, i) => (
                                      <li key={i}>
                                        <a href="#">{tag}</a>
                                      </li>
                                    ))}
                                  </ul>

                                  <ul className="lab-ul social-icons">
                                    {socialList.map((val, i) => (
                                      <li key={i}>
                                        <a href="#" title={val.className}>
                                          <i className={val.iconName}></i>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="navigations-part">
                      <div className="left">
                        <a href="#" className="prev">
                          <i className="icofont-double-left"></i> {articles.prevarticle.articlename}
                        </a>
                        <a href="#" className="title">
                          {articles.prevarticle.articlepara}
                        </a>
                      </div>
                      <div className="right">
                        <a href="#" className="next">
                          {articles.nextarticle.articlename} <i className="icofont-double-right"></i>
                        </a>
                        <a href="#" className="title">
                          {articles.nextarticle.articlepara}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <article>
                <Tags />
                <Popularposts />
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
