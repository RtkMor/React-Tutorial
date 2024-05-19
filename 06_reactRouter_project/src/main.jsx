import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import { App, Home, About, Contact, Github, User, renderData } from './ExportsHandler';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './index.css'

// Method - 1
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "/about",
//         element: <About />
//       },
//       {
//         path: "/contact",
//         element: <Contact />
//       },
//       {
//         path: "/github",
//         element: <Github />
//       }
//     ]
//   }
// ])


// Method - 2
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route path='' element={<Home />}  />
      <Route path='about' element={<About />}  />
      <Route path='contact' element={<Contact />}  />
      <Route
      loader={renderData}
      path='github'
      element={<Github />}  />
      <Route path='user/:userId' element={<User />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
