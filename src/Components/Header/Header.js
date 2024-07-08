import './Header.css'
import image from '../../Assets/Home.png'
import {IoLocationSharp} from 'react-icons/io5';
import {MdChevronRight} from 'react-icons/md'
import {FiSearch} from 'react-icons/fi'
import { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchweather } from '../../Redux/Weather/WeatherAction';
import { useEffect } from 'react';
const Header = ({location, fetchweather, setlocation}) => {
    const [show, setShow] = useState(false)
    const [locations, setLocation] = useState('');
    const [coordinates, setCoordinates] = useState(null);
    const [results, setResults] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const OPEN_CAGE_API_KEY = '00345a580957423781c5478720584a68';
    const searchStyle = {
        visibility: "visible",
        marginLeft: '0px',
        transition: "0.2s ease-in-out"
    }
    const handleSearch = async () => {
        try {
          const response = await axios.get(
            `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(locations)}&key=${OPEN_CAGE_API_KEY}`
          );
    
          const { results: geocodingResults } = response.data;
    
          if (geocodingResults && geocodingResults.length > 0) {
            setResults(geocodingResults);
          } else {
            console.error('Location not found');
            setResults([]);
          }
        } catch (error) {
          console.error('Error fetching location data', error);
          setResults([]);
        }
      };
    //   console.log(results)
    if(coordinates != null){
        console.log(coordinates)
        if(coordinates.lat != null && coordinates.lng != null){
            fetchweather(coordinates.lat, coordinates.lng)
        }
    }
    const handleLocationSelect = (selectedResult) => {
        setSelectedLocation(selectedResult);
        console.log(selectedLocation)
        if(selectedLocation!= null){
            setCoordinates(selectedLocation.geometry)
            setlocation(selectedLocation.components.state)
        }
    };
    console.log(selectedLocation)
    return ( 
        <div className="header">
            <div className="header-location">
                <IoLocationSharp/>
                <p className='location'>{location}</p>
                <MdChevronRight onClick={()=>{setShow(!show)}}/>
                {show && (
                    <div className='header-inner'>
                        <div className="search" >
                            <input 
                                type='text' 
                                placeholder='search a location'
                                onChange={(e) => {setLocation(e.target.value);}}
                                onBlur={handleSearch}
                            >
                            </input>
                            <FiSearch onClick={handleSearch}/>
                        </div>
                        {results.length > 0 && (
                            <div className='search-locations'>
                                {results.map((result, index) => (
                                    <p onClick={()=>{handleLocationSelect(result)}}>
                                        {result.formatted}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
            <div className="header-mobile">
                <img src={image}></img>
            </div>
        </div>
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

export default connect(mapStoreToProps, mapDispatchToProps)(Header);
