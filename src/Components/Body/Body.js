import "./Body.css";
import LottieAnimation from "../../Lotties";
import thunder from '../../Assets/thunder.json'
import { connect } from "react-redux";


function formatDate(dateString) {
    const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-NG', options);
}

const Body = ({data, weathercode}) => {
    
    const today = new Date();
    const formattedDate = formatDate(today);
    return ( 
        <div className="body">
            <div className="weather-name">
                <p>Cloudy</p>
            </div>
            <div className="weather-image">
                <LottieAnimation data={thunder} />
            </div>
            <div className="weather-temp">
                <p className="temperature">{data?.daily?.temperature_2m_max[0]}°C</p>
                <div className="date">
                    <p>{formattedDate}</p>
                </div>
            </div>
        </div>
    );
}
const mapStoreToProps = (state) => {
        console.log(state)
    return {
        data: state.weather?.data,
        weathercode: state.weather.data.daily.weathercode
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
       
    };
  };
export default connect(mapStoreToProps, mapDispatchToProps)(Body);