//./src/Content.js
import React, {
	Component
} from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from './themeSwitch.js'

class Content extends Component {
	static contextTypes = {
		store: PropTypes.object
	}

	componentWillMount() {
		const {
			store
		} = this.context
		const state = store.getState()
		this.setState({
			themeColor: state.themeColor
		})
	}

	render() {

		return (
			<div>
        <p>this is content</p>
        <ThemeSwitch />
      </div>
		)
	}
}
export default Content