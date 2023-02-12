import React, {useCallback, useEffect, useRef, useState} from 'react'
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import axios from 'axios';
import RecipeCard from './RecipeCard';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Mousewheel, Keyboard, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";


import "./Recipe.scss"

export default function Recipe() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [ingredient, setIngredient] = useState("");
  const [recipe, setRecipe] = useState([]);

  const API_KEY = "54556ddcbdf24ee1b64a8ead0e4dc847"

  const onSubmit = data => {
    // console.log(data["ingredient"])
    getRecipe(data["ingredient"])
    // setRecipe(data["ingredient"])


  };

  function getRecipe(ingredient) {
      axios.get(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=` + ingredient + "&number=5")
      .then(res => {
        console.log(res.data)
        setRecipe(res.data)
      })
      .catch(() => {
        console.log("error")
      })
  }

  return (
    <div className='w-full h-full'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Ingredients</h1>
        <input  placeholder="Please input your ingredient with comma separated value"
        {...register("ingredient", {
          required: "This input is required.",
          })
        }
        />

        <ErrorMessage
          errors={errors}
          name="multipleErrorInput"
          render={({ messages }) => {
            console.log("messages", messages);
            return messages
            ? Object.entries(messages).map(([type, message]) => (
              <p key={type}>{message}</p>
              ))
              : null;
            }}
        />

        <input type="submit" />
      </form>

      <div
      draggable="false"
      className="
      w-full
      h-fit
      "
      >
        <Swiper
            effect={"cards"}
            grabCursor={true}
            centeredSlides={true}
            keyboard={{
                enabled: true,
            }}
            mousewheel={true}
            modules={[Autoplay, Keyboard, Mousewheel, EffectCards]}
            rewind={true}
            // autoplay={{
            //     delay: 3500,
            //     disableOnInteraction: false
            // }}
            className="h-full w-3/5">

            {recipe.map((item , ind) => {

              return (

                <SwiperSlide
                        className="
                        flex
                        min-h-full
                        items-center
                        justify-items-center
                        "
                        key={ind}>
                          <RecipeCard data={item}></RecipeCard>

                  </SwiperSlide>
                )
            } )}

        </Swiper>
    </div>

    </div>
  )
}

