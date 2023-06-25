'use client'
import Head from 'next/head';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import Link from 'next/link';





import { useState } from 'react';
import Image from 'next/image';
import profilePic from './Images/newdp.png'
import headerImg from './Images/name.png'
import aboutFace from './Images/aboutFaceWhite.jpg'
import htmlIcon from './Images/htmlicon.png'
import cssIcon from './Images/cssicon.png'
import jsIcon from './Images/jsicon.png'
import bplanCert from './Images/bplancert.jpg'
import bplanDoc from './Images/bplan.jpg'
import codefestCert from './Images/codefestCert1.png'
import codefestDoc from './Images/codefest.jpg'
import bplanAwarding from './Images/bplan_awarding.jpg'
import fbIcon from './Images/facebookIcon-removebg-preview.png'
import emailIcon from './Images/emailIcon.png'
import IgIcon from './Images/facebookIcon-removebg-preview.png'
import cursor from './Images/cursor.png'
import projThumbnail from './Images/thumbnail.png'
import Typewriter from 'typewriter-effect';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
// import AOS from 'aos';
// import  'aos/dist/aos.css'; // You can also use <link> for styles
// // ..
// AOS.init();

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub  } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import { faMousePointer } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
export default function Page() {
  const [navbar, setNavbar] = useState(false);
  
 
  return (
    <div className='bg-black'>
      <Head>
        <title>Create Next Responsive Navbar With Tailwind CSS</title>
        <meta
          name="description"
          content="Create Next JS Responsive Menu with Tailwind CSS"
        />
        
      </Head>
      <nav className="w-full bg-black">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block" >
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
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-white">
                <ScrollLink
  to="yawa"
  smooth={true}
  duration={500}
  offset={-100}
  className="cursor-pointer"
>
  <a>Home</a>
</ScrollLink>
                </li>
                <li className="text-white">
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
                <li className="text-white">
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
                <li className="text-white">
                <ScrollLink
  to="contactPage"
  smooth={true}
  duration={500}
  offset={-100}
  className="cursor-pointer"
>
  
  <a>Contact</a>
</ScrollLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="h-screen w-screen flex justify-between items-center" id='yawa'>
  <Image
    className="float-left mb-20"
    
    src={profilePic}
    width={600}
    height={400}
    alt="Picture of the author"
  />
   
  <div style={{ color: 'white', fontSize: '3em', marginTop: '-20vh', marginRight: '20vh', width: '400px'   }}  data-aos="fade-up" data-aos-duration="1000">
    <span className="text-2xl">Hello there, I am</span>
    <Typewriter
      options={{
        strings: ['<span style="font-weight: bold; color: #EDF2F7;">James Adrian</span>'],
        autoStart: true,
        loop: true,
        wrapperClassName: 'typewriter-wrapper', // Add a custom class name for styling
        cursorClassName: 'typewriter-cursor' // Add a custom class name for styling the cursor
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
    <p className="text-left text-2xl mt-4 text-white mb-5" data-aos="fade-up" data-aos-duration="1000">
      Aspiring  <span className='text-gray-200 animate-pulse font-bold'>Software Developer</span>
    </p> 
    
    <a href="https://web.facebook.com/jamesdenoy12/" target="_blank" rel="noopener noreferrer" className="icon-link" data-aos="fade-up" data-aos-duration="1000">
  <FontAwesomeIcon icon={faFacebook} className="text-black m-2 text-3xl animate-custom-bounce bg-gray-500 rounded-full p-2"  />
</a>

    <a href="https://www.instagram.com/dr1annnnnnn/" target="_blank" rel="noopener noreferrer" className="icon-link"  data-aos="fade-up" data-aos-duration="1000">
    <FontAwesomeIcon icon={faInstagram} className="text-black m-2 text-3xl animate-custom-bounce  bg-gray-500  rounded-full p-2" />
    </a>
    <a href="https://github.com/dr1ann" target="_blank" rel="noopener noreferrer" className="icon-link"  data-aos="fade-up" data-aos-duration="1000">
    <FontAwesomeIcon icon={faGithub} className="text-black m-2 text-3xl animate-custom-bounce bg-gray-500  rounded-full p-2" />
    </a>
    <a href="mailto:jamesdenoy56@gmail.com" target="_blank" rel="noopener noreferrer" className="icon-link"  data-aos="fade-up" data-aos-duration="1000">
    <FontAwesomeIcon icon={faEnvelope} className="text-black  text-3xl animate-custom-bounce m-2 bg-gray-500 rounded-full p-2" />

    </a>

  </div>
</div>
<h1 className="text-center mt-4 text-4xl font-bold text-white animate-pulse" data-aos="fade-up" data-aos-duration="1000">
      ABOUT  <span className='text-gray-500'>ME</span>
    </h1>
<div>
<div className="bg-black " >
<div className="flex items-center justify-center" id='aboutPage'>
   <div data-aos="fade-up" data-aos-duration="1000">
    <Image 

      className="rounded-full border-gray-500 border-4 border-solid ml-20 "  
      src={aboutFace}
      width={300}
      height={100}
      alt="Picture of the author"
    />
    </div>
    <p className='text-justify text-white w-2/4 ml-auto mr-20' data-aos="fade-up" data-aos-duration="1000"> Hello! I'm  <span className='text-gray-200 font-bold'>James Adrian A. Denoy</span>, a 17-year-old Grade 12 student currently residing in Brgy. Tambulilid, Ormoc City, Philippines. From a young age, I've had a deep fascination with computers and technology. I would spend hours exploring the intricacies of websites, wondering how they worked and what made them function.
<br></br>
<br></br>
As an aspiring software developer, I am driven by my passion for creating innovative solutions and bringing ideas to life through code. I am currently honing my skills in Web Development, where I am gaining valuable knowledge in various programming languages and development tools.</p>
  </div>
</div>
<h1 className="text-left text-2xl font-bold text-white ml-10 mt-10 animate-pulse" data-aos="fade-up" data-aos-duration="1000">
      SKILLS <span className='text-gray-500'> ⸻ </span>
    </h1> 
    <div className="flow-root p-10">
  <div className="flex items-center ml-20" data-aos="fade-up" data-aos-duration="1000" >
   <Image    
      className="mr-4 mt-10"  
      src={htmlIcon}
      width={200}
      height={100}
      alt="HTML Icon"
    />
 <div data-aos="fade-up" data-aos-duration="1000">
      <h1 className="text-justify text-4xl text-gray-200 font-bold">
        HTML (Hypertext Markup Language)
      </h1>
      <p className="text-white text-xl font-500 inline-block rounded-full bg-gray-500 px-2 mt-5">
      7 months of experience
      </p>
      <p className="text-white mt-2 text-justify w-2/4">
      I have developed a web page using HTML as part of my large-scale e-commerce project. I utilized semantic HTML elements to create a well-structured and organized website.
      </p>
     
    </div>
  </div>

  <div className="flex items-center justify-end mt-10 mr-20">
    <div data-aos="fade-up" data-aos-duration="1000">
      <h1 className="text-justify text-4xl text-gray-200 font-bold">
        CSS (Cascading Style Sheets)
      </h1>
      <p className="text-white text-xl font-500 inline-block rounded-full bg-gray-500 px-2 mt-5">
      7 months of experience
      </p>
      <p className="text-white mt-2 text-justify">
        I have a strong grasp of CSS styling and layout techniques. <br />  In addition, I am actively expanding my skill set by learning <br /> and implementing the popular CSS framework, "Tailwind CSS."
      </p>
    </div>
    <div data-aos="fade-up" data-aos-duration="1000">
    <Image 
    
      className="ml-4"  
      src={cssIcon}
      width={200}
      height={100}
      alt="CSS Icon"
    />
    </div>
  </div>

  <div className="flex items-center ml-20" data-aos="fade-up" data-aos-duration="1000" >
   <Image    
      className="mr-4 mt-10"  
      src={jsIcon}
      width={200}
      height={100}
      alt="Js Icon"
    />
 <div data-aos="fade-up" data-aos-duration="1000">
      <h1 className="text-justify text-4xl text-gray-200 font-bold">
       JavaScript
      </h1>
      <p className="text-white text-xl font-500 inline-block rounded-full bg-gray-500 px-2 mt-5">
      6 months of experience
      </p>
      <p className="text-white mt-2 text-justify w-2/4">
      I have hands-on experience in developing a large-scale e-commerce project using JavaScript, and I used Node.js for its backend development. Currently, I am further expanding my skills and exploring the possibilities of Next.js to enhance my web development expertise.
      </p>
     
    </div>
  </div>

 
<h1 className="text-left text-2xl font-bold text-white  mt-10 mb-10 animate-pulse" data-aos="fade-up" data-aos-duration="1000">
ACHIEVEMENTS <span className='text-gray-500'> ⸻ </span>

     </h1>
   
     <div className="grid grid-cols-2 gap-5 bg-black w-2/4 float-left"  >
  <div className="relative h-50 hover:z-20"  data-aos="fade-up" 
    data-aos-duration="1000">
    <Image
   
      className="object-cover h-full w-full rounded-2xl z-10 transform transition duration-500 hover:scale-125 "
      src={bplanCert}
      alt="Image 1"
    />
  </div>
  <div className="relative h-50 "   data-aos="fade-up" 
  data-aos-duration="1000">
  <Image

  className="object-cover  h-full w-full rounded-2xl z-10 transition-transform duration-500 hover:scale-125 "
  src={bplanDoc}
  alt="Image 2"
/>

  </div>
</div>
<div className="flex items-center justify-center">

  
  <p className="text-white text-justify ml-20 mb-20 " data-aos="fade-up" data-aos-duration="1000">
    <h1 className='text-gray-200 text-center mr-2 font-bold text-3xl'>BUSINESS PLAN COMPETITION</h1>
    Our participation in the business plan competition marked our team's first collaborative website development project. We created an innovative platform that bridges the gap between service seekers and providers, leveraging our diverse skills and fostering teamwork. This transformative experience fueled our growth as developers and inspired us to continue making an impact in the digital landscape.
  </p>
</div>

{/* 1st ACHIEVEMENT */}
 <div className="grid grid-cols-2 gap-5 bg-black w-2/4 float-right">
  <div className="relative h-50 hover:z-20"  data-aos="fade-up" 
    data-aos-duration="1000">
    <Image
      className="object-cover  h-full w-full rounded-2xl z-10 transform transition duration-500 hover:scale-125 "
      src={codefestDoc}
      alt="Image 1"
    />
  </div>
  <div className="relative h-50"  data-aos="fade-up" 
    data-aos-duration="1000">
    <Image
      className="object-cover h-full w-full rounded-2xl z-10 transform transition duration-500 hover:scale-125 "
      src={codefestCert}
      alt="Image 2"
    />
  </div>
  
</div>
<p className="text-white text-justify ml-10 mr-10 w-2/5 mt-10"  data-aos="fade-up" 
    data-aos-duration="1000">
    <h1 className='text-gray-200 text-center mr-2 font-bold text-3xl'>CODE FEST</h1>
    Our participation in the Code Fest coding competition marked our team's exciting debut in the world of competitive programming. As a front-end developer, I contributed to the development of a sophisticated grading system. This experience allowed me to showcase my skills, collaborate with talented teammates, and embrace the challenges of real-world coding projects.
  </p>
  
  {/* 2nd ACHIEVEMENT */}

  <h1 className="text-center mt-32 text-4xl font-bold text-white animate-pulse " data-aos="fade-up" data-aos-duration="1000" id='projectsPage'>
     PROJECTS
    </h1>

<div className="flex items-center" data-aos="fade-up" data-aos-duration="1000"  >
   <Image    
      className="mt-10 transform transition duration-500 hover:scale-125 "  
      src={projThumbnail}
      width={550}
      height={100}
      alt="HTML Icon"
    />
 <div data-aos="fade-up" data-aos-duration="1000">
      <h1 className=" text-4xl text-gray-200 font-bold">
      FasTrack: Ormoc's One Stop Shop
      </h1>
      <div className='flex flex-row gap-3 '>
      <p className="text-white text-lg font-500 rounded-full bg-gray-500 px-2 mt-5">
      HTML
      </p>
      <p className="text-white text-lg font-500 rounded-full bg-gray-500 px-2 mt-5">
      CSS
      </p>
      <p className="text-white text-lg font-500 rounded-full bg-gray-500 px-2 mt-5">
      Javascript
      </p>
      <p className="text-white text-lg font-500 rounded-full bg-gray-500 px-2 mt-5">
      Firebase
      </p>
      
      </div>
      <p className="text-white mt-2 text-justify mb-5">
      FasTrack is a dynamic and user-friendly online e-commerce platform designed exclusively for residents of Ormoc City. Developed over a span of 7 months, this feature-rich website incorporates a robust backend powered by <b>Node.js</b> and utilizes <b>Firebase</b> for seamless database integration.
      </p>
      
      <div className="flex items-center justify-center">
  <a href="https://fastrack-e-commerce.netlify.app/" data-aos="fade-up" data-aos-duration="1000" target="_blank" rel="noopener noreferrer" className="text-white text-xl bg-gray-500 animate-custom-bounce  rounded-2xl px-2 py-2 font-bold" >VISIT WEBSITE <FontAwesomeIcon icon={faEye} />
</a >
</div>

    </div>
  </div>

 
  {/* PROJECTS */}
</div>
 

</div>
    {/* end of the about me section  */}
    <h1 className="text-center mt-32 text-4xl font-bold text-white animate-pulse" data-aos="fade-up" data-aos-duration="1000">
      CONTACT  <span className='text-gray-500'  id='contactPage'>ME</span>
      </h1>
      <div className="flex flex-row justify-center mt-8 animate-custom-bounce" data-aos="fade-up" data-aos-duration="1000">
      <div className="w-64 h-64 mx-4 mb-8">
  <a href="mailto:jamesdenoy56@gmail.com">
    <div className="flex items-center flex-col mb-2 shadow-3xl hover:animate-pulse shadow-gray-500 bg-gray-500 rounded-2xl p-2">
      <FontAwesomeIcon icon={faEnvelope} className="text-black m-2 text-10xl bg-gray-500 rounded-full p-2"  />
      <span className="text-white w-9/12 text-center">Get in touch via email</span>
     
    </div>
  </a>
</div>

<div className="w-64 h-64 mx-4 mb-8">
  <a href="https://web.facebook.com/jamesdenoy12" target="_blank" rel="noopener noreferrer">
    <div className="flex items-center flex-col mb-2 shadow-3xl hover:animate-pulse shadow-gray-500 bg-gray-500 rounded-2xl p-2">
      <FontAwesomeIcon icon={faFacebook} className="text-black m-2 text-9xl bg-gray-500 rounded-full p-2"  />
      <span className="text-white w-9/12 text-center">Connect with me on Facebook</span>

    </div>
  </a>
</div>

<div className="w-64 mx-4 mb-8 ">
  <a href="https://www.instagram.com/dr1annnnnnn/" target="_blank" rel="noopener noreferrer" >
    <div className="flex items-center flex-col mb-2 hover:animate-pulse shadow-3xl shadow-gray-500 bg-gray-500 rounded-2xl p-2">
      <FontAwesomeIcon icon={faInstagram} className="text-black m-2 text-9xl bg-gray-500 rounded-full p-2"  />
      <span className="text-white w-9/12 text-center">Connect with me on Instagram</span>
    
    </div>
  </a>
</div>




</div>

    </div>
   
  );
 


}
 
