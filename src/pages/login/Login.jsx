import { Link } from "react-router-dom";
import "./login.scss"

const Login = () => {
    return (
        <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hey There...</h1>
          <p>
            Welcome back to our page! <br></br>
            Please enter your information in the form to gain access to your account.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
          <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
            <Link to='/resetPassword'>
            <p>Forgot Password?</p>
            </Link>
          </form>
        </div>
      </div>
    </div>
    );
}

export default Login;

