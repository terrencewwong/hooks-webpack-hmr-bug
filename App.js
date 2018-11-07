import React, {useState, useEffect} from 'react'
import { hot } from 'react-hot-loader'

class ClassComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      text: "but class component still works"
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({ text: e.target.value })
  }

  render () {
    return (
      <>
        <p>{this.state.text}</p>
        <input value={this.state.text} onChange={this.handleChange} />
      </>
    )
  }
}

const App = () => {
  const [state, setState] = useState("initial state")
  useEffect(() => console.log("USING EFFECT WITH HMR!"))

  return (
    <div>
      <p>The callback passed to useEffect does not run, and calling setState does not update the state!</p>
      <p>state: {state}</p>
      <input value={state} onChange={(e) => setState(e.target.value)} />
      <hr />
      <ClassComponent />
    </div>
  )
}

export default hot(module)(App)
