import { WEATHER_REQUEST, WEATHER_SUCCESS, WEATHER_FALIURE } from "./WeatherType"

const initialState ={
    loading: true,
    data: [],
    error: ''
}

export const weatherReducer = (state = initialState, action) => {
    switch(action.type){
        case WEATHER_REQUEST:
            return{
                ...state,
                loading: true
            }
        case WEATHER_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case WEATHER_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}
