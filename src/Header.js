//./src/Header.js
import React, {
	Component
} from 'react'
import PropTypes from 'prop-types'

import {
	connect
} from './react-redux.js'

class Header extends Component {

	// static contextTypes = {
	// 	store: PropTypes.object
	// }

	constructor(props) {
		super(props);

		this.state = {
			themeColor: ''
		};

	}

	// componentWillMount() {
	// 	const {
	// 		store
	// 	} = this.context
	// 	this._updateThemeColor()
	// 	store.subscribe(() => this._updateThemeColor())
	// }
	// _updateThemeColor() {
	// 	const {
	// 		store
	// 	} = this.context
	// 	const state = store.getState()
	// 	this.setState({
	// 		themeColor: state.themeColor
	// 	})
	// }

	render() {
		return (
			<h1 style={{color:this.props.themeColor}}>this is header</h1>
		)
	}
}


const mapStateToProps = (state) => {
	return {
		...state,
		themeColor: state.themeColor,

	}
}

Header = connect(mapStateToProps)(Header)

export default Header