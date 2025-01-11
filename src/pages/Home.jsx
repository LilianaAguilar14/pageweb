import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />

     
      <section className="bg-gray-50 pt-44 py-5">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
        
          <div className="lg:w-1/2 text-left mb-8 lg:mb-0">
            <h1 className="text-4xl font-semibold text-orange-600 mb-4">
              Rubber Playground Safety Surfaces for Endless Fun, Safety & Healthy Recreation
            </h1>
            <p className="text-lg text-blue-950 mb-6">
              Safe spaces, joyful play: Recreational Surfacing INC, where fun and safety are woven into every layer of our innovative surfaces.
            </p>
          </div>

          
          <div className="lg:w-1/2">
            <div className="relative">
              <img
                src="/img/principal.jpg"
                alt="Playground Surface"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

    
      <section className="bg-white py-5">
        <div className="container mx-auto px-6">
          <p className="text-lg text-gray-600 mb-6">
            At Recreational Surfacing INC, we understand our role in the playground and recreation surfacing industry: deliver a beautiful, durable, safe, and versatile surface for playgrounds, splash pads, fitness trails, jogging or walking paths, or other indoor/outdoor areas.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           
            <div className="bg-gray-100 rounded-lg p-6 shadow hover:shadow-lg transition">
              <img
                src="/img/uno.webp"
                alt="Poured-In-Place Rubber"
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Poured-In-Place Rubber
              </h3>
              <Link
                to="/systems#poured-in-place"
                className="bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600 transition"
              >
                Learn more
              </Link>
            </div>

     
            <div className="bg-gray-100 rounded-lg p-6 shadow hover:shadow-lg transition">
              <img
                src="/img/dos.jpg"
                alt="Synthetic Turf"
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Synthetic Turf
              </h3>
              <Link
                to="/systems#synthetic-turf"
                className="bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600 transition"
              >
                Learn more
              </Link>
            </div>

       
            <div className="bg-gray-100 rounded-lg p-6 shadow hover:shadow-lg transition">
              <img
                src="/img/tres.webp"
                alt="Bonded Rubber Mulch"
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Bonded Rubber Mulch
              </h3>
              <Link
                to="/systems#bonded-rubber-mulch"
                className="bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600 transition"
              >
                Learn more
              </Link>
            </div>

            <div className="bg-gray-100 rounded-lg p-6 shadow hover:shadow-lg transition">
              <img
                src="/img/cuatro.jpg"
                alt="Equipment Installation"
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Equipment Installation
              </h3>
              <Link
                to="/systems#equipment-installation"
                className="bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600 transition"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>

    
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-left">
            Brilliant Design From Start to Finish
          </h2>
          <p className="text-lg text-gray-600 mb-6 text-left">
            Recreational Surfacing INC is your premier nationwide industry-leading authority for all your commercial playground surfacing, sports surfacing, and recreational surfacing needs. With 10 years of playground safety surfacing experience, our mission is to provide you with the highest quality playground safety surface products, service, and installation at an affordable investment while promoting the importance of safety on playgrounds all across the world.
          </p>
          <p className="text-lg text-gray-600 mb-6 text-left">
            With many popular options like our Poured-in-Place and Synthetic Grass or even our Bonded Rubber & Splash Pad Systems, we can easily customize our surfacing to meet any safety, design, or aesthetic requirement. Recreational Surfacing INC meets and exceeds all CPSC, IPEMA, ASTM, and ADA guidelines for playground surfacing.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-left">
            Sustainability Matters
          </h2>
          <p className="text-lg text-gray-600 text-left">
            Our materials and products conform to critical standards and certifications. Please view each product page for individual qualifications, including CPCS, ADA, ADAAG, ASTM, and IPEMA standards.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
