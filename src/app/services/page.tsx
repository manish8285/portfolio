import type { NextPage } from "next";
import {SERVICES} from "@/constants/services"
const Service: NextPage = () => {
  return (
    <>
        <section className="service section" id="services">
  <div className="container">
    <div className="row">
      <div className="section-title padd-15">
        <h2>Our Services</h2>
      </div>
    </div>
    <div className="row">
            {/* Service Item 1: Logo Design */}
            
            {
              SERVICES.map((service, index) => (
                <div className="service-item padd-15" key={index}>
        <div className="service-item-inner">
          <div className="icon"><i className={service.icon} /></div>
          <h4>{service.name}</h4>
          <p>{service.about}</p>
        </div>
            </div>
              ))
      }   
      
    </div>
  </div>
</section>


    </>
  );
};

export default Service;
