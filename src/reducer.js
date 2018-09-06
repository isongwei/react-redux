//reducer.js
const themeReducer = (state, action) => {
	if (!state) return {
		themeColor: 'red'
	}
	switch (action.type) {
		case 'CHANGE_COLOR':

			console.log("修改颜色")
			return { ...state,
				themeColor: action.themeColor
			}
		default:
			return state
	}
}
export default themeReducer