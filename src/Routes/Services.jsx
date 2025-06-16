import React from "react";
import HeroComp from "../Components/HeroComp";
import IMAGES from "../assets/images";
import { GiCheckMark } from "react-icons/gi";

const Services = () => {
  return (
    <>
      <HeroComp $heroImage={IMAGES.image_3}>
        {/* <h1 className="fw-bold">Our Services</h1> */}
        <div className="text-center">
          <h1 className="display-4 fw-bold">Services</h1>
        </div>
      </HeroComp>

      <div className="container mt-5 p-3">
        <div className="text-center">
          <h3 className="display-6 fw-bold word-span">
            Our Core Agricultural Services
          </h3>
          <p className="lead fw-normal">
            Are You Pregnant or Have Young Children? Struggling Financially?
            We’re Here to Help!
          </p>
        </div>
        {/*  */}
      </div>
      {/*  */}

      <div className="container mx-auto my-5 row g-3">
        <div className="col-12 col-md-6 order-1 order-md-0 d-flex flex-column justify-content-center align-items-center">
          <h3 className="my-3 me-auto">What we do</h3>
          <div className="fs-5">
            {[
              {
                serviceName: "Crop Production",
                details:
                  "We cultivate staple and cash crops including maize, cassava, vegetables, soybeans, and plantain using both traditional and, modern techniques. With a focus on organic, methods and soil, health, our crops are grown sustainably and meet high market, standards.",
              },
              {
                serviceName: "Livestock Farming",
                details:
                  "Our livestock unit raises poultry, goats, and cattle in hygienic and humane conditions. We prioritize biosecurity, proper nutrition, and veterinary care to ensure healthy animals and safe meat, milk, and egg products.",
              },
              {
                serviceName: "Agri-Training & Consultancy",
                details:
                  "AgroHarvest offers hands-on training programs for aspiring farmers, students, and cooperatives. Our consultancy services cover farm setup, agribusiness planning, and agricultural best practices to boost productivity and profits.",
              },
              {
                serviceName: "Agro-Processing & Packaging",
                details:
                  "To reduce post-harvest losses, we process farm produce into market-ready items such as cassava flour, dried vegetables, and livestock feed. Our packaging ensures extended shelf life and improved branding for local and export markets.",
              },
            ].map(({ serviceName, details }) => (
              <p>
                <h5 className="fw-semibold">
                  <GiCheckMark className="word-span me-2" />
                  {serviceName}
                </h5>
                <p className="ps-4">{details}</p>
              </p>
            ))}
          </div>
        </div>
        <div className="col-12 col-md-6 order-0 order-md-1">
          <img
            className="img-fluid"
            src={IMAGES.image_1}
            alt=""
            style={
              {
                //   width: "100%",
                //   height: "auto",
                //   maxHeight: "400px",
                // objectFit: "cover",
              }
            }
          />
        </div>
      </div>

      <div className="container mx-auto my-5 row g-3">
        <div className="col-12 col-md-6">
          <img
            className="align-self-stretch"
            src={IMAGES.preg_4}
            alt=""
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "400px",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
          <h3>Why Choose AgroHarvest</h3>
          <div className="fs-5">
            <div className="list-style-none">
              <p>🌿 100% organic practices — no pesticides or GMOs</p>
              <p>📦 Farm-to-door supply chain — freshness guaranteed</p>
              <p>🌍 Environmentally sustainable methods</p>
              <p>👩‍🌾 Trained and certified agricultural experts</p>
              <p>🛰️ Smart technology (soil monitoring, irrigation systems)</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
