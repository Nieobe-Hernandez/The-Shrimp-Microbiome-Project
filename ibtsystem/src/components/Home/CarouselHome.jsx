import React from "react";
import { Carousel } from "flowbite-react";
import images from "../../assets/Primer_reel/images";

const CarouselHome = () => {
  return (
    <div className="carousel-container h-96 w-full overflow-hidden">
     <Carousel slideInterval={3000} pauseOnHover indicators={false}>
        {Object.values(images).map((src, index) => (
          <img key={index} src={src} alt={`Imagen ${index + 1}`} />
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselHome;