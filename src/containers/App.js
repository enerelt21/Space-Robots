import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import 'tachyons';

function App(){
	const [robots, setRobots] = useState([]);
	const [searchfield, setSearchfield] = useState('');
	const [count, setCount] = useState(0);
	
	//componentDidMount()
	useEffect(()=> {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users=>setRobots(users));
		console.log(count);
	},[count])
	const onSearchChange = (event) => {
		setSearchfield(event.target.value)
	}
	const filteredFriends = robots.filter(robot => {
		return robot.username.toLowerCase().includes(searchfield.toLowerCase());
	})
	if (!robots.length){
		return <h1>Loading</h1>
	}else{
		return (
			<div className='tc'>
	  			<h1 className='f1'>Space Robots</h1>
	  			<button onClick={()=>setCount(count+1)}>Click me!</button>
	  			<SearchBox searchChange={onSearchChange}/>
	  			<Scroll>
	  				<ErrorBoundry>
						<CardList robots={filteredFriends}/>
					</ErrorBoundry>
				</Scroll>
			</div>
		);
	}
}
export default App;