import { redCst } from '../constants/actionTypes';
import { seatService } from '../services/seat';

export const bookActions = {
    getAllSeats,
    getSeatDetails
};

function request() {
    return {
        type: redCst.BOOK_REQUEST
    }
}
function success(seats) {
    return {
        type: redCst.BOOK_SUCCESS,
        seats
    }
}
function failure(error) {
    return {
        type: redCst.BOOK_FAILURE,
        error
    }
}

function selectedSeat(seat) {
    return {
        type: redCst.BOOK_SEAT_SUCCESS,
        seat
    }
}


// ============== Thunk ===============

function getAllSeats() {

    return dispatch => {
        dispatch(request());
        seatService.getAllSeats()
            .then((seats) => {
                dispatch(success(seats));
            })
            .catch((error) => {
                dispatch(failure(error));
            });

    };
}

function getSeatDetails(seat) {
    selectedSeat(seat);
}
