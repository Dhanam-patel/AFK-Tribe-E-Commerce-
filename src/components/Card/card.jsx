import React from 'react';
import './card.css';

function Card(props) {
  return (
    <div className=" Card relative h-[40vh] w-[17vw] rounded-lg shadow-[2px_2px_5px_rgb(0,0,0.5)] overflow-hidden">
      <img
        src={props.img}
        alt="image"
        className="h-full w-full object-cover"
      />
      <div className=" Ctext absolute bottom-0 left-0 text-[1.4vw] w-full bg-black/60 text-white text-center py-2 z-10 backdrop-blur-md opacity-0 ">
        {props.name}
      </div>
    </div>
  );
}

export default Card;
