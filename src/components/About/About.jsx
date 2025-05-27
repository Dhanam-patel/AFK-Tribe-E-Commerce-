import React from 'react'
import Card from '../Card/card.jsx'
import './About.css'

const About = () => {
  return (
    <div className='flex justify-center my-[5vw] bg-red-700' > 
       
      <div className=' w-[50%] text-white' >
        <h1 className='intext flex justify-start mx-[3.5vw] text-[4vw] mt-[5.5vw] ' >"Not just a fit, it’s a whole mood."</h1> <br />
        <p className=' inpara flex justify-center mx-[4vw] mt-[4vw] m-[2vw] text-[1.7vw]' > We are a Gen Z clothing brand built for those who live loud, dress bold, and love oversized comfort. We blend street style with statement fashion — perfect for content creators, trendsetters, and anyone who's done with boring fits. If you're all about expressing yourself without saying a word, you're already one of us. Stay comfy. Stay bold. Stay AFK. </p>
      </div>
      <div className='w-[50%] flex  ' >
        <ul >
            <li className='mx-[5vw] my-[2vw] mb-[10vw] ' ><Card img={'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1746279593_3790759.jpg?format=webp&w=480&dpr=1.0'} name={'Upcoming'}/></li>
            <li className='mx-[5vw] my-[2vw] mt-[10vw] ' ><Card img={'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1732882899_9115634.jpg?format=webp&w=480&dpr=1.0'} name={'Upcoming'} /></li>
        </ul>
        <div className='mt-[17vw]'>
            <Card img={'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1742462378_8744677.jpg?format=webp&w=480&dpr=1.0'} name={'Upcoming'} />
        </div>
      </div>
    </div>
  )
}

export default About
