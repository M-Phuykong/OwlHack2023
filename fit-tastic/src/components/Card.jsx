import React, {useState} from 'react'
import "./Card.scss"
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import { ArrowLeft } from 'akar-icons';


export default function Card(props) {
  const navigate = useNavigate();

  function handleClick(destination) {
        // navigate(destination);
        // console.log("Im being clicked on")
    }

  const [isOpen, setIsOpen] = useState(false);

  let divStyle = {
            backgroundImage: 'url(' + props.image + ')',
            backgroundSize: '20rem 20rem'


  }
  return (
    <motion.div
    whileHover={{
      scale: isOpen ? 1 : 1.1,
      boxShadow: "0 20px 55px 0 rgba(31, 38, 135, 0.37)",
    }}
    transition={{
      layout: {
        duration: 1,
        type: "spring",
      },
    }}
    data-isOpen={isOpen}
    layout
    id='card'
    onClick={() => {handleClick(); setIsOpen(true)}}>

        {isOpen ? (
          <div  className="h-full rounded-[10px]">
            <ArrowLeft strokeWidth={3} size={48} className="absolute z-20 p-2 cursor-pointer" onClick={(e) => { e.stopPropagation() ;setIsOpen(false)}} />
            {props.component}
          </div>
        )
        :
        (
          <div style={divStyle} className={"h-full rounded-[10px} object-fill"}>
          </div>
          )
        }

    </motion.div>
  )
}
