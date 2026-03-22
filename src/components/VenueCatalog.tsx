import Link from "next/link";
import ProductCard from "./Card";

export default function VenueCatalog({venuesJson}:{venuesJson:VenueJson}){
    return (
        <main>
            <div className="!mb-10 flex flex-row flex-wrap justify-around content-around gap-y-10">
                {
                    venuesJson.data.map((cardItem: VenueItem) => (
                        <Link href={`/venue/${cardItem._id}`} key={cardItem._id} className="w-1/5" >
                            <ProductCard 
                                venueName={cardItem.name} 
                                imgSrc={cardItem.picture} 
                                key={cardItem._id}
                            />
                        </Link>
                    ))
                }
            </div>
        </main>
        
    );
}