import React, { useEffect, useState } from "react";
import CarouselHome from "../../components/Home/CarouselHome";
import { Button } from "flowbite-react";
import { IoIosSearch } from "react-icons/io";
import { RiUserLocationLine } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { RiGitRepositoryLine } from "react-icons/ri";
import { PiCertificateDuotone } from "react-icons/pi";
import mapa from "../../assets/img/mapa.jpg";
import CarouselIbt from "../../components/Home/CarouselIbt";
import TeamSection from "../../components/TeamSection";
import "../../assets/css/styles.css";

const HomePage = () => {
  const [navbarOpacity, setNavbarOpacity] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const carouselRef = React.createRef();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const carousel = document.querySelector(".carousel-container");
      const carouselHeight = carousel ? carousel.offsetHeight : 0;
      const scrollPosition = window.scrollY;
      const opacity = Math.max(
        0,
        Math.min(1, 1 - scrollPosition / carouselHeight)
      );
      setNavbarOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("load", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("load", handleScroll);
    };
  }, []);

  const teamMembers = [
    {
      name: "Dr. Adrián Ochoa Leyva",
      position: "Principal Investigator",
      link: "https://www.ibt.unam.mx/perfil/2856/adrian-ochoa-leyva",
    },
    {
      name: "Biol. Filiberto Sánchez López",
      position: "Lab Technician",
      link: "https://www.ibt.unam.mx/perfil/3355/biol-filiberto-sanchez-lopez ",
    },
    {
      name: "Dra. Fernanda Cornejo Granados",
      position: "Posdoctoral Fellow",
      link: "https://www.ibt.unam.mx/perfil/3827/maria-fernanda-cornejo-granados",
    },
    {
      name: "M.C. Melany Cervantes Echeverría",
      position: "PhD Student",
      link: "https://www.ibt.unam.mx/perfil/4252/biol-melany-josheline-cervantes-echeverria",
    },
    {
      name: "M.C. Luigui Gallardo Becerra",
      position: "PhD Student",
      link: "https://www.ibt.unam.mx/perfil/3895/mc-luigui-michel-gallardo-becerra",
    },
    {
      name: "M.C. Luis E. Vázquez Morado",
      position: "PhD Student",
      link: "https://www.ibt.unam.mx/perfil/5950/mc-luis-enrique-vazquez-morado",
    },
    {
      name: "Mariana Negrete Román",
      position: "Undergraduate Student",
      link: "https://www.ibt.unam.mx/perfil/6748/alexia-mariana-negrete-roman",
    },
    {
      name: "M. En Ti. Juan Manuel Hurtado",
      position: "Informatic Support",
      link: "https://www.ibt.unam.mx/perfil/2215/m-en-ti-juan-manuel-hurtado-ramirez",
    },
    {
      name: "Jaqueline N. Hernández Bernal",
      position: "Temporal Stay, Software Developer",
      link: "https://www.ibt.unam.mx/perfil/7043/jaqueline-nieobe-hernandez-bernal",
    },
  ];

  return (
    <>
      <header>
        <nav
          className={`fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-500 transition-colors duration-300 ease-in-out`}
          style={{ backgroundColor: `rgba(0, 102, 204, ${1 - navbarOpacity})` }}
        >
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

      <main>
        <div ref={carouselRef}>
          <CarouselHome />
        </div>
        <section className="bg-gray-50 dark:bg-gray-900 mt-4 mb-4">
          <div className=" max-w-screen-xl mx-auto p-8 flex justify-center space-x-4 shadow m-4">
            <Button
              gradientDuoTone="purpleToBlue"
              href="/searchpage"
              className="shadow-inner bg-blue-600 text-white font-bold py-3 px-3 rounded-full flex items-center space-x-2 mb-2"
            >
              <span className="text-md">Microbiota Search Page</span>
              <IoIosSearch style={{ fontSize: "1.5rem", fontWeight: "bold" }} />
            </Button>
            <Button
              gradientDuoTone="greenToBlue"
              href="/publications"
              className="bg-green-400 text-white font-bold py-3 px-3 rounded-full flex items-center space-x-2 mb-2"
            >
              <RiGitRepositoryLine
                style={{ fontSize: "1.5rem", fontWeight: "bold" }}
              />
              <span>Publications</span>
            </Button>
          </div>
          <h1 className="text-4xl font-extrabold text-blue-800 dark:text-blue-400 mb-4 text-center">
            About The Shrimp Microbiome Project
          </h1>
          <div className="max-w-screen-xl mx-auto p-8 flex flex-col md:flex-row justify-between items-start shadow">
            <div className="w-full md:w-1/2 p-4">
              <div className="text-md leading-relaxed bg-blue-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-blue-600 dark:border-blue-400">
                <p className="text-gray-700 dark:text-gray-200 mb-4">
                  Our research group based at the{" "}
                  <span className="font-semibold text-blue-700">
                    Institute of Biotechnology at the National Autonomous
                    University of Mexico
                  </span>{" "}
                  and in collaboration with shrimp farm{" "}
                  <span className="font-semibold text-blue-700">
                    Camarones el Renacimiento S.P.R de R.I, University of Sonora
                  </span>{" "}
                  and{" "}
                  <span className="font-semibold text-blue-700">
                    Research Center in Food and Development (CIAD) campus
                    Hermosillo
                  </span>{" "}
                  focuses on studying how the structure and dynamics of the
                  microbiota influence the health and development of the{" "}
                  <span className="font-semibold text-blue-700">
                    Whiteleg Shrimp (L. vannamei)
                  </span>
                  , the most valuable crustacean species on the world market.
                </p>
                <p className="text-gray-700 dark:text-gray-200 mb-4">
                  We aim to apply this knowledge to create optimal management
                  strategies to improve shrimp production in Mexico and other
                  countries.{" "}
                  <span className="font-semibold text-blue-700">
                    The Shrimp Microbiome Project
                  </span>{" "}
                  is a long-term collaborative effort to promote transparency
                  and scientific collaboration. We are committed to sharing our
                  research results, collected over several years, with the
                  broader scientific community.
                </p>
                <p className="text-gray-700 dark:text-gray-200">
                  Using the{" "}
                  <span className="font-semibold text-blue-700">
                    Microbiota Search
                  </span>
                  , you can explore how the abundance of bacteria present in the
                  microbiota of the{" "}
                  <span className="font-semibold text-blue-700">
                    intestine and the hepatopancreas
                  </span>{" "}
                  of juvenile Whiteleg shrimps fluctuated from 2015 to 2018.
                  These samples were collected from actual shrimp hatchery
                  conditions and characterized by profiling the{" "}
                  <span className="font-semibold text-blue-700">
                    v3-v4 hypervariable region
                  </span>{" "}
                  of the 16S rRNA gene, a key tool in understanding the
                  diversity and composition of microbial communities.
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/2 p-4">
              <div className="w-full h-94 bg-gray-300 dark:bg-gray-700 flex items-center justify-center shadow">
                <img
                  src={mapa}
                  alt="map whit logos of the institutions"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
          <div class="funding-container">
            <h2>Funding</h2>
            <p>CONAHCYT Ciencia de Frontera-2019-263986</p>
            <p> DGAPA UNAM IN219723</p>
          </div>
        </section>
        <section className="bg-gray-100 dark:bg-gray-800">
          <CarouselIbt />
        </section>
        <TeamSection teamMembers={teamMembers} />
      </main>
      <footer className="bg-gray-400 dark:bg-gray-900">
        <div className="max-w-screen-xl mx-auto p-8 text-center">
          <p className="text-gray-500 dark:text-gray-300">
            © 2024 The Shrimp Microbiome Project. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
