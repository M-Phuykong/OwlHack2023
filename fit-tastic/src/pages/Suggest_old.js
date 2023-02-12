// import { Configuration, OpenAIApi } from "openai";
// import { useState } from 'react';

// const configuration = new Configuration({
//   apiKey: "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",
// });

// const openai = new OpenAIApi(configuration);
// const TYPE = ["Breakfast","Lunch","Dinner"];




// function Suggest() {
//     const [type, setType] = useState("");
//     const [cuisine, setCuisine] = useState("");
//     const [gender, setGender] = useState(true);
//     const [age, setAge] = useState("");
//     const [weight, setWeight] = useState("");
//     const [feet, setFeet] = useState("");
//     const [inches, setInches] = useState("");
//     const [activity, setActivity] = useState(1);
//     const [calories, setCalories] = useState("");
//     const [gainloss, setGainloss] = useState(1);
//     const [dietary, setDietary] = useState("");
//     const [responsetext, setResponsetext] = useState("");


//     const calcBMR = (male, weight, height, age) => {
//         console.log(male, weight, height, age)
//         if (male) {
//             return 66 + (6.23 * weight) + (12.7 * height) - (6.8 * age)
//         }
//         else {
//             return  655 + (4.35 * weight) + (4.7 * height) - (4.7 * age)
//         }

//     }
//     const generateText = async (prompt) => {
//         const completion = await openai.createCompletion({
//           model: "text-davinci-003",
//           prompt: prompt,
//           max_tokens: 250,
//           n: 1,
//           temperature: 0.7,
//         });

//         return completion.data.choices[0].text;
//       };



//     return(
//         <div className="hello h-full max-h-full">
//         {/* <div id='senjougahara'>
//         <img src="https://static.wikia.nocookie.net/characterprofile/images/c/ce/Senjougahara.png/"/>
//         </div> */}
//         <form onSubmit={(e)=> {
//                 e.preventDefault();
//                 setResponsetext("Loading.. Please wait!")

//                 var height= (parseInt(feet) * 12) + parseInt(inches);
//                 var jimmy = calcBMR(gender, weight, height, age)
//                 jimmy = parseFloat(jimmy)
//                 switch(activity) {
//                     case 1:

//                         jimmy *= parseFloat(1.2)
//                         break;
//                     case 2:
//                         jimmy *= parseFloat(1.375)
//                         break;
//                     case 3:
//                         jimmy *= parseFloat(1.55)
//                         break;
//                     case 4:
//                         jimmy *= parseFloat(1.725)
//                         break;
//                     case 5:
//                         jimmy *= parseFloat(1.9)
//                         break;
//                 }
//                 switch(gainloss) {
//                     case 1:
//                         jimmy -= parseInt(500);
//                         break;
//                     case 3:
//                         jimmy += parseInt(500);
//                         break;
//                 }

//                 jimmy -= parseInt(calories);
//                 jimmy = parseInt(jimmy)



//                 const basePromptPrefix = `I need ${jimmy} calories for a meal. Suggest me a meal that fits the calories requirement and is the following type of meal: ${type}. I want it to be of ${cuisine} cuisine. I also have the following dietary restrictions: ${dietary}. Make sure to refer to yourself as Fit-tastic: `;
//                 generateText(basePromptPrefix).then((res) => {setResponsetext(res)})
//             }}>

// Type of Cuisine: <input type="text" name="cuisine" id = "cuisine" onChange={(e)=> {setCuisine(e.currentTarget.value)}}
//         value={cuisine}/>
//         <br/>
// Dietary restrictions: <input type="text" name="dietary" id = "dietary" onChange={(e)=> {setDietary(e.currentTarget.value)}}
//         value={dietary}/>
//             <br/>
//             <input type="radio" name="gender" id="gender" checked={gender === true} onChange={()=> setGender(true)}/>Male
//             <input type ="radio" name="gender" id="gender" checked={gender === false} onChange={()=>setGender(false)}/>Female
//             <br/>
//             Height: <input required type="text" name="feet" id = "feet" onChange={(e)=> {setFeet(e.currentTarget.value)}}
//         value={feet}/>
//             ' <input required type="text" name="inches" id = "inches" onChange={(e)=> {setInches(e.currentTarget.value)}}
//         value={inches}/>"
//             <br/>
//             Weight: <input required type="text" name="weight" id = "weight" onChange={(e)=> {setWeight(e.currentTarget.value)}}
//         value={weight}/>
//             <br/>
//            Age: <input required type="text" name="age" id = "age" onChange={(e)=> {setAge(e.currentTarget.value)}}
//         value={age}/><br/>

//             <input type="radio" name="activity" id="activity" checked={activity === 1} onChange={()=> setActivity(1)}/>Sedentary
//             <input type ="radio" name="activity" id="activity" checked={activity === 2} onChange={()=> setActivity(2)}/>I walk to school
//             <input type="radio" name="activity" id="activity" checked={activity === 3} onChange={()=> setActivity(3)}/>Occasionally Exercise
//             <input type ="radio" name="activity" id="activity" checked={activity === 4} onChange={()=> setActivity(4)}/>Regularly Exercise
//             <input type="radio" name="activity" id="activity" checked={activity === 5} onChange={()=> setActivity(5)}/>Vigorous Exercise
//             <br/>

//             <input type="radio" name="gainloss"id="gainloss" checked={gainloss === 1} onChange={()=> setGainloss(1)}/>I want to lose weight
//             <input type="radio" name="gainloss"id="gainloss" checked={gainloss === 2} onChange={()=> setGainloss(2)}/>I want to maintain my weight
//             <input type="radio" name="gainloss" id="gainloss" checked={gainloss === 3} onChange={()=> setGainloss(3)}/>I want to bulk up
//             <br/>

//             Calories I've already consumed: <input required type="text" name="calories" id = "calories" onChange={(e)=> {setCalories(e.currentTarget.value)}}
//         value={calories}/>
//             <br/>
//             <label htmlFor="type">
//             Time of Day?
//                 <select
//                 required
//                 id="type"
//                 value={type}
//                 onChange={(e) => {
//                     setType(e.currentTarget.value);
//                 }}
//             >
//                 <option />
//                     {TYPE.map((type) => (
//                         <option key={type} value={type}>
//                         {type}
//                         </option>
//                     ))}
//             </select>
//             </label>
//             <br/>



//             <button className='button-19'>Suggest</button>

//         </form>

//             {responsetext}


//         </div>
//     );
// }


// export default Suggest
