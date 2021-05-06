import React from 'react'
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
class Greeting extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    let currentUser = this.props.currentUser;
    debugger
    const display = currentUser ? (
      <div>
        <p>Hello, {currentUser.username}</p>
        <button onClick={this.props.logout}>Log Out</button>
      </div>
    ) : (
      <div>
        <Link className="btn" to="/signup">Sign Up</Link>
        <Link className="btn" to="/login">Log In</Link>
      </div>
    );

    return(
      <div>{display}</div>
    )
  }
}
export default Greeting