import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home/home'
import 'bootstrap/dist/css/bootstrap.css';
import'@fortawesome/fontawesome-svg-core'
import Navbar from './Navbar/Navbar'
import Footer from './components/Footer/Footer'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Protofolio from './components/protofolio/Protofolio'
import NotFound from './components/NotFound/NotFound'
import Layout from './components/Layout/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  let x= createBrowserRouter([
    {path:'',element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path:'about',element:<About/>},
      {path:'protofolio',element:<Protofolio/>},
      {path:'contact',element:<Contact/>},
      {path:'*',element:<NotFound/>}
    ]}
  ])
 
  return (
    <>
  <RouterProvider router={x}></RouterProvider>

  </>

  )
}

export default App
