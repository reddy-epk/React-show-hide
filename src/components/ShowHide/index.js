import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    showFirst: false,
    showLast: false,
  }

  onFirst = () => {
    this.setState(prevState => ({showFirst: !prevState.showFirst}))
  }

  onSecond = () => {
    this.setState(prevState => ({showLast: !prevState.showLast}))
  }

  render() {
    const {showFirst, showLast} = this.state

    return (
      <div className="back container">
        <h1 className="head">Show/Hide</h1>
        <div className="card-container">
          <div className="first-container">
            <button
              type="button"
              className="button-style"
              onClick={this.onFirst}
            >
              Show/Hide Firstname
            </button>
            {showFirst && <p className="para">pavan.E</p>}
          </div>
          <div className="first-container">
            <button
              type="button"
              className="button-style"
              onClick={this.onSecond}
            >
              Show/Hide Lastname
            </button>
            {showLast && <p className="para">reddy</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
