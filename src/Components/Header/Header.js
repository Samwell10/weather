import './Header.css'
import image from '../../Assets/Home.png'
import {IoLocationSharp} from 'react-icons/io5';
import {MdChevronRight} from 'react-icons/md'
const Header = ({location}) => {
    return ( 
        <div className="header">
            <div className="header-location">
                <IoLocationSharp/>
                <p className='location'>{location}</p>
                <MdChevronRight/>
            </div>
            <div className="header-mobile">
                <img src={image}></img>
            </div>
        </div>
    );
}
 
export default Header;
