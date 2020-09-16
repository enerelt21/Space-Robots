import React, {Fragment} from 'react';
import Card from './Card';

const CardList = ({robots}) => {
	const cardsArray = robots.map((user, i) => {
		return (
			<Card 
				key={robots[i].id} 
				id={robots[i].id} 
				username={robots[i].username} 
				name={robots[i].name}
			/>
		);
	});
	return (
	<Fragment>
  		{cardsArray}
 	</Fragment>
	);
}
export default CardList;