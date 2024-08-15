import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { RiGitRepositoryLine, RiUserLocationLine } from "react-icons/ri";
import { PiCertificateDuotone } from "react-icons/pi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import imgc1 from "../assets/Curso/imagen 1.jpeg";
import imgc2 from "../assets/Curso/imagen 2.jpeg";
import imgc3 from "../assets/Curso/imagen 3.jpeg";
import imgc4 from "../assets/Curso/imagen 4.jpeg";
import imgj1 from "../assets/Jornadas de Divulgación/img1j.jpeg";
import imgj2 from "../assets/Jornadas de Divulgación/imgj2.HEIC";
import imgj3 from "../assets/Jornadas de Divulgación/imgj3.JPG";
import imgj4 from "../assets/Jornadas de Divulgación/imgj4.JPG";
import imgj5 from "../assets/Jornadas de Divulgación/imgj6.JPG";
import imgj6 from "../assets/Jornadas de Divulgación/imj7.jpg";
import imgj7 from "../assets/Jornadas de Divulgación/imgj8.jpg";
import imgj8 from "../assets/Jornadas de Divulgación/imgj9.jpg";
import imgj9 from "../assets/Jornadas de Divulgación/imgj10.jpg";
import imgj10 from "../assets/Jornadas de Divulgación/imgj11.jpg";
import imgj11 from "../assets/Jornadas de Divulgación/imgj12.jpg";
import { Navigation, Pagination } from "swiper/modules";
import "../assets/css/styles.css";

const styles = {
  section: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    padding: "20px",
    gap: "40px",
    position: "relative", // Aseguramos que este contenedor esté posicionado relativamente
    zIndex: 1, // Este zIndex debe estar por encima del fondo animado
    marginTop: "80px",
    width: "100%",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(255, 255, 255, 0.7)", // Transparencia para mostrar el fondo
    borderRadius: "20px",
    padding: "40px",
    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
    width: "90%",
    maxWidth: "1400px",
  },
  info: {
    maxWidth: "100%",
    textAlign: "center",
    marginBottom: "20px",
  },
  swiperContainer: {
    width: "100%",
    maxWidth: "700px",
    marginBottom: "20px",
  },
  image: {
    width: "100%",
    borderRadius: "20px",
    boxShadow: "0 15px 50px rgba(0, 0, 0, 0.2)",
  },
};

const CoursesPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const courseImages = [imgc1, imgc2, imgc3, imgc4];
  const jornadasImages = [
    imgj1,
    imgj2,
    imgj3,
    imgj4,
    imgj5,
    imgj6,
    imgj7,
    imgj8,
    imgj9,
    imgj10,
    imgj11,
  ];

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

      <div
        className="min-h-screen flex items-center justify-center"
        style={{ marginTop: "2rem" }}
      >
        <div className="animacion">
          <div className="bg"></div>
          <div className="bg bg2"></div>
          <div className="bg bg3"></div>
        </div>

        <div style={styles.section} className="content-with-navbar-courses">
          <div style={styles.content}>
            <div style={styles.swiperContainer}>
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                loop={courseImages.length > 1}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Navigation, Pagination]}
              >
                {courseImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={`Curso ${index + 1}`}
                      style={styles.image}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div style={styles.info}>
              <h1>Courses</h1>
              <p>
                Microbiome Mx marked the beginning of a unique cycle of
                conferences and a graduate course, offering the scientific
                community an exclusive opportunity to exchange ideas with
                renowned researchers over a four-month period, focusing on the
                study of the microbiome in Mexico. Each week, a distinguished
                researcher visited the institute of biotechnology to deliver a
                conference to the entire scientific community. Following this,
                the researcher engaged in one-on-one discussions with graduate
                students, fostering a supportive environment for the exchange of
                ideas and detailed discussions about research projects and
                methodologies. These events, such as the Microbiome Mx, serve as
                invaluable platforms for students to broaden their perspectives
                and equip themselves with the necessary tools to shape their
                research careers in the long run.
              </p>
            </div>
          </div>

          <div style={styles.content}>
            <div style={styles.swiperContainer}>
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Navigation, Pagination]}
              >
                {jornadasImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={`Jornada ${index + 1}`}
                      style={styles.image}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div style={styles.info}>
              <h1>Science Workshops</h1>
              <p>
                Science Workshops: Science in your Community. An essential part
                of our research is made possible by our collaboration with the
                shrimp farm “Camarones el Renacimiento” located in northeast
                Mexico in the state of Sinaloa. Here, the shrimp aquaculture is
                a central aspect of the community's economic activities. Thus,
                our main objective is to bring back the knowledge we have
                generated and put it to service of the community, recognizing
                the integral role of the collaboration with shrimp farmers in
                our work. That’s why for two consecutive years (2023 and 2024)
                we have dedicated one week each year to bring our scientific
                projects closer to students from elementary level to university.
                During this time, we engage in interactive sessions such as
                conferences, demonstrations, and games, ensuring that students
                of all ages are actively involved in understanding how education
                and science can improve our everyday lives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesPage;
