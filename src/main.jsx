  import { StrictMode } from 'react'
  import { createRoot } from 'react-dom/client'
  import './index.css'
  import App from './App.jsx'
  import { createBrowserRouter, BrowserRouter, RouterProvider } from 'react-router-dom'
  import Detailes from './components/Detailes/Detailes.jsx'
  import { AppContext } from './components/context/context.js'
  import { useContext } from 'react'
  import { useState } from 'react'
  import Cart from './components/Cart/Cart.jsx'
  import Home from './components/Home/Home.jsx'
  import Payment from './components/Payment/Payment.jsx'
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "detailes/:id",
          element: <Detailes />
        },
        {
          path: "cart",
          element: <Cart />
        },
        {
          path: "payment",
          element: <Payment />
        }
      ]
    }
  ])


  createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)