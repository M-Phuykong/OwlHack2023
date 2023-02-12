import React, {useState} from 'react'
import "./Card.scss"
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import Suggest from '../pages/Suggest';

export default function Card(props) {
  const navigate = useNavigate();

  function handleClick(destination) {
        // navigate(destination);
        // console.log("Im being clicked on")
    }

  const [isOpen, setIsOpen] = useState(false);


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
    onClick={() => {handleClick(props.destination); setIsOpen(true)}}>

        {isOpen ? (
          <div>
            <button className='w-20 h-20' onClick={(e) => { e.stopPropagation() ;setIsOpen(false)}}> Back </button>
            {props.component}
          </div>
        ) :

        (
          <h1>{props.title}</h1>

          )
        }

    </motion.div>
  )
}


//  <motion.div
//         style={{
//           background: "#fff",
//           padding: "3rem 2rem",
//           borderRadius: "8px",
//           boxShadow: "0 0 10px rgba(0,0,0,0.2)",
//         }}
//         //hover
//         whileHover={{
//           scale: 1.1,
//           boxShadow: "0 0 10px rgba(0,0,0,0.4)",
//         }}
//         transition={{
//           layout: {
//             duration: 1,
//             type: "spring",
//           },
//         }}
//         layout
//         onClick={() => setShowCard(!showCard)}
//       >
//         <motion.h4 layout="position">Hover or click</motion.h4>
//         {showCard && (
//           <motion.p
//             style={{ width: "600px" }}
//             initial={{ opacity: 0 }}
//             animate={{
//               opacity: 1,
//             }}
//           >
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
//             error reiciendis iure architecto qui magni, excepturi voluptatum
//             repudiandae nihil rerum eveniet pariatur ipsa velit similique et
//             aliquam, deserunt totam explicabo.
//           </motion.p>
//         )}
//       </motion.div>