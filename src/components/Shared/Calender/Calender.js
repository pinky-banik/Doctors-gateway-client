import * as React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import CalendarPicker from '@mui/lab/CalendarPicker';

export default function Calender({date,setDate}) {
  
 
  return (
   <div >
      <LocalizationProvider  dateAdapter={AdapterDateFns}>
          <CalendarPicker className='bg-white shadow rounded' date={date} onChange={(newDate) => setDate(newDate)} />
    </LocalizationProvider>
   </div>
  );
}
