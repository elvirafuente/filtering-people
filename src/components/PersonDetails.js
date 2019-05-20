import React from "react";


class PersonDetails extends React.Component {
    render() {
        return (
            <div>
               <p>  Hola {this.props.match.params.id}</p>
                {/* <h3>{`${person.name.first} ${person.name.last}`}</h3>
                <img src={person.picture.medium} alt={`${person.name.first} ${person.name.last}`} />
                <p>{person.gender}</p>
                <p>{person.location.city}</p> */}
            </div>
        )
    }
}

export default PersonDetails;
