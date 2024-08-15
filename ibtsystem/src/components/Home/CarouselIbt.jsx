import React from "react";
import { Carousel } from "flowbite-react";
import images from "../../assets/Colectas/images";
import '../../components/Home/CarouselIbt.css'; 

const CarouselIbt = () => {
  return (
    <div className="carousel-container-ibt">
      <Carousel slideInterval={3000} pauseOnHover indicators={false}>
        {Object.values(images).map((src, index) => (
          <img key={index} src={src} alt={`Imagen ${index + 1}`} />
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselIbt;
