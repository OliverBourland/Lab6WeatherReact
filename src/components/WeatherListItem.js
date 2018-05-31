import React, { Component } from 'react';


class WeatherListItem extends Component {
    constructor(props){
        super(props)
        this.showCurrentDay = this.showCurrentDay.bind(this);
    }
    showCurrentDay(){
        const index = this.props.index;
        const onDayClick = this.props.onDayClick;
        onDayClick(index);
    }
    render () {
        const { day } = this.props;
        const date = new Date(day.dt * 1000);
        return (
            <div onClick={this.showCurrentDay} className="weather-list-item">
            <h2>{date.getMonth() + 1} / {date.getDate()}</h2>
            <h3>{day.temp.min.toFixed(1)}&deg;F &#124; {day.temp.max.toFixed(1)}&deg;F</h3>
            </div>
        )
        }
}

export default WeatherListItem;
