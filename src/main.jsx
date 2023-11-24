import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import Homepage from './routes/root.jsx';
import ErrorPage from './error-page.jsx';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import './index.css'
import SignupScreen from './routes/signup.jsx';
import ConnectYourWallet from './routes/connect-your-wallet.jsx';
import SignupWithEmailScreen from './routes/signup-with-email.jsx';
import Dashboard from './routes/dashboard.jsx';
import CallYou from './routes/call-you.jsx';
import VerifyYourEmail from './routes/verify-your-email.jsx';
import VerifyMobile from './routes/verify-mobile.jsx';
import Temp from './routes/temp.jsx';
import Introduction from './routes/introduction.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>,
    errorElement: <ErrorPage />,

  },
  {
    path: "/signup",
    element: <SignupScreen/>,
    errorElement: <ErrorPage />,

  },

  {
    path: "/call-you",
    element: <CallYou/>,
    errorElement: <ErrorPage />,

  },


  {
    path: "/dashboard",
    element: <Dashboard/>,
    errorElement: <ErrorPage />,

  },

  {
    path: "/signup-with-email",
    element: <SignupWithEmailScreen/>,
    errorElement: <ErrorPage />,

  },


    {
    path: "/temp",
    element: <Temp/>,
    errorElement: <ErrorPage />,

  },

  {
    path: "/introduction",
    element: <Introduction/>,
    errorElement: <ErrorPage />,

  },

  {
    path: "/verify-your-email",
    element: <VerifyYourEmail/>,
    errorElement: <ErrorPage />,

  },

  {
    path: "/verify-mobile",
    element: <VerifyMobile/>,
    errorElement: <ErrorPage />,

  },

  {
    path: "/connect-your-wallet",
    element: <ConnectYourWallet/>,
    errorElement: <ErrorPage />,

  },


  {
    path: "/hello",
    element: <div>Hello</div>,

  },
]);





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />

  </React.StrictMode>,
)
