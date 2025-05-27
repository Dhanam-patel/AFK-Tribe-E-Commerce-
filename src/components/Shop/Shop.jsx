import { useState,useEffect } from 'react'
import React from 'react'
import Card from '../Card/card.jsx'
import './Shop.css'
import styled from 'styled-components';
import { useRef } from 'react';
import { AppContext } from '../context/context.js';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
    
    const {men,setMen} = useContext(AppContext)
    const [view_M, setView_M] = useState('View All')
    const [value, setValue] = useState(false)
    const men_cont = useRef(null)

    const handlechange = () => {


        if (value===true) {
            setView_M('View Less')
            men_cont.current.style.height = 'fit-content'
        } else {
            setView_M('View All')
            men_cont.current.style.height = '41vh'
        }
                setValue(!value)
    }


    
    const {women,setWomen} = useContext(AppContext)
    const [view_W, setView_W] = useState('View All')
    const [value_W, setValue_W] = useState(false)
    const women_cont = useRef(null)

    const handlechange_women = () => {


        if (value_W===true) {
            setView_W('View Less')
            women_cont.current.style.height = 'fit-content'
        } else {
            setView_W('View All')
            women_cont.current.style.height = '41vh'
        }
                setValue_W(!value_W)
    }
    const {kids,setKids} = useContext(AppContext)
    const [view_K, setView_K] = useState('View All')
    const [value_K, setValue_K] = useState(false)
    const kids_cont = useRef(null)

    const handlechange_kids = () => {


        if (value_K===true) {
            setView_K('View Less')
            kids_cont.current.style.height = 'fit-content'
        } else {
            setView_K('View All')
            kids_cont.current.style.height = '41vh'
        }
                setValue_K(!value_K)
    }

    return (
        <div className='shop bg-[#f5f5f5] mt-[2vw]  '>
            <h1 className='text-center my-[2vw] mb-[2vw] text-[4vw]  '>Shop</h1>
            <div  className="men border-[0.35vw] text-center rounded-2xl m-[2vw] text-[2.5vw]  ">
                <h1 className=' txt  my-[3vw] mb-[2vw] '>Men's</h1>
                <div ref={men_cont} className='flex flex-wrap justify-center gap-[1.5vw] mb-[2vw] h-[41vh] overflow-hidden'>
                    {men.map((item,index) => (
                       <Link key={index} to={`/detailes/${item.id}`} ><Card img={item.img} name={item.text} /></Link>
                    ))}
                </div>
                <StyledWrapper>
                    <button className="button text-[1vw] mb-[2vw] " onClick={handlechange} >{view_M}</button>
                </StyledWrapper>
            </div>

            <div  className="Women border-[0.35vw] text-center rounded-2xl m-[2vw] text-[2.5vw]  ">
                <h1 className=' txt  my-[3vw] mb-[2vw] '>Women's</h1>
                <div ref={women_cont} className='flex flex-wrap justify-center gap-[1.5vw] mb-[2vw] h-[41vh] overflow-hidden'>
                    {women.map((item,index) => (
                        <Link key={index} to={`/detailes/${item.id}`} ><Card img={item.img} name={item.text} /></Link>
                    ))}
                </div>
                <StyledWrapper>
                    <button className="button text-[1vw] mb-[2vw] " onClick={handlechange_women} >{view_W}</button>
                </StyledWrapper>
            </div>

             <div  className="Kids border-[0.35vw] text-center rounded-2xl mx-[2vw] mt-[2vw] text-[2.5vw]  ">
                <h1 className=' txt  my-[3vw] mb-[2vw] '>Kid's</h1>
                <div ref={kids_cont} className='flex flex-wrap justify-center gap-[1.5vw] mb-[2vw] h-[41vh] overflow-hidden'>
                    {kids.map((item,index) => (
                        <Link to={`/detailes/${item.id}`} key={index} ><Card img={item.img} name={item.text} /></Link>
                    ))}
                </div>
                <StyledWrapper>
                    <button className="button text-[1vw] mb-[2vw] " onClick={handlechange_kids} >{view_K}</button>
                </StyledWrapper>
            </div>
        </div>
    )
}
const StyledWrapper = styled.div`
  /* inspired form gumroad website */
  .button {
    --bg: #000;
    --hover-bg: white;
    --hover-text: black;
    color: #fff;
    cursor: pointer;
    border: 1px solid var(--bg);
    font-family: "Slackey";

    border-radius: 4px;
    padding: 0.8em 2em;
    background: var(--bg);
    transition: 0.2s;
  }

  .button:hover {
    color: var(--hover-text);
    transform: translate(-0.25rem, -0.25rem);
    background: var(--hover-bg);
    box-shadow: 0.25rem 0.25rem var(--bg);
  }

  .button:active {
    transform: translate(0);
    box-shadow: none;
  }`;
export default Shop
