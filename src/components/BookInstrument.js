import DatePicker from "react-datepicker";
import {useState} from 'react';
import {addInstrument, reserveInstrument} from "../api/api";
import {useDispatch} from "react-redux";

const BookInstrument = (props) => {
    const user_id = JSON.parse(localStorage.getItem('user')).user_id;
    const instrument_id = props.id;
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const dispatch = useDispatch();
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    const bookInstrument = () => {
        event.preventDefault();
        const reservation = {};
        reservation.user_id = user_id;
        reservation.instrument_id = instrument_id;
        reservation.pickup_date = startDate;
        reservation.return_date = endDate;
        dispatch(reserveInstrument(reservation));
    }

    return (
        <>
            <DatePicker
                selected={startDate}
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                inline
            />
            <button className="btn btn-primary" onSubmit={bookInstrument}>Book</button>
        </>
    );
};

export default BookInstrument;
