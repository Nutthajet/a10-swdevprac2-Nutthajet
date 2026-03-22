"use client"

import DateReserve from "@/components/DateReserve";
import { TextField, Button, Select, FormControl, MenuItem, InputLabel } from "@mui/material";

import { useState } from "react"
import dayjs, { Dayjs } from "dayjs"

import { AppDispatch } from "@/redux/store"
import { useDispatch } from "react-redux";

import { addBooking } from "@/redux/features/bookSlice";
import { BookingItem } from "../../../interfaces";

export default function Booking(){
    const dispatch = useDispatch<AppDispatch>()
    const [name, setName] = useState<string>("")
    const [tel, setTel] = useState<string>("")
    const [venue, setVenue] = useState<string>("")
    const [bookDate, setBookDate] = useState<Dayjs | null>(null)

    const makeBooking = () => {
        if (name && tel && venue && bookDate){
            const item:BookingItem = {
                nameLastname: name,
                tel: tel,
                venue: venue,
                bookDate: dayjs(bookDate).format("YYYY/MM/DD")
            }
            dispatch(addBooking(item))
        }
    }
    return (
        <main className="w-full min-h-screen flex flex-col items-center space-y-8 bg-white">
            <div className="text-4xl font-bold text-gray-800 mt-8 mb-6">
                Venue Booking
            </div>

            <form className="flex flex-col space-y-8 w-[300px]">
                <TextField
                    name="Name-Lastname"
                    label="Name-Lastname"
                    variant="standard"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <TextField
                    name="Contact-Number"
                    label="Contact-Number"
                    variant="standard"
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
                />

                <FormControl variant="standard">
                    <InputLabel>Venue</InputLabel>
                    <Select 
                        value={venue}
                        onChange={(e) => setVenue(e.target.value)}
                    >
                        <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                        <MenuItem value="Spark">Spark Space</MenuItem>
                        <MenuItem value="GrandTable">The Grand Table</MenuItem>
                    </Select>
                </FormControl>

                <DateReserve onDateChange={(value: Dayjs) => { setBookDate(value) }} />

                <Button 
                    variant="contained" 
                    onClick={makeBooking}
                >
                    Book Venue
                </Button>
            </form>

            
        </main>
    );
}