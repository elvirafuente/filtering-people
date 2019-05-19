import React from 'react';
import People from './components/People';
import Filters from './components/Filters';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      city: '',
    }
    this.fetchData = this.fetchData.bind(this);
    this.getCityInput = this.getCityInput.bind(this);
    this.getFilteredByCity = this.getFilteredByCity.bind(this);
    this.fetchData();
 
  }

  fetchData() {
    fetch("https://randomuser.me/api/?results=50")
      .then(response => response.json())
      .then(data => {
        const info = data.results;
        this.setState({
          data: info,
        })
      })
  }

  getCityInput(event){
    const target = event.currentTarget.value;
    this.setState({
      city: target,
    })
  }

  getFilteredByCity(){
        const filteredByCity = this.state.data.filter(item => {
          const city = item.location.city;
          if(city.includes(this.state.city)){
            return true;
          }else {
            return false;
          }
    });
    return filteredByCity;
  }


  render() {
    const filteredByCity = this.getFilteredByCity();
    return (
      <div className="App">
        <Filters
          info={this.state.data} 
          filter={this.getCityInput}
        />
        <People
          info={this.state.data} filtered={filteredByCity}
        />
      </div>
    );
  }
}

export default App;
