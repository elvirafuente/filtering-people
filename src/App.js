import React from 'react';
import People from './components/People';
import Filters from './components/Filters';
import './App.css';
import { Route, Switch, Link } from "react-router-dom";
import PersonDetails from "./components/PersonDetails";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      city: '',
      gender: [],
    }
    this.fetchData = this.fetchData.bind(this);
    this.getCityInput = this.getCityInput.bind(this);
    this.getGenderInput = this.getGenderInput.bind(this);

    this.getFiltered = this.getFiltered.bind(this);
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

  getCityInput(event) {
    const target = event.currentTarget.value;
    this.setState({
      city: target,
    })
  }

  getGenderInput(event) {
    const target = event.currentTarget.value;
    const checked = event.currentTarget.checked;
    console.log(checked);
    this.setState(prevState => {
      return {
        gender: checked
          ? prevState.gender.concat(target)
          : prevState.gender.filter(item => item !== target)
      }
    })


  }

  getFiltered() {
    const { data, gender } = this.state
    return data
      .filter(item => {
        const city = item.location.city;
        return city.includes(this.state.city) ? true : false;
      })
      .filter(item => {
        return gender.includes(item.gender) ? true : false;
      })

  }





  render() {
    const filtered = this.getFiltered();

    return (
      <div className="App">
        <Filters
          info={this.state.data}
          filterCity={this.getCityInput}
          filterGender={this.getGenderInput}
        />
        <Switch>
          <Route
            exact path="/"
            render={routerProps => {
              return (
                <People match={routerProps.match}
                  info={this.state.data} filtered={filtered} />)
            }}
          />
          <Route
            path="/child/:eysis"
            render={routerProps => {
              console.log(routerProps)
              return (
                <PersonDetails 
                  match={routerProps.match}
                  info={this.state.data} 
                  filtered={filtered}

                />
              )
            }}
          />


        </Switch>

      </div>
    );
  }
}

export default App;
