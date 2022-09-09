import React from "react"

export default class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: true,
      employment: "",
      favColor: ""
    };
  }

  handleChange = (e) => {
    let {name, value, checked, type} = e.target
    this.setState({
      [name]: type === "checkbox" ? checked : value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state);
  }

  render(){
    console.log(this.state.favColor)
    return (
      <main>
        <form onSubmit={this.handleSubmit}>

          <label htmlFor="firstName">First name: </label>

          <input name="firstName" id="firstName" value={this.state.firstName}
          onChange={this.handleChange}/>

          <label htmlFor="lastName"> Last name: </label>
          <input name="lastName" id="lastName" value={this.state.lastName}
          onChange={this.handleChange}/>

          <label htmlFor="isFriendly">Are you friendly?</label>
          <input
              type="checkbox"
              id="isFriendly"
              onChange={this.handleChange}
              value={this.state.isFriendly}
          />
          {/*
            Configuring radio buttons.
            When we click one of the radio buttons, the value on its value
            property is assigned to the employment state property.
            This state property has its value then compared to an string
            on each radio button to determine which one is to be checked.
            */}
          <fieldset>
            <legend>Current employment status</legend>
                <input
                    type="radio"
                    id="unemployed"
                    name="employment"
                    onChange={this.handleChange}
                    value="unemployed"
                    checked={this.state.employment === "unemployed"}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />

                <input
                    type="radio"
                    id="part-time"
                    name="employment"
                    onChange={this.handleChange}
                    value="part-time"
                    checked={this.state.employment === "part-time"}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />

                <input
                    type="radio"
                    id="full-time"
                    name="employment"
                    onChange={this.handleChange}
                    value="full-time"
                    checked={this.state.employment === "full-time"}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
          </fieldset>
          {/*
            Configuring a selection box.
            */}
          <fieldset>
          <legend>Preferences</legend>
          <label htmlFor="favColor">What is your favorite color?</label>
          <select
            id="favColor"
            value={this.state.favColor}
            onChange={this.handleChange}
            name="favColor">
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            </fieldset>
            <button>Submit</button>
        </form>
      </main>
    )
  }
}
