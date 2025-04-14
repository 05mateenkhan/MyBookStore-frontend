import React from "react";
import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import './index.css'
import App from './App.jsx'
import {RouterProvider } from "react-router-dom";
import router from './routers/router.jsx'
const root = document.getElementById("root");
import AuthProvider from "./contexts/AuthProvider.jsx";
// import dotenv from 'dotenv';
// dotenv.config();

ReactDOM.createRoot(root).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    
    {/* <App /> */}
  </StrictMode>
);
