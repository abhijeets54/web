import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import imageUrl from '../../IOC Website pictures/ioc website content/About us/team.png'; // Use ES6 import syntax

function About() {
  const navigate = useNavigate();
  const [showFullText, setShowFullText] = useState(false);

  const handleMoreAboutUs = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="flex flex-col items-center mt-0 bg-white pb-8">
      <div className="w-full max-w-6xl">
        <div className="border-0">
          <div className="w-full">
            <img
              src={imageUrl}
              className="w-full h-full object-cover rounded-start shadow rounded-md mt-5"
              alt="Initiators of Change Team"
            />
          </div>
          <div className="w-full px-4 py-6 flex flex-col justify-center">
            <div className="card-body">
              <h5 className="text-3xl mb-3">About Us</h5>
              <p className={`text-justify mb-3 ${!showFullText ? 'line-clamp-3' : ''}`}>
                Welcome to Initiators of Change, where Punjab's youth are driving dynamic and impactful change. Since our establishment in 2015, we've been on a mission to cultivate a new generation of people who are socially active and aware. Through our three pillars of action—awareness, humanitarian aid, and education. We're making a tangible difference for the youth. 
              </p>
              {showFullText && (
                <>
                  <p className="text-justify mb-3">
                    This Punjab-based youth development non-profit organization was established in 2015 with a vision to create young and energetic leaders for the country. Initiators of Change have been working with Ludhiana District Administration and Municipal Corporation on various social projects.
                  </p>
                  <p className="text-justify mb-3">
                    The organization has successfully organized various youth conferences in various cities in Punjab and north India and has impacted millions. In the realm of awareness, we believe in the power of knowledge to drive meaningful action. Our initiatives, such as "I Vote, I Lead," Project Saanjh, and SMYC, empower individuals with the information they need to make informed decisions about voting, mental health, and more.
                  </p>
                  <p className="text-justify mb-3">
                    From providing essential relief during the COVID-19 pandemic to responding swiftly to natural disasters like floods, our goal is to stand by those in need and offer immediate support. Education is the cornerstone of our vision for a brighter future. Through projects like Project Usaari and the Usaari Youth Fest, we're breaking down educational barriers and fostering a culture of learning for all backgrounds.
                  </p>
                  <p className="text-justify mb-3">
                    Join us in our mission to drive change and empower others through education. At Initiators of Change, there's a place for everyone who shares our vision of a world where everyone has the opportunity to thrive. Together, let's build a better future for all.
                  </p>
                </>
              )}
              <button className="btn btn-danger mt-4" onClick={handleMoreAboutUs}>
                {showFullText ? 'Show Less' : 'More About Us'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
