import React from 'react';
import People from './components/People';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
    }
    this.fetchData = this.fetchData.bind(this);
    this.fetchData()
  }

  fetchData(){

    fetch("https://randomuser.me/api/?results=50")
    .then(response => response.json())
      .then(data => {
        const info = data.results;
        this.setState({
          data: info,
        })

      })
  }
  
  render() {
    return (
      <div className="App">
      <People 
      info={this.state.data}
      />
      </div>
    );
  }
}

export default App;
