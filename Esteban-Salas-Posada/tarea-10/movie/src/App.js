import './App.css';
import {useState} from 'react'

function App() {

  const movies = {
    'black panther' : '⚫🐆',
    'up' : '🎈🎈👦🏻🏠👴🎈🎈',
    'the lion king' : '🦁 😭 🐗 🦁 👑',
    'kung fu panda' : '🐼👊',
    'madagascar' : '🦒🦁🦛🦓🐧🐧🐧🐧',
    'harry potter' : '👶⚡👓🏰🎓',
    'paranormal activity' : '👩🏻‍🤝‍🧑🏼📸👻',
    'lord of rings' : '👑👴💍💍',
    'the wolf of wall street' : '🐺🗽💵💰',
    'fast and furious' : '🚗💨😡',
  };

  const [emoji, setEmoji] = useState(movies['black panther'])
  const [textInput, setTextInput] = useState("")
  const [option, setOption] = useState(0)


  function handleButton(event) {
    checkTextInput()
  }

  function handleInput(event) {
    let textInputValue = event.target.value
    setTextInput(textInputValue)
  }

  function checkTextInput(){
    let keysMovies = Object.keys(movies)
    keysMovies.map( (value) => {
      if(value === textInput){
        changeMovie()
        clearTextInput()
      }
    } )
  }

  function changeMovie(){

    setEmoji(Object.values(movies)[option + 1]);
    setOption(option + 1)

    if(Object.values(movies)[option + 1] === undefined){
      alert('You have finished')
      reloadGame()
    }
    
  }

  function clearTextInput(){
    let textInputObject = document.querySelector('.app__input')
    textInputObject.value = ''
    setTextInput('')
  }

  function reloadGame(){
    setEmoji(movies['black panther'])
    setOption(0)
    setTextInput('')
  }

  return (
    <div className="App">
      <h1>Guess the Movie</h1>
      <p className='app__emoji'>{emoji}</p>
      <p className='paragraph'>Type lowercase</p>

      <section>
        <input type="text" onChange={handleInput} className="app__input"></input>
        <br/>
        <input type="button" className='app__button' value="yeah??" onClick={handleButton}/>
        <p>{textInput}</p>
      </section>
      
    </div>
  );
}

export default App;
