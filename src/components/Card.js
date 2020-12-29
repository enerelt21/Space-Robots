import React, {Fragment} from 'react';

const Card = (props) => {
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt ='Best Friend' src={`https://robohash.org/${props.id}?200x200`}/>
			<Fragment>
				<h2> {props.username} </h2>
				<p>{props.name}</p>
			</Fragment>
		</div>
	);
}
export default Card