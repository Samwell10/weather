import { WEATHER_REQUEST, WEATHER_SUCCESS, WEATHER_FALIURE } from "./WeatherType"
import axios from "axios"

export const weatherRequest = () =>{
    return{
        type: WEATHER_REQUEST
    }
}

export const weatherSuccess = (response) =>{
    return{
        type: WEATHER_SUCCESS,
        payload: response
    }
}

export const weatherFaliure = (error) =>{
    return{
        type: WEATHER_FALIURE,
        payload: error
    }
}
const baseurl = 'https://api.open-meteo.com'
export const fetchweather = (lat, long) => {
    return(dispatch) => {
        dispatch(weatherRequest())
        axios.get(`${baseurl}/v1/forecast?latitude=${lat}&longitude=${long}&daily=weathercode,temperature_2m_max,uv_index_max,windspeed_10m_max,shortwave_radiation_sum&timezone=GMT`)
            .then( response => {
                const data = response.data
                dispatch(weatherSuccess(data))
                console.log(data)
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(weatherFaliure(errorMsg))
            })
    }
}
