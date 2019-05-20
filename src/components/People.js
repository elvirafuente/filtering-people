import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';


class People extends React.Component {

    render() {
        if (!this.props.info.length) {
            return (<p>loading</p>)
        } else {
            const people = this.props.info;
            const filteredPeople = this.props.filtered;
            let targetPeople;
           
            
            if(!this.props.filtered.length){
                targetPeople = people;
            }else {
                targetPeople = filteredPeople;
            }
            console.log(filteredPeople);
            return (

                <ul>
                    {targetPeople.map((person, index) =>
                  
                        <li key={index} id={`li${person.login.uuid}`}>
                            <Link to={`/child/li${person.login.uuid}`}>
                            <h3>{`${person.name.first} ${person.name.last}`}</h3>
                            <img src={person.picture.medium} alt={`${person.name.first} ${person.name.last}`} />
                            <p>{person.gender}</p>
                            <p>{person.location.city}</p>
                            </Link>

                        </li>
                    )}
                </ul>
            )
        }


    }
}

export default People;

