'use client'
import Head from 'next/head';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import profilePic from './Images/newdp.png'
import headerImg from './Images/name.png'
import aboutFace from './Images/aboutFaceWhite.jpg'
import backgroundImage from './Images/htmlicon.png';
import htmlIcon from './Images/htmlicon.png'
import cssIcon from './Images/cssicon.png'
import jsIcon from './Images/jsicon.png'
import nextjsIcon from './Images/nextjs.png'
import bplanCert from './Images/bpcert.jpg'
import tailwind from './Images/tailwind.png'
import typecsript from './Images/typescript.png'
import bplanDoc from './Images/bplan.jpg'
import codefestCert from './Images/codefestCert1.png'
import codefestDoc from './Images/codefest.jpg'
import bplanAwarding from './Images/bplan_awarding.jpg'
import fbIcon from './Images/facebookIcon-removebg-preview.png'
import emailIcon from './Images/emailIcon.png'
import IgIcon from './Images/facebookIcon-removebg-preview.png'
import cursor from './Images/cursor.png'
import aboutImg from './Images/aboutimg.jpeg'
import projThumbnail from './Images/1stprogwbg.png'
import Typewriter from 'typewriter-effect';
import AOS from 'aos';
import 'aos/dist/aos.css';
import nodejs from './Images/nodejs.png'
import firebase from './Images/firebase.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub  } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import { faMousePointer } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Headroom from 'react-headroom';

export default function Page() {
  const [navbar, setNavbar] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);
  const iconSize = "7x";
  return (
    <div className='bg-black'>
      <Head>
        <title>Create Next Responsive Navbar With Tailwind CSS</title>
      

        
      </Head>
      <Headroom>
      <nav className="w-full bg-black" data-aos="fade-up" data-aos-duration="1000">
        <div className="justify-between  z-30 px-4 md:items-center md:flex md:px-8  ">
          <div>
            <div className="flex items-center justify-between   md:block" >
              <div className='flex flex-row'>
            <Image
      src={headerImg}
      width={80}
      height={60}
      alt="Picture of the author"
     
    />
    
    </div>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center header-hover  pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 lg:mr-12 ">
                <li className="text-white text-center">
                <ScrollLink
  to="homepage"
  smooth={true}
  duration={500}
  offset={-100}
  className="cursor-pointer"
>
  <a>Home</a>
</ScrollLink>
                </li>
                <li className="text-white text-center ">
                <ScrollLink
  to="aboutPage"
  smooth={true}
  duration={500}
  offset={-100}
  className="cursor-pointer"
>
  
  <a>About</a>
</ScrollLink>

                </li>
                <li className="text-white text-center">
                <ScrollLink
  to="projectsPage"
  smooth={true}
  duration={500}
  offset={-100}
  className="cursor-pointer"
>
  
  <a>Projects</a>
</ScrollLink>

                </li>
                <li className="text-white text-center">
                <ScrollLink
  to="contactPage"
  smooth={true}
  duration={500}
  offset={-100}
  className="cursor-pointer animate-wiggle"
>
  
  <a>Contact</a>
</ScrollLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      </Headroom>
      <div className="h-screen w-screen flex justify-between items-center " id='homepage' >
        
  <Image
    className="float-left mb-24 hidden sm:block sm:w-2/4 lg:w-2/5 ml-auto" data-aos="fade-up" data-aos-duration="1000"
    
    src={profilePic}
   
    alt="Picture of the author"
  />
   
  <div style={{ color: 'white', marginTop: '-20vh', width: '400px'   }} className='text-center  text-[36px] mx-auto sm:text-left xl:mr-auto glitch' id='textGlitch' data-aos="fade-up" data-aos-duration="1000">
    <span className="text-[18px] smallestcpsize:text-[14px]  smallcpsize:text-[16px] homepagescreen:text-[22px]">Hello there, I am</span>
    <Typewriter
      options={{
        strings: ['<span style="font-weight: bold; color: #EDF2F7;">James Adrian</span>'],
       
        autoStart: true,
        loop: true,
        wrapperClassName: 'typewriter-wrapper', // Add a custom class name for styling
        cursorClassName: 'typewriter-cursor ' // Add a custom class name for styling the cursor
      }}
      onInit={(typewriter) => {
        typewriter
          .callFunction(() => {
            console.log('String typed out!');
          })
          .pauseFor(2500)
          .deleteAll()
          .callFunction(() => {
            console.log('All strings were deleted');
          })
          .start();
      }}
    />
    <p className=" smallestcpsize:text-[14px]  smallcpsize:text-[16px] sm:text-[16px] xl:text-[21px] mt-4 text-white mb-5  md:text-xl homepagescreen:text-[22px]" data-aos="fade-up" data-aos-duration="1000">
    Aspiring Software Developer
      
    </p> 
   
    <a href="https://web.facebook.com/jamesdenoy12/" target="_blank" rel="noopener noreferrer" className="icon-link" >
  <FontAwesomeIcon icon={faFacebook} className="text-black m-2 text-3xl animate-custom-bounce bg-gray-500 rounded-full p-2 "  />
</a>

    <a href="https://www.instagram.com/dr1annnnnnn/" target="_blank" rel="noopener noreferrer" className="icon-link" >
    <FontAwesomeIcon icon={faInstagram} className="text-black m-2  text-[1.906rem] animate-custom-bounce  bg-gray-500  rounded-full p-2" />
    </a>
    <a href="https://github.com/dr1ann" target="_blank" rel="noopener noreferrer" className="icon-link"  >
    <FontAwesomeIcon icon={faGithub} className="text-black m-2 text-3xl animate-custom-bounce bg-gray-500  rounded-full p-2" />
    </a>
    <a href="mailto:jamesdenoy56@gmail.com" target="_blank" rel="noopener noreferrer" className="icon-link"  >
    <FontAwesomeIcon icon={faEnvelope} className="text-black  text-forghIcon animate-custom-bounce  m-2 bg-gray-500 rounded-full p-2" />

    </a>
  
  </div>
</div>
<h1 className="text-center mt-4 mb-10 text-[1.5rem] cpsize:text-[2.25rem] font-bold  text-white animate-pulse" data-aos="fade-up" data-aos-duration="1000" id='aboutPage'>
<span className='text-gray-500' > ⸻ </span>ABOUT ME<span className='text-gray-500'> ⸻ </span>
    </h1>
<div>
<div className="bg-black">
  <div className="flex flex-col xl:flex-row" data-aos="fade-up" 
        data-aos-duration="1000">
   
    <div  className="xl:ml-auto  cc:mt-2 xx:mt-0 zz:mt-4  xl:my-auto">
      <Image 
        className="shadow-3xl   w-[75%] sm:w-[70%] md:w-[60%] aboutpic:w-[55%] xl:my-auto lg:w-[35rem] xl:w-[30rem] mx-auto  bigmonitor:w-[40rem] shadow-gray-500 rounded-xl transform transition duration-500 hover:scale-125"  
        src={aboutImg}
        
        alt="Picture of the author"
      />
    </div>
 
    <p className="text-left text-[0.75rem] cpsize:text-[1rem] mt-10 text-white shadow-3xl lg:mr-auto  shadow-gray-500 w-[80%] md:w-5/6 xl:mr-auto xl:ml-10  xl:w-[45%] xl:my-auto   p-6 mx-auto bigmonitor:text-[1.50rem]" data-aos="fade-up" data-aos-duration="1000">
      Hello! I'm <span className="text-gray-200 font-bold">James Adrian A. Denoy</span>, a 17-year-old Grade 12 student currently residing in Brgy. Tambulilid, Ormoc City, Philippines. From a young age, I've had a deep fascination with computers and technology. I would spend hours exploring the intricacies of websites, wondering how they worked and what made them function.
      <br/><br/>
      As an aspiring software developer, I am driven by my passion for creating innovative solutions and bringing ideas to life through code. I am currently honing my skills in Web Development, where I am gaining valuable knowledge in various programming languages and development tools.
    </p>
 
  </div>
</div>

<h1 className=" flex justify-start p-5 items-center text-2xl font-bold text-white  mt-10 mb-10 animate-pulse" data-aos="fade-up" data-aos-duration="1000">
SKILLS <span className='text-gray-500'> ⸻ </span>

     </h1>
    <div className="flow-root p-5 ">
     <div className='mx-auto max-w-[80%] zz:max-w-[60%] frame skill-container bg-black shadow-3xl shadow-gray-500   rounded-xl' data-aos="fade-up" 
        data-aos-duration="1000">
  

     <h3 className='text-white text-center font-bold px-[7px] pb-[7px] pt-[30px]' data-aos="fade-up" 
        data-aos-duration="1000">FRONT-END DEVELOPMENT</h3>
     <div className='flex flex-row flex-wrap  justify-center items-center gap-[24px]  p-[1em]'data-aos="fade-up" 
        data-aos-duration="1000" >
  <div className="bg1 flex flex-row items-center flex-wrap  justify-center bg-gray-500 px-[8px] py-1 gap-2 rounded-xl"  >
    <Image className="img1 w-8 h-8 object-contain" src={htmlIcon} alt="HTML icon" />
    <p className='font-bold flex items-center text-gray-200 text-center'>HTML</p>
    
  </div>

  <div className="flex flex-row items-center flex-wrap justify-center bg-gray-500 px-[8px] py-1 gap-2 rounded-xl" data-aos="fade-up" 
        data-aos-duration="1000">
    <Image className="w-8 h-8 object-contain" src={cssIcon} alt="CSS icon" />
    <p className='font-bold flex items-center text-gray-200 text-center'>CSS</p>
  </div>

  <div className="flex flex-row items-center flex-wrap justify-center bg-gray-500 px-[8px] py-1 gap-2 rounded-xl" data-aos="fade-up" 
        data-aos-duration="1000">
    <Image className="w-8 h-8 object-contain" src={jsIcon} alt="JavaScript icon" />
    <p className='font-bold flex items-center text-gray-200 text-center'>JavaScript</p>
  </div>
</div>








<h3 className='text-white  mt-10 font-bold text-center p-[7px]' data-aos="fade-up" 
        data-aos-duration="1000">BACK-END DEVELOPMENT</h3>
<div className='flex flex-row flex-wrap justify-center items-center gap-[24px]  p-[1em]' >
  <div className="flex flex-row items-center flex-wrap justify-center bg-gray-500 px-[8px] py-1 gap-2 rounded-xl" data-aos="fade-up" 
        data-aos-duration="1000">
    <Image className="w-8 h-8 object-contain" src={nodejs} alt="HTML icon" />
    <p className='font-bold flex items-center text-gray-200 text-center'>Node.js</p>
  </div>

  <div className="flex flex-row items-center flex-wrap justify-center bg-gray-500 px-[8px] py-1 gap-2 rounded-xl" data-aos="fade-up" 
        data-aos-duration="1000">
    <Image className="w-8 h-8 object-contain" src={firebase} alt="CSS icon" />
    <p className='font-bold flex items-center text-gray-200 text-center'>Firebase</p>
  </div>


 
</div>
<h3 className='text-white  mt-10 font-bold text-center p-[7px]' data-aos="fade-up" 
        data-aos-duration="1000">CURRENTLY LEARNING</h3>
<div className='flex flex-row flex-wrap justify-center items-center gap-[24px]  px-[1em] pt-[1em] pb-[30px]' >
  <div className="flex flex-row items-center flex-wrap justify-center bg-gray-500 px-[8px] py-1 gap-2 rounded-xl" data-aos="fade-up" 
        data-aos-duration="1000">
    <Image className="w-8 h-8 object-contain" src={nextjsIcon} alt="HTML icon" />
    <p className='font-bold flex items-center text-gray-200 text-center'>Next.js</p>
  </div>

  <div className="flex flex-row items-center flex-wrap justify-center bg-gray-500 px-[8px] py-1 gap-2 rounded-xl" data-aos="fade-up" 
        data-aos-duration="1000">
    <Image className="w-8 h-8 object-contain" src={tailwind} alt="CSS icon" />
    <p className='font-bold flex items-center text-gray-200 text-center'>Tailwind CSS</p>
  </div>
  <div className="flex flex-row items-center flex-wrap justify-center bg-gray-500 px-[8px] py-1 gap-2 rounded-xl" data-aos="fade-up" 
        data-aos-duration="1000">
    <Image className="w-8 h-8 object-contain" src={typecsript} alt="CSS icon" />
    <p className='font-bold flex items-center text-gray-200 text-center'>TypeScript</p>
  </div>

 
</div>
     </div>
  


<h1 className=" flex justify-start items-center text-2xl font-bold text-white  mt-10 mb-10 animate-pulse" data-aos="fade-up" data-aos-duration="1000">
ACHIEVEMENTS <span className='text-gray-500'> ⸻ </span>

     </h1>
     
     <div className='max-w-[80%] mx-auto'>
     <div className="flex flex-col xx:flex-row items-center justify-center mt-10" data-aos="fade-up" data-aos-duration="1000">
 
   
   
      <Image    
        className="mb-2 md:mb-8 xx:mb-0 xx:mr-8 shadow-3xl  w-[25rem] shadow-gray-500 object-cover rounded-xl transform transition duration-500 hover:scale-125 hover:z-10" 
        src={bplanCert}
      
        alt="JS Icon"
      />
   
 
    
   <div className='shadow-3xl shadow-gray-500 p-5 mt-5 md:mt-0'>
      <h1 className="text-center mb-4 text-[1rem] med1small:text-xl cpsize:text-3xl sm:text-4xl bigmonitor:text-[2.875rem] text-gray-200 font-bold" data-aos="fade-up" data-aos-duration="1000">
      BUSINESS PLAN
      </h1>
    

      <p className="text-white mt-2 text-[0.625rem] med1small:text-[0.75rem] cpsize:text-[1rem] text-left md:text-left bigmonitor:text-[1.50rem]" data-aos="fade-up" data-aos-duration="1000">
      Our participation in the business plan competition marked our team's first collaborative website development project. We created an innovative platform that bridges the gap between service seekers and providers, leveraging our diverse skills and fostering teamwork. This transformative experience fueled our growth as developers and inspired us to continue making an impact in the digital landscape.
      </p>
    
    </div>
  </div>
  
  <div className="flex flex-col  xx:flex-row-reverse items-center mt-10 justify-center" data-aos="fade-up" data-aos-duration="1000">
 
  <Image    
  className=" mb-2  md:mb-8 xx:mb-0 xx:ml-8 shadow-3xl w-[25rem] shadow-gray-500 object-cover  rounded-xl transform transition duration-500 hover:scale-125 hover:z-10"
  src={codefestCert}

  alt="JS Icon"
/>



 <div className='shadow-3xl shadow-gray-500 p-5 mt-5 md:mt-0 '>
      <h1 className="text-center mb-4 text-[1rem] med1small:text-xl cpsize:text-3xl sm:text-4xl bigmonitor:text-[2.875rem] text-gray-200 font-bold" data-aos="fade-up" data-aos-duration="1000">
        CODE FEST 
      </h1>
    

      <p className="text-white mt-2 text-[0.625rem] med1small:text-[0.75rem] cpsize:text-[1rem] text-left md:text-left bigmonitor:text-[1.50rem]" data-aos="fade-up" data-aos-duration="1000">
      Our participation in the Code Fest coding competition marked our team's exciting debut in the world of competitive programming. As a front-end developer, I contributed to the development of a sophisticated grading system. This experience allowed me to showcase my skills, collaborate with talented teammates, and embrace the challenges of real-world coding projects.
      </p>
    
    </div>
  </div>
 
  
  </div>




  {/* 2nd ACHIEVEMENT */}

  <h1 className="text-center mt-32 mb-10 text-[1.375rem] medsmall:text-[1.5rem] cpsize:text-[2.25rem] font-bold  text-white animate-pulse" data-aos="fade-up" data-aos-duration="1000" id='projectsPage'>
<span className='text-gray-500' > ⸻ </span>PROJECTS<span className='text-gray-500'> ⸻ </span>
    </h1>

    <div className='max-w-[80%] mx-auto'>
     <div className="flex flex-col xx:flex-row items-center justify-center mt-10" data-aos="fade-up" data-aos-duration="1000">
 
   
   
      <Image    
        className="mb-2 md:mb-8 xx:mb-0 xx:mr-8 shadow-3xl  w-[25rem] shadow-gray-500 object-cover rounded-xl " 
        src={projThumbnail}
      
        alt="JS Icon"
      />
   
 
    
   <div className='shadow-3xl shadow-gray-500 p-5 mt-6 md:mt-0'>
      <h1 className="text-left  text-3xl cpsize:text-4xl bigmonitor:text-[2.875rem] text-gray-200 font-bold" data-aos="fade-up" data-aos-duration="1000">
      FasTrack
      </h1>
      <div className=' '>
      <p className="inline-block mr-[0.25rem] text-[0.688rem] cpsize:text-[1rem] bigmonitor:text-[1.50rem] text-white font-500 rounded-full bg-gray-500 px-2 py-[2px] mt-5">
      HTML
      </p>
      <p className="inline-block mr-[0.25rem] text-[0.688rem] cpsize:text-[1rem] bigmonitor:text-[1.50rem] text-white font-500 rounded-full bg-gray-500 px-2 py-[2px] mt-5">
      CSS
      </p>
      <p className="inline-block mr-[0.25rem] text-[0.688rem] cpsize:text-[1rem] bigmonitor:text-[1.50rem] text-white font-500 rounded-full bg-gray-500 px-2 py-[2px] mt-5">
      Javascript
      </p>
      <p className="inline-block mr-[0.25rem] text-[0.688rem] cpsize:text-[1rem] bigmonitor:text-[1.50rem] text-white font-500 rounded-full bg-gray-500 px-2 py-[2px] mt-5">
      Node.js
      </p>
      <p className="inline-block text-[0.75rem] cpsize:text-[1rem] bigmonitor:text-[1.50rem] text-white font-500 rounded-full bg-gray-500 px-2 py-[2px] mt-5">
      Firebase
      </p>
      
      </div>

      <p className="text-white mt-2 text-[0.625rem] med1small:text-[0.75rem] cpsize:text-[1rem] text-left md:text-left bigmonitor:text-[1.50rem]" data-aos="fade-up" data-aos-duration="1000">
      FasTrack is a dynamic and user-friendly online e-commerce platform designed exclusively for residents of Ormoc City. Developed over a span of 7 months, this feature-rich website incorporates a robust backend powered by <b>Node.js</b> and utilizes <b>Firebase</b> for seamless database integration.
      </p>
      <div className="flex items-center justify-start mt-4">
     
     <a href="https://dr1ann.github.io/fastrack-e-commerce/" data-aos="fade-up" data-aos-duration="1000" target="_blank" rel="noopener noreferrer" className="text-white text-[0.75rem] cpsize:text-[1rem] bigmonitor:text-[1.50rem] bg-gray-500 animate-custom-bounce  rounded-2xl px-2 py-2 font-bold" >VISIT PROJECT 
   </a >
    <a href="https://github.com/dr1ann/fastrack-e-commerce" target="_blank" rel="noopener noreferrer" className="icon-link"  data-aos="fade-up" data-aos-duration="1000">
       <FontAwesomeIcon icon={faGithub} className="text-black m-2 inline-block text-xl cpsize:text-2xl bigmonitor:text-[2rem] animate-custom-bounce bg-gray-500  rounded-full p-2 ml-4" />
       </a>
   </div>
    </div>
  </div>
  
 
 
  
  </div>

 
  {/* PROJECTS */}
</div>
 

</div>
    {/* end of the about me section  */}
    <div className='mr-auto'>
  
    <h1 className="text-center mt-32 mb-10 text-[1.375rem] medsmall:text-[1.5rem] cpsize:text-[2.25rem] font-bold  text-white animate-pulse" data-aos="fade-up" data-aos-duration="1000" id='contactPage'>
<span className='text-gray-500' > ⸻ </span>CONTACT<span className='text-gray-500'> ⸻ </span>
    </h1>
  <div className='flex flex-wrap flex-row justify-center items-center gap-[2rem] px-[3rem] conicon:px-[5rem] contact:px-[2rem]'>
  <div className='flex flex-col items-center justify-center' data-aos="fade-up"
       data-aos-duration="1000" >
  <a href="https://web.facebook.com/jamesdenoy12/" target="_blank" rel="noopener noreferrer" className="icon-link" >
  <FontAwesomeIcon icon={faFacebook} className="text-black m-2 text-3xl animate-custom-bounce bg-gray-500 rounded-full p-2 "  />
 
</a>
<span className='text-white bg-gray-500 rounded-full px-2'>Facebook</span>
</div>
<div className='flex flex-col items-center justify-center' data-aos="fade-up"
       data-aos-duration="1000" >
  <a href="https://web.facebook.com/jamesdenoy12/" target="_blank" rel="noopener noreferrer" className="icon-link" >
  <FontAwesomeIcon icon={faInstagram} className="text-black m-2 text-3xl animate-custom-bounce bg-gray-500 rounded-full p-2 "  />
 
</a>
<span className='text-white bg-gray-500 px-2 rounded-full'>Instagram</span>
</div>
<div className='flex flex-col items-center justify-center mr-[10px]' data-aos="fade-up"
       data-aos-duration="1000" >
  <a href="https://web.facebook.com/jamesdenoy12/" target="_blank" rel="noopener noreferrer" className="icon-link" >
  <FontAwesomeIcon icon={faGithub} className="text-black m-2 text-3xl animate-custom-bounce bg-gray-500 rounded-full p-2 "  />
 
</a>
<span className='text-white bg-gray-500 px-2 rounded-full'>Github</span>
</div>
<div className='flex flex-col items-center justify-center' data-aos="fade-up"
       data-aos-duration="1000" >
  <a href="https://web.facebook.com/jamesdenoy12/" target="_blank" rel="noopener noreferrer" className="icon-link" >
  <FontAwesomeIcon icon={faEnvelope} className="text-black m-2 text-3xl animate-custom-bounce bg-gray-500 rounded-full p-2 "  />
 
</a>
<span className='text-white rounded-full bg-gray-500 px-2'>Email</span>
</div>
  </div>
 
</div>
  <footer className='flex justify-end flex-row items-center px-6 mt-20 footer-class'>
   
  
  <div className=' flex flex-row justify-center items-center py-10'>
  <p className='text-white text-[0.5rem] cpsize:text-[1rem]'>Created with 


</p>
<Image className='w-[30px] '
 src={nextjsIcon}
      
 alt="NEXT JS Icon"
/>
<Image className='w-[34px] '
 src={tailwind}
      
 alt="NEXT JS Icon"
/>
<p className='text-white  text-[0.5rem] cpsize:text-[1rem]'>
by  <span className='font-bold text-gray-200'>James Adrian Denoy </span>
</p>
    </div>
  </footer>

    </div>
   
  );
 


}
 
