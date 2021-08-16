import React from 'react';
import { Context } from './Provider';

export default function Test() {
	return (
		<div>
			<Context.Consumer>
				{(value) =>(
					<div>{value}</div>
				)}
			</Context.Consumer>
		</div>
	)
}