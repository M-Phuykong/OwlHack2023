import React, {useState} from 'react'
import axios from 'axios';

export default function RecipeCard(props) {


    const [info, setInfo] = useState([]);
    const API_KEY = "8139bf4a37e04227aedb82215ae18c29"

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
    w-fit
    top-0
    transition ease-in duration-500
    hover:-top-5
    m-5
    rounded-lg
    bg-red-800
    "
    >
        <img className='
        noselect
        h-80
        w-80
        object-cover
        rounded-t-lg'
        src="https://swiperjs.com/demos/images/nature-1.jpg"
        draggable="false"/>

        <div className="noselect p-5 ">
            {/* Need to do stuff with this? */}
            <a href="#">
                <h5 className="mb-2 text-center text-2xl font-bold tracking-tight">
                    {/* {props.data.title}
                     */}
                    This is a title
                </h5>
            </a>
        </div>

        <div
        className="
        noselect
        px-6 pb-2
        w-full
        text-center
        ">
            {/* {info.dishTypes} */}

             <span

            className="
                inline-block
                rounded-full
                px-3 py-1
                text-sm font-semibold
                mr-2 mb-2
                bg-white
                "
                >
                    dinner
            </span>

                <span
            className="
                inline-block
                rounded-full
                px-3 py-1
                text-sm font-semibold
                mr-2 mb-2
                bg-white
                "
                >
                breakfast
            </span>

        </div>
            </div>
  )
}
