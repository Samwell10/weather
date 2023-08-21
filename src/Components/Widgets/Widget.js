import './Widget.css';
import Slider from 'react-slick'
import {IoMdPartlySunny} from 'react-icons/io'
import {FaWind} from 'react-icons/fa6'
import {PiThermometerSimple} from 'react-icons/pi'
import { IoLocationSharp, IoThunderstormSharp } from 'react-icons/io5';
import {RiCompass3Fill} from 'react-icons/ri'
import {IoMdSettings} from 'react-icons/io'
import {ImDroplet} from 'react-icons/im'
import {BsFillSunFill} from 'react-icons/bs'
import image from '../../Assets/Home.png'
import sunny from '../../Assets/sunny.jpeg';
import cloudy from '../../Assets/cloudy.jpg';
import rainy from '../../Assets/rainy.jpg';
import snow from '../../Assets/snow1.jpg';
import thunder from '../../Assets/thunder.jpg';
import background from '../../Assets/background1.jpeg';
import { MdColorLens, MdPhoto } from 'react-icons/md';

const Widgets = ({change, change2}) => {

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
                    <div className="day-weather">
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
                    </div>
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
                                30°
                            </p>
                        </div>
                        <div className="condition">
                            <div className="condition-title">
                                <FaWind/>
                                <p>Wind</p>
                            </div>
                            <p className="condition-value">
                                0.8 km/hr
                            </p>
                        </div>
                        <div className="condition">
                            <div className="condition-title">
                                <ImDroplet/>
                                <p>Chance of rain</p>
                            </div>
                            <p className="condition-value">
                                2%
                            </p>
                        </div>
                        <div className="condition">
                            <div className="condition-title">
                                <BsFillSunFill/>
                                <p>UV Index</p>
                            </div>
                            <p className="condition-value">
                                4
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
 
export default Widgets;