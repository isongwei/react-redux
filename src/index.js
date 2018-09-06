import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();



const appState = {
	title: {
		text: 'this is title',
		color: 'red',
	},
	content: {
		text: 'this is content',
		color: 'blue'
	}
}

function renderApp(appState) {
	renderTitle(appState.title)
	renderContent(appState.content)
}

function renderTitle(title) {
	const titleDOM = document.getElementById('title')
	titleDOM.innerHTML = title.text
	titleDOM.style.color = title.color
}

function renderContent(content) {
	const contentDOM = document.getElementById('content')
	contentDOM.innerHTML = content.text
	contentDOM.style.color = content.color
}

function dispatch(action) {
	switch (action.type) {
		case 'update_title_text':
			appState.title.text = action.text;
			break;
		case 'update_title_color':
			appState.title.color = action.color;
			break;
		default:
			break
	}
}


//修改方式1
dispatch({
	type: 'update_title_text',
	text: '修改过的'
})

/*

createStore 接受两个参数，一个是表示应用程序状态的 state；另外一个是 stateChanger，它来描述应用程序状态会根据 action 发生什么变化，其实就是相当于本节开头的 dispatch 代码里面的内容。

createStore 会返回一个对象，这个对象包含两个方法 getState 和 dispatch。getState 用于获取 state 数据，其实就是简单地把 state 参数返回。

dispatch 用于修改数据，和以前一样会接受 action，然后它会把 state 和 action 一并传给 stateChanger，那么 stateChanger 就可以根据 action 来修改 state 了。
*/

function createStore(state, stateChanger) {
	const getState = () => state;
	const dispatch = (action) => stateChanger(state, action)
	return {
		getState,
		dispatch
	}
}


//监控数据变化

createStore = (state, stateChanger) => {
	const listeners = []
	const subscribe = (listener) => listeners.push(listener)
	const getState = () => state
	const dispatch = (action) => {
		stateChanger(state, action)
		listeners.forEach((listener) => listener())
	}
	return {
		getState,
		dispatch,
		subscribe
	}
}


function stateChanger(state, action) {

	switch (action.type) {
		case 'update_title_text':
			state.title.text = action.text;
			break;
		case 'update_title_color':
			state.title.color = action.color;
			break;
		default:
			break
	}
}
//修改方式2
const store = createStore(appState, stateChanger)

renderApp(appState)

//更改的时候进行更新
store.subscribe(() => renderApp(store.getState()))
store.dispatch({
	type: 'update_title_color',
	color: 'green'
}, )