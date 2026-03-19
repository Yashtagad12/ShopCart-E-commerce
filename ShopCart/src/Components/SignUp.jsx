import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // ✅ FIX
import { AuthContext } from "../contexts/AuthProvider";

const title = "Register Now";
const socialtitle = "Sign-Up with Social Media";
const btnText = "Signup Now";

const socialList = [
  { iconName: "icofont-google-plus", siteLink: "#", className: "google" },
  { iconName: "icofont-facebook", siteLink: "#", className: "facebook" },
  { iconName: "icofont-twitter", siteLink: "#", className: "twitter" },
  { iconName: "icofont-linkedin", siteLink: "#", className: "linkedin" },
  { iconName: "icofont-instagram", siteLink: "#", className: "instagram" },
  { iconName: "icofont-pinterest", siteLink: "#", className: "pinterest" },
];

export const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState("");


  const { signUpWithGmail, createUser } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  const handleRegister = (e) => {
    e.preventDefault();

    signUpWithGmail()
      .then(() => {
        alert("Google Login Successful!");
        navigate(from, { replace: true });
      })
      .catch(() => {
        setErrorMessage("Google login failed. Please try again."); // ✅ FIX
      });
  };

  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const Confirmpassword = form.confirmPassword.value;

    if (password !== Confirmpassword) {
      setErrorMessage("Password doesn't match! Please provide a correct password.");
      return;
    }

    setErrorMessage(""); // ✅ FIX

    createUser(email, password)
      .then(() => {
        alert("Account created successfully!");
        navigate(from, { replace: true });
      })
  .catch((error) => {
    if (error.code === "auth/email-already-in-use") {
      alert("This email is already registered. Please log in instead.");
    } else {
      alert(errormessage);
    }
      });
  };

  return (
    <div className="login-section padding-tb section-bg">
      <div className="container">
        <div className="account-wrapper">
          <h3 className="title">{title}</h3>

          <form className="account-form" onSubmit={handleSignup}>
            <div className="form-group">
              <input type="text" name="name" placeholder="Full Name" required />
            </div>

            <div className="form-group">
              <input type="email" name="email" placeholder="Enter Your Email *" required />
            </div>

            <div className="form-group">
              <input type="password" name="password" placeholder="Enter Your Password *" required />
            </div>

            <div className="form-group">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Re-Enter Password *"
                required
              />
            </div>

            {errorMessage && (
              <div className="text-danger mb-2">{errorMessage}</div>
            )}

            <div className="form-group">
              <button type="submit" className="d-block lab-btn">
                <span>{btnText}</span>
              </button>
            </div>
          </form>

          <div className="account-bottom">
            <span className="d-block cate pt-10">
              Have an Account? <Link to="/login">Sign In</Link>
            </span>

            <span className="or"><span>or</span></span>

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

export default SignUp;
