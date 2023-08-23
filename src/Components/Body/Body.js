import "./Body.css";
import { LottieAnimation } from "../../Lotties";
import thunder from '../../Assets/thunder.json'
import rain from '../../Assets/rain.json'
import snow from '../../Assets/snow.json'
import cloud from '../../Assets/cloudy.json'
import clear from '../../Assets/clear.json'
import drizzle from '../../Assets/drizzle.json'
import fog from '../../Assets/fog.json'
import { connect } from "react-redux";


function formatDate(dateString) {
    const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-NG', options);
}

const Body = ({data, weathercode}) => {
    console.log(data?.daily?.weathercode[0])
    const today = new Date();
    const formattedDate = formatDate(today);
    return ( 
        <div className="body">
            <div className="weather-name">
                {(data?.daily?.weathercode[0] == 45 || data?.daily?.weathercode[0] == 48) && (<p>Foggy</p>)}
                {(data?.daily?.weathercode[0] == 0 || data?.daily?.weathercode[0] == 1) && (<p>Clear Sky</p>)}
                {(data?.daily?.weathercode[0] == 95 || data?.daily?.weathercode[0] == 96 || data?.daily?.weathercode[0] == 99) && (<p>ThunderStorm</p>)}
                {(data?.daily?.weathercode[0] == 61 || data?.daily?.weathercode[0] == 63 || data?.daily?.weathercode[0] == 65 || data?.daily?.weathercode[0] == 66 || data?.daily?.weathercode[0] == 67 || data?.daily?.weathercode[0] == 80 || data?.daily?.weathercode[0] == 81 || data?.daily?.weathercode[0] == 82) && (<p>Rainy</p>)}
                {(data?.daily?.weathercode[0] == 71 || data?.daily?.weathercode[0] == 73 || data?.daily?.weathercode[0] == 75 || data?.daily?.weathercode[0] == 77 || data?.daily?.weathercode[0] == 85 || data?.daily?.weathercode[0] == 86) && (<p>Snow</p>)}
                {(data?.daily?.weathercode[0] == 3 || data?.daily?.weathercode[0] == 2 || data?.daily?.weathercode[0] == 99) && (<p>Cloudy</p>)}
                {(data?.daily?.weathercode[0] == 51 || data?.daily?.weathercode[0] == 53 || data?.daily?.weathercode[0] == 55 || data?.daily?.weathercode[0] == 56 || data?.daily?.weathercode[0] == 57) && (<p>Drizzle</p>)}
            </div>
            <div className="weather-image">
            {(data?.daily?.weathercode[0] == 45 || data?.daily?.weathercode[0] == 48) && (<LottieAnimation data={fog}/>)}
                {(data?.daily?.weathercode[0] == 0 || data?.daily?.weathercode[0] == 1) && (<LottieAnimation data={clear}/>)}
                {(data?.daily?.weathercode[0] == 51 || data?.daily?.weathercode[0] == 53 || data?.daily?.weathercode[0] == 55 || data?.daily?.weathercode[0] == 56 || data?.daily?.weathercode[0] == 57) && (<LottieAnimation data={drizzle}/>)}
                {(data?.daily?.weathercode[0] == 95 || data?.daily?.weathercode[0] == 96 || data?.daily?.weathercode[0] == 99) && (<LottieAnimation data={thunder}/>)}
                {(data?.daily?.weathercode[0] == 61 || data?.daily?.weathercode[0] == 63 || data?.daily?.weathercode[0] == 65 || data?.daily?.weathercode[0] == 66 || data?.daily?.weathercode[0] == 67 || data?.daily?.weathercode[0] == 80 || data?.daily?.weathercode[0] == 81 || data?.daily?.weathercode[0] == 82) && (<LottieAnimation data={rain}/>)}
                {(data?.daily?.weathercode[0] == 71 || data?.daily?.weathercode[0] == 73 || data?.daily?.weathercode[0] == 75 || data?.daily?.weathercode[0] == 77 || data?.daily?.weathercode[0] == 85 || data?.daily?.weathercode[0] == 86) && (<LottieAnimation data={snow}/>)}
                {(data?.daily?.weathercode[0] == 3 || data?.daily?.weathercode[0] == 2 || data?.daily?.weathercode[0] == 99) && (<LottieAnimation data={cloud}/>)}
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
        weathercode: state?.weather?.data?.daily?.weathercode
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
       
    };
  };
export default connect(mapStoreToProps, mapDispatchToProps)(Body);