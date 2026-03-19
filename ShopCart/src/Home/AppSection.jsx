import { Link } from "react-router";
const btntxt = "Sign Up for Free";
const title ="Shop Anytime, Anywhere";
const desc ="Take Shop on any of your device and learn anytime what you want to. Just download, install and begin to learn!";

const appImages = [
  {
    imgUrl: "/src/assets/images/app/01.jpg",
    imgAlt: "app1",
  },
  {
    imgUrl: "/src/assets/images/app/02.jpg",
    imgAlt: "app2",
  }
]

const AppSection = () => {

  return (
    <div className="app-section padding-tb">
    <div className="container">
      <div className="section-header text-center">
        <Link to="/sign-up" className="lab-btn mb-4">{btntxt}</Link>
        <h2 className="title">{title}</h2>
        <p>{desc}</p>
      </div>

      <div className="section-wrapper">
        <ul className="lab-ul">
          {
            appImages.map((app, i) => (
              <li key={i}><img src={app.imgUrl} alt={app.imgAlt} /></li>
            ))
          }
        </ul>
      </div>
    </div>
    </div>
  )
}

export default AppSection;