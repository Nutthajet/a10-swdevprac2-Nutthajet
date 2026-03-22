//import CardPanel from "@/components/CardPanel"
import getVenues from "@/libs/getVenues"
import VenueCatalog from "@/components/VenueCatalog"

export default async function Venue(){
    const venues = await getVenues()
    return (
        <main className = "min-h-screen w-full flex flex-col bg-slate-50 text-slate-900">
            <div className="!mt-10 !mb-10">
                <h1 className="text-center text-3xl font-semibold text-cyan-800 mb-2">
                    Select your Venue
                </h1>
                <p className="text-center text-lg text-cyan-800">
                    Explore 3 fabulous venues in our venue catalog
                </p>
            </div>
            <VenueCatalog venuesJson={venues}/>
        </main>
    )
}