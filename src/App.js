
import Home from "./pages/home/Home";
import Login from "./pages/login/Login"
import Register from "./pages/register/Register";
import ResetPassword from "./pages/resetPassword/ResetPassword";
import Profile from "./pages/profile/Profile";
import "./style.scss";
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import PageNotFound from "./pages/pageNotFound/pageNotFound";


const router=createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/resetPassword",
    element: <ResetPassword />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "*",
    element: <PageNotFound />
  }
])



function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
    
  );
}

export default App;

