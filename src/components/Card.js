import React from 'react';
// eslint-disable-next-line
import styler from './styler.css'
const Card=({name, email,id})=>{
	
	return(
		<div className='tc bg-light-green br3 pd3 ma2 grow dib shadow-5 bw2 ' id='iop'>
			<img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
		);
}
export default Card;