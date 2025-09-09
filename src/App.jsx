import {useState, useEffect, useCallback} from "react";
import './Style.css';
const API_KEY = import.meta.env.VITE_API_KEY;
 const API_URL = 'https://api.api-ninjas.com/v1/emoji?name=';

// useState hook needs to be inside the App function
function App() {
  const [input, setInput] = useState('');
  const [isTinyTextDisplayed, setIsTinyTextDisplayed] = useState(false);
  const [emojiStory, setEmojiStory] = useState([]);
  const [loading,setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [emojiNames, setEmojiNames] = useState([]);
  // need this to display the name of the emoji as an array 
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
  

    // Process the input whenever it changes
  

  //! used to memoize the fetchEmoji function with useCallback
  const fetchEmoji = useCallback(async (word) => {
    if (!word.trim()) return '❓';
    
    try {
      const response = await fetch(`${API_URL}${encodeURIComponent(word.trim())}`, {
        headers: { 
          'X-Api-Key': API_KEY,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Emoji not found');
      }

      const data = await response.json();
      return {
        character: data[0]?.character || '❓',
        name: data[0]?.name || 'unknown'
      };
    } catch (err) {
      console.error('Error fetching emoji:', err);
      return '❓'; // Return question mark if emoji not found
    }
  }, []);


  useEffect(() => {
    const processInput = async () => {
      // Checks if the input ends with a space and is not empty
      if (!input.endsWith(' ') && input !== '') return;
              // Splits the input into words and filters out any empty strings
      const words = input.trim().split(' ').filter(Boolean);
      // Checks if the words array is empty
      if (words.length === 0) return;
      // Gets the last word from the input
      const lastWord = words[words.length - 1];
      
      // Only process if we have a new word (after space)
      if (lastWord && (emojiStory.length === 0 || words.length > emojiStory.length)) {
        setIsLoading(true);
        try {
          const emojiData = await fetchEmoji(lastWord);
          // Adds the emoji to the emojiStory array
          setEmojiStory(prev => [...prev, emojiData.character]);
          // Adds the emoji name to the emojiNames array
          setEmojiNames(prev => [...prev, emojiData.name]);
          setError('');
        } catch (err) {
          setError('Failed to fetch emoji');
        } finally {
          setIsLoading(false);
        }
      }
    };

    processInput();
  }, [input, fetchEmoji, emojiStory.length]);

  return (
    <>
    <div className="App" style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>📖 Emoji Story</h1>
      <div>
        {/* input variable is the value of the input field [useState] */}
        <input type="text" 
          value={input}
          onChange={handleInputChange}
          placeholder="Type words separated by spaces..."
          disabled={loading}
          // will do the isloading later is so when the isloading is true the input is disabled
/>  
{loading && <p>Loading emoji...</p>}
{error && <p style={{ color: 'red' }}>{error}</p>}
{/* continguency to see errors and loading */}
      </div>
      {/* Display the emoji story, with names displayed as double clickable tooltips 120 - 131 */}
    <div onDoubleClick={toggleTinyText}>
      <div className='rowlike'>
      {emojiStory.map((emoji, index) => (
          <span key={index}>
            <div className='tinytext'>
              {emojiNames[index]} {`  `}
            </div>
            {emoji} {` `}
          </span>
        ))}  
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
