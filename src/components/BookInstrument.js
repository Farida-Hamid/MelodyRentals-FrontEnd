import DatePicker from 'react-datepicker';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { reserveInstrument } from '../api/api';

const BookInstrument = ({ id }) => {
  const { user_id: userId } = JSON.parse(localStorage.getItem('user'));
  const instrumentId = id;
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const dispatch = useDispatch();
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const bookInstrument = (event) => {
    event.preventDefault();
    const reservation = {};
    reservation.user_id = userId;
    reservation.instrument_id = instrumentId;
    reservation.pickup_date = startDate;
    reservation.return_date = endDate;
    dispatch(reserveInstrument(reservation));
  };

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
      <button
        type="button"
        className="btn btn-primary"
        onSubmit={bookInstrument}
      >
        Book
      </button>
    </>
  );
};

export default BookInstrument;
