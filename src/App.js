export default class App extends React.Component{

  render(){
    return (
      <main>
        <form>
          <label>First name: </label>
          <input name="firstName" onChange={handleChange}> </input>
        </form>
      </main>
    )
  }
}
