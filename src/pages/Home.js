import React from 'react'
import SeatList from '../components/SeatList';
import { connect } from 'react-redux';
import {bookActions} from '../_actions/bookAction'


class Home extends React.Component {

    componentDidMount() {        
        this.props.dispatch(bookActions.getAllSeats());
    }
    render() {

        if (!this.props.isLoading) {
            return (
                <div>
                    <i>Please select the seat you want to book.</i>
                    <br/><br/>

                    <SeatList seats={this.props.seats} />
                </div>
            );
        } else {
            return <center><i className="fas fa-spinner fa-spin"></i></center>
        }
    }
}

function mapStateToProps(state) {
    const { isLoading, error, seats } = state.bookReducer;
    return {
        isLoading,
        error,
        seats
    };
  }
export default connect(mapStateToProps)(Home);
