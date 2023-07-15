import { useState } from 'react';
import './index.scss'

const Home = () => {

  const[worldstats,setWorldstats]=useState([])
  return <div>
    <div className='world-map'>
    <img className="map"
          src="https://www.bloomberg.com/graphics/2020-coronavirus-cases-world-map/img/2020-coronavirus-cases-world-map-facebook.png?t=202011091543"
          alt="2020-coronavirus-cases-world-map-facebook.png"
          border="0"></img>
    </div>
    <h1 className='worldStats'>World stats</h1>
    <div className='card_statistics'>
      {/* ovde statistike/karte */}
    </div>
  </div>;
};

export default Home;
