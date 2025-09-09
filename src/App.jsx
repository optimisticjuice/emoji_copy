import {useState, useEffect} from "react";
import './Style.css';
// const API_KEY = import.meta.env.VITE_API_KEY;
// const API_URL = 'https://api.api-ninjas.com/v1/emoji?name=';
// TODO: uncomment the APIs when the API is ready

// useState hook needs to be inside the App function
function App() {
  const [input, setInput] = useState('');
  const [isTinyTextDisplayed, setIsTinyTextDisplayed] = useState(false);
  const handleInputChange = (event) => {
  // handleInputChange function changes the value of the input so what is typed is stored in the input variable
    setInput(event.target.value);
  }
//  The toggleTinyText togglese the isTinyTextDisplayed state as a boolean from false to true and vice versa looped
  const toggleTinyText = () => {
    setIsTinyTextDisplayed(prev => !prev);
  };

  useEffect(() => {
    const tinytextElement = document.querySelectorAll('.tinytext');
    //  querySelectorAll is for all the class elements with the name tinytext
    // checks if the tinyTextElement exists then runs the code inside the if statement
    if (tinytextElement) {
      // loops through the tinytextElement
      tinytextElement.forEach(element => {
        // Displays the tinytext element if isTinyTextDisplayed is true and hides it if it is false
        element.style.display = isTinyTextDisplayed ? 'block' : 'none';
      });
    }
    // changes the code inside the useEffect function when the isTinyTextDisplayed state changes
  }, [isTinyTextDisplayed]);

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
    <div onDoubleClick={toggleTinyText}>
      <div className='rowlike'>
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
