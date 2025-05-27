import { useState, useRef, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import { AppContext } from './components/context/context.js';
import Footer from './components/Footer/Footer.jsx';
import { Outlet, useLocation } from 'react-router-dom';
function App() {
  const [men, setMen] = useState([
    {
      id: 1,
      img: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1747757468_7999127.jpg?format=webp&w=480&dpr=1.0',
      refimg: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1747918650_4022997.jpg?format=webp&w=480&dpr=1.0',
      text: 'Peanut the Racer',
      price: 1049
    },
    {
      id: 2,
      img: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1746686761_2999041.jpg?format=webp&w=480&dpr=1.0',
      refimg: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1747918650_4022997.jpg?format=webp&w=480&dpr=1.0',
      text: 'Wakanda Forever',
      price: 2199
    },
    {
      id: 3,
      img: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1746817955_1075670.jpg?format=webp&w=480&dpr=1.0',
      refimg: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1747918650_4022997.jpg?format=webp&w=480&dpr=1.0',
      text: 'Classic Strips',
      price: 899
    },
    {
      id: 4,
      img: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1727525622_8849007.jpg?format=webp&w=480&dpr=1.0',
      refimg: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1747918650_4022997.jpg?format=webp&w=480&dpr=1.0',
      text: 'Big Bang Street Style',
      price: 999
    },
    {
      id: 5,
      img: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1731326356_5341039.jpg?format=webp&w=480&dpr=1.0',
      refimg: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1747918650_4022997.jpg?format=webp&w=480&dpr=1.0',
      text: 'Eternal Kalyug',
      price: 1099
    },
    {
      id: 6,
      img: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1697773221_1371149.jpg?format=webp&w=480&dpr=1.0',
      refimg: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1747918650_4022997.jpg?format=webp&w=480&dpr=1.0',
      text: 'Killing it',
      price: 2199
    },
    {
      id: 7,
      img: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1747245658_7766444.jpg?format=webp&w=480&dpr=1.0',
      refimg: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1747918650_4022997.jpg?format=webp&w=480&dpr=1.0',
      text: 'Chibi Hunters',
      price: 1199
    },
    {
      id: 8,
      img: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1747289308_4408641.jpg?format=webp&w=480&dpr=1.0',
      refimg: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1747918650_4022997.jpg?format=webp&w=480&dpr=1.0',
      text: 'Brooklyne 99th',
      price: 799
    },
    {
      id: 9,
      img: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1747486084_3696029.jpg?format=webp&w=480&dpr=1.0',
      refimg: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1747918650_4022997.jpg?format=webp&w=480&dpr=1.0',
      text: 'Master of Chi',
      price: 899
    },
    {
      id: 10,
      img: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1747759310_8382468.jpg?format=webp&w=480&dpr=1.0',
      refimg: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1747918650_4022997.jpg?format=webp&w=480&dpr=1.0',
      text: 'Vagabond',
      price: 2099
    },
    {
      id: 11,
      img: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1747286977_4635387.jpg?format=webp&w=480&dpr=1.0',
      refimg: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1747918650_4022997.jpg?format=webp&w=480&dpr=1.0',
      text: 'Urashima Taro',
      price: 999
    },
  ])

  const [women, setWomen] = useState([
    {
      id: 12,
      img: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1723093864_1009730.jpg?format=webp&w=480&dpr=1.0',
      refimg: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1746264726_7701513.jpg?format=webp&w=480&dpr=1.0',
      text: 'Its Her Choice',
      price: 1049
    },
    {
      id: 13,
      img: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1738155077_6118083.jpg?format=webp&w=480&dpr=1.0',
      refimg: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1746264726_7701513.jpg?format=webp&w=480&dpr=1.0',
      text: 'Trident',
      price: 899
    },
    {
      id: 14,
      img: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1728654846_3669327.jpg?format=webp&w=480&dpr=1.0',
      refimg: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1746264726_7701513.jpg?format=webp&w=480&dpr=1.0',
      text: 'Hot Head',
      price: 2099
    },
    {
      id: 15,
      img: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1746423412_9594146.jpg?format=webp&w=480&dpr=1.0',
      refimg: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1746264726_7701513.jpg?format=webp&w=480&dpr=1.0',
      text: 'Captain Micky',
      price: 1049
    },
    {
      id: 16,
      img: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1741241784_3930706.jpg?format=webp&w=480&dpr=1.0',
      refimg: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1746264726_7701513.jpg?format=webp&w=480&dpr=1.0',
      text: 'Manifest it',
      price: 2099
    },
    {
      id: 17,
      img: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1731766877_9716119.jpg?format=webp&w=480&dpr=1.0',
      refimg: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1746264726_7701513.jpg?format=webp&w=480&dpr=1.0',
      text: 'Chaos',
      price: 899
    },
    {
      id: 18,
      img: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1713508822_5140381.jpg?format=webp&w=480&dpr=1.0',
      refimg: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1746264726_7701513.jpg?format=webp&w=480&dpr=1.0',
      text: 'Minions- the weird ones',
      price: 1049
    },
    {
      id: 19,
      img: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1744703868_1593100.jpg?format=webp&w=480&dpr=1.0',
      refimg: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1746264726_7701513.jpg?format=webp&w=480&dpr=1.0',
      text: 'Chaos',
      price: 899
    },
    {
      id: 20,
      img: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1747470538_2367798.jpg?format=webp&w=480&dpr=1.0',
      refimg: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1746264726_7701513.jpg?format=webp&w=480&dpr=1.0',
      text: '100% Angel',
      price: 2099
    },
  ])

  const [kids, setKids] = useState([
    {
      id: 21,
      img: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1735623923_7722457.jpg?format=webp&w=480&dpr=1.0',
      refimg: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1747918650_4022997.jpg?format=webp&w=480&dpr=1.0',
      text: 'Rainbow sky',
      price: 1049
    },
    {
      id: 22,
      img: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1735454861_1894215.jpg?format=webp&w=480&dpr=1.0',
      refimg: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1747918650_4022997.jpg?format=webp&w=480&dpr=1.0',
      text: 'Cute Bunny',
      price: 899
    },
    {
      id: 23,
      img: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1731398941_4027015.jpg?format=webp&w=480&dpr=1.0',
      refimg: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1747918650_4022997.jpg?format=webp&w=480&dpr=1.0',
      text: 'Batman Geometry',
      price: 1049
    },
    {
      id: 24,
      img: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1741167838_9183332.jpg?format=webp&w=480&dpr=1.0',
      refimg: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1747918650_4022997.jpg?format=webp&w=480&dpr=1.0',
      text: "Good Ol' Snoopy",
      price: 999
    },
    {
      id: 25,
      img: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1724772905_8323262.jpg?format=webp&w=480&dpr=1.0',
      refimg: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1747918650_4022997.jpg?format=webp&w=480&dpr=1.0',
      text: 'Wild Urban Doodle',
      price: 899
    },
    {
      id: 26,
      img: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1733977383_2673893.jpg?format=webp&w=480&dpr=1.0',
      refimg: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1747918650_4022997.jpg?format=webp&w=480&dpr=1.0',
      text: 'Little Glitter',
      price: 1049
    },
    {
      id: 27,
      img: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1721047371_4955204.png?format=webp&w=480&dpr=1.0',
      refimg: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1747918650_4022997.jpg?format=webp&w=480&dpr=1.0',
      text: 'Marvel Comics',
      price: 899
    },
    {
      id: 28,
      img: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1731994381_9163403.jpg?format=webp&w=480&dpr=1.0',
      refimg: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1747918650_4022997.jpg?format=webp&w=480&dpr=1.0',
      text: 'Army Boy',
      price: 999
    },
  ]);
  const [display, setDisplay] = useState('home');

  useEffect(() => {
    if (display === 'footer') {
      window.scrollTo({ top: 4000, behavior: 'smooth' });
      console.log('Scrolled to top (home)');
      return;
    }

  }, [display, location]);

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0)
  return (
    <AppContext.Provider value={{ men, setMen, women, setWomen, kids, setKids, display, setDisplay,total, setTotal }}>
      <div className='bg-[#f5f5f5] flex flex-col min-h-screen justify-between'>
        <Navbar logo={'AFK Tribe'} />
        <Outlet context={{ cart, setCart }} />
        <section id="footer"><Footer /></section>
      </div>
    </AppContext.Provider>
  );
}

export default App;
