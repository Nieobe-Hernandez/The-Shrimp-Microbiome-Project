import React from 'react';
import { Link } from 'react-router-dom';
import equipo from "../assets/img/Equipo.JPG";

const TeamSection = ({ teamMembers }) => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Meet Our Team
        </h1>
        <div className="flex justify-center items-center">
          <div className="flex-shrink-0 mr-8">
            <img 
              src={equipo} 
              alt="Equipo 8aLab" 
              className="rounded-full w-[400px] h-[400px] object-cover"
            />
          </div>
          <div className="flex-grow">
            {teamMembers.map((member, index) => (
              <Link 
                key={index} 
                to={member.link} 
                className="block mb-4 group"
                style={{
                  perspective: "1000px",
                }}
              >
                <div 
                  className="bg-blue-600 text-white py-2 px-4 rounded-md shadow-md 
                             transition-transform duration-300 transform group-hover:translateZ(50px)"
                  style={{
                    transformStyle: "preserve-3d",
                    transition: "transform 0.5s, box-shadow 0.5s",
                  }}
                >
                  <p className="text-lg font-semibold">{member.name}</p>
                  <p className="text-sm">{member.position}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
