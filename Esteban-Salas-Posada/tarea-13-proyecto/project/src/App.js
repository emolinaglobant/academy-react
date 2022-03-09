import React, { Component } from 'react'
import Seeker from './components/Seeker'
import Result from './components/Result'

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      word: '',
      image: [],
      page: ''
    };
  }

  // Al cambiar de pagina hacer scroll hacia el inicio
  scroll = ()=>{
    const element = document.querySelector('.jumbotron')
    element.scrollIntoView('smooth', 'start')
  }

  // Ir a la anterior pagina de imagenes
  previousPage = ()=>{
    let page = this.state.page
    if(page===1 ) return null
    page -= 1
    this.setState({
      page: page
    }, /* Esto es un callback, se usa porque tenemos que mandar llamar la funcion para que re-renderice pues el cambia el estado pero no renderiza */()=>{
      this.consultAPI()
      this.scroll()
    })
  }

  // Ir a la siguiente pagina de imagenes
  nextPage = ()=>{
    let page = this.state.page
    page += 1
    this.setState({
      page: page
    }, /* Esto es un callback, se usa porque tenemos que mandar llamar la funcion para que re-renderice pues el cambia el estado pero no renderiza */ ()=>{
      this.consultAPI()
      this.scroll()
    })
  }

  consultAPI = () =>{
    const word = this.state.word
    const page = this.state.page
    const url = `https://pixabay.com/api/?key=22277954-decb6172c69f1020f50219e2b&q=${word}&per_page=30&page=${page}`
    console.log(url)
 
    fetch(url)
      .then(answer => answer.json())
      .then(result => this.setState({ image: result.hits }))
  }

  getDataToSearch = (wordToSearch) => {
    this.setState({
      word: wordToSearch,
      page: 1
    }, /* Esto es un callback*/ ()=>{
      this.consultAPI()
    });
  }

  render(){
    return (
      <div className="app container">
        
        <div className="jumbotron mt-5">
          <p className="lead text-center">Buscador de imagenes</p>
          <Seeker getDataToSearch={this.getDataToSearch}/>
        </div>

        <div className="row justify-content-center">
          <Result
            image={this.state.image}
            previousPage={this.previousPage}
            nextPage={this.nextPage}
            />
        </div>
        
      </div>
    );
  }
  
}

export default App;