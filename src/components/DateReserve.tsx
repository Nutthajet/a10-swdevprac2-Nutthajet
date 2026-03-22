"use client"

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from "dayjs"
import { useState } from 'react';

export default function DateReserve({onDateChange}
    :{onDateChange:Function}) {
  
    const [bookDate, setBookDate] = useState<Dayjs|null>(null)
  
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
        value={bookDate}
        onChange={(value)=>{setBookDate(value); onDateChange(value)}}
        />
      </LocalizationProvider>
    );
}