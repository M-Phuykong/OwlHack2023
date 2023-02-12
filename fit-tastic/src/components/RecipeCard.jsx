import React, {useState} from 'react'
import axios from 'axios';

export default function RecipeCard(props) {
    
    const [info, setInfo] = useState([]);
    const API_KEY = "54556ddcbdf24ee1b64a8ead0e4dc847"

    React.useEffect(() =>{

        // getRecipeInfo();

    }, []);

    function getRecipeInfo(){

        axios.get(`https://api.spoonacular.com/recipes/${props.data.id}/information?apiKey=${API_KEY}`)
      .then(res => {
        setInfo(res.data)
      })
      .catch(() => {
        console.log("error")
      })

    }

  return (

    <div
    className="
     relative
    w-[20rem]
    h-[29rem]
    max-w-fit
    top-0
    transition ease-in duration-500
    hover:-top-5
    m-5
    rounded-lg
    bg-[#07D474]
    text-white
    break-words
    border border-1 border-black
    "
    >
        <img className='
        noselect
        h-80
        w-80
        object-cover
        rounded-t-lg'
        src={props.data.image}
        draggable="false"/>

        <div className="noselect p-5 ">
            {/* Need to do stuff with this? */}
            <a href="#">
                <h5 className="mb-2 text-center text-2xl font-bold tracking-tight">
                    {props.data.title}
                </h5>
            </a>
        </div>

    </div>
  )
}
