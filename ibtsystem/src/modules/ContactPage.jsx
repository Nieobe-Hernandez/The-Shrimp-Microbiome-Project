import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { RiGitRepositoryLine } from "react-icons/ri";
import { RiUserLocationLine } from "react-icons/ri";
import { PiCertificateDuotone } from "react-icons/pi";
import { Card, CardContent, Typography, Box } from "@mui/material";
import "./ContactPage.css";

const ContactPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header>
        <nav className="fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 bg-navbar !bg-opacity-100">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <a
                href="https://www.ibt.unam.mx/"
                className="flex items-center space-x-3 hidden md:flex"
              >
                <img
                  src="/src/assets/img/logo-unam-blanco.png"
                  alt="Universidad Nacional Autónoma de México"
                  className="h-11 w-12"
                />
                <img
                  src="https://www.ibt.unam.mx/media/logo/logo-biotecnologia.png?time=0.32139200%201718576557"
                  className="h-10 w-21 mt-3"
                  alt="IBT Logo"
                />
              </a>
              <a
                href="/"
                className="self-center !title-size text-2xl font-bold whitespace-nowrap dark:text-gray-300 text-white project-title"
              >
                The Shrimp Microbiome Project
              </a>
              <a
                href="/"
                className="self-center !title-size text-2xl font-bold whitespace-nowrap dark:text-gray-300 text-white collapsed-title"
              >
                Shrimp Microbiome
              </a>
            </div>
            <div className="flex items-center space-x-3 rtl:space-x-reverse md:hidden">
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-200 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded={isMenuOpen}
                onClick={handleMenuToggle}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`flex items-center justify-between w-full md:flex md:w-auto md:order-1 ${
                isMenuOpen ? "block" : "hidden"
              } md:flex-row`}
            >
              <ul className="flex flex-col md:flex-row p-4 md:p-0 mt-4 md:mt-0 font-medium border border-transparent rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:space-y-0 md:space-x-4 md:border-0 md:bg-[#0066CC] dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                <li className="flex items-center space-x-2 rtl:space-x-reverse justify-end">
                  <FaHome
                    className="text-white"
                    style={{ fontSize: "1.5rem" }}
                  />
                  <a
                    href="/"
                    className="block py-2 px-3 text-white bg-[#0066CC] rounded md:text-white md:p-0 md:dark:text-white"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li className="flex items-center space-x-2 rtl:space-x-reverse">
                  <IoIosSearch
                    className="text-white"
                    style={{ fontSize: "1.5rem" }}
                  />
                  <a
                    href="/searchpage"
                    className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Microbiota Search Page
                  </a>
                </li>
                <li className="flex items-center space-x-2 rtl:space-x-reverse">
                  <RiGitRepositoryLine
                    className="text-white"
                    style={{ fontSize: "1.5rem" }}
                  />
                  <a
                    href="/publications"
                    className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Publications
                  </a>
                </li>
                <li className="flex items-center space-x-2 rtl:space-x-reverse">
                  <PiCertificateDuotone
                    className="text-white"
                    style={{ fontSize: "1.5rem" }}
                  />
                  <a
                    href="/courses"
                    className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Courses
                  </a>
                </li>
                <li className="flex items-center space-x-2 rtl:space-x-reverse">
                  <RiUserLocationLine
                    className="text-white"
                    style={{ fontSize: "1.5rem" }}
                  />
                  <a
                    href="/contact"
                    className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main className="min-h-screen  flex justify-center items-center p-4 content-with-navbar">
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center md:space-x-8">
          <Card className="bg-contact text-white max-w-md w-full shadow-none rounded-none md:rounded-lg">
            <CardContent className="flex flex-col items-center text-center text-white mb-6 mt-5">
              <RiUserLocationLine
                className="text-white mb-6 mt-4"
                style={{ fontSize: "8rem" }}
              />
              <Typography variant="h4" className="mb-6">
                Contact us
              </Typography>
              <Typography>Instituto de Biotecnología / UNAM</Typography>
              <Typography>
                Av. Universidad #2001, Col. Chamilpa C.P. 62210, Cuernavaca,
                Morelos
              </Typography>
              <Box className="mt-4">
                <Typography>Dr. Adrian Ochoa Leyva</Typography>
                <Typography>adrian.ochoa@ibt.unam.mx</Typography>
              </Box>
            </CardContent>
          </Card>
          <div className="map mt-8 md:mt-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.812288461667!2d-99.23632344939095!3d18.98389568707773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cde05f8887a003:0xffc31bcab80adb5a!2sInstituto%20de%20Biotecnolog%C3%ADa%20UNAM!5e0!3m2!1ses-419!2smx!4v1579548754802!5m2!1ses-419!2smx"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Instituto de Biotecnología UNAM"
            ></iframe>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactPage;
