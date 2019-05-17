import React from 'react';


class People extends React.Component {

    render() {
        if (!this.props.info.length) {
            return (<p>loading</p>)
        }

        else {
            const people = this.props.info
            return (

                <ul>
                    {people.map(person =>
                        <li>
                            <p>{person.gender}</p>
                            <p>{person.email}</p>
                            <p>{`${person.name.first} ${person.name.last}`}</p>
                            <img src={person.picture.medium}/>
                        </li>
                    )
                    }

                </ul>
            )
        }


    }
}

export default People;