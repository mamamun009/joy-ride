import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, TextField } from '@material-ui/core';
import './rideLocation.css'
import { useState } from 'react';
import { useParams } from 'react-router';
import rideOption from '../../fakeData';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

const RideLocation = () => {
    const vehicleType = useParams();
    const selectedVehicle = rideOption.find(dat => dat.vehicle === vehicleType.selectedVehicle);
    const { vehicle, seat, ticketPrice, img } = selectedVehicle;
    const [isProceed, setIsProceed] = useState(false)
    const [locationFrom, setLocationFrom] = useState('')
    const [locationTo, setLocationTo] = useState('')
    const handleBlur = (e) => {
        if (e.target.name === 'from') {
            setLocationFrom(e.target.value)
        }
        if (e.target.name === 'to') {
            setLocationTo(e.target.value)
        }
    }
    return (
        <div className="container">
            <div className="row mt-5">
                {
                    isProceed ? <>
                        <div className="locationInfo w-100 col-md-5 col-xs-12">
                            <form className='location'>
                                <div className="selectedLocation">
                                    <Timeline className='locationFromTO'>
                                        <TimelineItem>
                                            <TimelineSeparator>
                                                <TimelineDot />
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent>{locationFrom}</TimelineContent>
                                        </TimelineItem>
                                        <TimelineItem>
                                            <TimelineSeparator>
                                                <TimelineDot />
                                            </TimelineSeparator>
                                            <TimelineContent>{locationTo}</TimelineContent>
                                        </TimelineItem>
                                    </Timeline>
                                </div>
                                <div className="vehicleType">
                                    <img src={img} alt="img" />
                                    <p>{vehicle}</p>
                                    <img style={{ width: '30px', height: '40px', margin: '7px' }} src="https://i.pinimg.com/originals/d1/f3/cc/d1f3ccc7e836617fb6e5db7fed1ae90b.png" alt="" />
                                    <p>{seat}</p>
                                    <p>${ticketPrice} Each</p>
                                </div>
                                <div className="vehicleType">
                                    <img src={img} alt="img" />
                                    <p>{vehicle}</p>
                                    <img style={{ width: '30px', height: '40px', margin: '7px' }} src="https://i.pinimg.com/originals/d1/f3/cc/d1f3ccc7e836617fb6e5db7fed1ae90b.png" alt="" />
                                    <p>{seat}</p>
                                    <p>${ticketPrice} Each</p>
                                </div>
                                <div className="vehicleType">
                                    <img src={img} alt="img" />
                                    <p>{vehicle}</p>
                                    <img style={{ width: '30px', height: '40px', margin: '7px' }} src="https://i.pinimg.com/originals/d1/f3/cc/d1f3ccc7e836617fb6e5db7fed1ae90b.png" alt="" />
                                    <p>{seat}</p>
                                    <p>${ticketPrice} Each</p>
                                </div>
                            </form>
                        </div>
                    </>
                        : <>
                            <div className="locationInfo w-100 col-md-5 col-xs-12">
                                <form className='location'>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        label="From"
                                        name="from"
                                        autoFocus
                                        onBlur={handleBlur}
                                    />
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        label="To"
                                        name="to"
                                        onBlur={handleBlur}
                                    />
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        type="date"
                                    />
                                    <Button  fullWidth variant="contained" color="secondary" onClick={() => setIsProceed(!isProceed)}>Search</Button>
                                </form>
                            </div>
                        </>

                }
                <div className="map ml-5 w-100 col-md-5">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.82239749032!2d90.2792398547864!3d23.780887453399945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1616278306740!5m2!1sen!2sbd"
                        width="600px" height="450px" style={{ borderRadius: '20px' }} allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    );
};
export default RideLocation;