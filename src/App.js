import React from "react"

export default class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      firstName: "",
      lastName: ""
    };
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    });

    console.log(this.state[name])
  }

  render(){
    return (
      <main>
        <form>

          <label htmlFor="firstName">First name: </label>

          <input name="firstName" id="firstName" value={this.state.firstName}
          onChange={this.handleChange}/>

          <label htmlFor="lastName"> Last name: </label>
            <input name="lastName" id="lastName" value={this.state.lastName}
          onChange={this.handleChange}/>


        </form>
      </main>
    )
  }
}
