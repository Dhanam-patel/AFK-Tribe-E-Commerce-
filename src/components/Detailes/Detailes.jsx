import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/context'
import { useParams } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import sizeChart from '../../assets/size.jpg'
import './Detailes.css'
import { Link } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom'
const Detailes = () => {
  const { id } = useParams()
  const { men, setMen, women, setWomen, kids, setKids,total,setTotal } = useContext(AppContext)
  const parsedId = parseInt(id)
  let item = null
  let Category = 'none'
  if (parsedId >= 1 && parsedId <= 11) {
    item = men.find((d) => d.id === parsedId)
    Category = 'Mens'
  } else if (parsedId >= 12 && parsedId <= 20) {
    item = women.find((d) => d.id === parsedId)
    Category = 'Womens'
  } else if (parsedId >= 21 && parsedId <= 28) {
    item = kids.find((d) => d.id === parsedId)
    Category = 'Kids'
  }

  const [sizelist, setSizelist] = useState([
    {
      Size: 'S',
    },
    {
      Size: 'M',
    },
    {
      Size: 'L',
    },
    {
      Size: 'XL',
    },
    {
      Size: 'XXL',
    },
  ])

  const { cart, setCart } = useOutletContext()

  const [selectedSize, setSelectedSize] = useState(null)

  const handlesizeChange = (e) => {
    const size = e.target.value;
    setSelectedSize(size);
  }
  const handleAddtoCart = () => {

    if (!selectedSize) {
      alert('Please select a size before adding to cart');
      return;
    }
    setTotal(total + item.price)
    const add = {
      index: cart.length + 1,
      id: id,
      Size: selectedSize,
      img: item.img ,
      text: item.text,
      category: Category,
      price: item.price, 
    }
    setCart([...cart, add])
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });


  if (!item) return <div>Product not found</div>;

  return (
    <div>
      <div className='flex justify-between '>
        <div className='flex flex-wrap w-[50%] ml-[5vw] mt-[4vw] gap-[2vw] border-[0.3vw] rounded-2xl justify-center'>
          <img className='w-[21.5vw] mt-[2vw]' src={item.img} alt="" />
          <img className='w-[21.5vw] mt-[2vw]' src={item.refimg} alt="" />
          <img className='mb-[2vw] w-[92%] ' src={sizeChart} alt="" />
        </div>
        <div className='maintext mt-[4vw] w-[38%] mr-[5vw]'>
          <h1 className=' text-[3.5vw] p-0' > {item.text} </h1>
          <Link to={'/#shop'} ><h2 className=' ml-[0.2vw] hover:text-[#3f3f3f]' >Shop more</h2></Link>
          <hr className='  mb-[1.2vw]' />
          <h1 className='ml-[0.1vw] text-[1.5vw] ' >₹ {item.price}</h1>
          <h2 className=' text-[0.8vw] text-[#3f3f3f]' >MRP incl. of all taxes</h2>
          <h2 className='mt-[1vw] text-[1.2vw]' >Please select a size.</h2>
          <ul className="flex flex-wrap gap-[1vw]">
            {sizelist.map((size, index) => (
              <li key={index} >
                <label className="cursor-pointer flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-xl hover:border-red-500 transition-all">
                  <input
                    type="radio"
                    name="size"
                    value={size.Size}
                    className="accent-red-600 w-4 h-4"
                    onClick={handlesizeChange}
                  />
                  {size.Size}
                </label>
              </li>
            ))
            }
          </ul>

          <button className='cursor-pointer bg-red-600 w-[10vw] text-[1.4vw] text-white rounded-[3px] mt-[2vw] hover:bg-[#f5f5f5] border-2 hover:border-2 hover:text-red-700 transition-all duration-200  ' onClick={handleAddtoCart} >Add to Cart</button>
          <h2 className='flex gap-[0.5vw] mt-[2vw] border-[0.1vw] p-[1vw] border-[#3f3f3f] ' ><svg xmlns="http://www.w3.org/2000/svg" height="2.8vw" fill="currentColor" viewBox="0 0 512 512">
            <path d="M 110.19130434782609 438.53913043478263 Q 189.2173913043478 497.5304347826087 280.4869565217391 485.2869565217391 L 280.4869565217391 485.2869565217391 L 280.4869565217391 485.2869565217391 Q 372.8695652173913 474.1565217391304 435.2 398.4695652173913 Q 494.1913043478261 319.44347826086954 481.9478260869565 228.17391304347825 Q 470.81739130434784 135.7913043478261 395.1304347826087 73.4608695652174 Q 316.10434782608695 14.469565217391304 224.83478260869566 26.713043478260868 Q 132.45217391304348 37.84347826086957 70.12173913043478 113.5304347826087 L 30.05217391304348 166.95652173913044 L 30.05217391304348 166.95652173913044 L 172.52173913043478 166.95652173913044 L 172.52173913043478 166.95652173913044 Q 180.31304347826088 168.0695652173913 181.42608695652174 175.8608695652174 Q 180.31304347826088 183.65217391304347 172.52173913043478 184.76521739130436 L 12.243478260869566 184.76521739130436 L 12.243478260869566 184.76521739130436 Q 4.452173913043478 183.65217391304347 3.3391304347826085 175.8608695652174 L 3.3391304347826085 15.582608695652175 L 3.3391304347826085 15.582608695652175 Q 4.452173913043478 7.791304347826087 12.243478260869566 6.678260869565217 Q 20.034782608695654 7.791304347826087 21.14782608695652 15.582608695652175 L 21.14782608695652 149.1478260869565 L 21.14782608695652 149.1478260869565 L 55.65217391304348 102.4 L 55.65217391304348 102.4 L 55.65217391304348 102.4 L 55.65217391304348 102.4 L 56.76521739130435 102.4 L 56.76521739130435 102.4 Q 100.17391304347827 47.86086956521739 160.27826086956523 24.48695652173913 Q 221.49565217391304 0 286.0521739130435 8.904347826086957 Q 350.60869565217394 17.808695652173913 406.2608695652174 60.10434782608696 Q 460.8 103.51304347826087 484.17391304347825 163.61739130434782 Q 508.6608695652174 224.83478260869566 499.75652173913045 289.39130434782606 Q 490.8521739130435 353.9478260869565 449.6695652173913 409.6 Q 405.1478260869565 464.1391304347826 345.04347826086956 487.5130434782609 Q 283.82608695652175 512 219.26956521739132 503.09565217391304 Q 154.71304347826086 494.1913043478261 99.06086956521739 453.0086956521739 Q 57.87826086956522 419.61739130434785 34.504347826086956 376.2086956521739 Q 31.16521739130435 368.4173913043478 37.84347826086957 363.96521739130435 Q 45.63478260869565 360.62608695652176 50.08695652173913 367.30434782608694 Q 72.34782608695652 408.4869565217391 110.19130434782609 438.53913043478263 L 110.19130434782609 438.53913043478263 Z" />
          </svg>
            This product is eligible for return or exchange under our 30-day return or exchange policy. No questions asked</h2>
          <div className='mt-[2vw] border-[0.1vw] p-[1vw] border-[#3f3f3f]' >
            <h1 className='text-[1.5vw]' ><b>Product Detailes</b></h1>
            <h2 className='mt-[1vw] mb-[0.5vw] text-[1.1vw]' ><b>Material & Care:</b></h2>
            <p> <br />
              100% Cotton <br />
              Machine Wash</p>
            <h2 className='my-[1vw] text-[1.1vw]' ><b>Country of Origin:</b> India (and proud)</h2>
            <h2 className='mt-[1vw] mb-[0.5vw] text-[1.1vw]'><b>Manufactured & Sold By:</b></h2>
            <p>
              AFK Tribe Pvt. Ltd. <br />
              101, Pixel Heights Industrial Estate <br />
              Code Street, Hackerville <br />
              Sector 5, Cyber City (W) <br />
              Bangalore - 560 037 <br />
              connect@afktribe.com <br />
              Customer care no. +91 22-12345678 <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detailes
