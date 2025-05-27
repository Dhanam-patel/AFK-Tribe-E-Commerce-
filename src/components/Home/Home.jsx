import React from 'react';
import styled from 'styled-components';
import About from '../About/About.jsx';
import Shop from '../Shop/Shop.jsx';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/context.js';
const Home = () => {
    const location = useLocation();
  const { display } = useContext(AppContext);
  useEffect(() => {
    if (display) {
      if (display === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const element = document.getElementById(display);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        setTimeout(() => {
          const retryElement = document.getElementById(display);
          if (retryElement) {
            retryElement.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  }, [display, location]);
  return (
    <div className='bg-[#f5f5f5]'>
      <div className='flex gap-4 justify-center my-[5vw] ' >
          <div className="men bg-red-700 w-[15vw] h-[40vh] hover:w-[35vw] transition-all duration-300 overflow-hidden flex items-center justify-center"> <img className='object-cover w-full h-full' src='https://cdn.dribbble.com/users/3534724/screenshots/13954934/media/aec626055a82f3a31018c4ccfadd42e8.jpg' alt="" /> </div>
        <div className="men bg-green-700 w-[15vw] h-[40vh] hover:w-[35vw] transition-all duration-300 flex items-center justify-center"> <img className='object-cover w-full h-full' src="https://static.vecteezy.com/system/resources/previews/000/662/994/non_2x/vector-colorful-fashion-sale-banner.jpg" alt="" /> </div>
        <div className="men bg-amber-700 w-[15vw] h-[40vh] hover:w-[35vw] transition-all duration-300 flex items-center justify-center"> <img className='object-cover w-full h-full' src="https://img.freepik.com/premium-psd/baby-fashion-cloth-wear-sale-banner-post-promotional-web-banner-psd-file_673898-771.jpg" alt="" /> </div>
      </div>
      <div className='flex justify-center' >
        <StyledWrapper>
          <a href="#shop"><button> Explore
            <span />
          </button></a>
        </StyledWrapper>
      </div>
      <section id="about"><About /></section>
      <section id="shop"><Shop /></section>
    </div>
  )
}
const StyledWrapper = styled.div`
  button {
    border: none;
    display: block;
    position: relative;
    padding: 0.7em 2.4em;
    font-size: 18px;
    background: transparent;
    cursor: pointer;
    user-select: none;
    overflow: hidden;
    color: red;
    z-index: 1;
    font-family: "Slackey";
    font-weight: 500;
  }

  button span {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    z-index: -1;
    border: 4px solid red;
  }

  button span::before {
    content: "";
    display: block;
    position: absolute;
    width: 8%;
    height: 500%;
    background: var(--lightgray);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-60deg);
    transition: all 0.3s;
  }

  button:hover span::before {
    transform: translate(-50%, -50%) rotate(-90deg);
    width: 100%;
    background: red;
  }

  button:hover {
    color: white;
  }

  button:active span::before {
    background: #cd2727;
  }`;

export default Home
