import { Link } from "react-router-dom";
import "./ResetPassword.scss"

const ResetPassword = () => {
    return (
        <div className="ResetPassword">
        <div className="card">
          <div className="left">
            <h1>Hey There...</h1>
            <h2>Want to Reset Your Password?</h2>
            <p>
            Dont't worry! We are here to help you to reset Or recover your pasword.
            Please enter the information provided in the form. Thanks!
            </p>
            <span>Don't you have an account?</span>
            <Link to="/register">
            <button>Register</button>
            </Link>
          </div>
          <div className="right">
            <h1>Reset Password</h1>
            <form>
              <input type="text" placeholder="Email" />
              <input type="password" placeholder="Old Password" />
              <input type="password" placeholder="New Password" />
              <input type="password" placeholder="New Password" />
              <button>Reset Password</button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default ResetPassword;
