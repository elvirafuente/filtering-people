import React from 'react';
import './Filters.css';

class Filters extends React.Component{
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
                            Filter by city
                            <input type="text" id="name" onChange={this.props.filterCity}/>
                        </label>
                    </div>
                    <div className="filters__gender">
                    <label htmlFor="male">
                            <input type="checkbox" value="male" onClick={this.props.filterGender}/>
                            Male
                        </label>
                        <label htmlFor="female">
                            <input type="checkbox" value="female" onClick={this.props.filterGender}/>
                            Female
                    </label>
                    </div>
                </nav>
            )
        }
    }
}

export default Filters;


