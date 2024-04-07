import { PROFILE } from '@/constants/profile';
import type { NextPage } from "next";
import { ContactForm } from "@/components/contact/ContactForm";

const Contact: NextPage = () => {
  return (
    <>
      <section className="contact section" id="contact">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Contact Me</h2>
            </div>
          </div>
          <div className="row">
            {/* contact-info-item */}
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-map-marker" />
              </div>
              <h4>Address</h4>
              <p>{PROFILE.address}</p>
            </div>
            {/* contact-info-item Ended */}
            {/* contact-info-item */}
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-phone" />
              </div>
              <h4>Call Us On</h4>
              <p>+91 {PROFILE.mobile}</p>
            </div>
            {/* contact-info-item Ended */}
            {/* contact-info-item */}
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-envelope" />
              </div>
              <h4>Email</h4>
              <p>{PROFILE.email}</p>
            </div>
            {/* contact-info-item Ended */}
          </div>
          {/* Contact Form */}

          <ContactForm />

          
          {/* Contact Form Ended */}
        </div>
      </section>
    </>
  );
};

export default Contact;
