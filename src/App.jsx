import {useState} from "react";
import './Style.css';
// const API_KEY = import.meta.env.VITE_API_KEY;
// const API_URL = 'https://api.api-ninjas.com/v1/emoji?name=';




// useState hook needs to be inside the App function
function App() {
  const [input, setInput] = useState('');

  const handleInputChange = (event) => {
  // handleInputChange function changes the value of the input so what is typed is stored in the input variable
    setInput(event.target.value);
  }
  return (
    <>
    <div className="App" style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>📖 Emoji Story</h1>
      <div>
        <input type="text" 
          value={input}
          onChange={handleInputChange}
          placeholder="Type words separated by spaces..."
          // disabled={loading}
          // will do the isloading later is so when the isloading is true the input is disabled
/>  
   {/* input variable is the value of the input field [useState] */}
      </div>
      {/* {} */}
      {/* {} */}
    <div>
      <div>
        {/*         {emojiStory.map((emoji, index) => (
        */}
      </div>
    </div>
    <div>
      <p>Tip : Type the word first and press space to turn it into an emoji.</p>
    </div>
    </div>
    

    </>
  )
}

export default App
