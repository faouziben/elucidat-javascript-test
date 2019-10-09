/* eslint-disable no-useless-constructor */
import React from 'react'
import Seat from './Seat'
const SIZE_OF_ROW = 5;
export default class SeatList extends React.PureComponent {

  render() {
    var arr = this.props.seats;

    var chunks = [],i = 0;
    if(arr !=null)
    {
      while (i < arr.length) {
        chunks.push(arr.slice(i, i += SIZE_OF_ROW));
      }
    }
   
    console.log(chunks);
    return (
      <table>
        <tbody>
        {
          chunks.map((subArr, c) =>
            <tr>
              {
                subArr.map((seat, d) =>
                  <Seat key={seat.seatNumber} seat={seat} />
                )
              }
            </tr>
          )
        }
        </tbody>
      </table>
    );
  }
};



