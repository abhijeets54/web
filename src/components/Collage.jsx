import React from 'react';
import { useNavigate } from 'react-router-dom';

function Collage() {
  const navigate = useNavigate();

  const handleDonateClick = (e) => {
    e.stopPropagation();  // Prevent event propagation
    navigate('/Donate'); // Make sure this path matches your routing setup
  };

  const handleJoinUsClick = (e) => {
    e.stopPropagation();  // Prevent event propagation
    navigate('/JoinUs'); // Make sure this path matches your routing setup
  };

  return (
    <div className="relative">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner" style={{ height: '100vh' }}>
          <div className="carousel-item active">
            <img
              src="../../IOC Website pictures/ioc website content/three pillars/Awareness/Collage1.JPG"
              className="d-block w-100 h-screen object-cover"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src="../../IOC Website pictures/ioc website content/three pillars/Education cover.jpg"
              className="d-block w-100 h-screen object-cover"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src="../../IOC Website pictures/ioc website content/home page/Fatimawithstudents.JPG"
              className="d-block w-100 h-screen object-cover"
              alt="Third slide"
            />
          </div>
        </div>
        {/* Removed the carousel-control-prev and carousel-control-next buttons */}
      </div>

      <div className="absolute inset-0 flex items-center bg-black bg-opacity-50">
        <div className="flex flex-col items-start ml-10 text-white">
          <p className="text-2xl">Welcome to Initiators of Change,</p>
          <h4 className="text-5xl mt-1 font-medium">Creating Leaders, Transforming Lives</h4>
          <div className="buttons flex flex-row mt-1">
            <button className="m-2 px-4 py-2 rounded-3xl bg-red-500 text-white" onClick={handleDonateClick}>Donate now</button>
            <button className="m-2 px-4 py-2 rounded-3xl border-2 border-white bg-transparent text-white" onClick={handleJoinUsClick}>Join us</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collage;
