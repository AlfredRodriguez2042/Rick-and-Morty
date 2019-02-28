import React, { Component } from 'react';
import './App.scss';

import Characters from './Characters'
import Buscador from './plugins/buscador'

class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
       character:[],
       info:[],
       currentPages:[],
       filter : {
        name: '',
        status: '',
        category: [],
        search: ''
    }
      
    }
    
    this.getPost = this.getPost.bind(this)
    this.hadleOnSearch = this.hadleOnSearch.bind(this)
    this.handleOnFilter = this.handleOnFilter.bind(this)
    this.handleIncreaseButton = this.handleIncreaseButton.bind(this)
  }

  hadleOnSearch(e){
    let newFilter = Object.assign( {}, this.state.filter, {[e.target.name]: [e.target.value]} )
    this.setState({
        filter:newFilter
    })
     console.log(newFilter)
    }
    
    handleOnFilter(filter, data){
     let regex = new RegExp(filter.search, 'i')
     return data.filter(q => (
         regex.test(q.name) || regex.test(q.category) || regex.test(q.status)
     ))
    }

  getPost(number){
    
    console.log(this.state.info)
 fetch("https://rickandmortyapi.com/api/character/?page="+number)
.then(res=> res.json())
.then(res=>  //console.log(res.info),
  this.setState({
   character: res.results,
   info: res.info
}))
.catch(err=>console.log(err))

this.setState({currentPages: number})
  }
handleDecreaseButton(){ 
    this.setState({currentPages: parseInt(this.state.currentPages) - 1});
}
handleIncreaseButton(){ 
    this.setState({currentPages: parseInt(this.state.currentPages) + 1});
    console.log(this.state.currentPages)
}

  componentDidMount(){
    
this.getPost(1);



  }
  render() {
    let item = this.state.character.filter(items=>{
       return console.log(items.status)
    })
    return (
      <div className="App">
      {
        item
      }
      <header className="header">
        <h1 className="logo">React</h1>
        <nav className="main-menu"> <ul className="menu">
          <li className="menu-item">INICIO</li>
          <li className="menu-item">DIRECTORIO</li>
          </ul></nav>
          <Buscador onSearch={this.hadleOnSearch} />
      </header>
          <div className="ctn-title"> <h1>The <span className="title">Rick</span> and <span className="title">Morty</span> API</h1></div>
           <Characters character={this.handleOnFilter(this.state.filter, this.state.character)}/>  
        
      <div> <button onClick={this.getPost}>next</button> </div>     
       </div>
    );
  }
}

export default App;
