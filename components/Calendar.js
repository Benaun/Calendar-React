
import CalendarList from './CalendarList';
import DateInput from './DateInput';
import { useState } from 'react';

export default function Calendar() {
    const [newDate, setNewDate] = useState('');
  
    function handleDateChange(date){
        setNewDate(date);
    };
  
    return (
      <div className='flex flex-col justify-center items-center mt-20'>
        <h1 className="mb-5 text-[50px] font-[700]">Календарь</h1>
        <DateInput onChange={handleDateChange} />
        {newDate && (
          <CalendarList
            month={new Date(newDate).getMonth()}
            year={new Date(newDate).getFullYear()}
          />
        )}
      </div>
    );
  };