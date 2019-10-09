import { redCst } from '../constants/actionTypes';

const initialState = { isLoading: true, error: null, seats: null,seat:null };

export default function bookReducer(state = initialState, action) {
    switch (action.type) {
        case redCst.BOOK_REQUEST:
            return {
                isLoading: true,
            };
        case redCst.BOOK_SUCCESS:
            return {
                isLoading: false,
                seats: action.seats
            };
        case redCst.BOOK_FAILURE:
            return {
                isLoading: false,
                error: action.error
            };
        case redCst.BOOK_SEAT_SUCCESS:
                return {
                    isLoading: false,
                    seat: action.seat
                };
        default:
            return state
    }
};