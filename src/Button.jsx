import React from 'react';
import { polyfill } from 'react-lifecycles-compat'
class Button extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>Button</div>
		)
	}
}
polyfill(Button)
export default Button
