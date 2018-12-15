import React from 'react';

import './Number.css'

export default props => {
	return (
		<span className="Number">{props.value}</span>
	);
}