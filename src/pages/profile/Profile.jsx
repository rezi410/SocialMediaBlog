import { Link } from "react-router-dom";
import "./profile.scss"

const ResetPassword = () => {
    return (
        <div className="ResetPassword">
        <div className="card">
          <div className="left">
            <h1>Profile</h1>
            <u><h2>My Account</h2></u>
            <u><h2>My Friends</h2></u>
            <u><h2>My Stories</h2></u>
            <Link to='/resetPassword'>
            <h2>Change Password</h2>
            </Link>
          </div>
          <div className="right">
            <h1>(Coming Soon!!)</h1>
          </div>
        </div>
      </div>
    );
}

export default ResetPassword;
