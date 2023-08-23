import Body from '../Components/Body/Body';
import Header from '../Components/Header/Header';
import Widgets from '../Components/Widgets/Widget';
import sunny from '../Assets/sunny.jpeg';
import cloudy from '../Assets/cloudy.jpg';
import rainy from '../Assets/rainy.jpg';
import snow from '../Assets/snow1.jpg';
import thunder from '../Assets/thunder.jpg';
import load from '../Assets/loading.json'
import './Main.css'
import { useEffect, useState } from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
import { fetchweather } from '../Redux/Weather/WeatherAction';
import LottieAnimation from '../Lotties';
import { LottieAnimation2 } from '../Lotties';
const Main = ({fetchweather, loading}) => {
    const [background, setBackground] = useState(''); // State to store the selected background
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [locationName, setLocationName] = useState('');
    const handleImageClick = (imageUrl) => {
      setBackground(`url(${imageUrl}) no-repeat center/cover`);
    };
  
    const handleColorClick = (color) => {
      setBackground(color);
    };
    useEffect(() => {
         // Get user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);

          // Reverse geocoding using Nominatim API
          const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`;
          try {
            const response = await axios.get(apiUrl);
            const { address } = response.data;
            setLocationName(`${address.state}`);
          } catch (error) {
            console.error('Error getting location:', error);
          }
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
    }, []);
  
    useEffect(()=>{
      if(latitude != null && longitude != null){
        fetchweather(latitude, longitude)
      }
    },[latitude, longitude])
    return ( 
      <>
        {loading ? (
          <div className="preloader">
            <LottieAnimation2 data={load}/>
            <p>Enable Location......</p>
          </div>
        ) : (
          <div className="main" style={{background}}>
            <Header location={locationName}/>
            <Body/>
            <Widgets change={handleImageClick} change2={handleColorClick}/>
        </div>
        )}
      </>
    );
}
const mapStoreToProps = (state) => {
  // 
  return {
    loading: state.weather.loading  
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      fetchweather: (lat, long) => dispatch(fetchweather(lat, long)),
  };
};

export default connect(mapStoreToProps, mapDispatchToProps)(Main);