import React, { useEffect } from 'react'
import { useOutletContext,Link } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../context/context.js'
import { useState } from 'react'
import Empty from '../../assets/empty.png'
import styled from 'styled-components'
const Cart = () => {
  const { cart, setCart } = useOutletContext();
  useEffect(() => {
  })
  const { total, setTotal } = useContext(AppContext)
  const [arr, setArr] = useState(null)
  const handle = (index, price) => {
    setTotal(total - price);
    setCart(cart.filter(obj => obj.index !== index));

  }
  const { display, setDisplay } = useContext(AppContext)
  if(cart === null || cart.length === 0) {
    return (
      <div className='nav my-[2vw] mx-[20vw] flex flex-col items-center justify-center'>
        <img src={Empty} alt="" />
        <h1 className='text-[2vw] mt-[2vw] text-center'>Your cart seems to be empty Why don't you shop some Tees</h1>
        <div className=' m-[2vw] '>
          <StyledWrapper>
          <Link to="/"><button onClick={() => setDisplay('shop')}> Explore
            <span />
          </button></Link>
        </StyledWrapper>
        </div>
      </div>
    )
  }
  return (
    <div className='nav mx-[20vw]' >
      {cart.map((item) => (
        <div key={item.index} className="cart-item border-2 m-[2vw] flex justify-between ">
          <div className='flex' >
            <img className='h-[25vh] w-[10vw] m-[1vw] ' src={item.img} alt="" />
            <div>
              <h1 className='text-[2vw] mt-[0.2vw]' > {item.text} </h1>
              <p>Category: {item.category}</p>
              <p>Size: {item.Size}</p>
            </div>
          </div>

          <div className='flex flex-col justify-between '>
            <div className='mr-[1vw] mt-[1vw]  flex flex-col items-end ' >
              <p className='text-[1.3vw]' >₹ {item.price}</p>
              <p className=' text-[0.8vw] text-[#3f3f3f]'>MRP incl. of all taxes</p>
            </div>
            <button onClick={() => handle(item.index, item.price)} className=' m-[0.7vw] cursor-pointer bg-red-600 w-[7vw] text-[1vw] text-white rounded-[3px]  hover:bg-[#f5f5f5] border-2 hover:border-2 hover:text-red-700 transition-all duration-200  '  >Remove Item</button>
          </div>
        </div>
      ))}
          <div className='flex flex-col items-end mt-[2vw] mx-[20vw] w-[37vw]'>
            <h1>Cart Total: ₹ {total}</h1>
            <p className='flex'>
              Shipping Charges:
              <h4 className='mr-[0.7vw] ml-[0.3vw] text-green-700'>Free</h4>
              <s>₹ 50</s>
            </p>
            <hr className="w-[20vw] border-t-2 mt-[1vw]" />
            Grand Total: ₹ {total}
            <Link to='/payment' >
            <div className='mt-[0.7vw] cursor-pointer bg-red-600 w-[10vw] text-center text-[1vw] text-white rounded-[3px] hover:bg-[#f5f5f5] border-2 hover:border-2 hover:text-red-700 transition-all duration-200'>
              Proceed to pay
            </div>
            </Link>
          </div>
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
    font-family: "Oswald";
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

export default Cart
