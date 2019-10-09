import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Booking extends Component {

    render() {

        if (this.props.location.data != null) {
            var seat = JSON.parse(this.props.location.data)
            return (
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td>Seat Number : </td>
                                <td>{seat.seatNumber}</td>
                            </tr>
                            <tr>
                                <td>Price: </td>
                                <td>{seat.price}</td>
                            </tr>
                            <tr>
                                <td>Available :</td>
                                <td>{seat.available ? 'Yes' : 'No'}</td>
                            </tr>
                            <tr>
                                <td>Disability Access : </td>
                                <td>{seat.disabilityAccessible ? 'Yes' : 'No'}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        }else{

           return <Link to="/">
                Return Home
            </Link>
        }



    }
};
