//修改app.js
import React, {
  Component
} from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import Header from './Header'
import Content from './Content'


import createStore from './store.js'
import themeReducer from './reducer.js'

import {
  Provider
} from './react-redux.js'

const store = createStore(themeReducer)



class App extends Component {
  // constructor(props) {
  //   super(props);


  // }

  // static childContextTypes = {
  //   store: PropTypes.object
  // }

  // getChildContext() {
  //   return {
  //     store
  //   }
  // }

  // componentDidMount() {
  //   console.log(this.context)
  // }

  render() {
    return (
      <Provider store = {store}>
        <Header />
        <Content />
      </Provider>

    )
  }
}

export default App