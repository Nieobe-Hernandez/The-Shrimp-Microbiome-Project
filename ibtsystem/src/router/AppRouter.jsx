import React from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import HomePage from "../modules/home/HomePage";
import SearchPage from "../modules/buscador/SearchPage";
import PublicationsPage from "../modules/PublicationsPage";
import ContactPage from "../modules/ContactPage";
import NotFound from "../modules/errors/NotFound";
import CoursesPage from "../modules/CoursesPage";

const AppRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<HomePage />} />
        <Route path="/searchpage" element={<SearchPage apiUrl="/api" />} />
        <Route path="/publications" element={<PublicationsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/courses" element={<CoursesPage />}/>
        <Route path="/*" element={<NotFound/>} />
      </>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default AppRouter;
