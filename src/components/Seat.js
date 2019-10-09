import React from 'react';
import Proptypes from 'prop-types';
import seatImg from '../images/seat.png'
import { Link } from 'react-router-dom';

const Seat = (props) => {
    const { seat } = props;
    return (
        <td >
            <Link to={{
                pathname: "/booking",
                data: JSON.stringify(seat) }}>
                <div className="container">
                    <img src={seatImg} alt="seat" style={{ width: "30%" }} />
                    <div className="centered"> {seat.seatNumber}</div>
                </div>
            </Link>
        </td>
    );
};

Seat.prototype = {
    seat: Proptypes.shape({
        seatNumber: Proptypes.string,
        price: Proptypes.string,
        available: Proptypes.bool,
        disabilityAccessible: Proptypes.bool
    })
}

export default Seat;
