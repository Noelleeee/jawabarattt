import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppHOME from './HOME/AppHOME';
import AppKOTA from './KOTA/AppKOTA';
import AppKOTA2 from './KOTA/AppKOTA2';
import AppKOTA3 from './KOTA/AppKOTA3';
import AppKOTA4 from './KOTA/AppKOTA4';
import AppABOUT from './ABOUT/AppABOUT';
import AppMEDIA from './MEDIA/AppMEDIA';
import AppCONTACT from './CONTACT/AppCONTACT';
import Destination from './SEARCH/Destination';

const router = createBrowserRouter([
  {
    path:"/bandung",
    element: <AppKOTA />
  },
  {
    path:"/cirebon",
    element: <AppKOTA2 />
  },
  {
    path:"/pangandaran",
    element: <AppKOTA3 />
  },
  {
    path:"/bogor",
    element: <AppKOTA4 />
  },
  {
    path:"/about",
    element: <AppABOUT />
  },
  {
    path:"/media",
    element: <AppMEDIA />
  },
  {
    path:"/search",
    element: <Destination />
  },
  {
    path:"/contact",
    element: <AppCONTACT />
  },
  {
    path:"/",
    element: <AppHOME />
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
)