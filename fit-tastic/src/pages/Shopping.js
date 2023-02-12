import { Configuration, OpenAIApi } from "openai";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

import './Shopping.scss'

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);



function Label(props) {
  return (
    <div className="flex rounded-[10px] bg-[#07D474]
    h-full items-center place-content-center
    border border-black border-3 text-lg decoration-4
    ">
        {props.children}

    </div>
  )
}




function Shopping() {

const navigate = useNavigate()
    return(
        <div className="p-20
        grid grid-cols-2 grid-row-4 gap-4 h-full w-full">
            <Label><button className="button" onClick={() => {navigate('budget')}} style={{border: "none",width: "100%", height: "100%", borderRadius: "9px"}}> Budget</button></Label>
            <Label><button className="button" onClick={() => {navigate('vegetarian')}} style={{border: "none",width: "100%", height: "100%", borderRadius: "9px"}}> Vegetarian</button></Label>
            <Label><button className="button" onClick={() => {navigate('vitamin')}} style={{border: "none",width: "100%", height: "100%", borderRadius: "9px"}}> Vitamin Enriched</button> </Label>
            <Label> <button className="button" onClick={() => {navigate('ketogenic')}} style={{border: "none",width: "100%", height: "100%", borderRadius: "9px"}}> Ketogenic </button> </Label>
            <Label> <button className="button" onClick={() => {navigate('peanut')}} style={{border: "none",width: "100%", height: "100%", borderRadius: "9px"}}> Peanut Free </button> </Label>
            <Label> <button className="button" onClick={() => {navigate('dairy')}} style={{border: "none",width: "100%", height: "100%", borderRadius: "9px"}}> Dairy Free</button> </Label>
            <Label> <button className="button" onClick={() => {navigate('gluten')}} style={{border: "none",width: "100%", height: "100%", borderRadius: "9px"}}> Gluten Free</button> </Label>
            <Label> <button className="button" onClick={() => {navigate('seafood')}} style={{border: "none",width: "100%", height: "100%", borderRadius: "9px"}}> Seafood Free</button> </Label>
        </div>
    );
}


export default Shopping
