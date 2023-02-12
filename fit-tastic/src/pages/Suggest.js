import { Configuration, OpenAIApi } from "openai";
import { useState } from 'react';
import './Suggest.scss'

const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);
const TYPE = ["Breakfast","Lunch","Dinner"];




function Suggest() {
    const [type, setType] = useState("");
    const [cuisine, setCuisine] = useState("");
    const [gender, setGender] = useState(true);
    const [age, setAge] = useState("");
    const [weight, setWeight] = useState("");
    const [feet, setFeet] = useState("");
    const [inches, setInches] = useState("");
    const [activity, setActivity] = useState(1);
    const [calories, setCalories] = useState("");
    const [gainloss, setGainloss] = useState(1);
    const [dietary, setDietary] = useState("");
    const [responsetext, setResponsetext] = useState("");


    const calcBMR = (male, weight, height, age) => {
        console.log(male, weight, height, age)
        if (male) {
            return 66 + (6.23 * weight) + (12.7 * height) - (6.8 * age)
        }
        else {
            return  655 + (4.35 * weight) + (4.7 * height) - (4.7 * age)
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
      <div className='signup-container'>
        <div className='left-container'>
        <h1>
          <i className='fas fa-paw'></i>
      FIT-TASTIC
        </h1>
        <div className='puppy'>
          <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/38816/image-from-rawpixel-id-542207-jpeg.png'/>
        </div>
      </div>
      <div className='right-container'>
        <header>
          <h1>Suggest a random meal!</h1>
          <div className='set'>
            <div className='pets-name'>
              <label for='pets-name'>Type of Cuisine</label>
              <input id='pets-name' placeholder="eg: Japanese" type='text'/>
            </div>
            <div className='pets-photo'>
              <button id='pets-upload'>

              </button>
              <label for='pets-upload'>Upload a photo</label>
            </div>
          </div>
          <div className='set'>
            <div className='pets-breed'>
              <label for='pets-breed'>Dietary Restriction</label>
              <input id='pets-breed' placeholder="eg: Gluten-free" type='text'/>
            </div>
            <div className='pets-birthday'>
              <label for='pets-birthday'>Age</label>
              <input id='pets-birthday' type='text'/>
            </div>
          </div>
          <div className='set'>
            <div className='pets-gender'>
              <label for='pet-gender-female'>Gender</label>
              <div className='radio-container'>
                <input checked='' id='pet-gender-female' name='pet-gender' type='radio' value='female'/>
                <label for='pet-gender-female'>Female</label>
                <input id='pet-gender-male' name='pet-gender' type='radio' value='male'/>
                <label for='pet-gender-male'>Male</label>
              </div>
            </div>
            <div className='pets-spayed-neutered'>
              <div className='pets-birthday'>
              <label for='pets-birthday'>Height in inches</label>
              <input id='pets-birthday' type='text'/>
            </div>
            </div>
          </div>
          <div className='pets-weight'>
            <label for='pet-weight-0-25'>Weight in pounds</label>
            <div className='radio-container'>
              <input checked='' id='pet-weight-0-25' name='pet-weight' type='radio' value='0-25'/>
              <label for='pet-weight-0-25'>0-25 lbs</label>
              <input id='pet-weight-25-50' name='pet-weight' type='radio' value='25-50'/>
              <label for='pet-weight-25-50'>25-50 lbs</label>
              <input id='pet-weight-50-100' name='pet-weight' type='radio' value='50-100'/>
              <label for='pet-weight-50-100'>50-100 lbs</label>
              <input id='pet-weight-100-plus' name='pet-weight' type='radio' value='100+'/>
              <label for='pet-weight-100-plus'>100+ lbs</label>
            </div>
          </div>

          <div className='pets-weight'>
            <label for='pet-weight-0-25'>Weight</label>
            <div className='radio-container'>
              <input checked='' id='pet-weight-0-25' name='pet-weight' type='radio' value='0-25'/>
              <label for='pet-weight-0-25'>0-25 lbs</label>
              <input id='pet-weight-25-50' name='pet-weight' type='radio' value='25-50'/>
              <label for='pet-weight-25-50'>25-50 lbs</label>
              <input id='pet-weight-50-100' name='pet-weight' type='radio' value='50-100'/>
              <label for='pet-weight-50-100'>50-100 lbs</label>
              <input id='pet-weight-100-plus' name='pet-weight' type='radio' value='100+'/>
              <label for='pet-weight-100-plus'>100+ lbs</label>
            </div>
          </div>
        </header>
        <footer>
          <div className='set'>
            <button id='back'>Back</button>
            <button id='next'>Next</button>
          </div>
        </footer>
      </div>
    </div>



          );
}


export default Suggest
