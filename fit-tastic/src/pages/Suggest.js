import { Configuration, OpenAIApi } from "openai";
import { useState } from 'react';
import './Suggest.scss'

const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);





function Suggest() {
    const [type, setType] = useState("Breakfast");
    const [cuisine, setCuisine] = useState("");
    const [gender, setGender] = useState(false);
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [activity, setActivity] = useState(1);
    const [calories, setCalories] = useState("");
    const [gainloss, setGainloss] = useState(1);
    const [dietary, setDietary] = useState("");
    const [responsetext, setResponsetext] = useState("FIT-TASTIC");


    const calcBMR = (male, weight, height) => {
        console.log(male, weight, height)
        if (male) {
            return 66 + (6.23 * weight) + (12.7 * height)
        }
        else {
            return  655 + (4.35 * weight) + (4.7 * height)
        }

    }
    const generateText = async (prompt) => {
        const completion = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: prompt,
          max_tokens: 250,
          n: 1,
          temperature: 0.7,
        });

        return completion.data.choices[0].text;
      };

    return(
      <div className='signup-container h-full w-full max-w-full max-h-full'>
        <div className='left-container'>
        <h1>
          {responsetext}
        </h1>

      </div>
      <div className='right-container'>
        <header>
          <h1>Suggest a random meal!</h1>
          <div className='set'>
            <div className='pets-name'>
              <label for='pets-name'>Type of Cuisine</label>
              <input id='pets-name' placeholder="eg: Japanese" type='text'
              onChange={(e)=> {setCuisine(e.currentTarget.value)}}
              value={cuisine}/>
            </div>
            <div className='pets-photo'>
            <div className='pets-birthday'>
              <label for='pets-birthday'>Height in inches</label>
              <input id='pets-birthday' type='text'
              onChange={(e)=> {setHeight(e.currentTarget.value)}}
              value={height}/>
              </div>
            </div>
          </div>
          <div className='set'>
            <div className='pets-breed'>
              <label for='pets-breed'>Dietary Restriction</label>
              <input id='pets-breed' placeholder="eg: Gluten-free" type='text'
              onChange={(e)=> {setDietary(e.currentTarget.value)}}
              value={dietary}/>
            </div>
            <div className='pets-birthday'>
              <label for='pets-birthday'>Calories consumed</label>
              <input id='pets-birthday' type='text'
              onChange={(e)=> {setCalories(e.currentTarget.value)}}
              value={calories}/>
            </div>
          </div>
          <div className='set'>
            <div className='pets-gender'>
              <label for='pet-gender-female'>Gender</label>
              <div className='radio-container'>
                <input type="radio" name="activity" id="pet-gender-female" checked={gender===false} onChange={()=> setGender(false)}/>
                <label for='pet-gender-female'>Female</label>
                <input id='pet-gender-male' checked={gender===true} name='pet-gender' type='radio' value='male'onChange={()=> setGender(true)}/>
                <label for='pet-gender-male'>Male</label>
              </div>
            </div>
            <div className='pets-spayed-neutered'>
              <div className='pets-birthday'>
              <label for='pets-birthday'>Weight in pounds</label>
              <input id='pets-birthday' type='text'/>
            </div>
            </div>
          </div>
          <div className='pets-weight'>
            <label for='pet-weight-0-25'>Level of Exercise</label>
            <div className='radio-container'>
              <input checked={activity===1} onChange={()=> setActivity(1)} id='pet-weight-0-25' name='pet-exercise' type='radio' />
              <label for='pet-weight-0-25'>None</label>
              <input id='pet-weight-25-50' checked={activity===2} onChange={()=> setActivity(2)} name='pet-exercise' type='radio' />
              <label for='pet-weight-25-50'>Light</label>
              <input id='pet-weight-50-100' checked={activity===3} onChange={()=> setActivity(3)} name='pet-exercise' type='radio'  />
              <label for='pet-weight-50-100'>Average</label>
              <input id='pet-weight-100-plus' checked={activity===4} onChange={()=> setActivity(4)} name='pet-exercise' type='radio' />
              <label for='pet-weight-100-plus'>Heavy</label>
            </div>
          </div>

          <div className='pets-weight'>
            <label for='pet-weight-0-25'>Weight Goal</label>
            <div className='radio-container'>
              <input id='loseweight' name='pet-weight' type='radio' checked={gainloss===1} onChange={()=> setGainloss(1)}/>
              <label for='loseweight'>Lose</label>
              <input id='keepweight' name='pet-weight' type='radio' checked={gainloss===2} onChange={()=> setGainloss(2)}/>
              <label for='keepweight'>Keep</label>
              <input id='gainweight' name='pet-weight' type='radio' checked={gainloss===3} onChange={()=> setGainloss(3)}/>
              <label for='gainweight'>Gain</label>
            </div>
          </div>



          <div className='pets-weight'>
            <label for='pet-weight-0-25'>Meal Time</label>
            <div className='radio-container'>
              <input id='breakfast' name='meal' type='radio' checked={type==="Breakfast"} onChange={()=> setType("Breakfast")}/>
              <label for='breakfast'>Breakfast</label>
              <input id='lunch' name='meal' type='radio' checked={type==="Lunch"} value='50-100' onChange={()=> setType("Lunch")}/>
              <label for='lunch'>Lunch</label>
              <input id='dinner' name='meal' type='radio' value='100+' checked={type==="Dinner"} onChange={()=> setType("Dinner")}/>
              <label for='dinner'>Dinner</label>
            </div>
          </div>
        </header>
        <footer>
          <div className='set'>

            <button id='next' onClick={(e)=> {
                e.preventDefault();
                setResponsetext("Loading.. Please wait!")


                var jimmy = calcBMR(gender, weight, height)
                jimmy = parseFloat(jimmy)
                console.log(jimmy)
                switch(activity) {
                    case 1:

                        jimmy *= parseFloat(1.2)
                        break;
                    case 2:
                        jimmy *= parseFloat(1.375)
                        break;
                    case 3:
                        jimmy *= parseFloat(1.55)
                        break;
                    case 4:
                        jimmy *= parseFloat(1.725)
                        break;
                    case 5:
                        jimmy *= parseFloat(1.9)
                        break;
                }
                console.log(jimmy)
                switch(gainloss) {
                    case 1:
                        jimmy -= parseInt(500);
                        break;
                    case 3:
                        jimmy += parseInt(500);
                        break;
                }
                console.log(jimmy)
                jimmy -= parseInt(calories);
                jimmy = parseInt(jimmy)

                console.log(jimmy)

                const basePromptPrefix = `I need ${jimmy} calories for a meal. Suggest me a meal that fits the calories requirement and is the following type of meal: ${type}. I want it to be of ${cuisine} cuisine. I also have the following dietary restrictions: ${dietary}. Keep it to 5 sentences max. Say how many calories the meal will contain in the format "Fit-tastic calorie estimate: xxxx"`;
                generateText(basePromptPrefix).then((res) => {setResponsetext(res)}).catch((err) => {alert(err)})
            }}>Ask Fit!</button>
          </div>
        </footer>
      </div>
    </div>



          );
}


export default Suggest
