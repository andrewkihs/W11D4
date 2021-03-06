import React from 'react'




class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput(type){
    return (e) => {
      this.setState({ [type]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  
  render() {


  // debugger
    let disp_string = this.props.formType ==='login' ? disp_string = 'Log In' : disp_string = 'Sign Up'
    return(
    <div className="session-form">
        <h2>{disp_string}</h2>
          <form>
            <label>Username:
              <input type="text" 
              value={this.state.username} 
              onChange={this.handleInput('username')}
              />
            </label>
            <label>Password:
              <input type="password" 
              value={this.state.password} 
              onChange={this.handleInput('password')}
              />
            </label>
            <button onClick={this.handleSubmit}>Log in</button>
          </form>
      </div>
    )
  }
}

export default SessionForm