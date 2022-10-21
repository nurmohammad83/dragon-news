import Main from "../Layout/Main";
import Category from "../Pages/Category/Category";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import TramsCondition from "../Pages/Login/TramsCondition";
import News from "../Pages/News/News";
import Profile from "../Pages/Other/Profile";
import PrivetRoute from "./PrivetRoute";

const { createBrowserRouter } = require("react-router-dom");

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
            path:'/',
            element:<Home/>,
            loader:()=> fetch(`http://localhost:5000/news`)
            },
            {
            path:'/category/:id',
            element:<Category/>,
            loader: ({params})=> fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
            path:'/news/:id',
            element:<PrivetRoute><News/></PrivetRoute>,
            loader:({params})=> fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
            path:'/login',
            element:<Login/>
            },
            {
            path:'/register',
            element:<Register/>
            },
            {
            path:'/trams',
            element:<TramsCondition/>
            },
            {
            path:'/profile',
            element:<PrivetRoute><Profile/></PrivetRoute>
            }
        ]
    }
])