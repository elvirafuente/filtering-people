import React from 'react';
import './Filters.css';

class Filters extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {info} = this.props
        if(!info.length){
            return (
                <div className="filters__list">
                    <p>loading</p>
                </div>
            )
        }else {
            return (
                <nav>
                    <div className="filters__name">
                        <label htmlFor="city">
                            Filter by name
                            <input type="text" id="name" onChange={this.props.filter}/>
                        </label>
                    </div>
                    <div className="filters__gender">
                    <label htmlFor="male">
                            <input type="checkbox" value="male" onClick={this.props.gender}/>
                            Male
                        </label>
                        <label htmlFor="female">
                            <input type="checkbox" value="female" onClick={this.props.gender}/>
                            Female
                    </label>
                    </div>
                </nav>
            )
        }
    }
}

export default Filters;


