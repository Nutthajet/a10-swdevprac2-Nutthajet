import DateReserve from "@/components/DateReserve";
import { TextField, Button, Select, FormControl, MenuItem, InputLabel, Link } from "@mui/material";

export default function CardDetailPage(){
    return (
        <main className="bg-white min-h-screen p-8 text-slate-900 text-center flex justify-center">            
            <form className="flex flex-col space-y-8 w-[300px]">
                <TextField
                    name="Name-Lastname"
                    label="Name-Lastname"
                    variant="standard"
                />

                <TextField
                    name="Contact-Number"
                    label="Contact-Number"
                    variant="standard"
                />

                <FormControl variant="standard">
                    <InputLabel>Venue</InputLabel>
                    <Select id="venue">
                        <MenuItem value="Bloom">
                            The Bloom Pavilion
                        </MenuItem>

                        <MenuItem value="Spark">
                            Spark Space
                        </MenuItem>

                        <MenuItem value="GrandTable">
                            The Grand Table
                        </MenuItem>
                    </Select>
                </FormControl>

                <DateReserve onDateChange={() => {}} />

                <Link href={'/booking'}>
                    <Button variant="contained" name="Book Venue">
                        Book Venue
                    </Button>
                </Link>
            </form>
        </main>
    );
}
