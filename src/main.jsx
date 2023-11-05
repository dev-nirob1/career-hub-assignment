import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Components/Layout/Layout.jsx';
import Statistics from './Components/Statistics/Statistics.jsx';
import Home from './Components/Home/Home.jsx';
import AppliedJob from './Components/AppliedJob/AppliedJob.jsx';
import Blog from './Components/Blog/Blog.jsx';
import JobDetails from './Components/JobDetails/JobDetails.jsx';
// import FeaturesJob from './Components/FeaturesJob/FeaturesJob.jsx';
// import JobDetails from './Components/FeaturesJob/JobDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/jobDetails/:id",
        element: <JobDetails></JobDetails>,
      },

      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/applied-job",
        element: <AppliedJob></AppliedJob>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
