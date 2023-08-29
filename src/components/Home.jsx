import React,{useRef} from 'react'
import { motion } from 'framer-motion'
import { animate } from 'framer-motion'
import Typewriter from 'typewriter-effect';
import {BsArrowUpRight } from 'react-icons/bs';
import {BsChevronDown } from 'react-icons/bs';
import me from '../assets/logo1.png';
function Home() {

    const clientCount = useRef(null);
   const projectCount = useRef(null);

    const animationClientsCount =()=>{
        animate(0,5,{
            duration:1,
            onUpdate:(v)=> (clientCount.current.textContent=v.toFixed()),
        })
    }
    const animationProjects =()=>{
        animate(0,6,{
            duration:1,
            onUpdate:(v)=> (projectCount.current.textContent=v.toFixed()),
        })
    }

    const animations ={
        h1:{
            initial:{
                x:"-100%", 
                opacity:0,
            },
            whileInView:{
                x:0,
                opacity:1,
            },
        },

        button:{
            initial:{
                y:"-100%", 
                opacity:0,
            },
            whileInView:{
                y:0,
                opacity:1,
            },
        },
    };
  return (
    <div id="home">
        <section>
            <div>
            <motion.h1 {...animations.h1}>
                Hi, I Am <br/>Khushi
            </motion.h1>
            <Typewriter options={{
                strings:["A Developer", "A Designer", "A Creator" ],
                autoStart: true,
                loop: true,
                cursor: "",
                wrapperClassName:"typewriterpara",
            }}/>
            <div>
            <a href="mailto:nagar.khushi2001@gmail.com">
            Hire Me
            </a>
            <a href="#work">Projects <BsArrowUpRight /> </a>
            </div>
            <article>
                <p> + <motion.span whileInView={animationClientsCount} ref={clientCount}></motion.span></p>
                <span>Clients Worldwild</span>
            </article>
            <aside>
            <article>
                <p> + <motion.span  whileInView= {animationProjects} ref={projectCount}></motion.span></p>
                <span>Projects</span>
            </article>
            
            <article data-special>
                <p>Contact</p>
                <span>nagar.khushi2001@gmail.com</span>
            </article>
            </aside>
            </div>
        </section>
        <section>
            <img src={me} alt="khushi" />
        </section>
        <BsChevronDown />
        
        
        </div>
  )
}

export default Home




// import React, {useState} from 'react'

// const Home =()=>{
//     const [a, setA] = useState(0);

//     const increment=() =>{
//         setA(a+1)
//         console.log(a);
//     }
//     const decrement=() =>{
//         setA(a-1)
//         console.log(a);
//     }

//     return (
//         <div>
//             <button onClick={increment}>Add</button>
//             <p>{a}</p>
//             <button onClick={decrement}>Minus</button>
//         </div>
//     )
// }