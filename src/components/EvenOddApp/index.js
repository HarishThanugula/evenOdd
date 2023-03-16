import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  evenOddRandomNumber = () => {
    this.setState(prevState => ({
      count: prevState.count,
    }))
  }

  render() {
    const randomNumber = Math.floor(Math.random() * 100)
    const value = randomNumber % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg-container">
        <div className="count-container">
          <h1 className="heading">Count {randomNumber}</h1>
          <p>Count is {value}</p>
          <button
            type="button"
            className="btn"
            onClick={this.evenOddRandomNumber}
          >
            Increment
          </button>
          <p className="paragraph">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
