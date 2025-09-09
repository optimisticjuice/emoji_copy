
import './Style.css';
const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = 'https://api.api-ninjas.com/v1/emoji?name=';
function App() {
   const [input, setInput ] = useState('');
   const [emojiStory, setEmojiStory] = useState([]);
   const [emojiNames, setEmojiNames] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState('');
   const [searchHistory, setSearchHistory] = useState([]);
  

   
   return (
    <>

    </>
  )
}

export default App
