import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './rideOption.css'
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
const RideOption = (props) => {
    const { vehicle, img } = props.data
    return (
        <>
        <div className="col-md-3">
            <Link to={"/rideType/" + vehicle}>
                <div className="card">
                    <img src={img} alt="vehiclePhoto" />
                    <h4>{vehicle}</h4>
                </div>
            </Link>
        </div>
        </>
    );
};

export default RideOption;