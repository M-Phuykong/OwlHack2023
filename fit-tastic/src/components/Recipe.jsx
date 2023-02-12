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

  const API_KEY = "8139bf4a37e04227aedb82215ae18c29"

  const onSubmit = data => {
    // console.log(data["ingredient"])
    // getRecipe(data["ingredient"])
    setRecipe(data["ingredient"])


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
    <div className='w-screen h-full'>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input {...register("ingredient", {
          required: "This input is required.",
          pattern : {
            value: /^[a-zA-Z\s]+\,[a-zA-Z\s]+$/,
            message: "This input can only container alphabets and must be separated by a comma."
          }
        })} />

        <ErrorMessage
        errors={errors}
        name="multipleErrorInput"
        render={({ messages }) => {
          console.log(messages);
          return messages
            ? Object.entries(messages).map(([type, message]) => (
                <p key={type}>{message}</p>
              ))
            : null;
        }}
      />

        <input type="submit" />
      </form>

      <div className='text-20 h-8'>{recipe}</div>

       <div
    draggable="false"
    className="
    w-5/12
    h-full
    align-middle
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

              <SwiperSlide
                        className="
                        flex
                        min-h-full
                        items-center
                        justify-items-center
                        "
                        >
                          <RecipeCard ></RecipeCard>

                </SwiperSlide>

              <SwiperSlide
                        className="
                        flex
                        min-h-full
                        items-center
                        justify-items-center
                        "
                        >
                          <RecipeCard ></RecipeCard>

                </SwiperSlide>

                            <SwiperSlide
                        className="
                        flex
                        min-h-full
                        items-center
                        justify-items-center
                        "
                        >
                          <RecipeCard ></RecipeCard>

                </SwiperSlide>

                              <SwiperSlide
                        className="
                        flex
                        min-h-full
                        items-center
                        justify-items-center
                        "
                        >
                          <RecipeCard ></RecipeCard>

                </SwiperSlide>



            {/* {recipe.map((item , ind) => {

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
            } )} */}

        </Swiper>
    </div>

    </div>
  )
}

