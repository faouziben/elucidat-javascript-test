/* eslint-disable no-useless-constructor */
import React from 'react'
import Seat from './Seat'

export default class SeatGrid extends React.PureComponent {
  render() {
    var arr = this.props.seats;
    return (
      <div>
        {
          arr.map((seat, i) =>
             <Seat key={i} seat={seat} />
          )
        }
      </div>
    );
  }
};



