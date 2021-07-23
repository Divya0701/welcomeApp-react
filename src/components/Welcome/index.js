import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  subscribe = () => {
    const {isSubscribed} = this.state

    if (isSubscribed === true) {
      this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
    } else {
      this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
    }
  }

  out = () => {
    const {isSubscribed} = this.state

    if (isSubscribed === true) {
      return 'Subscribed'
    }
    return 'Subscribe'
  }

  render() {
    return (
      <div className="container">
        <h1 className="main-heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        <button type="button" onClick={this.subscribe} className="button">
          {this.out()}
        </button>
      </div>
    )
  }
}
export default Welcome
