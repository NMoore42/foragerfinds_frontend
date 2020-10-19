import React from 'react';


class Login extends React.Component {
  constructor(){
    super()
    this.state = {
      username: "",
      password: ""
    }
  }



  render(){
    return (
      <div>
        <label htmlFor="username">Username: </label>
        <input id="username" type="text"/>
        <br/>
        <label htmlFor="password">Password: </label>
        <input id="password" type="password"/>
        <br/>
        <input type="submit" value="Login"/>
      </div>
    )
  }
}

export default Login
