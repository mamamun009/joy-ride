import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import rideOption from '../../fakeData';
import RideOption from '../rideOption/RideOption';
const Home = () => {
    const data = rideOption
    return (
        <div className="container">
            <div className="row">
                {
                    data.map(data => <RideOption 
                        key={data.vehicle}
                        data={data}
                    ></RideOption>)
                }
            </div>
        </div>
    );
};

export default Home;