import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './Layout/Main'
import HomePage from './Pages/HomePage/HomePage'
import NewsDetails from './Components/NewsDetails/NewsDetails'
import LatestNews from './Shared/LatestNews/LatestNews'
// import Router from './Components/Router/Router'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>
      },
      {
        path: "/newsdetails/:id",
        element: <NewsDetails></NewsDetails>,
        loader:({params})=>fetch(`/Data.json`)
      }
     
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
