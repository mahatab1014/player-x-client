import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Public_Routes from './Router/Public_Routes'
import AuthProfider from './Provider/AuthProfider'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProfider>
      <RouterProvider router={Public_Routes} />
    </AuthProfider>
  </React.StrictMode>
);
