import './Widget.css';
import Slider from 'react-slick'
import {IoMdPartlySunny} from 'react-icons/io'
import {FaWind} from 'react-icons/fa6'
import {PiThermometerSimple} from 'react-icons/pi'
import { IoLocationSharp, IoThunderstormSharp } from 'react-icons/io5';
import {RiCompass3Fill, RiDrizzleFill} from 'react-icons/ri'
import {IoMdSettings} from 'react-icons/io'
import {ImDroplet} from 'react-icons/im'
import {BsCloudRainFill, BsFillCloudFog2Fill, BsFillCloudHazeFill, BsFillCloudLightningRainFill, BsFillCloudSnowFill, BsFillCloudSunFill, BsFillSunFill} from 'react-icons/bs'
import image from '../../Assets/Home.png'
import sunny from '../../Assets/sunny.jpeg';
import cloudy from '../../Assets/cloudy.jpg';
import rainy from '../../Assets/rainy.jpg';
import snow from '../../Assets/snow1.jpg';
import thunder from '../../Assets/thunder.jpg';
import background from '../../Assets/background1.jpeg';
import { MdColorLens, MdPhoto } from 'react-icons/md';
import { connect } from 'react-redux';

const Widgets = ({change, change2, data}) => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const convertedData = data?.daily?.time.map((dateString, index) => {
        const date = new Date(dateString);
        const dayOfWeek = daysOfWeek[date.getDay()];
        const temperature = data?.daily?.weathercode[index];
    
        return { dayOfWeek, temperature };
      });
    return ( 
        <div className="widgets">
            <div className="nav-menu">
                <div className="profile">
                    <img src={image}></img>
                </div>
                <div className="profile-icons">
                    <div className="icons">
                        <IoMdPartlySunny/>
                        <p>Weather</p>
                    </div>
                    <div className="icons">
                        <RiCompass3Fill/>
                        <p>Explore</p>
                    </div>
                    <div className="icons">
                        <IoLocationSharp/>
                        <p>Weather</p>
                    </div>
                    <div className="icons icons2">
                        <IoMdSettings/>
                        <p>Settings</p>
                    </div>
                </div>
            </div>
            <div className="forecast">
                {/* <Slider> */}
                {convertedData.map((data, index) => (
                
                        <div key={index} className="day-weather">
                            <p>{data.dayOfWeek}</p>
                            {(data.temperature == 45 || data.temperature == 48) && (<BsFillCloudFog2Fill/>)}
                            {(data.temperature == 0 || data.temperature == 1) && (<BsFillCloudSunFill/>)}
                            {(data.temperature == 95 || data.temperature == 96 || data.temperature == 99) && (<BsFillCloudLightningRainFill/>)}
                            {(data.temperature == 61 || data.temperature == 63 || data.temperature == 65 || data.temperature == 66 || data.temperature == 67 || data.temperature == 80 || data.temperature == 81 || data.temperature == 82) && (<BsCloudRainFill/>)}
                            {(data.temperature == 71 || data.temperature == 73 || data.temperature == 75 || data.temperature == 77 || data.temperature == 85 || data.temperature == 86) && (<BsFillCloudSnowFill/>)}
                            {(data.temperature == 3 || data.temperature == 2 || data.temperature == 99) && (<BsFillCloudHazeFill/>)}
                            {(data.temperature == 51 || data.temperature == 53 || data.temperature == 55 || data.temperature == 56 || data.temperature == 57) && (<RiDrizzleFill/>)}
                        </div>
                   
                ))}
                    {/* <div className="day-weather">
                        <p>Mon</p>
                        <IoThunderstormSharp/>
                    </div>
                    <div className="day-weather">
                        <p>Tue</p>
                        <IoThunderstormSharp/>
                    </div>
                    <div className="day-weather">
                        <p>Wed</p>
                        <IoThunderstormSharp/>
                    </div>
                    <div className="day-weather">
                        <p>Thu</p>
                        <IoThunderstormSharp/>
                    </div>
                    <div className="day-weather">
                        <p>Fri</p>
                        <IoThunderstormSharp/>
                    </div>
                    <div className="day-weather">
                        <p>Sat</p>
                        <IoThunderstormSharp/>
                    </div>
                    <div className="day-weather">
                        <p>Sun</p>
                        <IoThunderstormSharp/>
                    </div> */}
                {/* </Slider> */}
            </div>
            <div className="conditions">
                <div className="air-condition">
                    <p className='air-title'>AIR CONDITIONS</p>
                    <div className="condition-inner">
                        <div className="condition">
                            <div className="condition-title">
                                <PiThermometerSimple/>
                                <p>Real Feel</p>
                            </div>
                            <p className="condition-value">
                                {data?.daily?.temperature_2m_max[0]}°
                            </p>
                        </div>
                        <div className="condition">
                            <div className="condition-title">
                                <FaWind/>
                                <p>Wind</p>
                            </div>
                            <p className="condition-value">
                                {data?.daily?.windspeed_10m_max[0]}km/hr
                            </p>
                        </div>
                        <div className="condition">
                            <div className="condition-title">
                                <ImDroplet/>
                                <p>Shortwave Radiation</p>
                            </div>
                            <p className="condition-value">
                                {data?.daily?.shortwave_radiation_sum[0]}MJ/m²
                            </p>
                        </div>
                        <div className="condition">
                            <div className="condition-title">
                                <BsFillSunFill/>
                                <p>UV Index</p>
                            </div>
                            <p className="condition-value">
                               {data?.daily?.uv_index_max[0]}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="activites">
                <div className="color-change">
                    <p className='background'><MdColorLens/>Change Background Color</p>
                    <div className="background-colors">
                        <div className='color-image colors-1' onClick={()=>{change2("#D69E36")}}>
                            
                        </div>
                        <div className='color-image colors-2' onClick={()=>{change2("#6c64fb")}}>
                            
                        </div>
                        <div className='color-image colors-3' onClick={()=>{change2("#748cf1")}}>
                           
                        </div>
                        <div className='color-image colors-4' onClick={()=>{change2("#24142c")}}>
                            
                        </div>
                        <div className='color-image colors-5' onClick={()=>{change2("#9e616b")}}>
                           
                        </div>   
                        <div className='color-image colors-6' onClick={()=>{change2("#abaed3")}}>
                           
                        </div>
                        <div className='color-image colors-7' onClick={()=>{change2("#3e3b51")}}>
                           
                        </div>  
                        <div className='color-image colors-8' onClick={()=>{change2("#094479")}}>
                           
                        </div>   
                        <div className='color-image colors-9' onClick={()=>{change2("#841a1c")}}>
                           
                        </div>
                        <div className='color-image colors-10' onClick={()=>{change2("#ec3e70")}}>
                           
                        </div>  
                    </div>
                </div>
                <div className="background-change">
                    <p className='background'><MdPhoto/>Change Background Image</p>
                    <div className="background-images">
                        <div className='background-image'>
                            <img src={sunny} onClick={()=>{change(sunny)}}></img>
                            <p>Sunny</p>
                        </div>
                        <div className='background-image'>
                            <img src={cloudy} onClick={()=>{change(cloudy)}}></img>
                            <p>Cloudy</p>
                        </div>
                        <div className='background-image'>
                            <img src={rainy} onClick={()=>{change(rainy)}}></img>
                            <p>Rainy</p>
                        </div>
                        <div className='background-image'>
                            <img src={thunder} onClick={()=>{change(thunder)}}></img>
                            <p>Thunder</p>
                        </div>
                        <div className='background-image'>
                            <img src={snow} onClick={()=>{change(snow)}}></img>
                            <p>Snow</p>
                        </div>   
                    </div>
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
export default connect(mapStoreToProps, mapDispatchToProps)(Widgets);