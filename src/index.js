import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './Page/ErrorPage';
import Home from './Page/Home';
import Login from './Page/Login';
import Register from './Page/Register';
import Admin from './Page/Admin';
import Users from './Page/Users';
const appRouter =createBrowserRouter([{
  path:'/',
  element:<App/>,
  errorElement:<ErrorPage/>,
  children:[{
    path:'/',
    element:<Home/>

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
    path:'/admin/:userID',
    element:<Admin/>
  },
  {
    path:'/user',
    element:<Users/>
  }
]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
   <RouterProvider router={appRouter}/>
  </React.StrictMode>
);

