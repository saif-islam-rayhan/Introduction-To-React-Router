import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './assets/components/Header/Header.jsx';
import Home from './assets/components/Home/Home.jsx';
import About from './assets/components/About/About.jsx';
import Contract from './assets/components/Contract/Contract.jsx';
import Users from './assets/components/Users/Users.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:"/About",
        element:<About></About>
      },
      {
        path:"/Contract",
        element: <Contract></Contract>
      },
     {
      path:"/users",
      loader: ()=> fetch("https://jsonplaceholder.typicode.com/users"),
      element: <Users></Users>
     }
    ]
  },
  {
    path:"/about",
    element: <div>I am in the about page</div>
  },
  {
    path: "/contract",
    element: <div>Call me righ now</div>
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>,
)
