import Dashboard from "layouts/Dashboard/Dashboard.jsx";
import SignIn from "views/SignIn/SignIn.js";
import SignUp from "views/SignUp/SignUp.js";
// import Posts from "views/Posts/Posts.jsx";
// import Posts from "components/Post/Post.jsx";
// import SignIn from "layouts/Dashboard/Main.jsx";

// const indexRoutes = [{ path: "/", component: Dashboard }, { path: "/signin", component: SignIn }];
const indexRoutes = [
  {
    path: "/login",
    component: SignIn
  },
  {
    path: "/app",
    component: Dashboard
  },
  {
    path: "/register",
    component: SignUp
  }
];

export default indexRoutes;
