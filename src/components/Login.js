import React from 'react';
const loginEndpoint = "http://localhost:3000/login";


class Login extends React.Component {
  constructor(){
    super()
    this.state = {
      username: "",
      password: ""
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  loginObj = () => {
    return {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: JSON.stringify(this.state)
    }
  }

  handleLoginSubmit = (event) => {
    event.preventDefault()
    fetch(loginEndpoint, this.loginObj())
      .then(resp => resp.json())
      .then(userData => console.log(userData))
      .catch(err => new Error(err))
  }


  render(){
    const { username, password } = this.state
    return (
      <div>
        <form onSubmit={this.handleLoginSubmit}>
          <label htmlFor="username">Username: </label>
          <input onChange={this.handleChange} name="username" id="username" type="text" value={username}/>
          <br/>
          <label htmlFor="password">Password: </label>
          <input onChange={this.handleChange} name="password" id="password" value={password} type="password"/>
          <br/>
          <input type="submit" value="Login"/>
        </form>
      </div>
    )
  }
}

export default Login
