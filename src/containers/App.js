import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import 'tachyons';

class App extends Component {
	constructor(){
		super();
		this.state = {
			robots: [],
			searchfield: ''
		}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=> response.json())
			.then(users=>this.setState({robots: users})
		);
	}
	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}
	render(){
		const {robots, searchfield} = this.state;
		const filteredFriends = robots.filter(robot => {
			return robot.username.toLowerCase().includes(searchfield.toLowerCase());
		})
		if (!robots.length){
			return <h1>Loading</h1>
		}else{
			return (
				<div className='tc'>
		  			<h1 className='f1'>Space Robots</h1>
		  			<SearchBox searchChange={this.onSearchChange}/>
		  			<Scroll>
		  				<ErrorBoundry>
							<CardList robots={filteredFriends}/>
						</ErrorBoundry>
					</Scroll>
				</div>
			);
		}
	}
}
export default App;