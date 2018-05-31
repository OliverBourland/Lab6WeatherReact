import React, { Component } from 'react';


class CurrentDay extends Component {

    render() {
        const city = this.props.city;
        const day = this.props.day;
        const w = day.weather[0];
    

    let today = new Date();
    today.setDate(today.getDate() + day)
    
    let weekday = new Array(7);
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    
    return (
    <div className="current-day">
      <h1 className="day-header">{weekday[today.getDay()]} in {city.name}</h1>
        <div className="weather">
          <p><img src={`http://openweathermap.org/img/w/${w.icon}.png`} alt='DESCRIPTION'/>
          {w.description}</p>
        </div>
          <div className="details flex-parent">
            <div className="temperature-breakdown">
            <p>Morning Temperature:{day.temp.morn}&deg;F</p>
            <p>Day Temperature: {day.temp.day}&deg;F</p>
            <p>Evening Temperature: {day.temp.eve}&deg;F</p>
            <p>Night Temperature: {day.temp.night}&deg;F</p>
            </div>
          </div>
    </div>
    )
  }
}


export default CurrentDay;
