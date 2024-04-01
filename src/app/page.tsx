import { PROFILE } from '@/constants/profile'
import {SOCIAL_LINKS} from '@/constants/social'

export default async function Home() {

  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <img
              src="/imgs/manish.jpg"
              alt="Al Siam Profile"
              className="shadow-dark"
            />
            <h1>{`${PROFILE.first_name} ${PROFILE.middle_name} ${PROFILE.last_name}`}</h1>
            <p>{PROFILE.profile}</p>
            <div className="social-links">
              {
                SOCIAL_LINKS.map((link, index) => (
                  <a href={link.href} target="_blank" key={index}>
                  <i className={link.class_name} />
                </a>
                ))
              }
             
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
