"use client"

import { useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { removeBooking } from "@/redux/features/bookSlice";
import { AppDispatch } from "@/redux/store";

export default function BookingList() {
    const bookItems = useAppSelector((state) => state.bookSlice.bookItems);
    const dispatch = useDispatch<AppDispatch>();

    if (bookItems.length === 0) {
        return (
            <div className="text-center text-xl font-semibold mt-10">
                No Venue Booking
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center w-full space-y-4 p-5">
            {bookItems.map((BookingItem:any) => (
                <div 
                    key={BookingItem.bookDate} 
                    className="bg-gray-100 rounded-lg p-4 w-full max-w-md shadow-sm relative"
                >
                    <div className="text-lg font-bold">{BookingItem.nameLastname}</div>
                    <div className="text-sm text-gray-600">Tel: {BookingItem.tel}</div>
                    <div className="text-sm text-gray-600">Venue: {BookingItem.venue}</div>
                    <div className="text-sm text-gray-600 font-medium">Date: {BookingItem.bookDate}</div>
                    
                    <button
                        onClick={() => dispatch(removeBooking(BookingItem))}
                        className="mt-4 bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded-md text-sm transition"
                    >
                        Remove Booking
                    </button>
                </div>
            ))}
        </div>
    );
}