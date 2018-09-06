//./src/ThemeSwitch.js
import React, {
	Component
} from 'react'
import PropTypes from 'prop-types'
import {
	connect
} from './react-redux.js'

class ThemeSwitch extends Component {
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

	handleSwitchColor(color) {
		if (this.props.onSwitchColor) {
			this.props.onSwitchColor(color)
		}


		// const {
		// 	store
		// } = this.context
		// console.log(color)

		// store.dispatch({
		// 	type: 'CHANGE_COLOR',
		// 	themeColor: color
		// })
	}



	render() {
		return (
			<div>
        <button style={{color:this.props.themeColor}}
        onClick={this.handleSwitchColor.bind(this,'red')}>Red</button>
        <button style={{color:this.props.themeColor}}
        onClick={this.handleSwitchColor.bind(this,'blue')}>Blue</button>
      </div>
		)
	}
}


const mapStateToProps = (state) => {

	return {
		themeColor: state.themeColor
	}


}

const mapDispatchToProps = (dispatch) => {
	return {
		onSwitchColor: (color) => {
			dispatch({
				type: 'CHANGE_COLOR',
				themeColor: color
			})
		}
	}
}


ThemeSwitch = connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch)

export default ThemeSwitch