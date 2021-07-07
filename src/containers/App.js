

import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
class App extends Component{
	constructor(){
		super()
		this.state={
	robots:[],
	searchfield:''
      }
	}
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
  }
	onsearchchange=(event)=>{
		this.setState({searchfield: event.target.value})
	}
	
	render(){ 
		const filter = this.state.robots.filter(robots=>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		if(this.state.robots.length===0){
			return (
				<div>
				<h1 className='f1 tc'>Robofriends </h1>
				<Scroll>
				<h1 className='tc f1'>LOADING...</h1>
				</Scroll>
				</div>
				)
		}
		else{
	return(
   	<div className="tc" >
   	<h1 className='f1'>Robofriends</h1>
   	<SearchBox searchchange={this.onsearchchange}/>
   	<Scroll>
    <CardList  robots={filter}/>
    </Scroll>
    </div>
   	);}
   }
  
}
export default App;