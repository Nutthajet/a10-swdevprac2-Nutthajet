import BookingList from "@/components/BookingList";

export default function MyBookingPage() {
    return (
        <main className="p-5">
            <h1 className="text-2xl font-bold text-center my-8 text-gray-800">
                Your Current Bookings
            </h1>
            
            <BookingList />
        </main>
    );
}