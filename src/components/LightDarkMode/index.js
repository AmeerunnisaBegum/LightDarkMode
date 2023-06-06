/* eslint-disable no-lone-blocks */
// Write your code here
import * as react from 'react'

import './index.css'

class LightDarkMode extends react.Component {
  state = {text: 'Light Mode', count: false}

  getButtonText = () => {
    const {count} = this.state

    return count === true ? 'Dark Mode' : 'Light Mode'
  }

  onIncrement = () => {
    this.setState(prevState => ({count: !prevState.count}))
  }

  render() {
    const text = this.getButtonText()
    return (
      <div className="cont1">
        <div className="cont2">
          <h1 className="head">Click To Change Mode</h1>
          <div>
            {text === 'Light Mode' ? (
              <button type="button" className="tog" onClick={this.onIncrement}>
                {text}
              </button>
            ) : (
              <button type="button" className="tog2" onClick={this.onIncrement}>
                {text}
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
