import React, { memo, useEffect } from 'react';
import axios from 'axios';

function Weather() {
    let [responseData, setResponseData] = React.useState('');

    useEffect(() => {
        axios({
            method: 'GET',
            url:
                'http://api.openweathermap.org/data/2.5/weather?q=Moscow&units=metric&appid=670d9d5da42676d871af52be3f286e37',
        })
            .then(response => {
                setResponseData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [setResponseData, responseData]);
    return (
        <div className="Weather">
            {responseData && JSON.stringify(responseData.name)}
            {responseData && JSON.stringify(responseData.main.temp)}
        </div>
    );
}

export default Weather;
