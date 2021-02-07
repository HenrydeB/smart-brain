import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './logo.css';

const Logo = () => {
return (
   <div className='ma4 mt0'>
    <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
 <div className="Tilt-inner pa3"> <img style={{paddingTop: '5px'}} alt='logo' src={brain}/></div>
</Tilt>
   </div>
);

}

export default Logo;

//attribute artist Icons made by <a href="https://www.flaticon.com/authors/icongeek26" 
//title="Icongeek26">Icongeek26</a> from <a href="https://www.flaticon.com/" title="Flaticon">
// www.flaticon.com</a>