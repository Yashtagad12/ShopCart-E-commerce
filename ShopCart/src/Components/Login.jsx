import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const title = "Login";
const socialtitle = "Login with Social Media";
const btnText = "Login Now";

const socialList = [
  { iconName: "icofont-google-plus", siteLink: "#", className: "google" },
  { iconName: "icofont-facebook", siteLink: "#", className: "facebook" },
  { iconName: "icofont-twitter", siteLink: "#", className: "twitter" },
  { iconName: "icofont-linkedin", siteLink: "#", className: "linkedin" },
  { iconName: "icofont-instagram", siteLink: "#", className: "instagram" },
  { iconName: "icofont-pinterest", siteLink: "#", className: "pinterest" },
];

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { signUpWithGmail, login } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  // EMAIL + PASSWORD LOGIN
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signUpWithGmail();
      navigate(from, { replace: true });
    } catch (error) {
      console.error(error);
      setErrorMessage("Google login failed!");
    }
  };

  // GOOGLE LOGIN
  const handleRegister = (e) => {
    e.preventDefault(); // ⬅️ VERY IMPORTANT

    signUpWithGmail()
      .then((result) => {
        alert("Google Login Successful!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setErrorMessage("Google login failed. Please try again.");
      });
  };

  return (
    <div className="login-section padding-tb section-bg">
      <div className="container">
        <div className="account-wrapper">
          <h3 className="title">{title}</h3>

          <form className="account-form" onSubmit={handleLogin}>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email *"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password *"
                required
              />
            </div>

            {errorMessage && (
              <div className="text-danger mb-2">{errorMessage}</div>
            )}

            <div className="form-group">
              <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                <div className="checkgroup">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">Remember Me</label>
                </div>
                <Link to="/forgetpass">Forget Password?</Link>
              </div>
            </div>

            <div className="form-group">
              <button type="submit" className="d-block lab-btn">
                <span>{btnText}</span>
              </button>
            </div>
          </form>

          <div className="account-bottom">
            <span className="d-block cate pt-10">
              Don't Have an Account? <Link to="/sign-up">Sign Up</Link>
            </span>

            <span className="or">
              <span>or</span>
            </span>

            <h5 className="subtitle">{socialtitle}</h5>

            <ul className="lab-ul social-icons justify-content-center">
              {socialList.map((icon, index) => (
                <li key={index}>
                  <button
                    type="button"
                    className={icon.className}
                    onClick={handleRegister}
                  >
                    <i className={icon.iconName}></i>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
